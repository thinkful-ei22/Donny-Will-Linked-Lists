'use strict';

class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class linkedlist {
  
//initialize 
  constructor(){
    this.head= null;  
    //The beginning of the list.
    // always contains the first node. 
    //in this case we start with an empty list
  }

  //Insertion

  //@Beginning of the list

  insertFirst(item){
    this.head = new _Node(item,this.head);
  }

  //Insert at the end of the list

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  //insert Before
  insertBefore(item, nextNode){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //traverse to the insertion point of item
      let currNode = this.head;
      let previousNode = this.head;
   

      while ((currNode !== null) && (currNode.value !== nextNode)) {
        //save the previous node 
        previousNode = currNode;
        currNode = currNode.next;
      }

      previousNode.next = new _Node(item, currNode);
    }
  }

  //insert After
  insertAfter(item, previousNode){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      //traverse to the insertion point of item
      let nextNode = this.head;
      let currNode = this.head;
       
    
      while ((currNode !== null) && (currNode.value !== previousNode)) {
        //save the previous node 
        currNode = nextNode;
        nextNode = currNode.next;
      }
    
      currNode.next = new _Node(item, nextNode);
    }
  }

  //insert At a position

  insertAt(position,item){

    if(this.head === null){
      this.insertFirst(item);
    }
  
    let ticker = 0;
    let currNode = this.head;
    let nextNode = this.head;

    while ((nextNode !== null) && (ticker !== position)) {
      //save the previous node 
      currNode = nextNode;
      nextNode = currNode.next;
      ticker++;
    }

    currNode.next = new _Node(item,nextNode);

  }




  //find item in the list
  find(item) { 
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }


  //Remove item from list
  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

}

//testing our class

function main(){
  let SLL = new linkedlist();
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  console.log(SLL);

}

main();

