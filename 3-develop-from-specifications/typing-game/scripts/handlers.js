const doTheyMatch = (event) => {
    //Get user input
    let visibleWord = event.target.form.visible.value;
    let guess = event.target.form.guess.value;

    //Execute logic

    let result = compareThem(visibleWord, guess);

    //Display result to user

    let userInterface = document.getElementById('user-interface');

    if (result === 'failing') {
        userInterface.className = 'failing'
    } else if (result === 'passing') {
        userInterface.className = 'passing'
    }
}