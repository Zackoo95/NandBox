import { Component, OnInit } from '@angular/core';
import { UserModel } from '../User.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  usermodel: UserModel = new UserModel('Ahmed','ahme21@a','123123','asdweqsad',24);
  constructor() { }

  ngOnInit() {
  }

}
