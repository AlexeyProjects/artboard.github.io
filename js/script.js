function focusInput(el) {
	console.log(el);
	el.parentElement.classList.add('fillInput');
	el.addEventListener('blur',() => {
	 		if (el.value.length > 0) {
	 			return
	 		}
	 		else {
	 			el.parentElement.classList.remove('fillInput');
	 		}
		});
}

// Тоглл чек-бокса
function checkbox(el) {
	if (el.classList.contains('dissable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		console.log(123)
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}

function checkbox(el) {
	if (el.classList.contains('dissable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		console.log(123)
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}

function toggle(el) {
	if (el.classList.contains('dissable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}
function radio(el) {
	if (el.classList.contains('dissable')) {
		return
	}
	else if (el.classList.contains('checked')) {
		el.classList.remove('checked');
	}
	else {
		el.classList.add('checked');
	}
}
