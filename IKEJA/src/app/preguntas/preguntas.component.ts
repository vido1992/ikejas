import { Component, OnInit } from '@angular/core';
import listapreguntas from './listapreguntas.json';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  preguntasList: any = listapreguntas;

  constructor() { }

  ngOnInit(): void {
  }

}

