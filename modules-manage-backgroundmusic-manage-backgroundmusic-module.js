(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-backgroundmusic-manage-backgroundmusic-module"],{

/***/ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"an-page-content\">\n    <div class=\"an-content-body manage-price\">\n        <div class=\"an-body-topbar wow fadeIn\">\n            <div class=\"an-page-title\">\n                <h2>Add Background Music</h2>\n            </div>\n        </div>\n        <form [formGroup]=\"addBackgroundMusicForm\" novalidate (ngSubmit)=\"onAddMusic()\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <div class=\"\">\n                            <input type=\"text\" formControlName=\"music_url\" class=\"form-control\" id=\"inputUrl\" placeholder=\"BAckground Music Url\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <div class=\"\">\n                            <input type=\"text\" formControlName=\"musicName\" class=\"form-control\" id=\"inputName\" placeholder=\"Music Name\">\n                        </div>\n                    </div>\n                </div>\n               \n             \n            </div>\n            <div class=\"\">\n                <div class=\"form-group\">\n                    <div class=\"\">\n                        <button type=\"submit\" class=\"btn btn-primary\">ADD</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AddBackgroundmusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBackgroundmusicComponent", function() { return AddBackgroundmusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/admin/admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBackgroundmusicComponent = /** @class */ (function () {
    function AddBackgroundmusicComponent(adminService) {
        this.adminService = adminService;
    }
    AddBackgroundmusicComponent.prototype.ngOnInit = function () {
        this.addBackgroundMusicForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            music_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            musicName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])
        });
    };
    AddBackgroundmusicComponent.prototype.onAddMusic = function () {
        if (this.addBackgroundMusicForm.valid) {
            this.adminService.addBackgroundMusic(this.addBackgroundMusicForm.value).subscribe(function (res) {
                console.log('response', res);
            });
        }
        else {
        }
    };
    AddBackgroundmusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-backgroundmusic',
            template: __webpack_require__(/*! ./add-backgroundmusic.component.html */ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.html"),
            styles: [__webpack_require__(/*! ./add-backgroundmusic.component.css */ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AddBackgroundmusicComponent);
    return AddBackgroundmusicComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-backgroundmusic works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EditBackgroundmusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBackgroundmusicComponent", function() { return EditBackgroundmusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditBackgroundmusicComponent = /** @class */ (function () {
    function EditBackgroundmusicComponent() {
    }
    EditBackgroundmusicComponent.prototype.ngOnInit = function () {
    };
    EditBackgroundmusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-backgroundmusic',
            template: __webpack_require__(/*! ./edit-backgroundmusic.component.html */ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.html"),
            styles: [__webpack_require__(/*! ./edit-backgroundmusic.component.css */ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditBackgroundmusicComponent);
    return EditBackgroundmusicComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"an-page-content\">\n    <div class=\"an-content-body\">\n\n        <!-- end AN-BREADCRUMB -->\n\n        <div class=\"an-body-topbar wow fadeIn\">\n            <div class=\"an-page-title\">\n                <h2>List Background Music Links</h2>\n            </div>\n        </div>\n    \n\n        <!-- end .ROW -->\n        <br>\n        <div class=\"table-responsive\">\n            <table class=\"table NoTopBorder custom-table\">\n                <tr>\n                    <!-- <th>Link</th> -->\n                    <th>Thumbnail</th>\n                    <th>Title</th>\n                 \n                    <th>Action</th>\n                </tr>\n                <tr *ngFor=\"let bgmAr of bgmArr\">\n                    <!-- <td>\n                        {{youtubeAr.youtube_url}}\n                    </td> -->\n                    <td>\n                        {{bgmAr.music_url}}\n                    </td>\n                    <td>\n                        {{bgmAr.musicName}}\n                    </td>\n                \n                    <td>\n                        <ul>\n                            <li>\n                                <a [routerLink]=\"['/admin/backgroundmusic/edit-background/',bgmAr._id]\" title=\"Edit\">\n                                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                                </a>\n                            </li>\n                            <li>\n                                <a (click)=\"delete(bgmAr._id)\" title=\"Delete\">\n                                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                </a>\n                            </li>\n                            <li>\n  \n                                <a *ngIf=\"bgmAr.isActive==true\" (click)=\"Deactivate(bgmAr._id)\" title=\"Deactivate\">\n                                    <i class=\"fa fa-bell-slash\" aria-hidden=\"true\"></i>\n                                </a>\n  \n                                <a *ngIf=\"bgmAr.isActive==false\" (click)=\"activate(bgmAr._id)\" title=\"Activate\">\n                                    <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                </a>\n  \n                            </li>\n  \n                        </ul>\n                    </td>\n                </tr>\n\n\n            \n              \n            </table>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ListBackgroundmusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBackgroundmusicComponent", function() { return ListBackgroundmusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/admin/admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListBackgroundmusicComponent = /** @class */ (function () {
    function ListBackgroundmusicComponent(adminService) {
        this.adminService = adminService;
    }
    ListBackgroundmusicComponent.prototype.ngOnInit = function () {
        this.listBackgroundMusicInfo();
    };
    ListBackgroundmusicComponent.prototype.listBackgroundMusicInfo = function () {
        var _this = this;
        this.adminService.listBackgroundMusic().subscribe(function (res) {
            console.log('response', res);
            if (res.code == 200) {
                _this.bgmArr = res.data;
            }
        });
    };
    ListBackgroundmusicComponent.prototype.delete = function (id) {
        var _this = this;
        console.log("The deleting id is " + id);
        this.adminService.deleteBackgroundMusic(id).subscribe(function (res) {
            console.log('response', res);
            if (res.code == 200) {
                _this.listBackgroundMusicInfo();
            }
        }, function (error) {
            return console.log('There was an error: ', error);
        });
    };
    ListBackgroundmusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-backgroundmusic',
            template: __webpack_require__(/*! ./list-backgroundmusic.component.html */ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.html"),
            styles: [__webpack_require__(/*! ./list-backgroundmusic.component.css */ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], ListBackgroundmusicComponent);
    return ListBackgroundmusicComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/manage-backgroundmusic-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/manage-backgroundmusic-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageBackgroundmusicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBackgroundmusicRoutingModule", function() { return ManageBackgroundmusicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_backgroundmusic_add_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-backgroundmusic/add-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.ts");
/* harmony import */ var _edit_backgroundmusic_edit_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-backgroundmusic/edit-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.ts");
/* harmony import */ var _list_backgroundmusic_list_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-backgroundmusic/list-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'add-background',
        component: _add_backgroundmusic_add_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_2__["AddBackgroundmusicComponent"]
    },
    {
        path: 'list-background',
        component: _list_backgroundmusic_list_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_4__["ListBackgroundmusicComponent"]
    },
    {
        path: 'edit-background/:id',
        component: _edit_backgroundmusic_edit_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_3__["EditBackgroundmusicComponent"]
    }
];
var ManageBackgroundmusicRoutingModule = /** @class */ (function () {
    function ManageBackgroundmusicRoutingModule() {
    }
    ManageBackgroundmusicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageBackgroundmusicRoutingModule);
    return ManageBackgroundmusicRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-backgroundmusic/manage-backgroundmusic.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-backgroundmusic/manage-backgroundmusic.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageBackgroundmusicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBackgroundmusicModule", function() { return ManageBackgroundmusicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_backgroundmusic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-backgroundmusic-routing.module */ "./src/app/admin/modules/manage-backgroundmusic/manage-backgroundmusic-routing.module.ts");
/* harmony import */ var _add_backgroundmusic_add_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-backgroundmusic/add-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/add-backgroundmusic/add-backgroundmusic.component.ts");
/* harmony import */ var _edit_backgroundmusic_edit_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-backgroundmusic/edit-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/edit-backgroundmusic/edit-backgroundmusic.component.ts");
/* harmony import */ var _list_backgroundmusic_list_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-backgroundmusic/list-backgroundmusic.component */ "./src/app/admin/modules/manage-backgroundmusic/list-backgroundmusic/list-backgroundmusic.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ManageBackgroundmusicModule = /** @class */ (function () {
    function ManageBackgroundmusicModule() {
    }
    ManageBackgroundmusicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_backgroundmusic_add_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_3__["AddBackgroundmusicComponent"], _edit_backgroundmusic_edit_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_4__["EditBackgroundmusicComponent"], _list_backgroundmusic_list_backgroundmusic_component__WEBPACK_IMPORTED_MODULE_5__["ListBackgroundmusicComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_backgroundmusic_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManageBackgroundmusicRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], ManageBackgroundmusicModule);
    return ManageBackgroundmusicModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-manage-backgroundmusic-manage-backgroundmusic-module.js.map