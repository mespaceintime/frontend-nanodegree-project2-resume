//------------------------------------bio------------------------------------
var bio = {
	"name": "Daisy Duck",
	"role": "Specialty Shoe Designer.",
	"contacts":
	{
		"mobile": "555-555-1234",
		"email": "daisy1234@disney.com",
		"github": "daisy1234",
		"twitter": "#daisy1234",
		"location": "Marne-la-Vallée, France"
	},
		"welcomeMessage": "Welcome to my audacious web site!  Please let me know if you need anything.",
		"skills": ["shopping", "accessorizing", "swimming", "decorating"],
		"bioPic": "images/daisy.png",
	};

bio.display = function (){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPicture);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);        
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);        
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);        

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkills)
}
};
bio.display();

//------------------------------------education------------------------------------
var education = {
	"schools": [
	{
		"name": "Florida State University",
		"location": "Tallahassee, FL",
		"degree": "MBA",
		"majors": ["Design","Finance"],
		"dates": 2015,
		"url": "http://www.fsu.edu/"
	},
	{
		"name": "University of Miami",
		"location": "Coral Gables, FL",
		"degree": "BS",
		"majors": ["Fashion","Merchandizing"],
		"dates": 2012,
		"url": "http://www.miami.edu/"

	},
	{
		"name": "University of Florida",
		"location": "Gainesville, FL",
		"degree": "AS",
		"majors": ["Advertizing","Marketing"],
		"dates": 2010,
		"url": "http://www.ufl.edu/"

	}
	],
	"onlineCourses": [
  {
	"title": "2014 Hasbro Play Doh Minnie Bowtique Set Make Bows & Shoes MsDisney",
	"school": "YouTube",
	"dates": 2014,
	"url": "https://www.youtube.com/watch?v=ReaGaX6NNMU"
  }
  ],
display: function (){
	for (var edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedNameandDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameandDegree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
		$(".education-entry:last").append(formattedMajor);
	}
   $("#education").append(HTMLonlineClasses);
	for (var eEdu in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eEdu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eEdu].school);
		var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(TitleandSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eEdu].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[eEdu].url).replace("#", education.onlineCourses[eEdu].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}
};
education.display ();

//------------------------------------work------------------------------------
var work = {
	"jobs": [
	{
		"employer": "Ducks Unlimited",
		"title": "User Experience Specialists",
		"dates": "January 2014 - Present",
		"location": "Orlando, FL",
		"description": "Customer Experience Specialists."
	},
	{
		"employer": "Duck Place",
		"title": "Trend Setter",
		"dates": "March 2013 - December 2013",
		"location": "Pensacola, FL",
		"description": "Event Planner."
	},
	{
		"employer": "Exclusive Duck, Disneyland",
		"title": "Personal Shopper",
		"dates": "January 1998 - December 31, 2011",
		"location": "Anaheim, CA",
		"description": "Fashion Merchandizing."
	}
	],
display: function() {
for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		 $(".work-entry:last").append(formattedDates);

		 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		 $(".work-entry:last").append(formattedDescription);
		}
	}
}
work.display();

//------------------------------------projects------------------------------------
var projects = {
	"projects": [
	{
		"title": "Duck Super Model Calendar",
		"dates": "January 2015 - March 2015",
		"description": "Trend setting fund raiser and conservation awareness event.",
		"images": [
		 "images/daisy1.png",
		 "images/daisy2.png"
		 ]
	},
	{
		"title": "PhotoBug Runway Modeling",
		"dates": "May 2014 - November 2014",
		"description": "Ducks display Spring Fashion Line.",
		"images": [
		 "images/daisy10.png",
		 "images/daisy5.png"
		 ]
	},
	{
		"title": "Fashion Modeling Project",
		"dates": "January 2014 - April 2014",
		"description": "Duck flaunt competition.  First place for best dressed marketing the latest fashion.",
		"images": [
		 "images/daisy9.png",
		 "images/daisy7.png"

		 ]
	}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	  }
	}
}
projects.display();

//------------------------------------name internationalize button------------------------------------
//push button to splice name "first last" at the space, converts last name to uppercase
function inName(name){
    var finalName = name.trim().split(" ");
    firstName=finalName[0].toLowerCase();
    lastName=finalName[1].toUpperCase();
    finalName=firstName[0].toUpperCase()+firstName.slice(1)+" "+lastName;
    console.log(finalName);
    return finalName;
}

$("#mapDiv").append(internationalizeButton);

//displays .clicks on window
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;

	logClicks(x,y);
});
//------------------------------------map------------------------------------

$("#mapDiv").append(googleMap);

//------------------------------------footer------------------------------------
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLocation);