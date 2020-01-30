const divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].__('mouseenter', setBackground);
  divs[i].__('mouseout', unsetBackground);
}
