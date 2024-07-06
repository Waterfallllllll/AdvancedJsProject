const images = () => {
	const block = document.createElement("div"),
		initial = document.querySelector(".works"),
		img = document.createElement("img");
	
	initial.addEventListener("click", (e) => {
		e.preventDefault();

		if (e.target.classList.contains("preview")) {
			const bigImg = e.target.parentNode.getAttribute("href");
			img.setAttribute("src", bigImg);
			img.style.cssText = "width: 25%;height: 50%;";
			block.appendChild(img);
			block.classList.add("popup");
			block.style.display = "flex";
			block.style.justifyContent = "center";
			block.style.alignItems = "center";
			initial.appendChild(block);
			document.body.style.overflow = "hidden";
		} else if (e.target.classList.contains("popup")) {
			block.style.display = "none";
			document.body.style.overflow = "";
		}
	});
};

export default images;