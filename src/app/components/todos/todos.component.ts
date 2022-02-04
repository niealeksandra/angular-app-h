import { Component, OnInit, Output } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
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

  constructor( 
    private getTodosService: GetTodosService,
    private dataSharingService: DataSharingService) { }

  ngOnInit(): void {

    // check if todos are on DataSharingService or save data to service
    this.dataSharingService.todos$.subscribe( value => {
      this.todos = value
          if (this.todos.length == 0) {
            this.getTodos(this.page.toString())
          }
    });

    // this.getTodos(this.page.toString())
  }

  // get todos from service
  getTodos(p: string) {
    this.getTodosService.getTodos(p).subscribe((data) => {
      this.todos = data
      //save it to sharing service
      this.dataSharingService.isTodos.next(this.todos);
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
