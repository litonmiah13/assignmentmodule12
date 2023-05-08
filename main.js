const btn = document.getElementById('calculateBtn');
btn.addEventListener('click', function () {


    let height = document.querySelector('#heightInput').value;
    let weight = document.querySelector('#weightInput').value;

    if (height == '' || weight == '') {

        alert('Please fill out the input field');
        return;
    }


    // BMI = weight in KG / (height in m * height in m)

    height = height / 1;

    let BMI = weight / (height * height);

    BMI = BMI.toFixed(2);

    document.querySelector("#result").innerHTML = BMI;

    let status = "";

    if (BMI < 18.5) {
        status = " Underweight";

    }
    if (BMI >= 18.5 && BMI < 25) {
        status = " Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        status = " Overweight";
    }
    if (BMI >= 30) {
        status = "Obese";
    }
    document.querySelector(
        ".comment"
    ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});