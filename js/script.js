
	  var op; 

	  function func() {
		  		event.preventDefault();
	    var result;
		var result1;
		var result2;
	    let age = Number(document.getElementById("age").value);
	    let height = Number(document.getElementById("height").value);
	    let weight = Number(document.getElementById("weight").value);
	    switch (op) {
	      case 'Man':
	        gender = 5;
	        break;
	      case 'Women':
	        gender = (-161);
	        break;
	    }
		switch (op1) {
		  case 'min':
	        activity = 1.2;
	        break;
	      case 'low':
	        activity = 1.375;
	        break;
		  case 'mid':
	        activity = 1.55;
	        break;
		  case 'high':
	        activity = 1.725;
	        break;
		  case 'veryhigh':
	        activity = 1.9;
	        break;
	    }
		weight1 = 10 * weight;
		height1 = 6.25 * height;
		age1 = 5 * age;
		activity1 = (weight1 + height1 - age1) * activity;
		activity2 = activity1 + gender;
		plusves = activity2 + ((activity2 / 100 ) * 15);
		minusves = activity2 - ((activity2 / 100 ) * 15);
	    document.getElementById("result").innerHTML = Math.round(activity2);
		document.getElementById("result1").innerHTML = Math.round(minusves);
	    document.getElementById("result2").innerHTML = Math.round(plusves);
		document.getElementById('hidden').hidden = false;
	  }
	   document.getElementById('hidden').hidden = true;
	   document.getElementById('reset').disabled = true;
	   document.getElementById('submit').disabled = true;
	   function toggleButton()
            {
                let age = document.getElementById('age').value;
                let height = document.getElementById('height').value;
                let weight = document.getElementById('weight').value;
				i = age + height + weight;
				a = age * height * weight;
				event.preventDefault();
                if (i == 0) {
                    document.getElementById('submit').disabled = true;
                } else {
                    document.getElementById('submit').disabled = false;
					if (a == 0) {
						document.getElementById('reset').disabled = true;
					} else {
						document.getElementById('reset').disabled = false;
					}
                }
            }
