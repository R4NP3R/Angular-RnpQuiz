import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { quiz_questions } from '../../../assets/data/quiz_questions';
import { Quiz } from '../../../assets/interfaces/quiz_data';
import { QuizzCardComponent } from '../../components/quizz-card/quizz-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizzCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  quiz: Quiz[] = []

  constructor() {
    this.quiz = quiz_questions

  }

  ngOnInit(): void {

  }
}
