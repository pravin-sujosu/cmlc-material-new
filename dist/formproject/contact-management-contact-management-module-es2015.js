(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-management-contact-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-management/contact/contact.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-management/contact/contact.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"image-header\">\n      <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n    </div>  \n     \n    <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit1()\">\n      <mat-card class=\"main\">\n        <ng-container *transloco=\"let t\">\n          <mat-card-header>\n            <mat-card-title style=\"min-height: 40px; margin: 0;\"\n              ><mat-icon>dashboard</mat-icon> {{t('C_MGMT') }}\n            </mat-card-title>\n            <div class=\"buttonbar\">\n              <div class=\"buttonbarbg\">\n                <button mat-button><mat-icon>cloud_done</mat-icon> {{ t('SAVE')}}</button>\n                <button mat-button><mat-icon>done_all</mat-icon> {{ t('SUBMIT')}}</button>\n                <button mat-button><mat-icon>redo</mat-icon> {{ t('RESET')}}</button>\n                <button mat-button (click)=\"printPage()\" type=\"button\">\n                  <mat-icon>local_printshop</mat-icon> {{ t('PRINT')}}\n                </button>\n                <button mat-button>\n                  <mat-icon>delete_outline</mat-icon> {{ t('DELETE')}}\n                </button>\n                <button mat-button>\n                    <mat-icon>settings_applications</mat-icon> {{ t('APPLICATION')}}\n                  </button>               \n              </div>\n            </div>\n  \n            <mat-button-toggle-group\n              name=\"fontStyle\"\n              aria-label=\"Font Style\"\n              style=\"margin-right: 5px;\"\n              fxHide.lt-md\n              class=\"langgroup\"\n            >\n              <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n                >EN</mat-button-toggle\n              >\n              <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n                >JP</mat-button-toggle\n              >\n            </mat-button-toggle-group>\n            <div class=\"staticlbl\">\n              SECURITY CASE\n            </div>\n            <!-- <button mat-raised-button color=\"accent\" type=\"submit\">\n              <mat-icon>search</mat-icon>\n              <span fxHide.lt-md>{{ t('SEARCH') }}</span>\n            </button> -->\n          </mat-card-header>\n        </ng-container>\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n          style=\"text-align: center; margin-bottom: 20px;\"\n          fxHide.gt-sm\n          class=\"langonmobile\"\n        >\n          <div fxFlex=\"0 0 100%\">\n            <mat-button-toggle-group\n              name=\"fontStyle\"\n              aria-label=\"Font Style\"\n              style=\"margin-right: 5px;\"\n            >\n              <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n                >EN</mat-button-toggle\n              >\n              <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n                >JP</mat-button-toggle\n              >\n            </mat-button-toggle-group>\n          </div>\n        </div>\n  \n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('PNAME') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('CONTROL_NUMBER') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n              </mat-form-field>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('APPL_DATE') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input\n                  matInput\n                  [matDatepicker]=\"recpdate1\"\n                  formControlName=\"recpdate\"\n                />\n                <mat-datepicker-toggle\n                  matSuffix\n                  [for]=\"recpdate1\"\n                ></mat-datepicker-toggle>\n                <mat-datepicker #recpdate1></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('APPL_DIVISION') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n              </mat-form-field>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('LDPD') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input\n                  matInput\n                  [matDatepicker]=\"begcontperiod\"\n                  formControlName=\"begcontperiod\"\n                />\n                <mat-datepicker-toggle\n                  matSuffix\n                  [for]=\"begcontperiod\"\n                ></mat-datepicker-toggle>\n                <mat-datepicker #begcontperiod></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('APPLY_F_DEPT') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"applicant\" />\n                <mat-error\n                  *ngIf=\"\n                    caseform.get('applicant').errors &&\n                    caseform.get('applicant').errors.required\n                  \"\n                  >Please fill up the field</mat-error\n                >\n              </mat-form-field>\n     \n            </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign.gt-sm=\"space-around center\"\n            >\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('CONC_OF_S_D') }}*</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input\n                    matInput\n                    [matDatepicker]=\"begcontperiod1\"\n                    formControlName=\"begcontperiod\"\n                  />\n                  <mat-datepicker-toggle\n                    matSuffix\n                    [for]=\"begcontperiod1\"\n                  ></mat-datepicker-toggle>\n                  <mat-datepicker #begcontperiod1></mat-datepicker>\n                </mat-form-field>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <label>{{ t('APPLICANT') }}*</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input matInput placeholder=\"\" formControlName=\"applicant\" />\n                  <mat-error\n                    *ngIf=\"\n                      caseform.get('applicant').errors &&\n                      caseform.get('applicant').errors.required\n                    \"\n                    >Please fill up the field</mat-error\n                  >\n                </mat-form-field>\n                <div class=\"button-row\">\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"primary\"\n                    class=\"gradient-primary\"\n                  >\n                    <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                  </button>\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"warn\"\n                    class=\"gradient-warn\"\n                  >\n                    <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                  </button>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('LDRT') }}*</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input\n                  matInput\n                  [matDatepicker]=\"begcontperiod2\"\n                  formControlName=\"begcontperiod\"\n                />\n                <mat-datepicker-toggle\n                  matSuffix\n                  [for]=\"begcontperiod2\"\n                ></mat-datepicker-toggle>\n                <mat-datepicker #begcontperiod2></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('PERSON_CONCERN') }}*</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"applicant\" />\n                <mat-error\n                  *ngIf=\"\n                    caseform.get('applicant').errors &&\n                    caseform.get('applicant').errors.required\n                  \"\n                  >Please fill up the field</mat-error\n                >\n              </mat-form-field>\n              <div class=\"button-row\">\n                <button\n                  type=\"button\"\n                  mat-raised-button\n                  color=\"primary\"\n                  class=\"gradient-primary\"\n                >\n                  <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                </button>\n                <button\n                  type=\"button\"\n                  mat-raised-button\n                  color=\"warn\"\n                  class=\"gradient-warn\"\n                >\n                  <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('STATUS') }}*</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <mat-select formControlName=\"classification\">\n                  <mat-option value=\"{{ t('CREATING') }}\">{{\n                    t('CREATING')\n                  }}</mat-option>\n                  <mat-option value=\"{{ t('CREATING') }}\">{{\n                    t('CREATING')\n                  }}</mat-option>\n                </mat-select>\n                <mat-error\n                  *ngIf=\"\n                    caseform.get('classification').errors &&\n                    caseform.get('classification').errors.required\n                  \"\n                  >Please fill up the field</mat-error\n                >\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n                <label>{{ t('LEGAL_REPRESENTATIVE') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n                </mat-form-field>\n              </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_DEPARTMENT_NOTES') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('LEGAL_DEPARTMENT_ITEM') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n              <label class=\"file\">\n                <input type=\"file\" id=\"file\" aria-label=\"File browser example\">\n                <mat-icon>cloud_upload</mat-icon><span class=\"file-custom\" [attr.data-lbl]=\"'ADD' | transloco\">\n                  </span>\n              </label> \n          </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('APPROVAL_DECISION_NUMBER') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n                  </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('BOX_NUMBER') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                    <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n                  </mat-form-field>\n          \n            </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('NAMEEXTCONSULT') }}</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"autoupdate\" />\n              </mat-form-field>\n                \n            </div>\n  \n            <div fxFlex=\"0 0 50%\"></div>\n          </div>\n        </ng-container>\n      </mat-card>\n      </form>\n      <mat-card class=\"main\" style=\"margin-bottom: 50px\">\n            <mat-tab-group color=\"accent\" backgroundColor=\"accent\" selectedIndex=\"0\" fitInkBarToContent=\"true\">\n                <mat-tab>\n                    <ng-template mat-tab-label *transloco=\"let t\">\n                      <mat-icon>developer_board</mat-icon>\n                      {{t('CONTRACT_CONTENT')}}\n                    </ng-template>\n                  <ng-container *transloco=\"let t\">\n                    <div class=\"addnewbtn\">\n                      <button mat-raised-button color=\"accent\" (click)=\"addContractContentFormGroup()\">{{t('ADD')}}  <mat-icon>add</mat-icon></button>\n                    </div>\n                   \n                      <form [formGroup]=\"contractcontentform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit2()\" >\n                        <mat-tab-group [selectedIndex]=\"seltab\" formArrayName=\"elementArray\" style=\"overflow:hidden\">\n           \n                           \n                            <mat-tab label=\" {{i+1}}\" *ngFor=\"let element of contractcontentform.get('elementArray').controls; let i = index\"  [formGroupName]=\"i\">\n                              <ng-template [ngIf]=\"showdeletebtn\">\n                                <div style=\"text-align: right;margin-top: 20px;\">\n                                  <button mat-raised-button color=\"warn\" (click)=\"removeOrClearContractContent(i);\"><mat-icon>delete_forever</mat-icon>{{ t('DELETE') }}</button>\n                                </div>\n                              </ng-template>\n                              <div\n                              fxLayout=\"row wrap\"\n                              fxLayout.xs=\"column\"\n                              fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                              <div fxFlex=\"0 25%\">\n                                <label>{{ t('NEW_RENEWAL') }}*</label>\n                              </div>\n                              <div fxFlex=\"0 0 25%\">\n                                  <mat-form-field>\n                                      <mat-select formControlName=\"new_renew\">\n                                        <mat-option value=\"yes\">{{ t('NEW') }}</mat-option>\n                                        <mat-option value=\"no\">{{ t('RENEWAL') }}</mat-option>\n                                      </mat-select>\n                                  </mat-form-field>\n                                  <!-- <mat-error\n                          *ngIf=\"\n                          contractcontentform.get('autoupdate2').errors &&\n                            contractcontentform.get('autoupdate2').errors.required\n                          \"\n                          >Please fill up the field</mat-error -->\n                        \n                              </div>\n                        \n                              <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('CONTRACT_TYPE') }}*</label>\n                              </div>\n                              <div fxFlex=\"0 0 25%\">\n                                  <mat-form-field>\n                                      <mat-select formControlName=\"contracttype\" name=\"contracttype\">\n                                        <mat-option value=\"yes\">{{ t('NON_DISCLOSURE_AGREEMENT') }}</mat-option>\n                                        <mat-option value=\"no\">{{ t('NON_DISCLOSURE_AGREEMENT') }}</mat-option>\n                                        <mat-option value=\"no\">{{ t('NON_DISCLOSURE_AGREEMENT') }}</mat-option>\n                                      </mat-select>\n                                    </mat-form-field>\n                              </div>\n                            </div>\n                            <div\n                                fxLayout=\"row wrap\"\n                                fxLayout.xs=\"column\"\n                                fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                                <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('CONTRACT_NAME') }}</label>\n                                </div>\n                                <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                    <input matInput placeholder=\"\" formControlName=\"contractname\" />\n                                </mat-form-field>\n                                </div>\n                                <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('CONTRACT_ITEM') }}</label>\n                                </div>\n                                <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                    <input matInput placeholder=\"\" formControlName=\"contracteditem\" />\n                                </mat-form-field>\n                                </div>\n                            </div>\n                            <div\n                            fxLayout=\"row wrap\"\n                            fxLayout.xs=\"column\"\n                            fxLayoutAlign.gt-sm=\"space-around center\"\n                          >\n                            <div fxFlex=\"0 0 25%\">\n                              <label>{{ t('OTHER_PARTY') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                              <mat-form-field>\n                                <input matInput placeholder=\"\" formControlName=\"contractor\" />\n                              </mat-form-field>\n                              <div class=\"button-row\">\n                                <button\n                                  type=\"button\"\n                                  mat-raised-button\n                                  color=\"primary\"\n                                  class=\"gradient-primary\"\n                                >\n                                  <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                                </button>\n                                <button\n                                  type=\"button\"\n                                  mat-raised-button\n                                  color=\"warn\"\n                                  class=\"gradient-warn\"\n                                >\n                                  <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                                </button>\n                              </div>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                              <label>{{ t('BEGINNING_DATE_OF_THE_CONTRACT') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                              <mat-form-field>\n                                <input\n                                  matInput\n                                  [matDatepicker]=\"begcontperiod3\"\n                                  formControlName=\"begcontperiod\"\n                                />\n                                <mat-datepicker-toggle\n                                  matSuffix\n                                  [for]=\"begcontperiod3\"\n                                ></mat-datepicker-toggle>\n                                <mat-datepicker #begcontperiod3></mat-datepicker>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div\n                            fxLayout=\"row wrap\"\n                            fxLayout.xs=\"column\"\n                            fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                            <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('END_DATE_OF_THE_CONTRACT') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                <input\n                                    matInput\n                                    [matDatepicker]=\"endcontperiod5\"\n                                    formControlName=\"endcontperiod\"\n                                />\n                                <mat-datepicker-toggle\n                                    matSuffix\n                                    [for]=\"endcontperiod5\"\n                                ></mat-datepicker-toggle>\n                                <mat-datepicker #endcontperiod5></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('AUTOMATIC_UPDATE') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                <mat-select formControlName=\"autoupdate2\" name=\"autoupdate2\">\n                                    <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                                    <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n                                </mat-select>\n                                </mat-form-field>\n                            </div>\n                            </div>\n                            <div\n                            fxLayout=\"row wrap\"\n                            fxLayout.xs=\"column\"\n                            fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                            <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('ALERT_RELEASE_DATE') }}*</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                <input\n                                    matInput\n                                    [matDatepicker]=\"endcontperiod13\"\n                                    formControlName=\"alertreleasedate\"\n                                />\n                                <mat-datepicker-toggle\n                                    matSuffix\n                                    [for]=\"endcontperiod13\"\n                                ></mat-datepicker-toggle>\n                                <mat-datepicker #endcontperiod13></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('RELATE_CONTRACT_NUMBER') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                    <input matInput placeholder=\"\" formControlName=\"relatecontract\" />\n                                  </mat-form-field>\n                            </div>\n                            </div>\n                            <div\n                            fxLayout=\"row wrap\"\n                            fxLayout.xs=\"column\"\n                            fxLayoutAlign.gt-sm=\"space-around center\"\n                          >\n                          <div fxFlex=\"0 0 25%\">\n                            <label>{{ t('EXTCONSULT') }}</label>\n                          </div>\n                          <div fxFlex=\"0 0 25%\">\n                            <mat-form-field>\n                                <mat-select formControlName=\"externalconsultant\">\n                                    <mat-option value=\"yes\">{{ t('YES') }}</mat-option>\n                                    <mat-option value=\"no\">{{ t('NO') }}</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                          </div>\n                          <div fxFlex=\"0 0 25%\">\n                            <label>{{ t('FIX_VERSION_CONTRACT_ATTACHED') }}</label>\n                          </div>\n                          <div fxFlex=\"0 0 25%\">\n                              <label class=\"file\">\n                                <input type=\"file\" id=\"file\" aria-label=\"File browser example\" formControlName=\"contractattached\">\n                                <mat-icon>cloud_upload</mat-icon><span class=\"file-custom\" [attr.data-lbl]=\"'ADD' | transloco\">\n                                  </span>\n                              </label>\n                          </div>\n                          </div>\n                          <div\n                        fxLayout=\"row wrap\"\n                        fxLayout.xs=\"column\"\n                        fxLayoutAlign.gt-sm=\"space-around start\"\n                        style=\"margin-top: 20px;\"\n                        >\n                        <div fxFlex=\"0 0 25%\">\n                        <label>{{ t('RELATED_COUNTRIES') }} </label>\n                        </div>\n                        <div fxFlex=\"0 0 25%\">\n                        <mat-checkbox class=\"country-margin\" formControlName=\"country_korea\">{{\n                        t('JAPAN')\n                        }}</mat-checkbox>\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_china\"\n                        >{{ t('US') }}</mat-checkbox\n                        ><br />\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_korea\"\n                        >{{ t('CHINA') }}</mat-checkbox\n                        >\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_europe\"\n                        >{{ t('TAIWAN') }}</mat-checkbox\n                        >\n                        </div>\n                        \n                        <div fxFlex=\"0 0 50%\">\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_tiwan\"\n                        >{{ t('INDIA') }}</mat-checkbox\n                        >\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_india\"\n                        >{{ t('EUROPE') }}</mat-checkbox\n                        ><br />\n                        <mat-checkbox\n                        class=\"country-margin\"\n                        formControlName=\"country_others\"\n                        (change)=\"othercountry($event.checked)\" >{{ t('OTHERS') }}</mat-checkbox\n                        >\n                        <mat-form-field *ngIf=\"ifothercountry\">\n                          <input\n                            matInput\n                            placeholder=\"\"\n                         \n                          />\n                        </mat-form-field>\n                        <br />\n                        </div>\n                        </div>\n                      \n                            </mat-tab>\n     \n           \n                    </mat-tab-group>\n                      </form>\n                    \n                 \n                  </ng-container>\n                  </mat-tab>\n                  <!-- MESSAGE CONTENT TAB -->\n                \n                   \n                        <mat-tab>                      \n                          <ng-template mat-tab-label *transloco=\"let t\">\n                            <mat-icon>mail_outline</mat-icon>\n                            {{t('MASSEGE_CONTENT')}}\n                          </ng-template>\n                          <ng-container *transloco=\"let t\">\n                            <div\n                              fxLayout=\"row wrap\"\n                              fxLayout.xs=\"column\"\n                              fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                              <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('MESSAGE') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 75%\">\n                                <mat-form-field>\n                                  <textarea\n                                    matInput\n                                    placeholder=\"\"\n                                    \n                                    rows=\"3\"\n                                  ></textarea>\n                                </mat-form-field>\n                              </div>\n                            </div>\n                \n                            <div\n                              fxLayout=\"row wrap\"\n                              fxLayout.xs=\"column\"\n                              fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                              <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('ATTACHMENT') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 35%\">\n                                <label class=\"file\">\n                                  <input type=\"file\" id=\"file1\" aria-label=\"File browser example\">\n                                  <mat-icon>cloud_upload</mat-icon><span class=\"file-custom long\" [attr.data-lbl]=\"'ADDTIONAL' | transloco\">\n                                    \n                                  </span>\n                                </label>\n                              </div>\n                              <div fxFlex=\"0 0 15%\">\n                                <label>{{ t('RDATE') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                  <input\n                                    matInput\n                                    [matDatepicker]=\"recpdate3\"\n                                    \n                                  />\n                                  <mat-datepicker-toggle\n                                    matSuffix\n                                    [for]=\"recpdate3\"\n                                  ></mat-datepicker-toggle>\n                                  <mat-datepicker #recpdate3></mat-datepicker>\n                                </mat-form-field>\n                              </div>\n                            </div>\n                            \n                              <div\n                                fxLayout=\"row wrap\"\n                                fxLayout.xs=\"column\"\n                                fxLayoutAlign.gt-sm=\"space-around center\"\n                              >\n                                <div fxFlex=\"0 0 100%\" class=\"historylbl\">\n                                  <mat-icon>history</mat-icon><label>{{ t('HISTORY') }}</label>\n                                </div>\n                              </div>\n                              <div\n                              fxLayout=\"row wrap\"\n                              fxLayout.xs=\"column\"\n                              fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                              <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('FROM(HISTORY)') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 35%\">\n                                <mat-form-field>\n                                  <input\n                                    matInput\n                                    placeholder=\"\"\n                                   \n                                  />\n                                </mat-form-field>\n                              </div>\n                              <div fxFlex=\"0 0 15%\">\n                                <label>{{ t('STATUS(HISTORY)') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                  <input\n                                    matInput\n                                    placeholder=\"\"\n                                    \n                                  />\n                                </mat-form-field>\n                              </div>\n                            </div>\n                \n                        \n                              <div\n                              fxLayout=\"row wrap\"\n                              fxLayout.xs=\"column\"\n                              fxLayoutAlign.gt-sm=\"space-around center\"\n                            >\n                              <div fxFlex=\"0 0 25%\">\n                                <label>{{ t('SENT_DATE_AND_TIME') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 35%\">\n                                <mat-form-field>\n                                  <input\n                                    matInput\n                                    placeholder=\"\"\n                                   \n                                  />\n                                </mat-form-field>\n                              </div>\n                              <div fxFlex=\"0 0 15%\">\n                                <label>{{ t('STAKEHOLDER(HISTORY)') }}</label>\n                              </div>\n                              <div fxFlex=\"0 0 25%\">\n                                <mat-form-field>\n                                  <input\n                                    matInput\n                                    placeholder=\"\"\n                                   \n                                  />\n                                </mat-form-field>\n                              </div>\n                            </div>\n                \n                \n                            <div\n                            fxLayout=\"row wrap\"\n                            fxLayout.xs=\"column\"\n                            fxLayoutAlign.gt-sm=\"space-around center\"\n                          >\n                            <div fxFlex=\"0 0 25%\">\n                              <label>{{ t('MESSAGE(HISTORY)') }}</label>\n                            </div>\n                            <div fxFlex=\"0 0 75%\">\n                              <mat-form-field>\n                                <textarea\n                                  matInput\n                                  placeholder=\"\"\n                                  \n                                  rows=\"3\"\n                                ></textarea>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          \n                          <div\n                          fxLayout=\"row wrap\"\n                          fxLayout.xs=\"column\"\n                          fxLayoutAlign.gt-sm=\"space-around center\"\n                        >\n                          <div fxFlex=\"0 0 25%\">\n                            <label>{{ t('ATTACHMENTS(HISTORY)') }}</label>\n                          </div>\n                          <div fxFlex=\"0 0 25%\">\n                            <mat-form-field>\n                              <input\n                                matInput\n                                placeholder=\"\"\n                               \n                              />\n                            </mat-form-field>\n                          </div>\n                \n                          <div fxFlex=\"0 0 50%\" style=\"text-align: right\">\n                            <button mat-button color=\"primary\"> <mat-icon>launch</mat-icon> {{t('DPMSG')}}</button>\n                          </div>\n                        </div>\n                \n                          </ng-container>\n                        </mat-tab>\n                 \n            </mat-tab-group>\n        \n      </mat-card>\n   \n  </div>\n  ");

/***/ }),

/***/ "./src/app/contact-management/contact-management-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/contact-management/contact-management-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ContactManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactManagementRoutingModule", function() { return ContactManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact-management/contact/contact.component.ts");




const routes = [
    {
        path: '',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }
];
let ContactManagementRoutingModule = class ContactManagementRoutingModule {
};
ContactManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContactManagementRoutingModule);



/***/ }),

/***/ "./src/app/contact-management/contact-management.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contact-management/contact-management.module.ts ***!
  \*****************************************************************/
/*! exports provided: ContactManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactManagementModule", function() { return ContactManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contact_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-management-routing.module */ "./src/app/contact-management/contact-management-routing.module.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact-management/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");









let ContactManagementModule = class ContactManagementModule {
};
ContactManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _contact_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContactManagementRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
        ]
    })
], ContactManagementModule);



/***/ }),

/***/ "./src/app/contact-management/contact/contact.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/contact-management/contact/contact.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.buttonbar {\n  display: flex;\n  padding: 0 0.5rem;\n  height: 40px;\n}\n\n.buttonbar .mat-button {\n  padding: 0 15px;\n  font-weight: 400;\n}\n\n.buttonbar .buttonbarbg {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n\n.staticlbl {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.file {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  height: 2.5rem;\n  width: 14rem;\n}\n\n.file input {\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  width: 10rem;\n}\n\n.file > .mat-icon {\n  z-index: 999;\n  color: #fff;\n  position: relative;\n  left: -6px;\n  line-height: 1.6em;\n}\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-custom.long {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 270px;\n}\n\n.file-custom.long:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 124px;\n  justify-content: flex-end;\n}\n\n.file-custom:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 78px;\n  justify-content: flex-end;\n}\n\n.file-custom:after {\n  content: \"\";\n}\n\n.historylbl {\n  background-color: #ff4081;\n  font-size: 15px;\n  padding: 10px 15px 4px 30px;\n  font-weight: 500;\n  color: #fbfbfb;\n  margin-top: 10px;\n  display: flex;\n  line-height: 24px;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n\n.addnewbtn {\n  padding: 10px;\n}\n\n.mat-accordion {\n  width: 100%;\n}\n\nform {\n  margin-top: 0 !important;\n  margin-bottom: 2px;\n}\n\n.mat-tab-body-content {\n  height: 100%;\n  overflow: hidden !important;\n}\n\n.mat-expansion-panel-header {\n  border: 1px solid #f9f3f3;\n}\n\n.exppanelbadge {\n  background: #ff4081;\n  color: #fff;\n  width: 25px;\n  text-align: center;\n  border-radius: 50%;\n  height: 25px;\n  font-size: 11px;\n  line-height: 26px;\n  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);\n}\n\n@media print {\n  .langonmobile {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvY29udGFjdC1tYW5hZ2VtZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC1tYW5hZ2VtZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFLG9CQUFBOztBQUVBO0VBQ0UscUJBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQ0lKOztBREZFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7QUNLSjs7QURIRTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpFO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNPSjs7QURMRTtFQUNFLGtCQUFBO0FDUUo7O0FETkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRE5FO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRE5FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDV0o7O0FEUkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNXSjs7QURURTtFQUNFLFNBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDWUo7O0FEVkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDYUo7O0FEWEU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNjSjs7QURaRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNlSjs7QURiRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ2dCSjs7QURkRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2lCSjs7QURmRTtFQUNFLFdBQUE7QUNrQko7O0FEZkU7RUFDRSx5QkFBQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDa0JOOztBRGZBOztFQUVFLGFBQUE7QUNrQkY7O0FEZkM7RUFDQyw4QkFBQTtFQUNBLG1CQUFBO0FDa0JGOztBRGZBO0VBQ0Usa0JBQUE7QUNrQkY7O0FEZkE7RUFDRSxhQUFBO0FDa0JGOztBRGZBO0VBQ0UsV0FBQTtBQ2tCRjs7QURoQkE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FDbUJGOztBRGpCQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQ29CRjs7QURqQkE7RUFDRSx5QkFBQTtBQ29CRjs7QURqQkE7RUFDRSxtQkFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQ29CSjs7QURsQkE7RUFDRTtJQUFnQix3QkFBQTtFQ3NCaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbWFuYWdlbWVudC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXRhYmxlLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMC4wMSU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBoZWlnaHQ6IDQwNXB4O1xuICB9XG4gIFxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgdGFibGUuY2FzZXRhYmxlIHtcbiAgICB3aWR0aDogMjAwMHB4O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgfVxuICBcbiAgLyogUG9wb3ZlciBzdHlsaW5nICovXG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5wb3BvdmVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG4gIFxuICAucG9wb3Zlcl9fd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucG9wb3Zlcl9fY29udGVudCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC02OXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgbWluLXdpZHRoOiAyNzBweDtcbiAgICB0b3A6IDU1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICAucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAtOHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB9XG4gIC5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xuICB9XG4gIC5wb3BvdmVyX19tZXNzYWdlIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmljb25maXgge1xuICAgIHRvcDogNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1cHg7XG4gICAgY29sb3I6ICMwMDQ3OWQ7XG4gIH1cbiAgLnBvcG92ZXJfX2NvbnRlbnQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5pbmNlcnJvciB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIFxuICAuYnV0dG9uYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmJ1dHRvbmJhciAubWF0LWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLmJ1dHRvbmJhciAuYnV0dG9uYmFyYmcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB9XG4gIC5zdGF0aWNsYmwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLy8gZmlsZSB1cGxvYWRcbiAgLmZpbGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMTRyZW07XG4gIH1cbiAgLmZpbGUgaW5wdXQge1xuICAgIG1hcmdpbjogMDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTByZW07XG4gIH1cbiAgLmZpbGUgPiAubWF0LWljb24ge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTZweDtcbiAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gIH1cbiAgLmZpbGUtY3VzdG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogNTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmZpbGUtY3VzdG9tLmxvbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1O1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDAuMDc1cmVtIHNvbGlkICM5NDk0OTQ7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB3aWR0aDogMjcwcHg7XG4gIH1cbiAgLmZpbGUtY3VzdG9tLmxvbmc6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMC4wNzVyZW07XG4gICAgcmlnaHQ6IC0wLjA3NXJlbTtcbiAgICBib3R0b206IC0wLjA3NXJlbTtcbiAgICB6LWluZGV4OiA2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTI0cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuICAuZmlsZS1jdXN0b206YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMC4wNzVyZW07XG4gICAgcmlnaHQ6IC0wLjA3NXJlbTtcbiAgICBib3R0b206IC0wLjA3NXJlbTtcbiAgICB6LWluZGV4OiA2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogNzhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIC5maWxlLWN1c3RvbTphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxuICAvLy0tIGZpbGUgdXBsb2FkXG4gIC5oaXN0b3J5bGJsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4IDRweCAzMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjZmJmYmZiO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmFkZG5ld2J0biB7XG4gIHBhZGRpbmc6MTBweDtcbn1cblxuLm1hdC1hY2NvcmRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbmZvcm0ge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmM2YzO1xufVxuXG4uZXhwcGFuZWxiYWRnZXtcbiAgYmFja2dyb3VuZDogI2ZmNDA4MTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cbkBtZWRpYSBwcmludCB7XG4gIC5sYW5nb25tb2JpbGUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbn1cbiIsIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNDA1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUuY2FzZXRhYmxlIHtcbiAgd2lkdGg6IDIwMDBweDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG50ZC5tYXQtY29sdW1uLXN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4vKiBQb3BvdmVyIHN0eWxpbmcgKi9cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTY5cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwIDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIHRvcDogNTVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogLThweDtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmMGYwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmM2YwZjA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xuICB6LWluZGV4OiA5OTk5O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcbn1cblxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmljb25maXgge1xuICB0b3A6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDA0NzlkO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW5jZXJyb3Ige1xuICBmb250LXNpemU6IDc1JTtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ1dHRvbmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5idXR0b25iYXIgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idXR0b25iYXIgLmJ1dHRvbmJhcmJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdGF0aWNsYmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aWR0aDogMTRyZW07XG59XG5cbi5maWxlIGlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAxMHJlbTtcbn1cblxuLmZpbGUgPiAubWF0LWljb24ge1xuICB6LWluZGV4OiA5OTk7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC02cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbn1cblxuLmZpbGUtY3VzdG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmlsZS1jdXN0b20ubG9uZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNzVyZW0gc29saWQgIzk0OTQ5NDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgd2lkdGg6IDI3MHB4O1xufVxuXG4uZmlsZS1jdXN0b20ubG9uZzpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMDc1cmVtO1xuICByaWdodDogLTAuMDc1cmVtO1xuICBib3R0b206IC0wLjA3NXJlbTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTI0cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5maWxlLWN1c3RvbTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMDc1cmVtO1xuICByaWdodDogLTAuMDc1cmVtO1xuICBib3R0b206IC0wLjA3NXJlbTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMGI5MGEwLCAjMmFhZGJkKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNzhweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZpbGUtY3VzdG9tOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmhpc3RvcnlsYmwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA0cHggMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmYmZiZmI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uYWRkbmV3YnRuIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1hdC1hY2NvcmRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4ubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjNmMztcbn1cblxuLmV4cHBhbmVsYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmY0MDgxO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5sYW5nb25tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact-management/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contact-management/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: MY_FORMATS, ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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
let ContactComponent = class ContactComponent {
    constructor(cdRef, mediaObserver, formBuilder, transloco, title, translocoService) {
        this.cdRef = cdRef;
        this.mediaObserver = mediaObserver;
        this.formBuilder = formBuilder;
        this.transloco = transloco;
        this.title = title;
        this.translocoService = translocoService;
        this.panelOpenState = false;
        this.showdeletebtn = true;
        // validationMsgs = {
        //   'emailAddress': [{ type: 'email', message: 'Enter a valid email' }]
        // }
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
        this.donshowdynfrmonload = true;
        this.seltab = 0;
        this.ifothercountry = false;
    }
    printPage() {
        // console.log("active lang", this.translocoService.getActiveLang());
        if (this.translocoService.getActiveLang() === 'jp') {
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
    othercountry(otherselected) {
        console.log("okkkkk");
        otherselected ? this.ifothercountry = true : this.ifothercountry = false;
    }
    // setPageSizeOptions(setPageSizeOptionsInput: string) {
    //   if (setPageSizeOptionsInput) {
    //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    //   }
    // }
    //contract content form elements
    createContractContentFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            new_renew: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contracttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contractname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contracteditem: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contractor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            begcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            endcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            autoupdate2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            alertreleasedate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            relatecontract: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            externalconsultant: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            contractattached: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_us: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_china: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_korea: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_europe: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_tiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_india: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            country_others: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
    }
    setActiveLang(lang) {
        this.transloco.setActiveLang(lang);
    }
    addContractContentFormGroup() {
        const arrayofelements = this.contractcontentform.get('elementArray');
        arrayofelements.push(this.createContractContentFormGroup());
        this.seltab = arrayofelements.length;
        // if(arrayofelements.controls.length > 1) {
        //   this.showdeletebtn = true;
        // } else {
        //   this.showdeletebtn = false;
        // }
    }
    removeOrClearContractContent(i) {
        const arrayofelements = this.contractcontentform.get('elementArray');
        if (arrayofelements.length > 1) {
            arrayofelements.removeAt(i);
        }
        else {
            // arrayofelements.reset()
            arrayofelements.removeAt(0);
        }
        // if(arrayofelements.controls.length > 1) {
        //   this.showdeletebtn = true;
        // } else {
        //   this.showdeletebtn = false;
        // }
    }
    setStep(aa) { }
    ngOnInit() {
        // this.length = ELEMENT_DATA.length;
        this.contractcontentform = this.formBuilder.group({
            elementArray: this.formBuilder.array([this.createContractContentFormGroup()])
        });
        // end contract content
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
        const arrayofelements = this.contractcontentform.get('elementArray');
        arrayofelements.removeAt(0);
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
    onSubmit1() {
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
    onSubmit2() {
        // TODO: Use EventEmitter with form value
        console.warn(this.contractcontentform.value);
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
ContactComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_9__["TranslocoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], ContactComponent.prototype, "paginator", void 0);
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-management/contact/contact.component.html")).default,
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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact-management/contact/contact.component.scss")).default]
    })
], ContactComponent);

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
//# sourceMappingURL=contact-management-contact-management-module-es2015.js.map