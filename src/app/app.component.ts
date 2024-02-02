import { Component } from '@angular/core';
import { LoginService } from './login_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeProjectWithJwt_Identity';
  constructor(public loginService:LoginService){}
  logOutClick(){
    this.loginService.LogOut();
  }
}
