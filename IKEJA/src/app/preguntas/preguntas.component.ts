import { Component, OnInit } from '@angular/core';
import { JsonPreguntasService } from '../json-preguntas.service';
import listapreguntas from './listapreguntas.json';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preg: object = [];
  constructor( private jsonPreguntasService: JsonPreguntasService) { }
  // tslint:disable-next-line:ban-types
  preguntasList: any = listapreguntas;

  ngOnInit(): void {
    this.jsonPreguntasService.getLocalData().subscribe(data => {
      console.log('data local> ');
      console.log(data);
      this.preg = Object.values(data);

    });

  }





}

