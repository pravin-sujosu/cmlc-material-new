(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-log-access-log-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-log/log/log.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-log/log/log.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"image-header\">\n      <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n    </div>\n    <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n      <mat-card class=\"main accesslog\">\n        <ng-container *transloco=\"let t\">\n          <mat-card-header>\n            <mat-card-title style=\"min-height: 40px; margin: 0;\"\n              ><mat-icon>dashboard</mat-icon> {{ t('ACCESS_LOG_LIST') }}\n            </mat-card-title>\n            <mat-button-toggle-group\n              name=\"fontStyle\"\n              aria-label=\"Font Style\"\n              style=\"margin-right: 5px;\"\n              fxHide.lt-md\n              class=\"langgroup\"\n            >\n              <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n                >EN</mat-button-toggle\n              >\n              <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n                >JP</mat-button-toggle\n              > </mat-button-toggle-group\n            ><button mat-raised-button color=\"accent\" type=\"submit\">\n              <mat-icon>search</mat-icon>\n              <span fxHide.lt-md>{{ t('SEARCH') }}</span>\n            </button>\n          </mat-card-header>\n         \n        </ng-container>\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n          style=\"text-align: center; margin-bottom: 20px;\"\n          fxHide.gt-sm\n        >\n          <div fxFlex=\"0 0 100%\">\n            <mat-button-toggle-group\n              name=\"fontStyle\"\n              aria-label=\"Font Style\"\n              style=\"margin-right: 5px;\"\n            >\n              <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n                >EN</mat-button-toggle\n              >\n              <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n                >JP</mat-button-toggle\n              >\n            </mat-button-toggle-group>\n          </div>\n        </div>\n  \n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('OPERATION_TYPE') }}*</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <mat-select formControlName=\"classification\">\n                  <mat-option value=\"{{ t('NEW_REGISTRATION') }}\">{{\n                    t('NEW_REGISTRATION')\n                  }}</mat-option>\n                  <mat-option value=\"{{ t('SEND') }}\">{{\n                    t('SEND')\n                  }}</mat-option>\n                  <mat-option value=\"{{ t('DELETE') }}\">{{\n                    t('DELETE')\n                  }}</mat-option>\n                  <mat-option value=\"{{ t('PRINT') }}\">{{\n                    t('PRINT')\n                  }}</mat-option>\n                </mat-select>\n                <mat-error\n                  *ngIf=\"\n                    caseform.get('classification').errors &&\n                    caseform.get('classification').errors.required\n                  \"\n                  >Please fill up the field</mat-error\n                >\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n                <label>{{ t('OPERATION_DPT') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input matInput placeholder=\"\" formControlName=\"appdept\" />\n                </mat-form-field>\n                <div class=\"button-row\">\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"primary\"\n                    class=\"gradient-primary\"\n                  >\n                    <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                  </button>\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"warn\"\n                    class=\"gradient-warn\"\n                  >\n                    <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                  </button>\n                </div>\n              </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n            <div fxFlex=\"0 0 25%\">\n              <label>{{ t('OPERATION_DATE') }}*</label>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n              <mat-form-field>\n                <input\n                  matInput\n                  [matDatepicker]=\"recpdate\"\n                  formControlName=\"recpdate\"\n                />\n                <mat-datepicker-toggle\n                  matSuffix\n                  [for]=\"recpdate\"\n                ></mat-datepicker-toggle>\n                <mat-datepicker #recpdate></mat-datepicker>\n              </mat-form-field>\n            </div>\n            <div fxFlex=\"0 0 25%\">\n                <label>{{ t('OPERATOR') }}</label>\n              </div>\n              <div fxFlex=\"0 0 25%\">\n                <mat-form-field>\n                  <input matInput placeholder=\"\" formControlName=\"appdept\" />\n                </mat-form-field>\n                <div class=\"button-row\">\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"primary\"\n                    class=\"gradient-primary\"\n                  >\n                    <mat-icon>link</mat-icon> {{ t('REFERENCE') }}\n                  </button>\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"warn\"\n                    class=\"gradient-warn\"\n                  >\n                    <mat-icon>clear</mat-icon> {{ t('CLEAR') }}\n                  </button>\n                </div>\n              </div>\n          </div>\n        </ng-container>\n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign.gt-sm=\"space-around center\"\n          >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('CONTROL_NUMBER') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('PNAME') }}</label>\n          </div>\n          <div fxFlex=\"0 0 25%\">\n            <mat-form-field>\n              <input matInput placeholder=\"\" formControlName=\"controlnumber\" />\n            </mat-form-field>\n          </div>\n          </div>\n        </ng-container>\n       \n        <ng-container *transloco=\"let t\">\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"space-around center\"\n            style=\"margin-top: 10px;\"\n          >\n            <div fxFlex=\"0 0 100%\">\n              <button mat-raised-button color=\"accent\">\n                <mat-icon>search</mat-icon> {{ t('SEARCH') }}\n              </button>\n            </div>\n          </div>\n        </ng-container>\n        <mat-card class=\"dataset\">\n          <div class=\"card-icon\">\n            <ng-container *transloco=\"let t\">\n              {{ t('ACCESS_LOG_LIST') }}\n            </ng-container>\n          </div>\n          <ng-container *transloco=\"let t\">\n            <div\n              fxLayout=\"row wrap\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign=\"space-around center\"\n              style=\"margin-top: 10px;\"\n            >\n              <div fxFlex=\"0 0 100%\" fxLayoutAlign=\"end center\" class=\"margintop\">\n                <div class=\"onmobile\">\n                    <span\n                    >{{ t('THE_TOALNOFC') }}:\n                    <mat-chip color=\"primary\" selected>11</mat-chip></span\n                  >\n                  <!-- <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"primary\"\n                    class=\"gradient-success mr-1\"\n                  >\n                    <mat-icon>cloud_download</mat-icon> {{ t('CSV_CREATE') }}\n                  </button>\n                  <button\n                    type=\"button\"\n                    mat-raised-button\n                    color=\"primary\"\n                    class=\"gradient-indigo\"\n                  >\n                    <mat-icon>print</mat-icon> {{ t('PRINT') }}\n                  </button> -->\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"space-around center\"\n            style=\"margin-top: 10px;\"\n            fxHide.lt-md\n            class=\"only-desktop\"\n            *transloco=\"let t\"\n          >\n            <div fxFlex=\"0 0 100%\">\n              <div class=\"datatable-container mat-elevation-z1\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"casetable\" matSort (matSortChange)=\"sortData($event)\">\n                  <!-- Controlnumber Column -->\n  \n                  <ng-container\n                    matColumnDef=\"Controlnumber\"\n                    \n                    *transloco=\"let t\"\n                  >\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Controlnumber\">\n                      {{ t('CONTROL_NUMBER') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.Controlnumber }}\n                    </td>\n                  </ng-container>\n  \n                  <!-- BranchNumber Column -->\n                  <ng-container matColumnDef=\"ProjectName\" >\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"ProjectName\">\n                      {{ t('PNAME') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\" >\n                      {{ element.ProjectName }}\n                    </td>\n                  </ng-container>\n  \n                  <!-- Applicationdepartment Column -->\n                  <ng-container matColumnDef=\"Operator\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"Operator\">\n                      {{ t('OPERATOR') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\" >\n                          {{ element.Operator }}\n                    </td>\n                  </ng-container>\n  \n                  <!-- Applicant Column -->\n                  <ng-container matColumnDef=\"OperationDate\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"OperationDate\">\n                      {{ t('OPERATION_DATE') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\" >\n                      {{ element.OperationDate }}\n                    </td>\n                  </ng-container>\n  \n                  <!-- ApplicationDate Column -->\n                  <ng-container matColumnDef=\"OperationType\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header=\"OperationType\">\n                      {{ t('OPERATION_TYPE') }}\n                    </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                      {{ element.OperationType }}\n                    </td>\n                  </ng-container>\n  \n                  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                  <tr\n                    mat-row\n                    *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                    [ngClass]=\"{ gray: odd }\"\n                  ></tr>\n                </table>\n              </div>\n              <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n            </div>\n          </div>\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            style=\"margin-top: 10px;\"\n            fxHide.gt-sm\n            class=\"only-mobile\"\n            *transloco=\"let t\"\n          >\n            <div fxFlex=\"0 0 100%\">\n              <div class=\"datatable-container mat-elevation-z1\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"casetable\">\n                    <!-- Controlnumber Column -->\n    \n                    <ng-container\n                      matColumnDef=\"Controlnumber\"\n                      \n                      *transloco=\"let t\"\n                    >\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('CONTROL_NUMBER') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.Controlnumber }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- BranchNumber Column -->\n                    <ng-container matColumnDef=\"ProjectName\" >\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('PNAME') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.ProjectName }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- Applicationdepartment Column -->\n                    <ng-container matColumnDef=\"Operator\">\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('OPERATOR') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                            {{ element.Operator }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- Applicant Column -->\n                    <ng-container matColumnDef=\"OperationDate\">\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('OPERATION_DATE') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.OperationDate }}\n                      </td>\n                    </ng-container>\n    \n                    <!-- ApplicationDate Column -->\n                    <ng-container matColumnDef=\"OperationType\">\n                      <th mat-header-cell *matHeaderCellDef>\n                        {{ t('OPERATION_TYPE') }}\n                      </th>\n                      <td mat-cell *matCellDef=\"let element\">\n                        {{ element.OperationType }}\n                      </td>\n                    </ng-container>\n    \n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr\n                      mat-row\n                      *matRowDef=\"let row; let odd = odd; columns: displayedColumns\"\n                      [ngClass]=\"{ gray: odd }\"\n                    ></tr>\n                </table>\n              </div>\n            </div>\n          </div>\n          <div\n            fxLayout=\"row wrap\"\n            fxLayout.xs=\"column\"\n            fxLayoutAlign=\"space-around center\"\n            style=\"margin-top: 10px;\"\n          >\n            <div fxFlex=\"0 0 100%\">\n              <mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n            </mat-paginator>\n            </div>\n          </div>\n        </mat-card>\n      </mat-card>\n    </form>\n  </div>\n  \n");
            /***/ 
        }),
        /***/ "./src/app/access-log/access-log-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/access-log/access-log-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: AccessLogRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessLogRoutingModule", function () { return AccessLogRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log/log.component */ "./src/app/access-log/log/log.component.ts");
            var routes = [{
                    path: '',
                    component: _log_log_component__WEBPACK_IMPORTED_MODULE_3__["LogComponent"]
                }];
            var AccessLogRoutingModule = /** @class */ (function () {
                function AccessLogRoutingModule() {
                }
                return AccessLogRoutingModule;
            }());
            AccessLogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AccessLogRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/access-log/access-log.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/access-log/access-log.module.ts ***!
          \*************************************************/
        /*! exports provided: AccessLogModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessLogModule", function () { return AccessLogModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _access_log_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./access-log-routing.module */ "./src/app/access-log/access-log-routing.module.ts");
            /* harmony import */ var _log_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log/log.component */ "./src/app/access-log/log/log.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
            /* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var AccessLogModule = /** @class */ (function () {
                function AccessLogModule() {
                }
                return AccessLogModule;
            }());
            AccessLogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_log_log_component__WEBPACK_IMPORTED_MODULE_4__["LogComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _access_log_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccessLogRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
                    ]
                })
            ], AccessLogModule);
            /***/ 
        }),
        /***/ "./src/app/access-log/log/log.component.scss": 
        /*!***************************************************!*\
          !*** ./src/app/access-log/log/log.component.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.mat-header-cell {\n  text-align: left !important;\n}\n\n.mat-standard-chip {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex;\n  padding: 7px 12px;\n  border-radius: 16px;\n  align-items: center;\n  cursor: default;\n  min-height: 32px;\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvYWNjZXNzLWxvZy9sb2cvbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2Nlc3MtbG9nL2xvZy9sb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0Usb0JBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0hKOztBREtFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDRko7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDREo7O0FER0U7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0FKOztBREVFO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkU7RUFDSSwyQkFBQTtBQ0tOOztBREZFO0VBQ0UseURBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy1sb2cvbG9nL2xvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAwLjAxJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGhlaWdodDogNDA1cHg7XG4gIH1cbiAgXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuLy8gICB0YWJsZS5jYXNldGFibGUge1xuLy8gICAgIHdpZHRoOiAyMDAwcHg7XG4vLyAgICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuLy8gICB9XG4gIHRkLm1hdC1jb2x1bW4tc3RhciB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG4gIFxuICAvKiBQb3BvdmVyIHN0eWxpbmcgKi9cbiAgXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnBvcG92ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgXG4gIC5wb3BvdmVyX193cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5wb3BvdmVyX19jb250ZW50IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTY5cHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwIDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xuICAgIHRvcDogNTVweDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIC5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IC04cHg7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQzLCAyNDAsIDI0MCk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjQzLCAyNDAsIDI0MCk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIH1cbiAgLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG4gIH1cbiAgLnBvcG92ZXJfX21lc3NhZ2Uge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuaWNvbmZpeCB7XG4gICAgdG9wOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDVweDtcbiAgICBjb2xvcjogIzAwNDc5ZDtcbiAgfVxuICAucG9wb3Zlcl9fY29udGVudCBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmluY2Vycm9yIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBjb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgcGFkZGluZzogN3B4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIGhlaWdodDogMXB4O1xufSIsIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNDA1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGQubWF0LWNvbHVtbi1zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogUG9wb3ZlciBzdHlsaW5nICovXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9wb3Zlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3BvdmVyX19jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02OXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IC04cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjBmMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmMGYwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogOTk5OTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG59XG5cbi5wb3BvdmVyX19tZXNzYWdlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pY29uZml4IHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBjb2xvcjogIzAwNDc5ZDtcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluY2Vycm9yIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIGhlaWdodDogMXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/access-log/log/log.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/access-log/log/log.component.ts ***!
          \*************************************************/
        /*! exports provided: MY_FORMATS, LogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () { return MY_FORMATS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function () { return LogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/fesm2015/ngneat-transloco.js");
            /* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
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
            var LogComponent = /** @class */ (function () {
                function LogComponent(cdRef, mediaObserver, transloco) {
                    this.cdRef = cdRef;
                    this.mediaObserver = mediaObserver;
                    this.transloco = transloco;
                    this.length = 25;
                    this.pageSize = 5;
                    this.pageSizeOptions = [5, 10, 25];
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
                        'ProjectName',
                        'Operator',
                        'OperationDate',
                        'OperationType'
                    ];
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA);
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice());
                }
                LogComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
                    if (setPageSizeOptionsInput) {
                        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
                    }
                };
                LogComponent.prototype.sortData = function (sort) {
                    // const data = ELEMENT_DATA.slice();
                    console.log('dataSource1', new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice()));
                    if (!sort.active || sort.direction === '') {
                        // this.sortedData = data;
                        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.slice());
                        return;
                    }
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](ELEMENT_DATA.sort(function (a, b) {
                        var isAsc = sort.direction === 'asc';
                        switch (sort.active) {
                            case 'Controlnumber': return compare(a.Controlnumber, b.Controlnumber, isAsc);
                            case 'ProjectName': return compare(a.ProjectName, b.ProjectName, isAsc);
                            case 'Operator': return compare(a.Operator, b.Operator, isAsc);
                            case 'OperationDate': return compare(a.OperationDate, b.OperationDate, isAsc);
                            case 'OperationType': return compare(a.OperationType, b.OperationType, isAsc);
                            default: return 0;
                        }
                    }));
                    this.dataSource.paginator = this.paginator;
                    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
                    //this.paginator.pageIndex = 0
                };
                // setPageSizeOptions(setPageSizeOptionsInput: string) {
                //   if (setPageSizeOptionsInput) {
                //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
                //   }
                // }
                LogComponent.prototype.setActiveLang = function (lang) {
                    this.transloco.setActiveLang(lang);
                };
                LogComponent.prototype.ngOnInit = function () {
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
                LogComponent.prototype.show_inc_app_sec = function (event) {
                    console.log(event.checked);
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                LogComponent.prototype.onSubmit = function () {
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
                LogComponent.prototype.dateValidator = function (c) {
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
                LogComponent.prototype.ngAfterViewInit = function () {
                    this.cdRef.detectChanges();
                };
                LogComponent.prototype.ngOnDestroy = function () {
                    if (this.mediaSub) {
                        this.mediaSub.unsubscribe();
                    }
                };
                return LogComponent;
            }());
            LogComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
                { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], LogComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], { static: true })
            ], LogComponent.prototype, "sort", void 0);
            LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-log',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/access-log/log/log.component.html")).default,
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
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log.component.scss */ "./src/app/access-log/log/log.component.scss")).default]
                })
            ], LogComponent);
            var ELEMENT_DATA = [
                {
                    Controlnumber: 1,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 2,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 3,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 4,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 5,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 6,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 7,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 8,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 9,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 10,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                },
                {
                    Controlnumber: 11,
                    ProjectName: 'File Name',
                    Operator: 'Operator',
                    OperationDate: 'Operation Date',
                    OperationType: 'Operation Type',
                }
            ];
            function compare(a, b, isAsc) {
                console.log('sorted data', (a < b ? -1 : 1) * (isAsc ? 1 : -1));
                return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
            }
            /***/ 
        })
    }]);
//# sourceMappingURL=access-log-access-log-module-es2015.js.map
//# sourceMappingURL=access-log-access-log-module-es5.js.map
//# sourceMappingURL=access-log-access-log-module-es5.js.map