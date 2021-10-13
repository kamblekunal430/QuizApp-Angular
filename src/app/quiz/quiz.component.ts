import { Component, OnInit } from '@angular/core';
import queFile from '../../assets/questions.json';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizname = queFile.quizname;
  questions = queFile.questions;

  constructor() {}

  ngOnInit(): void {
    console.log(queFile);
  }
}
