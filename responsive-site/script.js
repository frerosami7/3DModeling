var icon = document.getElementsByClassName('span-top');
icon.addEventListener("click", openList, false);

function openList() {
	console.log('yes')
    var r = document.getElementsByClassName('span-top');
    r.style.backgroundColor = '#000';
}
