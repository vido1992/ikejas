import { Component, OnInit } from '@angular/core';
import { JsonPreguntasService } from '../json-preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  constructor( private jsonPreguntasService: JsonPreguntasService) { }

  ngOnInit(): void {
    this.jsonPreguntasService.getLocalData().subscribe(data => {
      console.log('data local> ');
      console.log(data);
    });

  }




}
