import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamServiceService } from 'src/app/Services/exam-service.service';

@Component({
  selector: 'app-exam-score',
  templateUrl: './exam-score.component.html',
  styleUrls: ['./exam-score.component.css']
})
export class ExamScoreComponent implements OnInit {
  exam : any
  scores: any[] = []
  constructor(private route: ActivatedRoute, private examService: ExamServiceService, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.examService.getById(id).subscribe(
      data => {this.exam = data}
    )
    this.examService.getExamScore(id).subscribe(
      data => {
          this.scores = data
      }
    )
  }

  back(){
    this.location.back()
  }

}
