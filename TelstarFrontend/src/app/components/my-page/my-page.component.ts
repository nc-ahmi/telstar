import {Component, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';

import {Observable} from 'rxjs';
import {Country} from './country';
import {NgbdSortableHeader, SortEvent} from '../sorting/sortable.directive';
import { MyPageService } from 'src/app/services/my-page.service';
import { COUNTRIES } from './countries';

@Component({
  selector: 'ngbd-table-complete',
  templateUrl: './my-page.component.html',
  providers: [MyPageService, DecimalPipe],
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {
  countries$: Observable<Country[]>;
  total$!: Observable<number>;
  total!: number;
  length: number;
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  constructor(public myPageService: MyPageService) {
    this.countries$ = myPageService.countries$;
    this.total$ = myPageService.total$;
    this.length = COUNTRIES.length;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.myPageService.sortColumn = column;
    this.myPageService.sortDirection = direction;
  }
}
