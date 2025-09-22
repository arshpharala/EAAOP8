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

