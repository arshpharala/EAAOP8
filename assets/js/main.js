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

// speaker
$(document).ready(function () {
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

  let currentIndex = 2;

  // Render speakers in carousel
  function renderSpeakers() {
    $("#speakersCarousel").empty();
    $.each(speakers, function (index, speaker) {
      const activeClass =
        index === currentIndex ? "speaker--active" : "speaker--faded";
      $("#speakersCarousel").append(`
        <div class="speaker ${activeClass}" data-index="${index}">
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

  // Click on a speaker image to make active
  $(document).on("click", "#speakersCarousel .speaker", function () {
    const index = $(this).data("index");
    if (index !== undefined) {
      currentIndex = index;
      renderSpeakers();
    }
  });

  // Initial render
  renderSpeakers();

  // View Bio button click
  $("#viewBioBtn").click(function () {
    const speaker = speakers[currentIndex];
    $("#modalSpeakerImage").html(
      `<img src="${speaker.image}" alt="${speaker.name}" style="max-width:100%;height:250px; object-fit:cover">`
    );
    $("#modalSpeakerName").text(speaker.name);
    $("#modalSpeakerUniversity").text(speaker.university);
    $("#modalSpeakerTopic").text(speaker.topic);
    $("#modalSpeakerBio").text(speaker.bio || "");
    $("#speakerModal").fadeIn();
  });

  // Close modal
  $("#speakerModal").on("click", function (e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });

  // close by clicking the close button (works even if you click img inside it)
  $("#closeModal").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#speakerModal").fadeOut();
  });

  // prevent clicks inside modal content from closing the modal (safety)
  $("#speakerModal .modal-content").on("click", function (e) {
    e.stopPropagation();
  });

  // optional: allow ESC to close
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("#speakerModal").fadeOut();
    }
  });
});

// Keynote speakers
$(document).ready(function () {
  const keynoteSpeakers = [
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

  let currentIndex =2;

  // Render keynote speakers
  function renderKeynoteSpeakers() {
    const carousel = $("#keynotespeakersCarousel");
    carousel.empty();

    $.each(keynoteSpeakers, function (index, speaker) {
      const activeClass =
        index === currentIndex ? "speaker--active" : "speaker--faded";
      carousel.append(`
        <div class="speaker ${activeClass}" data-index="${index}">
          <img src="${speaker.image}" alt="${speaker.name}" />
        </div>
      `);
    });

    // Update speaker details
    $("#keynotespeakerName").text(keynoteSpeakers[currentIndex].name);
    $("#keynotespeakerUniversity").text(
      keynoteSpeakers[currentIndex].university
    );
    $("#keynotespeakerTopic").text(keynoteSpeakers[currentIndex].topic);
  }

  // Navigation buttons
  $("#prev").click(function () {
    currentIndex =
      (currentIndex - 1 + keynoteSpeakers.length) % keynoteSpeakers.length;
    renderKeynoteSpeakers();
  });

  $("#next").click(function () {
    currentIndex = (currentIndex + 1) % keynoteSpeakers.length;
    renderKeynoteSpeakers();
  });

  // Click on keynote speaker image
  $(document).on(
    "click",
    "#keynotespeakersCarousel .speaker",
    function () {
      const index = $(this).data("index");
      if (index !== undefined) {
        currentIndex = index;
        renderKeynoteSpeakers();
      }
    }
  );

  // Initial render
  renderKeynoteSpeakers();

  // View Bio button
  $("#keynoteviewBioBtn").click(function () {
    const speaker = keynoteSpeakers[currentIndex];
    $("#modalSpeakerImage").html(
      `<img src="${speaker.image}" alt="${speaker.name}" style="max-width:100%;height:250px;object-fit:cover">`
    );
    $("#modalSpeakerName").text(speaker.name);
    $("#modalSpeakerUniversity").text(speaker.university);
    $("#modalSpeakerTopic").text(speaker.topic);
    $("#modalSpeakerBio").text(speaker.bio || "");
    $("#speakerModal").fadeIn();
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
