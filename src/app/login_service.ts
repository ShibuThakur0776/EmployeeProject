import { Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {Login} from "./login"
import {map, Observable } from "rxjs";
import { JsonPipe } from "@angular/common";
import { Router } from "@angular/router";
@Injectable({
    providedIn:'root'
})
export class LoginService {
    currentUserName:any="";
    constructor(private httpClient:HttpClient,private router:Router){}
        CheckUser(login:Login):Observable<any> 
        {
            return this.httpClient.post<any>
            ("https://localhost:44301/api/account/authenticate",login).
            pipe(map(u=>{
                if(u)
                {
                    this.currentUserName=u.username;
                    sessionStorage["currentUser"]=JSON.stringify(u);
                }
                return u;
            }))
        }
        LogOut()
        {
            this.currentUserName="";
            sessionStorage.removeItem("currentUser");
            this.router.navigateByUrl("/login");
        }
}
