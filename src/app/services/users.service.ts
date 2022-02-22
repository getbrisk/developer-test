import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers = () => this.http.get<User[]>(environment.apiUrl);

  // add put to update a user - url is environment.apiUrl/users/{userId}
  updateUser = (user: User) => this.http.put<User>(environment.apiUrl + '/' + user.id, user);
}
