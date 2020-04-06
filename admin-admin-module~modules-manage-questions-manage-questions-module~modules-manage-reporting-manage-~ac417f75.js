(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module~modules-manage-questions-manage-questions-module~modules-manage-reporting-manage-~ac417f75"],{

/***/ "./node_modules/primeng/components/dom/domhandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/primeng/components/dom/domhandler.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomHandler = /** @class */ (function () {
    function DomHandler() {
    }
    DomHandler.addClass = function (element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    };
    DomHandler.addMultipleClasses = function (element, className) {
        if (element.classList) {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.classList.add(styles[i]);
            }
        }
        else {
            var styles = className.split(' ');
            for (var i = 0; i < styles.length; i++) {
                element.className += ' ' + styles[i];
            }
        }
    };
    DomHandler.removeClass = function (element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    };
    DomHandler.hasClass = function (element, className) {
        if (element.classList)
            return element.classList.contains(className);
        else
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    };
    DomHandler.siblings = function (element) {
        return Array.prototype.filter.call(element.parentNode.children, function (child) {
            return child !== element;
        });
    };
    DomHandler.find = function (element, selector) {
        return Array.from(element.querySelectorAll(selector));
    };
    DomHandler.findSingle = function (element, selector) {
        if (element) {
            return element.querySelector(selector);
        }
        return null;
    };
    DomHandler.index = function (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.indexWithinGroup = function (element, attributeName) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
            if (children[i] == element)
                return num;
            if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
                num++;
        }
        return -1;
    };
    DomHandler.relativePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;
        if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
            top = -1 * (elementDimensions.height);
            if (targetOffset.top + top < 0) {
                top = -1 * targetOffset.top;
            }
        }
        else {
            top = targetHeight;
        }
        if (elementDimensions.width > viewport.width) {
            // element wider then viewport and cannot fit on screen (align at left side of viewport)
            left = targetOffset.left * -1;
        }
        else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
            // element wider then viewport but can be fit on screen (align at right side of viewport)
            left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        }
        else {
            // element fits on screen (align with target)
            left = 0;
        }
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.absolutePosition = function (element, target) {
        var elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            if (top < 0) {
                top = windowScrollTop;
            }
        }
        else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }
        if (targetOffset.left + elementOuterWidth > viewport.width)
            left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
            left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
    };
    DomHandler.getHiddenElementOuterHeight = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
    };
    DomHandler.getHiddenElementOuterWidth = function (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
    };
    DomHandler.getHiddenElementDimensions = function (element) {
        var dimensions = {};
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return dimensions;
    };
    DomHandler.scrollInView = function (container, item) {
        var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
        var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
        var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
        var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
        var containerRect = container.getBoundingClientRect();
        var itemRect = item.getBoundingClientRect();
        var offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
        var scroll = container.scrollTop;
        var elementHeight = container.clientHeight;
        var itemHeight = this.getOuterHeight(item);
        if (offset < 0) {
            container.scrollTop = scroll + offset;
        }
        else if ((offset + itemHeight) > elementHeight) {
            container.scrollTop = scroll + offset - elementHeight + itemHeight;
        }
    };
    DomHandler.fadeIn = function (element, duration) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;
        var tick = function () {
            opacity = +element.style.opacity.replace(",", ".") + (new Date().getTime() - last) / duration;
            element.style.opacity = opacity;
            last = +new Date();
            if (+opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    };
    DomHandler.fadeOut = function (element, ms) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        var fading = setInterval(function () {
            opacity = opacity - gap;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(fading);
            }
            element.style.opacity = opacity;
        }, interval);
    };
    DomHandler.getWindowScrollTop = function () {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    };
    DomHandler.getWindowScrollLeft = function () {
        var doc = document.documentElement;
        return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    };
    DomHandler.matches = function (element, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p.webkitMatchesSelector || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(element, selector);
    };
    DomHandler.getOuterWidth = function (el, margin) {
        var width = el.offsetWidth;
        if (margin) {
            var style = getComputedStyle(el);
            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
    };
    DomHandler.getHorizontalPadding = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    };
    DomHandler.getHorizontalMargin = function (el) {
        var style = getComputedStyle(el);
        return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    };
    DomHandler.innerWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.width = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
    };
    DomHandler.getInnerHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
        return height;
    };
    DomHandler.getOuterHeight = function (el, margin) {
        var height = el.offsetHeight;
        if (margin) {
            var style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
    };
    DomHandler.getHeight = function (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
    };
    DomHandler.getWidth = function (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
    };
    DomHandler.getViewport = function () {
        var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
        return { width: w, height: h };
    };
    DomHandler.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + document.body.scrollTop,
            left: rect.left + document.body.scrollLeft
        };
    };
    DomHandler.replaceElementWith = function (element, replacementElement) {
        var parentNode = element.parentNode;
        if (!parentNode)
            throw "Can't replace element";
        return parentNode.replaceChild(replacementElement, element);
    };
    DomHandler.getUserAgent = function () {
        return navigator.userAgent;
    };
    DomHandler.isIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return true;
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return true;
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return true;
        }
        // other browser
        return false;
    };
    DomHandler.isIOS = function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    };
    DomHandler.isAndroid = function () {
        return /(android)/i.test(navigator.userAgent);
    };
    DomHandler.appendChild = function (element, target) {
        if (this.isElement(target))
            target.appendChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.appendChild(element);
        else
            throw 'Cannot append ' + target + ' to ' + element;
    };
    DomHandler.removeChild = function (element, target) {
        if (this.isElement(target))
            target.removeChild(element);
        else if (target.el && target.el.nativeElement)
            target.el.nativeElement.removeChild(element);
        else
            throw 'Cannot remove ' + element + ' from ' + target;
    };
    DomHandler.isElement = function (obj) {
        return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
            obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string");
    };
    DomHandler.calculateScrollbarWidth = function (el) {
        if (el) {
            var style = getComputedStyle(el);
            return (el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth));
        }
        else {
            if (this.calculatedScrollbarWidth !== null)
                return this.calculatedScrollbarWidth;
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "ui-scrollbar-measure";
            document.body.appendChild(scrollDiv);
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            this.calculatedScrollbarWidth = scrollbarWidth;
            return scrollbarWidth;
        }
    };
    DomHandler.calculateScrollbarHeight = function () {
        if (this.calculatedScrollbarHeight !== null)
            return this.calculatedScrollbarHeight;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "ui-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarHeight;
        return scrollbarHeight;
    };
    DomHandler.invokeElementMethod = function (element, methodName, args) {
        element[methodName].apply(element, args);
    };
    DomHandler.clearSelection = function () {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            }
            else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
                window.getSelection().removeAllRanges();
            }
        }
        else if (document['selection'] && document['selection'].empty) {
            try {
                document['selection'].empty();
            }
            catch (error) {
                //ignore IE bug
            }
        }
    };
    DomHandler.getBrowser = function () {
        if (!this.browser) {
            var matched = this.resolveUserAgent();
            this.browser = {};
            if (matched.browser) {
                this.browser[matched.browser] = true;
                this.browser['version'] = matched.version;
            }
            if (this.browser['chrome']) {
                this.browser['webkit'] = true;
            }
            else if (this.browser['webkit']) {
                this.browser['safari'] = true;
            }
        }
        return this.browser;
    };
    DomHandler.resolveUserAgent = function () {
        var ua = navigator.userAgent.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    DomHandler.isInteger = function (value) {
        if (Number.isInteger) {
            return Number.isInteger(value);
        }
        else {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
        }
    };
    DomHandler.isHidden = function (element) {
        return element.offsetParent === null;
    };
    DomHandler.getFocusableElements = function (element) {
        var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
        var visibleFocusableElements = [];
        for (var _i = 0, focusableElements_1 = focusableElements; _i < focusableElements_1.length; _i++) {
            var focusableElement = focusableElements_1[_i];
            if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
                visibleFocusableElements.push(focusableElement);
        }
        return visibleFocusableElements;
    };
    DomHandler.zindex = 1000;
    DomHandler.calculatedScrollbarWidth = null;
    DomHandler.calculatedScrollbarHeight = null;
    return DomHandler;
}());
exports.DomHandler = DomHandler;
//# sourceMappingURL=domhandler.js.map

/***/ }),

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
    /* videoCallDone(id): Observable<any> {
      return this.http.get(ElesAppConst.VIDEO_CALL_DONE + id);
    } */
    AdminService.prototype.videoCallDone = function (data) {
        //return this.http.get(ElesAppConst.VIDEO_CALL_DONE + id);
        if (data) {
            return this.http.post(_shared_utils_eles_app_constant__WEBPACK_IMPORTED_MODULE_3__["ElesAppConst"].VIDEO_CALL_DONE, data);
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.error(_shared_utils_string_constants__WEBPACK_IMPORTED_MODULE_4__["StringConst"].INVALID_INFORMATION); });
        }
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



/***/ })

}]);
//# sourceMappingURL=admin-admin-module~modules-manage-questions-manage-questions-module~modules-manage-reporting-manage-~ac417f75.js.map