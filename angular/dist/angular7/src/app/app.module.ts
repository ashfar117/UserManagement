import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './shared/user.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
