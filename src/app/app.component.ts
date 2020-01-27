import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo Application';

  todoList: any = [];
  todoData;
  updateTodo = false;

  // localStoreSet = localStorage.setItem("data", this.todoList);
  // localStoreget = localStorage.getItem("data");

  addTodoData = (data) => {
    this.todoList.push(data);
    this.todoData = "";
  };

  editTodo = (list) => {
    this.todoData = list;
    this.updateTodo = true;
    console.log("Edit");
  }

  completeTodo = (list) => {
    let index = this.todoList.indexOf(list);
    // returnTrue = (index) => { return true; }
  }


  updateTodoData = () => {
    console.log("Updated Sucessfully");
    this.updateTodo = false;
    this.todoData = "";
  }
  removeList = (list) => {
    let index = this.todoList.indexOf(list);
    this.todoList.splice(index, 1);
    console.log(list + " Removed");
  }

  ngOninit(){
    // console.log(this.localStoreget);
  }

}
