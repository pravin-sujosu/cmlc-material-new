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
import {MatSort, Sort} from '@angular/material/sort';
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
  selector: 'app-management',
  templateUrl: './management2.component.html',
  styleUrls: ['./management2.component.scss'],
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
export class Management2Component implements OnInit, AfterViewInit, OnDestroy {
  caseform: FormGroup;
  // MatPaginator Inputs
   length = 25 ;
   pageSize = 5;
   pageSizeOptions: number[] = [5, 10, 25];
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
    'ApplicationDate',
    'Status',
    'ContractName',
    'OtherParty',
    'Applicantdivision',
    'Applicationdepartment',
    'Applicant',
    'LegalRepresentative',
    'Contractperiod',
    'Contractperiodend',
    'Automaticupdate',
    'Relatedcountries',
    'ProjectName',
    'ContractType',
    'Externalconsultation',
    'Contracteditem',
    'Newongoing',
    'Alertreleasedate',
    'Relatedcontractnumber',
    'Expecteddateofconsultion',
    'FIXContract',
    'Approvaldecisionnumber',
    'Managementstatus',
    'Legaldepartmentreceptiondate',
    'Legaldepartmentresponsedeadline'
  ];
  hideitem = true;
  dataSource = new MatTableDataSource<CaseMangElement>(ELEMENT_DATA);
  sortedData: CaseMangElement[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  setPageSizeOptions(setPageSizeOptionsInput: string) {
   
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  private mediaSub: Subscription;
  constructor(
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver,
    private transloco: TranslocoService
  ) {
    this.dataSource = new MatTableDataSource<CaseMangElement>(ELEMENT_DATA.slice());
    console.log('dataSource',  this.dataSource);
  }
 
  hideformele() {
    this.hideitem = false;
  }

  showformele() {
    this.hideitem = true;
  }
  sortData(sort: Sort) {
    // const data = ELEMENT_DATA.slice();
    console.log('dataSource1', new MatTableDataSource<CaseMangElement>(ELEMENT_DATA.slice()));
    if (!sort.active || sort.direction === '') {
      // this.sortedData = data;
      this.dataSource = new MatTableDataSource<CaseMangElement>(ELEMENT_DATA.slice());
      return;
    }

    this.dataSource = new MatTableDataSource<CaseMangElement>(ELEMENT_DATA.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Controlnumber': return compare(a.Controlnumber, b.Controlnumber, isAsc);
        case 'BranchNumber': return compare(a.BranchNumber, b.BranchNumber, isAsc);
        case 'ApplicationDate': return compare(a.ApplicationDate, b.ApplicationDate, isAsc);
        case 'Status': return compare(a.Status, b.Status, isAsc);
        case 'ContractName': return compare(a.ContractName, b.ContractName, isAsc);
        case 'OtherParty': return compare(a.OtherParty, b.OtherParty, isAsc);

        case 'Applicantdivision': return compare(a.Applicantdivision, b.Applicantdivision, isAsc);
        case 'Applicationdepartment': return compare(a.Applicationdepartment, b.Applicationdepartment, isAsc);
        case 'Applicant': return compare(a.Applicant, b.Applicant, isAsc);
        case 'LegalRepresentative': return compare(a.LegalRepresentative, b.LegalRepresentative, isAsc);
        case 'Contractperiod': return compare(a.Contractperiod, b.Contractperiod, isAsc);
        case 'Contractperiodend': return compare(a.Contractperiodend, b.Contractperiodend, isAsc);

        case 'Automaticupdate': return compare(a.Automaticupdate, b.Automaticupdate, isAsc);
        case 'Relatedcountries': return compare(a.Relatedcountries, b.Relatedcountries, isAsc);
        case 'ProjectName': return compare(a.ProjectName, b.ProjectName, isAsc);
        case 'ContractType': return compare(a.ContractType, b.ContractType, isAsc);
        case 'Externalconsultation': return compare(a.Externalconsultation, b.Externalconsultation, isAsc);
        case 'Contracteditem': return compare(a.Contracteditem, b.Contracteditem, isAsc);

        case 'Newongoing': return compare(a.Newongoing, b.Newongoing, isAsc);
        case 'Alertreleasedate': return compare(a.Alertreleasedate, b.Alertreleasedate, isAsc);
        case 'Relatedcontractnumber': return compare(a.Relatedcontractnumber, b.Relatedcontractnumber, isAsc);
        case 'Expecteddateofconsultion': return compare(a.Expecteddateofconsultion, b.Expecteddateofconsultion, isAsc);
        case 'FIXContract': return compare(a.FIXContract, b.FIXContract, isAsc);
        case 'Approvaldecisionnumber': return compare(a.Approvaldecisionnumber, b.Approvaldecisionnumber, isAsc);
        case 'Managementstatus': return compare(a.Managementstatus, b.Managementstatus, isAsc);
        case 'Legaldepartmentreceptiondate': return compare(a.Legaldepartmentreceptiondate, b.Legaldepartmentreceptiondate, isAsc);
        case 'Legaldepartmentresponsedeadline': return compare(a.Legaldepartmentresponsedeadline, b.Legaldepartmentresponsedeadline, isAsc);

        default: return 0;
      }
    }));
    this.dataSource.paginator = this.paginator;
    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    //this.paginator.pageIndex = 0
  }

 
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
  Controlnumber: number,
  BranchNumber: number,
  ApplicationDate: string,
  Status: string,
  ContractName: string,
  OtherParty: string,
  
  Applicantdivision: string,
  Applicationdepartment: string,
  Applicant: string,
  LegalRepresentative: string,
  Contractperiod: string,
  Contractperiodend: string,
  Automaticupdate: string,
  Relatedcountries: string,
  ProjectName: string,
  ContractType: string,
  Externalconsultation: string,
  Contracteditem: string,
  Newongoing: string,
  Alertreleasedate: string,
  Relatedcontractnumber: string,
  Expecteddateofconsultion: string,
  FIXContract: string,
  Approvaldecisionnumber: string,
  Managementstatus: string,
  Legaldepartmentreceptiondate: string,
  Legaldepartmentresponsedeadline: string
}


const ELEMENT_DATA: CaseMangElement[] = [
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 3,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 4,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  {
    Controlnumber: 1,
    BranchNumber: 2,
    ApplicationDate: '2020/05/19',
    Status: 'Yes',
    ContractName: 'Dummy Text',
    OtherParty: 'Dummy Text',
    
    Applicantdivision: 'Division',
    Applicationdepartment: 'Department',
    Applicant: 'Dummy Text',
    LegalRepresentative: 'Dummy Text',
    Contractperiod: '2020/05/25',
    Contractperiodend: '2020/05/25',
    Automaticupdate: 'Yes',
    Relatedcountries: 'Japan, Poland',
    ProjectName: 'non disclosure contract',
    ContractType: 'Dummy Text',
    Externalconsultation: 'Dummy Text',
    Contracteditem: 'aaa',
    Newongoing: 'on going',
    Alertreleasedate: '2020/05/19',
    Relatedcontractnumber: '1',
    Expecteddateofconsultion:	'2020/05/19',
    FIXContract: 'Yes',
    Approvaldecisionnumber:'2',
    Managementstatus: 'Others',
    Legaldepartmentreceptiondate: '2020/05/19',
    Legaldepartmentresponsedeadline: '2020/05/19'
  },
  

];

function compare(a: number | string, b: number | string, isAsc: boolean) {
  console.log('sorted data', (a < b ? -1 : 1) * (isAsc ? 1 : -1));
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}