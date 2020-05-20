(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/views/dashboard/dashboard.module": [
		"./src/app/admin/views/dashboard/dashboard.module.ts",
		"default~admin-views-dashboard-dashboard-module~admin-views-jobs-jobs-module",
		"admin-views-dashboard-dashboard-module"
	],
	"./admin/views/jobs/jobs.module": [
		"./src/app/admin/views/jobs/jobs.module.ts",
		"default~admin-views-dashboard-dashboard-module~admin-views-jobs-jobs-module",
		"admin-views-jobs-jobs-module"
	],
	"./admin/views/partner/users.module": [
		"./src/app/admin/views/partner/users.module.ts",
		"admin-views-partner-users-module"
	],
	"./admin/views/plans/plan.module": [
		"./src/app/admin/views/plans/plan.module.ts",
		"admin-views-plans-plan-module"
	],
	"./admin/views/services/services.module": [
		"./src/app/admin/views/services/services.module.ts",
		"admin-views-services-services-module"
	],
	"./admin/views/users/users.module": [
		"./src/app/admin/views/users/users.module.ts",
		"default~admin-views-users-users-module~frontend-views-users-users-module",
		"admin-views-users-users-module"
	],
	"./frontend/views/jobs/jobs.module": [
		"./src/app/frontend/views/jobs/jobs.module.ts",
		"frontend-views-jobs-jobs-module"
	],
	"./frontend/views/users/users.module": [
		"./src/app/frontend/views/users/users.module.ts",
		"default~admin-views-users-users-module~frontend-views-users-users-module",
		"frontend-views-users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/_admin_nav.ts":
/*!*************************************!*\
  !*** ./src/app/admin/_admin_nav.ts ***!
  \*************************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'icon-speedometer',
    },
    {
        //   name: 'Users',
        //   url: '',
        //   icon: 'icon-user',
        // children: [
        //   /*,
        //    {
        //       name: 'Add User',
        //       url: '/admin/users/add',
        //       icon: 'icon-user',
        //     } */
        //   ]
        // },
        name: 'Customers',
        url: '/admin/users/list',
        icon: 'icon-user',
    },
    {
        name: 'Partners',
        url: '/admin/partner/list',
        icon: 'icon-user',
    },
    {
        name: 'Plan',
        url: '/admin/plan/list',
        icon: 'icon-puzzle',
    },
    {
        name: 'Services',
        url: '/admin/services/list',
        icon: 'icon-puzzle',
    },
    {
        name: 'Jobs',
        url: '/admin/jobs/list',
        icon: 'icon-puzzle',
    }
];


/***/ }),

/***/ "./src/app/admin/views/error/404.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/views/error/404.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/error/404.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/views/error/404.component.ts ***!
  \****************************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P404Component = /** @class */ (function () {
    function P404Component() {
    }
    P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./404.component.html */ "./src/app/admin/views/error/404.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P404Component);
    return P404Component;
}());



/***/ }),

/***/ "./src/app/admin/views/error/500.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/views/error/500.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/error/500.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/views/error/500.component.ts ***!
  \****************************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var P500Component = /** @class */ (function () {
    function P500Component() {
    }
    P500Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./500.component.html */ "./src/app/admin/views/error/500.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], P500Component);
    return P500Component;
}());



/***/ }),

/***/ "./src/app/admin/views/jobs/dialog-overview-example-dialog.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/views/jobs/dialog-overview-example-dialog.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container{\r\n\tpadding:50px !important;\r\n}\r\n.mat-raised-button.mat-primary{\r\n\tbackground-color:#1695C2;\r\n}\r\n.mat-dialog-actions{padding:25px 0;}\r\n.cdk-overlay-pane {\r\n    width: 100% !important;\r\n    max-width: 750px !important;\r\n}\r\n.desc .loc_lable{    width: 100px;\r\n    position: relative;\r\n    display: inline-block;\r\n\ttext-align: right;\r\n\tfont-weight:600;\r\n\tfont-size:14px\r\n}\r\n.desc .loc_lable::after{content:\":\"}\r\n.job-info{\r\n    padding: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n.items-moved .job-info {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.joblisting-panel .title {\r\n    font-size: 16px;\r\n    margin-top: 15px;\r\n    font-weight: 600;\r\n}\r\n.job-info .title {\r\n    font-size: 16px;\r\n    margin-top: 15px;\r\n    font-weight: 600;\r\n}\r\n.items-moved.joblisting-panel .title {\r\n\tcolor:#303030;\r\n    font-weight: 900;  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlld3Mvam9icy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFFQSxvQkFBb0IsY0FBYyxDQUFDO0FBRW5DO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBLHFCQUFxQixZQUFZO0lBQzdCLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDeEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZjtBQUNEO0FBQ0Esd0JBQXdCLFdBQVc7QUFFbkM7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFHSSxhQUFhO0lBRVQsZUFBZTtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0lBQ1YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlld3Mvam9icy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG5cdHBhZGRpbmc6NTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxNjk1QzI7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnN7cGFkZGluZzoyNXB4IDA7fVxyXG5cclxuLmNkay1vdmVybGF5LXBhbmUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogNzUwcHggIWltcG9ydGFudDtcclxufVxyXG4uZGVzYyAubG9jX2xhYmxleyAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0Zm9udC13ZWlnaHQ6NjAwO1xyXG5cdGZvbnQtc2l6ZToxNHB4XHJcbn1cclxuLmRlc2MgLmxvY19sYWJsZTo6YWZ0ZXJ7Y29udGVudDpcIjpcIn1cclxuXHJcbi5qb2ItaW5mb3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5pdGVtcy1tb3ZlZCAuam9iLWluZm8ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxufSBcclxuXHJcbi5qb2JsaXN0aW5nLXBhbmVsIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uam9iLWluZm8gLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5pdGVtcy1tb3ZlZC5qb2JsaXN0aW5nLXBhbmVsIC50aXRsZSB7XHJcblx0Y29sb3I6IzMwMzAzMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7ICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/jobs/dialog-overview-example-dialog.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/views/jobs/dialog-overview-example-dialog.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content class=\"custom-modal-wrap\">\r\n\r\n\t\t<div mat-dialog-actions>\r\n\t\t\t\t<p  (click)=\"onNoClick()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></p>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t<h3 class=\"title\">Job Details</h3>\r\n\t\t\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"movingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"tc-wrap\">\r\n\t\t\t\t\tSelected Moving Data\r\n\t\t\t\t\t<span class=\"job_status\" *ngIf=\"jobData.jobStatus == 2\">Completed</span> \r\n\t\t\t\t\t<span class=\"job_status\" *ngIf=\"jobData.jobStatus == 1\">In Progress</span>\r\n\t\t\t\t\t<span class=\"job_status\" *ngIf=\"jobData.jobStatus == 0 && bidStatus != 2\">Open</span>\r\n\t\t\t\t\t<span class=\"job_status\" *ngIf=\"jobData.jobStatus == 0 && bidStatus == 2\">Declined</span>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"movingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\tJob Date : {{movingData.jobStart | date:'mediumDate'}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"border-class\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"movingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tFrom Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingfrom of movingData.moving_from\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span> {{ movingfrom.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingfrom.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingfrom.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingfrom.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingfrom.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingfrom.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  {{movingfrom.address1}}<br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"movingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tTo Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingto of movingData.moving_to\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span>  {{ movingto.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingto.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingto.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingto.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingto.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingto.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  <span>{{movingto.address1}}</span><br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t \r\n<div class=\"container title-icon-bar items-moved\" *ngIf=\"movingData\">\r\n\t<div class=\"col-md-12\">\t\r\n\t\r\n\t\t<div class=\"\" > \r\n\t\t\t\r\n\t\t\t<div class=\"job-info row\">\r\n\t\t\t\t<div class=\"title col-12 mb-5 text-center\">\r\n\t\t\t\t\tItems to be Moved\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.appliances  && movingData.appliances.length > 0\">\r\n\t\t\t\t\t<div class=\"title\">Appliances</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let appliance of movingData.appliances\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ appliance.applianceItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ appliance.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.appliances_misc\">{{ movingData.appliances_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.appliances_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.appliances_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.appliances_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.appliances && movingData.appliances.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.bedRooms  && movingData.bedRooms.length > 0\">\t\t\r\n\t\t\t\t\t<div class=\"title\">Bedrooms</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let bedroom of movingData.bedRooms\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ bedroom.bedRoomsItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ bedroom.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.bedrooms_misc\">{{ movingData.bedrooms_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.bedrooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.bedRooms_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.bedRooms_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.bedRooms && movingData.bedRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.livingRooms && movingData.livingRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Living Room</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let living of movingData.livingRooms\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ living.livingRoomsItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ living.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.livingRooms_misc\">{{ movingData.livingRooms_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.livingRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.livingRooms_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.livingRooms_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.livingRooms && movingData.livingRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.familyRooms && movingData.familyRooms.length > 0\">\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Family Room</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let family of movingData.familyRooms\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ family.familyRoomsItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ family.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.familyRooms_misc\">{{ movingData.familyRooms_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.familyRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.familyRooms_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.familyRooms_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.familyRooms && movingData.familyRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.diningRooms  && movingData.diningRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Dining Room</div>\r\n\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let dining of movingData.diningRooms\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ dining.diningRoomsItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ dining.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.diningRooms_misc\">{{ movingData.diningRooms_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.diningRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.diningRooms_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.diningRooms_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.diningRooms && movingData.diningRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.kitchen && movingData.kitchen.length > 0\">\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Kitchen</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let kitchen of movingData.kitchen\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ kitchen.kitchenItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ kitchen.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.kitchen_misc\">{{ movingData.kitchen_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.kitchen_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.kitchen_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.kitchen_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.kitchen && movingData.kitchen.length == 0\">-- Nothing To Move --</div>\t  \r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.basement && movingData.basement.length > 0\">\t\t\r\n\t\t\t\t\t<div class=\"title\">Basement</div>\r\n\t\t\t\t\t<div class=\"desc\" *ngFor=\"let basement of movingData.basement\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ basement.basementItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ basement.items }}</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.basement_misc\">{{ movingData.basement_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.basement_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.basement_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.basement_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.basement && movingData.basement.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.garage  && movingData.garage.length > 0\">\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Garage</div>\r\n\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let garage of movingData.garage\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ garage.garageItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ garage.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.garage_misc\">{{ movingData.garage_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.garage_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.garage_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.garage_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.garage && movingData.garage.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4\" *ngIf=\"movingData && movingData.patioYard  && movingData.patioYard.length > 0\" >\t  \r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"title\">Patio/Yard</div>\r\n\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let patioYard of movingData.patioYard\">\r\n\t\t\t\t\t\t<span class=\"itemname\">{{ patioYard.patioYardItem.name }}</span>\r\n\t\t\t\t\t\t<span class=\"itemcount\">{{ patioYard.items }}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.patioYard_misc\">{{ movingData.patioYard_misc}}</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.patioYard_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t<b>Need Help in Assembly/Deassembly : </b>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"movingData.patioYard_assembly\">Yes</span>\r\n\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!movingData.patioYard_assembly\">No</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"movingData.patioYard && movingData.patioYard.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"packingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<div class=\"tc-wrap\">Selected Packing Data</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"packingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\tJob Date : {{packingData.jobStart | date:'mediumDate'}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"border-class\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"packingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tFrom Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingfrom of packingData.moving_from\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span> {{ movingfrom.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingfrom.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingfrom.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingfrom.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingfrom.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingfrom.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  {{movingfrom.address1}}<br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"packingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tTo Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingto of packingData.moving_to\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span>  {{ movingto.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingto.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingto.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingto.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingto.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingto.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  <span>{{movingto.address1}}</span><br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t\r\n\t<div class=\"container title-icon-bar items-moved\" *ngIf=\"packingData\">\r\n\t\t<div class=\"col-md-12\">\t\r\n\t\t\r\n\t\t\t<div class=\"\" > \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"job-info row\">\r\n\t\t\t\t\t<div class=\"title col-12 mb-5 text-center\">\r\n\t\t\t\t\t\tItems to be Packed\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.appliances  && packingData.appliances.length > 0\">\r\n\t\t\t\t\t\t<div class=\"title\">Appliances</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let appliance of packingData.appliances\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ appliance.applianceItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ appliance.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.appliances_misc\">{{ packingData.appliances_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.appliances_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.appliances && packingData.appliances.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.bedRooms  && packingData.bedRooms.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Bedrooms</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let bedroom of packingData.bedRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ bedroom.bedRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ bedroom.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.bedrooms_misc\">{{ packingData.bedrooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.bedrooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.bedRooms && packingData.bedRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.livingRooms && packingData.livingRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Living Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let living of packingData.livingRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ living.livingRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ living.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.livingRooms_misc\">{{ packingData.livingRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.livingRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.livingRooms && packingData.livingRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.familyRooms && packingData.familyRooms.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Family Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let family of packingData.familyRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ family.familyRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ family.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.familyRooms_misc\">{{ packingData.familyRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.familyRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.familyRooms && packingData.familyRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.diningRooms  && packingData.diningRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Dining Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let dining of packingData.diningRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ dining.diningRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ dining.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.diningRooms_misc\">{{ packingData.diningRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.diningRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.diningRooms && packingData.diningRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.kitchen && packingData.kitchen.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Kitchen</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let kitchen of packingData.kitchen\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ kitchen.kitchenItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ kitchen.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.kitchen_misc\">{{ packingData.kitchen_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.kitchen_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.kitchen && packingData.kitchen.length == 0\">-- Nothing To Move --</div>\t  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.basement && packingData.basement.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Basement</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let basement of packingData.basement\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ basement.basementItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ basement.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.basement_misc\">{{ packingData.basement_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.basement_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.basement && packingData.basement.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.garage  && packingData.garage.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Garage</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let garage of packingData.garage\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ garage.garageItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ garage.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.garage_misc\">{{ packingData.garage_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.garage_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.garage && packingData.garage.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"packingData && packingData.patioYard  && packingData.patioYard.length > 0\" >\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Patio/Yard</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let patioYard of packingData.patioYard\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ patioYard.patioYardItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ patioYard.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"packingData.patioYard_misc\">{{ packingData.patioYard_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!packingData.patioYard_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"packingData.patioYard && packingData.patioYard.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n\t<div class=\"container title-icon-bar\"  *ngIf=\"unpackingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<div class=\"tc-wrap\">Selected Unpacking Data</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"unpackingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\tJob Date : {{unpackingData.jobStart | date:'mediumDate'}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"border-class\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"unpackingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tFrom Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingfrom of unpackingData.moving_from\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span> {{ movingfrom.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingfrom.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingfrom.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingfrom.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingfrom.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingfrom.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  {{movingfrom.address1}}<br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"unpackingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tTo Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingto of unpackingData.moving_to\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span>  {{ movingto.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingto.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingto.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingto.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingto.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingto.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  <span>{{movingto.address1}}</span><br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t<div class=\"container title-icon-bar items-moved\" *ngIf=\"unpackingData\">\r\n\t\t<div class=\"col-md-12\">\t\r\n\t\t\r\n\t\t\t<div class=\"\" > \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"job-info row\">\r\n\t\t\t\t\t<div class=\"title col-12 mb-5 text-center\">\r\n\t\t\t\t\t\tItems to be Unpacked\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.appliances  && unpackingData.appliances.length > 0\">\r\n\t\t\t\t\t\t<div class=\"title\">Appliances</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let appliance of unpackingData.appliances\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ appliance.applianceItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ appliance.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.appliances_misc\">{{ unpackingData.appliances_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.appliances_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.appliances && unpackingData.appliances.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.bedRooms  && unpackingData.bedRooms.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Bedrooms</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let bedroom of unpackingData.bedRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ bedroom.bedRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ bedroom.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.bedrooms_misc\">{{ unpackingData.bedrooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.bedrooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.bedRooms && unpackingData.bedRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.livingRooms && unpackingData.livingRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Living Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let living of unpackingData.livingRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ living.livingRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ living.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.livingRooms_misc\">{{ unpackingData.livingRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.livingRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.livingRooms && unpackingData.livingRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.familyRooms && unpackingData.familyRooms.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Family Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let family of unpackingData.familyRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ family.familyRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ family.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.familyRooms_misc\">{{ unpackingData.familyRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.familyRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.familyRooms && unpackingData.familyRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.diningRooms  && unpackingData.diningRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Dining Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let dining of unpackingData.diningRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ dining.diningRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ dining.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.diningRooms_misc\">{{ unpackingData.diningRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.diningRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.diningRooms && unpackingData.diningRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.kitchen && unpackingData.kitchen.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Kitchen</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let kitchen of unpackingData.kitchen\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ kitchen.kitchenItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ kitchen.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.kitchen_misc\">{{ unpackingData.kitchen_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.kitchen_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.kitchen && unpackingData.kitchen.length == 0\">-- Nothing To Move --</div>\t  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.basement && unpackingData.basement.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Basement</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let basement of unpackingData.basement\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ basement.basementItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ basement.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.basement_misc\">{{ unpackingData.basement_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.basement_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.basement && unpackingData.basement.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.garage  && unpackingData.garage.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Garage</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let garage of unpackingData.garage\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ garage.garageItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ garage.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.garage_misc\">{{ unpackingData.garage_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.garage_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.garage && unpackingData.garage.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unpackingData && unpackingData.patioYard  && unpackingData.patioYard.length > 0\" >\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Patio/Yard</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let patioYard of unpackingData.patioYard\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ patioYard.patioYardItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ patioYard.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unpackingData.patioYard_misc\">{{ unpackingData.patioYard_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unpackingData.patioYard_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unpackingData.patioYard && unpackingData.patioYard.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t<div class=\"container title-icon-bar\"  *ngIf=\"loadingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<div class=\"tc-wrap\">Selected Loading Data</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"loadingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\tJob Date : {{loadingData.jobStart | date:'mediumDate'}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"border-class\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"loadingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tFrom Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingfrom of loadingData.moving_from\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span> {{ movingfrom.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingfrom.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingfrom.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingfrom.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingfrom.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingfrom.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  {{movingfrom.address1}}<br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"loadingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tTo Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingto of loadingData.moving_to\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span>  {{ movingto.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingto.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingto.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingto.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingto.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingto.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  <span>{{movingto.address1}}</span><br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t<div class=\"container title-icon-bar items-moved\" *ngIf=\"loadingData\">\r\n\t\t<div class=\"col-md-12\">\t\r\n\t\t\r\n\t\t\t<div class=\"\" > \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"job-info row\">\r\n\t\t\t\t\t<div class=\"title col-12 mb-5 text-center\">\r\n\t\t\t\t\t\tItems to be Loaded\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.appliances  && loadingData.appliances.length > 0\">\r\n\t\t\t\t\t\t<div class=\"title\">Appliances</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let appliance of loadingData.appliances\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ appliance.applianceItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ appliance.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.appliances_misc\">{{ loadingData.appliances_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.appliances_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.appliances && loadingData.appliances.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.bedRooms  && loadingData.bedRooms.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Bedrooms</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let bedroom of loadingData.bedRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ bedroom.bedRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ bedroom.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.bedrooms_misc\">{{ loadingData.bedrooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.bedrooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.bedRooms && loadingData.bedRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.livingRooms && loadingData.livingRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Living Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let living of loadingData.livingRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ living.livingRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ living.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.livingRooms_misc\">{{ loadingData.livingRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.livingRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.livingRooms && loadingData.livingRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.familyRooms && loadingData.familyRooms.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Family Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let family of loadingData.familyRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ family.familyRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ family.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.familyRooms_misc\">{{ loadingData.familyRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.familyRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.familyRooms && loadingData.familyRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.diningRooms  && loadingData.diningRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Dining Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let dining of loadingData.diningRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ dining.diningRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ dining.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.diningRooms_misc\">{{ loadingData.diningRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.diningRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.diningRooms && loadingData.diningRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.kitchen && loadingData.kitchen.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Kitchen</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let kitchen of loadingData.kitchen\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ kitchen.kitchenItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ kitchen.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.kitchen_misc\">{{ loadingData.kitchen_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.kitchen_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.kitchen && loadingData.kitchen.length == 0\">-- Nothing To Move --</div>\t  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.basement && loadingData.basement.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Basement</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let basement of loadingData.basement\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ basement.basementItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ basement.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.basement_misc\">{{ loadingData.basement_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.basement_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.basement && loadingData.basement.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.garage  && loadingData.garage.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Garage</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let garage of loadingData.garage\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ garage.garageItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ garage.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.garage_misc\">{{ loadingData.garage_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.garage_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.garage && loadingData.garage.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"loadingData && loadingData.patioYard  && loadingData.patioYard.length > 0\" >\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Patio/Yard</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let patioYard of loadingData.patioYard\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ patioYard.patioYardItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ patioYard.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"loadingData.patioYard_misc\">{{ loadingData.patioYard_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!loadingData.patioYard_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"loadingData.patioYard && loadingData.patioYard.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\r\n\t\r\n\t\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"unloadingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<div class=\"tc-wrap\">Selected Unloading Data</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"container title-icon-bar\" *ngIf=\"unloadingData\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<div class=\"job-info\">\r\n\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\tJob Date : {{unloadingData.jobStart | date:'mediumDate'}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"border-class\"></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"unloadingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tFrom Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingfrom of unloadingData.moving_from\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span> {{ movingfrom.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingfrom.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingfrom.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingfrom.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingfrom.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingfrom.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  {{movingfrom.address1}}<br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\" *ngIf=\"unloadingData\" >\r\n\t\t\t\t\t\t\t\t<div class=\"title\">\r\n\t\t\t\t\t\t\t\t\tTo Location\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngFor=\"let movingto of unloadingData.moving_to\">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Moving Type </span>  {{ movingto.movingType }} <br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Floor </span>  {{ movingto.floor }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">State </span>  {{ movingto.state }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">County </span>  {{movingto.county | titlecase}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">City </span>  {{movingto.city | titlecase }}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p class=\"data_row\"><span class=\"loc_lable\">Zipcode </span>  {{movingto.zipcode}}<br /></p>\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"bidStatus == 1\"  class=\"data_row\"><span class=\"loc_lable\">Address </span>  <span>{{movingto.address1}}</span><br /></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\t\r\n\t\t</div>\t\r\n\t</div>\r\n\t<div class=\"container title-icon-bar items-moved\" *ngIf=\"unloadingData\">\r\n\t\t<div class=\"col-md-12\">\t\r\n\t\t\r\n\t\t\t<div class=\"\" > \r\n\t\t\t\t\r\n\t\t\t\t<div class=\"job-info row\">\r\n\t\t\t\t\t<div class=\"title col-12 mb-5 text-center\">\r\n\t\t\t\t\t\tItems to be Unloaded\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.appliances  && unloadingData.appliances.length > 0\">\r\n\t\t\t\t\t\t<div class=\"title\">Appliances</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let appliance of unloadingData.appliances\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ appliance.applianceItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ appliance.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.appliances_misc\">{{ unloadingData.appliances_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.appliances_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.appliances && unloadingData.appliances.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.bedRooms  && unloadingData.bedRooms.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Bedrooms</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let bedroom of unloadingData.bedRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ bedroom.bedRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ bedroom.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.bedrooms_misc\">{{ unloadingData.bedrooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.bedrooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.bedRooms && unloadingData.bedRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.livingRooms && unloadingData.livingRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Living Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let living of unloadingData.livingRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ living.livingRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ living.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.livingRooms_misc\">{{ unloadingData.livingRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.livingRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.livingRooms && unloadingData.livingRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.familyRooms && unloadingData.familyRooms.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Family Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let family of unloadingData.familyRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ family.familyRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ family.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.familyRooms_misc\">{{ unloadingData.familyRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.familyRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.familyRooms && unloadingData.familyRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.diningRooms  && unloadingData.diningRooms.length > 0\">\t\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Dining Room</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let dining of unloadingData.diningRooms\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ dining.diningRoomsItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ dining.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.diningRooms_misc\">{{ unloadingData.diningRooms_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.diningRooms_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.diningRooms && unloadingData.diningRooms.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.kitchen && unloadingData.kitchen.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Kitchen</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let kitchen of unloadingData.kitchen\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ kitchen.kitchenItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ kitchen.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.kitchen_misc\">{{ unloadingData.kitchen_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.kitchen_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.kitchen && unloadingData.kitchen.length == 0\">-- Nothing To Move --</div>\t  \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.basement && unloadingData.basement.length > 0\">\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Basement</div>\r\n\t\t\t\t\t\t<div class=\"desc\" *ngFor=\"let basement of unloadingData.basement\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ basement.basementItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ basement.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.basement_misc\">{{ unloadingData.basement_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.basement_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.basement && unloadingData.basement.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.garage  && unloadingData.garage.length > 0\">\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Garage</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let garage of unloadingData.garage\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ garage.garageItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ garage.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.garage_misc\">{{ unloadingData.garage_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.garage_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.garage && unloadingData.garage.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-4\" *ngIf=\"unloadingData && unloadingData.patioYard  && unloadingData.patioYard.length > 0\" >\t  \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"title\">Patio/Yard</div>\r\n\t\t\t\t\t\t<div class=\"desc\"  *ngFor=\"let patioYard of unloadingData.patioYard\">\r\n\t\t\t\t\t\t\t<span class=\"itemname\">{{ patioYard.patioYardItem.name }}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemcount\">{{ patioYard.items }}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t<b>Instructions : </b>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"unloadingData.patioYard_misc\">{{ unloadingData.patioYard_misc}}</span>\r\n\t\t\t\t\t\t\t<span class=\"itemname\" *ngIf=\"!unloadingData.patioYard_misc\">--- Nothing ---</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"unloadingData.patioYard && unloadingData.patioYard.length == 0\">-- Nothing To Move --</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n\t\t\r\n\t\t\r\n"

/***/ }),

/***/ "./src/app/admin/views/jobs/list.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/views/jobs/list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Plans\r\n        </div>\r\n        <div class=\"form-group filter-bar\">\r\n            <div class=\"col-3 pull-right\">\r\n\r\n              <form [formGroup]=\"angForm\" class=\"form-horizontal\" novalidate>\r\n                  <label class=\"col-form-label\" for=\"text-input\">Select Jobs</label>\r\n                <select  id=\"selectedjobs\"  class=\"form-control getstate\" formControlName=\"selectedjobs\" (change)= \"showjobs($event)\">\r\n                  <option value=\"\" disabled selected=\"selected\">Please Select Job</option>\r\n                  <option value=\"0\">Created</option>\r\n                  <option value=\"2\">Completed</option>\r\n                  <option value=\"1\">Processing</option>\r\n                </select>\r\n              </form>\r\n          </div>\r\n        </div> \r\n        <div class=\"card-body\">\r\n          <table class=\"table table-striped table-condition\">\r\n            <thead>\r\n              <tr>\r\n                <th>Job ID</th>\r\n                <th>Created Date</th>\r\n                <th>Job Status</th>\r\n                <th>Action</th>    \r\n              </tr>\r\n            </thead>\r\n            <tbody class=\"warning-msg\" *ngIf=\"!services\">\r\n                <p>No jobs Found</p>\r\n            </tbody>\r\n            <tbody *ngIf=\"services && services.length > 0\">\r\n                \r\n               \r\n                  <tr *ngFor=\"let service of services\">\r\n                    <td>{{service.jobId}}</td>\r\n                    <td>{{service.created_at | date:'mediumDate'}}</td>\r\n                    <td *ngIf=\"service.jobStatus == '0'\">Created</td> \r\n                    <td *ngIf=\"service.jobStatus == '2'\">Completed</td> \r\n                    <td *ngIf=\"service.jobStatus == '1'\">Failed</td> \r\n                    <td><button class=\"btn btn-primary\" (click)=\"openDialog(service._id);\"> Show Details</button></td>\r\n                  </tr>\r\n                \r\n            </tbody>\r\n          </table>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n<!-- <a (click)=\"openDialog(jobs._id)\" href=\"javascript:void(0)\" ><i class=\"fas fa-trash-alt\"></i> Delete</a> -->"

/***/ }),

/***/ "./src/app/admin/views/jobs/list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/views/jobs/list.component.ts ***!
  \****************************************************/
/*! exports provided: ListComponent, DialogOverviewExampleDialogAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogAdmin", function() { return DialogOverviewExampleDialogAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ListComponent = /** @class */ (function () {
    function ListComponent(http, service, fb, router, dialog) {
        this.http = http;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.dialog = dialog;
        this.dtOptions = {};
        this.show_dialog = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.LoginForm();
    }
    ListComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            selectedjobs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    };
    ListComponent.prototype.openDialog = function (jobId) {
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogAdmin, {
            width: '1000px',
            data: { jobID: jobId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Success') {
                // this._flashMessagesService.show('job has been deleted successfully', { cssClass: 'alert-success',timeout:6000});
            }
        });
    };
    ListComponent.prototype.showjobs = function (event) {
        var _this = this;
        this.result = event.target.value;
        if (this.result != undefined && this.result != 'undefined') {
            this.service.getspecificjobs(this.result).subscribe(function (res) {
                console.log(res);
                if (res.jobs) {
                    _this.services = res.jobs;
                }
                else {
                    _this.services = '';
                }
            });
        }
        else {
            window.alert('Please select');
        }
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            columnDefs: [{ orderable: false, targets: [3] }]
        };
        var array = [];
        // Call gertuser service function 
        this.service.getjobs().subscribe(function (res) {
            console.log(res);
            _this.services = res.job;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/views/jobs/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ListComponent);
    return ListComponent;
}());

var DialogOverviewExampleDialogAdmin = /** @class */ (function () {
    function DialogOverviewExampleDialogAdmin(dialogRef, data, fb, service) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.jobID = data.jobID;
        //http://18.223.97.46:3001/api/user/editjobs/5c9a0c509b7238289d9f8432
        this.service.getparticularjobs(this.jobID).subscribe(function (res) {
            console.log(res);
            _this.jobData = res.job;
            if (res.job.packing.length > 0) {
                _this.movingData = res.job.moving[0];
            }
            if (res.job.packing.length > 0) {
                _this.packingData = res.job.packing[0];
            }
            if (res.job.packing.length > 0) {
                _this.unpackingData = res.job.unpacking[0];
            }
            if (res.job.packing.length > 0) {
                _this.loadingData = res.job.loading[0];
            }
            if (res.job.packing.length > 0) {
                _this.unloadingData = res.job.unloading[0];
            }
            _this.button_text = 'View More';
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    }
    DialogOverviewExampleDialogAdmin.prototype.onNoClick = function () {
        this.dialogRef.close('ignore');
    };
    DialogOverviewExampleDialogAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/admin/views/jobs/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example-dialog.css */ "./src/app/admin/views/jobs/dialog-overview-example-dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], DialogOverviewExampleDialogAdmin);
    return DialogOverviewExampleDialogAdmin;
}());



/***/ }),

/***/ "./src/app/admin/views/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content_wrapper, .form-wrapper {\r\n    min-height: calc(100vh);\r\n}\r\n.form-main .first_form {\r\n    max-width: 450px;\r\n    margin: 0px auto;\r\n    padding: 30px 30px;\r\n}\r\n.form-inner {\r\n    width: 100%;\r\n    max-width: 530px;\r\n}\t\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRfd3JhcHBlciwgLmZvcm0td3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxufVxyXG4uZm9ybS1tYWluIC5maXJzdF9mb3JtIHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xyXG59XHJcbi5mb3JtLWlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MzBweDtcclxufVx0Il19 */"

/***/ }),

/***/ "./src/app/admin/views/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/views/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper signin-form\">\r\n\t<div class=\"form-inner\">\r\n\t\t<div class=\"form-header\">Admin Login</div> \r\n\t\t<form class=\"form-main\" [formGroup]=\"angForm\" novalidate>\r\n\t\t\t<div class=\"first_form\">\r\n\t\t\t\t<flash-messages></flash-messages>   \r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"sr-only\">User email</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email address\"  formControlName=\"email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors}\" #email  />\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.required\">\r\n\t\t\t\t\t\t\tEmail is required.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"angForm.controls['email'].errors.pattern\">\r\n\t\t\t\t\t\t\tPlease enter Valid Email.  \r\n\t\t\t\t\t\t</div>\t \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"sr-only\">Password :</label>\r\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors}\" #password  />\r\n\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div *ngIf=\"angForm.controls['password'].errors.required\">\r\n\t\t\t\t\t\t\tPassword is required.\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<button (ngSubmit)=\"LoginUser(email.value, password.value)\" (click)=\"LoginUser(email.value, password.value)\"  class=\"btn btn-lg btn-primary\">LOGIN</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n     </div>\r\n </div>\r\n \r\n \r\n"

/***/ }),

/***/ "./src/app/admin/views/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/views/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(_flashMessagesService, route, router, adminservice, fb) {
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.router = router;
        this.adminservice = adminservice;
        this.fb = fb;
        this.title = 'Login User';
        this.submitted = false;
        this.result = "";
        this.LoginForm();
    }
    AdminLoginComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(AdminLoginComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdminLoginComponent.prototype.LoginUser = function (email, password) {
        var _this = this;
        this.submitted = true;
        if (this.angForm.invalid) {
            return;
        }
        else {
            this.adminservice.login_user(email, password).subscribe(function (result) {
                if (result.success) {
                    localStorage.setItem('admin_token', result.admin_token);
                    _this.router.navigate(['/admin/dashboard']);
                }
                else {
                    _this._flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 3000 });
                }
                if (result.success) {
                }
            });
        }
    };
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/partner/dialog-overview-example-dialog.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/views/partner/dialog-overview-example-dialog.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container{\r\n\tpadding:35px !important;\r\n}\r\n.mat-raised-button.mat-primary{\r\n\tbackground-color:#1695C2;\r\n}\r\n.mat-dialog-actions{padding:25px 0;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlld3MvcGFydG5lci9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyx3QkFBd0I7QUFDekI7QUFFQSxvQkFBb0IsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlld3MvcGFydG5lci9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG5cdHBhZGRpbmc6MzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxNjk1QzI7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWFjdGlvbnN7cGFkZGluZzoyNXB4IDA7fSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/views/partner/dialog-overview-example-dialog.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/views/partner/dialog-overview-example-dialog.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-modal-wrap\" mat-dialog-content>\r\n\t\t<div mat-dialog-actions>\r\n\t\t\t\t<p mat-raised-button color=\"warn\" (click)=\"onNoClick()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></p>\r\n\t\t\t</div>\r\n\t\t<table class=\"table table-striped\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t<th>Customer</th>\r\n\t\t\t\t<th>customer Email</th>\r\n\t\t\t\t<th> Amount  Paid</th>\r\n\t\t\t\t<th>Status</th>\r\n\t\t\t\t<th>Date</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let service of jobData\">\t\r\n\t\t\t\t\t<td>{{service.customer}}</td>\r\n\t\t\t\t\t<td>{{service.customer_email}}</td>\r\n\t\t\t\t\t<td>{{service.amount_paid / 100}}</td> \r\n\t\t\t\t\t<td *ngIf=\"service.status == 'paid'\">Success</td> \r\n\t\t\t\t\t<td *ngIf=\"service.status != 'paid'\">Failed</td> \r\n\t\t\t\t\t<td>{{service.date  * 1000 | date: 'medium'}}</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/views/partner/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/views/partner/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Users here in partner\r\n        </div>\r\n        <div class=\"card-body\">\r\n         <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n               <tr *ngFor=\"let user of users\">\r\n\t\t\t\t  <td>{{ user.firstname }} {{ user.lastname }}</td>\r\n\t\t\t\t  <td>{{ user.email }}</td>\r\n\t\t\t\t  <td>{{ user.phone }}</td>\r\n          <td>\r\n            <a [routerLink]=\"['/admin/partner/edit', user._id]\" class=\"btn btn-primary\">Edit</a>\r\n            <button (click)=\"openDialog(user._id);\" class=\"btn btn-primary\">Show Invoices</button>\r\n          </td>\r\n\t\t\t\t  <!--td><button (click)=\"deleteUser(user._id)\"  class=\"btn btn-danger\">Delete</button></td-->\r\n\t\t\t  </tr>\r\n   \r\n            </tbody>\r\n          </table>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/views/partner/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/partner/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent, DialogOverviewExampleDialogPartnerAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogPartnerAdmin", function() { return DialogOverviewExampleDialogPartnerAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var ListComponent = /** @class */ (function () {
    function ListComponent(http, service, router, dialog) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ListComponent.prototype.openDialog = function (jobId) {
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogPartnerAdmin, {
            width: '1000px',
            data: { jobID: jobId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'Success') {
                // this._flashMessagesService.show('job has been deleted successfully', { cssClass: 'alert-success',timeout:6000});
            }
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            columnDefs: [{ orderable: false, targets: [3] }]
        };
        // Call gertuser service function 
        var user = 'partner';
        this.service.getUsers(user).subscribe(function (res) {
            console.log(res);
            _this.users = res;
            _this.dtTrigger.next();
            // console.log(this.users);
        }, function (err) {
            console.log(err);
            //   this.router.navigate(['login']);
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/views/partner/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ListComponent);
    return ListComponent;
}());

var DialogOverviewExampleDialogPartnerAdmin = /** @class */ (function () {
    function DialogOverviewExampleDialogPartnerAdmin(dialogRef, data, fb, service) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.service = service;
        this.jobID = data.jobID;
        this.service.getinvoices(this.jobID).subscribe(function (res) {
            console.log(res);
            _this.jobData = res.data.data;
            _this.button_text = 'View More';
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    }
    DialogOverviewExampleDialogPartnerAdmin.prototype.onNoClick = function () {
        this.dialogRef.close('ignore');
    };
    DialogOverviewExampleDialogPartnerAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/admin/views/partner/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example-dialog.css */ "./src/app/admin/views/partner/dialog-overview-example-dialog.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], DialogOverviewExampleDialogPartnerAdmin);
    return DialogOverviewExampleDialogPartnerAdmin;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(lBar, router, userservice) {
        var _this = this;
        this.lBar = lBar;
        this.router = router;
        this.userservice = userservice;
        this.localToken = '';
        this.notifications = '';
        this.notificationCount = '';
        this.router.events.subscribe(function (event) {
            _this.loadingBarInterceptor(event);
        });
        /* this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.getNotificationCount();
            };
        }); */
    }
    AppComponent.prototype.loadingBarInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.lBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.lBar.complete();
        }
    };
    /* getNotificationCount(){
        let token = localStorage.getItem('login_token');
        if(token){
            this.userservice.getNotificationCountForUser().subscribe(result => {
                this.notificationCount = result.count;
            });
        }
    } */
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (localStorage.getItem('login_token')) {
                return true;
            }
            else {
            }
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: ' <router-outlet><ng2-slim-loading-bar color="#1695C2"></ng2-slim-loading-bar></router-outlet>'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_4__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var stripe_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stripe-angular */ "./node_modules/stripe-angular/index.js");
/* harmony import */ var stripe_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(stripe_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _admin_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/views/login/login.component */ "./src/app/admin/views/login/login.component.ts");
/* harmony import */ var _admin_views_error_404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/views/error/404.component */ "./src/app/admin/views/error/404.component.ts");
/* harmony import */ var _admin_views_error_500_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/views/error/500.component */ "./src/app/admin/views/error/500.component.ts");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm5/ngx-stripe.js");
/* harmony import */ var _admin_views_jobs_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/views/jobs/list.component */ "./src/app/admin/views/jobs/list.component.ts");
/* harmony import */ var _admin_views_partner_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/views/partner/list.component */ "./src/app/admin/views/partner/list.component.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");














var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};

// Import containers



// import { EditComponent } from './admin/views/services/edit.component';
//Frontend





//import { HeaderComponent } from './frontend/views/header/header.component';
//import { FooterComponent } from './frontend/views/footer/footer.component';
var APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_15__["FrontendLayoutComponent"]
];

// Import routing module

// Import 3rd party components

// Services




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_22__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_22__["AppBreadcrumbModule"].forRoot(),
                _coreui_angular__WEBPACK_IMPORTED_MODULE_22__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_22__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_22__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_24__["BsDropdownModule"].forRoot(),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_23__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_stripe__WEBPACK_IMPORTED_MODULE_19__["NgxStripeModule"].forRoot('pk_test_oUX3CoG5KpQL5KxzgxwE6rQd'),
                stripe_angular__WEBPACK_IMPORTED_MODULE_8__["Module"].forRoot(),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_11__["SlimLoadingBarModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ].concat(APP_CONTAINERS, [
                _admin_views_error_404_component__WEBPACK_IMPORTED_MODULE_17__["P404Component"],
                _admin_views_error_500_component__WEBPACK_IMPORTED_MODULE_18__["P500Component"],
                _admin_views_login_login_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"],
                _admin_views_partner_list_component__WEBPACK_IMPORTED_MODULE_21__["DialogOverviewExampleDialogPartnerAdmin"],
                _admin_views_jobs_list_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewExampleDialogAdmin"]
            ]),
            entryComponents: [_admin_views_partner_list_component__WEBPACK_IMPORTED_MODULE_21__["DialogOverviewExampleDialogPartnerAdmin"], _admin_views_jobs_list_component__WEBPACK_IMPORTED_MODULE_20__["DialogOverviewExampleDialogAdmin"]],
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PathLocationStrategy"]
                }, _services_user_service__WEBPACK_IMPORTED_MODULE_25__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_27__["JobService"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_28__["AdminService"], _globals__WEBPACK_IMPORTED_MODULE_10__["Globals"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _admin_views_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/views/login/login.component */ "./src/app/admin/views/login/login.component.ts");
/* harmony import */ var _admin_views_error_404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/views/error/404.component */ "./src/app/admin/views/error/404.component.ts");



// Import Containers




var routes = [
    //{ path: '', component: IndexComponent},
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["FrontendLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './frontend/views/users/users.module#UsersModule'
            },
            {
                path: '',
                loadChildren: './frontend/views/jobs/jobs.module#JobsModule'
            },
        ]
        /* 	children: [
               { path: '', 						component: IndexComponent},
               { path: 'login', 					component: LoginComponent},
               { path: 'register', 				component: RegisterComponent},
               { path: 'profile', 					component: ProfileComponent,canActivate: [AuthGuard]},
               { path: 'edit-profile', 			component: EditProfileComponent,canActivate: [AuthGuard]},
               { path: 'dashboard', 				component: DashboardComponent,canActivate: [AuthGuard]},
               { path: 'partner-profile/:id', 		component: PartnerProfileComponent,canActivate: [AuthGuard]},
               { path: 'user-info/:id/:jobId', 	component: UserProfileComponent,canActivate: [AuthGuard]},
               { path: 'verify/:verifycode', 		component: VerifyComponent},
               { path: 'forgotpassword', 			component: ForgotpasswordComponent},
               { path: 'create-job', 				component: CreateJobComponent,canActivate: [AuthGuard]},
               { path: 'edit-job/:jobid', 			component: EditJobComponent,canActivate: [AuthGuard]},
               { path: 'make-bid/:jobid', 			component: MakeBidComponent,canActivate: [AuthGuard]},
               { path: 'complete-job/:jobid/:partnerid',component: CompleteJobComponent,canActivate: [AuthGuard]},
               { path: 'view-bid/:jobid', 			component: ViewBidomponent,canActivate: [AuthGuard]},
               { path: 'detail-job/:jobid', 		component: DetailsJobComponent,canActivate: [AuthGuard]},
               { path: 'view-job/:jobid', 			component: DetailsJobPartnerComponent,canActivate: [AuthGuard]},
               { path: 'jobs', 					component: ListingJobComponent,canActivate: [AuthGuard]},
               { path: 'alljobs', 					component: ListingPartnersJobComponent,canActivate: [AuthGuard]},
               { path: 'change-password', 			component: ChangepasswordComponent},
               { path: 'purchase-plans', 			component: PaymentComponent,canActivate: [AuthGuard]},
               { path: 'resetpassword/:verifycode',component: ResetpasswordComponent},
               { path: 'won-bids', 				component: WonBidsComponent,canActivate: [AuthGuard]},
               { path: 'lost-bids', 				component: LostBidsComponent,canActivate: [AuthGuard]},
               { path: 'completed-jobs', 			component: CompletedJobsComponent,canActivate: [AuthGuard]},
               { path: 'user-completed-jobs', 		component: UsersCompletedJobsComponent,canActivate: [AuthGuard]},
               { path: 'user-in-progress-jobs', 	component: UsersInProgressJobsComponent,canActivate: [AuthGuard]},
               { path: 'open-bids', 				component: OpenBidsComponent,canActivate: [AuthGuard]},
               { path: 'edit-feedback/:reviewid', 	component: EditFeedbackComponent,canActivate: [AuthGuard]},
               { path: 'view-all-notifications', 	component: ViewAllNotificationsComponent,canActivate: [AuthGuard]},
           ]*/
    },
    /* {
        path: '404',
        component: P404Component,
        data: {
          title: 'Page 404'
        }
   },
   {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
   }, */
    //  Admin Routing 
    {
        path: 'admin',
        component: _admin_views_login_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'admin/users',
                loadChildren: './admin/views/users/users.module#UsersModule'
            },
            {
                path: 'admin/partner',
                loadChildren: './admin/views/partner/users.module#UsersModule'
            },
            {
                path: 'admin/plan',
                loadChildren: './admin/views/plans/plan.module#PlanModule'
            },
            {
                path: 'admin/services',
                loadChildren: './admin/views/services/services.module#ServicesModule'
            },
            {
                path: 'admin/jobs',
                loadChildren: './admin/views/jobs/jobs.module#JobsModule'
            },
            {
                path: 'admin/dashboard',
                loadChildren: './admin/views/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    { path: '**', component: _admin_views_error_404_component__WEBPACK_IMPORTED_MODULE_5__["P404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/admin-layout/admin-layout.component.css":
/*!********************************************************************!*\
  !*** ./src/app/containers/admin-layout/admin-layout.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\r\n   height: 65px;\r\n}\r\n.app-header {\r\n    flex: 0 0 65px;\r\n}\r\n@media (min-width: 992px){\r\n\t:host /deep/ .header-fixed .app-body {\r\n\t\tmargin-top: 65px;\r\n\t}\r\n\t.app-body {\r\n\t\tmargin-top: 65px;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xyXG4gICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLmFwcC1oZWFkZXIge1xyXG4gICAgZmxleDogMCAwIDY1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcblx0Omhvc3QgL2RlZXAvIC5oZWFkZXItZml4ZWQgLmFwcC1ib2R5IHtcclxuXHRcdG1hcmdpbi10b3A6IDY1cHg7XHJcblx0fVxyXG5cdC5hcHAtYm9keSB7XHJcblx0XHRtYXJnaW4tdG9wOiA2NXB4O1xyXG5cdH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/admin-layout/admin-layout.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/containers/admin-layout/admin-layout.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.svg', width: 89, height: 45, alt: 'Movers'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/logo.svg', width: 50, height: 40, alt: 'Movers'}\"\r\n  [sidebarToggler]=\"'lg'\"\r\n  [asideMenuToggler]=\"'lg'\"\r\n  [navbarBrandRouterLink]=\"'/admin/dashboard'\"\r\n  >\r\n \r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n   \r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/download.png\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n         <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n\t\t <a (click)=\"logout()\" href=\"javascript:void();\"  class=\"dropdown-item\"  routerLinkActive=\"active\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n\t\t\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\r\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"sidebarMinimized\"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <!-- breaking change 'cui-breadcrumb' -->\r\n    <cui-breadcrumb>\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\"></li>\r\n    </cui-breadcrumb>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.container-fluid -->\r\n  </main>\r\n</div>\r\n<app-footer>\r\n  <span><a routerLink=\"/admin/dashboard\">Movers</a> &copy; 2019</span>\r\n  <span class=\"ml-auto\">Powered by <a routerLink=\"/admin/dashboard\">Movers and Packers</a></span>\r\n</app-footer>\r\n"

/***/ }),

/***/ "./src/app/containers/admin-layout/admin-layout.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/admin-layout/admin-layout.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_admin_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/_admin_nav */ "./src/app/admin/_admin_nav.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, _document) {
        var _this = this;
        this.router = router;
        this.navItems = _admin_admin_nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        this.sidebarMinimized = true;
        // if admin not logged in then redirect to the admin login 
        var token = localStorage.getItem('admin_token');
        if (token == '') {
            this.router.navigate(['admin']);
        }
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    // Logout 
    AdminLayoutComponent.prototype.logout = function () {
        localStorage.setItem('admin_token', '');
        this.router.navigate(['/admin']);
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/containers/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.css */ "./src/app/containers/admin-layout/admin-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/admin-layout/index.ts":
/*!**************************************************!*\
  !*** ./src/app/containers/admin-layout/index.ts ***!
  \**************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout.component */ "./src/app/containers/admin-layout/admin-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return _admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"]; });




/***/ }),

/***/ "./src/app/containers/frontend-layout/frontend-layout.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/containers/frontend-layout/frontend-layout.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .navbar-light {\r\n  overflow: hidden;\r\n}\r\n */\r\n.navbar-light a {\r\n  float: left;\r\n}\r\n.bottom-line span{\r\n    font-size: 14px;\r\n    color: #fff;\r\n    line-height: 24px;\r\n    font-weight: bold;\r\n}\r\n.bottom-line span a{color:#1690be}\r\n.fl_left{float:left}\r\n.fl_right{float:right}\r\n.dropdown,.dropdown-note {\r\n  float: left;\r\n}\r\n.dropdown-note{\r\n\tposition:relative;\r\n}\r\n.dropdown .dropbtn {\r\n font-size: inherit;\r\nborder: none;\r\noutline: none;\r\npadding: 8px 5px;\r\nbackground-color: inherit;\r\nmargin: 0;\r\ncolor: #203767;\r\n}\r\n/* .navbar-light a:hover, .dropdown:hover .dropbtn {\r\n  background-color: #fff;\r\n} */\r\n.dropdown-content{\r\n    display: none;\r\n    position: absolute;\r\n    min-width: 200px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    background: #fff;\r\n    top: 100%;\r\n   right:0;\r\n}\r\n.dropdown-note {\r\n    margin-left: 12px;\r\n}\r\n.dropdown-content-note {\r\n    position: absolute;\r\n    min-width: 170px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    background: #fff;\r\n    top: 100%;\r\n    \r\n    right: 0;\r\n\ttransition-delay: .4s;\r\n\t -webkit-transition: height .5s ease;\r\n        -webkit-transition-delay: .4s;\r\n}\r\n.notification.dropdown-toggle::after {\r\n    display: none;\r\n}\r\n.navbar-nav .dropdown-menu {\r\n    max-width: 245px;\r\n    min-width: 245px;\r\n}\r\n.dropdown-item {\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n}\r\n.dropdown-content a,.dropdown-content-note a {\r\n  float: none;\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n  text-align: left;\r\n  border-bottom:1px dashed #ccc;\r\n}\r\n/* .dropdown-note:hover .dropdown-content {\r\n\tdisplay: none;\r\n}\t */\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n.dropdown-item.active, .dropdown-item:active {\r\n    color: #fff !important;\r\n    text-decoration: none;\r\n    background-color: #0096c5 !important;\r\n}\r\n.cta-btn a:hover,.cta-btn a.active {\r\n\tbackground:#1695C2;\r\n\tcolor:#fff !important;\r\n}\r\n.cta-btn a:hover .fas,.cta-btn a.active .fas{\r\n\tcolor:#fff !important;\t\r\n}\r\n.badge {\r\n\tposition: relative;\r\n\ttop: -10px;\r\n\tright: -10px;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 50%;\r\n\tbackground: red;\r\n\tcolor: white;\r\n}\r\nspan.fa-bell {\r\n  display: block;\r\n   \r\n  padding: 10px;\r\n\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\nmark {\r\n  border-radius: 20px;   \r\n  border: 2px solid #FFF;\r\n  width: 20px;\r\n  height: 20px;  \r\n  background-color: #FF6B6B;\r\n  position: absolute;\r\n  top: -5px;\r\n  left: -10px;\r\n  font-size: 10px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 400;\r\n  color: #FFF;\r\n  font-weight: 700;\r\n}\r\na mark.big {\r\n  width: 22px;\r\n  height: 22px;\r\n  border-radius: 20px;\r\n  line-height: 15px;  \r\n  font-size: 12px;  \r\n  top: -1px;\r\n  left: 20px;\r\n}\r\na > span > mark {\r\n  -webkit-animation-name: bounceIn;\r\n          animation-name: bounceIn;\r\n  transform-origin: center bottom;\r\n  -webkit-animation-duration: 1s;\r\n          animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;   \r\n-webkit-animation-iteration-count: 1;\r\n        animation-iteration-count: 1;  \r\n}\r\na > span > mark.swing {\r\n  transform-origin: top center;\r\n  -webkit-animation-name: swing;\r\n          animation-name: swing;\r\n}\r\n.username_setting{\r\n\tborder: 1px solid #0096c5;\r\n    border-radius: 45%;\r\n    padding: 8px 15px;\r\n    margin: 2px 10px;\r\n    background: #0096c5;\r\n    color: #fff;\r\n}\r\n.username_setting:hover{\r\n\tbackground: #ffffff;\r\n\tcolor: #0096c5;\r\n}\r\n.logoClass{height:64px}\r\n@media (max-width: 768px){\r\n\t.logoClass{height:48px}\r\n}\r\n@media (max-width: 575.98px){\r\n\t.logoClass{height:32px}\r\n\t.dropdown[_ngcontent-c0] .dropbtn[_ngcontent-c0]{\r\n\t\tfont-size:12px\r\n\t}\r\n\t\r\n\t:host /deep/ .dropdown[_ngcontent-nia-c0] .dropbtn[_ngcontent-nia-c0]{\r\n\t\tfont-size:12px\r\n\t}\r\n\t.mat-horizontal-stepper-header-container{display:none}\r\n\t\r\n\t.dropdown .dropbtn {\r\n\t\tfont-size:12px\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9mcm9udGVuZC1sYXlvdXQvZnJvbnRlbmQtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7RUFDRSxXQUFXO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDLFNBQVMsVUFBVTtBQUNuQixVQUFVLFdBQVc7QUFDckI7RUFDRSxXQUFXO0FBQ2I7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CLFlBQVk7QUFDWixhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsY0FBYztBQUNkO0FBRUE7O0dBRUc7QUFFSDtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7R0FDVixPQUFPO0FBQ1Y7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTOztJQUVULFFBQVE7Q0FDWCxxQkFBcUI7RUFDcEIsbUNBQW1DO1FBQzdCLDZCQUE2QjtBQUNyQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9CO0FBQ0E7O0lBRUk7QUFDSjtFQUNFLGNBQWM7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0NBQW9DO0FBQ3hDO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7QUFDYjtBQUNBO0VBQ0UsY0FBYzs7RUFFZCxhQUFhOztFQUViLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFHRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUdaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFHeEIsK0JBQStCO0VBQ3ZDLDhCQUE4QjtVQUN0QixzQkFBc0I7RUFDOUIsaUNBQWlDO1VBQ3pCLHlCQUF5QjtBQUNuQyxvQ0FBb0M7UUFDNUIsNEJBQTRCO0FBQ3BDO0FBQ0E7RUFHVSw0QkFBNEI7RUFDcEMsNkJBQTZCO1VBQ3JCLHFCQUFxQjtBQUMvQjtBQUNBO0NBQ0MseUJBQXlCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7QUFDQSxXQUFXLFdBQVc7QUFDdEI7Q0FDQyxXQUFXLFdBQVc7QUFDdkI7QUFDQTtDQUNDLFdBQVcsV0FBVztDQUN0QjtFQUNDO0NBQ0Q7O0NBRUE7RUFDQztDQUNEO0NBQ0EseUNBQXlDLFlBQVk7O0NBRXJEO0VBQ0M7Q0FDRDtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9mcm9udGVuZC1sYXlvdXQvZnJvbnRlbmQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2YmFyLWxpZ2h0IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiAqL1xyXG4ubmF2YmFyLWxpZ2h0IGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5ib3R0b20tbGluZSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib3R0b20tbGluZSBzcGFuIGF7Y29sb3I6IzE2OTBiZX1cclxuLmZsX2xlZnR7ZmxvYXQ6bGVmdH1cclxuLmZsX3JpZ2h0e2Zsb2F0OnJpZ2h0fVxyXG4uZHJvcGRvd24sLmRyb3Bkb3duLW5vdGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5kcm9wZG93bi1ub3Rle1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiBmb250LXNpemU6IGluaGVyaXQ7XHJcbmJvcmRlcjogbm9uZTtcclxub3V0bGluZTogbm9uZTtcclxucGFkZGluZzogOHB4IDVweDtcclxuYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxubWFyZ2luOiAwO1xyXG5jb2xvcjogIzIwMzc2NztcclxufVxyXG5cclxuLyogLm5hdmJhci1saWdodCBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi5kcm9wZG93bi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICByaWdodDowO1xyXG59XHJcbi5kcm9wZG93bi1ub3RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50LW5vdGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBcclxuICAgIHJpZ2h0OiAwO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IC40cztcclxuXHQgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgLjVzIGVhc2U7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuLm5vdGlmaWNhdGlvbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWF4LXdpZHRoOiAyNDVweDtcclxuICAgIG1pbi13aWR0aDogMjQ1cHg7XHJcbn1cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSwuZHJvcGRvd24tY29udGVudC1ub3RlIGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggZGFzaGVkICNjY2M7XHJcbn1cclxuLyogLmRyb3Bkb3duLW5vdGU6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cdCAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NmM1ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN0YS1idG4gYTpob3ZlciwuY3RhLWJ0biBhLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDojMTY5NUMyO1xyXG5cdGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uY3RhLWJ0biBhOmhvdmVyIC5mYXMsLmN0YS1idG4gYS5hY3RpdmUgLmZhc3tcclxuXHRjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHRcclxufVxyXG4uYmFkZ2Uge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IC0xMHB4O1xyXG5cdHJpZ2h0OiAtMTBweDtcclxuXHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogcmVkO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5zcGFuLmZhLWJlbGwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYXJrIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7ICAgXHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QjZCO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7XHJcbiAgbGVmdDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuYSBtYXJrLmJpZyB7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4OyAgXHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4OyAgXHJcbiAgZm9udC1zaXplOiAxMnB4OyAgXHJcbiAgdG9wOiAtMXB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuYSA+IHNwYW4gPiBtYXJrIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XHJcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7ICAgXHJcbi13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOyAgXHJcbn1cclxuYSA+IHNwYW4gPiBtYXJrLnN3aW5nIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzd2luZztcclxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzd2luZztcclxufVxyXG4udXNlcm5hbWVfc2V0dGluZ3tcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDA5NmM1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDUlO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDJweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTZjNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi51c2VybmFtZV9zZXR0aW5nOmhvdmVye1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0Y29sb3I6ICMwMDk2YzU7XHJcbn1cclxuLmxvZ29DbGFzc3toZWlnaHQ6NjRweH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuXHQubG9nb0NsYXNze2hlaWdodDo0OHB4fVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCl7XHJcblx0LmxvZ29DbGFzc3toZWlnaHQ6MzJweH1cclxuXHQuZHJvcGRvd25bX25nY29udGVudC1jMF0gLmRyb3BidG5bX25nY29udGVudC1jMF17XHJcblx0XHRmb250LXNpemU6MTJweFxyXG5cdH1cclxuXHRcclxuXHQ6aG9zdCAvZGVlcC8gLmRyb3Bkb3duW19uZ2NvbnRlbnQtbmlhLWMwXSAuZHJvcGJ0bltfbmdjb250ZW50LW5pYS1jMF17XHJcblx0XHRmb250LXNpemU6MTJweFxyXG5cdH1cclxuXHQubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVye2Rpc3BsYXk6bm9uZX1cclxuXHRcclxuXHQuZHJvcGRvd24gLmRyb3BidG4ge1xyXG5cdFx0Zm9udC1zaXplOjEycHhcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/containers/frontend-layout/frontend-layout.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/containers/frontend-layout/frontend-layout.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--------------------------- MENU ----------------------------------->\r\n      <header> \r\n      \r\n\t\t   \r\n\t\t\t\r\n\t\t\t \r\n          <nav  class=\"navbar navbar-expand-lg custom_navbar_1\">\r\n\t\t\t  <div class=\"container\">\r\n\t\t\t  \r\n\t\t\t\t <a  class=\"navbar-brand\" *ngIf =\"!isLoggedIn\" routerLink=\"/\" ><img class=\"img-fluid logoClass\" alt=\"MoveLaunch\" src=\"../../../assets/images/logo.png\"></a>\r\n\t\t\t\r\n\t\t\t\t<a  class=\"navbar-brand\" *ngIf =\"isLoggedIn && setusertype=='user'\" routerLink=\"/dashboard\" ><img class=\"img-fluid logoClass\" alt=\"MoveLaunch\" src=\"../../../assets/images/logo.png\"></a>\r\n\t\t\t \r\n\t\t\t\t<a  class=\"navbar-brand\" *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/alljobs\" ><img class=\"img-fluid logoClass\" alt=\"MoveLaunch\" src=\"../../../assets/images/logo.png\"></a>\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExample07\" aria-controls=\"navbarsExample07\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t\t  <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarsExample07\">\r\n\t\t\t\t<div class=\"get-free-quotes ml-auto mr-0 mr-lg-4\"><a *ngIf =\"isLoggedIn && setusertype=='user'\"  routerLink=\"/create-job\" [class.active]=\"router.isActive('/create-job')\" routerLinkActive=\"active\" >Get Free Moving Quotes</a></div>\r\n\t\t\t\t <!-- <div class=\"createjob ml-auto mr-4\"><a *ngIf =\"isLoggedIn && setusertype=='user'\"  routerLink=\"/create-job\" [class.active]=\"router.isActive('/create-job')\" routerLinkActive=\"active\" >Create Job</a></div> -->\t\r\n\t\t\t\t  <ul class=\"navbar-nav align-items-lg-center\">\r\n\t\t\t\t\t<li *ngIf =\"isLoggedIn\"  class=\"nav-item active dropdown\">\r\n\t\t\t\t\t  <a class=\"nav-link notification\" (click)=\"toggle()\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" href=\"javascript:void(0)\"><i class=\"fas fa-bell\"></i><span class=\"counter\">{{notificationCount}}</span></a>\r\n\t\t\t\t\t  <div class=\"dropdown-menu dropdown-content-note\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/detail-job/{{notification.jobId._id}}\" *ngFor=\"let notification of notifications\" (click)= \"readNotification(notification.jobId._id)\">{{notification.notificationId.notification_message}} <b><i>{{notification.service_name}} on {{notification.jobId.created_at | date:'mediumDate'}}</i></b> </a>\r\n\t\t\t\t\t\t\t<a routerLink=\"/view-all-notifications\">View All Notifications</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf =\"!isLoggedIn\" class=\"nav-item active\">\r\n\t\t\t\t\t  <a routerLink=\"/login\"  class=\"p-2 text-dark\" routerLinkActive=\"active\"><i class=\"fas fa-sign-in-alt\"></i> Login</a> \r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf =\"!isLoggedIn\" class=\"nav-item active\">\r\n\t\t\t\t\t\t<a routerLink=\"/register\"  class=\"p-2 text-dark\"  routerLinkActive=\"active\" (click) = \"setuserpartner('user')\" > <i class=\"fas fa-key\"></i> Sign Up</a> \r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf =\"isLoggedIn && setusertype=='user'\" class=\"nav-item dropdown\" >\r\n\t\t\t\t\t  <a class=\"nav-link dropdown-toggle\" href=\"#\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Estimates</a>\r\n\t\t\t\t\t  <div class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngIf =\"isLoggedIn && setusertype=='user'\"  routerLink=\"/dashboard\" [class.active]=\"router.isActive('/dashboard')\" routerLinkActive=\"active\"  >Dashboard</a>\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngIf =\"isLoggedIn && setusertype=='user'\"  routerLink=\"/create-job\" [class.active]=\"router.isActive('/create-job')\" routerLinkActive=\"active\"  >Create New Estimates</a>\r\n\t\t\t\t\t\t<a class=\"dropdown-item\"*ngIf =\"isLoggedIn && setusertype=='user'\" routerLink=\"/jobs\" [class.active]=\"router.isActive('/jobs')\" routerLinkActive=\"active\">All Estimates Created</a>\r\n\t\t\t\t\t\t<a class=\"dropdown-item\"*ngIf =\"isLoggedIn && setusertype=='user'\" routerLink=\"/user-in-progress-jobs\" [class.active]=\"router.isActive('/user-in-progress-jobs')\" routerLinkActive=\"active\">All Estimates Received</a>\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" *ngIf =\"isLoggedIn && setusertype=='user'\" routerLink=\"/user-completed-jobs\" [class.active]=\"router.isActive('/user-completed-jobs')\" routerLinkActive=\"active\" >History of Accepted Estimates</a>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li *ngIf =\"isLoggedIn && setusertype=='partner'\" class=\"nav-item dropdown\">\r\n\t\t\t\t\t  <a class=\"nav-link dropdown-toggle\" href=\"#\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Estimates</a>\r\n\t\t\t\t\t  <div class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/alljobs\"  class=\"dropdown-item\" [class.active]=\"router.isActive('/alljobs')\" routerLinkActive=\"active\">New Estimates</a>\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/won-bids\"  class=\"dropdown-item\" [class.active]=\"router.isActive('/won-bids')\" routerLinkActive=\"active\">Won Estimates</a>\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/lost-bids\"  class=\"dropdown-item\" [class.active]=\"router.isActive('/lost-bids')\" routerLinkActive=\"active\">Lost Estimates</a>\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/open-bids\"  class=\"dropdown-item\" [class.active]=\"router.isActive('/open-bids')\" routerLinkActive=\"active\">Open Estimates</a>\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner'\" routerLink=\"/completed-jobs\"  class=\"dropdown-item\" [class.active]=\"router.isActive('/completed-jobs')\" routerLinkActive=\"active\">Completed Estimates</a>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf =\"isLoggedIn\" class=\"nav-item dropdown\">\r\n\t\t\t\t\t  <a class=\"nav-link dropdown-toggle\" href=\"#\"  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t  <span class=\"username_setting\">{{setFirstChar | uppercase}}</span>{{userdetail.firstname}}</a>\r\n\t\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t   <a *ngIf =\"isLoggedIn && setusertype=='partner' && userdetail.customer_id\" [class.active]=\"router.isActive('/profile')\" routerLink=\"/profile\"  class=\"dropdown-item\" routerLinkActive=\"active\" > My Account</a>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='user'\" [class.active]=\"router.isActive('/profile')\" routerLink=\"/profile\"  class=\"dropdown-item\" routerLinkActive=\"active\" > My Account</a>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t   <a *ngIf =\"isLoggedIn && setusertype=='partner' && userdetail.customer_id\" routerLink=\"/purchase-plans\" [class.active]=\"router.isActive('/purchase-plans')\"  class=\"dropdown-item\" routerLinkActive=\"active\" > Upgrade Plan</a> \r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<a *ngIf =\"isLoggedIn && setusertype=='partner' && !userdetail.customer_id\" routerLink=\"/purchase-plans\" [class.active]=\"router.isActive('/purchase-plans')\"  class=\"dropdown-item\" routerLinkActive=\"active\" > Purchase Plan</a>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t   <a class=\"dropdown-item\" routerLink=\"/view-all-notifications\" ><span>Notifications</span></a>\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t   <a *ngIf =\"isLoggedIn\" href=\"javascript:void(0)\" (click) = \"logout()\" routerLinkActive=\"active\"  class=\"dropdown-item\" > Logout</a> \r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\t\t\r\n\t\t\t\t  </ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t  </div>\r\n\t\t\t</nav> \r\n\r\n\r\n     \r\n\t </header>  \r\n \r\n<!--------------------------- END MENU  ------------------------------>\r\n\r\n\t<div class=\"content_wrapper\">\r\n<!--------------------------- BODY ----------------------------------->\r\n\t\r\n      <router-outlet></router-outlet>\r\n\r\n\r\n<!-------------------------- END BODY ---------------------------------->\r\n</div>\r\n<!--------------------------- FOOTER ----------------------------------->\r\n\r\n\r\n\t<footer class=\"ft\">\r\n\t\t<div class=\"bottom-line\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t\r\n\t\t\t\t\t<span class=\"fl_left\">© 2019 MoveLaunch All rights reserved.</span>\r\n\t\t\t\t\r\n\t\t\t\t\t<span class=\"fl_right\">Powered By  <a href=\"https://www.webethicssolutions.com/\" target=\"_blank\">Webethics Solutions</a></span>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer> \r\n\r\n\r\n<!--------------------------- END FOOTER ----------------------------------->\r\n\r\n"

/***/ }),

/***/ "./src/app/containers/frontend-layout/frontend-layout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/frontend-layout/frontend-layout.component.ts ***!
  \*************************************************************************/
/*! exports provided: FrontendLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendLayoutComponent", function() { return FrontendLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frontend_front_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../frontend/_front_nav */ "./src/app/frontend/_front_nav.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var FrontendLayoutComponent = /** @class */ (function () {
    function FrontendLayoutComponent(router, activatedRoute, userservice, jobservice, _document) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.navItems = _frontend_front_nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        this.user_id = '';
        this.userdetail = '';
        this.setFirstChar = '';
        this.jobservices = '';
        this.setusertype = '';
        this.notificationCount = 0;
        this.notifications = '';
        this.logged_in = false;
        this.show_dialog = false;
        this.isLoggedIn = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.changes = new MutationObserver(function (mutations) {
            // this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
        //this.getNotificationCount();
        /* this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.getLoggedInUser();
                this.getNotificationCount();
                
            };
        });
 */
        this.getServices();
    }
    FrontendLayoutComponent.prototype.getServices = function () {
        var _this = this;
        this.jobservice.getServices().subscribe(function (result) {
            _this.jobservices = result.data;
        });
    };
    FrontendLayoutComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('login_token');
        if (token) {
            this.isLoggedIn = true;
            this.setusertype = localStorage.getItem('user_role');
            this.userdetail = { firstname: localStorage.getItem('firstname'), lastname: localStorage.getItem('lastname'), customer_id: localStorage.getItem('customer_id'), totalbid: localStorage.getItem('total_bid') };
            this.setFirstChar = localStorage.getItem('firstname')[0];
        }
        else {
            this.router.navigate([this.router.url]);
            this.isLoggedIn = false;
        }
        //console.log('fist='+this.setFirstChar);
    };
    FrontendLayoutComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    FrontendLayoutComponent.prototype.ngOnDestroy = function () {
        this.changes.disconnect();
    };
    FrontendLayoutComponent.prototype.getLoggedInUser = function () {
        var _this = this;
        var token = localStorage.getItem('login_token');
        if (token) {
            this.userservice.getUsers().subscribe(function (result) {
                _this.userdetail = result[0];
            });
        }
    };
    FrontendLayoutComponent.prototype.getNotificationCount = function () {
        var _this = this;
        var token = localStorage.getItem('login_token');
        if (token) {
            /* this.notificationCount = 0; */
            this.userservice.getNotificationCountForUser().subscribe(function (result1) {
                _this.notificationCount = result1.count;
            });
        }
    };
    FrontendLayoutComponent.prototype.getAllNotifications = function () {
        var _this = this;
        var token = localStorage.getItem('login_token');
        if (token) {
            this.userservice.getAllNotifications(5).subscribe(function (result) {
                _this.notifications = result.notfication;
            });
        }
    };
    FrontendLayoutComponent.prototype.readNotification = function (jobId) {
        this.show_dialog = !this.show_dialog;
        var token = localStorage.getItem('login_token');
        if (token) {
            this.userservice.readAllNotifications().subscribe(function (result) {
            });
        }
    };
    FrontendLayoutComponent.prototype.toggle = function () {
        var _this = this;
        this.show_dialog = !this.show_dialog;
        if (this.show_dialog) {
            this.userservice.getAllNotifications(5).subscribe(function (result) {
                console.log(result.notfication);
                _this.notifications = result.notfication;
                _this.notifications.forEach(function (x, key) {
                    var setApp = [];
                    for (var i = 0; i < _this.jobservices.length; i++) {
                        var servic = x.jobId.serviceId;
                        var _id = _this.jobservices[i]._id;
                        var _name = _this.jobservices[i].name;
                        $.each(servic, function (index, value) {
                            if (value != "" && value == _id) {
                                var item = _name;
                                setApp[i] = item;
                            }
                        });
                    }
                    var filtered = setApp.filter(function (el) {
                        return el != null;
                    });
                    _this.notifications[key].service_name = filtered.join(',');
                });
            });
        }
        else {
            this.userservice.readAllNotifications().subscribe(function (result) {
            });
        }
    };
    /* isLoggedIn() {
        
        this.setusertype =  localStorage.getItem('user_role');
        let token = localStorage.getItem('login_token');
        if(token){
            return true ;
        }else{
            return false ;
        }
        
    } */
    FrontendLayoutComponent.prototype.setuserpartner = function (usertype) {
        localStorage.setItem('usertype', usertype);
    };
    FrontendLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-frontheader',
            template: __webpack_require__(/*! ./frontend-layout.component.html */ "./src/app/containers/frontend-layout/frontend-layout.component.html"),
            styles: [__webpack_require__(/*! ./frontend-layout.component.css */ "./src/app/containers/frontend-layout/frontend-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"], Object])
    ], FrontendLayoutComponent);
    return FrontendLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/frontend-layout/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/frontend-layout/index.ts ***!
  \*****************************************************/
/*! exports provided: FrontendLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend-layout.component */ "./src/app/containers/frontend-layout/frontend-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontendLayoutComponent", function() { return _frontend_layout_component__WEBPACK_IMPORTED_MODULE_0__["FrontendLayoutComponent"]; });




/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: AdminLayoutComponent, FrontendLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout */ "./src/app/containers/admin-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return _admin_layout__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"]; });

/* harmony import */ var _frontend_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend-layout */ "./src/app/containers/frontend-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontendLayoutComponent", function() { return _frontend_layout__WEBPACK_IMPORTED_MODULE_1__["FrontendLayoutComponent"]; });





/***/ }),

/***/ "./src/app/frontend/_front_nav.ts":
/*!****************************************!*\
  !*** ./src/app/frontend/_front_nav.ts ***!
  \****************************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Login',
        url: '/login',
    },
    {
        name: 'Sign Up',
        url: '/register',
    },
    {
        name: 'Profile',
        url: '/profile',
    }
];


/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




var Globals = /** @class */ (function () {
    function Globals(router, userservice) {
        var _this = this;
        this.router = router;
        this.userservice = userservice;
        this.role = 'test';
        this.notifications = '';
        this.notificationCount = '';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.getAllNotifications();
                _this.getNotificationCount();
            }
            ;
        });
    }
    Globals.prototype.getAllNotifications = function () {
        var _this = this;
        var token = localStorage.getItem('login_token');
        if (token) {
            this.userservice.getAllNotifications(5).subscribe(function (result) {
                _this.notifications = result.notfication;
            });
        }
    };
    Globals.prototype.getNotificationCount = function () {
        var _this = this;
        var token = localStorage.getItem('login_token');
        if (token) {
            this.userservice.getNotificationCountForUser().subscribe(function (result) {
                _this.notificationCount = result.count;
            });
        }
    };
    Globals.prototype.ngOnInit = function () {
    };
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    /* canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
    let token = localStorage.getItem('login_token');
    if(!token){
         return Observable.of(false);
        this.router.navigate(['/login']);
    }
     return Observable.of(true);
    
  } */
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.userService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/backend/admin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/backend/admin.service.ts ***!
  \***************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    //  Add User  
    /*  public addUser(name,email,phone,password): any {
        const uri = environment.apiUrl+'user/add';  //API
        const obj = {
          name: name,
          phone: phone,
          email :email,
          password :password
        };
        return this
          .http
          .post(uri, obj);
      }
       */
    // Call Email Already exist API   
    /*  public emailAlready(email): any {
       const uri = environment.apiUrl+'user/user_email'; //API
       const obj = {
         email :email
       };
       return this
         .http
         .post(uri, obj);
     } */
    //  Call Login API   
    AdminService.prototype.login_user = function (email, password) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/login';
        var obj = {
            email: email,
            password: password,
        };
        return this
            .http
            .post(uri, obj);
    };
    //  Get Current logged in user data
    AdminService.prototype.getUsers = function (user) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        if (user == 'user')
            var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/users';
        if (user == 'partner')
            var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/partners';
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // Get user data and return to Edit conponent
    AdminService.prototype.editUser = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/edit/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // Call user profile update API 
    AdminService.prototype.updateUser = function (id, status) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'token': token
        });
        var options = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/updatestatus/' + id;
        var obj = {
            status: status
        };
        return this
            .http
            .post(uri, obj, options);
    };
    // Call verify user account API  
    AdminService.prototype.verify_code = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/verify/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.forgot_password = function (email) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/forgotpassword';
        var obj = {
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    // Request node to check password code 
    AdminService.prototype.password_code = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/check_passcode/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // Reset passwrd 
    AdminService.prototype.resetPassword = function (password, id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/resetpassword/' + id;
        ;
        var obj = {
            password: password
        };
        return this
            .http
            .post(uri, obj);
    };
    AdminService.prototype.deleteUser = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getPlans = function () {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'plans';
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    AdminService.prototype.getServices = function () {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'services/';
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    //http://13.58.114.48:3001/api/admin/editServices/5c544a8515f5bb0c908b3014
    AdminService.prototype.getServiceById = function (serviceId) {
        console.log(serviceId);
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/editServices/' + serviceId;
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /* My work Start from here */
    /*Update the service by id */
    AdminService.prototype.updateservicebyid = function (serviceId, value) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/updateServices/' + serviceId;
        var obj = {
            "name": "" + value + ""
        };
        console.log(obj);
        return this
            .http
            .post(uri, obj);
    };
    /* Users Edit section work */
    AdminService.prototype.userseditservicecall = function (serviceId) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/user/edit/' + serviceId;
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /* Update users service by id */
    AdminService.prototype.updateusersbyid = function (serviceId, value) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var options = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/user/update/' + serviceId;
        //http://13.58.114.48:3001/api/admin/user/update/5cdd632e88039718bb777469
        return this
            .http
            .post(uri, value, options);
    };
    /* Getting the JObs*/
    AdminService.prototype.getjobs = function () {
        var token = localStorage.getItem('admin_token');
        console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var head = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/getalljobs';
        return this.http.get(uri, head);
    };
    /*Getting specific jobs */
    AdminService.prototype.getspecificjobs = function (number) {
        var token = localStorage.getItem('admin_token');
        console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var head = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + '/admin/userCompletedProcessingJobs';
        var ne = { "jobStatus": number };
        console.log(ne);
        return this.http.post(uri, ne, head);
    };
    /*Get particular jobs*/
    AdminService.prototype.getparticularjobs = function (jobId) {
        var token = localStorage.getItem('admin_token');
        console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/editjobs/' + jobId; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /* Getting the dashboard stats*/
    AdminService.prototype.getdashboardstats = function () {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var head = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/dashboard';
        return this
            .http
            .get(uri, head);
    };
    /* GET invoice service */
    AdminService.prototype.getinvoices = function (user_id) {
        var token = localStorage.getItem('admin_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var head = { headers: headers };
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'admin/userAllInvoices/' + user_id;
        return this
            .http
            .get(uri, head);
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
    }
    JobService.prototype.addJob = function (basic_info, serviceId) {
        console.log(basic_info);
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/createjobTemp'; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            firstname: basic_info.firstname,
            lastname: basic_info.lastname,
            phone: basic_info.phone,
            state: basic_info.state,
            county: basic_info.county[0],
            city: basic_info.city,
            address1: basic_info.address,
            zipcode: basic_info.zipcode,
            serviceId: serviceId,
            jobStart: basic_info.job_start_date,
            moving: []
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.updateServicesInJobTemp = function (jobID, basic_info, type) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updatejobTemp/'; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        if (type == 'moving') {
            obj = {
                step: 1,
                moving: basic_info.moving,
            };
        }
        if (type == 'packing') {
            obj = {
                step: 1,
                packing: basic_info.packing,
            };
        }
        if (type == 'unpacking') {
            obj = {
                step: 1,
                unpacking: basic_info.unpacking,
            };
        }
        if (type == 'loading') {
            obj = {
                step: 1,
                loading: basic_info.loading,
            };
        }
        if (type == 'unloading') {
            obj = {
                step: 1,
                unloading: basic_info.unloading,
            };
        }
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.updateServicesInJob = function (jobID, basic_info, type) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updatejob/' + jobID; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        if (type == 'moving') {
            obj = {
                step: 1,
                moving: basic_info.moving,
            };
        }
        if (type == 'packing') {
            obj = {
                step: 1,
                packing: basic_info.packing,
            };
        }
        if (type == 'unpacking') {
            obj = {
                step: 1,
                unpacking: basic_info.unpacking,
            };
        }
        if (type == 'loading') {
            obj = {
                step: 1,
                loading: basic_info.loading,
            };
        }
        if (type == 'unloading') {
            obj = {
                step: 1,
                unloading: basic_info.unloading,
            };
        }
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.submitJob = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/createjob'; //API
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*Get all jobs for user */
    JobService.prototype.getAllJobs = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/getjobs'; //API
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*Get all jobs for user */
    JobService.prototype.getAllJobsWithBids = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/getjobswithbids'; //API
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    JobService.prototype.updateJob = function (basic_info, step, jobID, serviceType) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updatejobTemp'; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        if (step == 'step1') {
            var obj_1 = {
                step: 0,
                firstname: basic_info.job_basic_info.firstname,
                lastname: basic_info.job_basic_info.lastname,
                phone: basic_info.job_basic_info.phone,
                state: basic_info.job_basic_info.state,
                county: basic_info.job_basic_info.county[0],
                city: basic_info.job_basic_info.city,
                address1: basic_info.job_basic_info.address,
                zipcode: basic_info.job_basic_info.zipcode,
                serviceId: basic_info.serviceId,
            };
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj_1, { headers: headers });
        }
        /* if(step == 'step2'){
             const obj = {
                    step:2,
                    jobTitle:basic_info.job_title,
                    jobDescription:basic_info.job_description,
                    jobStart:basic_info.job_start_date,
                    jobEnd:basic_info.job_end_date
                };
                
              headers = headers.append('token', token);
             return this
              .http
              .post(uri, obj,{headers:headers});
        } */
        if (step == 'step3') {
            var itemrow_1 = [];
            $.each(basic_info.itemRows, function (index, value) {
                var move_data = {
                    movingType: value.moving_from,
                    floor: value.moving_from_floor,
                    address1: value.moving_from_address,
                    state: value.moving_from_state,
                    county: value.moving_from_county,
                    city: value.moving_from_city,
                    zipcode: value.moving_from_zipcode
                };
                itemrow_1.push(move_data);
            });
            console.log('thisone+' + serviceType);
            var obj = {};
            //const obj = {step:3,moving:{moving_from:itemrow}};
            if (serviceType == 'moving') {
                obj = { step: 3, moving: { moving_from: itemrow_1 } };
            }
            if (serviceType == 'packing') {
                obj = { step: 3, packing: { moving_from: itemrow_1 } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 3, unpacking: { moving_from: itemrow_1 } };
            }
            if (serviceType == 'loading') {
                obj = { step: 3, loading: { moving_from: itemrow_1 } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 3, unloading: { moving_from: itemrow_1 } };
            }
            console.log('this+' + obj);
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step4') {
            var itemrow_2 = [];
            $.each(basic_info.itemRowsTo, function (index, value) {
                var move_data = {
                    movingType: value.moving_to,
                    floor: value.moving_to_floor,
                    address1: value.moving_to_address,
                    state: value.moving_to_state,
                    county: value.moving_to_county,
                    city: value.moving_to_city,
                    zipcode: value.moving_to_zipcode
                };
                itemrow_2.push(move_data);
            });
            var obj = {};
            //const obj = {step:3,moving:{moving_from:itemrow}};
            if (serviceType == 'moving') {
                obj = { step: 4, moving: { moving_to: itemrow_2 } };
            }
            if (serviceType == 'packing') {
                obj = { step: 4, packing: { moving_to: itemrow_2 } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 4, unpacking: { moving_to: itemrow_2 } };
            }
            if (serviceType == 'loading') {
                obj = { step: 4, loading: { moving_to: itemrow_2 } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 4, unloading: { moving_to: itemrow_2 } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step5') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 5, moving: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc, appliances_assembly: basic_info.appliances_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 5, packing: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 5, unpacking: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 5, loading: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 5, unloading: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step6') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 6, moving: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc, bedrooms_assembly: basic_info.bedrooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 6, packing: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 6, unpacking: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 6, loading: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 6, unloading: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step7') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 7, moving: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc, livingRooms_assembly: basic_info.livingRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 7, packing: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 7, unpacking: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 7, loading: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 7, unloading: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step8') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 8, moving: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc, familyRooms_assembly: basic_info.familyRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 8, packing: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 8, unpacking: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 8, loading: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 8, unloading: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step9') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 9, moving: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc, dininRooms_assembly: basic_info.dininRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 9, packing: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 9, unpacking: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 9, loading: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 9, unloading: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step10') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 10, moving: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc, kitchen_assembly: basic_info.kitchen_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 10, packing: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 10, unpacking: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 10, loading: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 10, unloading: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step11') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 11, moving: { basement: basic_info.basement, basement_misc: basic_info.basement_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 11, packing: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 11, unpacking: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 11, loading: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 11, unloading: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step12') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 12, moving: { garage: basic_info.garage, garage_misc: basic_info.garage_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 12, packing: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 12, unpacking: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 12, loading: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 12, unloading: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step13') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 13, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 13, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 13, unpacking: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 13, loading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 13, unloading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step14') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 14, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 14, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 14, unpacking: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 14, loading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 14, unloading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
            /* const obj = {step:14,roomNeeedPacked:basic_info[0]};
           headers = headers.append('token', token);
            return this
          .http
          .post(uri, obj,{headers:headers});  */
        }
        if (step == 'step15') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, patioYard_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 15, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
            /* const obj = {step:14,roomNeeedPacked:basic_info[0]};
           headers = headers.append('token', token);
            return this
          .http
          .post(uri, obj,{headers:headers});  */
        }
    };
    JobService.prototype.updateEditedJobServices = function (selectedOrderIds, jobID) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updatejobFirstStep/' + jobID; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            serviceId: selectedOrderIds,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.submitEditJob = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        //const obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updateEditjob/' + jobID; //API
        headers = headers.append('token', token);
        var obj = {};
        return this
            .http
            .post(uri, obj, { headers: headers });
        /* return this
            .http
            .get(uri,{headers:headers})
            .pipe(map(res => {
              return res;
            })); */
    };
    JobService.prototype.updateEditedJob = function (basic_info, step, jobID, serviceType) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/updatejob/' + jobID; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /* if(step == 'step1'){
             const obj = {
                      step:1,
                      firstname: basic_info.job_basic_info.firstname,
                      lastname: basic_info.job_basic_info.lastname,
                      phone: basic_info.job_basic_info.phone,
                      state :basic_info.job_basic_info.state,
                      county :basic_info.job_basic_info.county,
                      city :basic_info.job_basic_info.city,
                      address1 :basic_info.job_basic_info.address,
                      zipcode :basic_info.job_basic_info.zipcode,
                      serviceId:basic_info.serviceId,
                      jobStart:basic_info.job_basic_info.job_start_date
                };
            
              headers = headers.append('token', token);
              
             return this
              .http
              .post(uri, obj,{headers:headers});
        }
        
        if(step == 'step2'){
             const obj = {
                    step:2,
                    jobTitle:basic_info.job_title,
                    jobDescription:basic_info.job_description,
                    jobStart:basic_info.job_start_date,
                    jobEnd:basic_info.job_end_date
                };
                
              headers = headers.append('token', token);
             return this
              .http
              .post(uri, obj,{headers:headers});
        } */
        if (step == 'step3') {
            var itemrow_3 = [];
            $.each(basic_info.itemRows, function (index, value) {
                var move_data = {
                    movingType: value.moving_from,
                    floor: value.moving_from_floor,
                    address1: value.moving_from_address,
                    state: value.moving_from_state,
                    county: value.moving_from_county,
                    city: value.moving_from_city,
                    zipcode: value.moving_from_zipcode
                };
                itemrow_3.push(move_data);
            });
            var obj = {};
            //const obj = {step:3,moving:{moving_from:itemrow}};
            if (serviceType == 'moving') {
                obj = { step: 3, moving: { moving_from: itemrow_3 } };
            }
            if (serviceType == 'packing') {
                obj = { step: 3, packing: { moving_from: itemrow_3 } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 3, unpacking: { moving_from: itemrow_3 } };
            }
            if (serviceType == 'loading') {
                obj = { step: 3, loading: { moving_from: itemrow_3 } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 3, unloading: { moving_from: itemrow_3 } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step4') {
            var itemrow_4 = [];
            $.each(basic_info.itemRowsTo, function (index, value) {
                var move_data = {
                    movingType: value.moving_to,
                    floor: value.moving_to_floor,
                    address1: value.moving_to_address,
                    state: value.moving_to_state,
                    county: value.moving_to_county,
                    city: value.moving_to_city,
                    zipcode: value.moving_to_zipcode
                };
                itemrow_4.push(move_data);
            });
            console.log('thisone+' + serviceType);
            var obj = {};
            //const obj = {step:3,moving:{moving_from:itemrow}};
            if (serviceType == 'moving') {
                obj = { step: 4, moving: { moving_to: itemrow_4 } };
            }
            if (serviceType == 'packing') {
                obj = { step: 4, packing: { moving_to: itemrow_4 } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 4, unpacking: { moving_to: itemrow_4 } };
            }
            if (serviceType == 'loading') {
                obj = { step: 4, loading: { moving_to: itemrow_4 } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 4, unloading: { moving_to: itemrow_4 } };
            }
            console.log('hh');
            console.log(obj);
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step5') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 5, moving: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc, appliances_assembly: basic_info.appliances_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 5, packing: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 5, unpacking: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 5, loading: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 5, unloading: { appliances: basic_info.appliances, appliances_misc: basic_info.appliances_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step6') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 6, moving: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc, bedrooms_assembly: basic_info.bedrooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 6, packing: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 6, unpacking: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 6, loading: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 6, unloading: { bedRooms: basic_info.bedRooms, bedrooms_misc: basic_info.bedrooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step7') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 7, moving: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc, livingRooms_assembly: basic_info.livingRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 7, packing: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 7, unpacking: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 7, loading: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 7, unloading: { livingRooms: basic_info.livingRooms, livingRooms_misc: basic_info.livingRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step8') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 8, moving: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc, familyRooms_assembly: basic_info.familyRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 8, packing: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 8, unpacking: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 8, loading: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 8, unloading: { familyRooms: basic_info.familyRooms, familyRooms_misc: basic_info.familyRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step9') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 9, moving: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc, dininRooms_assembly: basic_info.dininRooms_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 9, packing: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 9, unpacking: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 9, loading: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 9, unloading: { diningRooms: basic_info.diningRooms, diningRooms_misc: basic_info.dininRooms_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step10') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 10, moving: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc, kitchen_assembly: basic_info.kitchen_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 10, packing: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 10, unpacking: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 10, loading: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 10, unloading: { kitchen: basic_info.kitchen, kitchen_misc: basic_info.kitchen_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step11') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 11, moving: { basement: basic_info.basement, basement_misc: basic_info.basement_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 11, packing: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 11, unpacking: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 11, loading: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 11, unloading: { basement: basic_info.basement, basement_misc: basic_info.basement_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step12') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 12, moving: { garage: basic_info.garage, garage_misc: basic_info.garage_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 12, packing: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 12, unpacking: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 12, loading: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 12, unloading: { garage: basic_info.garage, garage_misc: basic_info.garage_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step13') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 13, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 13, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 13, unpacking: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 13, loading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 13, unloading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
        }
        if (step == 'step14') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 14, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, appliances_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 14, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 14, unpacking: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 14, loading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 14, unloading: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
            /* const obj = {step:14,roomNeeedPacked:basic_info[0]};
           headers = headers.append('token', token);
            return this
          .http
          .post(uri, obj,{headers:headers});  */
        }
        if (step == 'step15') {
            var obj = {};
            if (serviceType == 'moving') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc, patioYard_assembly: basic_info.patioYard_assembly } };
            }
            if (serviceType == 'packing') {
                obj = { step: 15, packing: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unpacking') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'loading') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            if (serviceType == 'unloading') {
                obj = { step: 15, moving: { patioYard: basic_info.patioYard, patioYard_misc: basic_info.patioYard_misc } };
            }
            headers = headers.append('token', token);
            return this
                .http
                .post(uri, obj, { headers: headers });
            /* const obj = {step:14,roomNeeedPacked:basic_info[0]};
           headers = headers.append('token', token);
            return this
          .http
          .post(uri, obj,{headers:headers});  */
        }
        /* if(step == 'step3'){
            const itemrow = [];
            
            $.each(basic_info.itemRows, function(index, value) {
                var move_data = {
                  movingType: value.moving_from,
                  floor: value.moving_from_floor,
                  address1: value.moving_from_address,
                  state :value.moving_from_state,
                  county :value.moving_from_county,
                  city :value.moving_from_city,
                  zipcode :value.moving_from_zipcode
                }
                itemrow.push(move_data);
            });
            
             const obj = {step:3,moving_from:itemrow};
            
              headers = headers.append('token', token);
              return this
              .http
              .post(uri, obj,{headers:headers});
        }
        
        if(step == 'step4'){
            const itemrow = [];
            
            $.each(basic_info.itemRowsTo, function(index, value) {
                var move_data = {
                  movingType: value.moving_to,
                  floor: value.moving_to_floor,
                  address1: value.moving_to_address,
                  state :value.moving_to_state,
                  county :value.moving_to_county,
                  city :value.moving_to_city,
                  zipcode :value.moving_to_zipcode
                }
                itemrow.push(move_data);
            });
            
             const obj = {step:4,moving_to:itemrow};
             
            
              headers = headers.append('token', token);
             return this
              .http
              .post(uri, obj,{headers:headers});
        }
    
        if(step == 'step5'){
            
            const obj = {step:5,appliances:basic_info.appliances,appliances_misc:basic_info.appliances_misc};
            
               headers = headers.append('token', token);
             return this
              .http
              .post(uri, obj,{headers:headers});
        }
        if(step == 'step6'){
                
                const obj = {step:6,bedRooms:basic_info.bedRooms,bedrooms_misc:basic_info.bedrooms_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step7'){
                const obj = {step:7,livingRooms:basic_info.livingRooms,livingRooms_misc:basic_info.livingRooms_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step8'){
                const obj = {step:8,familyRooms:basic_info.familyRooms,familyRooms_misc:basic_info.familyRooms_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step9'){
                const obj = {step:9,diningRooms:basic_info.diningRooms,diningRooms_misc:basic_info.dininRooms_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step10'){
                const obj = {step:10,kitchen:basic_info.kitchen,kitchen_misc:basic_info.kitchen_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step11'){
                const obj = {step:11,basement:basic_info.basement,basement_misc:basic_info.basement_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step12'){
                const obj = {step:12,garage:basic_info.garage,garage_misc:basic_info.garage_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step13'){
                const obj = {step:13,patioYard:basic_info.patioYard,patioYard_misc:basic_info.patioYard_misc};
                
                   headers = headers.append('token', token);
                 return this
                  .http
                  .post(uri, obj,{headers:headers});
            }
        if(step == 'step14'){
                const obj = {step:14,roomNeeedPacked:basic_info[0]};
                
               headers = headers.append('token', token);
                return this
              .http
              .post(uri, obj,{headers:headers});
        } */
    };
    JobService.prototype.makePayment = function (stripetoken, planId, _user_id) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/payment/' + _user_id; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            stripeToken: stripetoken,
            planId: planId,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.updatePayment = function (stripetoken, planId, _user_id) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/changeplan/' + _user_id; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            stripeToken: stripetoken,
            planId: planId,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    // Get state API   
    JobService.prototype.getSavedJob = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/getjobTemp'; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    //http://localhost:3001/api/job/delete/5c9a0c509b7238289d9f8432
    JobService.prototype.deleteJob = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'job/delete/' + jobID; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    // Get job by ID  
    JobService.prototype.getEditJob = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'user/editjobs/' + jobID; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*-----------Get all jobs for partner based on county----api/partner/jobs------*/
    JobService.prototype.getAllJobsForPartner = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/jobs'; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*-----------Get feedback for a particular job for user getJobFeedbackForUser------*/
    JobService.prototype.getJobFeedbackForUser = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'ShowFeedbacktoUser/' + jobID; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*-----------Get service name by service ID- http://18.221.79.87:3001/api/getServiceName/5c544a8515f5bb0c908b3014 -----*/
    JobService.prototype.getServiceName = function (serviceID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'getServiceName/' + serviceID; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*-----------Get feedback for a particular job for partner getJobFeedbackForPartner------*/
    JobService.prototype.getJobFeedbackForPartner = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'ShowFeedbacktoPartner/' + jobID; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*------------------------------Get all completed jobs,won bids,lost bids,opwn bids for user ---------------------------------*/
    JobService.prototype.getFilteredJobsForUser = function (jobStatus) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'userCompletedJobs/'; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            jobStatus: jobStatus,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*------------------------------Get all completed jobs,won bids,lost bids,opwn bids for user ---------------------------------*/
    JobService.prototype.getFilteredJobsForUserDashboard = function (jobStatus) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'userCompletedJobsDashboard/'; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            jobStatus: jobStatus,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*------------------------------Get all completed jobs,won bids,lost bids,opwn bids for partner ---------------------------------*/
    JobService.prototype.getFilteredJobsForPartner = function (bidStatus, jobStatus) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/bidWonLostComplete/'; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            bidStatus: bidStatus,
            jobStatus: jobStatus,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*--------------Check user has applied on a job or not---------------------------------------*/
    JobService.prototype.getBidsOnJob = function (job_id) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/bidsOnJob/' + job_id; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*--------------Check user has applied on a job or not---------------------------------------*/
    JobService.prototype.getBidsOnJobUser = function (job_id) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'getHiredDate/' + job_id; //API bidsOnJob/5ccc14ef20102023b236c3fc
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*--------------Hire or decline a job----------------------------------api/jobHiredDecline/5cb701d1dc705b16225770ce/5ccc14ef20102023b236c3fc-----*/
    JobService.prototype.hireDecline = function (type, job_id, user_id) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'jobHiredDecline/' + user_id + '/' + job_id; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = { bidStatus: type };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*--------------post a review on completing a job------------------------savereviews/5c9a290b9b7238289d9f848f-----*/
    JobService.prototype.sendReviews = function (rating_info, sender_id, jobid, partnerid) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'savereviews/' + jobid; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            rating: rating_info.ratingSelected,
            feedback: rating_info.jobFeedback,
            senderUserId: sender_id,
            recieverUserId: partnerid,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*--------------update a review on completing a job------------------------savereviews/5c9a290b9b7238289d9f848f-----*/
    JobService.prototype.updateReviews = function (rating_info, reviewid) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'updatereviews/' + reviewid; //API partner/payment/5c90a8ac95339c2310392ac1
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            rating: rating_info.ratingSelected,
            feedback: rating_info.jobFeedback,
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*---------------------------------- Edit bid for view -----------------------------*/
    JobService.prototype.editJobBids = function (job_id) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {};
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/editbid/' + job_id; //API api/partner/editbid/5cd518c538bc5c24ab886e43
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*------------------Make bid ----------------------- partner/createbid/5c9a290b9b7238289d9f848f */
    JobService.prototype.addbid = function (bid_info, jobId, _userid) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/createbid/' + jobId; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            bid_price: bid_info.bidAmount,
            bid_proposal: bid_info.bidProposal,
            attachment_pic: ""
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    /*------------------update bid ----------------------- api/partner/updatebid/5cd518c538bc5c24ab886e43 */
    JobService.prototype.updateBid = function (bid_info, bidId, _userid) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/updatebid/' + bidId; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var obj = {
            bid_price: bid_info.bidAmount,
            bid_proposal: bid_info.bidProposal,
            attachment_pic: ""
        };
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    JobService.prototype.addbidWithFile = function (bid_info, jobId, _userid, image) {
        var token = localStorage.getItem('login_token');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'partner/createbid/' + jobId; //API
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        var formData = new FormData();
        formData.append('bid_price', bid_info.bidAmount);
        formData.append('bid_proposal', bid_info.bidProposal);
        if (image !== undefined) {
            formData.append('attachment_pic', image);
        }
        headers = headers.append('token', token);
        return this
            .http
            .post(uri, formData, { headers: headers });
    };
    /*-------------- Get list of bids on a job --------------------------*/
    JobService.prototype.getJobBids = function (jobID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'jobBidUsers/' + jobID; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    /*-------------- Get review on a completed job --------------------------*/
    JobService.prototype.getUserFeedback = function (reviewID) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'editreviews/' + reviewID; //API 
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    JobService.prototype.getAllPlans = function () {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'plans'; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getAppliances = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'appliaces/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getBasement = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'basement/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getBedrooms = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'bedrooms/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getDiningrooms = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'diningrooms/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getFamilyrooms = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'familyrooms/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getServices = function () {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'services'; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getGarages = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'garages/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getKitchen = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'kitchen/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getLivingrooms = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'livingrooms/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService.prototype.getPatioyard = function (serviceId) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + 'patioyard/' + serviceId; //API 
        return this
            .http
            .get(uri);
    };
    JobService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        //  Add User  
        get: function () {
            var token = localStorage.getItem('login_token');
            if (token) {
                this.loggedIn.next(true);
            }
            else {
                this.loggedIn.next(false);
            }
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.addUser = function (user, userRole) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/add'; //API
        var obj = {
            firstname: user.firstName,
            lastname: user.lastName,
            phone: user.phone,
            email: user.email,
            state: user.state,
            county: user.county,
            city: user.city,
            password: user.password,
            address: user.address,
            zipcode: user.zip,
            userRole: userRole
        };
        return this
            .http
            .post(uri, obj);
    };
    //  Add partner  
    UserService.prototype.addPartner = function (user, userRole) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/add'; //API
        var obj = {
            firstname: user.firstName,
            lastname: user.lastName,
            companyName: user.companyName,
            phone: user.phone,
            email: user.email,
            state: user.state,
            county: user.county,
            password: user.password,
            address: user.address,
            services: user.services,
            userRole: userRole
        };
        console.log(obj);
        return this
            .http
            .post(uri, obj);
    };
    // Call Email Already exist API   
    UserService.prototype.emailAlready = function (email) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/user_email'; //API 
        var obj = {
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    // Get state API   
    UserService.prototype.getStates = function () {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/states'; //API 
        /* const obj = {
          email :email
        }; */
        return this
            .http
            .get(uri);
    };
    //  Call User role API   
    UserService.prototype.getUserRoles = function (usertype) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/roles/' + usertype; //API 
        return this
            .http
            .get(uri);
    };
    //  Call Login API   
    UserService.prototype.login_user = function (email, password) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/userlogin';
        var obj = {
            email: email,
            password: password,
        };
        return this
            .http
            .post(uri, obj);
    };
    //  Get Current logged in user data
    UserService.prototype.getUsers = function () {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        headers = headers.append('Access-Control-Allow-Origin', '*');
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user';
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    //  Get Current logged in user data
    UserService.prototype.getPartner = function (id) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/edit/' + id;
        console.log(uri);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    // Get user data and return to Edit conponent
    UserService.prototype.editUser = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/edit/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    // Call user profile update API 
    UserService.prototype.updateUser = function (user, id, image) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/update/' + id;
        var formData = new FormData();
        formData.append('firstname', user.firstName);
        formData.append('lastname', user.lastName);
        formData.append('phone', user.phone);
        formData.append('state', user.state);
        formData.append('county', user.county);
        formData.append('city', user.city);
        formData.append('address', user.address);
        formData.append('zipcode', user.zip);
        if (image !== undefined) {
            formData.append('profile_pic', image);
        }
        console.log(formData);
        return this
            .http
            .post(uri, formData);
    };
    UserService.prototype.updateUserWithoutFIle = function (user, id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/update/' + id;
        var formData = new FormData();
        formData.append('firstname', user.firstName);
        formData.append('lastname', user.lastName);
        formData.append('phone', user.phone);
        formData.append('state', user.state);
        formData.append('county', user.county);
        formData.append('city', user.city);
        formData.append('address', user.address);
        formData.append('zipcode', user.zip);
        console.log(formData);
        return this
            .http
            .post(uri, formData);
    };
    UserService.prototype.updatePartner = function (user, id, image) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/update/' + id;
        var formData = new FormData();
        formData.append('firstname', user.firstName);
        formData.append('lastname', user.lastName);
        formData.append('companyName', user.companyName);
        formData.append('phone', user.phone);
        formData.append('state', user.state);
        /* formData.append('county',  user.county);
        formData.append('services',  user.services); */
        for (var i = 0; i < user.county.length; i++) {
            formData.append('county[]', user.county[i]);
        }
        for (var i = 0; i < user.services.length; i++) {
            formData.append('services[]', user.services[i]);
        }
        formData.append('address', user.address);
        formData.append('zipcode', user.zip);
        if (image !== undefined) {
            formData.append('profile_pic', image);
        }
        console.log(formData);
        return this
            .http
            .post(uri, formData);
    };
    UserService.prototype.updatePartnerWithoutFIle = function (user, id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/update/' + id;
        var formData = new FormData();
        console.log(user.county);
        console.log(user.services);
        formData.append('firstname', user.firstName);
        formData.append('lastname', user.lastName);
        formData.append('companyName', user.companyName);
        formData.append('phone', user.phone);
        formData.append('state', user.state);
        for (var i = 0; i < user.county.length; i++) {
            formData.append('county[]', user.county[i]);
        }
        for (var i = 0; i < user.services.length; i++) {
            formData.append('services[]', user.services[i]);
        }
        /* formData.append('county',  user.county);
        formData.append('services',  user.services); */
        formData.append('address', user.address);
        formData.append('zipcode', user.zip);
        console.log(formData);
        return this
            .http
            .post(uri, formData);
    };
    // Call verify user account API  
    UserService.prototype.getUserVerified = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/verify/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    UserService.prototype.forgot_password = function (email) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/forgotpassword';
        var obj = {
            email: email
        };
        return this
            .http
            .post(uri, obj);
    };
    // Request node to check password code 
    UserService.prototype.password_code = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/resetpassword/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    // Reset passwrd 
    UserService.prototype.resetPassword = function (password, id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/updatepassword/' + id;
        var obj = {
            password: password
        };
        return this
            .http
            .post(uri, obj);
    };
    UserService.prototype.updatePassword = function (password) {
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/changepassword/';
        var obj = {
            password: password
        };
        return this
            .http
            .post(uri, obj, { headers: headers });
    };
    UserService.prototype.deleteUser = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    /*----------------------- getPartnerJobProfile - get parter completed job, in processing job rating and reviews -http://18.191.219.125:3001/api/partner/RatingReviewJobs/5cb701d1dc705b16225770ce
    ----------------------*/
    UserService.prototype.getPartnerJobProfile = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/RatingReviewJobs/' + id;
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    /*----------------------- getPartnerCompletedJobsAndReviews - get parter completed job, in processing job rating and reviews -http://18.191.219.125:3001/api/partner/RatingReviewJobs/5cb701d1dc705b16225770ce
    ----------------------*/
    UserService.prototype.getPartnerCompletedJobsAndReviews = function (id) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'partner/allreviews/' + id;
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    /*-------------------- getNotificationCountForUser ------------------------*/
    UserService.prototype.getNotificationCountForUser = function () {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'allnotificationsCount';
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    /*-------------------- get all notifications ----------- http://18.191.219.125:3001/api/shownotifications-------------*/
    UserService.prototype.getAllNotifications = function (number) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'shownotifications/' + number;
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    /*-------------------- read all notifications ----------- http://18.191.219.125:3001/api/readAllNotification-------------*/
    UserService.prototype.readAllNotifications = function () {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'readAllNotification/';
        var token = localStorage.getItem('login_token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append('token', token);
        return this
            .http
            .get(uri, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res;
        }));
    };
    UserService.prototype.getCounties = function (state) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/counties'; //API 
        var obj = {
            state: state
        };
        return this
            .http
            .post(uri, obj);
    };
    UserService.prototype.getCities = function (county, state) {
        var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'user/cities'; //API 
        var obj = {
            state: state,
            county: county
        };
        return this
            .http
            .post(uri, obj);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    /*  production: false,
    apiUrl: 'http://www.movelaunch.com/api/',
    server_url: 'http://www.movelaunch.com/' ,
    image_url: 'http://www.movelaunch.com/uploads/user/',
    partner_image_url: 'http://www.movelaunch.com/uploads/partner/',
    bid_document_url: 'http://www.movelaunch.com/uploads/bids/'  */
    production: false,
    apiUrl: 'http://23.251.151.250:5555/api/',
    server_url: 'http://23.251.151.250:5555/',
    image_url: 'http://23.251.151.250:5555/uploads/user/',
    partner_image_url: 'http://23.251.151.250:5555/uploads/partner/',
    bid_document_url: 'http://23.251.151.250:5555/uploads/bids/'
    /* apiUrl: 'http://localhost:3001/api/',
    server_url: 'http://localhost:3001' */
    //3.13.230.48
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    preserveWhitespaces: true
})
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\movelaunch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map