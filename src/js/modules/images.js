const images = () => {
	const block = document.createElement("div"),
		initial = document.querySelector(".works");
	
	initial.addEventListener("click", (e) => {

		e.preventDefault();
		if (e.target.classList.contains("preview")) {
			console.log("a");
			block.classList.add("popup");
			block.style.display = "block";
			initial.appendChild(block);
		}
	});
};

export default images;