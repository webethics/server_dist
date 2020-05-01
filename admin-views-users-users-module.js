(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-views-users-users-module"],{

/***/ "./src/app/admin/views/users/add.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/views/users/add.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n \r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <strong>Add Users</strong>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\">Static</label>\r\n              <div class=\"col-md-9\">\r\n                <p class=\"form-control-static\">Username</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"text-input\">Text Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"text-input\" name=\"text-input\" class=\"form-control\" placeholder=\"Text\">\r\n                <span class=\"help-block\">This is a help text</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"email-input\">Email Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"email\" id=\"email-input\" name=\"email-input\" class=\"form-control\" placeholder=\"Enter Email\" autocomplete=\"email\">\r\n                <span class=\"help-block\">Please enter your email</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"password-input\">Password</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"password\" id=\"password-input\" name=\"password-input\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\">\r\n                <span class=\"help-block\">Please enter a complex password</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"date-input\">Date Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input class=\"form-control\" id=\"date-input\" type=\"date\" name=\"date-input\" placeholder=\"date\">\r\n                <span class=\"help-block\">Please enter a valid date</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"disabled-input\">Disabled Input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"text\" id=\"disabled-input\" name=\"disabled-input\" class=\"form-control\" placeholder=\"Disabled\" disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"textarea-input\">Textarea</label>\r\n              <div class=\"col-md-9\">\r\n                <textarea id=\"textarea-input\" name=\"textarea-input\" rows=\"9\" class=\"form-control\" placeholder=\"Content..\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"select1\">Select</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"select1\" name=\"select1\" class=\"form-control\">\r\n                  <option value=\"0\">Please select</option>\r\n                  <option value=\"1\">Option #1</option>\r\n                  <option value=\"2\">Option #2</option>\r\n                  <option value=\"3\">Option #3</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"select2\">Select Large</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"select2\" name=\"select2\" class=\"form-control form-control-lg\">\r\n                  <option value=\"0\">Please select</option>\r\n                  <option value=\"1\">Option #1</option>\r\n                  <option value=\"2\">Option #2</option>\r\n                  <option value=\"3\">Option #3</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"select3\">Select Small</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"select3\" name=\"select3\" class=\"form-control form-control-sm\">\r\n                  <option value=\"0\">Please select</option>\r\n                  <option value=\"1\">Option #1</option>\r\n                  <option value=\"2\">Option #2</option>\r\n                  <option value=\"3\">Option #3</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"disabledSelect\">Disabled Select</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"disabledSelect\" class=\"form-control\" disabled>\r\n                  <option value=\"0\">Please select</option>\r\n                  <option value=\"1\">Option #1</option>\r\n                  <option value=\"2\">Option #2</option>\r\n                  <option value=\"3\">Option #3</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"multiple-select\">Multiple select</label>\r\n              <div class=\"col-md-9\">\r\n                <select id=\"multiple-select\" name=\"multiple-select\" class=\"form-control\" size=\"5\" multiple>\r\n                  <option value=\"1\">Option #1</option>\r\n                  <option value=\"2\">Option #2</option>\r\n                  <option value=\"3\">Option #3</option>\r\n                  <option value=\"4\">Option #4</option>\r\n                  <option value=\"5\">Option #5</option>\r\n                  <option value=\"6\">Option #6</option>\r\n                  <option value=\"7\">Option #7</option>\r\n                  <option value=\"8\">Option #8</option>\r\n                  <option value=\"9\">Option #9</option>\r\n                  <option value=\"10\">Option #10</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" >Radios</label>\r\n              <div class=\"col-md-9 col-form-label\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio1\" value=\"option1\" checked>\r\n                  <label class=\"form-check-label\" for=\"radio1\">\r\n                    Option 1\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio2\" value=\"option2\">\r\n                  <label class=\"form-check-label\" for=\"radio2\">\r\n                    Option 2\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"radios\" id=\"radio3\" value=\"option3\">\r\n                  <label class=\"form-check-label\" for=\"radio3\">\r\n                    Option 3\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"inline-radios\">Inline Radios</label>\r\n              <div class=\"col-md-9 col-form-label\">\r\n                <div class=\"form-check form-check-inline mr-1\" id=\"inline-radios\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio1\" value=\"option1\">\r\n                  <label class=\"form-check-label\" for=\"inlineRadio1\">One</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio2\" value=\"option2\">\r\n                  <label class=\"form-check-label\" for=\"inlineRadio2\">Two</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"radio\" name=\"inline-radios\" id=\"inlineRadio3\" value=\"option3\">\r\n                  <label class=\"form-check-label\" for=\"inlineRadio3\">Three</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\">Checkboxes</label>\r\n              <div class=\"col-md-9 col-form-label\">\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox1\">\r\n                  <label class=\"form-check-label\" for=\"checkbox1\">\r\n                    Option 1\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox2\">\r\n                  <label class=\"form-check-label\" for=\"checkbox2\">\r\n                    Option 2\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check checkbox\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"option1\" id=\"checkbox3\">\r\n                  <label class=\"form-check-label\" for=\"checkbox3\">\r\n                    Option 3\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\">Inline Checkboxes</label>\r\n              <div class=\"col-md-9 col-form-label\">\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox1\" value=\"option1\">\r\n                  <label class=\"form-check-label\" for=\"inline-checkbox1\">One</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox2\" value=\"option2\">\r\n                  <label class=\"form-check-label\" for=\"inline-checkbox2\">Two</label>\r\n                </div>\r\n                <div class=\"form-check form-check-inline mr-1\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\" id=\"inline-checkbox3\" value=\"option3\">\r\n                  <label class=\"form-check-label\" for=\"inline-checkbox3\">Three</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"file-input\">File input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"file\" id=\"file-input\" name=\"file-input\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-md-3 col-form-label\" for=\"file-multiple-input\">Multiple File input</label>\r\n              <div class=\"col-md-9\">\r\n                <input type=\"file\" id=\"file-multiple-input\" name=\"file-multiple-input\" multiple>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n   \r\n  </div><!--/.row-->\r\n \r\n \r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/users/add.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/views/users/add.component.ts ***!
  \****************************************************/
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
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/views/users/add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/users/edit.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/users/edit.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<strong>Edit Service</strong>\r\n\t\t\t</div>\r\n\t\t\t<h3 style=\"color:green\">{{ data }}</h3>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<form [formGroup]=\"angForm\" class=\"form-horizontal\" novalidate>\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">First Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"fname\" formControlName=\"fname\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.fname.errors}\" placeholder=\"fname**\" [(ngModel)]=\"firstname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.fname.errors.required\">First Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Last Name</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lName\" formControlName=\"lName\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.lName.errors}\" placeholder=\"last Name**\" [(ngModel)]=\"lastname\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.lName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.lName.errors.required\">Last Name is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t <div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">State</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select  class=\"form-control getstate\" id=\"state\" formControlName=\"state\" (change)= \"getCounties($event)\" \r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" [(ngModel)]=\"state\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">Select State</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let state of states\" title=\"{{ state.abbv }}\" value=\"{{ state.abbv }}\">\r\n\t\t\t\t\t\t\t\t\t{{ state.name }}\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.state.errors.required\">State is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">County</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<select  id=\"county\"  class=\"form-control getstate\" formControlName=\"county\" (change)= \"getCities($event)\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.county.errors }\" [(ngModel)]=\"county\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select County</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let county of counties\" title=\"{{ county }}\" value=\"{{ county }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ county | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.county.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"f.county.errors.required\">County is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t\t<select  id=\"city\"  class=\"form-control getstate\" formControlName=\"city\"\r\n\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" [(ngModel)]=\"city\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">Select City</option>\r\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let city of cities\" title=\"{{ city }}\" value=\"{{ city }}\">\r\n\t\t\t\t\t\t\t\t\t\t{{ city | titlecase }}\r\n\t\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.city.errors.required\">City is required</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> \r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t \r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Email Address</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"emailad\" formControlName=\"emailad\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.emailad.errors}\" placeholder=\"Email Address**\" [(ngModel)]=\"email\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.emailad.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.emailad.errors.required\">Email address is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Street Address</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"StreetAdress\" formControlName=\"StreetAdress\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.StreetAdress.errors}\" placeholder=\"Street Address**\" [(ngModel)]=\"address\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.StreetAdress.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.StreetAdress.errors.required\">Street Adress is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Zip code</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"zipcode\" formControlName=\"zipcode\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.zipcode.errors}\" placeholder=\"Zip-code**\" [(ngModel)]=\"zipcode\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.zipcode.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.zipcode.errors.required\">Zipcode is required</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group row\">\t\r\n\t\t\t\t\t\t<label class=\"col-md-3 col-form-label\" for=\"text-input\">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-md-9\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Phone\" formControlName=\"Phone\" \r\n\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors}\" placeholder=\"Phone Number**\" [(ngModel)]=\"phone\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.Phone.errors.required\">Phone is required</div>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"f.Phone.errors.pattern\">Invlid Format EX:(123)465-7890</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-footer\">\r\n\t\t\t\t\t\t<button type=\"submit\"(click)=\"updatedata();\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/views/users/edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/views/users/edit.component.ts ***!
  \*****************************************************/
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
                        _this.router.navigate(['/admin/users/list']);
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
            _this.state = _this.results.state;
            _this.county = _this.results.county;
            _this.email = _this.results.email;
            _this.address = _this.results.address;
            _this.zipcode = _this.results.zipcode;
            _this.phone = _this.results.phone;
            _this.dtTrigger.next();
        }, function (err) {
            console.log(err); //   this.router.navigate(['login']);
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/admin/views/users/edit.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_backend_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/users/list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/admin/views/users/list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-align-justify\"></i> Users\r\n        </div>\r\n        <div class=\"card-body\">\r\n         <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>No.</th>\r\n                <th>Username</th>\r\n                <th>Email</th>\r\n                <th>Phone</th>\r\n\t\t\t\t        <th>Status</th>\r\n\t\t\t\t        <th>Active</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of users let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{ user.firstname }} {{ user.lastname }}</td>\r\n                <td>{{ user.email }}</td>\r\n                <td>{{ user.phone }}</td>\r\n                <!-- Status text --->\r\n                <td *ngIf=\"user.status==2\"><span class=\"badge badge-secondary status_txt_{{user._id}}\">Inactive</span></td>\r\n                <td *ngIf=\"user.status==1\"><span class=\"badge badge-success status_txt_{{user._id}}\">Active</span></td>\r\n                <td *ngIf=\"user.status==0\"><span class=\"badge badge-warning status_txt_{{user._id}}\">Pending</span></td>\r\n                <!-- Enable Disable text --->\r\n                <td>\r\n                    <label class=\"switch switch-3d switch-primary\">\r\n                      <input type=\"checkbox\" (click)=\"enableDisable(user._id,$event)\" *ngIf=\"user.status==2\"   \r\n                      class=\"switch-input\" (ngModel)=\"isChecked\">\r\n                      <input type=\"checkbox\" (click)=\"enableDisable(user._id,$event)\" *ngIf=\"user.status==1\" checked  \r\n                      class=\"switch-input\" (ngModel)=\"isChecked\">\r\n                      <span class=\"switch-slider\"></span>\r\n                    </label>\r\n                </td>\r\n                <td>\r\n                  <a [routerLink]=\"['/admin/users/edit', user._id]\" class=\"btn btn-primary\">Edit</a>\r\n                </td>\r\n                <!--td><button (click)=\"deleteUser(user._id)\"  class=\"btn btn-danger\">Delete</button></td-->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>\r\n  <!--/.row-->\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/views/users/list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/views/users/list.component.ts ***!
  \*****************************************************/
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);







var ListComponent = /** @class */ (function () {
    function ListComponent(http, service, router) {
        var _this = this;
        this.http = http;
        this.service = service;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isChecked = true;
        //Enable-Disable User
        this.enableDisable = function (user_id, evt) {
            _this.isChecked = evt.target.checked;
            var status = 2;
            if (_this.isChecked) {
                status = 1;
            }
            _this.service.updateUser(user_id, status).subscribe(function (res) {
                // Change status text 
                if (res.status == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).html('Active');
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).removeClass('badge-secondary');
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).addClass('badge-success');
                }
                if (res.status == 2) {
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).html('Inactive');
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).removeClass('badge-success');
                    jquery__WEBPACK_IMPORTED_MODULE_6__('.status_txt_' + user_id).addClass('badge-secondary');
                }
            }, function (err) {
                console.log(err);
            });
            //alert(this.isChecked+user_id);
        };
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            columnDefs: [{ orderable: false, targets: [4, 5, 6] }]
        };
        // Call gertuser service function //
        var user = 'user';
        this.service.getUsers(user).subscribe(function (res) {
            _this.users = res;
            _this.dtTrigger.next();
            //console.log(this.users);
        }, function (err) {
            console.log(err);
            //this.router.navigate(['login']);    
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/views/users/list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_backend_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/admin/views/users/users-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/views/users/users-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/users/edit.component.ts");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add.component */ "./src/app/admin/views/users/add.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/users/list.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Users'
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
                component: _list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                data: {
                    title: 'List'
                }
            },
            {
                path: 'edit/:serviceId',
                component: _edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
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

/***/ "./src/app/admin/views/users/users.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/views/users/users.module.ts ***!
  \***************************************************/
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
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.component */ "./src/app/admin/views/users/add.component.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.component */ "./src/app/admin/views/users/list.component.ts");
/* harmony import */ var _edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.component */ "./src/app/admin/views/users/edit.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/admin/views/users/users-routing.module.ts");

// Angular




// User Component



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
                _users_routing_module__WEBPACK_IMPORTED_MODULE_9__["UsersRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
            ],
            declarations: [
                _add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
                _list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                _edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-views-users-users-module.js.map