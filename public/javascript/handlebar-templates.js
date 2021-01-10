// JavaScript Document
const context = {
   jobExperiences: [
      {
         image: {
            src: "images/job-experiences/osu-logo.png",
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
            {
               description:
                  "Served as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board memberserved as a peer-advisor for the Towers Community Council, and guiding its executive board members",
            },
         ],
         hide: false,
         slideNo: 0,
      },
      {
         image: {
            src: "images/job-experiences/osu-logo.png",
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
         hide: true,
         slideNo: 1,
      },
      {
         image: {
            src: "images/job-experiences/rsaf-logo.png",
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
         hide: true,
         slideNo: 2,
      },
      {
         image: {
            src: "images/job-experiences/citi-logo.png",
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
         hide: true,
         slideNo: 3,
      },
      {
         image: {
            src: "images/job-experiences/Marriott_Logo.png",
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
         hide: true,
         slideNo: 4,
      },
      {
         image: {
            src: "images/job-experiences/swissotel-logo.png",
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
         hide: true,
         slideNo: 5,
      },
      {
         image: {
            src: "images/job-experiences/kk-hospital-logo.png",
            alt: "KK Hospital Logo",
         },
         location: "KK Women's and Children's Hospital, Singapore",
         title: "Temporary Packer",
         duration: "January 2014 – March 2014",
         jobDescription: [
            { description: "Responsible for organizing and packing of sensitive data" },
         ],
         hide: true,
         slideNo: 6,
      },
   ],
   project: [
      {
         image: {
            src: "images/projects/Flipper-GIF.gif",
            alt: "Flipper GIF",
         },
         title: "Flipper",
         projectDescription:
            "A 2D shifting perspective game made in 40 hours using Unity for OSU HackOHI/O 2020",
         creators: [
            { name: "Zheng Ji Tan" },
            { name: "Matthew Anakin Crabtree" },
            { name: "Deakon Ziegler" },
         ],
         projectLink: "https://github.com/OneMoreOneUp/Hack-Ohio-2020",
         hide: false,
      },
      {
         image: {
            src: "images/projects/website-desktop-compatible.png",
            alt: "Desktop Compatible",
         },
         title: "Online Portfolio",
         projectDescription:
            "An interactive website showcasing skills, job experience and projects.",
         creators: [{ name: "Zheng Ji Tan" }],
         projectLink: "https://github.com/Just-ZJ/Personal-Website",
         hide: false,
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
