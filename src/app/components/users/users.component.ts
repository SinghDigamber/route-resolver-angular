import { Component, OnInit } from '@angular/core';
import { UsersListService } from './../../service/users-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  Users: any = [];

  constructor(
    private usersListService: UsersListService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // Can access route resolver data with ActivatedRoute route service
    this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
      console.log(data)
    })

    this.usersListService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })
  }

}