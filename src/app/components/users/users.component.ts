import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/Interfaces/response.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  response: UserResponse

  ngOnInit(): void {
    this.userService.getUsers(5).subscribe((users) => {
      this.response = users;
    })
  }

}
