// Pastikan sudah memuat jQuery dan Animate.css
document.addEventListener("DOMContentLoaded", function () {
	// Animasi timeline saat scroll
	const processSteps = document.querySelectorAll(
		".process-step, .timeline-step"
	);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target;
					const card = element.querySelector(".animate__animated");

					// Desktop: animasi fadeInUp untuk card
					if (window.innerWidth > 992) {
						card.classList.add("animate__fadeInUp");
					}
					// Mobile: animasi fadeInRight untuk timeline vertikal
					else {
						card.classList.add("animate__fadeInRight");
					}

					// Animasi progress bar (hanya desktop)
					if (window.innerWidth > 992) {
						const progressBars =
							element.querySelectorAll(".progress-bar");
						progressBars.forEach((bar) => {
							bar.style.width = "100%";
							bar.style.transition = "width 1s ease-in-out";
						});
					}
				}
			});
		},
		{ threshold: 0.5 }
	);

	processSteps.forEach((step) => {
		observer.observe(step);
	});
});
document.addEventListener("DOMContentLoaded", function () {
	const chatButton = document.getElementById("chatButton");
	const chatPopup = document.getElementById("chatPopup");
	const closeChat = document.getElementById("closeChat");
	const sendWhatsApp = document.getElementById("sendWhatsApp");
	const chatInput = document.getElementById("chatInput");
	const quickMessages = document.querySelectorAll(".quick-message");

	const whatsappNumber = "6285155447978"; 

	chatButton.addEventListener("click", function () {
		chatPopup.classList.toggle("d-none");
	});

	closeChat.addEventListener("click", function () {
		chatPopup.classList.add("d-none");
	});

	quickMessages.forEach((button) => {
		button.addEventListener("click", function () {
			chatInput.value = this.getAttribute("data-message");
		});
	});

	sendWhatsApp.addEventListener("click", function () {
		const message = chatInput.value.trim();
		if (message) {
			const encodedMessage = encodeURIComponent(message);

			window.open(
				`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
				"_blank"
			);

			chatPopup.classList.add("d-none");

			chatInput.value = "";
		} else {
			alert("Silakan tulis pesan Anda terlebih dahulu");
		}
	});

	chatButton.addEventListener("click", function () {
		setTimeout(() => {
			chatInput.focus();
		}, 300);
	});
});
