import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
//import * as firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/auth";



 @Injectable()
 export class LoginService{

    token: string;

    constructor(private router: Router) {}

    login(email: string, password: string){
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken().then(
            token => {
              this.token = token;
              this.router.navigate(['/']);
            }
          );
        }
      );
    }

    getToken(){
      return this.token;
    }

    //Pregunta si esta logeado
    isLogged(){
      return this.token != null;
    }

    logout(){
      firebase.auth().signOut().then(
        () => {
          this.token = null;
          this.router.navigate(['login']);
        }).catch(
          error => {
            console.log(error);
          }
        );
    }
 }
