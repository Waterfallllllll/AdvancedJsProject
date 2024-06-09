import changeModalState from "./changeModalState";

const modals = (state) => {

	function bindModal(openSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const open = document.querySelectorAll(openSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modal]");
		
		const handleClick = (item) => {
			closeAllModals();
			modal.style.display = "block";
			document.body.classList.add("modal-open");
		};

		open.forEach(item => {
			item.addEventListener("click", () => handleClick(item));
		});

		const handleClickCalc = () => {
			closeAllModals();
			document.querySelector(".popup_calc_profile").style.display = "block";
			document.body.classList.add("modal-open");

			document.querySelector(".popup_calc_profile_close").addEventListener("click", () => {
				closeAllModals();
				document.body.classList.remove("modal-open");
				clearObject();
			});

			document.querySelector(".popup_calc_end_close").addEventListener("click", () => {
				closeAllModals();
				document.body.classList.remove("modal-open");
				clearObject();
			});
		};
		
		function universallyAttachFirstForm() {
			const reg = /^$/g;
			document.querySelectorAll(".balcon_icons_img").forEach(item => {
				item.addEventListener("click", () => {
					if ((state.height.search(reg)) && (state.width.search(reg))) document.querySelector(".popup_calc_button").addEventListener("click", handleClickCalc);
				});
			});

			document.querySelector("#height").addEventListener("input", () => {
				if ((state.height.search(reg)) && (state.width.search(reg)) && ("window" in state)) {
					document.querySelector(".popup_calc_button").addEventListener("click", handleClickCalc);
				} else {
					document.querySelector(".popup_calc_button").removeEventListener("click", handleClickCalc);
					document.querySelector(".popup_calc_button").addEventListener("click", addAlert);
				}
			});
					
			document.querySelector("#width").addEventListener("input", () => {
				if ((state.width.search(reg)) && (state.height.search(reg)) && ("window" in state)) {
					document.querySelector(".popup_calc_button").addEventListener("click", handleClickCalc);
				} else {
					document.querySelector(".popup_calc_button").removeEventListener("click", handleClickCalc);
					document.querySelector(".popup_calc_button").addEventListener("click", addAlert);
				}
			});
		}

		universallyAttachFirstForm();

		const handleClickSecondForm = () => {
			closeAllModals();
			document.querySelector(".popup_calc_end").style.display = "block";
			document.body.classList.add("modal-open");
		};

		function universallyAttachSecondForm() {
			const viewType = document.querySelector("#view_type");
			const buttonCalc = document.querySelector(".popup_calc_profile_button");
			const checkBox = document.querySelectorAll(".checkbox");

			viewType.addEventListener("change", () => {
				if (("value" in state) && ("checkbox" in state)) {
					buttonCalc.addEventListener("click", handleClickSecondForm);
					console.log("aa");
				} 
			});

			checkBox.forEach(item => {
				item.addEventListener("change", () => {
					if (("value" in state) && ("checkbox" in state)) {
						buttonCalc.addEventListener("click", handleClickSecondForm);
						console.log("aa");
					}
				});
			});
		}

		universallyAttachSecondForm();

		const clearObject = () => {
			const data = document.querySelectorAll(".popup_calc_btn"),
				checkbox = document.querySelectorAll(".checkbox");

			data.forEach(item => {
				item.addEventListener("click", () => {
					
					for (const key in state) {
						if (state.hasOwnProperty(key)) {
							delete state[key];
						}
					}
				
					document.querySelector(".popup_calc_button").removeEventListener("click", handleClickCalc);
					document.querySelector(".popup_calc_profile_button").removeEventListener("click", handleClickSecondForm);
					checkbox.forEach(item => {
						item.checked = false;
					});

					clearInputs();

					if (("width" in state) && ("height" in state) && ("window" in state)) {
						document.querySelector(".popup_calc_button").removeEventListener("click", addAlert);			
					} else {
						document.querySelector(".popup_calc_button").addEventListener("click", addAlert);
					}
				});
			});
		};

		clearObject();

		function clearInputs() {
			const inputs = document.querySelectorAll("input");

			inputs.forEach(item => {
				item.value = "";
			});
		}

		modal.addEventListener("click", (e) => {
			if (e.target == modal && closeClickOverlay == true) {
				closeAllModals();
				document.body.classList.remove("modal-open");
			}
		});
		
		close.addEventListener("click", () => {
			closeAllModals();
			document.body.classList.remove("modal-open");
			clearObject();
		});

		function closeAllModals() {
			windows.forEach(item => {
				item.style.display = "none";
			});
		}
	}

	function showModalByTime(time, selector) {
		const modal = document.querySelector(selector);
		setTimeout(() => {
			modal.style.display = "block";
			document.body.classList.add("modal-open");
		}, time);
	}

	function addAlert() {
		const alert = document.createElement("div");
		alert.classList.add("status");
		alert.textContent = "Заполните все поля";
		document.querySelector(".popup_calc_content").append(alert);
		document.querySelector(".popup_calc_button").removeEventListener("click", addAlert);		

		let count = 0;
		count++;
		if (count > 0) {
			setTimeout(() => {
				alert.style.display = "none";
			}, 1000);
		}
	}
					    
	bindModal(".header_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");

	// showModalByTime(60000, ".popup");
};

export default modals;
