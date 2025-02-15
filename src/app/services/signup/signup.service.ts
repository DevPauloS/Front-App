import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginResponse } from '../../types/login-response.type';
import { tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }
  
  
    login(name:string, password:string){
        return this.httpClient.post<loginResponse>("/login",{name,password}).pipe(tap((value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("auth-token", value.name)
        }) );
      }
}
