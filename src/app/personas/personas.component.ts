import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService,
              private router: Router){
              }

  ngOnInit(){
    return this.personasService.getPersonas()
      .subscribe(
        (personas: Persona[]) => {
          this.personas = personas;
          this.personasService.setPersonas(personas);
        }
      );
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}
