
const projectsLink = document.querySelector('#projects-id');
const experienceLink = document.querySelector('#experience-id');
const educationLink = document.querySelector('#education-id');


projectsLink.addEventListener('mouseenter', addDots);
projectsLink.addEventListener('mouseleave', removeDots);

experienceLink.addEventListener('mouseenter', addDots);
experienceLink.addEventListener('mouseleave', removeDots);

educationLink.addEventListener('mouseenter', addDots);
educationLink.addEventListener('mouseleave', removeDots);

function addDots(e) {
  e.preventDefault();
  e.target.classList.add('dot-enlarge');
}

function removeDots(e) {
  e.preventDefault();
  e.target.classList.remove('dot-enlarge');
}