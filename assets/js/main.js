// ================= HERO MENU TOGGLE =================
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

document.addEventListener("DOMContentLoaded", function () {
  const roomButtons = document.querySelectorAll(".schedule__room-btn");
  const roomContents = document.querySelectorAll(".schedule__room-content");

  roomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const roomId = button.getAttribute("data-room");

      // Toggle active class on buttons
      roomButtons.forEach((btn) =>
        btn.classList.remove("schedule__room-btn--active")
      );
      button.classList.add("schedule__room-btn--active");

      // Toggle visible room content
      roomContents.forEach((content) =>
        content.classList.remove("schedule__room-content--active")
      );
      document
        .getElementById(roomId)
        .classList.add("schedule__room-content--active");
    });
  });
});

const tabs = document.querySelectorAll(".schedule__tab");
const roomButtons = document.querySelectorAll(".schedule__room-btn");
const contentSections = document.querySelectorAll(".schedule__room-content");

let activeDate = "2027-03-31";
let activeRoom = "auditorium";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Reset active states
    tabs.forEach((t) => {
      t.classList.remove("schedule__tab--active");
      t.setAttribute("aria-selected", "false");
    });

    // Set new active tab
    tab.classList.add("schedule__tab--active");
    tab.setAttribute("aria-selected", "true");

    activeDate = tab.getAttribute("data-date");
    updateContent();
  });
});

roomButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Reset active room buttons
    roomButtons.forEach((b) =>
      b.classList.remove("schedule__room-btn--active")
    );
    btn.classList.add("schedule__room-btn--active");

    activeRoom = btn.getAttribute("data-room");
    updateContent();
  });
});

function updateContent() {
  contentSections.forEach((section) => {
    const date = section.getAttribute("data-date");
    const room = section.getAttribute("data-room");

    if (date === activeDate && room === activeRoom) {
      section.classList.add("schedule__room-content--active");
    } else {
      section.classList.remove("schedule__room-content--active");
    }
  });
}
