import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  DataResponeModel,
  HospitalizedGraphModel,
  IsolationGraphModel,
} from '../components/models/data-response.model';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

const hospitalizedGraphSubUrl =
  'e4bf0ab8-ec88-4f9b-8669-f2cc78273edd&include_total=true&limit=100&offset=0';

const isolationGraphSubUrl =
  '9eedd26c-019b-433a-b28b-efcc98de378d&include_total=true&limit=100&offset=0';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}

  getHopitalizedByLatest(): Observable<HospitalizedGraphModel[]> {
    return this.http
      .get<DataResponeModel>(
        `${environment.coronaApiUrl + hospitalizedGraphSubUrl}&sort=תאריך desc`
      )
      .pipe(
        map((res) => {
          return res.result.records.map((record) => {
            return record;
          });
        })
      );
  }

  getIsolationsByLatest(): Observable<IsolationGraphModel[]> {
    return this.http
      .get<DataResponeModel>(
        `${environment.coronaApiUrl + isolationGraphSubUrl}&sort=date desc`
      )
      .pipe(
        map((res) => {
          return res.result.records.map((record) => {
            return record;
          });
        })
      );
  }
}
