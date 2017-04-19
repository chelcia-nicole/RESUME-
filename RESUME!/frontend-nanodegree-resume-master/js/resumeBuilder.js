var bio={
  "name":"Chelcia Rehmer",
  "role":"Web Developer",
  "contacts":{
    "mobile":"816-752-6700",
    "email":"chelcia.rehmer@gmail.com",
    "github":"chelcia-nicole",
    "location":"Kansas City",
  },
  "welcomeMessage": "On a mission to learn front-end web development!",
  "skills":["HTML", "CSS", "JavaScript","Python"],
  "bioPic":"images/Chels.JPG",
};

var formattedName= HTMLheaderName.replace("%data%",bio.name);
var formattedRole= HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic= HTMLbioPic.replace("%data%",bio.bioPic);
var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

var formattedContactInfo= [];
formattedContactInfo.push(HTMLemail.replace("%data%",bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%",bio.contacts.mobile));
formattedContactInfo.push(HTMLgithub.replace("%data%",bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%",bio.contacts.location));

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length>0){
  $("#header").append(HTMLskillsStart);

  for(var i in bio.skills){
    if (bio.skills.hasOwnProperty(i)){
    $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
  }
}

for(var i in formattedContactInfo){
  if(formattedContactInfo.hasOwnProperty(i)){
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
  }
}

var work={
  "jobs":[
    {
      "employer":"Old Chicago",
      "title":"Bartender",
      "location":"Kansas City, MO",
      "dates":"October 2015-April 2017",
      "description":"I am the closing, weekend bartender at Old Chicago, a "+
      "high-volume restaurant and taproom.  We specialize in craft beer, and "+
      "therefore I am responsible for having a vast knowledge of beer to help "+
      "guide guests through the world of craft beers.  I have been able to "+
      "build a great relationship with regulars, and I must say, that is the "+
      "best part of bartending."
    },
    {
      "employer":"Buffalo Wild Wings",
      "title":"Bartender",
      "location":"Lee's Summit, MO",
      "dates":"October 2014-October 2015",
      "description":"I was responsible for keeping up with current promotions, "+
      "maintaining a clean a fully stocked bar, working the well, taking and "+
      "putting together to-go orders, and most importantly, creating a great "+
      "customer service experience for guests, and building clientele."
    },
    {
      "employer":"Rib Crib",
      "title":"Server/Bartender",
      "location":"Warrensburg, MO",
      "dates":"March 2012-October 2014",
      "description":"The was my first serving job, and wehere I learned most of "+
      "my skills as a server and bartender. I refined my skills in multi-tasking "+
      "and time management."
    }
  ]
};

function displayWork() {
  if(work.jobs.length > 0){
    $("#workExperience").append(HTMLworkStart);
    for (var i in work.jobs) {
      if (work.jobs.hasOwnProperty(i)){

      var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);

      var formattedEmployerTitle=formattedEmployer + formattedWorkTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedWorkLocation= HTMLworkLocation.replace("%data%",work.jobs[i].location);
      $(".work-entry:last").append(formattedWorkLocation);

      var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedWorkDescription= HTMLworkDescription.replace("%data%",work.jobs[i].description);
      $(".work-entry:last").append(formattedWorkDescription);
      }
    }
  }
}

displayWork();

var projects={
  "projects":[
    {
      "title": "insert title here!!!!!",
      "dates": "dates go here",
      "description": "This is where you need to write the description of the project!!!!!",
      "image": ["insertImg.jpg"]
    },
    {
      "title": "insert title here!!!!!",
      "dates": "dates go here",
      "description": "This is where you need to write the description of the project!!!!!",
      "image": ["insertImg.jpg"]
    },
    {
      "title": "insert title here!!!!!",
      "dates": "dates go here",
      "description": "This is where you need to write the description of the project!!!!!",
      "image": ["insertImg.jpg"]
    }
  ]
};

projects.display= function(){
  for (i in projects.projects){
    if (projects.projects.hasOwnProperty(i)){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle= HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates= HTMLprojectDates.replace("%data%",projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription= HTMLprojectDescription.replace("%data%",projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[i].image.length>0){
      for (i in projects.projects[i].image){
        if (projects.projects[i].image.hasOwnProperty(i)){
        var formattedImage= HTMLprojectImage.replace("%data",projects.projects[i].image[i]);
        $(".project-entry:last").append(formattedImage);
        }
      }
    }
    }
  }
};

projects.display();

var education={
  "schools":[
    {
      "name":"Arbor View High School",
      "location":"Las Vegas,NV",
      "degree":"diploma",
      "dates":"2010"
    }
  ],
  "onlineCourses":[
    {
      "title":"JavaScript Crash Course",
      "school":"Udacity",
      "dates":"2017-present",
      "url":"http://www.udacity.com/course/ud804"
    }
  ]
};

education.display=function(){
  if(education.schools.length>0 ||  education.onlineCourses.length>0){
    for(i in education.schools){
      if (education.schools.hasOwnProperty(i)){
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[i].name);
      var formattedSchoolLocation= HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolDegree= HTMLschoolDegree.replace("%data%",education.schools[i].degree);
      var formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[i].dates);

      $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      }

    }
    if(education.onlineCourses.length>0){
      $("#education").append(HTMLonlineClasses);
      for(i in education.onlineCourses){
        if (education.onlineCourses.hasOwnProperty(i)){
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
        var formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        var formattedOnlineURL= HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
        }
      }
    }
  }
};

education.display();


$("#mapDiv").append(googleMap);
