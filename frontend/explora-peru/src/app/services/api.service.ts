import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  getRegiones(): Observable<any> {
    return this.http.get(`${BASE_URL}/regiones/`);
  }
}
