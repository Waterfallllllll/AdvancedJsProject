const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);
	
	function hideTabContent() {
		content.forEach(item => {
			item.style.display = "none";
		});

		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);

		
		const clearObject = () => {
			const data = document.querySelectorAll(".popup_calc_btn");


			data.forEach(item => {
				item.addEventListener("click", () => {
					if ("window" in state) {
						const balcon = document.querySelectorAll(".balcon_icons_img");

						balcon.forEach(item => {
							item.classList.remove("do_image_more");
						});
					}
				});
			});
		};

		clearObject();
	}

	hideTabContent();	
	showTabContent();

	header.addEventListener("click", (e) => {
		const target = e.target;

		tab.forEach((item, i) => {
			if (target == item || target.parentNode == item) {
				hideTabContent();
				showTabContent(i);
			}
		});
	});

};
	
export default tabs;