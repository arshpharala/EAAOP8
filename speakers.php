<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Speakers - EAAOP-8</title>
  <link rel="stylesheet" href="assets/css/main.css" />
  <!-- Favicon for standard browsers -->
  <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
</head>

<body>
  <!-- ================= Header ================= -->
  <?php include 'includes/header.php'; ?>


  <!-- ================= Speaker Page ================= -->
  <main class="speaker-page">
    <div class="banner">
      <h1 class="banner_title animate-on-scroll" data-animate="fade-up">Conference Speakers</h1>
      <img
        src="assets/images/about.png"
        alt="Speakers Banner"
        class="banner_image" />
    </div>
    <div class="container">
      <section id="plenary-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">Plenary Speakers</h1>
        <div class="speaker-list animate-on-scroll" data-animate="fade-up" id="plenaryList"></div>
      </section>

      <section id="keynote-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">Keynote Speakers</h1>
        <div class="speaker-list animate-on-scroll" data-animate="fade-up" id="keynoteList"></div>
      </section>

      <section id="invited-speakers" class="speaker-section">
        <h1 class="speakers__title animate-on-scroll" data-animate="fade-right">Invited Speakers</h1>
        <div class="speaker-list animate-on-scroll" data-animate="fade-up" id="invitedList"></div>
      </section>

      <!-- Modal -->
      <div id="speakerModal">
        <!-- Modal Content -->
        <div class="modal-content">
          <div class="profile-card">
            <div class="profile-card__header">
              <div id="modalSpeakerImage" class="speaker_image"></div>
              <div>
                  <h1 id="modalSpeakerName"></h1>
              <h4 id="modalSpeakerUniversity"></h4>
              </div>
            
            </div>
            <div class="profile-card__details">

              <p id="modalSpeakerTopic" class="topic"></p>
              <p id="modalSpeakerBio" style="white-space: pre-line"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- footer section  -->
  <?php include 'includes/footer.php'; ?>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

  <script src="assets/js/main.js"></script>
  <script src="assets/js/speaker-page.js"></script>
</body>

</html>