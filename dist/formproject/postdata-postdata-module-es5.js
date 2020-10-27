(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postdata-postdata-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/postdata/postdatafrm/postdatafrm.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/postdata/postdatafrm/postdatafrm.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div class=\"image-header\">\n    <img src=\"http://www.icloud8.net/cmlc/images/logo.png\" alt=\"\" />\n  </div>\n  <form [formGroup]=\"caseform\" autocomplete=\"off\" (ngSubmit)=\"onSubmit()\">\n    <mat-card class=\"main\">\n      <ng-container *transloco=\"let t\">\n        <mat-card-header>\n          <mat-card-title style=\"min-height: 40px; margin: 0;\"\n            ><mat-icon>dashboard</mat-icon>\n             {{ t('IMPORT_CASE_INFO_DATA') }}\n          </mat-card-title>\n          <div class=\"buttonbar\">\n            <div class=\"buttonbarbg\">\n              <button mat-button> {{ t('CAPTURE') }}</button>\n             \n            </div>\n          </div>\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px; position: absolute; right: 32px;\"\n            fxHide.lt-md\n            class=\"langgroup\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </mat-card-header>\n      </ng-container>\n      <div\n        fxLayout=\"row wrap\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign.gt-sm=\"space-around center\"\n        style=\"text-align: center; margin-bottom: 20px;\"\n        fxHide.gt-sm\n      >\n        <div fxFlex=\"0 0 100%\">\n          <mat-button-toggle-group\n            name=\"fontStyle\"\n            aria-label=\"Font Style\"\n            style=\"margin-right: 5px;\"\n          >\n            <mat-button-toggle value=\"en\" (click)=\"setActiveLang('en')\"\n              >EN</mat-button-toggle\n            >\n            <mat-button-toggle value=\"jp\" (click)=\"setActiveLang('jp')\"\n              >JP</mat-button-toggle\n            >\n          </mat-button-toggle-group>\n        </div>\n      </div>    \n      <ng-container *transloco=\"let t\">\n        <div\n          fxLayout=\"row wrap\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign.gt-sm=\"space-around center\"\n        >\n          <div fxFlex=\"0 0 25%\">\n            <label>{{ t('FILE_SPECIFIC') }}*</label>\n          </div>\n          <div fxFlex=\"0 0 75%\">\n              <label class=\"file\">\n                <input type=\"file\" id=\"file\" aria-label=\"File browser\">\n                <mat-icon>cloud_upload</mat-icon><span class=\"file-custom\" [attr.data-lbl]=\"'ADD' | transloco\">\n                </span>\n              </label>\n          </div>       \n        </div>\n      </ng-container>\n    </mat-card>\n  </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/postdata/postdata-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/postdata/postdata-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: PostdataModuleRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdataModuleRoutingModule", function () { return PostdataModuleRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _postdatafrm_postdatafrm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdatafrm/postdatafrm.component */ "./src/app/postdata/postdatafrm/postdatafrm.component.ts");
            var routes = [
                {
                    path: '',
                    component: _postdatafrm_postdatafrm_component__WEBPACK_IMPORTED_MODULE_3__["Postdatafrm"],
                },
            ];
            var PostdataModuleRoutingModule = /** @class */ (function () {
                function PostdataModuleRoutingModule() {
                }
                return PostdataModuleRoutingModule;
            }());
            PostdataModuleRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], PostdataModuleRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/postdata/postdata.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/postdata/postdata.module.ts ***!
          \*********************************************/
        /*! exports provided: PostdataModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdataModule", function () { return PostdataModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _postdata_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdata-routing.module */ "./src/app/postdata/postdata-routing.module.ts");
            /* harmony import */ var _postdatafrm_postdatafrm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postdatafrm/postdatafrm.component */ "./src/app/postdata/postdatafrm/postdatafrm.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
            /* harmony import */ var _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transloco-root.module */ "./src/app/transloco-root.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var PostdataModule = /** @class */ (function () {
                function PostdataModule() {
                }
                return PostdataModule;
            }());
            PostdataModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_postdatafrm_postdatafrm_component__WEBPACK_IMPORTED_MODULE_4__["Postdatafrm"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _postdata_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostdataModuleRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _core_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _transloco_root_module__WEBPACK_IMPORTED_MODULE_7__["TranslocoRootModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    ],
                })
            ], PostdataModule);
            /***/ 
        }),
        /***/ "./src/app/postdata/postdatafrm/postdatafrm.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/postdata/postdatafrm/postdatafrm.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".datatable-container {\n  min-height: 0.01%;\n  overflow-x: auto;\n  height: 405px;\n}\n\ntable {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n\ntable.casetable {\n  width: 2000px;\n  max-width: inherit;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\n/* Popover styling */\n\na {\n  text-decoration: none;\n}\n\n.popover__title {\n  font-size: 14px;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 100;\n}\n\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  left: -69px;\n  transform: translate(0, 10px);\n  background-color: #fdfdfd;\n  padding: 0.5rem 1rem 0 1rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  min-width: 270px;\n  top: 55px;\n  z-index: 9999;\n}\n\n.popover__content:before {\n  position: absolute;\n  left: 50%;\n  top: -8px;\n  content: \"\";\n  width: 15px;\n  height: 15px;\n  z-index: 9999;\n  display: inline-block;\n  background: #fff;\n  margin-left: -7px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  border-top: 1px solid #f3f0f0;\n  border-left: 1px solid #f3f0f0;\n  transition-duration: 0.3s;\n  transition-property: transform;\n}\n\n.popover__wrapper:hover .popover__content {\n  z-index: 9999;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message {\n  border-bottom: 1px solid #ddd;\n  font-weight: 500;\n  text-align: left;\n}\n\n.iconfix {\n  top: 4px;\n  position: relative;\n  left: 5px;\n  color: #00479d;\n}\n\n.popover__content p {\n  margin-bottom: 0px;\n}\n\n.incerror {\n  font-size: 75%;\n  color: #f44336 !important;\n  font-weight: 400;\n}\n\n.buttonbar {\n  display: flex;\n  padding: 0 2rem;\n  height: 40px;\n}\n\n.buttonbar .mat-button {\n  padding: 0 15px;\n  font-weight: 400;\n}\n\n.buttonbar .buttonbarbg {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n}\n\n.staticlbl {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.file {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  height: 2.5rem;\n  width: 14rem;\n}\n\n.file input {\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  width: 10rem;\n}\n\n.file > .mat-icon {\n  z-index: 999;\n  color: #fff;\n  position: relative;\n  left: -6px;\n  line-height: 1.6em;\n}\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.file-custom.long {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  background-color: #fff;\n  border-bottom: 0.075rem solid #949494;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  width: 270px;\n}\n\n.file-custom.long:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 124px;\n  justify-content: flex-end;\n}\n\n.file-custom:before {\n  position: absolute;\n  top: -0.075rem;\n  right: -0.075rem;\n  bottom: -0.075rem;\n  z-index: 6;\n  display: flex;\n  content: attr(data-lbl);\n  height: 2.5rem;\n  padding: 0.5rem 1rem;\n  line-height: 1.8em;\n  color: #ffffff;\n  background: linear-gradient(60deg, #0b90a0, #2aadbd);\n  border-radius: 0 0.25rem 0.25rem 0;\n  font-weight: 500;\n  font-size: 14px;\n  width: 78px;\n  justify-content: flex-end;\n}\n\n.file-custom:after {\n  content: \"file...\";\n}\n\n.historylbl {\n  background-color: #ff4081;\n  font-size: 15px;\n  padding: 10px 15px 4px 30px;\n  font-weight: 500;\n  color: #fbfbfb;\n  margin-top: 10px;\n  display: flex;\n  line-height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phc2Jpci9EZXNrdG9wL1ByYWN0aWNlL25nZm9ybS9qYXBhbmlfZ2l0L2NtbGMtbWF0ZXJpYWwtbmV3L3NyYy9hcHAvcG9zdGRhdGEvcG9zdGRhdGFmcm0vcG9zdGRhdGFmcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RkYXRhL3Bvc3RkYXRhZnJtL3Bvc3RkYXRhZnJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQUEsb0JBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ0tGOztBREhBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7QUNRRjs7QUROQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FETkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1dGOztBRFJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDV0Y7O0FEVEE7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1lGOztBRFZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDY0Y7O0FEWkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZUY7O0FEYkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNpQkY7O0FEZkE7RUFDRSxrQkFBQTtBQ2tCRjs7QURmQTtFQUNFLHlCQUFBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNrQkoiLCJmaWxlIjoic3JjL2FwcC9wb3N0ZGF0YS9wb3N0ZGF0YWZybS9wb3N0ZGF0YWZybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAwLjAxJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIGhlaWdodDogNDA1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG50YWJsZS5jYXNldGFibGUge1xyXG4gIHdpZHRoOiAyMDAwcHg7XHJcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xyXG59XHJcbnRkLm1hdC1jb2x1bW4tc3RhciB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4vKiBQb3BvdmVyIHN0eWxpbmcgKi9cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnBvcG92ZXJfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTY5cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwIDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gIHRvcDogNTVweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IC04cHg7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjQzLCAyNDAsIDI0MCk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMjQzLCAyNDAsIDI0MCk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XHJcbn1cclxuLnBvcG92ZXJfX21lc3NhZ2Uge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaWNvbmZpeCB7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDVweDtcclxuICBjb2xvcjogIzAwNDc5ZDtcclxufVxyXG4ucG9wb3Zlcl9fY29udGVudCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmluY2Vycm9yIHtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBjb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5idXR0b25iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmJ1dHRvbmJhciAubWF0LWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmJ1dHRvbmJhciAuYnV0dG9uYmFyYmcge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zdGF0aWNsYmwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLy8gZmlsZSB1cGxvYWRcclxuLmZpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICB3aWR0aDogMTRyZW07XHJcbn1cclxuLmZpbGUgaW5wdXQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMTByZW07XHJcbn1cclxuLmZpbGUgPiAubWF0LWljb24ge1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTZweDtcclxuICBsaW5lLWhlaWdodDogMS42ZW07XHJcbn1cclxuLmZpbGUtY3VzdG9tIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogNTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmZpbGUtY3VzdG9tLmxvbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA1O1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzU1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDc1cmVtIHNvbGlkICM5NDk0OTQ7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB3aWR0aDogMjcwcHg7XHJcbn1cclxuLmZpbGUtY3VzdG9tLmxvbmc6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMC4wNzVyZW07XHJcbiAgcmlnaHQ6IC0wLjA3NXJlbTtcclxuICBib3R0b206IC0wLjA3NXJlbTtcclxuICB6LWluZGV4OiA2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTI0cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4uZmlsZS1jdXN0b206YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMC4wNzVyZW07XHJcbiAgcmlnaHQ6IC0wLjA3NXJlbTtcclxuICBib3R0b206IC0wLjA3NXJlbTtcclxuICB6LWluZGV4OiA2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWxibCk7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzBiOTBhMCwgIzJhYWRiZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNzhweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5maWxlLWN1c3RvbTphZnRlciB7XHJcbiAgY29udGVudDogXCJmaWxlLi4uXCI7XHJcbn1cclxuLy8tLSBmaWxlIHVwbG9hZFxyXG4uaGlzdG9yeWxibCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCA0cHggMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn0iLCIuZGF0YXRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDAuMDElO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBoZWlnaHQ6IDQwNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnRhYmxlLmNhc2V0YWJsZSB7XG4gIHdpZHRoOiAyMDAwcHg7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxudGQubWF0LWNvbHVtbi1zdGFyIHtcbiAgd2lkdGg6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLyogUG9wb3ZlciBzdHlsaW5nICovXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucG9wb3Zlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3BvdmVyX19jb250ZW50IHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02OXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gMCAxcmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBtaW4td2lkdGg6IDI3MHB4O1xuICB0b3A6IDU1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IC04cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjBmMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmMGYwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG5cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogOTk5OTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTIwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XG59XG5cbi5wb3BvdmVyX19tZXNzYWdlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pY29uZml4IHtcbiAgdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuICBjb2xvcjogIzAwNDc5ZDtcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmluY2Vycm9yIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idXR0b25iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDJyZW07XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmJ1dHRvbmJhciAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ1dHRvbmJhciAuYnV0dG9uYmFyYmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnN0YXRpY2xibCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHdpZHRoOiAxNHJlbTtcbn1cblxuLmZpbGUgaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwcmVtO1xufVxuXG4uZmlsZSA+IC5tYXQtaWNvbiB7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xufVxuXG4uZmlsZS1jdXN0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDU7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM1NTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDAuMDc1cmVtIHNvbGlkICM5NDk0OTQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5maWxlLWN1c3RvbS5sb25nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAwLjA3NXJlbSBzb2xpZCAjOTQ5NDk0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB3aWR0aDogMjcwcHg7XG59XG5cbi5maWxlLWN1c3RvbS5sb25nOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4wNzVyZW07XG4gIHJpZ2h0OiAtMC4wNzVyZW07XG4gIGJvdHRvbTogLTAuMDc1cmVtO1xuICB6LWluZGV4OiA2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGJsKTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMwYjkwYTAsICMyYWFkYmQpO1xuICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMjRweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmZpbGUtY3VzdG9tOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4wNzVyZW07XG4gIHJpZ2h0OiAtMC4wNzVyZW07XG4gIGJvdHRvbTogLTAuMDc1cmVtO1xuICB6LWluZGV4OiA2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb250ZW50OiBhdHRyKGRhdGEtbGJsKTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS44ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMwYjkwYTAsICMyYWFkYmQpO1xuICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiA3OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZmlsZS1jdXN0b206YWZ0ZXIge1xuICBjb250ZW50OiBcImZpbGUuLi5cIjtcbn1cblxuLmhpc3RvcnlsYmwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCA0cHggMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmYmZiZmI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/postdata/postdatafrm/postdatafrm.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/postdata/postdatafrm/postdatafrm.component.ts ***!
          \***************************************************************/
        /*! exports provided: MY_FORMATS, Postdatafrm */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () { return MY_FORMATS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Postdatafrm", function () { return Postdatafrm; });
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
            var Postdatafrm = /** @class */ (function () {
                function Postdatafrm(cdRef, mediaObserver, transloco) {
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
                Postdatafrm.prototype.setActiveLang = function (lang) {
                    this.transloco.setActiveLang(lang);
                };
                Postdatafrm.prototype.ngOnInit = function () {
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
                Postdatafrm.prototype.show_inc_app_sec = function (event) {
                    console.log(event.checked);
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                Postdatafrm.prototype.onSubmit = function () {
                    if (!!this.caseform.value.inc_app_sec_memberno === true ||
                        !!this.caseform.value.inc_app_sec_memberyes === true) {
                        this.inc_app_sec_member_error = false;
                    }
                    else {
                        this.inc_app_sec_member_error = true;
                    }
                };
                Postdatafrm.prototype.dateValidator = function (c) {
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
                Postdatafrm.prototype.ngAfterViewInit = function () {
                    this.cdRef.detectChanges();
                };
                Postdatafrm.prototype.ngOnDestroy = function () {
                    if (this.mediaSub) {
                        this.mediaSub.unsubscribe();
                    }
                };
                return Postdatafrm;
            }());
            Postdatafrm.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
                { type: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__["TranslocoService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], Postdatafrm.prototype, "paginator", void 0);
            Postdatafrm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-postdatafrm',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./postdatafrm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/postdata/postdatafrm/postdatafrm.component.html")).default,
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
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./postdatafrm.component.scss */ "./src/app/postdata/postdatafrm/postdatafrm.component.scss")).default]
                })
            ], Postdatafrm);
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
//# sourceMappingURL=postdata-postdata-module-es2015.js.map
//# sourceMappingURL=postdata-postdata-module-es5.js.map
//# sourceMappingURL=postdata-postdata-module-es5.js.map