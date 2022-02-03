import { Component, OnInit, Output } from '@angular/core';
import { GetTodosService } from 'src/app/services/get-todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Output() item: Object = []
  
  todos: any;

  // page counter
  page: number = 1;

  constructor( private getTodosService: GetTodosService) { }

  ngOnInit(): void {
    this.getTodos(this.page.toString())
  }

  // get todos from service
  getTodos(p: string) {
    this.getTodosService.getTodos(p).subscribe((data) => {
      this.todos = data
    })
  }

  //change page 
  changePage(e: any) {
    if (e === 'next' && this.page < this.todos.meta.pagination.pages) {
      this.page++
      this.getTodos(this.page.toString())
    }
    if (e === 'prev' && this.page > 1) {
      this.page--
      this.getTodos(this.page.toString())
    }
  }

}
