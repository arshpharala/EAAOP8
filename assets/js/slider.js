$(document).ready(function () {
	var committeeCarousel = $(".committee-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false, // we’ll use custom buttons
		dots: false,
		autoplay: false, // change to true if you want auto-slide
		autoplayTimeout: 4000,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1024: { items: 4 },
		},
	});

	// Custom navigation
	$(".committee-next").click(function () {
		committeeCarousel.trigger("next.owl.carousel");
	});
	$(".committee-prev").click(function () {
		committeeCarousel.trigger("prev.owl.carousel");
	});

	var intCommitteeCarousel = $(".int-committee-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false, // we’ll use custom buttons
		dots: false,
		autoplay: false, // change to true if you want auto-slide
		autoplayTimeout: 4000,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1024: { items: 4 },
		},
	});

	// Custom navigation
	$(".int-committee-next").click(function () {
		intCommitteeCarousel.trigger("next.owl.carousel");
	});
	$(".int-committee-prev").click(function () {
		intCommitteeCarousel.trigger("prev.owl.carousel");
	});
});
$(document).ready(function () {
	// ---------- Generic OwlCarousel Initializer ----------
	function initCarousel(selector, nextBtn, prevBtn, options = {}) {
		const defaultOptions = {
			loop: true,
			margin: 30,
			nav: false,
			dots: false,
			autoplay: false,
			autoplayTimeout: 4000,
			responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 4 } },
		};

		const carousel = $(selector).owlCarousel({ ...defaultOptions, ...options });

		if (nextBtn) $(nextBtn).click(() => carousel.trigger("next.owl.carousel"));
		if (prevBtn) $(prevBtn).click(() => carousel.trigger("prev.owl.carousel"));

		return carousel;
	}

	// ---------- Committee Carousels ----------
	initCarousel(".committee-carousel", ".committee-next", ".committee-prev");
	initCarousel(
		".int-committee-carousel",
		".int-committee-next",
		".int-committee-prev"
	);

	// ---------- Generic Speaker Carousel Initializer ----------
	function initSpeakerCarousel({
		data,
		carouselSelector,
		nextBtn,
		prevBtn,
		nameEl,
		universityEl,
		topicEl,
		viewBioBtn,
	}) {
		let currentIndex = 0;

		// Render speakers
		data.forEach((s, i) => {
			$(carouselSelector).append(
				`<div class="speaker" data-index="${i}">
           <img src="${s.image}" alt="${s.name}" />
         </div>`
			);
		});

		const owl = $(carouselSelector).owlCarousel({
			loop: true,
			margin: 20,
			nav: false,
			dots: false,
			items: 3,
			center: true,
			responsive: { 0: { items: 1 }, 768: { items: 5 } },
		});

		if (nextBtn) $(nextBtn).click(() => owl.trigger("next.owl.carousel"));
		if (prevBtn) $(prevBtn).click(() => owl.trigger("prev.owl.carousel"));

		function updateDetails(i) {
			currentIndex = i;
			$(`${carouselSelector} .speaker`)
				.removeClass("speaker--active")
				.addClass("speaker--faded");
			$(`${carouselSelector} .speaker[data-index=${i}]`)
				.addClass("speaker--active")
				.removeClass("speaker--faded");

			$(nameEl).text(data[i].name);
			$(universityEl).text(data[i].university);
			$(topicEl).text(data[i].topic);
		}

		$(document).on(
			"mouseenter click",
			`${carouselSelector} .speaker`,
			function () {
				updateDetails($(this).data("index"));
			}
		);

		updateDetails(currentIndex);

		$(viewBioBtn).click(function () {
			const s = data[currentIndex];
			$("#modalSpeakerImage").html(
				`<img src="${s.image}" alt="${s.name}" style="max-width:100%;height:250px;object-fit:cover">`
			);
			$("#modalSpeakerName").text(s.name);
			$("#modalSpeakerUniversity").text(s.university);
			$("#modalSpeakerTopic").text(s.topic);
			$("#modalSpeakerBio").text(s.bio || "");
			$("#speakerModal").fadeIn();
		});
	}

	// ---------- Load JSON and Init ----------
	function loadSpeakers(jsonPath, options) {
		$.getJSON(jsonPath, function (data) {
			initSpeakerCarousel({ ...options, data });
		});
	}

	loadSpeakers("assets/data/plenary-speakers.json", {
		carouselSelector: "#speakersCarousel",
		nextBtn: "#nextBtn",
		prevBtn: "#prevBtn",
		nameEl: "#speakerName",
		universityEl: "#speakerUniversity",
		topicEl: "#speakerTopic",
		viewBioBtn: "#viewBioBtn",
	});

	loadSpeakers("assets/data/keynote-speakers.json", {
		carouselSelector: "#keynotespeakersCarousel",
		nextBtn: "#next",
		prevBtn: "#prev",
		nameEl: "#keynotespeakerName",
		universityEl: "#keynotespeakerUniversity",
		topicEl: "#keynotespeakerTopic",
		viewBioBtn: "#keynoteviewBioBtn",
	});

	// ---------- Shared Modal Close ----------
	$("#closeModal, #speakerModal").on("click", function (e) {
		if (e.target.id === "speakerModal" || e.target.id === "closeModal") {
			$("#speakerModal").fadeOut();
		}
	});
});
