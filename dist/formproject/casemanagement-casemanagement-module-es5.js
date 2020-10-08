(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["casemanagement-casemanagement-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement/management/management.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement/management/management.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"image-header\">\n    <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n  </div>\n  <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"main casemag\">\n      <ng-container *transloco=\"let t\">\n        <mat-card-header>\n          <mat-card-title style=\"min-height: 40px; margin: 0;\"\n            ><mat-icon>dashboard</mat-icon> Case Management List\n          </mat-card-title>\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n            fxHide.lt-md\n            class=\"langgroup\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            > </mat-button-toggle-group\n          ><button mat-raised-button color=\"accent\" type=\"submit\">\n            <mat-icon>search</mat-icon>\n            <span fxHide.lt-md>{{ t('SEARCH') }}</span>\n          </button>\n        </mat-card-header>\n       \n      </ng-container>\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n        style=\"text-align: center; margin-bottom: 20px;\"\n        fxHide.gt-sm\n      >\n        <div fxFlex=\"0 0 100%\">\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </div>\n      </div>\n\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CLASSIF') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"classification\">\n                <mat-option value=\"{{ t('C_MGMT') }}\">{{\n                  t('C_MGMT')\n                }}</mat-option>\n                <mat-option value=\"{{ t('Legal_C_M') }}\">{{\n                  t('Legal_C_M')\n                }}</mat-option>\n                <mat-option value=\"{{ t('LEGAL_BOTH') }}\">{{\n                  t('LEGAL_BOTH')\n                }}</mat-option>\n              </mat-select>\n              <mat-error\n                *ngIf=\"\n                  caseform.get('classification').errors &&\n                  caseform.get('classification').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTROL_NUMBER') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LDPD') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"recpdate\"\n                formControlName=\"recpdate\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"recpdate\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #recpdate></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPL_DATE') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"appdate\"\n                formControlName=\"appdate\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"appdate\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #appdate></mat-datepicker>\n              <mat-error\n                *ngIf=\"\n                  caseform.get('appdate').errors &&\n                  !caseform.get('appdate').errors.matDatepickerParse &&\n                  caseform.get('appdate').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n              <mat-error\n                *ngIf=\"\n                  caseform.get('appdate').errors &&\n                  caseform.get('appdate').errors.matDatepickerParse\n                \"\n                >Please enter a valid date</mat-error\n              >\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPLY_F_DEPT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"appdept\" />\n            </mat-form-field>\n            <div class=\"button-row\">\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"primary\"\n                class=\"gradient-primary\"\n              >\n                <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n              </button>\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"warn\"\n                class=\"gradient-warn\"\n              >\n                <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n              </button>\n            </div>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('APPLICANT') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"applicant\" />\n              <mat-error\n                *ngIf=\"\n                  caseform.get('applicant').errors &&\n                  caseform.get('applicant').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n            <div class=\"button-row\">\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"primary\"\n                class=\"gradient-primary\"\n              >\n                <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n              </button>\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"warn\"\n                class=\"gradient-warn\"\n              >\n                <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTRACT_NAME') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"applicant\" />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTRACT_ITEM') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"contracteditem\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('SECTION_MEMBER') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-checkbox\n              (change)=\"show_inc_app_sec($event)\"\n              class=\"chk-margin\"\n              formControlName=\"inc_app_sec_memberyes\"\n              >{{ t('TRUE') }}</mat-checkbox\n            >\n            <mat-checkbox\n              (change)=\"show_inc_app_sec($event)\"\n              class=\"chk-margin\"\n              formControlName=\"inc_app_sec_memberno\"\n              >{{ t('FALSE') }}</mat-checkbox\n            >\n            <mat-error class=\"incerror\" *ngIf=\"inc_app_sec_member_error\"\n              >Select atleast one</mat-error\n            >\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('NEW_RENEWAL') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"new_renew\" name=\"new_renew\">\n                <mat-option value=\"new\">{{ t('NEW') }}</mat-option>\n                <mat-option value=\"renewal\">{{ t('RENEWAL') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('AUTOMATIC_UPDATE') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"autoupdate\" name=\"autoupdate\">\n                <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTRACT_TYPE') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"contracttype\">\n                <mat-option value=\"dummy1\">Dummy text</mat-option>\n                <mat-option value=\"dummy2\">Renewal</mat-option>\n              </mat-select>\n              <mat-error\n                *ngIf=\"\n                  caseform.get('contracttype').errors &&\n                  caseform.get('contracttype').errors.required\n                \"\n                >Please fill up the field</mat-error\n              >\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTRACTOR') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"contractor\" />\n            </mat-form-field>\n            <div class=\"button-row\">\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"primary\"\n                class=\"gradient-primary\"\n              >\n                <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n              </button>\n              <button\n                type=\"button\"\n                mat-raised-button\n                color=\"warn\"\n                class=\"gradient-warn\"\n              >\n                <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n              </button>\n            </div>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('BEGINNING_DATE_OF_THE_CONTRACT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"begcontperiod\"\n                formControlName=\"begcontperiod\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"begcontperiod\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #begcontperiod></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('END_DATE_OF_THE_CONTRACT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"endcontperiod\"\n                formControlName=\"endcontperiod\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"endcontperiod\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #endcontperiod></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_REPRESENTATIVE') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select formControlName=\"legelrep\" name=\"legelrep\">\n                <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('FIX_VERSION_CONTRACT_ATTACHED') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select\n                formControlName=\"fix_ver_contract_att\"\n                name=\"fix_ver_contract_att\"\n              >\n                <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('EXSISTANCE_OF_THE_EXTERNAL_CONSULTANT') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <mat-select\n                formControlName=\"exsist_extr_consult\"\n                name=\"exsist_extr_consult\"\n              >\n                <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_DEPARTMENT_NOTES') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"\"\n                formControlName=\"legel_dept_notes\"\n              />\n            </mat-form-field>\n          </div>\n\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('PNAME') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" />\n            </mat-form-field>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('EXP_DATE_CONC') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"recpdate1\"\n                formControlName=\"recpdate\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"recpdate1\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #recpdate1></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('ALERT_RELEASE_DATE') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input\n                matInput\n                [matDatepicker]=\"recpdate2\"\n                formControlName=\"recpdate\"\n              />\n              <mat-datepicker-toggle\n                matSuffix\n                [for]=\"recpdate2\"\n              ></mat-datepicker-toggle>\n              <mat-datepicker #recpdate2></mat-datepicker>\n            </mat-form-field>\n          </div>\n        </div>\n    </ng-container>\n    <ng-container *transloco=\"let t\">\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n      >\n        <div fxFlex=\"0 0 25%\">\n          <label>{{ t('APPROVAL_DECISION_NUMBER') }}</label>\n        </div>\n        <div fxFlex=\"0 0 25%\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"\"\n              formControlName=\"legel_dept_notes\"\n            />\n          </mat-form-field>\n        </div>\n\n        <div fxFlex=\"0 0 25%\">\n          <label>{{ t('BRANCH_NUMBER') }}</label>\n        </div>\n        <div fxFlex=\"0 0 25%\">\n          <mat-form-field>\n            <input matInput placeholder=\"\" />\n          </mat-form-field>\n        </div>\n      </div>\n    </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around start\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('STATUS') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-checkbox formControlName=\"status_creating\">{{\n              t('CREATING')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_receiving\">{{\n              t('RECEIVING')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_app_responding\">{{\n              t('APP_RESPOND')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_contract_signed\">{{\n              t('CONTRACT_SIGN')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_cancelled\">{{\n              t('CANCELLED')\n            }}</mat-checkbox\n            ><br />\n          </div>\n\n          <div fxFlex=\"0 0 50%\">\n            <mat-checkbox formControlName=\"status_requesting\">{{\n              t('REQUESTING')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_correspond_legl_dept\">{{\n              t('CTLDEPT')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_resp_legl_dept\">{{\n              t('RTLDEPT')\n            }}</mat-checkbox\n            ><br />\n            <mat-checkbox formControlName=\"status_completed\">{{\n              t('COMPLETED')\n            }}</mat-checkbox\n            ><br />\n          </div>\n        </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around start\"\n        style=\"margin-top: 20px;\"\n      >\n        <div fxFlex=\"0 0 25%\">\n          <label>{{ t('RELATED_COUNTRIES') }} </label>\n        </div>\n        <div fxFlex=\"0 0 25%\">\n          <mat-checkbox class=\"country-margin\" formControlName=\"country_korea\">{{\n            t('JAPAN')\n          }}</mat-checkbox>\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_china\"\n            >{{ t('US') }}</mat-checkbox\n          ><br />\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_korea\"\n            >{{ t('CHINA') }}</mat-checkbox\n          >\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_europe\"\n            >{{ t('TAIWAN') }}</mat-checkbox\n          >\n        </div>\n\n        <div fxFlex=\"0 0 50%\">\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_tiwan\"\n            >{{ t('INDIA') }}</mat-checkbox\n          >\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_india\"\n            >{{ t('EUROPE') }}</mat-checkbox\n          ><br />\n          <mat-checkbox\n            class=\"country-margin\"\n            formControlName=\"country_others\"\n            >{{ t('OTHERS') }}</mat-checkbox\n          ><br />\n        </div>\n      </div>\n      </ng-container>\n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign=\"space-around center\"\n          style=\"margin-top: 10px;\"\n        >\n          <div fxFlex=\"0 0 100%\">\n            <button mat-raised-button color=\"accent\">\n              <mat-icon>search</mat-icon> {{ t('SEARCH') }}\n            </button>\n          </div>\n        </div>\n      </ng-container>\n      <mat-card class=\"dataset\">\n        <div class=\"card-icon\">\n          Case Management List\n        </div>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"space-around center\"\n            style=\"margin-top: 10px;\"\n          >\n            <div fxFlex=\"0 0 100%\" fxLayoutAlign=\"end center\" class=\"margintop\">\n              <div class=\"onmobile\">\n                <span\n                  >{{ t('THE_TOALNOFC') }}:\n                  <mat-chip color=\"primary\" selected>11</mat-chip></span\n                >\n                <button\n                  type=\"button\"\n                  mat-raised-button\n                  color=\"primary\"\n                  class=\"gradient-success mr-1\"\n                >\n                  <mat-icon>cloud_download</mat-icon> {{ t('CSV_CREATE') }}\n                </button>\n                <button\n                  type=\"button\"\n                  mat-raised-button\n                  color=\"primary\"\n                  class=\"gradient-indigo\"\n                >\n                  <mat-icon>print</mat-icon> {{ t('PRINT') }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign=\"space-around center\"\n          style=\"margin-top: 10px;\"\n          fxHide.lt-md\n          class=\"only-desktop\"\n          *transloco=\"let t\"\n        >\n          <div fxFlex=\"0 0 100%\">\n            <div class=\"datatable-container mat-elevation-z1\">\n              <table mat-table [dataSource]=\"dataSource\" class=\"casetable\">\n                <!-- Controlnumber Column -->\n\n                <ng-container\n                  matColumnDef=\"Controlnumber\"\n                  sticky\n                  *transloco=\"let t\"\n                >\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('CONTROL_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.Controlnumber }}\n                  </td>\n                </ng-container>\n\n                <!-- BranchNumber Column -->\n                <ng-container matColumnDef=\"BranchNumber\" sticky>\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('BRANCH_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.BranchNumber }}\n                  </td>\n                </ng-container>\n\n                <!-- Applicationdepartment Column -->\n                <ng-container matColumnDef=\"Applicationdepartment\" sticky>\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('APPLY_F_DEPT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    <mat-chip-list aria-label=\"Applicationdepartment\">\n                      <mat-chip color=\"accent\" selected class=\"chipred\"\n                        >{{ element.Applicationdepartment }}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </td>\n                </ng-container>\n\n                <!-- Applicant Column -->\n                <ng-container matColumnDef=\"Applicant\" sticky>\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('APPLICANT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.Applicant }}\n                  </td>\n                </ng-container>\n\n                <!-- ApplicationDate Column -->\n                <ng-container matColumnDef=\"ApplicationDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('APPL_DATE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ApplicationDate }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractName Column -->\n                <ng-container matColumnDef=\"ContractName\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACT_NAME') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <span *ngIf=\"element.BranchNumber != 3 && element.BranchNumber != 4\">{{element.ContractName}}</span>\n                    <div\n                      class=\"popover__wrapper\"\n                      *ngIf=\"\n                        element.BranchNumber == 3 || element.BranchNumber == 4\n                      \"\n                    >\n                      <a href=\"#\">\n                        <h2 class=\"popover__title\">\n                          {{ element.ContractName }}...<mat-icon class=\"iconfix\"\n                            >screen_share</mat-icon\n                          >\n                        </h2>\n                      </a>\n                      <div class=\"popover__content\">\n                        <p class=\"popover__message\">Dummy Text</p>\n                        <p>\n                          Lorem Ipsum is simply dummy text of the printing and\n                          typesetting industry. Lorem Ipsum has been the\n                          industry's standard dummy text ever since the 1500s.\n                        </p>\n                      </div>\n                    </div>\n                  </td>\n                </ng-container>\n\n                <!-- ContractType Column -->\n                <ng-container matColumnDef=\"ContractType\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACT_TYPE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractType }}\n                  </td>\n                </ng-container>\n\n                <!-- NewRenewal Column -->\n                <ng-container matColumnDef=\"NewRenewal\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('NEW_RENEWAL') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <mat-chip-list aria-label=\"Applicationdepartment\">\n                      <mat-chip\n                        color=\"accent\"\n                        selected\n                        class=\"chipgreen\"\n                        *ngIf=\"element.NewRenewal == 'New'\"\n                        >{{ element.NewRenewal }}\n                      </mat-chip>\n                      <mat-chip\n                        color=\"accent\"\n                        selected\n                        class=\"chipindigo\"\n                        *ngIf=\"element.NewRenewal == 'Renew'\"\n                        >{{ element.NewRenewal }}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </td>\n                </ng-container>\n\n                <!-- Contractor Column -->\n                <ng-container matColumnDef=\"Contractor\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACTOR') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Contractor }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractBeginningDate Column -->\n                <ng-container matColumnDef=\"ContractBeginningDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('BEGINNING_DATE_OF_THE_CONTRACT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractBeginningDate }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractEndDate Column -->\n                <ng-container matColumnDef=\"ContractEndDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('END_DATE_OF_THE_CONTRACT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractEndDate }}\n                  </td>\n                </ng-container>\n\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"Status\">\n                  <th mat-header-cell *matHeaderCellDef>{{ t('STATUS') }}</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Status }}\n                  </td>\n                </ng-container>\n\n                <!-- LegalRepresentative Column -->\n                <ng-container matColumnDef=\"LegalRepresentative\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('LEGAL_REPRESENTATIVE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.LegalRepresentative }}\n                  </td>\n                </ng-container>\n\n                <!-- Remarks Column -->\n                <ng-container matColumnDef=\"Remarks\">\n                  <th mat-header-cell *matHeaderCellDef>{{ t('REMARKS') }}</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Remarks }}\n                  </td>\n                </ng-container>\n\n                <!-- SecurityCaseClassification Column -->\n                <ng-container matColumnDef=\"SecurityCaseClassification\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('SEC_CASE_CLASSIF') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.SecurityCaseClassification }}\n                  </td>\n                </ng-container>\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr\n                  mat-row\n                  *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                  [ngClass]=\"{ gray: odd }\"\n                ></tr>\n              </table>\n            </div>\n            <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n          </div>\n        </div>\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          style=\"margin-top: 10px;\"\n          fxHide.gt-sm\n          class=\"only-mobile\"\n          *transloco=\"let t\"\n        >\n          <div fxFlex=\"0 0 100%\">\n            <div class=\"datatable-container mat-elevation-z1\">\n              <table mat-table [dataSource]=\"dataSource\" class=\"casetable\">\n                <!-- Controlnumber Column -->\n\n                <ng-container matColumnDef=\"Controlnumber\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('CONTROL_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.Controlnumber }}\n                  </td>\n                </ng-container>\n\n                <!-- BranchNumber Column -->\n                <ng-container matColumnDef=\"BranchNumber\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('BRANCH_NUMBER') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.BranchNumber }}\n                  </td>\n                </ng-container>\n\n                <!-- Applicationdepartment Column -->\n                <ng-container matColumnDef=\"Applicationdepartment\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('APPLY_F_DEPT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    <mat-chip-list aria-label=\"Applicationdepartment\">\n                      <mat-chip color=\"accent\" selected class=\"chipred\"\n                        >{{ element.Applicationdepartment }}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </td>\n                </ng-container>\n\n                <!-- Applicant Column -->\n                <ng-container matColumnDef=\"Applicant\">\n                  <th mat-header-cell *matHeaderCellDef style=\"width: 140px;\">\n                    {{ t('APPLICANT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\" style=\"width: 140px;\">\n                    {{ element.Applicant }}\n                  </td>\n                </ng-container>\n\n                <!-- ApplicationDate Column -->\n                <ng-container matColumnDef=\"ApplicationDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('APPL_DATE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ApplicationDate }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractName Column -->\n                <ng-container matColumnDef=\"ContractName\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACT_NAME') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <span\n                      *ngIf=\"\n                        element.BranchNumber != 3 && element.BranchNumber != 4\n                      \"\n                      >{{ element.ContractName }}</span\n                    >\n                    <div\n                      class=\"popover__wrapper\"\n                      *ngIf=\"\n                        element.BranchNumber == 3 || element.BranchNumber == 4\n                      \"\n                    >\n                      <a href=\"javascript:void(0)\">\n                        <h2 class=\"popover__title\">\n                          {{ element.ContractName }}...<mat-icon class=\"iconfix\"\n                            >screen_share</mat-icon\n                          >\n                        </h2>\n                      </a>\n                      <div class=\"popover__content\">\n                        <p class=\"popover__message\">Dummy Text</p>\n                        <p>\n                          Lorem Ipsum is simply dummy text of the printing and\n                          typesetting industry. Lorem Ipsum has been the\n                          industry's standard dummy text ever since the 1500s.\n                        </p>\n                      </div>\n                    </div>\n                  </td>\n                </ng-container>\n\n                <!-- ContractType Column -->\n                <ng-container matColumnDef=\"ContractType\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACT_TYPE') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractType }}\n                  </td>\n                </ng-container>\n\n                <!-- NewRenewal Column -->\n                <ng-container matColumnDef=\"NewRenewal\">\n                  <th mat-header-cell *matHeaderCellDef>New/Renewal</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    <mat-chip-list aria-label=\"Applicationdepartment\">\n                      <mat-chip\n                        color=\"accent\"\n                        selected\n                        class=\"chipgreen\"\n                        *ngIf=\"element.NewRenewal == 'New'\"\n                        >{{ element.NewRenewal }}\n                      </mat-chip>\n                      <mat-chip\n                        color=\"accent\"\n                        selected\n                        class=\"chipindigo\"\n                        *ngIf=\"element.NewRenewal == 'Renew'\"\n                        >{{ element.NewRenewal }}\n                      </mat-chip>\n                    </mat-chip-list>\n                  </td>\n                </ng-container>\n\n                <!-- Contractor Column -->\n                <ng-container matColumnDef=\"Contractor\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('CONTRACTOR') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Contractor }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractBeginningDate Column -->\n                <ng-container matColumnDef=\"ContractBeginningDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('BEGINNING_DATE_OF_THE_CONTRACT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractBeginningDate }}\n                  </td>\n                </ng-container>\n\n                <!-- ContractEndDate Column -->\n                <ng-container matColumnDef=\"ContractEndDate\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    {{ t('END_DATE_OF_THE_CONTRACT') }}\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.ContractEndDate }}\n                  </td>\n                </ng-container>\n\n                <!-- Status Column -->\n                <ng-container matColumnDef=\"Status\">\n                  <th mat-header-cell *matHeaderCellDef>Status</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Status }}\n                  </td>\n                </ng-container>\n\n                <!-- LegalRepresentative Column -->\n                <ng-container matColumnDef=\"LegalRepresentative\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    Legal Representative\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.LegalRepresentative }}\n                  </td>\n                </ng-container>\n\n                <!-- Remarks Column -->\n                <ng-container matColumnDef=\"Remarks\">\n                  <th mat-header-cell *matHeaderCellDef>Remarks</th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.Remarks }}\n                  </td>\n                </ng-container>\n\n                <!-- SecurityCaseClassification Column -->\n                <ng-container matColumnDef=\"SecurityCaseClassification\">\n                  <th mat-header-cell *matHeaderCellDef>\n                    Security Case Classification\n                  </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                    {{ element.SecurityCaseClassification }}\n                  </td>\n                </ng-container>\n\n                <!-- Star Column -->\n                <!-- <ng-container matColumnDef=\"star\" stickyEnd>\n                    <th mat-header-cell *matHeaderCellDef></th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      <mat-icon>more_vert</mat-icon>\n                    </td>\n                  </ng-container> -->\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr\n                  mat-row\n                  *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                  [ngClass]=\"{ gray: odd }\"\n                ></tr>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign=\"space-around center\"\n          style=\"margin-top: 10px;\"\n        >\n          <div fxFlex=\"0 0 100%\">\n            <mat-paginator\n              [pageSizeOptions]=\"[5, 10, 20]\"\n              showFirstLastButtons\n            ></mat-paginator>\n          </div>\n        </div>\n      </mat-card>\n    </mat-card>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/casemanagement/casemanagement-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/casemanagement/casemanagement-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: CasemanagementRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasemanagementRoutingModule", function () { return CasemanagementRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management/management.component */ "./src/app/casemanagement/management/management.component.ts");
            var routes = [
                {
                    path: '',
                    component: _management_management_component__WEBPACK_IMPORTED_MODULE_3__["ManagementComponent"]
                }
            ];
            var CasemanagementRoutingModule = /** @class */ (function () {
                function CasemanagementRoutingModule() {
                }
                return CasemanagementRoutingModule;
            }());
            CasemanagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], CasemanagementRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/casemanagement/casemanagement.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/casemanagement/casemanagement.module.ts ***!
          \*********************************************************/
        /*! exports provided: CasemanagementModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasemanagementModule", function () { return CasemanagementModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _casemanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./casemanagement-routing.module */ "./src/app/casemanagement/casemanagement-routing.module.ts");
            /* harmony import */ var _management_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./management/management.component */ "./src/app/casemanagement/management/management.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
            /* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var CasemanagementModule = /** @class */ (function () {
                function CasemanagementModule() {
                }
                return CasemanagementModule;
            }());
            CasemanagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_management_management_component__WEBPACK_IMPORTED_MODULE_4__["ManagementComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _casemanagement_routing_module__WEBPACK_IMPORTED_MODULE_3__["CasemanagementRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
                    ]
                })
            ], CasemanagementModule);
            /***/ 
        }),
        /***/ "./src/app/casemanagement/management/management.component.scss": 
        /*!*********************************************************************!*\
          !*** ./src/app/casemanagement/management/management.component.scss ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvY2FzZW1hbmFnZW1lbnQvbWFuYWdlbWVudC9tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXNlbWFuYWdlbWVudC9tYW5hZ2VtZW50L21hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNHRjs7QURBQSxvQkFBQTs7QUFFQTtFQUNFLHFCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURKQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VtYW5hZ2VtZW50L21hbmFnZW1lbnQvbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNDA1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbnRhYmxlLmNhc2V0YWJsZSB7XG4gIHdpZHRoOiAyMDAwcHg7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cbnRkLm1hdC1jb2x1bW4tc3RhciB7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi8qIFBvcG92ZXIgc3R5bGluZyAqL1xuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9wb3Zlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucG9wb3Zlcl9fY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNjlweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAgMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgbWluLXdpZHRoOiAyNzBweDtcbiAgdG9wOiA1NXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogLThweDtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigyNDMsIDI0MCwgMjQwKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xuICB6LWluZGV4OiA5OTk5O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcbn1cbi5wb3BvdmVyX19tZXNzYWdlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaWNvbmZpeCB7XG4gIHRvcDogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbiAgY29sb3I6ICMwMDQ3OWQ7XG59XG4ucG9wb3Zlcl9fY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmluY2Vycm9yIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iLCIuZGF0YXRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDAuMDElO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBoZWlnaHQ6IDQwNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnRhYmxlLmNhc2V0YWJsZSB7XG4gIHdpZHRoOiAyMDAwcHg7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxudGQubWF0LWNvbHVtbi1zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogUG9wb3ZlciBzdHlsaW5nICovXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9wb3Zlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3BvdmVyX19jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02OXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IC04cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjBmMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmMGYwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogOTk5OTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG59XG5cbi5wb3BvdmVyX19tZXNzYWdlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pY29uZml4IHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBjb2xvcjogIzAwNDc5ZDtcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluY2Vycm9yIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/casemanagement/management/management.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/casemanagement/management/management.component.ts ***!
          \*******************************************************************/
        /*! exports provided: MY_FORMATS, ManagementComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () { return MY_FORMATS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComponent", function () { return ManagementComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/fesm2015/ngneat-transloco.js");
            // const moment = _rollupMoment || _moment;
            var MY_FORMATS = {
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
            var ManagementComponent = /** @class */ (function () {
                function ManagementComponent(cdRef, mediaObserver, transloco) {
                    this.cdRef = cdRef;
                    this.mediaObserver = mediaObserver;
                    this.transloco = transloco;
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
                }
                // setPageSizeOptions(setPageSizeOptionsInput: string) {
                //   if (setPageSizeOptionsInput) {
                //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
                //   }
                // }
                ManagementComponent.prototype.setActiveLang = function (lang) {
                    this.transloco.setActiveLang(lang);
                };
                ManagementComponent.prototype.ngOnInit = function () {
                    // this.length = ELEMENT_DATA.length;
                    this.dataSource.paginator = this.paginator;
                    this.caseform = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        classification: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                        controlnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        recpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        appdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, this.dateValidator]),
                        appdept: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                        contractname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        contracteditem: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        inc_app_sec_memberyes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        inc_app_sec_memberno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        new_renew: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        autoupdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        contracttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                        contractor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        begcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        endcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        legelrep: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        fix_ver_contract_att: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        exsist_extr_consult: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        legel_dept_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_creating: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_receiving: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_app_responding: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_contract_signed: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_cancelled: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_requesting: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_correspond_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_resp_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        status_completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_us: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_china: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_korea: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_europe: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_tiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_india: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        country_others: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                    });
                    this.mediaSub = this.mediaObserver.asObservable().subscribe(function (change) {
                        change.forEach(function (v) {
                            console.log(v.mediaQuery, v.mqAlias);
                        });
                        console.log('-----');
                    });
                };
                ManagementComponent.prototype.show_inc_app_sec = function (event) {
                    console.log(event.checked);
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                ManagementComponent.prototype.onSubmit = function () {
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
                };
                ManagementComponent.prototype.dateValidator = function (c) {
                    var value = c.value;
                    if (value && typeof value === 'string') {
                        var match = value.match(/^[0-9]{4}[\/][0-9]{2}[\/][0-9]{2}$/);
                        if (!match) {
                            return { dateInvalid: true };
                        }
                        else if (match && match[0] !== value) {
                            return { dateInvalid: true };
                        }
                    }
                    return null;
                };
                ManagementComponent.prototype.ngAfterViewInit = function () {
                    this.cdRef.detectChanges();
                };
                ManagementComponent.prototype.ngOnDestroy = function () {
                    if (this.mediaSub) {
                        this.mediaSub.unsubscribe();
                    }
                };
                return ManagementComponent;
            }());
            ManagementComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
                { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], ManagementComponent.prototype, "paginator", void 0);
            ManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-management',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/casemanagement/management/management.component.html")).default,
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MomentDateAdapter"],
                            deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
                        },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./management.component.scss */ "./src/app/casemanagement/management/management.component.scss")).default]
                })
            ], ManagementComponent);
            var ELEMENT_DATA = [
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
            /***/ 
        })
    }]);
//# sourceMappingURL=casemanagement-casemanagement-module-es2015.js.map
//# sourceMappingURL=casemanagement-casemanagement-module-es5.js.map
//# sourceMappingURL=casemanagement-casemanagement-module-es5.js.map