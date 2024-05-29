import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const modalState = {	};

	changeModalState(modalState);
	modals(modalState);	
	tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click");
	tabs(".glazing_slider", ".glazing_block", ".glazing_content");
	forms(modalState);
	tabs(".balcon_icons", ".balcon_icons_img", ".popup_calc_content .big_img img", "do_image_more", "inline");
});

