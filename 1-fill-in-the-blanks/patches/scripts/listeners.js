const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', setBackground);
    divs[i].addEventListener('mouseout', unsetBackground);
}