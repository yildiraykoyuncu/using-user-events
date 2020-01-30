const divs = document.getElementsByTagName("button");
for (let i = 0; i < __.length; i++) {
  divs[__].addEventListener('focus', identifyButton);
  divs[__].addEventListener('keypress', alertButtonName);
  divs[__].addEventListener('blur', clearOutput);
}
