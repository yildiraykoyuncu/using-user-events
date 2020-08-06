const shadowMouse = (event) => {

    //getting input from interface

    let coordinateX = event.clientX;
    let coordinateY = event.clientY;

    //execute logic

    let checkBoxLocation = coordinatesToStyle(coordinateX, coordinateY);

    //display on the interface

    let checkBox = document.getElementById('follower');
    checkBox.style = checkBoxLocation;
}