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


  <!-- ================= Committee Page ================= -->
  <main class="speaker-page">
    <div class="banner">
      <h1 class="banner_title animate-on-scroll" data-animate="fade-right">
        Conference Committees
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