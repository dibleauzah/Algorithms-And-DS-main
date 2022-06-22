//!_Testing--JS version...(GitHub Push 1)

//!_Test-2--i.e., GitHub

//*_1)--Print all integers from 1 to 255
//*_Note to Prof. Alex: I'll explain what I mean later, but please note that I am very disappointed with myself, re: my performance on this simple challenge! :-(

// function printNums(){
//     for (let i = 0; i <= 255; i++){
//         console.log(i);
//     }
// }

// console.log(printNums());

//*_2)--MinMaxAvg; given an array, write a function to return said array's "min," "max," and "average."
//*_Note to Prof. Alex: Ditto this challenge; again, details later.

function minMaxAvg(arr) {
	var min = Infinity;
	var max = -Infinity;
	var sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum = sum + arr[i];
        if (arr[i] < min){
			min = arr[i];
		}
		else if (arr[i] > max){
			max = arr[i];
		}
	}
	var avg = sum / arr.length;
	console.log ("Min: " + min + "; Max: " + max + "; Avg: " + avg+ ". All done! :-)");
  }

minMaxAvg([1, 2, 3, 4, 5]);