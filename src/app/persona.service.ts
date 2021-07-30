import { DataService } from './data.service';
import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [];



  saludar = new EventEmitter<number>();

  constructor(private loggingService:LoggingService,
              private dataService: DataService){}

  getPersonas(){
      return this.dataService.loadPerson();
  }

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('agregamos persona:' + persona.nombre)
    this.personas.push(persona);
    this.dataService.savePerson(this.personas);
  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona: Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.updatePerson(index, persona1);
  }

  modificarPersonas(){
    if (this.personas != null){
      this.dataService.savePerson(this.personas);
    }
  }

  eliminarPersona(index:number){
    this.personas.splice(index,1);
    this.dataService.deletePerson(index);
    //se vuelve a guardar el array para regenerar los indices en la bd
    this.modificarPersonas();
  }
}
