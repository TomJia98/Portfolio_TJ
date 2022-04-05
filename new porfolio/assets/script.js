const closeButton = document.querySelectorAll(".close");

const rightWallAboutMe = document.querySelector('#right-wall-about-me');
const rightWallAboutMeDrawer = document.querySelector('#about-me-text');

const majorSectionDrawer = document.querySelector('#folder-doc-major');
const majorSection = document.getElementById('right-wall-major-projects');

const otherSectionDrawer = document.getElementById('folder-doc-other');

const tunespliceButton = document.getElementById('tunesplice-button');
const junglrButton = document.getElementById('junglr-button');
const pro3Button = document.getElementById('pro3-button');
const employeeTrackerButton = document.getElementById('employee-tracker-button');

const tunespliceSection = document.getElementById('tunesplice');
const junglrSection = document.getElementById('junglr');
const pro3Section = document.getElementById('pro3');
const employeeTrackerSection = document.getElementById('employee-tracker')



for (i = 0; i < closeButton.length;i++) {
    closeButton[i].addEventListener('click', function() {
        //hiding all elements
        majorSection.style.display = 'none'
        rightWallAboutMe.style.display = 'none'
       
    })
}

majorSectionDrawer.addEventListener('click', function () {
    //hiding all other elements
    rightWallAboutMe.style.display = 'none'



    majorSection.style.display = '';
    // majorSection.classList.add('slide2')


})

rightWallAboutMeDrawer.addEventListener('click', function() {
    //hiding all the other elements
    majorSection.style.display = 'none'

    rightWallAboutMe.style.display = '';
    // rightWallAboutMe.classList.add('slide')
})

// -------------------------------------------- major projects section ------------------------------

tunespliceButton.addEventListener('click', function () {//tunesplice
 //hide other sections
    pro3Section.style.display = 'none';
    junglrSection.style.display = 'none';
    employeeTrackerSection.style.display = 'none';

    tunespliceSection.style.display= '';

})

junglrButton.addEventListener('click', function() {//junglr
 //hide other sections
    tunespliceSection.style.display = 'none';
    pro3Section.style.display = 'none';
    employeeTrackerSection.style.display = 'none';

    junglrSection.style.display = '';
})

pro3Button.addEventListener('click', function () {//pro3
//hide other sections
    tunespliceSection.style.display = 'none';
    junglrSection.style.display = 'none';
    employeeTrackerSection.style.display = 'none';
    
    pro3Section.style.display = '';
});

employeeTrackerButton.addEventListener('click', function () {

    tunespliceSection.style.display = 'none';
    junglrSection.style.display = 'none';
    pro3Section.style.display = 'none';

    employeeTrackerSection.style.display = '';
})