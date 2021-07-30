import { LoginService } from './login/login.service';
import { Persona } from './persona.model';
import { HttpClient } from '@angular/common/http'; //Tambien hay que incluir el import en app.module.ts
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient, private loginService:LoginService) {}

    //Cargar personas
    loadPerson() {
        const token = this.loginService.getToken();
        return this.httpClient.get<Persona[]>('https://curso-angular-udemy-948d6-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    //Guardar personas
    savePerson(persons: Persona[]) {
      const token = this.loginService.getToken();
        this.httpClient.put('https://curso-angular-udemy-948d6-default-rtdb.firebaseio.com/datos.json?auth='+token, persons)
        .subscribe(
            response => console.log("Guardamos la persona" + response),
            error => console.log("Error al guardar la persona" + error)
        );
    }

    //Modificar personas
    updatePerson(index: number, persons: Persona) {
      const token = this.loginService.getToken();
      let url: string = 'https://curso-angular-udemy-948d6-default-rtdb.firebaseio.com/datos/' + index + '.json?auth='+token;
        this.httpClient.put( url , persons)
        .subscribe(
            response => console.log("Modificamos la persona" + response),
            error => console.log("Error al modificar la persona" + error)
        );
    }

    //Eliminar personas
    deletePerson(index: number) {
      const token = this.loginService.getToken();
        let url: string = 'https://curso-angular-udemy-948d6-default-rtdb.firebaseio.com/datos/auth='+token + index + '.json?auth='+token;
        this.httpClient.delete( url )
        .subscribe(
            response => console.log("Eliminamos la persona" + response),
            error => console.log("Error al eliminar la persona" + error)
        );
    }
}
