import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pregunta-nueva',
  templateUrl: './pregunta-nueva.component.html',
  styleUrls: ['./pregunta-nueva.component.css']
})
export class PreguntaNuevaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pregunta = "";

  saveData(form:NgForm){
    console.log(form.value);
    this.pregunta = form.value
    console.log(this.pregunta)
    console.log("estoy tomando datos");
  }

}
