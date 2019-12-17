import { Component, OnInit } from '@angular/core';
import { UserModel } from '../User.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userModels: UserModel[] = [
    new UserModel('Ahmed Sameh', 'ahmed@a', '123123', 'weqweqwsda', 21),
    new UserModel('Ahmed Sameh2', 'ahmed@a', '123123', 'weqweqwsda', 21),
    new UserModel('Ahmed Sameh3', 'ahmed@a', '123123', 'weqweqwsda', 21),
    new UserModel('Ahmed Sameh4', 'ahmed@a', '123123', 'weqweqwsda', 21),
    new UserModel('Ahmed Same5', 'ahmed@a', '123123', 'weqweqwsda', 21),
    new UserModel('Ahmed Sameh6', 'ahmed@a', '123123', 'weqweqwsda', 21),
  ]

  constructor() { }

  ngOnInit() {
  }

}
