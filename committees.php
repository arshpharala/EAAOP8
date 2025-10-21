<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Committees - EAAOP-8</title>
  <link rel="stylesheet" href="assets/css/main.css" />
  <!-- Favicon for standard browsers -->
  <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
</head>

<body>
  <!-- ================= Header ================= -->
  <?php include 'includes/header.php'; ?>
  <!-- Menu -->
  <div
    class="menu-model"
    id="mobileMenu"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile Navigation">
    <aside class="mobile-menu" aria-label="Mobile menu">
      <div>
        <button class="close-btn" id="closeMenu" aria-label="Close menu">
          <img
            src="assets/images/close.png"
            alt="Close Menu Icon"
            class="close-icon" />
        </button>
      </div>

      <div class="menu-content">
        <ul class="nav-menu">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li>
            <a href="committees.html">COMMITTEEs</a>
          </li>
          <li>
            <a href="speakers.html">SPEAKERS</a>
          </li>
          <li><a href="#program">PROGRAM</a></li>
          <li>
            <a href="#registration">registration</a>
          </li>
          <li><a href="#call-for-abstract">submit Abstract</a></li>
          <li><a href="#special-issues">special issues</a></li>

          <li><a href="#venue">venue</a></li>
          <li>
            <a href="#sponsorship">sponsors</a>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="mailto:eaaop8@ku.ac.ae"
          class="button-shape contact-btn button-shape-primary">CONTACT US</a>
      </div>
    </aside>
  </div>

  <!-- ================= Committee Page ================= -->
  <main class="speaker-page">
    <div class="banner">
      <h1 class="banner_title animate-on-scroll" data-animate="fade-right">
        Conference Committee
      </h1>
      <img
        src="assets/images/about.png"
        alt="Speakers Banner"
        class="banner_image" />
    </div>
    <div class="container">
      <section id="plenary-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">
          Organizing Committee
        </h1>
        <div
          class="speaker-list animate-on-scroll"
          data-animate="fade-up"
          id="organizingList"></div>
      </section>

      <section id="keynote-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">
          International Scientific Committee
        </h1>
        <div
          class="speaker-list animate-on-scroll"
          data-animate="fade-up"
          id="internationalList"></div>
      </section>

      <section id="invited-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">
          conference secretariat Committee
        </h1>
        <div
          class="speaker-list animate-on-scroll"
          data-animate="fade-up"
          id="conferenceList"></div>
      </section>

    </div>
  </main>

  <!-- footer section  -->
  <?php include 'includes/footer.php'; ?>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/committee-page.js"></script>
</body>

</html>