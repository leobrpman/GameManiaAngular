import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginModel = new Login ("", "")
  
  onSubmit () {
    console.log(this.loginModel)
  }

}