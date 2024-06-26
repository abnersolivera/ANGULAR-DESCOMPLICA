import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

const URL = 'https://gorest.co.in/public/v2/users';
@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(URL);
    }

    postUser(user: User){
        return this.http.post(URL, user)
        .subscribe(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    putUser(id: number, user: User){
        return this.http.put(`${URL}/${id}`, user)
        .subscribe(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    deleteUser(id: number){
        return this.http.delete(`${URL}/${id}`)
        .subscribe(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
}