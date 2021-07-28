import { Component, OnInit } from '@angular/core';
import { JsonPreguntasService } from '../json-preguntas.service';
@Component({
  selector: 'app-responder-pregunta',
  templateUrl: './responder-pregunta.component.html',
  styleUrls: ['./responder-pregunta.component.css']
})
export class ResponderPreguntaComponent implements OnInit {

  preg: object = [];
  constructor( private jsonPreguntasService: JsonPreguntasService) { }

  ngOnInit(): void {
    this.jsonPreguntasService.getLocalData().subscribe(data => {
      console.log('data local> ');
      console.log(data);
      this.preg = Object.values(data);

    });
  }

}
