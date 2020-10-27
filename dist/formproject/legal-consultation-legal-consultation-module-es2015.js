(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legal-consultation-legal-consultation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/legal-consultation/legal/legal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legal-consultation/legal/legal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"image-header\">\n    <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n  </div>\n  <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"main\">\n      <ng-container *transloco=\"let t\">\n        <mat-card-header>\n          <mat-card-title style=\"min-height: 40px; margin: 0;\"\n            ><mat-icon>dashboard</mat-icon> {{ t('Legal_C_M')}}\n          </mat-card-title>\n          <div class=\"buttonbar\">\n            <div class=\"buttonbarbg\">\n              <button mat-button><mat-icon>cloud_done</mat-icon> {{ t('SAVE') }}</button>\n              <button mat-button><mat-icon>done_all</mat-icon> {{ t('SUBMIT') }}</button>\n              <button mat-button><mat-icon>redo</mat-icon> {{ t('RESET') }}</button>\n              <button mat-button (click)=\"printPage()\" type=\"button\">\n                <mat-icon>local_printshop</mat-icon> {{ t('PRINT') }}\n              </button>\n              <button mat-button>\n                <mat-icon>delete_outline</mat-icon> {{ t('DELETE') }}\n              </button>\n            </div>\n          </div>\n\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n            fxHide.lt-md\n            class=\"langgroup\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n          <div class=\"staticlbl\">\n            SECURITY CASE\n          </div>\n          <!-- <button mat-raised-button color=\"accent\" type=\"submit\">\n            <mat-icon>search</mat-icon>\n            <span fxHide.lt-md>{{ t('SEARCH') }}</span>\n          </button> -->\n        </mat-card-header>\n      </ng-container>\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n        style=\"text-align: center; margin-bottom: 20px;\"\n        fxHide.gt-sm\n        class=\"langonmobile\"\n      >\n        <div fxFlex=\"0 0 100%\">\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n            \n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </div>\n      </div>\n\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('PNAME') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTROL_NUMBER') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPL_DATE') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"recpdate\"\n                formControlName=\"recpdate\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"recpdate\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #recpdate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPL_DIVISION') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LDPD') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"begcontperiod\"\n                formControlName=\"begcontperiod\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"begcontperiod\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #begcontperiod></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPLY_F_DEPT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"applicant\" />\n              <mat-error\n                *ngIf=\"\n                  caseform.get('applicant').errors &&\n                  caseform.get('applicant').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n   \n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LDRT') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"begcontperiod\"\n                formControlName=\"begcontperiod\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"begcontperiod\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #begcontperiod></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPLICANT') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"applicant\" />\n              <mat-error\n                *ngIf=\"\n                  caseform.get('applicant').errors &&\n                  caseform.get('applicant').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n            <div class=\"button-row\">\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"primary\"\n                class=\"gradient-primary\"\n              >\n                <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n              </button>\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"warn\"\n                class=\"gradient-warn\"\n              >\n                <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('STATUS') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"classification\">\n                <mat-option value=\"{{ t('CREATING') }}\">{{\n                  t('CREATING')\n                }}</mat-option>\n                <mat-option value=\"{{ t('CREATING') }}\">{{\n                  t('CREATING')\n                }}</mat-option>\n              </mat-select>\n              <mat-error\n                *ngIf=\"\n                  caseform.get('classification').errors &&\n                  caseform.get('classification').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('PERSON_CONCERN') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"applicant\" />\n              <mat-error\n                *ngIf=\"\n                  caseform.get('applicant').errors &&\n                  caseform.get('applicant').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n            <div class=\"button-row\">\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"primary\"\n                class=\"gradient-primary\"\n              >\n                <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n              </button>\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"warn\"\n                class=\"gradient-warn\"\n              >\n                <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_REPRESENTATIVE') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_DEPARTMENT_NOTES') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_DEPARTMENT_ITEM') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n           \n          \n              <label class=\"file\">\n                <input type=\"file\" id=\"file\" aria-label=\"File browser example\">\n                <mat-icon>cloud_upload</mat-icon><span class=\"file-custom\"  [attr.data-lbl]=\"'ADD' | transloco\">\n                  \n                </span>\n              </label>\n             \n          \n              \n            \n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('EXSISTANCE_OF_THE_EXTERNAL_CONSULTANT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"autoupdate\" name=\"autoupdate\">\n                <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('NAMEEXTCONSULT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"\"\n                formControlName=\"legel_dept_notes\"\n              />\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('NEW_RENEWAL') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"new_renew\" name=\"new_renew\">\n                <mat-option value=\"new\">{{ t('NEW') }}</mat-option>\n                <mat-option value=\"renewal\">{{ t('RENEWAL') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      \n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('NEWONGOING') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            \n            <mat-form-field>\n              <mat-select formControlName=\"new_renew\" name=\"new_renew\">\n                <mat-option value=\"new\">{{ t('NEW') }}</mat-option>\n                <mat-option value=\"renewal\">{{ t('ONGOING') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('OTHER_PARTY') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"\"\n                formControlName=\"legel_dept_notes\"\n              />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around start\"\n          style=\"margin-top: 20px;\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('RELATED_COUNTRIES') }} </label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-checkbox class=\"country-margin\" formControlName=\"country_us\">{{\n              t('US')\n            }}</mat-checkbox>\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_china\"\n              >{{ t('CHINA') }}</mat-checkbox\n            ><br />\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_korea\"\n              >{{ t('KOREA') }}</mat-checkbox\n            >\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_europe\"\n              >{{ t('EUROPE') }}</mat-checkbox\n            >\n          </div>\n\n          <div fxFlex=\"0 0 50%\">\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_tiwan\"\n              >{{ t('TAIWAN') }}</mat-checkbox\n            >\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_india\"\n              >{{ t('INDIA') }}</mat-checkbox\n            ><br />\n            <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_japan\"\n            >{{ t('JAPAN') }}</mat-checkbox>\n            <mat-checkbox\n              class=\"country-margin\"\n              formControlName=\"country_others\"\n              (change)=\"othercountry($event.checked)\"\n              >{{ t('OTHERS') }}\n           \n              </mat-checkbox\n            >\n            <mat-form-field *ngIf=\"ifothercountry\">\n              <input\n                matInput\n                placeholder=\"\"\n                formControlName=\"legel_dept_notes\"\n              />\n            </mat-form-field> \n            <br />\n          </div>\n        </div>\n      </ng-container>\n      <mat-tab-group color=\"accent\" backgroundColor=\"accent\" selectedIndex=\"0\" fitInkBarToContent=\"true\">\n        <mat-tab>\n          <ng-template mat-tab-label *transloco=\"let t\">\n            <mat-icon>mail_outline</mat-icon>\n             {{t('MASSEGE_CONTENT')}}\n          </ng-template>\n          <ng-container *transloco=\"let t\">\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('MESSAGE') }}</label>\n              </div>\n              <div fxFlex=\"0 0 75%\">\n                <mat-form-field>\n                  <textarea\n                    matInput\n                    placeholder=\"\"\n                    formControlName=\"legel_dept_notes\"\n                    rows=\"3\"\n                  ></textarea>\n                </mat-form-field>\n              </div>\n            </div>\n\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('ATTACHMENT') }}</label>\n              </div>\n              <div fxFlex=\"0 0 35%\">\n                <label class=\"file\">\n                  <input type=\"file\" id=\"file1\" aria-label=\"File browser example\">\n                  <mat-icon>cloud_upload</mat-icon><span class=\"file-custom long\" [attr.data-lbl]=\"'ADDTIONAL' | transloco\">\n                    \n                  </span>\n                </label>\n              </div>\n              <div fxFlex=\"0 0 15%\">\n                <label>{{ t('RDATE') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    [matDatepicker]=\"recpdate\"\n                    formControlName=\"recpdate\"\n                  />\n                  <mat-datepicker-toggle\n                    matSuffix\n                    [for]=\"recpdate\"\n                  ></mat-datepicker-toggle>\n                  <mat-datepicker #recpdate></mat-datepicker>\n                </mat-form-field>\n              </div>\n            </div>\n            \n              <div\n                fxLayout=\"row wrap\"\n                fxLayout.xs=\"column\"\n                fxLayoutAlign.gt-sm=\"space-around center\"\n              >\n                <div fxFlex=\"0 0 100%\" class=\"historylbl\">\n                  <mat-icon>history</mat-icon><label>{{ t('HISTORY') }}</label>\n                </div>\n              </div>\n              <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('FROM(HISTORY)') }}</label>\n              </div>\n              <div fxFlex=\"0 0 35%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"\"\n                    formControlName=\"legel_dept_notes\"\n                  />\n                </mat-form-field>\n              </div>\n              <div fxFlex=\"0 0 15%\">\n                <label>{{ t('STATUS(HISTORY)') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"\"\n                    formControlName=\"legel_dept_notes\"\n                  />\n                </mat-form-field>\n              </div>\n            </div>\n\n         \n              <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('SENT_DATE_AND_TIME') }}</label>\n              </div>\n              <div fxFlex=\"0 0 35%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"\"\n                    formControlName=\"legel_dept_notes\"\n                  />\n                </mat-form-field>\n              </div>\n              <div fxFlex=\"0 0 15%\">\n                <label>{{ t('STAKEHOLDER(HISTORY)') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    placeholder=\"\"\n                    formControlName=\"legel_dept_notes\"\n                  />\n                </mat-form-field>\n              </div>\n            </div>\n\n\n            <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('MESSAGE(HISTORY)') }}</label>\n            </div>\n            <div fxFlex=\"0 0 75%\">\n              <mat-form-field>\n                <textarea\n                  matInput\n                  placeholder=\"\"\n                  formControlName=\"legel_dept_notes\"\n                  rows=\"3\"\n                ></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n          \n          <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('ATTACHMENTS(HISTORY)') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"\"\n                formControlName=\"legel_dept_notes\"\n              />\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"0 0 50%\" style=\"text-align: right\">\n            <button mat-button color=\"primary\"> <mat-icon>launch</mat-icon> \n              \n              {{ t('DPMSG') }}\n            </button>\n          </div>\n        </div>\n\n          </ng-container>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card>\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/app/legal-consultation/legal-consultation-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/legal-consultation/legal-consultation-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LegalConsultationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalConsultationRoutingModule", function() { return LegalConsultationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/legal-consultation/legal/legal.component.ts");




const routes = [
    {
        path: '',
        component: _legal_legal_component__WEBPACK_IMPORTED_MODULE_3__["LegalComponent"],
    },
];
let LegalConsultationRoutingModule = class LegalConsultationRoutingModule {
};
LegalConsultationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LegalConsultationRoutingModule);



/***/ }),

/***/ "./src/app/legal-consultation/legal-consultation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/legal-consultation/legal-consultation.module.ts ***!
  \*****************************************************************/
/*! exports provided: LegalConsultationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalConsultationModule", function() { return LegalConsultationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _legal_consultation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legal-consultation-routing.module */ "./src/app/legal-consultation/legal-consultation-routing.module.ts");
/* harmony import */ var _legal_legal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legal/legal.component */ "./src/app/legal-consultation/legal/legal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let LegalConsultationModule = class LegalConsultationModule {
};
LegalConsultationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_legal_legal_component__WEBPACK_IMPORTED_MODULE_4__["LegalComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _legal_consultation_routing_module__WEBPACK_IMPORTED_MODULE_3__["LegalConsultationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        ],
    })
], LegalConsultationModule);



/***/ }),

/***/ "./src/app/legal-consultation/legal/legal.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/legal-consultation/legal/legal.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.buttonbar {\n  display: flex;\n  padding: 0 2rem;\n  height: 40px;\n}\n\n.buttonbar .mat-button {\n  padding: 0 15px;\n  font-weight: 400;\n}\n\n.buttonbar .buttonbarbg {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n\n.staticlbl {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.file {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  height: 2.5rem;\n  width: 14rem;\n}\n\n.file input {\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  width: 10rem;\n}\n\n.file > .mat-icon {\n  z-index: 999;\n  color: #fff;\n  position: relative;\n  left: -6px;\n  line-height: 1.6em;\n}\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-custom.long {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 270px;\n}\n\n.file-custom.long:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 124px;\n  justify-content: flex-end;\n}\n\n.file-custom:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 78px;\n  justify-content: flex-end;\n}\n\n.file-custom:after {\n  content: \"\";\n}\n\n.historylbl {\n  background-color: #ff4081;\n  font-size: 15px;\n  padding: 10px 15px 4px 30px;\n  font-weight: 500;\n  color: #fbfbfb;\n  margin-top: 10px;\n  display: flex;\n  line-height: 24px;\n}\n\n@media print {\n  .langonmobile {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvbGVnYWwtY29uc3VsdGF0aW9uL2xlZ2FsL2xlZ2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWdhbC1jb25zdWx0YXRpb24vbGVnYWwvbGVnYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQSxvQkFBQTs7QUFFQTtFQUNFLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FEUEE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDVUY7O0FEUkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDV0Y7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNXRjs7QURUQTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNlRjs7QURiQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2dCRjs7QURkQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2lCRjs7QURmQTtFQUNFLFdBQUE7QUNrQkY7O0FEZkE7RUFDRSx5QkFBQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDa0JKOztBRGhCQTtFQUNFO0lBQWdCLHdCQUFBO0VDb0JoQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGVnYWwtY29uc3VsdGF0aW9uL2xlZ2FsL2xlZ2FsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZS1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDAuMDElO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgaGVpZ2h0OiA0MDVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbnRhYmxlLmNhc2V0YWJsZSB7XHJcbiAgd2lkdGg6IDIwMDBweDtcclxuICBtYXgtd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxudGQubWF0LWNvbHVtbi1zdGFyIHtcclxuICB3aWR0aDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi8qIFBvcG92ZXIgc3R5bGluZyAqL1xyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtNjlweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAgMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gIG1pbi13aWR0aDogMjcwcHg7XHJcbiAgdG9wOiA1NXB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogLThweDtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogLTdweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyNDMsIDI0MCwgMjQwKTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyNDMsIDI0MCwgMjQwKTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcclxufVxyXG4ucG9wb3Zlcl9fbWVzc2FnZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5pY29uZml4IHtcclxuICB0b3A6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNXB4O1xyXG4gIGNvbG9yOiAjMDA0NzlkO1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4uaW5jZXJyb3Ige1xyXG4gIGZvbnQtc2l6ZTogNzUlO1xyXG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmJ1dHRvbmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uYnV0dG9uYmFyIC5tYXQtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uYnV0dG9uYmFyIC5idXR0b25iYXJiZyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnN0YXRpY2xibCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4vLyBmaWxlIHVwbG9hZFxyXG4uZmlsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHdpZHRoOiAxNHJlbTtcclxufVxyXG4uZmlsZSBpbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAxMHJlbTtcclxufVxyXG4uZmlsZSA+IC5tYXQtaWNvbiB7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxufVxyXG4uZmlsZS1jdXN0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzU1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDc1cmVtIHNvbGlkICM5NDk0OTQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uZmlsZS1jdXN0b20ubG9uZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wNzVyZW0gc29saWQgIzk0OTQ5NDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiAyNzBweDtcclxufVxyXG4uZmlsZS1jdXN0b20ubG9uZzpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wLjA3NXJlbTtcclxuICByaWdodDogLTAuMDc1cmVtO1xyXG4gIGJvdHRvbTogLTAuMDc1cmVtO1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtbGJsKTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMjRweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5maWxlLWN1c3RvbTpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wLjA3NXJlbTtcclxuICByaWdodDogLTAuMDc1cmVtO1xyXG4gIGJvdHRvbTogLTAuMDc1cmVtO1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb250ZW50OiBhdHRyKGRhdGEtbGJsKTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3OHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmZpbGUtY3VzdG9tOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcbi8vLS0gZmlsZSB1cGxvYWRcclxuLmhpc3RvcnlsYmwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggNHB4IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgLmxhbmdvbm1vYmlsZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG59IiwiLmRhdGF0YWJsZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAwLjAxJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgaGVpZ2h0OiA0MDVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG50YWJsZS5jYXNldGFibGUge1xuICB3aWR0aDogMjAwMHB4O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbnRkLm1hdC1jb2x1bW4tc3RhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi8qIFBvcG92ZXIgc3R5bGluZyAqL1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBvcG92ZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNjlweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAgMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgdG9wOiA1NXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtOHB4O1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmM2YwZjA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YzZjBmMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuXG4ucG9wb3Zlcl9fbWVzc2FnZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaWNvbmZpeCB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMDQ3OWQ7XG59XG5cbi5wb3BvdmVyX19jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pbmNlcnJvciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBjb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnV0dG9uYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAycmVtO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idXR0b25iYXIgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idXR0b25iYXIgLmJ1dHRvbmJhcmJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGF0aWNsYmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMTRyZW07XG59XG5cbi5maWxlIGlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMHJlbTtcbn1cblxuLmZpbGUgPiAubWF0LWljb24ge1xuICB6LWluZGV4OiA5OTk7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC02cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbn1cblxuLmZpbGUtY3VzdG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmlsZS1jdXN0b20ubG9uZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNzVyZW0gc29saWQgIzk0OTQ5NDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4uZmlsZS1jdXN0b20ubG9uZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMDc1cmVtO1xuICByaWdodDogLTAuMDc1cmVtO1xuICBib3R0b206IC0wLjA3NXJlbTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTI0cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5maWxlLWN1c3RvbTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMDc1cmVtO1xuICByaWdodDogLTAuMDc1cmVtO1xuICBib3R0b206IC0wLjA3NXJlbTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNzhweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZpbGUtY3VzdG9tOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmhpc3RvcnlsYmwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA0cHggMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmYmZiZmI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubGFuZ29ubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/legal-consultation/legal/legal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/legal-consultation/legal/legal.component.ts ***!
  \*************************************************************/
/*! exports provided: MY_FORMATS, LegalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegalComponent", function() { return LegalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/fesm2015/ngneat-transloco.js");










// const moment = _rollupMoment || _moment;
const MY_FORMATS = {
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
let LegalComponent = class LegalComponent {
    constructor(cdRef, mediaObserver, transloco, title) {
        this.cdRef = cdRef;
        this.mediaObserver = mediaObserver;
        this.transloco = transloco;
        this.title = title;
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
        this.inc_app_sec_member_error = false;
        this.displayedColumns = [
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
        this.ifothercountry = false;
    }
    // setPageSizeOptions(setPageSizeOptionsInput: string) {
    //   if (setPageSizeOptionsInput) {
    //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    //   }
    // }
    setActiveLang(lang) {
        this.transloco.setActiveLang(lang);
    }
    othercountry(otherselected) {
        otherselected ? this.ifothercountry = true : this.ifothercountry = false;
    }
    printPage() {
        // console.log("active lang", this.translocoService.getActiveLang());
        if (this.transloco.getActiveLang() === 'jp') {
            const title = '案件名 ' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '管理番号' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '申請日' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '申請事業部' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '申請部署' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '申請者' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '法務部受付日';
            this.title.setTitle(title);
            window.print();
        }
        else {
            const title = 'Project Name ' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Control Number' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Application Date' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Application Division' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Application Department' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Applicant' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'Legal Department Reception Date';
            this.title.setTitle(title);
            window.print();
        }
        this.title.setTitle('CMLC');
    }
    ngOnInit() {
        // this.length = ELEMENT_DATA.length;
        this.dataSource.paginator = this.paginator;
        this.caseform = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            classification: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            controlnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            recpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            appdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.dateValidator]),
            appdept: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            contractname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contracteditem: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            inc_app_sec_memberyes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            inc_app_sec_memberno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            new_renew: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            autoupdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contracttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            contractor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            begcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            endcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            legelrep: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            fix_ver_contract_att: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            exsist_extr_consult: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            legel_dept_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_creating: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_receiving: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_app_responding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_contract_signed: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_cancelled: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_requesting: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_correspond_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_resp_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            status_completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_us: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_china: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_korea: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_europe: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_tiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_india: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_japan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](true),
            country_others: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.mediaSub = this.mediaObserver.asObservable().subscribe((change) => {
            change.forEach((v) => {
                console.log(v.mediaQuery, v.mqAlias);
            });
            console.log('-----');
        });
    }
    show_inc_app_sec(event) {
        console.log(event.checked);
        if (!!this.caseform.value.inc_app_sec_memberno === true ||
            !!this.caseform.value.inc_app_sec_memberyes === true) {
            this.inc_app_sec_member_error = false;
        }
        else {
            this.inc_app_sec_member_error = true;
        }
    }
    onSubmit() {
        if (!!this.caseform.value.inc_app_sec_memberno === true ||
            !!this.caseform.value.inc_app_sec_memberyes === true) {
            this.inc_app_sec_member_error = false;
        }
        else {
            this.inc_app_sec_member_error = true;
        }
        console.log(this.caseform);
        // console.log("aa",!!this.caseform.value.inc_app_sec_memberno);
        // console.log("bb",!!this.caseform.value.inc_app_sec_memberyes);
    }
    dateValidator(c) {
        let value = c.value;
        if (value && typeof value === 'string') {
            let match = value.match(/^[0-9]{4}[\/][0-9]{2}[\/][0-9]{2}$/);
            if (!match) {
                return { dateInvalid: true };
            }
            else if (match && match[0] !== value) {
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
};
LegalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], LegalComponent.prototype, "paginator", void 0);
LegalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-legal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./legal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/legal-consultation/legal/legal.component.html")).default,
        providers: [
            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
            // application's root module. We provide it at the component level here, due to limitations of
            // our example generation script.
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./legal.component.scss */ "./src/app/legal-consultation/legal/legal.component.scss")).default]
    })
], LegalComponent);

const ELEMENT_DATA = [
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


/***/ })

}]);
//# sourceMappingURL=legal-consultation-legal-consultation-module-es2015.js.map