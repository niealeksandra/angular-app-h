import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  //get data from component
  @Input() item: any = [];

  //send page
  @Output() pageEvent = new EventEmitter<string>()

   // Icons
   faAngleLeft = faAngleLeft;
   faAngleRight = faAngleRight;


  constructor() { }

  ngOnInit(): void {
  }


  public changePage(value: string) {
    this.pageEvent.emit(value)
  }

}
