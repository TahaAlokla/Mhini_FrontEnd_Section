import { QuestionAnswerServieService } from './../../service/question-answer-servie.service';
import { Component, OnInit } from '@angular/core';
import { QuestionAnswerInterface } from '../../interfaces/question-answer-interface';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
 QuestionsData:any={}
 panelOpenState:Boolean=false

 
  constructor(private QuestionService :QuestionAnswerServieService) { }

  ngOnInit(): void {
    this.QuestionService.getAllQuestion().subscribe(data=>{
      console.log(data);
      this.QuestionsData =data

    })
  }

}
