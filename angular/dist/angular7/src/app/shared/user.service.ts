import { Injectable } from '@angular/core';


import { User } from './user.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  formData = new User();
  list: User[];
  readonly rootURL = 'https://localhost:44376/api';
  constructor( private http: HttpClient) { }

  postUser(formData: User) {
   return this.http.post(this.rootURL + '/Users', formData);

  }

refreshList() {
  this.http.get(this.rootURL + '/Users')
  .toPromise().then( res => this.list = res as User[]);
}

}
