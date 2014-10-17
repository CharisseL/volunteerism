var students = ['charisse', 'evan', 'greg','jessica', 'luke', 'gerald', 'adam', 'sonda', 'beck', 'leon'];

document.addEventListener('DOMContentLoaded', function(){
  var $pick = document.querySelector('.pick');
	var $select = document.getElementById('pairings');

  $pick.addEventListener('click', function(){
		
  	if ($select.value === 'randomStudent') {
      var rand = getRandomInt(0, students.length);
			var randomStudent = students[rand];
	    alert(randomStudent);
		}
	});
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
