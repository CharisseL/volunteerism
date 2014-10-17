var students = ['charisse', 'evan', 'greg','jessica', 'luke', 'gerald', 'adam', 'sonda', 'beck', 'leon'];

document.addEventListener('DOMContentLoaded', function(){
  var $pick = document.querySelector('.pick');
	var $select = document.getElementById('pairings');

  $pick.addEventListener('click', function(){
		
  	if ($select.value === 'randomStudent') {
	    alert('hi');
		}
	});
});

