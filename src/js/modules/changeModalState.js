import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
	checkNumInputs("#width");
	checkNumInputs("#height");
	const windowType = document.querySelectorAll(".balcon_icons_img"),
		widthType = document.querySelectorAll("#width"),
		heightType = document.querySelectorAll("#height"),
		valueType = document.querySelectorAll("#view_type"),
		checkboxType = document.querySelectorAll(".checkbox"),
		window = document.querySelector(".popup_calc_content");
	

	function bindActionToElems(elem, event, name) {	
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
				case "SPAN":
					state[name] = i;
					break;
				case "INPUT":
					if (item.getAttribute("type") == "checkbox") {
						elem.forEach((box, j) => {
							box.checked = false;
							if (i == j) {
								box.checked = true;
								i == 0 ? state[name] = "Холодное" : state[name] = "Теплое";
								if ("value" in state) {

								} else {
									state.value = "tree";
								}
							}
						});
					} else {
						state[name] = item.value;

						if ("window" in state) {

						} else {
							state.window = 0;
						}
					}
					break;
				case "SELECT":
					state[name] = item.value;
					break;
				}
				console.log(state);

			});
		});
	}

	bindActionToElems(windowType, "click", "window");
	bindActionToElems(widthType, "input", "width");
	bindActionToElems(heightType, "input", "height");
	bindActionToElems(valueType, "change", "value");
	bindActionToElems(checkboxType, "change", "checkbox");
};

export default changeModalState;	