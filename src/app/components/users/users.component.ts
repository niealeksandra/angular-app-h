import { Component, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { faMars, faVenus, faCircle } from '@fortawesome/free-solid-svg-icons'
import { DataSharingService } from 'src/app/services/data-sharing.service';

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

  constructor( 
    private userDataService: UserDataService,
    private dataSharingService: DataSharingService ) { }

  ngOnInit(): void {

  // check if users are on DataSharingService or save data to service
    this.dataSharingService.users$.subscribe( value => {
      this.users = value

        if (this.users.length == 0) {
          this.getUsers(this.page.toString());
        } else {
          //set page from server
          this.page = this.users.meta.pagination.page
        }
    });
    // this.getUsers(this.page.toString());
  }

  // get users from service
  getUsers(p: string) {
    this.userDataService.getUsers(p).subscribe( data => {
      this.users = data
      //set page from data
      this.page = this.users.meta.pagination.page
      //save it to sharing service
      this.dataSharingService.isUsers.next(this.users);
    })
  }

  // change page 
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
