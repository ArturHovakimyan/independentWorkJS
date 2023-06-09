const sum = document.getElementById("sum");

sum.addEventListener("click", () => {
	const first = document.getElementById("first").value;
	const second = document.getElementById("second").value;
	const tirth = document.getElementById("tirth").value;
	const finleResult = document.getElementById("result");
	let result =
		"write 'x' in one of the fields to get the result of the equation";

	if (Number(first) && second.toLowerCase() === "x") {
		result = Number(tirth) - Number(first);
	} else if (Number(second) && first.toLowerCase() === "x") {
		result = Number(tirth) - Number(second);
	}
	finleResult.textContent = result;
});

//========================================================================

const divisors = document.getElementById("divisors");

divisors.addEventListener("click", () => {
	const number = document.getElementById("number").value;
	const separator = document.getElementById("separator");
	let result = [];
	const halfNumber = number / 2;
	for (let index = 1; index <= halfNumber; index++) {
		if (number % index === 0) {
			result.push(index);
		}
	}
	result.push(number);
	const finleResult = result.join(",");
	separator.textContent = finleResult;
});
