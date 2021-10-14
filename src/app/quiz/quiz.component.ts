import { Component, Input, OnInit, ViewChild } from '@angular/core';
import queFile from '../../assets/questions.json';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizname = queFile.quizname;
  questions = queFile.questions;
  response: any = {};
  result: any = {};
  displayResult: boolean = false;
  disable = false;

  submitQuiz() {
    if (this.questions.length == Object.keys(this.result).length) {
      if (confirm('Confirm Submit Test!!!')) {
        this.displayResult = true;
        this.disable = true;
      }
    } else {
      alert('Attempt all the Questions!!!');
    }
  }

  setAnswer(queid: any, ans: any) {
    this.response[queid] = 'answered';
    this.result[queid] = ans;
  }

  constructor() {}

  ngOnInit(): void {}
}
