import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FilterItem } from './filter-item';


@Component({
  selector: 'app-filters-component',
  templateUrl: './filters-component.component.html',
  styleUrls: ['./filters-component.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: FiltersComponentComponent }   
  ]
})
export class FiltersComponentComponent implements OnInit {

  @Input() filtersList: FilterItem[] = [];

  @Output() filterEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(event: Event | any, filter: FilterItem){
    if(filter.type === 'string'){
      this.filterEvent.emit(filter.onFilterChange(filter.filterId, (event.target as HTMLInputElement).value ));
    }

    if(filter.type === 'number'){
      this.filterEvent.emit(filter.onFilterChange(filter.filterId, (event.target as HTMLInputElement).value ));
    }

    if(filter.type === 'boolean'){
      this.filterEvent.emit(filter.onFilterChange(filter.filterId, event.checked ));
    }

    if(filter.type === 'date'){
      this.filterEvent.emit(filter.onFilterChange(filter.filterId, new Date(event.value) ));
    }
  }

}
