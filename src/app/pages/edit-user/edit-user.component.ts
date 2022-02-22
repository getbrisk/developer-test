import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public user?: User;
  userForm: FormGroup;
  constructor(private bsModalref: BsModalRef, private userService: UsersService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup( {
      email: new FormControl(this.user.email),
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName)
    })
  }

  closeModal() {
    this.bsModalref.hide();
  }

  submit(userForm: FormGroup) {
    const { email, firstName, lastName} = userForm.value;
    this.userService.updateUser({ ...this.user, email: email, firstName: firstName, lastName: lastName});
    this.bsModalref.hide();
  }
}
