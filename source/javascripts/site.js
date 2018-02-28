// This is where it all goes :)
function toggle_visibility() {
	var e = document.getElementById('nav__dropdown');
	if(e.style.display == 'block')
		e.style.display = 'none';
  else
    e.style.display = 'block';
}