import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  
  public addQuestion(title:string, body:string, tags:string[]) {
    return this.http.post(
      'https://localhost:5001/api/Questions',
      {
        title: title, 
        body: body,
        tags: tags
      }
    );
  }

}
