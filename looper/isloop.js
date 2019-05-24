'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let array = []

  let tmpNode = linkedlist.head
  while(tmpNode){
    if (array.includes(tmpNode.value)) {
      return true
    } 
    array.push(tmpNode.value)
    tmpNode = tmpNode.next
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop