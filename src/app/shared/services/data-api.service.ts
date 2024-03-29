import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  DataResponeModel,
  HospitalizedGraphModel,
  IsolationGraphModel,
  TestsGraphModel,
} from '../components/models/data-response.model';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import * as Highcharts from 'highcharts';
Highcharts.setOptions({
  lang: {
    shortMonths: [
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
    ],
    weekdays: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    rtl: true,
  },
  tooltip: {
    pointFormatter: function () {
      let point = this;
      let series = point.series;
      return ` <b> ${series.name}: </b>  ${point.y}`;
    },
  },
});


const hospitalizedGraphSubUrl =
  'e4bf0ab8-ec88-4f9b-8669-f2cc78273edd&include_total=true&limit=100&offset=0';

const isolationGraphSubUrl =
  '9eedd26c-019b-433a-b28b-efcc98de378d&include_total=true&limit=100&offset=0';

  const testsGraphSubUrl =
  'dcf999c1-d394-4b57-a5e0-9d014a62e046&include_total=true&limit=1000&offset=0';



@Injectable({
 providedIn: 'root'
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

  getCoronaTestResults(): Observable<TestsGraphModel[]> {
    return this.http
      .get<DataResponeModel>(
        `${environment.coronaApiUrl + testsGraphSubUrl}`
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
