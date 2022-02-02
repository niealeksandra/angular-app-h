import { Component, OnInit } from '@angular/core';
import { GetTodosService } from 'src/app/services/get-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: any;

  constructor( private getTodosService: GetTodosService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  // get todos from service
  getTodos() {
    this.getTodosService.getTodos().subscribe((data) => {
      this.todos = data
      console.log('toto', this.todos)
    })
  }

}
