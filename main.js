const firstName = 'Paulina';
const age = 32;

const humanOne = {
    name: 'Maciek',
    age: 25,
    address: {
        street: 'Warszawa',
        city: 'Bialystok'
    }
}

const humanTwo = {
    name: 'Stefan',
    age: 32,
    address: {
        street: humanOne.address.street,
        city: 'Bialystok'
    }
}


if (humanOne.age > humanTwo.age) {
    console.log('Human One jest starczy');
} else if (humanOne.age === humanTwo.age) {
    console.log('Human Two i Human One lub sa rowiesnikami');
} else {
    console.log('Human Two jest starszy');
}


const myNumber = 8;

switch (myNumber) {
    case 7:
        console.log('jestem 7');
        break;
    case 9:
        console.log('jestem dziewiatka');
        break;
    default:
        console.log('jestem czyms innym');
}


const button = document.querySelector('.action--js');
console.log(button)


button.addEventListener('click', () => {
    const heading = document.querySelector(".header__title--js")
    heading.innerHTML = 'klik, klik';
});


const photo = document.querySelector('.about__picture');

photo.addEventListener('mouseenter', () => {
    const heading = document.querySelector(".about__header")
    heading.innerHTML = 'siemka';
});










// function createContent(querySelectorContent, content) {
//     const element = document.querySelector('.week-summary__description--js');
//     element.innerHTML = `Nawet uzupelniam tresc javascriptem!`;
// }

// createContent('week-summary__description--js')

// const mainHeader = document.querySelector ('.mainHeader');



// const button = document.querySelector('.header__button--js');
// console.log(button)

// button.addEventListener('click',(e) => {
//     const header = document.querySelector ('.header__title--js');
//     header.innerHTML='klik, klik';
//     header.classList.toggle('header__title--red');
// });/*