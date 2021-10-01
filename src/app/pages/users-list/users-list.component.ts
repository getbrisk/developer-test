import { EditUserComponent } from './../edit-user/edit-user.component';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  public users: Observable<any> = new Observable<any>();
  private modalRef?: BsModalRef | null;
  constructor(
    private usersService: UsersService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  editUser(user: any) {
    const initialState = {
      user,
    };
    this.modalRef = this.bsModalService.show(
      EditUserComponent,
      Object.assign({}, { initialState })
    );
    this.modalRef.onHide?.subscribe((event) => this.getUsers());
  }

  getUsers() {
    this.users = this.usersService.getAllUsers();
  }
}
