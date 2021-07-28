import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { PreguntasComponent} from './preguntas/preguntas.component';
import { ResponderPreguntaComponent} from './responder-pregunta/responder-pregunta.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'responder-pregunta', component: ResponderPreguntaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
