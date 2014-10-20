
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//add student to list
function addItemToList($list, itemText){
	var $li = document.createElement('li');
	$li.innerHTML = itemText;
	$list.appendChild($li);
}

function neighborGrouping(list, groupSize, target){
	var listClone = list.slice(0);
				while (listClone.length > 0) {
					var listItems = listClone.splice(0, groupSize);
					addItemToList(target, listItems.join(' &amp; '));
				}
}

function arrayShuffle(array){
	var arrayClone = array.slice(0);
	var temp;
	for (var i = 0; i < arrayClone.length; i++){
		var rand = getRandomInt(0, arrayClone.length);
		temp = arrayClone[i];
		arrayClone[i] = arrayClone[rand];
		arrayClone[rand] = temp;
	}
	return arrayClone;

}

function show(element){
	element.classList.remove('hidden');						
}

//add eventListener..what happens on the click
document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('generate-group');
	var students = ['charisse', 'evan', 'greg','jessica', 'luke', 'gerald', 'adam', 'sonda', 'beck', 'leon'];

	var $select = $form.querySelector('select');
	var $numBox = $form.querySelector('input [type='number']');
	$select.addEventListener('change', function (event){
		if (event.currentTarget.value === 'randN'){
			show($numBox);
			}else {
				hide($numBox);
			}
		});

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
				neighborGrouping(students, 2, $ul);

		} else if (groupCriteria === 'team-three') {
				neigborGrouping(students, 3, $ul);
		}else if(groupCriteria === 'randPair'){
			var shuffledStudents = arrayShuffle(students);
			neighborGrouping(shuffledStudents, 2, $ul);
		}else if(groupCriteria === 'randN'){

		}
			
	});
});
	

