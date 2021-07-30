import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBo0D0w51WK-Q6vg_C8ojO8swT1MnNMEKQ",
      authDomain: "curso-angular-udemy-948d6.firebaseapp.com"
    });
  }

  isLoggedIn() {
    return this.loginService.isLogged();
  }

  salir() {
      this.loginService.logout();
  }

}
