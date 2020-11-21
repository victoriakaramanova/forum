import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { IPost } from './interfaces/post';

const apiUrl = environment.apiUrl;
@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPostList(limit?: number): Observable<IPost[]> {
    // return of([{post1},[post2]]);
    return this.http.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
      );
  }
}
