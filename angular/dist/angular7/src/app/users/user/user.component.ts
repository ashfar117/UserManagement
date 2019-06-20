import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared/user.service';
import { FormsModule, NgForm} from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // constructor created to use user service class
// tslint:disable-next-line: no-shadowed-variable
  constructor( public UserService: UserService) { }
               //public toastr: ToastrService

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.resetForm();
    this.UserService.formData = {
      Id : null,
      UserName: '',
      FullName: '',
      MultipleRoles: '',
      Status: '',
      CreateDate: '',
      CreateBy: '',
    };
   }
  }

  onSubmit(form: NgForm) {
this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
this.UserService.postUser(form.value).subscribe( res => {
 // this.toastr.success('Inserted succesfully');
  this.resetForm(form);
});
}
}
