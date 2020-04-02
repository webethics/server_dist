(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-backgroundmusic-manage-backgroundmusic-module"],{

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils/eles-app-constant */ "./src/app/shared/utils/eles-app-constant.ts");
/* harmony import */ var _shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/string-constants */ "./src/app/shared/utils/string-constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.addYouTubeLink = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ADD_YOUTUBE_LINK, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.listYoutubeLink = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LIST_YOUTUBE_LINK);
    };
    AdminService.prototype.deleteYoutubeLink = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_YOUTUBE_LINK + id);
    };
    AdminService.prototype.blockUser = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].BLOCK_USERS + id);
    };
    AdminService.prototype.unBlockUser = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].UNBLOCK_USERS + id);
    };
    //list users on the user 
    AdminService.prototype.offlinelistUsers = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].OFFLINE_LIST_USERS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.listUsers = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LIST_USERS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.editYoutubeLink = function (data) {
        if (data) {
            return this.http.put(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EDIT_YOUTUBE_LINKS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.enable_disable_subscrition = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].SUBSCRIBE_ENABLE_DISABLE, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    // editUser(data: any, id): Observable<any> {
    //   if (data) {
    //     return this.http.put(ElesAppConst.EDIT_VIDEO_INFO + id, data);
    //   } else {
    //     return Observable.create((observer: Observer<any>) => { return observer.error(StringConst.INVALID_INFORMATION); })
    //   }
    // }
    // editQuestion(data: any, id): Observable<any> {
    //   if (data) {
    //     return this.http.put(ElesAppConst.EDIT_VIDEO_INFO + id, data);
    //   } else {
    //     return Observable.create((observer: Observer<any>) => { return observer.error(StringConst.INVALID_INFORMATION); })
    //   }
    // }
    // for background music
    AdminService.prototype.addBackgroundMusic = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ADD_BACKGROUND_MUSIC, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.addQuestions = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ADD_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.EditQuestions = function (data) {
        if (data) {
            return this.http.put(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EDIT_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.deleteQuestions = function (data) {
        if (data) {
            return this.http.delete(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.deleteMultipleQuestions = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_MULTIPLE_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.sendNotifcations = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].SEND_NOTIFICATIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.listBackgroundMusic = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LIST_BACKGROUND_MUSIC);
    };
    AdminService.prototype.deleteBackgroundMusic = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_YOUTUBE_LINK + id);
    };
    AdminService.prototype.registeredUser = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].REGISTERED_USERS);
    };
    AdminService.prototype.onlineUser = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ONLINE_USERS);
    };
    AdminService.prototype.onlineMaleFemale = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ONLINE_MALE_FEMALE);
    };
    AdminService.prototype.deviceUsers = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DEVICE_USERS);
    };
    AdminService.prototype.ageWiseUsers = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].AGE_WISE_USERS);
    };
    AdminService.prototype.superImportant = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].SUPER_IMPORTANT + id);
    };
    AdminService.prototype.listRankedMatch = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LIST_RANKED_MATCH + id);
    };
    AdminService.prototype.videoCallDone = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].VIDEO_CALL_DONE + id);
    };
    AdminService.prototype.superImportantOfUser2 = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].SUPERIMP_OF_USER2 + id);
    };
    AdminService.prototype.introduceYourSelf = function (id) {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].INTRODUCE_YOUR_SELF + id);
    };
    AdminService.prototype.getReview = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].GET_REVIEWS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.deleteUser = function (data) {
        if (data) {
            return this.http.delete(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_USER + data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.preferredQuestion = function (data) {
        // console.log(data,'$$$$$$')
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].PREFERRED_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.editReview = function (data) {
        // console.log(data,'$$$$$$')
        if (data) {
            return this.http.put(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EDIT_REVIEW, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.userInfoAbusiveAlert = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].USER_INFO_ABUSIVE_ALERT);
    };
    AdminService.prototype.listQuestions = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LIST_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.deleteMultipleYoutubeLinks = function (data) {
        if (data) {
            console.log('csassa', data);
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DELETE_MULTIPLE_YOUTUBE_LINKS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.dailyLogs = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].DAILY_REPORT, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.matchReporting = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].MATCH_REPORTING, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.getSortedListbasedonQuestions = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].GET_SORTED_LIST_BASED_ON_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.arrangeFirstTimeUserDate = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].SETUP_FIRST_DATE, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.actualDateReport = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ACTUAL_DATE_REPORT, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.entireSortedListOfUser = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ENTIRE_SORTED_LIST, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.questionnierSortedList = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].QUESTIONNIER_SORTED_LIST, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.nomatchpassusersSortedList = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].NOMATCHPASS_SORTED_LIST, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.nomatchpassusers = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].NOMATCHPASS_USERS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.acceptRejectInfo = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ACCEPT_REJECT_INFO, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.callDropInfo = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].CALL_DROP_INFO, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.viewallvideoDateInfo = function (data) {
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].VIEW_ALL_VIDEO_DATES, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.editAGE_DOB = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EDIT_AGE_DOB, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.editGender = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EDIT_GENDER, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.genderFilter = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].GENDER_FILTER, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.ageList = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].AGE_LIST);
    };
    AdminService.prototype.ageFilter = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].AGE_FILTER, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.individualNotification = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].INDIVIDUAL_NOTIFICATION, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.lessMarriageFocused = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].LESS_MARRIAGE_FOCUSED, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.userInfoToCSV = function () {
        return this.http.get(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].USERS_LIST_CSV_REPORT);
    };
    AdminService.prototype.enableOrDisableGenderAlarm = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].ENABLE_DISABLE_GENDER_ALARM, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService.prototype.exportQuestionsToCSV = function (data) {
        if (data) {
            // console.log('csassa',data)
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].EXPORT_QUESTIONS, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

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