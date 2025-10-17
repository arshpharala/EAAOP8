$(function () {
  const defaultImg = "assets/images/user.png";
  const files = [
    {
      url: "assets/data/organizing-committee.json",
      container: "#organizingList",
      category: "organizing",
    },
    {
      url: "assets/data/international-committee.json",
      container: "#internationalList",
      category: "international",
    },
    {
      url: "assets/data/conference-secretariat-committee.json",
      container: "#conferenceList",
      category: "conference",
    },
  ];

  let allCpmmittees = [];

  files.forEach((file) => {
    $.getJSON(file.url, function (data) {
      data.forEach((s) => {
        if (!allCpmmittees.some((sp) => sp.name === s.name)) {
          allCpmmittees.push({ ...s, category: file.category });
        }
      });
      renderSpeakers(file.container, file.category);
    }).fail(() => console.error("Failed to load:", file.url));
  });

  function renderSpeakers(container, category) {
    const speakersToShow = allCpmmittees.filter((s) => s.category === category);
    const html = speakersToShow
      .map(
        (s) => `
     <div class="speaker-card-detail" data-name="${s.name}">
            <h4>${s.name}</h4>
            <p>${s.affiliation || ""}</p>
          </div>
    `
      )
      .join("");
    $(container).html(html);
  }
});
