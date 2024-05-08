import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
})
export class UserPageComponent implements OnInit {
  users!: Observable<User[]>;
  constructor(private service: UserService) {}
  novoUser: User | null = null;
  ngOnInit() {
    this.users = this.service.getUsers();
  }

  editar(user: User) {
    const editado = user;
    editado.name = 'Editado';
    this.service.putUser(user.id, editado);
  }

  novo() {
    const novo: User = {
      id: 27,
      name: 'Novo',
      email: '@gmail.com',
      gender: 'mas',
      status: 'ativo',
    };

    this.service.postUser(novo);
  }

  deletar(user: User) {
    this.service.deleteUser(user.id);
  }
}
