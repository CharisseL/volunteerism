//getJSON(with url, function(JSON data) {blah}
// getJSON(http2, 

function getJSON(url, cb){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url); //get request to a url, setting url and verb for request
	xhr.onload = function() {			//setup onload request
		cb(JSON.parse(xhr.responseText));	
	};
	xhr.send();			//send request; sets 
}	



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

function hide(element){
	element.classList.add('hidden');
}

//add eventListener..what happens on the click
document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('generate-group');
	
	var $select = $form.querySelector('select');
	var $numBox = $form.querySelector('input[type=number]');
	$select.addEventListener('change', function (event){
		if (event.currentTarget.value === 'randN'){
			show($numBox);
			}else {
				hide($numBox);
			}
		});
	$form.addEventListener('submit', function(event){
		event.preventDefault();
		
		getJSON('https://volunteerism-cnl.firebaseio.com/students.json', function(data){
		var	students = data;
		var shuffledStudents;
		
		var $ul = document.getElementById('results');
		$ul.innerHTML = '';				//print the name in an ul in the DOM

		var groupCriteria = $form.querySelector('select').value;
		
		switch(groupCriteria){		//if random-student is selected, then 
			case 'random-student':	
				var studentNumber = getRandomInt (0, students.length); 
				var studentName = students[studentNumber];
				addItemToList($ul, studentName);
				break;
			case 'neighbor-pairing': 
				neighborGrouping(students, 2, $ul);
				break;	
			case 'team-three': 
				neighborGrouping(students, 3, $ul);
				break;
		  case 'randPair':
				shuffledStudents = arrayShuffle(students);
				neighborGrouping(shuffledStudents, 2, $ul);
	 		case 'randN':
				shuffledStudents = arrayShuffle(students);
				neighborGrouping(shuffledStudents, $numBox.value, $ul);
			}
		});
	});
});
	

