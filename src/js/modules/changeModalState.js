import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll(".balcon_icons_img"),
		windowWidth = document.querySelectorAll("#width"),
		windowHeight = document.querySelectorAll("#height"),
		windowType = document.querySelector(".view_type"),
		windowProfile = document.querySelectorAll(".checkbox");
	
	checkNumInputs("#height");
	checkNumInputs("#width");
	
	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
				case "SPAN":
					state[prop] = i;
					console.log(state);
					break;
				case "INPUT":
					if (item.getAttribute("type") === "checkbox") {
						i == 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
						console.log(state);
					} else {
						state[prop] = item.value;
						console.log(state);
					}
					break;
				case "SELECT":

					break;
				}
			});
		});
	}

	bindActionToElems("click", windowForm, "form");
	bindActionToElems("input", windowWidth, "width");
	bindActionToElems("input", windowHeight, "height");
};

export default changeModalState;