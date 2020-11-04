(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casemanagement4-casemanagement4-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement4/management4/management4.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement4/management4/management4.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-custom\" style=\"padding-top: 0px;\">\n  <!-- <div class=\"image-header\">\n    <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n  </div> -->\n  <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\" style=\"margin-top: 35px\">\n    <mat-card class=\"main casemag\">\n      <ng-container *transloco=\"let t\" >\n        <mat-card-header>\n          <mat-card-title style=\"min-height: 40px; margin: 0;\"\n            ><mat-icon>dashboard</mat-icon> Case Management List\n          </mat-card-title>\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n            fxHide.lt-md\n            class=\"langgroup\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            > </mat-button-toggle-group\n          >\n          <!-- <button mat-raised-button color=\"accent\" type=\"button\" style=\"margin-right: 5px;\">\n            <mat-icon>cloud_download</mat-icon> \n            <span fxHide.lt-md>{{ t('CSV_CREATE') }}</span>\n          </button>  -->\n          <!-- <button mat-raised-button color=\"accent\" type=\"submit\"  *ngIf=\"hideitem\">\n            <mat-icon>search</mat-icon>\n            <span fxHide.lt-md>{{ t('SEARCH') }}</span>\n          </button> -->\n          <!-- <button mat-raised-button color=\"accent\" type=\"submit\"   *ngIf=\"!hideitem\">\n            <span fxHide.lt-md>{{ t('OPEN') }}</span>\n          </button> -->\n        </mat-card-header>\n       \n      </ng-container>\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n        style=\"text-align: center; margin-bottom: 20px;\"\n        fxHide.gt-sm\n      >\n        <div fxFlex=\"0 0 100%\">\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </div>\n      </div>\n      <div\n      fxLayout=\"row wrap\">\n      <mat-drawer-container class=\"example-container\" autosize>\n        <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n          <ng-container *transloco=\"let t\">\n            <h5>{{ t('FILTERS')}}</h5>\n            \n              <mat-list class=\"aside\">\n                <mat-list-item> <label><strong>{{ t('CONTITEM') }}</strong></label></mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n                  </mat-form-field>\n                 \n                </mat-list-item>\n               \n                \n                \n                <mat-list-item>\n                  <label><strong>{{ t('CONTRACT_NAME') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"applicant\" />\n                  </mat-form-field>\n           \n                </mat-list-item>\n          \n                <mat-list-item>\n                  <label><strong>{{ t('CONTRACT_ITEM') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"contracteditem\" />\n                  </mat-form-field>\n    \n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('PNAME') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" />\n                  </mat-form-field>\n    \n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('SECTION_MEMBER') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-checkbox\n                  (change)=\"show_inc_app_sec($event)\"\n                  class=\"chk-margin\"\n                  formControlName=\"inc_app_sec_memberyes\"\n                  >{{ t('TRUE') }}</mat-checkbox\n                >\n                <mat-checkbox\n                  (change)=\"show_inc_app_sec($event)\"\n                  class=\"chk-margin\"\n                  formControlName=\"inc_app_sec_memberno\"\n                  >{{ t('FALSE') }}</mat-checkbox\n                >\n                <mat-error class=\"incerror\" *ngIf=\"inc_app_sec_member_error\"\n                  >Select atleast one</mat-error\n                >\n                </mat-list-item>\n               \n            \n                \n                <mat-list-item>\n                  <label><strong>{{ t('APPROVAL_DECISION_NUMBER') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input\n                      matInput\n                      placeholder=\"\"\n                      formControlName=\"legel_dept_notes\"\n                    />\n                  </mat-form-field>\n                \n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('BRANCH_NUMBER') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" />\n                  </mat-form-field>\n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('APPLY_F_DEPT') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"appdept\" />\n                  </mat-form-field>\n                 \n                </mat-list-item>\n\n                <mat-list-item>\n                  <label><strong>{{ t('APPLICANT') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"appdept\" />\n                  </mat-form-field>\n                 \n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('CONTRACT_TYPE') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <mat-select formControlName=\"contracttype\">\n                      <mat-option value=\"dummy1\">Dummy text</mat-option>\n                      <mat-option value=\"dummy2\">Renewal</mat-option>\n                    </mat-select>\n                    <mat-error\n                      *ngIf=\"\n                        caseform.get('contracttype').errors &&\n                        caseform.get('contracttype').errors.required\n                      \"\n                      >Please fill up the field</mat-error\n                    >\n                  </mat-form-field>\n                 \n                </mat-list-item>\n\n                <mat-list-item>\n                  <div class=\"button-row\">\n                    <button\n                      type=\"button\"\n                      mat-raised-button\n                      color=\"primary\"\n                      class=\"gradient-primary\"\n                    >\n                      <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                    </button>\n                    <button\n                      type=\"button\"\n                      mat-raised-button\n                      color=\"warn\"\n                      class=\"gradient-warn\"\n                    >\n                      <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                    </button>\n                  </div>\n        \n                </mat-list-item>\n                <mat-list-item>\n                  <label><strong>{{ t('CONTRACTOR') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"contractor\" />\n                  </mat-form-field>\n                </mat-list-item>\n                  <mat-list-item>\n                    <div class=\"button-row\">\n                      <button\n                        type=\"button\"\n                        mat-raised-button\n                        color=\"primary\"\n                        class=\"gradient-primary\"\n                      >\n                        <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                      </button>\n                      <button\n                        type=\"button\"\n                        mat-raised-button\n                        color=\"warn\"\n                        class=\"gradient-warn\"\n                      >\n                        <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                      </button>\n                    </div>\n    \n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('AUTOMATIC_UPDATE') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <mat-select formControlName=\"autoupdate\" name=\"autoupdate\">\n                        <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                        <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n        \n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('BEGINNING_DATE_OF_THE_CONTRACT') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <input\n                        matInput\n                        [matDatepicker]=\"begcontperiod\"\n                        formControlName=\"begcontperiod\"\n                      />\n                      <mat-datepicker-toggle\n                        matSuffix\n                        [for]=\"begcontperiod\"\n                      ></mat-datepicker-toggle>\n                      <mat-datepicker #begcontperiod></mat-datepicker>\n                    </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('END_DATE_OF_THE_CONTRACT') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <input\n                        matInput\n                        [matDatepicker]=\"endcontperiod\"\n                        formControlName=\"endcontperiod\"\n                      />\n                      <mat-datepicker-toggle\n                        matSuffix\n                        [for]=\"endcontperiod\"\n                      ></mat-datepicker-toggle>\n                      <mat-datepicker #endcontperiod></mat-datepicker>\n                    </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('EXP_DATE_CONC') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <input\n                        matInput\n                        [matDatepicker]=\"recpdate1\"\n                        formControlName=\"recpdate\"\n                      />\n                      <mat-datepicker-toggle\n                        matSuffix\n                        [for]=\"recpdate1\"\n                      ></mat-datepicker-toggle>\n                      <mat-datepicker #recpdate1></mat-datepicker>\n                    </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('ALERT_RELEASE_DATE') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <input\n                        matInput\n                        [matDatepicker]=\"recpdate2\"\n                        formControlName=\"recpdate\"\n                      />\n                      <mat-datepicker-toggle\n                        matSuffix\n                        [for]=\"recpdate2\"\n                      ></mat-datepicker-toggle>\n                      <mat-datepicker #recpdate2></mat-datepicker>\n                    </mat-form-field>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <label><strong>{{ t('LDPD') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-form-field>\n                      <input\n                        matInput\n                        [matDatepicker]=\"recpdate\"\n                        formControlName=\"recpdate\"\n                      />\n                      <mat-datepicker-toggle\n                        matSuffix\n                        [for]=\"recpdate\"\n                      ></mat-datepicker-toggle>\n                      <mat-datepicker #recpdate></mat-datepicker>\n                    </mat-form-field>\n                  </mat-list-item>\n                <mat-list-item class=\"customlabel\">\n                  <label><strong>{{ t('NEW_RENEWAL') }}</strong></label>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-radio-group aria-label=\"Select an option\">\n                    <mat-radio-button value=\"1\">{{ t('NEW') }}</mat-radio-button>\n                    <mat-radio-button value=\"2\">{{ t('RENEWAL') }}</mat-radio-button>\n                  </mat-radio-group>\n      <!-- \n                  <mat-form-field>\n                    <mat-select formControlName=\"new_renew\" name=\"new_renew\">\n                      <mat-option value=\"new\">{{ t('NEW') }}</mat-option>\n                      <mat-option value=\"renewal\">{{ t('RENEWAL') }}</mat-option>\n                    </mat-select>\n                  </mat-form-field> -->\n                  <mat-divider></mat-divider>\n                </mat-list-item>\n                \n               \n                  <mat-list-item class=\"customlabel\">\n                    <label><strong>{{ t('LEGAL_REPRESENTATIVE') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n            \n                      <!-- <mat-select formControlName=\"legelrep\" name=\"legelrep\">\n                        <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                        <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n                      </mat-select> -->\n                      <mat-radio-group aria-label=\"Select an option\">\n                        <mat-radio-button value=\"1\">{{ t('YES') }}</mat-radio-button>\n                        <mat-radio-button value=\"2\">{{ t('NO') }}</mat-radio-button>\n                      </mat-radio-group>\n       \n                    \n                    <mat-divider></mat-divider>\n                  </mat-list-item>\n                  <mat-list-item class=\"customlabel\">\n                    <label><strong>{{ t('FIX_VERSION_CONTRACT_ATTACHED') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-radio-group aria-label=\"Select an option\">\n                      <mat-radio-button value=\"1\">{{ t('YES') }}</mat-radio-button> \n                      <mat-radio-button value=\"2\">{{ t('NO') }}</mat-radio-button>\n                    </mat-radio-group>\n      \n                    <!-- <mat-form-field>\n                      <mat-select\n                        formControlName=\"fix_ver_contract_att\"\n                        name=\"fix_ver_contract_att\"\n                      >\n                        <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                        <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n                      </mat-select>\n                      \n                    </mat-form-field> -->\n                    <mat-divider></mat-divider>\n                  </mat-list-item>\n          \n                  <mat-list-item class=\"customlabel\">\n                    <label><strong>{{ t('EXSISTANCE_OF_THE_EXTERNAL_CONSULTANT') }}</strong></label>\n                  </mat-list-item>\n                  <mat-list-item>\n                    <mat-radio-group aria-label=\"Select an option\">\n                      <mat-radio-button value=\"1\">{{ t('YES') }}</mat-radio-button>\n                      <mat-radio-button value=\"2\">{{ t('NO') }}</mat-radio-button>\n                    </mat-radio-group>\n      \n                    <mat-divider></mat-divider>\n                  </mat-list-item>\n                  <!-- <mat-expansion-panel class=\"expand_wrapper\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        <label><strong>{{ t('STATUS') }}</strong></label>\n                      </mat-panel-title>\n                      \n                    </mat-expansion-panel-header>\n                  \n                    <mat-list-item>\n                      <mat-checkbox formControlName=\"status_creating\" style=\"margin-right:20px;\">{{\n                        t('CREATING')\n                      }}</mat-checkbox\n                      >  <mat-checkbox formControlName=\"status_receiving\">{{\n                        t('RECEIVING')\n                      }}</mat-checkbox\n                      >\n                    </mat-list-item>\n        \n                   \n        \n                    <mat-list-item>\n                      <mat-checkbox formControlName=\"status_cancelled\"  style=\"margin-right:11px;\">{{\n                        t('CANCELLED')\n                      }}</mat-checkbox\n                      ><mat-checkbox formControlName=\"status_requesting\">{{\n                        t('REQUESTING')\n                      }}</mat-checkbox\n                      >\n                    </mat-list-item>\n                    <mat-list-item>\n                      <mat-checkbox formControlName=\"status_completed\" style=\"margin-right:4px;\">{{\n                        t('COMPLETED')\n                      }}</mat-checkbox><mat-checkbox formControlName=\"status_contract_signed\">{{\n                        t('CONTRACT_SIGN')\n                      }}</mat-checkbox\n                      >\n        \n                    </mat-list-item>\n                     <mat-list-item>\n                      <mat-checkbox formControlName=\"status_app_responding\">{{\n                        t('APP_RESPOND')\n                      }}</mat-checkbox\n                      >\n                    </mat-list-item>\n                    <mat-list-item>\n                      <mat-checkbox formControlName=\"status_correspond_legl_dept\">{{\n                        t('CTLDEPT')\n                      }}</mat-checkbox\n                      >\n                    </mat-list-item>\n                    <mat-list-item>\n                      <mat-checkbox formControlName=\"status_resp_legl_dept\">{{\n                        t('RTLDEPT')\n                      }}</mat-checkbox\n                      >\n                    \n                    </mat-list-item>\n                \n                  \n                  </mat-expansion-panel> -->\n             \n                 <p>&nbsp;</p>\n                  <mat-expansion-panel class=\"expand_wrapper\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        <label><strong>{{ t('RELATED_COUNTRIES') }}</strong> </label>\n                      </mat-panel-title>\n                    \n                    </mat-expansion-panel-header>\n                  \n                   \n                  <mat-list-item>\n                    <mat-checkbox class=\"country-margin\" formControlName=\"country_korea\">{{\n                      t('JAPAN')\n                    }}</mat-checkbox><mat-checkbox\n                    class=\"country-margin\"\n                    formControlName=\"country_china\"\n                    >{{ t('US') }}</mat-checkbox\n                  >\n                  </mat-list-item>\n           \n                  <mat-list-item>\n                    <mat-checkbox\n                      class=\"country-margin\"\n                      formControlName=\"country_korea\"\n                      >{{ t('CHINA') }}</mat-checkbox\n                    ><mat-checkbox\n                    class=\"country-margin\"\n                    formControlName=\"country_europe\"\n                    >{{ t('TAIWAN') }}</mat-checkbox\n                  >\n                  </mat-list-item>\n           \n                  <mat-list-item>\n                    <mat-checkbox\n                      class=\"country-margin\"\n                      formControlName=\"country_tiwan\"\n                      >{{ t('INDIA') }}</mat-checkbox\n                    > <mat-checkbox\n                    class=\"country-margin\"\n                    formControlName=\"country_india\"\n                    >{{ t('EUROPE') }}</mat-checkbox\n                  >\n                  </mat-list-item>\n      \n                  <mat-list-item>\n                    <mat-checkbox\n                      class=\"country-margin\"\n                      formControlName=\"country_others\"\n                      >{{ t('OTHERS') }}</mat-checkbox\n                    >\n          \n                  </mat-list-item>\n                  \n                  </mat-expansion-panel>\n           \n          \n               </mat-list>\n            \n      \n           \n           \n            </ng-container>\n        </mat-drawer>\n      \n        <div class=\"sidenav-content\">\n\n          <button type=\"button\" mat-raised-button color=\"accent\" (click)=\"drawer.toggle()\">\n            <span class=\"material-icons\">\n              arrow_back\n              </span>Advance Search<span class=\"material-icons\">\n                search\n                </span>\n          </button>\n               \n        <mat-expansion-panel class=\"mainexpand\" [expanded]=\"0\" >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n             Basic Search\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-container *transloco=\"let t\" >\n            <!-- <div fxLayout=\"row\" fxFlex=\"25%\">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum, tenetur debitis voluptatum inventore sapiente repellat sed velit! Vitae suscipit a fugit repudiandae expedita ipsum alias, quia tenetur voluptas maxime?  \n            </div> -->\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n              *ngIf=\"hideitem\"\n              class=\"margin-bot\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('CLASSIF') }}*</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <mat-select formControlName=\"classification\">\n                    <mat-option value=\"{{ t('C_MGMT') }}\">{{\n                      t('C_MGMT')\n                    }}</mat-option>\n                    <mat-option value=\"{{ t('Legal_C_M') }}\">{{\n                      t('Legal_C_M')\n                    }}</mat-option>\n                    <mat-option value=\"{{ t('LEGAL_BOTH') }}\">{{\n                      t('LEGAL_BOTH')\n                    }}</mat-option>\n                  </mat-select>\n                  <mat-error\n                    *ngIf=\"\n                      caseform.get('classification').errors &&\n                      caseform.get('classification').errors.required\n                    \"\n                    >Please fill up the field</mat-error\n                  >\n                </mat-form-field>\n              </div>\n              <!-- <div fxFlex=\"0 0 25%\">\n                <label>{{ t('CONTITEM') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n                </mat-form-field>\n              </div> -->\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('APPL_DATE') }}*</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    [matDatepicker]=\"appdate\"\n                    formControlName=\"appdate\"\n                  />\n                  <mat-datepicker-toggle\n                    matSuffix\n                    [for]=\"appdate\"\n                  ></mat-datepicker-toggle>\n                  <mat-datepicker #appdate></mat-datepicker>\n                  <mat-error\n                    *ngIf=\"\n                      caseform.get('appdate').errors &&\n                      !caseform.get('appdate').errors.matDatepickerParse &&\n                      caseform.get('appdate').errors.required\n                    \"\n                    >Please fill up the field</mat-error\n                  >\n                  <mat-error\n                    *ngIf=\"\n                      caseform.get('appdate').errors &&\n                      caseform.get('appdate').errors.matDatepickerParse\n                    \"\n                    >Please enter a valid date</mat-error\n                  >\n                </mat-form-field>\n              </div>\n            </div>\n          </ng-container>\n          <ng-container *transloco=\"let t\">\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around start\"\n              *ngIf=\"hideitem\"\n              class=\"statusmargin\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('STATUS') }}</label>\n              </div>\n              <div fxFlex=\"0 0 75%\">\n                <mat-checkbox formControlName=\"status_creating\">{{\n                  t('CREATING')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_receiving\">{{\n                  t('RECEIVING')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_app_responding\">{{\n                  t('APP_RESPOND')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_contract_signed\">{{\n                  t('CONTRACT_SIGN')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_cancelled\">{{\n                  t('CANCELLED')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_requesting\">{{\n                  t('REQUESTING')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_correspond_legl_dept\">{{\n                  t('CTLDEPT')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_resp_legl_dept\">{{\n                  t('RTLDEPT')\n                }}</mat-checkbox\n                >\n                <mat-checkbox formControlName=\"status_completed\">{{\n                  t('COMPLETED')\n                }}</mat-checkbox>\n              </div>\n    \n              <!-- <div fxFlex=\"0 0 50%\">\n                <mat-checkbox formControlName=\"status_requesting\">{{\n                  t('REQUESTING')\n                }}</mat-checkbox\n                ><br />\n                <mat-checkbox formControlName=\"status_correspond_legl_dept\">{{\n                  t('CTLDEPT')\n                }}</mat-checkbox\n                ><br />\n                <mat-checkbox formControlName=\"status_resp_legl_dept\">{{\n                  t('RTLDEPT')\n                }}</mat-checkbox\n                ><br />\n                <mat-checkbox formControlName=\"status_completed\">{{\n                  t('COMPLETED')\n                }}</mat-checkbox\n                ><br />\n              </div> -->\n            </div>\n          </ng-container>\n         \n        \n     \n          <ng-container *transloco=\"let t\">\n           \n            <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around\"\n            *ngIf=\"hideitem\"\n           \n          >\n          <div fxFlex=\"0 0 100%\"  class=\"margintop\">\n            <button *ngIf=\"hideitem\" mat-raised-button color=\"accent\">\n              <mat-icon>search</mat-icon> {{ t('SEARCH') }}\n            </button>\n          </div>\n        </div>\n            \n          </ng-container>\n         \n        </mat-expansion-panel>\n        <br />\n\n        \n          <div class=\"dataset\" style=\"margin-top: 5px;\">\n            <!-- <div class=\"card-icon\">\n              Case Management List\n            </div> -->\n           \n            <ng-container *transloco=\"let t\">\n              \n              <div\n                fxLayout=\"row wrap\"\n                fxLayout.xs=\"column\"\n                fxLayoutAlign=\"space-around center\"\n                style=\"margin-top: 10px;\"\n              >\n              \n              \n                <div fxFlex=\"0 0 100%\" fxLayoutAlign=\"end center\" class=\"margintop\">\n                  <div class=\"onmobile\">\n                   \n                    <span\n                      >{{ t('THE_TOALNOFC') }}:\n                      <mat-chip color=\"primary\" selected>8</mat-chip></span\n                    >\n                    <!-- <button\n                      type=\"button\"\n                      mat-raised-button\n                      color=\"primary\"\n                      class=\"gradient-success mr-1\"\n                    >\n                      <mat-icon>cloud_download</mat-icon> {{ t('CSV_CREATE') }}\n                    </button>\n                    <button\n                      type=\"button\"\n                      mat-raised-button\n                      color=\"primary\"\n                      class=\"gradient-indigo\"\n                    >\n                      <mat-icon>print</mat-icon> {{ t('PRINT') }}\n                    </button> -->\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign=\"space-around center\"\n              style=\"margin-top: 10px;\"\n              fxHide.lt-md\n              class=\"only-desktop\"\n              *transloco=\"let t\"\n            >\n              <div fxFlex=\"0 0 100%\">\n                <div class=\"datatable-container mat-elevation-z1\">\n                  <table mat-table [dataSource]=\"dataSource\" class=\"casetable\"  matSort (matSortChange)=\"sortData($event)\">\n                    <!-- Controlnumber Column -->\n    \n                    <ng-container\n                      matColumnDef=\"Controlnumber\"\n                      sticky\n                      *transloco=\"let t\"\n                    >\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"Controlnumber\">\n                        {{ t('CONTROL_NUMBER') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.Controlnumber }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- BranchNumber Column -->\n                    <ng-container matColumnDef=\"BranchNumber\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"BranchNumber\">\n                        {{ t('BRANCH_NUMBER') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.BranchNumber }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- ApplicationDate Column -->\n                    <!-- <ng-container matColumnDef=\"ApplicationDate\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                        {{ t('APPL_DATE') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        <mat-chip-list aria-label=\"ApplicationDate\">\n                          <mat-chip color=\"accent\" selected class=\"chipred\"\n                            >{{ element.ApplicationDate }}\n                          </mat-chip>\n                        </mat-chip-list>\n                      </td>\n                    </ng-container> -->\n    \n                    <!-- Applicant Column -->\n                    <!-- <ng-container matColumnDef=\"Applicant\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                        {{ t('APPLICANT') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.Applicant }}\n                      </td>\n                    </ng-container> -->\n    \n                    <!-- ApplicationDate Column -->\n                    <ng-container matColumnDef=\"ApplicationDate\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"ApplicationDate\">\n                        {{ t('APPL_DATE') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.ApplicationDate }}\n                      </td>\n                    </ng-container>\n    \n                         <!-- Status Column -->\n                         <ng-container matColumnDef=\"Status\" sticky>\n                          <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"ContractName\">{{ t('STATUS') }}</th>\n                          <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                            {{ element.Status }}\n                          </td>\n                        </ng-container>\n    \n                    <!-- ContractName Column -->\n                    <ng-container matColumnDef=\"ContractName\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"Status\">\n                        {{ t('CONTRACT_NAME') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;z-index:999;z-index: 9999;\">\n                        <span *ngIf=\"element.BranchNumber != 3 && element.BranchNumber != 4\">{{element.ContractName}}</span>\n                        <div\n                          class=\"popover__wrapper\"\n                          *ngIf=\"\n                            element.BranchNumber == 3 || element.BranchNumber == 4\n                          \"\n                        >\n                          <a href=\"#\">\n                            <h2 class=\"popover__title\">\n                              {{ element.ContractName }}...<mat-icon class=\"iconfix\"\n                                >screen_share</mat-icon\n                              >\n                            </h2>\n                          </a>\n                          <div class=\"popover__content\">\n                            <p class=\"popover__message\">Dummy Text</p>\n                            <p>\n                              Lorem Ipsum is simply dummy text of the printing and\n                              typesetting industry. Lorem Ipsum has been the\n                              industry's standard dummy text ever since the 1500s.\n                            </p>\n                          </div>\n                        </div>\n                      </td>\n                    </ng-container>\n    \n                    <!-- otherparty Column -->\n                    <ng-container matColumnDef=\"OtherParty\" sticky>\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"OtherParty\">\n                        {{ t('OTHER_PARTY') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.OtherParty }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- Applicantdivision Column -->\n                    <ng-container matColumnDef=\"Applicantdivision\" >\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\" mat-sort-header=\"Applicantdivision\">\n                        {{ t('APP_DIVI') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.Applicantdivision }}\n                      </td>\n                    </ng-container> \n    \n                    <!-- Applicationdepartment Column -->\n                    <ng-container matColumnDef=\"Applicationdepartment\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Applicationdepartment\">\n                        {{ t('APPLY_F_DEPT') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.Applicationdepartment }}\n                      </td>\n                    </ng-container>\n                    <!-- Applicant Column -->\n                    <ng-container matColumnDef=\"Applicant\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Applicant\">\n                        {{ t('APPLICANT') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.Applicant }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- LegalRepresentative Column -->\n                    <ng-container matColumnDef=\"LegalRepresentative\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"LegalRepresentative\">\n                        {{ t('LEGAL_REPRESENTATIVE') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.LegalRepresentative }}\n                      </td>\n                    </ng-container>\n    \n               \n    \n                    <!-- Contractperiod Column -->\n                    <ng-container matColumnDef=\"Contractperiod\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Contractperiod\">\n                        {{ t('CONT_PERIOD') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\" >\n                        {{ element.Contractperiod }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- Contractperiodend Column -->\n                    <ng-container matColumnDef=\"Contractperiodend\">\n                      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Contractperiodend\">\n                        {{ t('CONT_PERIOD_END') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.Contractperiodend }}\n                      </td>\n                    </ng-container>\n                      <!-- Automaticupdate Column -->\n                      <ng-container matColumnDef=\"Automaticupdate\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Automaticupdate\">\n                          {{ t('AUTOMATIC_UPDATE') }}\n                        </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                          {{ element.Automaticupdate }}\n                        </td>\n                      </ng-container>\n                      \n                  \n                  <!-- Relatedcountries Column -->\n                   <ng-container matColumnDef=\"Relatedcountries\">\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header=\"Relatedcountries\">\n                      {{ t('RELATED_COUNTRIES') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Relatedcountries }}\n                    </td>\n                  </ng-container>\n    \n                   <!-- ProjectName Column -->\n                   <ng-container matColumnDef=\"ProjectName\">\n                    <th mat-header-cell *matHeaderCellDef  mat-sort-header=\"ProjectName\">\n                      {{ t('PNAME') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.ProjectName }}\n                    </td>\n                  </ng-container>\n    \n                   <!-- ContractType Column -->\n                   <ng-container matColumnDef=\"ContractType\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"ContractType\">\n                      {{ t('CONTRACT_TYPE') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.ContractType }}\n                    </td>\n                  </ng-container>\n                  \n                  <!-- Externalconsultation Column -->\n                  <ng-container matColumnDef=\"Externalconsultation\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Externalconsultation\">\n                      {{ t('EXTCONSULTANT') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Externalconsultation }}\n                    </td>\n                  </ng-container>\n    \n                   <!-- Contracteditem Column -->\n                   <ng-container matColumnDef=\"Contracteditem\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Contracteditem\">\n                      {{ t('CONTITEM') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Contracteditem }}\n                    </td>\n                  </ng-container>\n                 \n                  <!-- Newongoing Column -->\n                  <ng-container matColumnDef=\"Newongoing\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Newongoing\">\n                      {{ t('NEWONGOING') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Newongoing }}\n                    </td>\n                  </ng-container>\n                \n                <!-- Alertreleasedate Column -->\n                 <ng-container matColumnDef=\"Alertreleasedate\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Alertreleasedate\">\n                    {{ t('ALERT_RELEASE_DATE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Alertreleasedate }}\n                  </td>\n                </ng-container>\n    \n                <!-- Relatedcontractnumber Column -->\n                <ng-container matColumnDef=\"Relatedcontractnumber\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Relatedcontractnumber\">\n                    {{ t('RELATE_CONTRACT_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Relatedcontractnumber }}\n                  </td>\n                </ng-container>\n               \n                <!-- Expecteddateofconsultion Column -->\n                <ng-container matColumnDef=\"Expecteddateofconsultion\">\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Expecteddateofconsultion\">\n                    {{ t('CONC_OF_S_D') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Expecteddateofconsultion }}\n                  </td>\n                </ng-container>\n    \n                 <!-- FIXContract Column -->\n                 <ng-container matColumnDef=\"FIXContract\">\n                  <th mat-header-cell *matHeaderCellDef  mat-sort-header=\"FIXContract\">\n                    {{ t('FIXCONTRACT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.FIXContract }}\n                  </td>\n                </ng-container>\n              \n              <!-- Approvaldecisionnumber Column -->\n              <ng-container matColumnDef=\"Approvaldecisionnumber\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Approvaldecisionnumber\">\n                  {{ t('APPROVAL_DECISION_NUMBER') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Approvaldecisionnumber }}\n                </td>\n              </ng-container>\n    \n               <!-- Managementstatus Column -->\n               <ng-container matColumnDef=\"Managementstatus\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Managementstatus\">\n                  {{ t('MANAGEMENT_STATE') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Managementstatus }}\n                </td>\n              </ng-container>\n              \n              <!-- Legaldepartmentreceptiondate Column -->\n              <ng-container matColumnDef=\"Legaldepartmentreceptiondate\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Legaldepartmentreceptiondate\">\n                  {{ t('LDPD') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Legaldepartmentreceptiondate }}\n                </td>\n              </ng-container>\n               <!-- Legaldepartmentresponsedeadline Column -->\n               <ng-container matColumnDef=\"Legaldepartmentresponsedeadline\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Legaldepartmentresponsedeadline\">\n                  {{ t('LDRD') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Legaldepartmentresponsedeadline }}\n                </td>\n              </ng-container>\n                    <!-- Remarks Column -->\n                    <!-- <ng-container matColumnDef=\"Remarks\">\n                      <th mat-header-cell *matHeaderCellDef>{{ t('REMARKS') }}</th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.Remarks }}\n                      </td>\n                    </ng-container> -->\n    \n                    <!-- SecurityCaseClassification Column -->\n                    <!-- <ng-container matColumnDef=\"SecurityCaseClassification\">\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('SEC_CASE_CLASSIF') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.SecurityCaseClassification }}\n                      </td>\n                    </ng-container> -->\n    \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr\n                      mat-row\n                      *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                      [ngClass]=\"{ gray: odd }\"\n                    >\n                    </tr>\n                  </table>\n                </div>\n                <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n              </div>\n            </div>\n            <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            style=\"margin-top: 10px;\"\n            fxHide.gt-sm\n            class=\"only-mobile\"\n            *transloco=\"let t\"\n            >\n            <div fxFlex=\"0 0 100%\">\n              <div class=\"datatable-container mat-elevation-z1\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"casetable\">\n                  <!-- Controlnumber Column -->\n            \n                  <ng-container\n                  matColumnDef=\"Controlnumber\"\n                  \n                  *transloco=\"let t\"\n                >\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('CONTROL_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.Controlnumber }}\n                  </td>\n                </ng-container>\n            \n                <!-- BranchNumber Column -->\n                <ng-container matColumnDef=\"BranchNumber\" >\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('BRANCH_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.BranchNumber }}\n                  </td>\n                </ng-container>\n            \n                <!-- ApplicationDate Column -->\n                <!-- <ng-container matColumnDef=\"ApplicationDate\" sticky>\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('APPL_DATE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    <mat-chip-list aria-label=\"ApplicationDate\">\n                      <mat-chip color=\"accent\" selected class=\"chipred\"\n                        >{{ element.ApplicationDate }}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </td>\n                </ng-container> -->\n            \n                <!-- Applicant Column -->\n                <!-- <ng-container matColumnDef=\"Applicant\" sticky>\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('APPLICANT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.Applicant }}\n                  </td>\n                </ng-container> -->\n            \n                <!-- ApplicationDate Column -->\n                <ng-container matColumnDef=\"ApplicationDate\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('APPL_DATE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.ApplicationDate }}\n                  </td>\n                </ng-container>\n            \n                     <!-- Status Column -->\n                     <ng-container matColumnDef=\"Status\">\n                      <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">{{ t('STATUS') }}</th>\n                      <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                        {{ element.Status }}\n                      </td>\n                    </ng-container>\n            \n                <!-- ContractName Column -->\n                <ng-container matColumnDef=\"ContractName\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('CONTRACT_NAME') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    <span *ngIf=\"element.BranchNumber != 3 && element.BranchNumber != 4\">{{element.ContractName}}</span>\n                    <div\n                      class=\"popover__wrapper\"\n                      *ngIf=\"\n                        element.BranchNumber == 3 || element.BranchNumber == 4\n                      \"\n                    >\n                      <a href=\"#\">\n                        <h2 class=\"popover__title\">\n                          {{ element.ContractName }}...<mat-icon class=\"iconfix\"\n                            >screen_share</mat-icon\n                          >\n                        </h2>\n                      </a>\n                      <div class=\"popover__content\">\n                        <p class=\"popover__message\">Dummy Text</p>\n                        <p>\n                          Lorem Ipsum is simply dummy text of the printing and\n                          typesetting industry. Lorem Ipsum has been the\n                          industry's standard dummy text ever since the 1500s.\n                        </p>\n                      </div>\n                    </div>\n                  </td>\n                </ng-container>\n            \n                <!-- otherparty Column -->\n                <ng-container matColumnDef=\"OtherParty\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('OTHER_PARTY') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.OtherParty }}\n                  </td>\n                </ng-container>\n            \n                <!-- Applicantdivision Column -->\n                <ng-container matColumnDef=\"Applicantdivision\" >\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 40px;\">\n                    {{ t('APP_DIVI') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 40px;\">\n                    {{ element.Applicantdivision }}\n                  </td>\n                </ng-container> \n            \n                <!-- Applicationdepartment Column -->\n                <ng-container matColumnDef=\"Applicationdepartment\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('APPLY_F_DEPT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Applicationdepartment }}\n                  </td>\n                </ng-container>\n                <!-- Applicant Column -->\n                <ng-container matColumnDef=\"Applicant\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('APPLICANT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Applicant }}\n                  </td>\n                </ng-container>\n            \n                <!-- LegalRepresentative Column -->\n                <ng-container matColumnDef=\"LegalRepresentative\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('LEGAL_REPRESENTATIVE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.LegalRepresentative }}\n                  </td>\n                </ng-container>\n            \n            \n            \n                <!-- Contractperiod Column -->\n                <ng-container matColumnDef=\"Contractperiod\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONT_PERIOD') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Contractperiod }}\n                  </td>\n                </ng-container>\n            \n                <!-- Contractperiodend Column -->\n                <ng-container matColumnDef=\"Contractperiodend\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONT_PERIOD_END') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Contractperiodend }}\n                  </td>\n                </ng-container>\n                  <!-- Automaticupdate Column -->\n                  <ng-container matColumnDef=\"Automaticupdate\">\n                    <th mat-header-cell *matHeaderCellDef>\n                      {{ t('AUTOMATIC_UPDATE') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Automaticupdate }}\n                    </td>\n                  </ng-container>\n                  \n              \n              <!-- Relatedcountries Column -->\n               <ng-container matColumnDef=\"Relatedcountries\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('RELATED_COUNTRIES') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Relatedcountries }}\n                </td>\n              </ng-container>\n            \n               <!-- ProjectName Column -->\n               <ng-container matColumnDef=\"ProjectName\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('PNAME') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.ProjectName }}\n                </td>\n              </ng-container>\n            \n               <!-- ContractType Column -->\n               <ng-container matColumnDef=\"ContractType\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('CONTRACT_TYPE') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.ContractType }}\n                </td>\n              </ng-container>\n              \n              <!-- Externalconsultation Column -->\n              <ng-container matColumnDef=\"Externalconsultation\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('EXTCONSULTANT') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Externalconsultation }}\n                </td>\n              </ng-container>\n            \n               <!-- Contracteditem Column -->\n               <ng-container matColumnDef=\"Contracteditem\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('CONTITEM') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Contracteditem }}\n                </td>\n              </ng-container>\n             \n              <!-- Newongoing Column -->\n              <ng-container matColumnDef=\"Newongoing\">\n                <th mat-header-cell *matHeaderCellDef>\n                  {{ t('NEWONGOING') }}\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.Newongoing }}\n                </td>\n              </ng-container>\n            \n            <!-- Alertreleasedate Column -->\n             <ng-container matColumnDef=\"Alertreleasedate\">\n              <th mat-header-cell *matHeaderCellDef>\n                {{ t('ALERT_RELEASE_DATE') }}\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.Alertreleasedate }}\n              </td>\n            </ng-container>\n            \n            <!-- Relatedcontractnumber Column -->\n            <ng-container matColumnDef=\"Relatedcontractnumber\">\n              <th mat-header-cell *matHeaderCellDef>\n                {{ t('RELATE_CONTRACT_NUMBER') }}\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.Relatedcontractnumber }}\n              </td>\n            </ng-container>\n            \n            <!-- Expecteddateofconsultion Column -->\n            <ng-container matColumnDef=\"Expecteddateofconsultion\">\n              <th mat-header-cell *matHeaderCellDef>\n                {{ t('CONC_OF_S_D') }}\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.Expecteddateofconsultion }}\n              </td>\n            </ng-container>\n            \n             <!-- FIXContract Column -->\n             <ng-container matColumnDef=\"FIXContract\">\n              <th mat-header-cell *matHeaderCellDef>\n                {{ t('FIXCONTRACT') }}\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.FIXContract }}\n              </td>\n            </ng-container>\n            \n            <!-- Approvaldecisionnumber Column -->\n            <ng-container matColumnDef=\"Approvaldecisionnumber\">\n            <th mat-header-cell *matHeaderCellDef>\n              {{ t('APPROVAL_DECISION_NUMBER') }}\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.Approvaldecisionnumber }}\n            </td>\n            </ng-container>\n            \n            <!-- Managementstatus Column -->\n            <ng-container matColumnDef=\"Managementstatus\">\n            <th mat-header-cell *matHeaderCellDef>\n              {{ t('MANAGEMENT_STATE') }}\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.Managementstatus }}\n            </td>\n            </ng-container>\n            \n            <!-- Legaldepartmentreceptiondate Column -->\n            <ng-container matColumnDef=\"Legaldepartmentreceptiondate\">\n            <th mat-header-cell *matHeaderCellDef>\n              {{ t('LDPD') }}\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.Legaldepartmentreceptiondate }}\n            </td>\n            </ng-container>\n            <!-- Legaldepartmentresponsedeadline Column -->\n            <ng-container matColumnDef=\"Legaldepartmentresponsedeadline\">\n            <th mat-header-cell *matHeaderCellDef>\n              {{ t('LDRD') }}\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n              {{ element.Legaldepartmentresponsedeadline }}\n            </td>\n            </ng-container>\n            \n            \n              \n            \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr\n                    mat-row\n                    *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                    [ngClass]=\"{ gray: odd }\"\n                  ></tr>\n                </table>\n              </div>\n            </div>\n            </div>\n            <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"space-around center\"\n            style=\"margin-top: 10px;\"\n            >\n            <div fxFlex=\"0 0 100%\">\n              <mat-paginator [length]=\"length\"\n                [pageSize]=\"pageSize\"\n                [pageSizeOptions]=\"pageSizeOptions\"\n                (page)=\"pageEvent = $event\">\n              </mat-paginator>\n            </div>\n            </div>\n          </div>\n\n       \n        </div>\n      \n      </mat-drawer-container>\n      \n    </div>  \n      \n     \n    \n    </mat-card>\n  </form>\n</div>\n");

/***/ }),

/***/ "./src/app/casemanagement4/casemanagement4-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/casemanagement4/casemanagement4-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: Casemanagement4RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Casemanagement4RoutingModule", function() { return Casemanagement4RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _management4_management4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management4/management4.component */ "./src/app/casemanagement4/management4/management4.component.ts");




const routes = [
    {
        path: '',
        component: _management4_management4_component__WEBPACK_IMPORTED_MODULE_3__["Management4Component"]
    }
];
let Casemanagement4RoutingModule = class Casemanagement4RoutingModule {
};
Casemanagement4RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Casemanagement4RoutingModule);



/***/ }),

/***/ "./src/app/casemanagement4/casemanagement4.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/casemanagement4/casemanagement4.module.ts ***!
  \***********************************************************/
/*! exports provided: Casemanagement4Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Casemanagement4Module", function() { return Casemanagement4Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _casemanagement4_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./casemanagement4-routing.module */ "./src/app/casemanagement4/casemanagement4-routing.module.ts");
/* harmony import */ var _management4_management4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management4/management4.component */ "./src/app/casemanagement4/management4/management4.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let Casemanagement4Module = class Casemanagement4Module {
};
Casemanagement4Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_management4_management4_component__WEBPACK_IMPORTED_MODULE_4__["Management4Component"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _casemanagement4_routing_module__WEBPACK_IMPORTED_MODULE_3__["Casemanagement4RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
        ]
    })
], Casemanagement4Module);



/***/ }),

/***/ "./src/app/casemanagement4/management4/management4.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/casemanagement4/management4/management4.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.container-custom {\n  margin: 0 auto;\n  min-width: 978px;\n  max-width: 1680px;\n  padding: 8px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.mat-table > tbody > tr > td {\n  z-index: 1 !important;\n}\n\n.mat-radio-button {\n  margin-right: 10px;\n}\n\n.mat-list-base {\n  padding-right: 10px;\n  padding-bottom: 20px;\n  padding-left: 10px;\n}\n\n.mat-drawer-container {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvY2FzZW1hbmFnZW1lbnQ0L21hbmFnZW1lbnQ0L21hbmFnZW1lbnQ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXNlbWFuYWdlbWVudDQvbWFuYWdlbWVudDQvbWFuYWdlbWVudDQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQSxvQkFBQTs7QUFFQTtFQUNFLHFCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDTUY7O0FESkE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDUUY7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQTtFQUNFLHFCQUFBO0FDVUY7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UsbUJBQUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FETkE7RUFDRSxzQkFBQTtBQ1NGIiwiZmlsZSI6InNyYy9hcHAvY2FzZW1hbmFnZW1lbnQ0L21hbmFnZW1lbnQ0L21hbmFnZW1lbnQ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGF0YWJsZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAwLjAxJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAvLyBoZWlnaHQ6IDQwNXB4O1xufVxuLmNvbnRhaW5lci1jdXN0b20ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1pbi13aWR0aDogOTc4cHg7XG4gICAgbWF4LXdpZHRoOiAxNjgwcHg7XG4gICAgcGFkZGluZzogOHB4O1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxudGFibGUuY2FzZXRhYmxlIHtcbiAgd2lkdGg6IDIwMDBweDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxudGQubWF0LWNvbHVtbi1zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogUG9wb3ZlciBzdHlsaW5nICovXG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wb3BvdmVyX19jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02OXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtOHB4O1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQzLCAyNDAsIDI0MCk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pY29uZml4IHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBjb2xvcjogIzAwNDc5ZDtcbn1cbi5wb3BvdmVyX19jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaW5jZXJyb3Ige1xuICBmb250LXNpemU6IDc1JTtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC10YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbiAgXG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWF0LWxpc3QtYmFzZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSIsIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lci1jdXN0b20ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiA5NzhweDtcbiAgbWF4LXdpZHRoOiAxNjgwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG50YWJsZS5jYXNldGFibGUge1xuICB3aWR0aDogMjAwMHB4O1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbnRkLm1hdC1jb2x1bW4tc3RhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi8qIFBvcG92ZXIgc3R5bGluZyAqL1xuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBvcG92ZXJfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNjlweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAgMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgdG9wOiA1NXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAtOHB4O1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmM2YwZjA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YzZjBmMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuXG4ucG9wb3Zlcl9fbWVzc2FnZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaWNvbmZpeCB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMDQ3OWQ7XG59XG5cbi5wb3BvdmVyX19jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5pbmNlcnJvciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBjb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubWF0LXRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcbiAgei1pbmRleDogMSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hdC1saXN0LWJhc2Uge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/casemanagement4/management4/management4.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/casemanagement4/management4/management4.component.ts ***!
  \**********************************************************************/
/*! exports provided: MY_FORMATS, Management4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Management4Component", function() { return Management4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
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
let Management4Component = class Management4Component {
    constructor(cdRef, mediaObserver, transloco) {
        this.cdRef = cdRef;
        this.mediaObserver = mediaObserver;
        this.transloco = transloco;
        // MatPaginator Inputs
        this.length = 25;
        this.pageSize = 4;
        this.pageSizeOptions = [5, 10, 25];
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
        this.hideitem = true;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice());
        console.log('dataSource', this.dataSource);
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    hideformele() {
        this.hideitem = false;
    }
    showformele() {
        this.hideitem = true;
    }
    sortData(sort) {
        // const data = ELEMENT_DATA.slice();
        console.log('dataSource1', new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice()));
        if (!sort.active || sort.direction === '') {
            // this.sortedData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice());
            return;
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.sort((a, b) => {
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
    setActiveLang(lang) {
        this.transloco.setActiveLang(lang);
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
Management4Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], Management4Component.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], Management4Component.prototype, "sort", void 0);
Management4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management4.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement4/management4/management4.component.html")).default,
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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management4.component.scss */ "./src/app/casemanagement4/management4/management4.component.scss")).default]
    })
], Management4Component);

const ELEMENT_DATA = [
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 4,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 4,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
    {
        Controlnumber: 1,
        BranchNumber: 2,
        ApplicationDate: '2020/05/19',
        Status: 'Yes',
        ContractName: 'Dummy',
        OtherParty: 'Dummy',
        Applicantdivision: 'Division',
        Applicationdepartment: 'Department',
        Applicant: 'Dummy',
        LegalRepresentative: 'Dummy',
        Contractperiod: '2020/05/25',
        Contractperiodend: '2020/05/25',
        Automaticupdate: 'Yes',
        Relatedcountries: 'Japan, Poland',
        ProjectName: 'ndc',
        ContractType: 'Dummy',
        Externalconsultation: 'Dummy',
        Contracteditem: 'aaa',
        Newongoing: 'on going',
        Alertreleasedate: '2020/05/19',
        Relatedcontractnumber: '1',
        Expecteddateofconsultion: '2020/05/19',
        FIXContract: 'Yes',
        Approvaldecisionnumber: '2',
        Managementstatus: 'Others',
        Legaldepartmentreceptiondate: '2020/05/19',
        Legaldepartmentresponsedeadline: '2020/05/19'
    },
];
function compare(a, b, isAsc) {
    console.log('sorted data', (a < b ? -1 : 1) * (isAsc ? 1 : -1));
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ })

}]);
//# sourceMappingURL=casemanagement4-casemanagement4-module-es2015.js.map