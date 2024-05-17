import changeModalState from "./changeModalState";

const modals = (state) => {

	console.log(state);
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
			modal.style.display = "block";
			document.body.classList.add("modal-open");
		};

		document.querySelectorAll(".balcon_icons_img").forEach(item => {
			item.addEventListener("click", () => {
				document.querySelector(".popup_calc_button").addEventListener("click", handleClickCalc);
			});
		});
		
		if ("window" in state) {
			
		} else {
			console.log("aa");
			document.querySelector(".popup_calc_button").removeEventListener("click", handleClickCalc);
		}

		close.addEventListener("click", () => {
			closeAllModals();
			document.body.classList.remove("modal-open");
		});

		modal.addEventListener("click", (e) => {
			if (e.target == modal && closeClickOverlay == true) {
				closeAllModals();
				document.body.classList.remove("modal-open");
			}
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
    
	bindModal(".header_btn", ".popup_engineer", ".popup_engineer .popup_close");
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
	// bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
	bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
	// showModalByTime(60000, ".popup");
};

export default modals;
