import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers = () => this.http.get(environment.apiUrl);

  // add put to update a user - url is environment.apiUrl/users/{userId}
  updateUser = (user: any) => this.http.put(environment.apiUrl, user);
}
