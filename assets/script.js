const closeButton = document.querySelectorAll(".close");

const rightWallAboutMe = document.querySelector('#right-wall-about-me');
const rightWallAboutMeDrawer = document.querySelector('#about-me-text');

const majorSectionDrawer = document.querySelector('#folder-doc-major');
const majorSection = document.getElementById('right-wall-major-projects');

const otherSectionDrawer = document.getElementById('folder-doc-other');
const otherSection = document.getElementById('other-work');

const resumeDrawer = document.getElementById('folder-doc-resume');
const resumeSection = document.getElementById('resume');

const contactDrawer = document.getElementById('folder-doc-contact');
const contactSection = document.getElementById('contact-info');

const tunespliceButton = document.getElementById('tunesplice-button');
const junglrButton = document.getElementById('junglr-button');
const pro3Button = document.getElementById('pro3-button');
const employeeTrackerButton = document.getElementById('employee-tracker-button');
const weatherButton = document.getElementById('weather-scheduler-button');

const tunespliceSection = document.getElementById('tunesplice');
const junglrSection = document.getElementById('junglr');
const pro3Section = document.getElementById('pro3');
const employeeTrackerSection = document.getElementById('employee-tracker')
const weatherSection = document.getElementById('weather-scheduler');



for (i = 0; i < closeButton.length;i++) {
    closeButton[i].addEventListener('click', function() {
        //hiding all elements
        majorSection.style.display = 'none';
        rightWallAboutMe.style.display = 'none';
        otherSection.style.display = 'none';
        resumeSection.style.display = 'none';
        contactSection.style.display = 'none';
    })
}

majorSectionDrawer.addEventListener('click', function () {
    //hiding all other elements
    rightWallAboutMe.style.display = 'none';
    otherSection.style.display = 'none';
    resumeSection.style.display = 'none';
    contactSection.style.display = 'none';

    majorSection.style.display = '';
    // majorSection.classList.add('slide2')


})

rightWallAboutMeDrawer.addEventListener('click', function() {
    //hiding all the other elements
    majorSection.style.display = 'none'
    otherSection.style.display = 'none';
    resumeSection.style.display = 'none';
    contactSection.style.display = 'none';



    rightWallAboutMe.style.display = '';
    // rightWallAboutMe.classList.add('slide')
})

otherSectionDrawer.addEventListener('click', function () {
    rightWallAboutMe.style.display = 'none';
    majorSection.style.display = 'none';
    resumeSection.style.display = 'none';
    contactSection.style.display = 'none';


    otherSection.style.display = '';
})

resumeDrawer.addEventListener('click', function(){
    rightWallAboutMe.style.display = 'none';
    majorSection.style.display = 'none';
    otherSection.style.display = 'none';
    contactSection.style.display = 'none';

    resumeSection.style.display = '';
})

contactDrawer.addEventListener('click', function(){
    rightWallAboutMe.style.display = 'none';
    majorSection.style.display = 'none';
    otherSection.style.display = 'none';
    resumeSection.style.display = 'none';
    
    contactSection.style.display = '';
})


// -------------------------------------------- major projects section ------------------------------

tunespliceButton.addEventListener('click', function () {//tunesplice
 //hide other sections
    pro3Section.style.display = 'none';
    junglrSection.style.display = 'none';
    employeeTrackerSection.style.display = 'none';
    weatherSection.style.display = 'none';

    tunespliceSection.style.display= '';

})

junglrButton.addEventListener('click', function() {//junglr
 //hide other sections
    tunespliceSection.style.display = 'none';
    pro3Section.style.display = 'none';
    employeeTrackerSection.style.display = 'none';
    weatherSection.style.display = 'none';

    junglrSection.style.display = '';
})

pro3Button.addEventListener('click', function () {//pro3
//hide other sections
    tunespliceSection.style.display = 'none';
    junglrSection.style.display = 'none';
    employeeTrackerSection.style.display = 'none';
    weatherSection.style.display = 'none';
    
    pro3Section.style.display = '';
});

employeeTrackerButton.addEventListener('click', function () {

    tunespliceSection.style.display = 'none';
    junglrSection.style.display = 'none';
    pro3Section.style.display = 'none';
    weatherSection.style.display = 'none';

    employeeTrackerSection.style.display = '';
})

weatherButton.addEventListener('click', function(){
    tunespliceSection.style.display = 'none';
    junglrSection.style.display = 'none';
    pro3Section.style.display = 'none';
    employeeTrackerSection.style.display = 'none';
    
    weatherSection.style.display = '';


})

function checkVH () {
    
if (screen.height < 1000)
{window.location.href = "https://tomjia98.github.io/mobile-portfolio-tj/";}
}
setInterval(checkVH, 100)