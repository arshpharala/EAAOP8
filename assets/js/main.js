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
