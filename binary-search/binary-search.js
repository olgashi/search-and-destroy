'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 0){
		return false
	}
	let index = Math.floor(array.length / 2)
	if (array[index] === target) {
		return true
	} else if (array[index] < target) {
		return binarySearch(array.slice(0, index))
	} else {
		return binarySearch(array.slice(index + 1))
	}	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch