import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard-space',
  templateUrl: './dashboard-space.component.html',
  styleUrls: ['./dashboard-space.component.scss']
})
export class DashboardSpaceComponent implements OnInit {
  massageAddQuestion: String = ''
  massageErrorAddQuestion: String = ''
  IsSuccessAddQuestion: Boolean = false
  AllQuestion: any = []
  AllCites: any = []
  AllQuestionErrorMassage: String = ''
  ShowQuestionSection: Boolean = false
  showCites: Boolean = false
  MassageDeleteQuestion: String = ''
  allCitesMassage: String = ''
  form: any = {
    Question: null,
    Answer: null
  };

  constructor(private AdminService: AdminService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.AdminService.getAllQuestion().subscribe(result => {
      this.AllQuestion = result.questionsArray
    }, err => {
      this.AllQuestionErrorMassage = err.massage

    })

    // get All cites
    this.AdminService.getAllCites().subscribe(result => {
      this.AllCites = result.citesArray
    }, err => {
      this.allCitesMassage = err.massage
    })


  }



  onSubmit() {
    const formData = new FormData()
    const {
      Question,
      Answer,

    } = this.form;
    this.AdminService.addQuestionAndAnswer(Question, Answer).subscribe(result => {
      this.massageAddQuestion = result.massage
      this.IsSuccessAddQuestion = true
      this.ngOnInit()
    }, err => {
      this.massageErrorAddQuestion = err.massage
    })

  }

  deleteQuestion(idQuestion: any) {

    this.AdminService.deleteQuestion(idQuestion).subscribe(result => {

      this.MassageDeleteQuestion = result.massage
      this.openSnackBar(this.MassageDeleteQuestion)

      this.ngOnInit()
    }, err => {
      this.massageErrorAddQuestion = err.massage;
      this.openSnackBar(this.MassageDeleteQuestion)
    })

  }

  openSnackBar(massage: any,) {
    this._snackBar.open(massage, 'اغلاق', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,

    });
  }

  showQuestionSection() {
    this.ShowQuestionSection = !this.ShowQuestionSection

  }

  showCitesSection() {
    this.showCites = !this.showCites
  }

}
