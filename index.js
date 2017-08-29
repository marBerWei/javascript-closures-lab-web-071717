const app = "I don't do much."

function bumpCounter(){

	let counter = 0

	function addBump(){
		counter += 1
	}
	function getBumps(){
		return counter
	}
	return {
		addBump, 
		getBumps
	}
}

function createAnimal(animalType){
	return function(deadlyDevice){
		return{animalType, deadlyDevice}
	}

}

let sharkCreator = createAnimal('Shark')
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
let sharkWithFrickinCannon = sharkCreator('Cannon')



// function fatBastard(meal) {
//   function whatsForDinner() { // whatsForDinner() is the inner function, a closure
//     if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function 
//       console.log('The wee man is in my belly!');
//     } else {
//       console.log(`I'm eatin' a bit of ${meal}! Burp.`);
//     }
//   }
 
//   return whatsForDinner;
// }