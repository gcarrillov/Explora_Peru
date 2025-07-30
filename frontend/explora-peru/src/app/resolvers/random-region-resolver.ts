import {ResolveFn} from '@angular/router';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const randomRegionResolver: ResolveFn<any> = (route, state) => {
  const http = inject(HttpClient);
  return http.get('http://localhost:8000/api/regiones/descrubrir/');
};
