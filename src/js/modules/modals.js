"use strict";

const modals = () => {

    function bindModal(openSelector, modalSelector, closeSelector) {
        const open = document.querySelectorAll(openSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        open.forEach(item => {
            item.addEventListener("click", () => {
                modal.classList.add("show");
                document.body.classList.add("modal-open");
            });
        });

        close.addEventListener("click", () => {
            modal.classList.remove("show");
            document.body.classList.remove("modal-open");
        });

        modal.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.classList.remove("show");
                document.body.classList.remove("modal-open");
            }
        });        
    }

    function showModalByTime(time, selector) {
        const modal = document.querySelector(selector);
        setTimeout(() => {
            modal.classList.add("show");
            document.body.classList.add("modal-open");
        }, time);
    }
    
    bindModal(".header_btn", ".popup_engineer", ".popup_engineer .popup_close");
    bindModal(".phone_link", ".popup", ".popup .popup_close");
    // showModalByTime(60000, ".popup");
};

export default modals;