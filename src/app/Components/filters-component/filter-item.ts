import { EventEmitter } from "@angular/core";

export interface FilterItem {
    filterId: string,
    type: 'string' | 'number' | 'date' | 'boolean',
    label?: string,
    value?: boolean |string | number | Date | any,
    onFilterChange: EventEmitter<any> | any,
  }