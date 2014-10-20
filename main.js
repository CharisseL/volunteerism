
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//add student to list
function addItemToList($list, itemText){
	var $li = document.createElement('li');
	$li.innerHTML = itemText;
	$list.appendChild($li);
}
//add eventListener..what happens on the click
document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('generate-group');
	var students = ['charisse', 'evan', 'greg','jessica', 'luke', 'gerald', 'adam', 'sonda', 'beck', 'leon'];
//
	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var $ul = document.getElementById('results');
		$ul.innerHTML = '';				//print the name in an ul in the DOM

		var groupCriteria = $form.querySelector('select').value;
		
		if(groupCriteria === 'random-student'){		//if random-student is selected, then 
				var studentNumber = getRandomInt (0, students.length);		//run this & pick random student [i] 
				var studentName = students[studentNumber]; 	//student name will be name in [index position]
				addItemToList($ul, studentName);
		} else if (groupCriteria === 'neighbor-pairing') {
				var studentsClone = students.slice(0);
				while ( studentsClone.length > 0) {
					var studentNames = studentsClone.splice(0, 2);
					addItemToList($ul, studentNames.join(' &amp; '));
				}
			}
	});
});
	

