/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// status: passed

class Todo {
  constructor(){
    this.lists = [];
  }

  add(str){
    this.lists.push(str);
  }
  remove(id){
    if (id<0 || id >= this.lists.length) {
      return null;
    }
    let temp = [];
    for(let i = 0; i<this.lists.length; i++){
      if(i != id){
        temp.push(this.lists[i]);
      }
    }

    this.lists = temp;
  }
  update(id, str){
    if (id < 0 || id>=this.lists.length){
      return null;
    }
    this.lists[id] = str;
  }
  getAll(){
    return this.lists;
  }
  get(id){
    if (id < 0 || id >= this.lists.length) {
      return null;
    }
    return this.lists[id];
  }
  clear(){
    this.lists = [];
  }

}

module.exports = Todo;
