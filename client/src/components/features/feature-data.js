/*
 Here goes all the content(info) on guest page
 The structure of data will be decided exactly when it will be used in page.
 This is only for the content writer who will write the info in the double quotations corresponding to each feature
*/

import timeTableImage from "./features-img/tt-icon.png";
import updatesImage from "./features-img/quick-updates-icon.png";
import resourcesImage from "./features-img/resources-icon.png";
import deadlinesImage from "./features-img/deadlines-icon.png";
import fetaure1Image from "./features-img/feature3.jpg";
import fetaure2Image from "./features-img/feature2.jpg";
import fetaure3Image from "./features-img/feature1.jpg";
import fetaure4Image from "./features-img/feature4.jpg";

export default [
  {
    imgSrc: fetaure1Image,
    featureTextIconName: "Timetable",
    featureIcon: timeTableImage,
    text: "Now never miss your class with access to live time table, class and attendance links provided all at one place. It will make you punctual, with no more roaming around the whatsApp groups and searching for essential links.",
    style: "featureReverse",
  },
  {
    imgSrc: fetaure2Image,
    featureTextIconName: "Quick Updates",
    featureIcon: updatesImage,
    text: "Get Updates of everything happening at one place. Never miss out even minutes of updates of things happening around in your college.",
    style: "feature",
  },
  {
    imgSrc: fetaure3Image,
    featureTextIconName: "Deadlines",
    featureIcon: deadlinesImage,
    text: "Get deadlines of every assignment, projects and many more so you never miss any deadlines and keep up with others ",
    style: "featureReverse",
  },
  {
    imgSrc: fetaure4Image,
    featureTextIconName: "Resources",
    featureIcon: resourcesImage,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut quos ullam harum a cumque omnis accusamus unde quod fugiat possimus voluptate deleniti cum sed aspernatur, voluptatum laudantium doloribus totam consequatur, autem asperiores, ipsam maxime perspiciatis qui! Ducimus enim tempore eius consequuntur ea esse! Vitae enim minus facilis voluptas voluptatibus.",
    style: "feature",
  },
];
