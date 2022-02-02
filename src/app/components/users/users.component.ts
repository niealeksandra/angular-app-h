import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { faMars, faVenus, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  // Icons
  faMars = faMars;
  faVenus = faVenus;
  faCircle = faCircle;

  constructor( private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // get users from service
  getUsers() {
    this.userDataService.getUsers().subscribe((data) => {
      this.users = data
      console.log(this.users)
    })
  }

}
