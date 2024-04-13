"use strict";

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        active = document.querySelector(activeClass);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = "none";
        });
    }

    function showTabContent(i) {
        content[i].style.display = "block";
    }

    tab.forEach(item => {
        item.classList.remove(activeClass);
    });
};

export default tabs;