import checkNumInputs from "./checkNumInputs";

const forms = () => {
	const form = document.querySelectorAll("form"),
		inputs = document.querySelectorAll("input");

	checkNumInputs("input[name='user_phone']");
	
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

	form.forEach(item => {
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
};

export default forms;