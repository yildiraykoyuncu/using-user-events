const mathOperationHandler = (event) => {

    //take user inputs
    let leftInput = event.target.form.left.value;
    let leftNumber = Number(leftInput);

    let rightInput = event.target.form.right.value;
    let rightNumber = Number(rightInput);

    let operator = event.target.form.operation.value

    //display inputs to user

    document.querySelector('#input-left').innerHTML = leftInput;
    document.querySelector('#input-right').innerHTML = rightInput;

    //execute logic

    const result = mathOperation(operator, leftNumber, rightNumber)

    //display result

    document.querySelector('#program-output').innerHTML = result;

    //display on console

    console.log(leftInput);
    console.log(rightInput);

    return true;
}