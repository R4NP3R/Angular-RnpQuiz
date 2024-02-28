import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quizz-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './quizz-card.component.html',
  styleUrl: './quizz-card.component.css'
})
export class QuizzCardComponent {
@Input()
id: string = ''
@Input()
img: string = ''
@Input()
title: string = ''

}
