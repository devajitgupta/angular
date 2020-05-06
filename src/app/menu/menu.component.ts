import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [UserService]

})
export class MenuComponent implements OnInit {

  constructor( ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
