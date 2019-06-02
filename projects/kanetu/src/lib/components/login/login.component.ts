import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(username: string, password: string) {
    alert(`
      Your email: ${username}
      Your password: ${password}
    `);
  }
}
