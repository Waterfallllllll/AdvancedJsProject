const forms = document.querySelectorAll("form"),
	inputs = document.querySelectorAll("input"),
	phoneInputs = document.querySelectorAll("input[name='user_phone']");

phoneInputs.forEach(item => {
	item.addEventListener("input", () => {
		item.value = item.value.replace(/\D/, "");
	});
});

const message = {
	success: "Success",
	failure: "Something went wrong",
	pending: "Loading"
};

const postData = async (url, data) => {
	document.querySelector(".status").textContent = message.pending;

	const api = await fetch(url, {
		method: "POST",
		body: data
	});

	return await api.text();
};

const clearInputs = () => {
	inputs.forEach(item => {
		item.value = "";
	});
};

forms.forEach(item => {
	item.addEventListener("submit", (e) => {
		e.preventDefault();

		const block = document.createElement("div");
		block.classList.add("status");
		item.append(block);

		const formData = new FormData(item);

		postData("assets/server.php", formData)
			.then(res => {
				console.log(res);
				block.textContent = message.success;
			}).catch(() => {
				block.textContent = message.failure;
			}).finally(() => {
				clearInputs();
				setTimeout(() => {
					block.remove();
				}, 5000);
			});
	});
});

