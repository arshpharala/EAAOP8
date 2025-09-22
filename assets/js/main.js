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
});

// speaker section
$(document).ready(function () {
  // Array of speakers
  const speakers = [
    {
      name: "Yuan Chen",
      university: "The University of Sydney, Australia",
      topic: "Sustainable Carbon Catalysts for Advanced Oxidation Processes",
      image: "assets/images/speaker.png",
    },
    {
      name: "Alice Johnson",
      university: "MIT, USA",
      topic: "AI and Machine Learning in Chemistry",
      image: "assets/images/speaker.png",
    },
    {
      name: "Robert Smith",
      university: "University of Cambridge, UK",
      topic: "Green Energy Innovations",
      image: "assets/images/speaker.png",
    },
    {
      name: "Maria Gonzalez",
      university: "Stanford University, USA",
      topic: "Nanotechnology in Environmental Science",
      image: "assets/images/speaker.png",
    },
    {
      name: "Lee Wong",
      university: "National University of Singapore",
      topic: "Advanced Materials for Clean Water",
      image: "assets/images/speaker.png",
    },
  ];

  let currentIndex = 0;

  // Function to render speakers
  function renderSpeakers() {
    $("#speakersCarousel").empty();
    $.each(speakers, function (index, speaker) {
      const activeClass =
        index === currentIndex ? "speaker--active" : "speaker--faded";
      $("#speakersCarousel").append(`
          <div class="speaker ${activeClass}">
            <img src="${speaker.image}" alt="${speaker.name}" />
          </div>
        `);
    });

    // Update details
    $("#speakerName").text(speakers[currentIndex].name);
    $("#speakerUniversity").text(speakers[currentIndex].university);
    $("#speakerTopic").text(speakers[currentIndex].topic);
  }

  // Navigation buttons
  $("#prevBtn").click(function () {
    currentIndex = (currentIndex - 1 + speakers.length) % speakers.length;
    renderSpeakers();
  });

  $("#nextBtn").click(function () {
    currentIndex = (currentIndex + 1) % speakers.length;
    renderSpeakers();
  });

  // Initial render
  renderSpeakers();

  // View Bio button click
  $("#viewBioBtn").click(function () {
    const speaker = speakers[currentIndex];
    $("#modalSpeakerImage").html(
      `<img src="${speaker.image}" alt="${speaker.name}" style="max-width:100%; border-radius:8px;">`
    );
    $("#modalSpeakerName").text(speaker.name);
    $("#modalSpeakerUniversity").text(speaker.university);
    $("#modalSpeakerTopic").text(speaker.topic);
    $("#modalSpeakerBio").text(speaker.bio);
    $("#speakerModal").fadeIn();
  });

  // Close modal
  $("#closeModal,#speakerModal ").click(function () {
    $("#speakerModal").fadeOut();
  });
});

// ================= Carousel Swipe Helper =================
function enableSwipe(
  carouselId,
  prevBtnId = null,
  nextBtnId = null,
  customIndicators = false
) {
  const el = document.querySelector(carouselId);
  if (!el) return;

  const instance = new bootstrap.Carousel(el);
  let startX, endX;

  // Custom buttons
  if (prevBtnId) {
    document.getElementById(prevBtnId).addEventListener("click", () => {
      instance.prev();
    });
  }
  if (nextBtnId) {
    document.getElementById(nextBtnId).addEventListener("click", () => {
      instance.next();
    });
  }

  // Mouse drag
  el.addEventListener("mousedown", (e) => (startX = e.clientX));
  el.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    if (startX - endX > 50) instance.next();
    else if (endX - startX > 50) instance.prev();
  });

  // Touch swipe
  el.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  el.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) instance.next();
    else if (endX - startX > 50) instance.prev();
  });

  // Extra: Custom indicators (for alumni)
  if (customIndicators) {
    el.addEventListener("slid.bs.carousel", function (e) {
      const index = e.to;
      document
        .querySelectorAll(".alumni-section .boxes .box")
        .forEach((box, i) => {
          box.classList.toggle("active", i === index);

          if (i === index) {
            if (!box.querySelector(".sub-box")) {
              const subBox = document.createElement("div");
              subBox.classList.add("sub-box");
              box.appendChild(subBox);
            }
          } else {
            const sub = box.querySelector(".sub-box");
            if (sub) sub.remove();
          }
        });
    });
  }

  return instance;
}

// ================= INIT CAROUSELS =================
enableSwipe("#eventsCarousel"); // Events
enableSwipe("#mediaCarousel", "mediaPrev", "mediaNext"); // Media
enableSwipe("#speakersCarousel", "speakersPrev", "speakersNext"); // Speakers
enableSwipe("#alumniCarousel", null, "alumniNext", true);
