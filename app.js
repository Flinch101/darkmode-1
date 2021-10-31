const btnOn = document.getElementById('on');
const btnOff = document.getElementById('off');

btnOff.addEventListener('click', () => {
    btnOff.classList.remove('displayblock');
    btnOn.classList.remove('displaynone');

    btnOff.classList.add('displaynone');
    btnOn.classList.add('displayblock');

    changeDarkMode();
});

btnOn.addEventListener('click', () => {
    btnOff.classList.remove('displaynone');
    btnOn.classList.remove('displayblock');

    btnOff.classList.add('displayblock');
    btnOn.classList.add('displaynone');

    changeDarkMode();
});

const changeDarkMode = () => {
    const container = [...document.querySelector('.container').childNodes];
    const sections = [...document.querySelector('.sections').childNodes];
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const menu = [...document.querySelector('header').childNodes];
    const btnVermas = document.querySelectorAll('#vermas');
    const menuAll = [...document.querySelector('.menu').childNodes];

    container.forEach((e) => {
        e.nodeName !== '#text' ? e.classList.toggle('container-darkmode') : '';
    });
    sections.forEach((e) => {
        e.nodeName !== '#text' ? e.classList.toggle('sections-darkmode') : '';
    });
    body.classList.toggle('body-darkmode');
    header.classList.toggle('header-darkmode');
    menu.forEach((e) => {
        e.nodeName !== '#text' ? e.classList.toggle('menu-darkmode') : '';
    })
    menuAll.forEach((e) => {
        e.nodeName !== '#text' ? e.classList.toggle('menu-all-darkmode') : '';
    })
    btnVermas.forEach((e) => {
        e.classList.toggle('vermas-darkmode');
    })
};

const btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('height-auto');
});