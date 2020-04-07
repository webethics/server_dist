(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-youtubelink-manage-youtubelink-module"],{

/***/ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"an-page-content\">\n  <div class=\"an-content-body manage-price\">\n      <div class=\"an-body-topbar wow fadeIn\">\n          <div class=\"an-page-title\">\n              <h2>Add YouTube Link</h2>\n          </div>\n      </div>\n      <form [formGroup]=\"addYoutubeForm\" novalidate (ngSubmit)=\"onAdd()\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                      <div class=\"\">\n                          <input type=\"text\" formControlName=\"youtube_url\" class=\"form-control\" id=\"inputEmail\" placeholder=\"YouTube Url\">\n                          <!-- <v360-form-error [control]=\"addLocationForm.controls.location\" [msg]=\"'location'\"></v360-form-error> -->\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                      <div class=\"\">\n                          <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Title\">\n                          <!-- <v360-form-error [control]=\"addLocationForm.controls.price_of_video\" [msg]=\"'price'\"></v360-form-error> -->\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-12\">\n\n                <div class=\"form-group\">\n                    <div class=\"\">\n                        <input type=\"text\" formControlName=\"subtitle\" class=\"form-control\" id=\"inputEmail\" placeholder=\"SubTitle\">\n                        <!-- <v360-form-error [control]=\"addLocationForm.controls.price_of_video\" [msg]=\"'price'\"></v360-form-error> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                    <div class=\"\">\n                        <input type=\"text\" formControlName=\"category\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Category\">\n                        <!-- <v360-form-error [control]=\"addLocationForm.controls.price_of_video\" [msg]=\"'price'\"></v360-form-error> -->\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"\">\n              <div class=\"form-group\">\n                  <div class=\"\">\n                      <button type=\"submit\" class=\"btn btn-primary \">ADD</button>\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddYoutubelinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddYoutubelinkComponent", function() { return AddYoutubelinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddYoutubelinkComponent = /** @class */ (function () {
    function AddYoutubelinkComponent(adminService) {
        this.adminService = adminService;
    }
    AddYoutubelinkComponent.prototype.ngOnInit = function () {
        this.addYoutubeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            youtube_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])
        });
    };
    AddYoutubelinkComponent.prototype.onAdd = function () {
        if (this.addYoutubeForm.valid) {
            this.adminService.addYouTubeLink(this.addYoutubeForm.value).subscribe(function (res) {
                console.log('response', res);
            });
        }
        else {
        }
    };
    AddYoutubelinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-youtubelink',
            template: __webpack_require__(/*! ./add-youtubelink.component.html */ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.html"),
            styles: [__webpack_require__(/*! ./add-youtubelink.component.css */ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AddYoutubelinkComponent);
    return AddYoutubelinkComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-video {\n    display: block;\n    padding: 16px 48px 16px 28px;\n    width: 100%\n}\n\n.box-video__item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: auto;\n    padding: 16px 30px 16px 0\n}\n\n.box-video__item:not(:last-child) {\n    border-bottom: 1px solid rgba(29, 0, 51, .1)\n}\n\n.box-video__thumb {\n    display: inline-block;\n    vertical-align: middle;\n    width: 130px;\n    height: 90px;\n    margin: 0 15px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover\n}\n\n.box-video__title {\n    margin: 10px 0;\n    font-family: Roboto, sans-serif;\n    font-size: 15px;\n    color: #1d0033\n}\n\n.box-video__meta {\n    display: flex;\n    opacity: .5\n}\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper dashboard\">\n    <div class=\"admin-main-container\">\n        <header class=\"admin-main-header\">\n            <a  class=\"page-title\">\n                <span class=\"sh-icon fa fa-youtube-play\"></span> Daily Report</a>\n        </header>\n\t\t\n        <input type=\"date\" [(ngModel)]=\"createDate\">\n        <button type=\"submit\" (click)=\"search(createDate)\">Search</button>\n\t\t<button class=\"export_button\" (click)=\"exportAsXLSXReports()\">Export As XLSX Reports</button>\n        <!-- <div *ngIf=\"currentDateDataNotAvailable;else dataAvailable\">\n            Current Date data is not available please select date from calender\n        </div> -->\n        <div class=\"admin-main-content\">\n\n            <!-- <div *ngIf=\"dailyLogs.length\">\n                    <h3> Users who had a video call </h3>\n                    <div class=\"admin-box\">\n                        <div class=\"admin-box-item box-video\">\n\n                            <div class=\"box-video__item\">\n                                <div class=\"box-video__content\">\n                                    <table class=\"table NoTopBorder custom-table\">\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>Age</th>\n                                            <th>Gender</th>\n                                            <th>Online Time</th>\n                                            <th>Offline Time</th>\n                                            <th>Date</th>\n                                            <th>Date With</th>\n                                            <th>Age</th>\n                                            <th>Gender</th>\n\n                                        </tr>\n                                        <tr *ngFor=\"let dailyLog of dailyLogs;let i = index\">\n\n                                            <td class=\"h3 box-video__title\" [routerLink]=\"['/admin/user/video-log/',dailyLog.userInfo1._id]\">\n                                                {{dailyLog.userInfo1.firstName}}\n                                            </td>\n                                            <td>\n                                                {{dailyLog.userInfo1.age }}\n\n                                            </td>\n                                            <td *ngIf=\"!dailyLog.userInfo2.gender;else other1\">\n                                                Male\n                                            </td>\n                                            <td class=\"h3 box-video__title\">\n                                                <select>\n                                                    <option *ngFor=\"let onlineTime of dailyLog.onlineTimeHistory;let i = index\" value=\"volvo\"> {{onlineTime }}</option>\n\n                                                </select>\n                                            </td>\n                                            <td class=\"h3 box-video__title\">\n                                                <select>\n                                                    <option *ngFor=\"let offlineTime of dailyLog.offlineTimeHistory;let i = index\" value=\"volvo\"> {{offlineTime }}</option>\n\n                                                </select>\n\n                                            </td>\n                                            <td>\n                                                {{dailyLog.createdDateWithoutOffest| date: 'dd/MM/yyyy' }}\n                                            </td>\n                                            <td class=\"h3 box-video__title\">\n                                                {{dailyLog.userInfo2.firstName}}\n                                            </td>\n                                            <td>\n                                                {{dailyLog.userInfo2.age }}\n\n                                            </td>\n                                            <td *ngIf=\"!dailyLog.userInfo2.gender;else other\">\n                                                Male\n                                            </td>\n\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div class=\"box-video__meta\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n            <!-- <div *ngIf=\"dailyLogs2.length\">\n                    <h3> Users who did   not have a video call </h3>\n\n                    <div class=\"admin-box\">\n                        <div class=\"admin-box-item box-video\">\n\n                            <div class=\"box-video__item\">\n                                <div class=\"box-video__content\">\n                                    <table class=\"table NoTopBorder custom-table\">\n                                        <tr>\n                                            <th>Name</th>\n                                            <th>Email</th>\n                                            <th>Gender</th>\n                                            <th>Age</th>\n                                            <th>Online Time</th>\n                                            <th>Offline Time</th>\n                                            <th>Date</th>\n                                        </tr>\n                                        <tr *ngFor=\"let dailyLog of dailyLogs2;let i = index\">\n\n                                            <td class=\"h3 box-video__title\" [routerLink]=\"['/admin/user/video-log/',dailyLog.userInfo1._id]\">\n                                                {{dailyLog.userInfo1.firstName}}\n                                            </td>\n                                            <td>\n                                                {{dailyLog.userInfo1.email}}\n\n                                            </td>\n                                            <td *ngIf=\"!dailyLog.userInfo1.gender;else other\">\n                                                Male\n                                            </td>\n                                            <td>\n                                                {{dailyLog.userInfo1.age }}\n\n                                            </td>\n                                            <td class=\"h3 box-video__title\">\n                                                <select>\n                                                    <option *ngFor=\"let onlineTime of dailyLog.onlineTimeHistory;let i = index\" value=\"volvo\"> {{onlineTime }}</option>\n\n                                                </select>\n\n                                            </td>\n                                            <td class=\"h3 box-video__title\">\n                                                <select>\n                                                    <option *ngFor=\"let offlineTime of dailyLog.offlineTimeHistory;let i = index\" value=\"volvo\"> {{offlineTime }}</option>\n\n                                                </select>\n\n                                            </td>\n                                            <td>\n                                                {{dailyLog.createdWithTZ | dateWithTimezone:'America/New_York':'ll'}}\n\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div class=\"box-video__meta\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n\n            <div *ngIf=\"useractivity && useractivity.length\">\n                <table class=\"table NoTopBorder custom-table\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Email</th>\n                        <th>Gender</th>\n                        <th>Age</th>\n                        <th>Online Time</th>\n                        <th>Offline Time</th>\n                        <th>Date</th>\n                    </tr>\n                    <tr *ngFor=\"let useractiv of useractivity;let i = index\">\n\n                        <td class=\"h3 box-video__title\">\n                            {{useractiv?._id.name[0]}}\n                        </td>\n                        <td>\n                            {{useractiv?._id.email[0]}}\n\n                        </td>\n                        <td *ngIf=\"!useractiv?._id.gender[0];else other\">\n                            Male\n                        </td>\n                        <td>\n                            {{useractiv?._id.age[0] }}\n\n                        </td>\n                        <td class=\"h3 box-video__title\">\n                            <select>\n                                <option *ngFor=\"let onlineTime of useractiv?.onlinehistory;let i = index\"> {{onlineTime.time?onlineTime.time:'' }}</option>\n\n                            </select>\n\n                        </td>\n                        <td class=\"h3 box-video__title\">\n                            <select>\n                                <option *ngFor=\"let offlinetime of useractiv?.onlinehistory;let i = index\"> {{offlinetime.offlineTime }}</option>\n\n                            </select>\n\n                        </td>\n                        <td class=\"h3 box-video__title\">\n                            <select>\n                                <option *ngFor=\"let onlineDate of useractiv?.onlinehistory;let i = index\" > {{onlineDate.date |dateWithTimezone:'America/New_York':'ll'}} </option>\n\n                            </select>\n\n                        </td>\n                        <!-- <td>\n                                        {{dailyLog.createdWithTZ | dateWithTimezone:'America/New_York':'ll'}}\n\n                                    </td> -->\n                    </tr>\n                </table>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n\n<ng-template #other>\n    <td>Female</td>\n</ng-template>\n<ng-template #other1>\n    <td>Female</td>\n</ng-template>\n<ngx-spinner bdOpacity=0.1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n  </ngx-spinner>"

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EditYoutubelinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditYoutubelinkComponent", function() { return EditYoutubelinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/export-xlxs.service */ "./src/app/shared/service/export-xlxs.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditYoutubelinkComponent = /** @class */ (function () {
    function EditYoutubelinkComponent(route, admin, excelService, spinner, toastr, router) {
        this.route = route;
        this.admin = admin;
        this.excelService = excelService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.router = router;
    }
    EditYoutubelinkComponent.prototype.ngOnInit = function () {
        var date = {
            date: ''
        };
        this.search('2020-04-02');
    };
    EditYoutubelinkComponent.prototype.list = function () {
        var _this = this;
        var date = {
            date: ''
        };
        this.admin.dailyLogs(date).subscribe(function (res) {
            console.log('fgdfgdfgdfgsdfg useractivity', res.data.useractivity);
            _this.spinner.show();
            if (res.code == 200) {
                _this.spinner.hide();
                _this.dailyLogs = res.data.goneOnDate,
                    _this.dailyLogs2 = res.data.notGoneOnDate,
                    _this.useractivity = res.data.useractivity;
                /* if (res.data.goneOnDate.length != 0) {
                  this.showtable == true
                }
                if (res.data.notGoneOnDate.length != 0) {
                  this.showTable == true
                } */
            }
        });
    };
    EditYoutubelinkComponent.prototype.search = function (createDate) {
        var _this = this;
        console.log(createDate);
        var date = {
            date: createDate
        };
        this.admin.dailyLogs(date).subscribe(function (res) {
            console.log('sdsdsdsadasdsadas coming here', res);
            if (res.code == 200) {
                _this.dailyLogs = res.data.goneOnDate;
                _this.dailyLogs2 = res.data.notGoneOnDate;
                _this.useractivity = res.data.useractivity;
                console.log(_this.useractivity[0], ' this.useractivity');
                if (res.data.goneOnDate.length != 0) {
                    _this.showtable == true;
                }
                else {
                    // this.currentDateDataNotAvailable=false
                }
                if (res.data.notGoneOnDate.length != 0) {
                    _this.showTable == true;
                }
                else {
                    // this.currentDateDataNotAvailable=false
                }
                if (res.data.goneOnDate.length == 0 && res.data.notGoneOnDate.length == 0) {
                    _this.currentDateDataNotAvailable = true;
                }
                else {
                    _this.currentDateDataNotAvailable = false;
                }
            }
        });
    };
    EditYoutubelinkComponent.prototype.exportAsXLSXReports = function () {
        var reportArr = [];
        var onlineArr = [];
        var i = 1;
        this.useractivity.forEach(function (element, index) {
            reportArr.push({
                SNo: i++,
                Name: element._id.name[0],
                Email: element._id.email[0],
                Age: element._id.age[0],
                Gender: element._id.gender[0] ? 'Female' : 'Male',
            });
        });
        console.log(this.useractivity);
        if (reportArr.length) {
            this.excelService.exportAsExcelFile(reportArr, 'sample');
        }
        else {
            this.toastr.info('No data available to export');
        }
    };
    EditYoutubelinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-youtubelink',
            template: __webpack_require__(/*! ./edit-youtubelink.component.html */ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.html"),
            styles: [__webpack_require__(/*! ./edit-youtubelink.component.css */ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__["ExportXlxsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditYoutubelinkComponent);
    return EditYoutubelinkComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-video {\n    display: block;\n    padding: 16px 48px 16px 28px;\n    width: 100%\n}\n\n.box-video__item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: auto;\n    padding: 16px 30px 16px 0\n}\n\n.box-video__item:not(:last-child) {\n    border-bottom: 1px solid rgba(29, 0, 51, .1)\n}\n\n.box-video__thumb {\n    display: inline-block;\n    vertical-align: middle;\n    width: 130px;\n    height: 90px;\n    margin: 0 15px;\n    border-radius: 5px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover\n}\n\n.box-video__title {\n    margin: 10px 0;\n    font-family: Roboto, sans-serif;\n    font-size: 15px;\n    color: #1d0033\n}\n\n.box-video__meta {\n    display: flex;\n    opacity: .5\n}\n\n.error{\n  color: red;\n  padding-left:20%;\n  }\n\n/*# sourceMappingURL=yt-video.min.css.map */\n\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"admin-main-header\">\n\n\n</header>\n<div class=\"admin-main-content\">\n    <a href=\"youtube-video.html\" class=\"page-title\">\n        <span class=\"sh-icon fa fa-youtube-play\"></span> Youtube video</a>\n\n    <div class=\"admin-box-controls\">\n        <div class=\"add-element\">\n            <a class=\"add-element__link\" (click)=\"openModal()\">\n                <i class=\"fa fa-plus-circle\"></i>\n            </a>\n        </div>\n        <div class=\"clear-trash\">\n            <a class=\"clear-trash-wrap\" (click)=\"deleteMultiple()\">\n                <span class=\"clear-trash__icon fa fa-trash\"></span>\n                <!-- <span class=\"clear-trash__count\">8</span> -->\n            </a>\n        </div>\n    </div>\n\n\n    <!-- <div class=\"admin-box\"> -->\n    <div class=\"admin-box-item user-control\">\n        <div class=\"table-responsive\">\n                    <table class=\"table NoTopBorder custom-table\">\n                        <tr>\n                            <th align=\"center\">Select</th>\n                            <th>Thumbnail</th>\n                            <th>Title</th>\n                            <th>Subtitle</th>\n                            <th>Video ID</th>\n                            <!-- <th>Category</th> -->\n                            <th>Action</th>\n                        </tr>\n                        <tr *ngFor=\"let youtubeAr of youtubeArr;let i = index\">\n                            <!-- <tr *ngFor=\"let youtubeAr of youtubeArr| paginate:{itemsPerPage: 5, currentPage:p} ;let i = index\"> -->\n                            <td align=\"center\">\n                                    <form [formGroup]=\"checkBoxForm\">\n                                        <input type=\"checkbox\"\n                                            (change)=\"onCheckboxChagen(youtubeAr._id, $event.target.checked)\">\n                                    </form>\n                            </td>\n                            <td class=\"h3 box-video__title\">\n                                <img src=\"{{youtubeAr.thumbnail_url}}\"\n                                    onerror=\"this.onerror=null;this.src='../../../../../assets/img/image-not-found.jpg';\"\n                                    class=\"rounded-circle thumb-lg img-thumbnail m-b-10\" alt=\"video-image\" height=\"60px\"\n                                    width=\"60px\">\n                            </td>\n                            <td class=\"h3 box-video__title\">\n                                {{youtubeAr.title}}\n                            </td>\n                            <td class=\"h3 box-video__title\">\n                                {{youtubeAr.subtitle}}\n                            </td>\n                            <td class=\"h3 box-video__title\">\n                                {{youtubeAr.videoId}}\n                            </td>\n                            <!-- <td class=\"h3 box-video__title\">\n                                            {{youtubeAr.category}}\n                                        </td> -->\n                            <td>\n                                <div class=\"dropdown options-dropdown\">\n                                    <a class=\"dropdown-item view-item\" title=\"edit\"\n                                        (click)=\"openEditModal(youtubeAr._id,youtubeAr.youtube_url,youtubeAr.title,youtubeAr.subtitle)\">\n                                        <i class=\"fa fa-eye\"></i> </a>\n                                    <a class=\"dropdown-item del-item\" title=\"delete\"\n                                        (click)=\"deleteYouTubeInfo(youtubeAr._id)\">\n                                        <i class=\"fa fa-trash-o\"></i> </a>\n                                </div>\n                            </td>\n                        </tr>\n                    </table>\n                    <p-paginator [rows]=\"20\" [totalRecords]=\"15\"></p-paginator>\n\n            <!-- </div> -->\n            <!-- <pagination-controls (pageChange)=\"p=$event\"class=\"pagination-item pagination-prev\" ></pagination-controls> -->\n            <!-- <div class=\"admin-box\">\n                <ul class=\"pagination\">\n                    <li class=\"pagination-item pagination-prev\">\n\n                        <a href=\"\">\n                            <span>1</span>\n                        </a>\n                    </li>\n                    <li class=\"pagination-item\">\n                        <a href=\"\">\n                            <span>2</span>\n                        </a>\n                    </li>\n                    <li class=\"pagination-item\">\n                        <a href=\"\">\n                            <span>3</span>\n                        </a>\n                    </li>\n\n                    <li class=\"pagination-item pagination-current\">\n                        <a href=\"\">\n                            <span>4</span>\n                        </a>\n                    </li>\n\n                    <li class=\"pagination-item\">\n                        <a href=\"\">\n                            <span>5</span>\n                        </a>\n                    </li>\n                    <li class=\"pagination-item\">\n                        <a href=\"\">\n                            <span>6</span>\n                        </a>\n                    </li>\n\n                </ul>\n            </div> -->\n        </div>\n\n\n        <div class=\"modal\" id=\"myModal\">\n            <div class=\"modal-box\">\n                <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeModal()\">×</button>\n                <form [formGroup]=\"addYoutubeForm\" novalidate (ngSubmit)=\"onAdd()\" class=\"form-default\">\n                    <div class=\"modal-header__title\">\n                        <span class=\"modal-header__icon\">\n                            <i class=\"fa fa-plus-circle\"></i>\n                        </span>\n                        Add Youtube Links\n                    </div>\n                    <div class=\"modal-form-body\">\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"youtube_url\"\n                                placeholder=\"Enter the youtube video code...\" required>\n                        </label>\n                        <div *ngIf=\"addYoutubeForm.controls['youtube_url'].touched\">\n                            <span *ngIf=\"addYoutubeForm.controls['youtube_url'].hasError('required')\" class=\"error\">\n                                youtube_url is required\n                            </span>\n                        </div>\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"title\"\n                                placeholder=\"Enter the title...\" required>\n                        </label>\n                        <div *ngIf=\"addYoutubeForm.controls['title'].touched\">\n                            <span *ngIf=\"addYoutubeForm.controls['title'].hasError('required')\" class=\"error\">\n                                title is required\n                            </span>\n                        </div>\n\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"subtitle\"\n                                placeholder=\"Enter the sub-title...\" required>\n                        </label>\n                        <div *ngIf=\"addYoutubeForm.controls['subtitle'].touched\">\n                            <span *ngIf=\"addYoutubeForm.controls['subtitle'].hasError('required')\" class=\"error\">\n                                subtitle is required\n                            </span>\n                        </div>\n                        <!-- <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"category\" placeholder=\"Enter the Category...\" required>\n                </label>\n\n                <div *ngIf=\"addYoutubeForm.controls['category'].touched\">\n                    <span *ngIf=\"addYoutubeForm.controls['category'].hasError('required')\" class=\"error\">  \n                        category is required\n                      </span>\n                    </div> -->\n                        <div class=\"btn-group btn-group--c\">\n                            <button type=\"submit\" [disabled]='!addYoutubeForm.valid'\n                                class=\"btn btn--orange\">submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n        </div>\n\n\n        <div class=\"modal\" id=\"myModalEdit\">\n            <div class=\"modal-box\">\n                <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeEditModal()\">×</button>\n                <form [formGroup]=\"editYoutubeForm\" novalidate (ngSubmit)=\"onEdit()\" class=\"form-default\">\n                    <div class=\"modal-header__title\">\n                        <span class=\"modal-header__icon\">\n                            <i class=\"fa fa-plus-circle\"></i>\n                        </span>\n                        Edit Youtube Links\n                    </div>\n                    <div class=\"modal-form-body\">\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"yId\"\n                                placeholder=\"Enter the youtube video code...\" style=\"display: none;\">\n                        </label>\n\n                        <div *ngIf=\"editYoutubeForm.controls['yId'].touched\">\n                            <span *ngIf=\"editYoutubeForm.controls['yId'].hasError('required')\" class=\"error\">\n                                id is required\n                            </span>\n                        </div>\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"youtube_url\"\n                                placeholder=\"Enter the youtube video code...\" required>\n                        </label>\n\n                        <div *ngIf=\"editYoutubeForm.controls['youtube_url'].touched\">\n                            <span *ngIf=\"editYoutubeForm.controls['youtube_url'].hasError('required')\" class=\"error\">\n                                url is required\n                            </span>\n                        </div>\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"title\"\n                                placeholder=\"Enter the title...\" required>\n                        </label>\n\n                        <div *ngIf=\"editYoutubeForm.controls['title'].touched\">\n                            <span *ngIf=\"editYoutubeForm.controls['title'].hasError('required')\" class=\"error\">\n                                title is required\n                            </span>\n                        </div>\n                        <label class=\"form__label\">\n                            <input type=\"text\" class=\"form__control\" formControlName=\"subtitle\"\n                                placeholder=\"Enter the sub-title...\" required>\n                        </label>\n\n                        <div *ngIf=\"editYoutubeForm.controls['subtitle'].touched\">\n                            <span *ngIf=\"editYoutubeForm.controls['subtitle'].hasError('required')\" class=\"error\">\n                                subtitle is required\n                            </span>\n                        </div>\n                        <!-- <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"category\" placeholder=\"Enter the Category...\" required>\n                </label>\n\n                <div *ngIf=\"editYoutubeForm.controls['category'].touched\">\n                    <span *ngIf=\"editYoutubeForm.controls['category'].hasError('required')\" class=\"error\">  \n                        category is required\n                      </span>\n                    </div> -->\n                        <div class=\"btn-group btn-group--c\">\n                            <button type=\"submit\" [disabled]='!editYoutubeForm.valid'\n                                class=\"btn btn--orange\">submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ListYoutubelinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYoutubelinkComponent", function() { return ListYoutubelinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListYoutubelinkComponent = /** @class */ (function () {
    function ListYoutubelinkComponent(adminService, notification, fb) {
        this.adminService = adminService;
        this.notification = notification;
        this.fb = fb;
    }
    ListYoutubelinkComponent.prototype.ngOnInit = function () {
        this.checkBoxForm = this.fb.group({
            yId: this.fb.array([])
        });
        this.addYoutubeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            youtube_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.editYoutubeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            yId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            youtube_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.listYouTubeInfo();
    };
    ListYoutubelinkComponent.prototype.listYouTubeInfo = function () {
        var _this = this;
        this.adminService.listYoutubeLink().subscribe(function (res) {
            console.log('response', res);
            if (res.code == 200) {
                _this.youtubeArr = res.data;
            }
        });
    };
    ListYoutubelinkComponent.prototype.delete = function (id) {
        var _this = this;
        this.notification.confirm('You want to delete?').then(function (data) {
            if (data.value) {
                _this.adminService.deleteYoutubeLink(id).subscribe(function (res) {
                    if (res.code == 200) {
                        _this.listYouTubeInfo();
                    }
                    else {
                        _this.listYouTubeInfo();
                    }
                }, function (error) {
                    return console.log('There was an error: ', error);
                });
            }
            else {
                _this.listYouTubeInfo();
            }
        });
    };
    ListYoutubelinkComponent.prototype.openModal = function () {
        console.log('test test');
        document.getElementById('myModal').style.display = 'block';
    };
    ListYoutubelinkComponent.prototype.closeModal = function () {
        document.getElementById('myModal').style.display = 'none';
    };
    ListYoutubelinkComponent.prototype.onAdd = function () {
        var _this = this;
        if (this.addYoutubeForm.valid) {
            this.adminService.addYouTubeLink(this.addYoutubeForm.value).subscribe(function (res) {
                console.log('response', res);
                if (res.code == 200) {
                    _this.notification.successToast(res.message);
                    document.getElementById('myModal').style.display = 'none';
                    _this.listYouTubeInfo();
                }
                else {
                    _this.notification.infoToast('Something went wrong');
                }
            });
        }
        else {
            this.notification.infoToast('Invalid');
        }
    };
    ListYoutubelinkComponent.prototype.deleteYouTubeInfo = function (id) {
        var _this = this;
        this.notification.confirm('You want to delete?').then(function (data) {
            if (data.value) {
                _this.adminService.deleteYoutubeLink(id).subscribe(function (res) {
                    if (res.code == 200) {
                        _this.notification.successToast(res.message);
                        _this.listYouTubeInfo();
                    }
                    else {
                        _this.listYouTubeInfo();
                    }
                });
            }
            else {
                _this.listYouTubeInfo();
            }
        });
    };
    ListYoutubelinkComponent.prototype.onCheckboxChagen = function (id, isChecked) {
        console.log(isChecked, 'isChecked');
        var youtubeIDFormArray = this.checkBoxForm.controls.yId;
        if (isChecked) {
            youtubeIDFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](id));
        }
        else {
            var index = youtubeIDFormArray.controls.findIndex(function (x) { return x.value == id; });
            youtubeIDFormArray.removeAt(index);
        }
        console.log('youtubeee', this.checkBoxForm.value);
    };
    ListYoutubelinkComponent.prototype.deleteMultiple = function () {
        var _this = this;
        if (this.checkBoxForm.value.yId.length == 0) {
            this.notification.infoToast('Please select items from the list');
        }
        else {
            console.log(this.checkBoxForm.value);
            // this.notification.successToast('Items selected')
            this.notification.confirm('You want to delete?').then(function (data) {
                console.log('dataaaaa', data);
                if (data.value) {
                    _this.adminService.deleteMultipleYoutubeLinks(_this.checkBoxForm.value).subscribe(function (res) {
                        if (res.code == 200) {
                            _this.notification.successToast(res.message);
                            _this.listYouTubeInfo();
                        }
                        else {
                            _this.notification.successToast('Something went wrong!!!!!!!!');
                            _this.listYouTubeInfo();
                        }
                    });
                }
                else {
                    _this.notification.infoToast('Cancelled');
                }
            });
        }
    };
    ListYoutubelinkComponent.prototype.closeEditModal = function () {
        document.getElementById('myModalEdit').style.display = 'none';
    };
    ListYoutubelinkComponent.prototype.openEditModal = function (id, videoId, title, subtitle) {
        document.getElementById('myModalEdit').style.display = 'block';
        this.editYoutubeForm.setValue({ 'yId': id, 'youtube_url': videoId, 'title': title, 'subtitle': subtitle });
    };
    ListYoutubelinkComponent.prototype.onEdit = function () {
        var _this = this;
        console.log('this.edittt', this.editYoutubeForm.value);
        if (this.editYoutubeForm.valid) {
            this.adminService.editYoutubeLink(this.editYoutubeForm.value).subscribe(function (res) {
                if (res.code == 200) {
                    _this.listYouTubeInfo();
                    _this.editYoutubeForm.reset();
                    _this.closeEditModal();
                    _this.notification.successToast(res.message);
                }
                else {
                    _this.notification.infoToast(res.message);
                    _this.closeEditModal();
                }
            });
        }
        else {
            this.notification.errorToast('Invalid');
            this.closeEditModal();
        }
    };
    ListYoutubelinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-youtubelink',
            template: __webpack_require__(/*! ./list-youtubelink.component.html */ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.html"),
            styles: [__webpack_require__(/*! ./list-youtubelink.component.css */ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ListYoutubelinkComponent);
    return ListYoutubelinkComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/manage-youtubelink-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/manage-youtubelink-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageYoutubelinkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageYoutubelinkRoutingModule", function() { return ManageYoutubelinkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_youtubelink_add_youtubelink_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-youtubelink/add-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.ts");
/* harmony import */ var _list_youtubelink_list_youtubelink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-youtubelink/list-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.ts");
/* harmony import */ var _edit_youtubelink_edit_youtubelink_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-youtubelink/edit-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'add-youtube',
        component: _add_youtubelink_add_youtubelink_component__WEBPACK_IMPORTED_MODULE_2__["AddYoutubelinkComponent"]
    },
    {
        path: 'list-youtube',
        component: _list_youtubelink_list_youtubelink_component__WEBPACK_IMPORTED_MODULE_3__["ListYoutubelinkComponent"]
    },
    {
        path: 'daily-logs',
        component: _edit_youtubelink_edit_youtubelink_component__WEBPACK_IMPORTED_MODULE_4__["EditYoutubelinkComponent"]
    }
];
var ManageYoutubelinkRoutingModule = /** @class */ (function () {
    function ManageYoutubelinkRoutingModule() {
    }
    ManageYoutubelinkRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageYoutubelinkRoutingModule);
    return ManageYoutubelinkRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-youtubelink/manage-youtubelink.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-youtubelink/manage-youtubelink.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageYoutubelinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageYoutubelinkModule", function() { return ManageYoutubelinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_youtubelink_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-youtubelink-routing.module */ "./src/app/admin/modules/manage-youtubelink/manage-youtubelink-routing.module.ts");
/* harmony import */ var _add_youtubelink_add_youtubelink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-youtubelink/add-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/add-youtubelink/add-youtubelink.component.ts");
/* harmony import */ var _list_youtubelink_list_youtubelink_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-youtubelink/list-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/list-youtubelink/list-youtubelink.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_youtubelink_edit_youtubelink_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-youtubelink/edit-youtubelink.component */ "./src/app/admin/modules/manage-youtubelink/edit-youtubelink/edit-youtubelink.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { NgxPaginationModule } from 'ngx-pagination';

var ManageYoutubelinkModule = /** @class */ (function () {
    function ManageYoutubelinkModule() {
    }
    ManageYoutubelinkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_youtubelink_add_youtubelink_component__WEBPACK_IMPORTED_MODULE_3__["AddYoutubelinkComponent"], _list_youtubelink_list_youtubelink_component__WEBPACK_IMPORTED_MODULE_4__["ListYoutubelinkComponent"], _edit_youtubelink_edit_youtubelink_component__WEBPACK_IMPORTED_MODULE_6__["EditYoutubelinkComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_youtubelink_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageYoutubelinkRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__["CheckboxModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_10__["PaginatorModule"]
                // NgxPaginationModule
            ],
            providers: [_shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ManageYoutubelinkModule);
    return ManageYoutubelinkModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-manage-youtubelink-manage-youtubelink-module.js.map