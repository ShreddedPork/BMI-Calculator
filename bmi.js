const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const getBmiButton = document.querySelector(".btn-dark");
const BMIoutPut = document.querySelector("#BMIoutPut");

getBmiButton.addEventListener("click", function () {
	let weightInput = Number(weight.value);
	let heightInput = Number(height.value);
	BMIoutPut.textContent = bmiCalculator(weightInput, heightInput);
});

function bmiCalculator(weightInput, heightInput) {
	let bmi = Number(Math.round(weightInput / (heightInput * heightInput)));
	if (bmi < 18.5) {
		return `Your bmi is ${bmi}. You're underweight and should eat more.`;
	} else if (bmi >= 18.5 && bmi <= 24.5) {
		return `Your bmi is ${bmi}. Thats a good spot to be in!`;
	} else if (bmi > 24.5) {
		return `Your bmi is ${bmi}. You're fat and should eat less.`;
	} else {
		return `you must enter numbers to retrieve your bmi.`;
	}
	return bmi;
}
