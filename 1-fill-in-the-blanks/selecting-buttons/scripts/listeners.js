const buttons = document.getElementsByTagName("button");
for (let i = 0; i < __.length; i++) {
  buttons[__].addEventListener('focus', identifyButton);
  buttons[__].addEventListener('keypress', alertButtonName);
  buttons[__].addEventListener('blur', clearOutput);
}
