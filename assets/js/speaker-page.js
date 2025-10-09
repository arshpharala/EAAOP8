   $(function () {
        const defaultImg = "assets/images/user.png";
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
          const speakersToShow = allSpeakers.filter(
            (s) => s.category === category
          );
          const html = speakersToShow
            .map(
              (s) => `
      <div class="speaker-card-detail" data-name="${s.name}">
        <img src="${s.image || defaultImg}" alt="${
                s.name
              }" onerror="this.src='${defaultImg}'">
        <h4>${s.name}</h4>
        <p>${s.university || ""}</p>
        <button class="view-bio-btn button-shape button-shape-primary" aria-label="View bio of ${
          s.name
        }">View Bio</button>
      </div>
    `
            )
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
              $("#modalSpeakerTopic").text(
                speaker.topic || "Topic not available"
              );
              $("#modalSpeakerBio").text(
                speaker.bio || "Biography not available"
              );

              $("#speakerModal").fadeIn();
            });
        }

        $(".close-modal").click(() => $("#speakerModal").fadeOut());
        $("#speakerModal").click((e) => {
          if (e.target === e.currentTarget) $(e.currentTarget).fadeOut();
        });
      });
  