import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {

  public list : Observable<User[]>

  constructor(private service : UserService) { 
    this.list = this.service.users$
    console.log(this.list);
  }

  ngOnInit(): void {
  }

}