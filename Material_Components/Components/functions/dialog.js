function closePopup(popup, form) {
	popup.parentNode.style.display = 'none';

	console.log(form);
	try {
		popup.onSubmit(form);
	} catch (e) { }
}

function openPopup(popup) {
	popup.parentNode.style.display = 'block';
}

export { closePopup, openPopup };