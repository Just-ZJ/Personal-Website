// JavaScript Document
const context = {
   jobExperiences: [
      {
         image: {
            src: "images/osu-logo.png",
            alt: "OSU Logo",
         },
         location: "University Housing - Residence Life",
         title: "Resident Advisor",
         duration: "August 2020 – Current",
         jobDescription: [
            {
               description:
                  "Served as a peer-advisor for the Towers Community Council, and guiding its executive board members",
            },
            {
               description:
                  "Supported the success of residents by providing a listening ear, guiding them to academic or social resources, and giving them quick peer tutoring sessions should the campus academic resources not be available in an emergent situation",
            },
            {
               description:
                  "Promoted a positive and inclusive community by bridging the diverse interests of all floor residents and establishing commonality while developing and grooming them for success through active and passive programming. ",
            },
            {
               description:
                  "Resolved conflict and relationship issues by creating an environment where residents could learn and reflect about issues concerning themselves and their community",
            },
         ],
      },
      {
         image: {
            src: "images/osu-logo.png",
            alt: "OSU Logo",
         },
         location: "Graduate & Professional Admissions Office",
         title: "Admissions Assistant",
         duration: "October 2019 – April 2020",
         jobDescription: [
            {
               description:
                  "Provide active support to the Graduate and Professional Admissions Office",
            },
            {
               description: "Responsible for answering student's inquiries",
            },
            {
               description: "Assists in ad-hoc projects",
            },
         ],
      },
      {
         image: {
            src: "images/rsaf-logo.png",
            alt: "RSAF Logo",
         },
         location: "Republic of Singapore Air Force",
         title: "Combat Security Trooper, Corporal",
         duration: "July 2017 – May 2019",
         jobDescription: [
            {
               description:
                  "Responsible for upholding security of key installations as well as day-to-day planning",
            },
            {
               description: "Assists in orientating and training of new combat security troopers",
            },
            {
               description: "Part of squadron innovation team",
            },
            {
               description: "Involved in audit preparations",
            },
         ],
      },
      {
         image: {
            src: "images/citi-logo.png",
            alt: "Citibank Logo",
         },
         location: "Citibank, Singapore",
         title: "Personal Banker, Internship",
         duration: "March 2016 – August 2016",
         jobDescription: [
            {
               description:
                  "Responsible for day-to-day administrative duties and preparation of daily sales",
            },
            {
               description: "Provided front desk customer service",
            },
         ],
      },
      {
         image: {
            src: "images/Marriott_Logo.png",
            alt: "Marriott Logo",
         },
         location: "Marriott Hotel, Singapore",
         title: "Part-Time Banquet Server",
         duration: "June 2014 – October 2014",
         jobDescription: [
            {
               description:
                  "Responsible for day-to-day operations such as setting up and clearing of tables, serving and portioning of food, pouring of wines and drinks",
            },
         ],
      },
      {
         image: {
            src: "images/swissotel-logo.png",
            alt: "Swissotel Logo",
         },
         location: "Blue Potato, Swissotel, Singapore",
         title: "Part-Time Waiter",
         duration: "March 2014 – May 2014",
         jobDescription: [
            {
               description:
                  "Responsible for day-to-day operations such as setting up and clearing of tables, taking orders, cashiering, receptionist duties, as well as room-service",
            },
         ],
      },
      {
         image: {
            src: "images/kk-hospital-logo.png",
            alt: "KK Hospital Logo",
         },
         location: "KK Women's and Children's Hospital, Singapore",
         title: "Temporary Packer",
         duration: "January 2014 – March 2014",
         jobDescription: [
            { description: "Responsible for organizing and packing of sensitive data" },
         ],
      },
   ],
   project: [
      {
         image: {
            src: "images/Flipper-GIF.gif",
            alt: "Flipper GIF",
         },
         title: "Flipper",
         creators: [
            { name: "Zheng Ji Tan" },
            { name: "Matthew Anakin Crabtree" },
            { name: "Deakon Ziegler" },
         ],
         projectDescription: [
            {
               description:
                  "Served as a peer-advisor for the Towers Community Council, and guiding its executive board members",
            },
         ],
         projectLink: "https://github.com/OneMoreOneUp/Hack-Ohio-2020",
      },
      {
         image: {
            src: "images/Flipper-GIF.gif",
            alt: "Flipper GIF",
         },
         title: "Flipper",
         creators: [
            { name: "Zheng Ji Tan" },
            { name: "Matthew Anakin Crabtree" },
            { name: "Deakon Ziegler" },
         ],
         projectDescription: [
            {
               description:
                  "Served as a peer-advisor for the Towers Community Council, and guiding its executive board members",
            },
         ],
         projectLink: "https://github.com/OneMoreOneUp/Hack-Ohio-2020",
      },
   ],
};

function fillJobTemplate() {
   const jobSource = document.getElementById("job-Template").innerHTML;
   const jobTemplate = Handlebars.compile(jobSource);
   const compiledJob = jobTemplate(context);
   document.getElementById("job-Template-Fill").innerHTML = compiledJob;
}

function fillProjectTemplate() {
   const projectSource = document.getElementById("project-Template").innerHTML;
   const projectTemplate = Handlebars.compile(projectSource);
   const compiledProject = projectTemplate(context);
   document.getElementById("project-Template-Fill").innerHTML = compiledProject;
}

fillJobTemplate();
fillProjectTemplate();
