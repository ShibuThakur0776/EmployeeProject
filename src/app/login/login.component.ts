import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login:Login = new Login();
  loginErrorMsg: string="";

  constructor(private loginService:LoginService,private router:Router)
  {}
    loginClick()
    {
      //alert(this.login.username)
      this.loginService.CheckUser(this.login).subscribe(
        (response)=>{
          this.router.navigateByUrl("/employee");
        },
        (error)=>{
          console.log(error);
          //alert('wrong user/password');
          this.loginErrorMsg ="Wrong User/Pwd";
        
        }
      );
    }
  }
