import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public user?: User;
  constructor(private bsModalref: BsModalRef) {}

  ngOnInit(): void {}

  closeModal() {
    this.bsModalref.hide();
  }

  submit() {
    this.bsModalref.hide();
  }
}
