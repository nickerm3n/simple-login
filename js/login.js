(function () {
	document.getElementById('button').onclick = submit;
	document.getElementsByTagName('input')[0].onfocus = hideStyle;
	document.getElementsByTagName('input')[1].onfocus = hideStyle;
})();


var desc = document.querySelector('.blacklord__desc');
var blackLord = document.getElementById('blacklord');
var form = document.forms['login']

function submit() {
		var login = form.login.value.toLowerCase();
		var pass = form.password.value;

	if (login === 'admin' && pass === 'blacklord') {
		desc.style.visibility = 'visible';
		blacklord.style.animation = 'none';
		blacklord.style.top = -165 + 'px';
	}

	if (login !== 'admin') {
		document.getElementsByTagName('span')[0].style.visibility = 'visible';
		form.login.value = '';

	}

	if (pass !== 'blacklord') {
		document.getElementsByTagName('span')[1].style.visibility = 'visible';
		form.password.value = '';
	}
}

function hideStyle() {
	document.getElementsByTagName('span')[0].style.visibility = 'hidden';
	document.getElementsByTagName('span')[1].style.visibility = 'hidden';
	document.getElementById('blacklord').style.top = -30 + 'px';
	desc.style.visibility = 'hidden';
	setTimeout(function () {
		document.getElementById('blacklord').style.animation = 'wiggle 2s infinite ease-in-out';
	},1500);
	
}
