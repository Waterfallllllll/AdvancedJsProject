"use strict";

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector),
		active = document.querySelector(activeClass);

	header.addEventListener("click", (e) => {
		e.preventDefault();
		tab.forEach(item => {
			item.classList.remove("after_click");
		});
		console.log(e.target);

		if (e.target.classList.contains("no_click")) {
			e.target.classList.add("after_click");
		}

	});
};
	
export default tabs;