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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  panelOpenState = false;
  caseform: FormGroup;
  // MatPaginator Inputs
  //  length = 11;
  //  pageSize = 5;
  //  pageSizeOptions: number[] = [5, 10, 25, 100];
  //   // MatPaginator Output
  //  pageEvent: PageEvent;

  // new_renew ="new";
  // classification ="Contract Management";
  // contracttype ="dummy1";
  // autoupdate="yes";
  inc_app_sec_member_error = false;
  displayedColumns: string[] = [
    'Controlnumber',
    'BranchNumber',
    'Applicationdepartment',
    'Applicant',
    'ApplicationDate',
    'ContractName',
    'ContractType',
    'NewRenewal',
    'Contractor',
    'ContractBeginningDate',
    'ContractEndDate',
    'Status',
    'LegalRepresentative',
    'Remarks',
    'SecurityCaseClassification',
  ];
  dataSource = new MatTableDataSource<CaseMangElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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

    this.dataSource.paginator = this.paginator;
    this.caseform = new FormGroup({
      classification: new FormControl('', Validators.required),
      controlnumber: new FormControl(''),
      recpdate: new FormControl(''),
      appdate: new FormControl('', [Validators.required, this.dateValidator]),
      appdept: new FormControl(''),
      applicant: new FormControl('', Validators.required),
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
    console.log(this.caseform);
    // console.log("aa",!!this.caseform.value.inc_app_sec_memberno);
    // console.log("bb",!!this.caseform.value.inc_app_sec_memberyes);
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

export interface CaseMangElement {
  Controlnumber: number;
  BranchNumber: number;
  Applicationdepartment: string;
  Applicant: string;
  ApplicationDate: string;
  ContractName: string;
  ContractType: string;
  NewRenewal: string;
  Contractor: string;
  ContractBeginningDate: string;
  ContractEndDate: string;
  Status: string;
  LegalRepresentative: string;
  Remarks: string;
  SecurityCaseClassification: string;
}

const ELEMENT_DATA: CaseMangElement[] = [
  {
    Controlnumber: 1,
    BranchNumber: 2,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'Renew',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 2,
    BranchNumber: 3,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 3,
    BranchNumber: 4,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 4,
    BranchNumber: 5,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'Renew',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 5,
    BranchNumber: 6,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 6,
    BranchNumber: 7,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 7,
    BranchNumber: 8,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 8,
    BranchNumber: 9,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 9,
    BranchNumber: 10,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'Renew',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 10,
    BranchNumber: 11,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
  {
    Controlnumber: 11,
    BranchNumber: 12,
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    ApplicationDate: '2020/05/19',
    ContractName: 'Dummy Text',
    ContractType: 'Dummy Text',
    NewRenewal: 'New',
    Contractor: 'Dummy Text',
    ContractBeginningDate: '2020/05/19',
    ContractEndDate: '2020/05/25',
    Status: 'Yes',
    LegalRepresentative: 'Dummy Text',
    Remarks: 'Dummy Text',
    SecurityCaseClassification: 'Dummy Text',
  },
];
