$(function () {
  const defaultImg = "assets/images/user.png?v=3";
  const files = [
    {
      url: "assets/data/keynote-speakers.json",
      container: "#keynoteList",
      category: "keynote",
    },
    {
      url: "assets/data/plenary-speakers.json",
      container: "#plenaryList",
      category: "plenary",
    },
    {
      url: "assets/data/invited-speakers.json",
      container: "#invitedList",
      category: "invited",
    },
  ];

  let allSpeakers = [];

  files.forEach((file) => {
    $.getJSON(file.url, function (data) {
      data.forEach((s) => {
        if (!allSpeakers.some((sp) => sp.name === s.name)) {
          allSpeakers.push({ ...s, category: file.category });
        }
      });
      renderSpeakers(file.container, file.category);
    }).fail(() => console.error("Failed to load:", file.url));
  });

  function renderSpeakers(container, category) {
    const speakersToShow = allSpeakers.filter((s) => s.category === category);
    const html = speakersToShow
      .map((s) => {
        if (category === "invited") {
          return `
          <div class="speaker-card-detail" data-name="${s.name}">
            <h4>${s.name}</h4>
            <p>${s.university || ""}</p>
          </div>
        `;
        }
        return `
      <div class="speaker-card-detail" style="  min-height: 380px; 
      
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;" data-name="${s.name}">


        <img src="${s.image || defaultImg}" alt="${
          s.name
        }" onerror="this.src='${defaultImg}'">
         
      
        <div style="min-height: 180px;

        "> <h4>${s.name}</h4>
         <p>${s.university || ""}</p>
        <p style="color:#c59c6c;
         ">${s.topic || ""}</p>
      
        </div>
       
        
        <button class="view-bio-btn button-shape button-shape-primary" aria-label="View bio of ${
          s.name
        }">View Bio</button>
      </div>
    `;
      })
      .join("");
    $(container).html(html);

    $(container)
      .find(".view-bio-btn")
      .click(function () {
        const name = $(this).closest(".speaker-card-detail").data("name");
        const speaker = allSpeakers.find((sp) => sp.name === name);

        $("#modalSpeakerImage").html(
          `<img src="${
            speaker.image || defaultImg
          }" onerror="this.src='${defaultImg}'">`
        );
        $("#modalSpeakerName").text(speaker.name);
        $("#modalSpeakerUniversity").text(
          speaker.university || "University not available"
        );
        $("#modalSpeakerBio").text(speaker.bio || "Biography not available");

        $("#speakerModal").fadeIn();
      });
  }

  // Close modal on clicking the close button
  $("#closeModal").click(() => {
    $("#speakerModal").fadeOut();
  });

  $(".close-modal").click(() => $("#speakerModal").fadeOut());
  $("#speakerModal").click((e) => {
    if (e.target === e.currentTarget) $(e.currentTarget).fadeOut();
  });
});
