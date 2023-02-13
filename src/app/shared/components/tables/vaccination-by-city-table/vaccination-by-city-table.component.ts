import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import data from '../../../../../assets/vaccinatedByCityData.json';
import { VaccinationByCityModel } from '../../models/table.model';

const ELEMENT_DATA: VaccinationByCityModel[] = data.map(
  (val) =>
    ({
      city: val.city,
      firstDose: val.vaccinated_first_dose,
      secondDose: val.vaccinated_second_dose,
      thirdDose: val.vaccinated_third_dose,
    } as VaccinationByCityModel)
);

@Component({
  selector: 'app-vaccination-by-city-table',
  templateUrl: './vaccination-by-city-table.component.html',
  styleUrls: ['./vaccination-by-city-table.component.scss'],
})
export class VaccinationByCityTableComponent  {

  displayedColumns: string[] = ['city', 'firstDose', 'secondDose', 'thirdDose'];
  dataSource = new MatTableDataSource<VaccinationByCityModel>(ELEMENT_DATA);

  constructor() {}


  ngOnInit(): void {}
}
