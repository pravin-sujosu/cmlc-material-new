(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postdatastatus-postdatastatus-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <!-- <div class=\"image-header\">\n    <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n  </div> -->\n  <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\" style=\"margin-top: 35px;\">\n    <mat-card class=\"main\">\n      <ng-container *transloco=\"let t\">\n        <mat-card-header>\n          <mat-card-title style=\"min-height: 40px; margin: 0;\"\n            ><mat-icon>dashboard</mat-icon>\n             {{ t('PDES') }}\n            \n          </mat-card-title>\n      \n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px; position: absolute; right: 32px;\"\n            fxHide.lt-md\n            class=\"langgroup\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </mat-card-header>\n      </ng-container>\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n        style=\"text-align: center; margin-bottom: 20px;\"\n        fxHide.gt-sm\n      >\n        <div fxFlex=\"0 0 100%\">\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </div>\n      </div>    \n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 15%\">\n            <label>{{ t('SEARCH') }}</label>\n          </div>\n          <div fxFlex=\"0 0 60%\">\n            <mat-form-field>\n                <input matInput placeholder=\"\" formControlName=\"applicant\" />\n            </mat-form-field>\n          </div> \n          <div fxFlex=\"0 0 25%\">\n            <button mat-raised-button color=\"accent\" (click)=\"toggle()\">{{ t('SEARCH') }}</button>\n          </div> \n          <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" *ngIf=\"displayit\">\n\n            <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n          \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"position\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('ID') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n            </ng-container>\n          \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('FILENAME') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n            </ng-container>\n          \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('STATUS') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n            </ng-container>\n          \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"symbol\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('PROGRESS') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> <mat-progress-bar mode=\"determinate\" value=\"{{element.symbol}}\"></mat-progress-bar> </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <h3 *ngIf=\"displayit\">{{ t('ERROR') }}</h3>\n          <table mat-table [dataSource]=\"dataSource2\" class=\"mat-elevation-z8\" *ngIf=\"displayit\">\n\n            <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n          \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('SLNO') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n            </ng-container>\n          \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"row\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('ROW') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.row}} </td>\n            </ng-container>\n          \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"col\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('COL') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.col}} </td>\n            </ng-container>\n          \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"value\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('VALUE') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"error\">\n              <th mat-header-cell *matHeaderCellDef> {{ t('ERROR') }} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.error}} </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns2\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns2;\"></tr>\n          </table>\n        </div>\n      </ng-container>\n    </mat-card>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.buttonbar {\n  display: flex;\n  padding: 0 2rem;\n  height: 40px;\n}\n\n.buttonbar .mat-button {\n  padding: 0 15px;\n  font-weight: 400;\n}\n\n.buttonbar .buttonbarbg {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n\n.staticlbl {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.file {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  height: 2.5rem;\n  width: 14rem;\n}\n\n.file input {\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  width: 10rem;\n}\n\n.file > .mat-icon {\n  z-index: 999;\n  color: #fff;\n  position: relative;\n  left: -6px;\n  line-height: 1.6em;\n}\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-custom.long {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 270px;\n}\n\n.file-custom.long:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 124px;\n  justify-content: flex-end;\n}\n\n.file-custom:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 78px;\n  justify-content: flex-end;\n}\n\n.file-custom:after {\n  content: \"file...\";\n}\n\n.historylbl {\n  background-color: #ff4081;\n  font-size: 15px;\n  padding: 10px 15px 4px 30px;\n  font-weight: 500;\n  color: #fbfbfb;\n  margin-top: 10px;\n  display: flex;\n  line-height: 24px;\n}\n\ntable.mat-table {\n  border-spacing: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvcG9zdGRhdGFzdGF0dXMvcG9zdGRhdGFmcm1zdGF0dXMvcG9zdGRhdGFmcm1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RkYXRhc3RhdHVzL3Bvc3RkYXRhZnJtc3RhdHVzL3Bvc3RkYXRhZnJtc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUEsb0JBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0tGOztBREhBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7QUNRRjs7QUROQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FETkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1dGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1lGOztBRFZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDY0Y7O0FEWkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZUY7O0FEYkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNpQkY7O0FEZkE7RUFDRSxrQkFBQTtBQ2tCRjs7QURmQTtFQUNFLHlCQUFBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNrQko7O0FEZkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDa0JGIiwiZmlsZSI6InNyYy9hcHAvcG9zdGRhdGFzdGF0dXMvcG9zdGRhdGFmcm1zdGF0dXMvcG9zdGRhdGFmcm1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMC4wMSU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBoZWlnaHQ6IDQwNXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxudGFibGUuY2FzZXRhYmxlIHtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIG1heC13aWR0aDogaW5oZXJpdDtcclxufVxyXG50ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLyogUG9wb3ZlciBzdHlsaW5nICovXHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5wb3BvdmVyX190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4ucG9wb3Zlcl9fd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC02OXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgbWluLXdpZHRoOiAyNzBweDtcclxuICB0b3A6IDU1cHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiAtOHB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDI0MywgMjQwLCAyNDApO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG59XHJcbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcbi5wb3BvdmVyX19tZXNzYWdlIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmljb25maXgge1xyXG4gIHRvcDogNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICMwMDQ3OWQ7XHJcbn1cclxuLnBvcG92ZXJfX2NvbnRlbnQgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbi5pbmNlcnJvciB7XHJcbiAgZm9udC1zaXplOiA3NSU7XHJcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYnV0dG9uYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5idXR0b25iYXIgLm1hdC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5idXR0b25iYXIgLmJ1dHRvbmJhcmJnIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uc3RhdGljbGJsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi8vIGZpbGUgdXBsb2FkXHJcbi5maWxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgd2lkdGg6IDE0cmVtO1xyXG59XHJcbi5maWxlIGlucHV0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG59XHJcbi5maWxlID4gLm1hdC1pY29uIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC02cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG59XHJcbi5maWxlLWN1c3RvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wNzVyZW0gc29saWQgIzk0OTQ5NDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5maWxlLWN1c3RvbS5sb25nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogNTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG59XHJcbi5maWxlLWN1c3RvbS5sb25nOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuMDc1cmVtO1xyXG4gIHJpZ2h0OiAtMC4wNzVyZW07XHJcbiAgYm90dG9tOiAtMC4wNzVyZW07XHJcbiAgei1pbmRleDogNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYmwpO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMwYjkwYTAsICMyYWFkYmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEyNHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLmZpbGUtY3VzdG9tOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuMDc1cmVtO1xyXG4gIHJpZ2h0OiAtMC4wNzVyZW07XHJcbiAgYm90dG9tOiAtMC4wNzVyZW07XHJcbiAgei1pbmRleDogNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYmwpO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMwYjkwYTAsICMyYWFkYmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDc4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uZmlsZS1jdXN0b206YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiZmlsZS4uLlwiO1xyXG59XHJcbi8vLS0gZmlsZSB1cGxvYWRcclxuLmhpc3RvcnlsYmwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggNHB4IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG50YWJsZS5tYXQtdGFibGUge1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi5kYXRhdGFibGUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMC4wMSU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogNDA1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxudGFibGUuY2FzZXRhYmxlIHtcbiAgd2lkdGg6IDIwMDBweDtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG50ZC5tYXQtY29sdW1uLXN0YXIge1xuICB3aWR0aDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4vKiBQb3BvdmVyIHN0eWxpbmcgKi9cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTY5cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZkO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwIDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIG1pbi13aWR0aDogMjcwcHg7XG4gIHRvcDogNTVweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogLThweDtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmMGYwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmM2YwZjA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xuICB6LWluZGV4OiA5OTk5O1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcbn1cblxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmljb25maXgge1xuICB0b3A6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMDA0NzlkO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW5jZXJyb3Ige1xuICBmb250LXNpemU6IDc1JTtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ1dHRvbmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYnV0dG9uYmFyIC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnV0dG9uYmFyIC5idXR0b25iYXJiZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RhdGljbGJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDE0cmVtO1xufVxuXG4uZmlsZSBpbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTByZW07XG59XG5cbi5maWxlID4gLm1hdC1pY29uIHtcbiAgei1pbmRleDogOTk5O1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNnB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG59XG5cbi5maWxlLWN1c3RvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNzVyZW0gc29saWQgIzk0OTQ5NDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZpbGUtY3VzdG9tLmxvbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDAuMDc1cmVtIHNvbGlkICM5NDk0OTQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHdpZHRoOiAyNzBweDtcbn1cblxuLmZpbGUtY3VzdG9tLmxvbmc6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjA3NXJlbTtcbiAgcmlnaHQ6IC0wLjA3NXJlbTtcbiAgYm90dG9tOiAtMC4wNzVyZW07XG4gIHotaW5kZXg6IDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYmwpO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZmlsZS1jdXN0b206YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjA3NXJlbTtcbiAgcmlnaHQ6IC0wLjA3NXJlbTtcbiAgYm90dG9tOiAtMC4wNzVyZW07XG4gIHotaW5kZXg6IDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYmwpO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDc4cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5maWxlLWN1c3RvbTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiZmlsZS4uLlwiO1xufVxuXG4uaGlzdG9yeWxibCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDRweCAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZiZmJmYjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbnRhYmxlLm1hdC10YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: MY_FORMATS, Postdatafrmstatus */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () { return MY_FORMATS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postdatafrmstatus", function () { return Postdatafrmstatus; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ "./node_modules/@ngneat/transloco/fesm2015/ngneat-transloco.js");
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
            var Postdatafrmstatus = /** @class */ (function () {
                function Postdatafrmstatus(cdRef, mediaObserver, transloco) {
                    this.cdRef = cdRef;
                    this.mediaObserver = mediaObserver;
                    this.transloco = transloco;
                    this.inc_app_sec_member_error = false;
                    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
                    this.displayedColumns2 = ['id', 'row', 'col', 'value', 'error'];
                    this.dataSource = ELEMENT_DATA;
                    this.dataSource2 = ELEMENT_DATA2;
                    this.displayit = false;
                }
                // setPageSizeOptions(setPageSizeOptionsInput: string) {
                //   if (setPageSizeOptionsInput) {
                //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
                //   }
                // }
                Postdatafrmstatus.prototype.setActiveLang = function (lang) {
                    this.transloco.setActiveLang(lang);
                };
                Postdatafrmstatus.prototype.ngOnInit = function () {
                    // this.length = ELEMENT_DATA.length;
                    // this.dataSource.paginator = this.paginator;
                    this.caseform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                        classification: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        controlnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        recpdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        appdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.dateValidator]),
                        appdept: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        applicant: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        contractname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        contracteditem: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        inc_app_sec_memberyes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        inc_app_sec_memberno: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        new_renew: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        autoupdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        contracttype: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                        contractor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        begcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        endcontperiod: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        legelrep: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        fix_ver_contract_att: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        exsist_extr_consult: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        legel_dept_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_creating: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_receiving: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_app_responding: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_contract_signed: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_cancelled: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_requesting: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_correspond_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_resp_legl_dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        status_completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_us: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_china: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_korea: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_europe: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_tiwan: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_india: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                        country_others: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                    });
                    this.mediaSub = this.mediaObserver.asObservable().subscribe(function (change) {
                        change.forEach(function (v) {
                            console.log(v.mediaQuery, v.mqAlias);
                        });
                        console.log('-----');
                    });
                };
                Postdatafrmstatus.prototype.toggle = function () {
                    this.displayit = true;
                };
                Postdatafrmstatus.prototype.show_inc_app_sec = function (event) {
                    console.log(event.checked);
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                Postdatafrmstatus.prototype.onSubmit = function () {
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                Postdatafrmstatus.prototype.dateValidator = function (c) {
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
                Postdatafrmstatus.prototype.ngAfterViewInit = function () {
                    this.cdRef.detectChanges();
                };
                Postdatafrmstatus.prototype.ngOnDestroy = function () {
                    if (this.mediaSub) {
                        this.mediaSub.unsubscribe();
                    }
                };
                return Postdatafrmstatus;
            }());
            Postdatafrmstatus.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
                { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__["TranslocoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], Postdatafrmstatus.prototype, "paginator", void 0);
            Postdatafrmstatus = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-postdatafrm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postdatafrmstatus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.html")).default,
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MomentDateAdapter"],
                            deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
                        },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postdatafrmstatus.component.scss */ "./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.scss")).default]
                })
            ], Postdatafrmstatus);
            var ELEMENT_DATA = [
                { position: 'A0001', name: 'Filename', weight: 'Incomplete', symbol: 50 }
            ];
            var ELEMENT_DATA2 = [
                { id: '1', row: '2', col: '4', value: 'Dummy1', error: 'Type MisMatch' },
                { id: '2', row: '3', col: '2', value: '', error: 'Empty Field' }
            ];
            /***/ 
        }),
        /***/ "./src/app/postdatastatus/postdatastatus-routing.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/postdatastatus/postdatastatus-routing.module.ts ***!
          \*****************************************************************/
        /*! exports provided: PostdataModulestatusRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdataModulestatusRoutingModule", function () { return PostdataModulestatusRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _postdatafrmstatus_postdatafrmstatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdatafrmstatus/postdatafrmstatus.component */ "./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.ts");
            var routes = [
                {
                    path: '',
                    component: _postdatafrmstatus_postdatafrmstatus_component__WEBPACK_IMPORTED_MODULE_3__["Postdatafrmstatus"],
                },
            ];
            var PostdataModulestatusRoutingModule = /** @class */ (function () {
                function PostdataModulestatusRoutingModule() {
                }
                return PostdataModulestatusRoutingModule;
            }());
            PostdataModulestatusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], PostdataModulestatusRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/postdatastatus/postdatastatus.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/postdatastatus/postdatastatus.module.ts ***!
          \*********************************************************/
        /*! exports provided: PostdatastatusModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdatastatusModule", function () { return PostdatastatusModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _postdatastatus_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdatastatus-routing.module */ "./src/app/postdatastatus/postdatastatus-routing.module.ts");
            /* harmony import */ var _postdatafrmstatus_postdatafrmstatus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postdatafrmstatus/postdatafrmstatus.component */ "./src/app/postdatastatus/postdatafrmstatus/postdatafrmstatus.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
            /* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var PostdatastatusModule = /** @class */ (function () {
                function PostdatastatusModule() {
                }
                return PostdatastatusModule;
            }());
            PostdatastatusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_postdatafrmstatus_postdatafrmstatus_component__WEBPACK_IMPORTED_MODULE_4__["Postdatafrmstatus"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _postdatastatus_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostdataModulestatusRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    ],
                })
            ], PostdatastatusModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=postdatastatus-postdatastatus-module-es2015.js.map
//# sourceMappingURL=postdatastatus-postdatastatus-module-es5.js.map
//# sourceMappingURL=postdatastatus-postdatastatus-module-es5.js.map