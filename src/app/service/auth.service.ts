import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    //make any method
    isAuthenticated(): boolean{
        //i vl check if the user is already authenticated?
       	//local cache or cookies: to save access token
 
       	//if find access token, then user is authenticated : true
       	//else it not : false
        return true;
    }
}