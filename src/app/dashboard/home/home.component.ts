import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotopage(pagetype) {
    switch (pagetype) {
      case 'legalform':
        this.router.navigateByUrl('/legal-consultation');
        break;
      case 'accesslog':
        this.router.navigateByUrl('/access-log');
        break;
      case 'casemgmt':
        this.router.navigateByUrl('/case-management');
        break;
      case 'casemgmt1':
        this.router.navigateByUrl('/case-management1');
        break;
        case 'casemgmt2':
          this.router.navigateByUrl('/case-management2');
          break;
      case 'casemgmt3':
        this.router.navigateByUrl('/case-management3');
        break;
        case 'casemgmt4':
          this.router.navigateByUrl('/case-management4');
          break;
      case 'contactmgmt':
        this.router.navigateByUrl('/contact-management');
        break;
      case 'postdata':
        this.router.navigateByUrl('/postdata');
        break;
        case 'postdatastatus':
        this.router.navigateByUrl('/postdatastatus');
        break;
        
      default:
        break;
    }
    
  }
}
