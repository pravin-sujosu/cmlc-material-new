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
      case 'contactmgmt':
        this.router.navigateByUrl('/contact-management');
        break;
      default:
        break;
    }
    
  }
}
