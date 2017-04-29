import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../user';

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {
  model = new User('', '', '');

  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      registerAccountPath: '/api/auth'
    });
  }

  ngOnInit() {
  }

  register() {
    this._tokenService.registerAccount({
      email:                this.model.email,
      password:             this.model.password,
      passwordConfirmation: this.model.passwordConfirmation
    });
  }
}
