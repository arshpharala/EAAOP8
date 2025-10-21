// hero menu toggle
$(document).ready(function () {
  const $mobileMenu = $("#mobileMenu");
  const $menuToggle = $("#menuToggle");
  const $closeMenu = $("#closeMenu");

  // --- Menu Open / Close ---
  const openMenu = () => $mobileMenu.addClass("active");
  const closeMenuFn = () => $mobileMenu.removeClass("active");

  // Open menu on hamburger click
  $menuToggle.on("click", openMenu);

  // Close menu on close button click
  $closeMenu.on("click", closeMenuFn);

  // Close when clicking outside (backdrop)
  $mobileMenu.on("click", function (e) {
    if (e.target === this) closeMenuFn();
  });

  // Close when clicking any nav link
  $mobileMenu.find("a").on("click", function () {
    closeMenuFn();
  });

  // --- Auto close on resize if screen > 960px ---
  function checkWindowWidth() {
    if ($(window).width() > 960) {
      closeMenuFn();
    }
  }

  // Run on load
  checkWindowWidth();

  // Run on resize
  $(window).on("resize", checkWindowWidth);
});

$(document).ready(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass("in-view");
          observer.unobserve(entry.target); // Animate only once
        }
      });
    },
    { threshold: 0.1 }
  );

  $(".animate-on-scroll").each(function () {
    observer.observe(this);
  });
});

$(document).ready(function () {
  var $nav = $("#navbar");
  var $header_logo = $("#header_logo");
  var $hero_logo = $("#hero_logo");

  // On page load → show hero logo, hide header logo
  $hero_logo.addClass("visible");
  $header_logo.removeClass("visible");

  $(window).on("scroll", function () {
    var navBottom = $nav.outerHeight();
    var logoTop = $hero_logo[0].getBoundingClientRect().top;

    // When navbar touches hero logo (scroll down)
    if (logoTop <= navBottom + 20) {
      $hero_logo.removeClass("visible");   // hide hero logo
      $header_logo.addClass("visible");    // show header logo
    } 
    // When scrolling back up
    else {
      $hero_logo.addClass("visible");      // show hero logo
      $header_logo.removeClass("visible"); // hide header logo
    }
  });
});



$(function () {
  const OFFSET = 100; // Adjust for header height
  const SCROLL_DURATION = 0;

  // --- Smooth scroll handler (only for on-page anchors)
  $(document).on("click", "a[href^='#']", function (e) {
    const targetId = $(this).attr("href");
    const target = $(targetId);

    if (target.length) {
      e.preventDefault();

      const scrollTo = target.offset().top - OFFSET;

      $("html, body").animate({ scrollTop: scrollTo });
    }
  });

  // --- Detect if current page is the index page
  const isIndexPage =
    location.pathname.endsWith("/") ||
    location.pathname.endsWith("/index.html");

  // --- Normalize anchor links if not on index page
  if (!isIndexPage) {
    const navSelector = [
      ".ku-header__nav a[href^='#']",
      ".nav-menu a[href^='#']",
      ".footer__lists a[href^='#']",
    ].join(", ");

    $(navSelector).each(function () {
      const hash = $(this).attr("href");
      $(this).attr("href", "index.html" + hash);
    });
  }

  // --- Smooth scroll after redirect (for index.html#section)
  $(window).on("load", function () {
    const hash = window.location.hash;
    if (hash && $(hash).length) {
      // Small delay ensures elements are rendered
      setTimeout(() => {
        $("html, body").animate(
          { scrollTop: $(hash).offset().top - OFFSET },
          SCROLL_DURATION,
          "swing"
        );
      }, 200);
    }
  });
});

// about secton
$(document).ready(function () {
  $(".read-more").click(function () {
    const $this = $(this);
    const $parent = $this.closest(".about-section__right__desc");

    $parent.find(".short-text").toggle();
    $parent.find(".full-text").slideToggle(300);

    if ($this.text() === "read more") {
      $this.text("read less");
    } else {
      $this.text("read more");
    }
  });
});

// tabs in program section
const tabs = document.querySelectorAll(".schedule__tab");
const rooms = document.querySelectorAll(".schedule__room-btn");
const contents = document.querySelectorAll(".schedule__room-content");

// Handle date tab switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Update active tab
    tabs.forEach((t) => {
      t.classList.remove("schedule__tab--active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("schedule__tab--active");
    tab.setAttribute("aria-selected", "true");

    const activeDate = tab.dataset.date;
    const activeRoom = document.querySelector(".schedule__room-btn--active")
      ?.dataset.room;

    // Show content only for active date + room
    contents.forEach((c) => {
      c.classList.remove("schedule__room-content--active");
      if (c.dataset.date === activeDate && c.dataset.room === activeRoom) {
        c.classList.add("schedule__room-content--active");
      }
    });
  });
});

// Handle room switching
rooms.forEach((room) => {
  room.addEventListener("click", () => {
    // Update active room button
    rooms.forEach((r) => r.classList.remove("schedule__room-btn--active"));
    room.classList.add("schedule__room-btn--active");

    const activeRoom = room.dataset.room;
    const activeDate = document.querySelector(".schedule__tab--active")?.dataset
      .date;

    // Show content only for active date + room
    contents.forEach((c) => {
      c.classList.remove("schedule__room-content--active");
      if (c.dataset.room === activeRoom && c.dataset.date === activeDate) {
        c.classList.add("schedule__room-content--active");
      }
    });
  });
});

// Helper function: Get active schedule content
function getActiveSchedule() {
  return document.querySelector(".schedule__room-content--active")?.innerHTML;
}
