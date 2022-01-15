const sections = Array.from(document.querySelectorAll('section'));
const nav = document.getElementById('navbar__list');
// let number = sections.length;
const navLinks = document.querySelectorAll('.menu__link');
function createList(){
  for (const section of sections){
    const sectionText = section.getAttribute('data-nav');
    const sectionLink = section.getAttribute('id');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a class='menu__link'  href='#${sectionLink}'>${sectionText}</a>`;
    nav.appendChild(listItem);
  }
}
createList();

document.addEventListener('scroll', highLight);

function highLight() {
  for (const section of sections){
    if (section.getBoundingClientRect().top > 0 && section.getBoundingClientRect().top < 180){
      for (const section of sections){
        section.classList.remove('your-active-class');
      }
      section.classList.add('your-active-class');   
    };
  }; 
};

var h = document.querySelectorAll('h2')

document.addEventListener('scroll', highLightr);
function highLightr() {
  for (const h2 of h){
    if (h2.getBoundingClientRect().top > 0 && h2.getBoundingClientRect().top < 290){
      for (const h2 of h){
        h2.classList.remove('your-active-class');
      }
      h2.classList.add('your-active-class');
    } ;
  };
};
