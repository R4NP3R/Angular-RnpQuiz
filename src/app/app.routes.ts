import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzPageComponent } from './pages/quizz-page/quizz-page.component';

export const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
    path: 'quizz/:id',
    component: QuizzPageComponent
  }
];
