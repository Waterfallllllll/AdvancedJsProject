"use strict";

import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";

window.addEventListener("DOMContentLoaded", () => {
    modals();
    tabs(".decoration_slider",".slick-slide", ".decoration_content", ".after_click");
});

