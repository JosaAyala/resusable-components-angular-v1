import { Component } from '@angular/core'
import { FilterItem } from './Components/filters-component/filter-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'resusable-components-angular-v1'

  filtersList: FilterItem[] = [
    {
      filterId: 'nombre',
      type: 'string',
      label: 'Nombre',
      value: null,
      onFilterChange: (filterId: any, newValue: any) =>
        this.applyChangesOnFilters(filterId, newValue),
    },
    {
      filterId: 'edad',
      type: 'number',
      label: 'Edad',
      value: 0,
      onFilterChange: (filterId: any, newValue: any) =>
        this.applyChangesOnFilters(filterId, newValue),
    },
    {
      filterId: 'tieneVisa',
      type: 'boolean',
      label: 'Tiene Visa',
      value: false,
      onFilterChange: (filterId: any, newValue: any) =>
        this.applyChangesOnFilters(filterId, newValue),
    },
    {
      filterId: 'fechaNac',
      type: 'date',
      label: 'Fecha Nacimiento',
      value: new Date(),
      onFilterChange: (filterId: any, newValue: any) =>
        this.applyChangesOnFilters(filterId, newValue),
    },
  ]

  applyChangesOnFilters(
    filterId: string,
    newValue: any,
  ) {
    let indexItem = this.filtersList.findIndex(
      (item) => item.filterId === filterId,
    )
    this.filtersList[indexItem].value = newValue
  }
}
