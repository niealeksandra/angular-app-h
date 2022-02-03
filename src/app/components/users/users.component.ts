import { Component, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { faMars, faVenus, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Output() item: Object = []

  users: any;

    // page counter
  page: number = 1;

  // Icons
  faMars = faMars;
  faVenus = faVenus;
  faCircle = faCircle;

  constructor( private userDataService: UserDataService ) { }

  ngOnInit(): void {
    this.getUsers(this.page.toString());
  }

  // get users from service
  getUsers(p: string) {
    this.userDataService.getUsers(p).subscribe((data) => {
      this.users = data
    })
  }

  //change page 
  changePage(e: any) {
    if (e === 'next' && this.page < this.users.meta.pagination.pages) {
      this.page++
      this.getUsers(this.page.toString())
    }
    if (e === 'prev' && this.page > 1) {
      this.page--
      this.getUsers(this.page.toString())
    }
  }

}
