/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});


function handleSweetAlertClick() {
  Swal.fire({
    title: 'Comcamp 34',
    text: 'This is the best camp I have attended and Im proud to present it to everyone because it if a kmutt camp and all of frined in this camp we still Talk and exchange until today The lesson of this camp is the best they teach us about a C programming a web developer that i like the most and made game with unity and I bring the acquired knowledge to continue in my next project.  ',
    imageUrl: 'images/pksweet.JPG',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
function handleSweetAlertClick2() {
  Swal.fire({
    title: 'Let Me tire camp',
    text: 'This camp is a camp that will focus on the hardware side, such as connecting the board microbit and web microbit, trying to connect in realtime. pitching skill .  know things like the ceasar cipher and the important is got the best friend from this camp, her name is Petch. After that camp, We went to compete together a few months later. ',
    imageUrl: 'images/kaset2.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}

function handleSweetAlertClick3() {
  Swal.fire({
    title: 'Cs Camp',
    text: 'This my 3rd camp of this year and make me know and made me know the difference between the faculty of IT and CS where the CS is heavy on the logic side And more algorithms, which I already like algorithms and challenges. And this camp also learned about logic such as logical operators flowcahart and used tkinter to create an app. and tried to connect the board microbit, which I learned from letmetire, made me do well.',
    imageUrl: 'images/cscc.JPG',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
function handleSweetAlertClick4() {
  Swal.fire({
    title: 'World of Data camp',
    text: 'Its my first Data Science camp. What I get from this camp is fundamental sql, querying, design thinking , data visullization and getting to know the type of work in the data work in the future and difference between data engineer , data analyst and data scientist  , Which is an important basics for me to apply the knowledge that I have gained to build on various projects. ',
    imageUrl: 'images/TM3.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
function handleSweetAlertClick5() {
  Swal.fire({
    title: 'ITCamp18',
    text: 'It is a camp that gives inspiration to enter the Faculty of IT a lot. I get from this camp is the knowledge of HTML, CSS, JAVASCRIPT and the most I get is the basics of Firebase framework. And the new thing that I got from this camp is to be a Project Manager of the group appointed by senior , Project manager for me should must have a foundation in every lesson that senior teach and can make both the developer side and the slide maker understand the same point and make the best project   ',
    imageUrl: 'images/itc11.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
function handleSweetAlertClick6() {
  Swal.fire({
    title: 'Cai camp Hackathon 2022',
    text: 'The thing I gained from this competition is the ability to work as a team and divide tasks clearly. This helped me to better understand the world of work and learn from my teammates. Additionally, participating in this competition allowed me to meet and learn from other participants, which further improved my understanding. Overall, this experience helped me to develop my English language skills as well  ',
    imageUrl: 'images/caipic.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
}
