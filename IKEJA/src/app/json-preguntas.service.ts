import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPreguntasService {

  constructor( private http: HttpClient) { }

  getLocalData(){
  return this.http.get('/assets/preguntas-p.json');
  }


}
