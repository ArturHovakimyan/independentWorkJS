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
