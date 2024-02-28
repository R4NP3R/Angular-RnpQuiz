import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { quiz_questions } from "../../../assets/data/quiz_questions";
import { Quiz } from '../../../assets/interfaces/quiz_data';

@Component({
  selector: 'app-quizz-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quizz-page.component.html',
  styleUrl: './quizz-page.component.css'
})
export class QuizzPageComponent implements OnInit{
  private id: string | null= '0'
  idNumber: number = 0
  quiz: Quiz[] = []
  tittle: string = ''
  questions: any
  questionSelected: any
  results: string[]


  answers: string[] = []
  answerImage: string = ''
  answerSelected: string = ''

  questionIndex:number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  constructor (private route: ActivatedRoute) {
    this.quiz = quiz_questions
    this.results = []
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))


    this.tittle = ''
    this.questions = ''
    this.questionSelected = ''
    this.questionMaxIndex = 0
    this.idNumber = Number(this.id)
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = this.quiz.filter(quiz => quiz.id === id)[0]
    this.tittle = result.title
    this.questions = result.questions
    this.questionSelected = result.questions[this.questionIndex]

    this.questionMaxIndex = result.questions.length
    console.log(result.results)
  }

  playerChoose(value: string) {
    this.answers.push(value)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex += 1

  if(this.questionMaxIndex > this.questionIndex) {
    this.questionSelected = this.questions[this.questionIndex]
  } else {
    const finalAnswer: string | any = await this.CheckResult(this.answers)
    this.answerSelected = quiz_questions[this.idNumber].results[finalAnswer].text
    this.answerImage = quiz_questions[this.idNumber].results[finalAnswer].image
    this.finished = true
  }
  }

  async CheckResult (answer: string[]) {
    const result = answer.reduce((previous, current, i, arr) => {
      if(arr.filter(item => item === previous).length >
      arr.filter(item => item === current).length
      ) {
        return previous
      } else {
        return current
      }
    })
    return result
  }
}

