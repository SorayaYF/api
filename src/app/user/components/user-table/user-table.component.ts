import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  public users: User[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.usersSubject.subscribe(users => {
      this.users = users; 
    });
    this.service.listAll().subscribe(users => {
      this.service.usersSubject.next(users); 
    });
  }
}