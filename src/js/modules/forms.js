"use strict";

const forms = () => {
    const forms = document.querySelectorAll("form"),
        inputs = document.querySelectorAll("input");
    
    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    forms.forEach(item => {
        item.addEventListener("submit", (e) => {
            e.preventDefault();

            let statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            item.append(statusMessage);

            const formData = new FormData(item);
        });
    });
};

export default forms;