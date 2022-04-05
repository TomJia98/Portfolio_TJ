const rightWallAboutMe = document.querySelector('#right-wall-about-me');
const rightWallAboutMeDrawer = document.querySelector('#about-me-text');
const closeButton = document.querySelectorAll(".close");
const majorSectionDrawer = document.querySelector('#folder-doc-major');
const majorSection = document.querySelector('#right-wall-major-projects');


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
    majorSection.classList.add('slide')


})

rightWallAboutMeDrawer.addEventListener('click', function() {
    //hiding all the other elements
    majorSection.style.display = 'none'

    rightWallAboutMe.style.display = '';
    rightWallAboutMe.classList.add('slide')

    
})