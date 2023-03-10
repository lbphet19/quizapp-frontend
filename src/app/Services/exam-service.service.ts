import { Question } from './../Model/question';
import { Exam } from './../Model/exam';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
  private API_URL : string = 'http://localhost:8080/api/v2/exam'
  constructor(private http:HttpClient) { }
  get():Observable<Exam[]>{
    return this.http.get<Exam[]>(this.API_URL)
  }
  getById(id:number):Observable<Exam>{
    return this.http.get<Exam>(`${this.API_URL}/${id}`)
  }
  getByCategoryId(categoryId:number):Observable<Exam[]>{
    return this.http.get<Exam[]>(`${this.API_URL}/category/${categoryId}`)
  }
  getQuizWithQuestions(examId:number):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${examId}/getQuestions`)
  }
  getQuestionIds(examId:number):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${examId}/getQuestionsIds`)
  }
  addQuestion(obj:any):Observable<any>{
    return this.http.post<any>(`${this.API_URL}/addQuestion`,obj)
  }
  put(exam:any):Observable<any>{
    return this.http.put<any>(`${this.API_URL}`,exam)
  }
  // getByCategory(catId:number):Observable<Quiz[]>{
  //   return this.http.get<Quiz[]>(`${this.API_URL}/category/${catId}`)
  // }
  // getQuizAtHomePage():Observable<QuizCategory[]>{
  //   return this.http.get<QuizCategory[]>(`${this.API_URL}/getQuizByCatAtHomepage`)
  // }
  // getUserQuiz():Observable<Quiz[]>{
  //   return this.http.get<Quiz[]>(`${this.API_URL}/getUserQuiz`)
  // }
  // search(keyword:string):Observable<Quiz[]>{
  //   return this.http.get<Quiz[]>(`${this.API_URL}/search?keyword=${keyword}`)
  // }
  // update(quiz:Quiz):Observable<Quiz>{
  //   return this.http.put<Quiz>(`${this.API_URL}/update`,quiz)
  // }
  save(exam:any):Observable<Exam>{
    return this.http.post<Exam>(`${this.API_URL}`,exam)
  }
  getQuestionByExamId(examId:number):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${examId}/getQuestion`)
  }
  getQuestionForResult(examId:number):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${examId}/getQuestionForResult`)
  }
  getExamCategoryId(examId:number):Observable<number>{
    return this.http.get<number>(`${this.API_URL}/${examId}/getCategoryId`)

  }
  getExamScore(examId:number):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${examId}/getExamScore`)
  }
  // saveMultipleQuiz(quiz:Quiz[]):Observable<Quiz[]>{
  //   return this.http.post<Quiz[]>(`${this.API_URL}/multiple`,quiz)
  // }
  // delete(id:number):Observable<String>{
  //   return this.http.delete<String>(`${this.API_URL}/delete/${id}`)
  // }
}
