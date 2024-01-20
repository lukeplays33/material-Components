function closePopup(popup, form = null) {
	popup.parentNode.style.display = 'none';

	if(form == null) {
		try {
			popup.popupcCancelled();
		} catch (e) { }
	}

	try {
		popup.onSubmit(form);
	} catch (e) { }
}

function openPopup(popup) {
	popup.parentNode.style.display = 'block';
}

export { closePopup, openPopup };