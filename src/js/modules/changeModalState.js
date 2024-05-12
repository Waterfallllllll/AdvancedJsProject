import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
	checkNumInputs("#width");
	checkNumInputs("#height");
	let check = 0;

	const windowType = document.querySelectorAll(".balcon_icons_img"),
		widthType = document.querySelectorAll("#width"),
		heightType = document.querySelectorAll("#height"),
		valueType = document.querySelectorAll("#view_type"),
		checkboxType = document.querySelectorAll(".checkbox");
	
	function bindActionToElems(elem, event, name) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
				case "SPAN":
					state[name] = i;
					check++;
					break;
				case "INPUT":
					if (item.getAttribute("type") == "checkbox") {
						elem.forEach((box, j) => {
							box.checked = false;
							if (i == j) {
								box.checked = true;
								i == 0 ? state[name] = "Холодное" : state[name] = "Теплое";
							}
						});
					} else {
						state[name] = item.value;
						check++;
					}
					break;
				case "SELECT":
					state[name] = item.value;
					break;
				}
				console.log(state);
			});
		});
		checkValue(check);
	}

	bindActionToElems(windowType, "click", "window");
	bindActionToElems(widthType, "input", "width");
	bindActionToElems(heightType, "input", "height");
	bindActionToElems(valueType, "change", "value");
	bindActionToElems(checkboxType, "change", "checkbox");
};

export default changeModalState;	