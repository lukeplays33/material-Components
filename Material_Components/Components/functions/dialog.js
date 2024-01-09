async function closePopup (popup, form) {
	popup.parentNode.style.display = 'none';

	return form;
}

function openPopup (popup) {
	popup.parentNode.style.display = 'block';
}

export {closePopup, openPopup};