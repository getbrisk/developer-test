import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  public user: any;
  constructor(private bsModalref: BsModalRef) {}

  ngOnInit(): void {}

  closeModal() {
    this.bsModalref.hide();
  }

  submit() {
    this.bsModalref.hide();
  }
}
