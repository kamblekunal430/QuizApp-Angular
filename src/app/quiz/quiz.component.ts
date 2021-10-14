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
  showReview: any = false;

  setAnswer(queid: any, ans: any) {
    this.response[queid] = 'answered';
    this.result[queid] = ans;
    console.log(this.response, this.result);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(queFile);
    this.questions.forEach((que) => {
      que.options.forEach((opt) => {
        console.log(opt);
      });
    });
  }
}
