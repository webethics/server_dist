(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-views-partner-users-module"],{

/***/ "./src/app/admin/views/partner/edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/views/partner/edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<strong>Edit Service</strong>\r\n\t\t\t</div>\r\n\t\t\t<h3 style=\"color:green\">{{ data }}</h3>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<form [formGroup]=\"angForm\" class=\"form-horizontal\" novalidate>\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">First Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"fname\" formControlName=\"fname\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.fname.errors}\" placeholder=\"fname**\" [(ngModel)]=\"firstname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.fname.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Last Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lName\" formControlName=\"lName\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.lName.errors}\" placeholder=\"last Name**\" [(ngModel)]=\"lastname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.lName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.lName.errors.required\">Last Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t <div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">State</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select  class=\"form-control getstate\" id=\"state\" formControlName=\"state\" (change)= \"getCounties($event)\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" [(ngModel)]=\"state\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">County</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select  id=\"county\"  class=\"form-control getstate\" formControlName=\"county\" (change)= \"getCities($event)\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.county.errors }\" [(ngModel)]=\"county\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select County</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.county.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.county.errors.required\">County is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t\t<select  id=\"city\"  class=\"form-control getstate\" formControlName=\"city\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" [(ngModel)]=\"city\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select City</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" title=\"{{ city }}\" value=\"{{ city }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ city | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.city.errors.required\">City is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t \r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Email Address</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"emailad\" formControlName=\"emailad\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.emailad.errors}\" placeholder=\"Email Address**\" [(ngModel)]=\"email\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.emailad.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.emailad.errors.required\">Email address is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Street Address</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"StreetAdress\" formControlName=\"StreetAdress\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.StreetAdress.errors}\" placeholder=\"Street Address**\" [(ngModel)]=\"address\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.StreetAdress.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.StreetAdress.errors.required\">Street Adress is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Zip code</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"zipcode\" formControlName=\"zipcode\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.zipcode.errors}\" placeholder=\"Zip-code**\" [(ngModel)]=\"zipcode\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.zipcode.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.zipcode.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Phone\" formControlName=\"Phone\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors}\" placeholder=\"Phone Number**\" [(ngModel)]=\"phone\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.Phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.Phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\">\r\n\t\t\t\t\t\t<button type=\"submit\"(click)=\"updatedata();\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/partner/edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/partner/edit.component.ts ***!
  \*******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







// import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

var EditComponent = /** @class */ (function () {
    function EditComponent(service, router, route, fb, userservice, jobservice) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.userservice = userservice;
        this.jobservice = jobservice;
        this.submitted = false;
        this.dtOptions = {};
        this.states = '';
        this.counties = '';
        this.stateName = '';
        this.statename = '';
        this.countyName = '';
        this.currentState = '';
        this.currentCounty = '';
        this.userid = '';
        this.cities = '';
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.LoginForm();
    }
    EditComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            emailad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            StreetAdress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            county: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')])]
        });
    };
    EditComponent.prototype.getCounties = function (event) {
        var _this = this;
        this.stateName = event.target.value;
        this.userservice.getCounties(this.stateName).subscribe(function (result) {
            _this.counties = result;
        });
    };
    EditComponent.prototype.getCities = function (event) {
        var _this = this;
        this.countyName = event.target.value;
        this.statename = this.angForm.value.state;
        this.userservice.getCities(this.countyName, this.statename).subscribe(function (result) {
            _this.cities = result;
        });
    };
    /* On Submit service Update function is called*/
    EditComponent.prototype.updatedata = function () {
        var _this = this;
        this.submitted = true;
        if (this.angForm.invalid) {
            return;
        }
        else {
            this.serviceId = this.route.snapshot.paramMap.get('serviceId');
            if (this.angForm.value) {
                var obj = { 'firstname': this.angForm.value.fname, 'phone': this.angForm.value.Phone, 'address': this.angForm.value.StreetAdress,
                    'zipcode': this.angForm.value.zipcode, 'lastname': this.angForm.value.lName, 'email': this.angForm.value.emailad,
                    'county': this.angForm.value.county, 'state': this.angForm.value.state, 'city': this.angForm.value.city };
                this.service.updateusersbyid(this.serviceId, obj).subscribe(function (res) {
                    _this.data = res.message;
                    setTimeout(function () {
                        _this.router.navigate(['/admin/partner/list']);
                    }, 2000);
                }, function (err) {
                    console.log(err); //   this.router.navigate(['services']);
                });
            }
            else {
                window.alert('Please add the service name');
            }
        }
    };
    Object.defineProperty(EditComponent.prototype, "f", {
        get: function () { return this.angForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            columnDefs: [{ orderable: false, targets: [3] }]
        };
        this.serviceId = this.route.snapshot.paramMap.get('serviceId');
        this.service.userseditservicecall(this.serviceId).subscribe(function (res) {
            console.log(res.data);
            _this.results = res.data;
            var currentState = _this.results.state;
            var currentCounty = _this.results.county;
            var user_pic = _this.results.profile_pic;
            var user_id = _this.results._id;
            _this.userservice.getStates().subscribe(function (result) {
                _this.states = result;
            });
            if (currentState != undefined || currentState != 'undefined') {
                _this.userservice.getCounties(currentState).subscribe(function (result) {
                    _this.counties = result;
                });
            }
            else {
                _this.userservice.getCounties(_this.states).subscribe(function (result) {
                    _this.counties = result;
                });
            }
            if (currentCounty != undefined || currentCounty != 'undefined') {
                _this.userservice.getCities(currentCounty, currentState).subscribe(function (result) {
                    _this.cities = result;
                });
            }
            else {
                _this.userservice.getCities(_this.counties, _this.states).subscribe(function (result) {
                    _this.counties = result;
                });
            }
            _this.firstname = _this.results.firstname;
            _this.lastname = _this.results.lastname;
            _this.city = _this.results.city;
            _this.email = _this.results.email;
            _this.address = _this.results.address;
            _this.zipcode = _this.results.zipcode;
            _this.state = _this.results.state;
            _this.county = _this.results.county;
            _this.phone = _this.results.phone;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/views/partner/edit.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/partner/users-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/views/partner/users-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/partner/list.component.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/partner/edit.component.ts");



//import { AddComponent } from './add.component';


var routes = [
    {
        path: '',
        data: {
            title: 'Users'
        },
        children: [
            /*  {
               path: 'add',
               component: AddComponent,
               data: {
                 title: 'Add'
               }
             }, */
            {
                path: 'list',
                component: _list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'edit/:serviceId',
                component: _edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
                data: {
                    title: 'Edit'
                }
            }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/views/partner/users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/views/partner/users.module.ts ***!
  \*****************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/partner/list.component.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/partner/edit.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/admin/views/partner/users-routing.module.ts");

// Angular




// User Component
//import { AddComponent } from './add.component';


// Dropdowns Component

// Components Routing

var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_8__["UsersRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
            ],
            declarations: [
                // AddComponent,
                _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-views-partner-users-module.js.map