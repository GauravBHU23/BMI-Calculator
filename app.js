const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height `;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight `;
  } else if (bmi < 18.60) {
    results.innerHTML = `The BMI is Under Weight = <span>${bmi}</span>`;
  } else if (bmi >= 18.60 && bmi <= 24.60) {
    results.innerHTML = `The BMI is Normal Weight = <span>${bmi}</span>`;
  } else {
    results.innerHTML = `The BMI is Over Weight = <span>${bmi}</span>`;
  }
});
