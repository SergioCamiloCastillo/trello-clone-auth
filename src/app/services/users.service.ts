import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '@models/user.model';
import { checkToken } from '../interceptor/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiUrl = environment.API_URL;
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/api/v1/users`, {
      context: checkToken(),
    });
  }
}
