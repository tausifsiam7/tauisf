document.getElementById("submit").onclick = function(){
    let numOne = document.getElementById("num1").value;
    let numTwo = document.getElementById("num2").value;
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let result = numOne + numTwo;
    document.getElementById("result").textContent = `Result: ${result}`;
}

document.getElementById("submit1").onclick = function(){
    let numThree = document.getElementById("num3").value;
    let numFour = document.getElementById("num4").value;
    numThree = Number(numThree);
    numFour = Number(numFour);
    let result = numThree - numFour;
    document.getElementById("result1").textContent = `Result: ${result}`;
}