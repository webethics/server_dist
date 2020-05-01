(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-views-services-services-module"],{

/***/ "./src/app/admin/views/services/add.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/views/services/add.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n \r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Add Plan</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\">Static</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">Username</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\r\n                <span class=\"help-block\">This is a help text</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\r\n                <span class=\"help-block\">Please enter your email</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\r\n                <span class=\"help-block\">Please enter a complex password</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Date Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\r\n                <span class=\"help-block\">Please enter a valid date</span>\r\n              </div>\r\n            </div>\r\n           \r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n   \r\n  </div><!--/.row-->\r\n \r\n \r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/services/add.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/services/add.component.ts ***!
  \*******************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddComponent = /** @class */ (function () {
    function AddComponent() {
    }
    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/views/services/add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/services/edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/views/services/edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n \r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n\t\t\t<strong>Edit Service</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\t\t\t<p style=\"color:green\">{{ data }}</p>\r\n\t\t\t<form [formGroup]=\"angForm\" class=\"form-horizontal\" novalidate>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t  <label class=\"col-md-3 col-form-label\" for=\"text-input\">Service Name</label>\r\n\t\t\t\t  <div class=\"col-md-9\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"serviceName\" formControlName=\"serviceName\" \r\n\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.serviceName.errors}\" placeholder=\"Service Name**\" [(ngModel)]=\"name\">\r\n\t\t\t\t  </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-footer\">\r\n\t\t\t\t\t<button type=\"submit\"(click)=\"submitService();\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n\t\t\t\t</div>\r\n          \t</form>\r\n        </div>\r\n        \r\n      </div>\r\n     \r\n    </div>\r\n   \r\n  </div>\r\n \r\n \r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/services/edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/views/services/edit.component.ts ***!
  \********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var EditComponent = /** @class */ (function () {
    function EditComponent(service, router, route, fb) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.submitted = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.LoginForm();
    }
    EditComponent.prototype.LoginForm = function () {
        this.angForm = this.fb.group({
            serviceName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    /* On Submit service Update function is called*/
    EditComponent.prototype.submitService = function () {
        var _this = this;
        this.serviceId = this.route.snapshot.paramMap.get('serviceId');
        if (this.angForm.value.serviceName) {
            this.service.updateservicebyid(this.serviceId, this.angForm.value.serviceName).subscribe(function (res) {
                _this.data = res.message;
                setTimeout(function () {
                    _this.router.navigate(['/admin/services/list']);
                }, 2000);
            }, function (err) {
                console.log(err); //   this.router.navigate(['services']);
            });
        }
        else {
            window.alert('Please add the service name');
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
        this.service.getServiceById(this.serviceId).subscribe(function (res) {
            console.log(res);
            _this.services = res.data;
            _this.name = _this.services.name;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
        //http://13.58.114.48:3001/api/admin/editServices/5c544a8515f5bb0c908b3014
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/views/services/edit.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/services/list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/views/services/list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    \r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Plans\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Service Name</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let service of services\">\r\n                <td>{{service.name}}</td>\r\n                <td><a [routerLink]=\"['/admin/services/edit', service._id]\" class=\"btn btn-primary\">Edit</a></td>\r\n\t\t\t        </tr>\r\n            </tbody>\r\n          </table>\r\n        \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n \r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/services/list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/views/services/list.component.ts ***!
  \********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/backend/admin.service */ "./src/app/services/backend/admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ListComponent = /** @class */ (function () {
    function ListComponent(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            columnDefs: [{ orderable: false, targets: [3] }]
        };
        // Call gertuser service function 
        this.service.getServices().subscribe(function (res) {
            console.log('ass', res);
            _this.services = res.data;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/views/services/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/services/services-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/views/services/services-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.component */ "./src/app/admin/views/services/add.component.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/services/edit.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/services/list.component.ts");







//import { CollapsesComponent } from './collapses.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Services'
        },
        children: [
            {
                path: 'add',
                component: _add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
                data: {
                    title: 'Add'
                }
            },
            {
                path: 'list',
                component: _list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'edit/:serviceId',
                component: _edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                data: {
                    title: 'Edit'
                }
            }
        ]
    }
];
var ServiceRoutingModule = /** @class */ (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        })
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/views/services/services.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/views/services/services.module.ts ***!
  \*********************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.component */ "./src/app/admin/views/services/add.component.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/services/edit.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/services/list.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/admin/views/services/services-routing.module.ts");

// Angular



// Forms Component



// Collapse Component
/* import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component'; */
// Dropdowns Component

// Components Routing

var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _services_routing_module__WEBPACK_IMPORTED_MODULE_8__["ServiceRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot()
                //CollapseModule.forRoot()
            ],
            declarations: [
                _add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"],
                _edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
                _list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]
                //CollapsesComponent
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-views-services-services-module.js.map