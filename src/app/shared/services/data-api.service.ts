import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  DataResponeModel,
  HospitalizedModel,
} from '../components/models/data-response.model';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs';
import { R3SelectorScopeMode } from '@angular/compiler';

const hospitalizedSubUrl =
  'e4bf0ab8-ec88-4f9b-8669-f2cc78273edd&include_total=true&limit=100&offset=0';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}

  getHopitalizedByLastMonth(): Observable<HospitalizedModel[]> {
    return this.http
      .get<DataResponeModel>(`${environment.coronaApiUrl + hospitalizedSubUrl}`)
      .pipe(
        map((res) => {
          return res.result.records;
        })
      );
  }
}
