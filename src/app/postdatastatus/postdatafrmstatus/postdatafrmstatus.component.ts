import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
} from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import * as _moment from 'moment';
// import {default as _rollupMoment,  Moment} from 'moment';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TranslocoService } from '@ngneat/transloco';
// const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-postdatafrm',
  templateUrl: './postdatafrmstatus.component.html',
  styleUrls: ['./postdatafrmstatus.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class Postdatafrmstatus implements OnInit, AfterViewInit, OnDestroy {
  caseform: FormGroup;
  inc_app_sec_member_error = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['id', 'row', 'col', 'value', 'error'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayit = false;
  private mediaSub: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private transloco: TranslocoService
  ) {}

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }
  setActiveLang(lang: string) {
    this.transloco.setActiveLang(lang);
  }
  ngOnInit() {
    // this.length = ELEMENT_DATA.length;

    // this.dataSource.paginator = this.paginator;
    this.caseform = new FormGroup({
      classification: new FormControl('', Validators.required),
      controlnumber: new FormControl(''),
      recpdate: new FormControl(''),
      appdate: new FormControl('', [Validators.required, this.dateValidator]),
      appdept: new FormControl(''),
      applicant: new FormControl(''),
      contractname: new FormControl(''),
      contracteditem: new FormControl(''),
      inc_app_sec_memberyes: new FormControl(''),
      inc_app_sec_memberno: new FormControl(''),
      new_renew: new FormControl(''),
      autoupdate: new FormControl(''),
      contracttype: new FormControl('', Validators.required),
      contractor: new FormControl(''),
      begcontperiod: new FormControl(''),
      endcontperiod: new FormControl(''),
      legelrep: new FormControl(''),
      fix_ver_contract_att: new FormControl(''),
      exsist_extr_consult: new FormControl(''),
      legel_dept_notes: new FormControl(''),
      status_creating: new FormControl(''),
      status_receiving: new FormControl(''),
      status_app_responding: new FormControl(''),
      status_contract_signed: new FormControl(''),
      status_cancelled: new FormControl(''),
      status_requesting: new FormControl(''),
      status_correspond_legl_dept: new FormControl(''),
      status_resp_legl_dept: new FormControl(''),
      status_completed: new FormControl(''),
      country_us: new FormControl(''),
      country_china: new FormControl(''),
      country_korea: new FormControl(''),
      country_europe: new FormControl(''),
      country_tiwan: new FormControl(''),
      country_india: new FormControl(''),
      country_others: new FormControl(''),
    });
    this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((v) => {
        console.log(v.mediaQuery, v.mqAlias);
      });
      console.log('-----');
    });
  }
  toggle() {
    this.displayit = true;
  }
  show_inc_app_sec(event: MatCheckboxChange): void {
    console.log(event.checked);
    if (
      !!this.caseform.value.inc_app_sec_memberno === true ||
      !!this.caseform.value.inc_app_sec_memberyes === true
    ) {
      this.inc_app_sec_member_error = false;
    } else {
      this.inc_app_sec_member_error = true;
    }
  }
  onSubmit() {
    if (
      !!this.caseform.value.inc_app_sec_memberno === true ||
      !!this.caseform.value.inc_app_sec_memberyes === true
    ) {
      this.inc_app_sec_member_error = false;
    } else {
      this.inc_app_sec_member_error = true;
    }
  }

  dateValidator(c: AbstractControl): { [key: string]: boolean } {
    let value = c.value;
    if (value && typeof value === 'string') {
      let match = value.match(/^[0-9]{4}[\/][0-9]{2}[\/][0-9]{2}$/);
      if (!match) {
        return { dateInvalid: true };
      } else if (match && match[0] !== value) {
        return { dateInvalid: true };
      }
    }
    return null;
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: number;
}
export interface PeriodicElement2 {
  id: string;
  row: string;
  col: string;
  value: string;
  error: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'A0001', name: 'Filename', weight: 'Incomplete', symbol: 50}
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  {id: '1', row: '2', col: '4', value: 'Dummy1', error: 'Type MisMatch'},
  {id: '2', row: '3', col: '2', value: '', error: 'Empty Field'}
];