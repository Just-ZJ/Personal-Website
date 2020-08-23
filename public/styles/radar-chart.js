// JavaScript Document
var language = document.getElementById("languages");
var progLang = document.getElementById("progLangChart");
var programs = document.getElementById("programsExp");

Chart.defaults.global.defaultFontColor = "antiquewhite";
Chart.defaults.global.legend = false;
Chart.defaults.global.tooltips.displayColors = false;

var myRadarChart2 = new Chart(language, {
   type: "radar",
   data: {
      labels: ["English", "Mandarin", "Korean", "Japanese"],
      datasets: [
         {
            fontSize: 20,
            backgroundColor: "rgba(00, 255, 00, 0.3)",
            borderColor: "#00FF00",
            borderWidth: 2,
            data: [5, 5, 2, 2],
         },
      ],
   },
   options: {
      /*title of graph*/
      title: {
         display: true,
         text: "Languages",
         fontSize: 20,
      },
      scale: {
         ticks: {
            max: 5,
            min: 0,
            stepSize: 1,
            /*remove number labels on chart*/
            showLabelBackdrop: false,
            display: false,
         },
         pointLabels: {
            fontSize: 14,
         },
         gridLines: {
            color: "rgba(250,235,215,0.3)" /*for spiderweb line*/,
         },
      },
      tooltips: {
         enabled: true,
         callbacks: {
            /*removes the number before label*/
            title: function () {
               return null;
            },
            label: function (tooltipItem, data) {
               let n = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
               let title = "Beginner";
               if (n === 5) {
                  title = "Expert";
               } else if (n === 4) {
                  title = "Advanced";
               } else if (n === 3) {
                  title = "Intermediate";
               } else if (n === 2) {
                  title = "Novice";
               }
               return data.labels[tooltipItem.index] + " : " + title;
            },
         },
      },
   },
});

var myRadarChart2 = new Chart(progLang, {
   type: "radar",
   data: {
      labels: ["Java", "HTML", "CSS", "Javascript"],
      datasets: [
         {
            fontSize: 20,
            backgroundColor: "rgba(00, 255, 00, 0.3)",
            borderColor: "#00FF00",
            borderWidth: 2,
            data: [4, 5, 4, 4],
         },
      ],
   },
   options: {
      /*title of graph*/
      title: {
         display: true,
         text: "Programming Languages",
         fontSize: 20,
      },
      scale: {
         ticks: {
            max: 5,
            min: 0,
            stepSize: 1,
            /*remove number labels on chart*/
            showLabelBackdrop: false,
            display: false,
         },
         pointLabels: {
            fontSize: 14,
         },
         gridLines: {
            color: "rgba(250,235,215,0.3)" /*for spiderweb line*/,
         },
      },
      tooltips: {
         enabled: true,
         callbacks: {
            /*removes the number before label*/
            title: function () {
               return null;
            },
            label: function (tooltipItem, data) {
               let n = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
               let title = "Beginner";
               if (n === 5) {
                  title = "Expert";
               } else if (n === 4) {
                  title = "Advanced";
               } else if (n === 3) {
                  title = "Intermediate";
               } else if (n === 2) {
                  title = "Novice";
               }
               return data.labels[tooltipItem.index] + " : " + title;
            },
         },
      },
   },
});

var myRadarChart3 = new Chart(programs, {
   type: "radar",
   data: {
      labels: ["MS Word", "MS Excel", "MS Powerpoint", "MS Access", "Photoshop"],
      datasets: [
         {
            fontSize: 20,
            backgroundColor: "rgba(00, 255, 00, 0.3)",
            borderColor: "#00FF00",
            borderWidth: 2,
            data: [4, 4, 4, 3, 4],
         },
      ],
   },
   options: {
      /*title of graph*/
      title: {
         display: true,
         text: "Programs",
         fontSize: 20,
      },
      scale: {
         ticks: {
            max: 5,
            min: 0,
            stepSize: 1,
            /*remove number labels on chart*/
            showLabelBackdrop: false,
            display: false,
         },
         pointLabels: {
            fontSize: 14,
         },
         gridLines: {
            color: "rgba(250,235,215,0.3)" /*for spiderweb line*/,
         },
      },
      tooltips: {
         enabled: true,
         callbacks: {
            /*removes the number before label*/
            title: function () {
               return null;
            },
            label: function (tooltipItem, data) {
               let n = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
               let title = "Beginner";
               if (n === 5) {
                  title = "Expert";
               } else if (n === 4) {
                  title = "Advanced";
               } else if (n === 3) {
                  title = "Intermediate";
               } else if (n === 2) {
                  title = "Novice";
               }
               return data.labels[tooltipItem.index] + " : " + title;
            },
         },
      },
   },
});
