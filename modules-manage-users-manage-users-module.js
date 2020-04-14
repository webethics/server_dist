(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-users-manage-users-module"],{

/***/ "./node_modules/angular-tabs-component/dist/angular-tabs-component.module.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/angular-tabs-component.module.js ***!
  \***********************************************************************************/
/*! exports provided: TabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModule", function() { return TabModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./node_modules/angular-tabs-component/dist/components/index.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./node_modules/angular-tabs-component/dist/containers/index.js");
// Angular imports



// Components imports

// Containers imports

var TabModule = /** @class */ (function () {
    function TabModule() {
    }
    TabModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                    declarations: [
                        _components__WEBPACK_IMPORTED_MODULE_3__["TabComponent"],
                        _containers__WEBPACK_IMPORTED_MODULE_4__["TabsContainer"]
                    ],
                    exports: [
                        _components__WEBPACK_IMPORTED_MODULE_3__["TabComponent"],
                        _containers__WEBPACK_IMPORTED_MODULE_4__["TabsContainer"]
                    ]
                },] },
    ];
    /** @nocollapse */
    TabModule.ctorParameters = function () { return []; };
    return TabModule;
}());

//# sourceMappingURL=angular-tabs-component.module.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/components/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/components/index.js ***!
  \**********************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./node_modules/angular-tabs-component/dist/components/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _tabs__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/components/tabs/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/components/tabs/index.js ***!
  \***************************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component */ "./node_modules/angular-tabs-component/dist/components/tabs/tab.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _tab_component__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/components/tabs/tab.component.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/components/tabs/tab.component.js ***!
  \***********************************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers */ "./node_modules/angular-tabs-component/dist/containers/index.js");


var TabComponent = /** @class */ (function () {
    function TabComponent(tabs) {
        tabs.addTab(this);
    }
    TabComponent.prototype.getTabTitle = function () {
        return this.tabTitle;
    };
    TabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "tab",
                    host: {
                        "[class.hidden]": "!active"
                    },
                    template: "\n    <div class=\"tabs__panel\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    *{margin:0px;padding:0px}:host{display:flex;height:100%}:host(.hidden){display:none}.tabs__panel{background-color:#d7d7d7;width:100%;box-shadow:inset 0px 0px 0px 1px #c9c9c9;border-radius:6px;padding:30px 15px}\n  "]
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: _containers__WEBPACK_IMPORTED_MODULE_1__["TabsContainer"], },
    ]; };
    TabComponent.propDecorators = {
        'active': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'tabTitle': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return TabComponent;
}());

//# sourceMappingURL=tab.component.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/containers/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/containers/index.js ***!
  \**********************************************************************/
/*! exports provided: TabsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-container */ "./node_modules/angular-tabs-component/dist/containers/tabs-container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsContainer", function() { return _tabs_container__WEBPACK_IMPORTED_MODULE_0__["TabsContainer"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/containers/tabs-container/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/containers/tabs-container/index.js ***!
  \*************************************************************************************/
/*! exports provided: TabsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.container */ "./node_modules/angular-tabs-component/dist/containers/tabs-container/tabs.container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsContainer", function() { return _tabs_container__WEBPACK_IMPORTED_MODULE_0__["TabsContainer"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/containers/tabs-container/tabs.container.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/containers/tabs-container/tabs.container.js ***!
  \**********************************************************************************************/
/*! exports provided: TabsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsContainer", function() { return TabsContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TabsContainer = /** @class */ (function () {
    function TabsContainer() {
        this.currentTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ifTabSelected = false;
        this.tabs = [];
    }
    TabsContainer.prototype.addTab = function (tab) {
        this.tabs.push(tab);
    };
    TabsContainer.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
        this.currentTabChange.emit(tab);
    };
    TabsContainer.prototype.isDisabled = function () {
        if (this.disabled) {
            return "block";
        }
        else
            return "none";
    };
    TabsContainer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabs.forEach(function (tab) {
            if (tab.active) {
                _this.selectTab(tab);
                _this.ifTabSelected = true;
            }
        });
        if (!this.ifTabSelected) {
            this.selectTab(this.tabs[0]);
        }
    };
    TabsContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: "tabs",
                    template: "\n    <ul class=\"tabs__tab-bar\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"tabs__tab\" [ngClass]=\"{'active': tab.active == true}\">\n        {{ tab.tabTitle }}\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    <div class=\"overlay\" [style.display]=\"isDisabled()\"></div>\n  ",
                    styles: ["\n    *{margin:0px;padding:0px}:host{padding:10px 10px;display:flex;flex-direction:column;position:relative;min-height:calc(100vh - 20px)}.tabs__tab-bar{align-self:center;border-radius:4px;overflow:hidden;margin-bottom:-12px;z-index:1000;border:1px solid #c9c9c9}.tabs__tab{padding:4px 10px;display:inline-block;background-color:white;cursor:pointer}.tabs__tab.active{background-color:#6fbbff !important;color:white}.overlay{background:#e0e0e0;opacity:0.5;bottom:0;left:0;position:absolute;right:0;top:0;z-index:1000}\n  "]
                },] },
    ];
    /** @nocollapse */
    TabsContainer.ctorParameters = function () { return []; };
    TabsContainer.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'currentTabChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return TabsContainer;
}());

//# sourceMappingURL=tabs.container.js.map

/***/ }),

/***/ "./node_modules/angular-tabs-component/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular-tabs-component/dist/index.js ***!
  \***********************************************************/
/*! exports provided: TabComponent, TabsContainer, TabModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angular-tabs-component/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["TabComponent"]; });

/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ "./node_modules/angular-tabs-component/dist/containers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsContainer", function() { return _containers__WEBPACK_IMPORTED_MODULE_1__["TabsContainer"]; });

/* harmony import */ var _angular_tabs_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-tabs-component.module */ "./node_modules/angular-tabs-component/dist/angular-tabs-component.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabModule", function() { return _angular_tabs_component_module__WEBPACK_IMPORTED_MODULE_2__["TabModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js":
/*!*************************************************************!*\
  !*** ./node_modules/angular2-ladda/fesm5/angular2-ladda.js ***!
  \*************************************************************/
/*! exports provided: LaddaConfig, LaddaConfigArgs, LaddaDirective, LaddaModule, configAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfig", function() { return LaddaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaConfigArgs", function() { return LaddaConfigArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaDirective", function() { return LaddaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaddaModule", function() { return LaddaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configAttributes", function() { return configAttributes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ladda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ladda */ "./node_modules/ladda/js/ladda.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
LaddaConfigArgs = /** @class */ (function () {
    function LaddaConfigArgs() {
    }
    return LaddaConfigArgs;
}());
/** @type {?} */
var configAttributes = {
    "data-style": "style",
    "data-spinner-size": "spinnerSize",
    "data-spinner-color": "spinnerColor",
    "data-spinner-lines": "spinnerLines",
};
var LaddaConfig = /** @class */ (function () {
    function LaddaConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, config);
    }
    LaddaConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    LaddaConfig.ctorParameters = function () { return [
        { type: LaddaConfigArgs }
    ]; };
    return LaddaConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LaddaDirective = /** @class */ (function () {
    function LaddaDirective(el, config) {
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in configAttributes) {
            /** @type {?} */
            var configValue = config[configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                /** @type {?} */
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LaddaDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes.loading) {
            this.updateLadda(changes.loading.previousValue);
        }
        if (changes.disabled) {
            this.updateDisabled();
        }
    };
    /**
     * @return {?}
     */
    LaddaDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ladda = Object(ladda__WEBPACK_IMPORTED_MODULE_1__["create"])(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout((/**
         * @return {?}
         */
        function () { _this.updateLadda(false); }), 0);
    };
    /**
     * @return {?}
     */
    LaddaDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.ladda) {
            this.ladda.remove();
        }
    };
    /**
     * @private
     * @param {?} previousValue
     * @return {?}
     */
    LaddaDirective.prototype.updateLadda = /**
     * @private
     * @param {?} previousValue
     * @return {?}
     */
    function (previousValue) {
        /** @type {?} */
        var loading = typeof this.loading === 'number' || !!this.loading;
        /** @type {?} */
        var wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this.ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading) {
            this.ladda.start();
        }
        if (typeof this.loading === 'number') {
            this.ladda.setProgress(this.loading);
        }
    };
    /**
     * @private
     * @return {?}
     */
    LaddaDirective.prototype.updateDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.disabled = this.disabled;
    };
    LaddaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ladda]'
                },] }
    ];
    /** @nocollapse */
    LaddaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: LaddaConfigArgs, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LaddaConfig,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    LaddaDirective.propDecorators = {
        loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ladda',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return LaddaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LaddaModule = /** @class */ (function () {
    function LaddaModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LaddaModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: LaddaModule,
            providers: [
                { provide: LaddaConfig, useValue: config }
            ]
        };
    };
    LaddaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [LaddaDirective],
                    exports: [LaddaDirective],
                },] }
    ];
    return LaddaModule;
}());


//# sourceMappingURL=angular2-ladda.js.map


/***/ }),

/***/ "./node_modules/ladda/js/ladda.js":
/*!****************************************!*\
  !*** ./node_modules/ladda/js/ladda.js ***!
  \****************************************/
/*! exports provided: create, bind, stopAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAll", function() { return stopAll; });
/* harmony import */ var spin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spin.js */ "./node_modules/spin.js/spin.js");
/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2018 Hakim El Hattab, http://hakim.se
 */

 

// All currently instantiated instances of Ladda
var ALL_INSTANCES = [];

/**
 * Creates a new instance of Ladda which wraps the
 * target button element.
 *
 * @return An API object that can be used to control
 * the loading animation state.
 */
function create( button ) {

	if( typeof button === 'undefined' ) {
		console.warn( "Ladda button target must be defined." );
		return;
	}

	// The button must have the class "ladda-button"
	if ( !button.classList.contains('ladda-button') ) {
		button.classList.add( 'ladda-button' );
	}

	// Style is required, default to "expand-right"
	if( !button.hasAttribute( 'data-style' ) ) {
		button.setAttribute( 'data-style', 'expand-right' );
	}

	// The text contents must be wrapped in a ladda-label
	// element, create one if it doesn't already exist
	if( !button.querySelector( '.ladda-label' ) ) {
		var laddaLabel = document.createElement( 'span' );
		laddaLabel.className = 'ladda-label';
		wrapContent( button, laddaLabel );
	}

	// The spinner component
	var spinner,
		spinnerWrapper = button.querySelector( '.ladda-spinner' );

	// Wrapper element for the spinner
	if( !spinnerWrapper ) {
		spinnerWrapper = document.createElement( 'span' );
		spinnerWrapper.className = 'ladda-spinner';
	}

	button.appendChild( spinnerWrapper );

	// Timer used to delay starting/stopping
	var timer;

	var instance = {

		/**
		 * Enter the loading state.
		 */
		start: function() {

			// Create the spinner if it doesn't already exist
			if( !spinner ) {
				spinner = createSpinner( button );
			}

			button.disabled = true;
			button.setAttribute( 'data-loading', '' );

			clearTimeout( timer );
			spinner.spin( spinnerWrapper );

			this.setProgress( 0 );

			return this; // chain

		},

		/**
		 * Enter the loading state, after a delay.
		 */
		startAfter: function( delay ) {

			clearTimeout( timer );
			timer = setTimeout( function() { instance.start(); }, delay );

			return this; // chain

		},

		/**
		 * Exit the loading state.
		 */
		stop: function() {

			if (instance.isLoading()) {
				button.disabled = false;
				button.removeAttribute( 'data-loading' );	
			}

			// Kill the animation after a delay to make sure it
			// runs for the duration of the button transition
			clearTimeout( timer );

			if( spinner ) {
				timer = setTimeout( function() { spinner.stop(); }, 1000 );
			}

			return this; // chain

		},

		/**
		 * Toggle the loading state on/off.
		 */
		toggle: function() {
			return this.isLoading() ? this.stop() : this.start();
		},

		/**
		 * Sets the width of the visual progress bar inside of
		 * this Ladda button
		 *
		 * @param {Number} progress in the range of 0-1
		 */
		setProgress: function( progress ) {

			// Cap it
			progress = Math.max( Math.min( progress, 1 ), 0 );

			var progressElement = button.querySelector( '.ladda-progress' );

			// Remove the progress bar if we're at 0 progress
			if( progress === 0 && progressElement && progressElement.parentNode ) {
				progressElement.parentNode.removeChild( progressElement );
			}
			else {
				if( !progressElement ) {
					progressElement = document.createElement( 'div' );
					progressElement.className = 'ladda-progress';
					button.appendChild( progressElement );
				}

				progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
			}

		},

		isLoading: function() {

			return button.hasAttribute( 'data-loading' );

		},

		remove: function() {

			clearTimeout( timer );

			button.disabled = false;
			button.removeAttribute( 'data-loading' );

			if( spinner ) {
				spinner.stop();
				spinner = null;
			}

			ALL_INSTANCES.splice( ALL_INSTANCES.indexOf(instance), 1 );

		}

	};

	ALL_INSTANCES.push( instance );

	return instance;

}

/**
 * Binds the target buttons to automatically enter the
 * loading state when clicked.
 *
 * @param target Either an HTML element or a CSS selector.
 * @param options
 *          - timeout Number of milliseconds to wait before
 *            automatically cancelling the animation.
 *          - callback A function to be called with the Ladda
 *            instance when a target button is clicked.
 */
function bind( target, options ) {

	var targets;

	if( typeof target === 'string' ) {
		targets = document.querySelectorAll( target );
	}
	else if( typeof target === 'object' ) {
		targets = [ target ];
	} else {
		throw new Error('target must be string or object');
	}

	options = options || {};

	for( var i = 0; i < targets.length; i++ ) {
		bindElement(targets[i], options);
	}

}

/**
 * Stops ALL current loading animations.
 */
function stopAll() {

	for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
		ALL_INSTANCES[i].stop();
	}

}

/**
* Get the first ancestor node from an element, having a
* certain type.
*
* @param elem An HTML element
* @param type an HTML tag type (uppercased)
*
* @return An HTML element
*/
function getAncestorOfTagType( elem, type ) {

	while ( elem.parentNode && elem.tagName !== type ) {
		elem = elem.parentNode;
	}

	return ( type === elem.tagName ) ? elem : undefined;

}

function createSpinner( button ) {

	var height = button.offsetHeight,
		spinnerColor,
		spinnerLines;

	if( height === 0 ) {
		// We may have an element that is not visible so
		// we attempt to get the height in a different way
		height = parseFloat( window.getComputedStyle( button ).height );
	}

	// If the button is tall we can afford some padding
	if( height > 32 ) {
		height *= 0.8;
	}

	// Prefer an explicit height if one is defined
	if( button.hasAttribute( 'data-spinner-size' ) ) {
		height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
	}

	// Allow buttons to specify the color of the spinner element
	if( button.hasAttribute( 'data-spinner-color' ) ) {
		spinnerColor = button.getAttribute( 'data-spinner-color' );
	}

	// Allow buttons to specify the number of lines of the spinner
	if( button.hasAttribute( 'data-spinner-lines' ) ) {
		spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
	}

	var radius = height * 0.2,
		length = radius * 0.6,
		width = radius < 7 ? 2 : 3;

	return new spin_js__WEBPACK_IMPORTED_MODULE_0__["Spinner"]( {
		color: spinnerColor || '#fff',
		lines: spinnerLines || 12,
		radius: radius,
		length: length,
		width: width,
		animation: 'ladda-spinner-line-fade',
		zIndex: 'auto',
		top: 'auto',
		left: 'auto',
		className: ''
	} );

}

function wrapContent( node, wrapper ) {

	var r = document.createRange();
	r.selectNodeContents( node );
	r.surroundContents( wrapper );
	node.appendChild( wrapper );

}

function bindElement( element, options ) {
	if( typeof element.addEventListener !== 'function' ) {
		return;
	}

	var instance = create( element );
	var timeout = -1;

	element.addEventListener( 'click', function() {

		// If the button belongs to a form, make sure all the
		// fields in that form are filled out
		var valid = true;
		var form = getAncestorOfTagType( element, 'FORM' );

		if( typeof form !== 'undefined' && !form.hasAttribute('novalidate') ) {
			// Modern form validation
			if( typeof form.checkValidity === 'function' ) {
				valid = form.checkValidity();
			}
		}

		if( valid ) {
			// This is asynchronous to avoid an issue where disabling
			// the button prevents forms from submitting
			instance.startAfter( 1 );

			// Set a loading timeout if one is specified
			if( typeof options.timeout === 'number' ) {
				clearTimeout( timeout );
				timeout = setTimeout( instance.stop, options.timeout );
			}

			// Invoke callbacks
			if( typeof options.callback === 'function' ) {
				options.callback.apply( null, [ instance ] );
			}
		}

	}, false );

}


/***/ }),

/***/ "./node_modules/primeng/dropdown.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/dropdown.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js"));

/***/ }),

/***/ "./node_modules/spin.js/spin.js":
/*!**************************************!*\
  !*** ./node_modules/spin.js/spin.js ***!
  \**************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute',
};
var Spinner = /** @class */ (function () {
    function Spinner(opts) {
        if (opts === void 0) { opts = {}; }
        this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
    Spinner.prototype.spin = function (target) {
        this.stop();
        this.el = document.createElement('div');
        this.el.className = this.opts.className;
        this.el.setAttribute('role', 'progressbar');
        css(this.el, {
            position: this.opts.position,
            width: 0,
            zIndex: this.opts.zIndex,
            left: this.opts.left,
            top: this.opts.top,
            transform: "scale(" + this.opts.scale + ")",
        });
        if (target) {
            target.insertBefore(this.el, target.firstChild || null);
        }
        drawLines(this.el, this.opts);
        return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
    Spinner.prototype.stop = function () {
        if (this.el) {
            if (typeof requestAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.animateId);
            }
            else {
                clearTimeout(this.animateId);
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
            this.el = undefined;
        }
        return this;
    };
    return Spinner;
}());

/**
 * Sets multiple style properties at once.
 */
function css(el, props) {
    for (var prop in props) {
        el.style[prop] = props[prop];
    }
    return el;
}
/**
 * Returns the line color from the given string or array.
 */
function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
}
/**
 * Internal method that draws the individual lines.
 */
function drawLines(el, opts) {
    var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
    var shadow = 'none';
    if (opts.shadow === true) {
        shadow = '0 2px 4px #000'; // default shadow
    }
    else if (typeof opts.shadow === 'string') {
        shadow = opts.shadow;
    }
    var shadows = parseBoxShadow(shadow);
    for (var i = 0; i < opts.lines; i++) {
        var degrees = ~~(360 / opts.lines * i + opts.rotate);
        var backgroundLine = css(document.createElement('div'), {
            position: 'absolute',
            top: -opts.width / 2 + "px",
            width: (opts.length + opts.width) + 'px',
            height: opts.width + 'px',
            background: getColor(opts.fadeColor, i),
            borderRadius: borderRadius,
            transformOrigin: 'left',
            transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
        });
        var delay = i * opts.direction / opts.lines / opts.speed;
        delay -= 1 / opts.speed; // so initial animation state will include trail
        var line = css(document.createElement('div'), {
            width: '100%',
            height: '100%',
            background: getColor(opts.color, i),
            borderRadius: borderRadius,
            boxShadow: normalizeShadow(shadows, degrees),
            animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
        });
        backgroundLine.appendChild(line);
        el.appendChild(backgroundLine);
    }
}
function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
        var shadow = _a[_i];
        var matches = shadow.match(regex);
        if (matches === null) {
            continue; // invalid syntax
        }
        var x = +matches[2];
        var y = +matches[5];
        var xUnits = matches[4];
        var yUnits = matches[7];
        if (x === 0 && !xUnits) {
            xUnits = yUnits;
        }
        if (y === 0 && !yUnits) {
            yUnits = xUnits;
        }
        if (xUnits !== yUnits) {
            continue; // units must match to use as coordinates
        }
        shadows.push({
            prefix: matches[1] || '',
            x: x,
            y: y,
            xUnits: xUnits,
            yUnits: yUnits,
            end: matches[8],
        });
    }
    return shadows;
}
/**
 * Modify box-shadow x/y offsets to counteract rotation
 */
function normalizeShadow(shadows, degrees) {
    var normalized = [];
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
        var shadow = shadows_1[_i];
        var xy = convertOffset(shadow.x, shadow.y, degrees);
        normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
    return normalized.join(', ');
}
function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [
        Math.round((x * cos + y * sin) * 1000) / 1000,
        Math.round((-x * sin + y * cos) * 1000) / 1000,
    ];
}


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.js":
/*!******************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v7.22.2
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var consolePrefix = 'SweetAlert2:';

/**
 * Filter the unique values into a new array
 * @param arr
 */
var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
var previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};

var isThenable = function isThenable(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.then === 'function';
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var version = "7.22.2";

var argsToParams = function argsToParams(args) {
  var params = {};
  switch (_typeof(args[0])) {
    case 'string':
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;
          case 'undefined':
            break;
          default:
            error('Unexpected type of ' + name + '! Expected "string", got ' + _typeof(args[index]));
        }
      });
      break;

    case 'object':
      _extends(params, args[0]);
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }
  return params;
};

/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
var adaptInputValidator = function adaptInputValidator(legacyValidator) {
  return function adaptedInputValidator(inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams).then(function () {
      return undefined;
    }, function (validationError) {
      return validationError;
    });
  };
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-text', 'image', 'input', 'has-input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousBodyPadding: null
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addOrRemoveClass = function addOrRemoveClass(target, classList, add) {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        add ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      add ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};

var addClass = function addClass(target, classList) {
  addOrRemoveClass(target, classList, true);
};

var removeClass = function removeClass(target, classList) {
  addOrRemoveClass(target, classList, false);
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem) {
  elem.style.opacity = '';
  elem.style.display = elem.id === swalClasses.content ? 'block' : 'flex';
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jquery $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var elementByClass = function elementByClass(className) {
  var container = getContainer();
  return container ? container.querySelector('.' + className) : null;
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};

var getIcons = function getIcons() {
  var popup = getPopup();
  return popup.querySelectorAll('.' + swalClasses.icon);
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getButtonsWrapper = function getButtonsWrapper() {
  warnOnce('swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead');
  return elementByClass(swalClasses.actions);
};

var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};

var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.prototype.slice.call(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  // https://github.com/jkup/focusable/blob/master/index.js
  var otherFocusableElements = Array.prototype.slice.call(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var isModal = function isModal() {
  return !document.body.classList.contains(swalClasses['toast-shown']);
};

var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};

var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = ('\n <div aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.popup + '" tabindex="-1">\n   <div class="' + swalClasses.header + '">\n     <ul class="' + swalClasses.progresssteps + '"></ul>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">\n       <span class="' + swalClasses['icon-text'] + '">?</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">\n       <span class="' + swalClasses['icon-text'] + '">!</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">\n       <span class="' + swalClasses['icon-text'] + '">i</span>\n      </div>\n     <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' + swalClasses.image + '" />\n     <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n     <button type="button" class="' + swalClasses.close + '">\xD7</button>\n   </div>\n   <div class="' + swalClasses.content + '">\n     <div id="' + swalClasses.content + '"></div>\n     <input class="' + swalClasses.input + '" />\n     <input type="file" class="' + swalClasses.file + '" />\n     <div class="' + swalClasses.range + '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' + swalClasses.select + '"></select>\n     <div class="' + swalClasses.radio + '"></div>\n     <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' + swalClasses.textarea + '"></textarea>\n     <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   </div>\n   <div class="' + swalClasses.actions + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <div class="' + swalClasses.footer + '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');

/*
 * Add modal + backdrop to DOM
 */
var init = function init(params) {
  // Clean up the old popup if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);
  }

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var popup = getPopup();
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = content.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(content, swalClasses.textarea);

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }

  var oldInputVal = void 0; // IE11 workaround, see #1109 for details
  var resetValidationError = function resetValidationError(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationError();
    }
    oldInputVal = e.target.value;
  };

  input.oninput = resetValidationError;
  file.onchange = resetValidationError;
  select.onchange = resetValidationError;
  checkbox.onchange = resetValidationError;
  textarea.oninput = resetValidationError;

  range.oninput = function (e) {
    resetValidationError(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationError(e);
    range.nextSibling.value = range.value;
  };

  return popup;
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  if (!param) {
    return hide(target);
  }

  if ((typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object') {
    target.innerHTML = '';
    if (0 in param) {
      for (var i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true));
      }
    } else {
      target.appendChild(param.cloneNode(true));
    }
  } else if (param) {
    target.innerHTML = param;
  } else {}
  show(target);
};

var animationEndEvent = function () {
  // Prevent run in Node env
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var globalState = {};

// Restore previous active (focused) element
var restoreActiveElement = function restoreActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    }, 100); // issues/900
    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

/*
 * Global function to close sweetAlert
 */
var close = function close(onClose, onAfterClose) {
  var container = getContainer();
  var popup = getPopup();
  if (!popup) {
    return;
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide);

  var removePopupAndResetState = function removePopupAndResetState() {
    if (!isToast()) {
      restoreActiveElement();
      window.removeEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['has-input'], swalClasses['toast-shown']]);

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(function () {
        onAfterClose();
      });
    }
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(popup, swalClasses.hide)) {
        removePopupAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState();
  }
};

/*
 * Global function to determine if swal2 popup is shown
 */
var isVisible$1 = function isVisible() {
  return !!getPopup();
};

/*
 * Global function to click 'Confirm' button
 */
var clickConfirm = function clickConfirm() {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
var clickCancel = function clickCancel() {
  return getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(Swal, [null].concat(args)))();
}

/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword(ParentSwal) {
  var NoNewKeywordSwal = function NoNewKeywordSwal() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!(this instanceof NoNewKeywordSwal)) {
      return new (Function.prototype.bind.apply(NoNewKeywordSwal, [null].concat(args)))();
    }
    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args);
  };
  NoNewKeywordSwal.prototype = _extends(Object.create(ParentSwal.prototype), { constructor: NoNewKeywordSwal });

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal);
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal;
  }
  return NoNewKeywordSwal;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
};

var deprecatedParams = ['useRejections', 'expectRejections'];

/**
 * Is valid parameter
 * @param {String} paramName
 */
var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
 * Is deprecated parameter
 * @param {String} paramName
 */
var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams.indexOf(paramName) !== -1;
};

/**
 * Show relevant warnings for given params
 *
 * @param params
 */
var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    if (!isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
    if (isDeprecatedParameter(param)) {
      warnOnce('The parameter "' + param + '" is deprecated and will be removed in the next major release.');
    }
  }
};

var deprecationWarning = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.';
var defaults$1 = {};

function withGlobalDefaults(ParentSwal) {
  var SwalWithGlobalDefaults = function (_ParentSwal) {
    inherits(SwalWithGlobalDefaults, _ParentSwal);

    function SwalWithGlobalDefaults() {
      classCallCheck(this, SwalWithGlobalDefaults);
      return possibleConstructorReturn(this, (SwalWithGlobalDefaults.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults)).apply(this, arguments));
    }

    createClass(SwalWithGlobalDefaults, [{
      key: '_main',
      value: function _main(params) {
        return get(SwalWithGlobalDefaults.prototype.__proto__ || Object.getPrototypeOf(SwalWithGlobalDefaults.prototype), '_main', this).call(this, _extends({}, defaults$1, params));
      }
    }], [{
      key: 'setDefaults',
      value: function setDefaults(params) {
        warnOnce(deprecationWarning);
        if (!params || (typeof params === 'undefined' ? 'undefined' : _typeof(params)) !== 'object') {
          throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object');
        }
        showWarningsForParams(params);
        // assign valid params from `params` to `defaults`
        Object.keys(params).forEach(function (param) {
          if (ParentSwal.isValidParameter(param)) {
            defaults$1[param] = params[param];
          }
        });
      }
    }, {
      key: 'resetDefaults',
      value: function resetDefaults() {
        warnOnce(deprecationWarning);
        defaults$1 = {};
      }
    }]);
    return SwalWithGlobalDefaults;
  }(ParentSwal);

  // Set default params if `window._swalDefaults` is an object


  if (typeof window !== 'undefined' && _typeof(window._swalDefaults) === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults);
  }

  return SwalWithGlobalDefaults;
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var Swal = this;
  return withNoNewKeyword(function (_Swal) {
    inherits(MixinSwal, _Swal);

    function MixinSwal() {
      classCallCheck(this, MixinSwal);
      return possibleConstructorReturn(this, (MixinSwal.__proto__ || Object.getPrototypeOf(MixinSwal)).apply(this, arguments));
    }

    createClass(MixinSwal, [{
      key: '_main',
      value: function _main(params) {
        return get(MixinSwal.prototype.__proto__ || Object.getPrototypeOf(MixinSwal.prototype), '_main', this).call(this, _extends({}, mixinParams, params));
      }
    }]);
    return MixinSwal;
  }(Swal));
}

// private global state for the queue feature
var currentSteps = [];

/*
 * Global function for chaining sweetAlert popups
 */
var queue = function queue(steps) {
  var swal = this;
  currentSteps = steps;
  var resetQueue = function resetQueue() {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        swal(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetQueue();
            resolve({ dismiss: result.dismiss });
          }
        });
      } else {
        resetQueue();
        resolve({ value: queueResult });
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current popup in queue
 */
var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a popup to the queue
 */
var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }
  return currentSteps.push(step);
};

/*
 * Global function for deleting a popup from the queue
 */
var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var showLoading = function showLoading() {
  var popup = getPopup();
  if (!popup) {
    Swal('');
  }
  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	adaptInputValidator: adaptInputValidator,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getButtonsWrapper: getButtonsWrapper,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getFooter: getFooter,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft
});

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
if (typeof window !== 'undefined' && typeof window.WeakMap !== 'function') {
  // https://github.com/Riim/symbol-polyfill/blob/master/index.js
  var idCounter = 0;
  window.Symbol = function _Symbol(key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + ++idCounter + '__';
  };
  Symbol.iterator = Symbol('Symbol.iterator');

  // http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html
  window.WeakMap = function (s, dP, hOP) {
    function WeakMap() {
      dP(this, s, { value: Symbol('WeakMap') });
    }
    WeakMap.prototype = {
      'delete': function del(o) {
        delete o[this[s]];
      },
      get: function get(o) {
        return o[this[s]];
      },
      has: function has(o) {
        return hOP.call(o, this[s]);
      },
      set: function set(o, v) {
        dP(o, this[s], { configurable: true, value: v });
      }
    };
    return WeakMap;
  }(Symbol('WeakMap'), Object.defineProperty, {}.hasOwnProperty);
}

var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);
    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }
  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

// Get input element by specified type or, if type isn't specified, by params.input
function getInput(inputType) {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);
  inputType = inputType || innerParams.input;
  if (!inputType) {
    return null;
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(domCache.content, swalClasses[inputType]);
    case 'checkbox':
      return domCache.popup.querySelector('.' + swalClasses.checkbox + ' input');
    case 'radio':
      return domCache.popup.querySelector('.' + swalClasses.radio + ' input:checked') || domCache.popup.querySelector('.' + swalClasses.radio + ' input:first-child');
    case 'range':
      return domCache.popup.querySelector('.' + swalClasses.range + ' input');
    default:
      return getChildByClass(domCache.content, swalClasses.input);
  }
}

function enableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function disableButtons() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
  domCache.cancelButton.disabled = true;
}

function enableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = false;
}

function disableConfirmButton() {
  var domCache = privateProps.domCache.get(this);
  domCache.confirmButton.disabled = true;
}

function enableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = false;
    }
  } else {
    input.disabled = false;
  }
}

function disableInput() {
  var input = this.getInput();
  if (!input) {
    return false;
  }
  if (input && input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');
    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = true;
    }
  } else {
    input.disabled = true;
  }
}

// Show block with validation error
function showValidationError(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationError.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationError.style.marginLeft = '-' + popupComputedStyle.getPropertyValue('padding-left');
  domCache.validationError.style.marginRight = '-' + popupComputedStyle.getPropertyValue('padding-right');
  show(domCache.validationError);

  var input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses.validationerror);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

// Hide block with validation error
function resetValidationError() {
  var domCache = privateProps.domCache.get(this);
  if (domCache.validationError) {
    hide(domCache.validationError);
  }

  var input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

var Timer = function Timer(callback, delay) {
  classCallCheck(this, Timer);

  var id, started, running;
  var remaining = delay;
  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };
  this.stop = function () {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  };
  this.getTimerLeft = function () {
    if (running) {
      this.stop();
      this.start();
    }
    return remaining;
  };
  this.getStateRunning = function () {
    return running;
  };
  this.start();
};

var defaultInputValidators = {
  email: function email(string, extraParams) {
    return (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address')
    );
  },
  url: function url(string, extraParams) {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string) ? Promise.resolve() : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL')
    );
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? defaultInputValidators[key] : Swal.adaptInputValidator(defaultInputValidators[key]);
      }
    });
  }

  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var popup = void 0;
  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = init(params);
  } else {
    popup = oldPopup || init(params);
  }

  // Set popup width
  if (params.width) {
    popup.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = typeof params.padding === 'number' ? params.padding + 'px' : params.padding;
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background;
  }
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }

  var container = getContainer();
  var title = getTitle();
  var content = getContent().querySelector('#' + swalClasses.content);
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();
  var footer = getFooter();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  if (typeof params.backdrop === 'string') {
    getContainer().style.background = params.backdrop;
  } else if (!params.backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, content);

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content);
  } else {
    hide(content);
  }

  // Position
  if (params.position in swalClasses) {
    addClass(container, swalClasses[params.position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    var growClass = 'grow-' + params.grow;
    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call();
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Default Class
  popup.className = swalClasses.popup;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom Class
  if (params.customClass) {
    addClass(popup, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps && params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance;
        }
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i = 0; _i < icons.length; _i++) {
    hide(icons[_i]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = popup.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      addClass(icon, 'swal2-animate-' + params.type + '-icon');
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass([confirmButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }

    // Loading state
    var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // Footer
  parseHtmlToContainer(params.footer, footer);

  // CSS animation
  if (params.animation === true) {
    removeClass(popup, swalClasses.noanimation);
  } else {
    addClass(popup, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
}

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(popup, swalClasses.hide);
  } else {
    removeClass(popup, swalClasses.fade);
  }
  show(popup);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(popup, swalClasses.noanimation)) {
    popup.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      popup.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    fixScrollbar();
    iOSfix();
  }
  if (!globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }
  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);
  setParameters(innerParams);
  Object.freeze(innerParams);
  privateProps.innerParams.set(this, innerParams);

  // clear the previous timer
  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  }

  // clear the restore focus timeout
  clearTimeout(globalState.restoreFocusTimeout);

  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationError: getValidationError(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);

  var constructor = this.constructor;

  return new Promise(function (resolve, reject) {
    // functions to handle all resolving/rejecting/settling
    var succeedWith = function succeedWith(value) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose); // TODO: make closePopup an *instance* method
      if (innerParams.useRejections) {
        resolve(value);
      } else {
        resolve({ value: value });
      }
    };
    var dismissWith = function dismissWith(dismiss) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      if (innerParams.useRejections) {
        reject(dismiss);
      } else {
        resolve({ dismiss: dismiss });
      }
    };
    var errorWith = function errorWith(error$$1) {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
      reject(error$$1);
    };

    // Close on timer
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    }

    // Get the value of the popup input
    var getInputValue = function getInputValue() {
      var input = _this.getInput();
      if (!input) {
        return null;
      }
      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationError();
        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.extraParams);
        });
        if (innerParams.expectRejections) {
          preConfirmPromise.then(function (preConfirmValue) {
            return succeedWith(preConfirmValue || value);
          }, function (validationError) {
            _this.hideLoading();
            if (validationError) {
              _this.showValidationError(validationError);
            }
          });
        } else {
          preConfirmPromise.then(function (preConfirmValue) {
            if (isVisible(domCache.validationError) || preConfirmValue === false) {
              _this.hideLoading();
            } else {
              succeedWith(preConfirmValue || value);
            }
          }, function (error$$1) {
            return errorWith(error$$1);
          });
        }
      } else {
        succeedWith(value);
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;

      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            _this.disableButtons();
            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();
                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.extraParams);
                });
                if (innerParams.expectRejections) {
                  validationPromise.then(function () {
                    _this.enableButtons();
                    _this.enableInput();
                    confirm(inputValue);
                  }, function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    }
                  });
                } else {
                  validationPromise.then(function (validationError) {
                    _this.enableButtons();
                    _this.enableInput();
                    if (validationError) {
                      _this.showValidationError(validationError);
                    } else {
                      confirm(inputValue);
                    }
                  }, function (error$$1) {
                    return errorWith(error$$1);
                  });
                }
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            _this.disableButtons();
            dismissWith(constructor.DismissReason.cancel);
          }
          break;
        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing popup by close button
    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function (e) {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }
        constructor.closePopup(innerParams.onClose, innerParams.onAfterClose);
        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false;

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined;
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined;
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target !== domCache.container) {
          return;
        }
        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    }

    // Reverse buttons (Confirm on the right side)
    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
      // no visible focusable elements, focus the popup
      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      e.stopPropagation();

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        }

        // TAB
      } else if (e.key === 'Tab') {
        var targetElement = e.target || e.srcElement;

        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownHandlerAdded) {
      window.removeEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };
      window.addEventListener('keydown', globalState.keydownHandler, { capture: true });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();
    _this.hideLoading();
    _this.resetValidationError();

    if (innerParams.input) {
      addClass(document.body, swalClasses['has-input']);
    }

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i3 = 0; _i3 < inputTypes.length; _i3++) {
      var inputClass = swalClasses[inputTypes[_i3]];
      var inputContainer = getChildByClass(domCache.content, inputClass);
      input = _this.getInput(inputTypes[_i3]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (innerParams.inputClass) {
        addClass(inputContainer, innerParams.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(domCache.content, swalClasses.input);
        input.value = innerParams.inputValue;
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(domCache.content, swalClasses.file);
        input.placeholder = innerParams.inputPlaceholder;
        input.type = innerParams.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(domCache.content, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = innerParams.inputValue;
        rangeInput.type = innerParams.input;
        rangeOutput.value = innerParams.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(domCache.content, swalClasses.select);
        select.innerHTML = '';
        if (innerParams.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = innerParams.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref) {
            var _ref2 = slicedToArray(_ref, 2),
                optionValue = _ref2[0],
                optionLabel = _ref2[1];

            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = optionLabel;
            if (innerParams.inputValue.toString() === optionValue.toString()) {
              option.selected = true;
            }
            select.appendChild(option);
          });
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(domCache.content, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          inputOptions.forEach(function (_ref3) {
            var _ref4 = slicedToArray(_ref3, 2),
                radioValue = _ref4[0],
                radioLabel = _ref4[1];

            var radioInput = document.createElement('input');
            var radioLabelElement = document.createElement('label');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (innerParams.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true;
            }
            radioLabelElement.innerHTML = radioLabel;
            radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild);
            radio.appendChild(radioLabelElement);
          });
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(domCache.content, swalClasses.checkbox);
        var checkboxInput = _this.getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(innerParams.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = innerParams.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(domCache.content, swalClasses.textarea);
        textarea.value = innerParams.inputValue;
        textarea.placeholder = innerParams.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + innerParams.input + '"');
        break;
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      var processInputOptions = function processInputOptions(inputOptions) {
        return populateInputOptions(formatInputOptions(inputOptions));
      };
      if (isThenable(innerParams.inputOptions)) {
        constructor.showLoading();
        innerParams.inputOptions.then(function (inputOptions) {
          _this.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (_typeof(innerParams.inputOptions) === 'object') {
        processInputOptions(innerParams.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object, Map or Promise, got ' + _typeof(innerParams.inputOptions));
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isThenable(innerParams.inputValue)) {
      constructor.showLoading();
      hide(input);
      innerParams.inputValue.then(function (inputValue) {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
        show(input);
        _this.hideLoading();
      }).catch(function (err) {
        error('Error in inputValue promise: ' + err);
        input.value = '';
        show(input);
        _this.hideLoading();
      });
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0;
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationError: showValidationError,
	resetValidationError: resetValidationError,
	_main: _main
});

var currentInstance = void 0;

// SweetAlert constructor
function SweetAlert() {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return;
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'undefined') {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  currentInstance = this;

  var outerParams = Object.freeze(this.constructor.argsToParams(args));

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  });

  var promise = this._main(this.params);
  privateProps.promise.set(this, promise);
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled, onRejected);
};
SweetAlert.prototype.catch = function (onRejected) {
  var promise = privateProps.promise.get(this);
  return promise.catch(onRejected);
};
SweetAlert.prototype.finally = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise.finally(onFinally);
};

// Assign instance methods from src/instanceMethods/*.js to prototype
_extends(SweetAlert.prototype, instanceMethods);

// Assign static methods from src/staticMethods/*.js to constructor
_extends(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});

SweetAlert.DismissReason = DismissReason;

SweetAlert.noop = function () {};

SweetAlert.version = version;

var Swal = withNoNewKeyword(withGlobalDefaults(SweetAlert));
Swal.default = Swal;

return Swal;

})));
if (typeof window !== 'undefined' && window.Sweetalert2){  window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2}


/***/ }),

/***/ "./src/app/admin/modules/manage-users/add-users/add-users.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/add-users/add-users.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-users/add-users/add-users.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/add-users/add-users.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-users works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/add-users/add-users.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/add-users/add-users.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function() { return AddUsersComponent; });
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

var AddUsersComponent = /** @class */ (function () {
    function AddUsersComponent() {
    }
    AddUsersComponent.prototype.ngOnInit = function () {
    };
    AddUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-users',
            template: __webpack_require__(/*! ./add-users.component.html */ "./src/app/admin/modules/manage-users/add-users/add-users.component.html"),
            styles: [__webpack_require__(/*! ./add-users.component.css */ "./src/app/admin/modules/manage-users/add-users/add-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddUsersComponent);
    return AddUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"an-page-content\">\n  <div class=\"an-content-body\">\n\n\n    <div class=\"an-body-topbar wow fadeIn\">\n      <div class=\"an-page-title\">\n        <h2>List Users</h2>\n      </div>\n    </div>\n\n    <br>\n    <div class=\"admin-box\">\n      <div class=\"admin-box-item user-control\">\n        <div class=\"table-responsive\">\n          <table class=\"table NoTopBorder custom-table user-control-table\">\n            <tbody>\n\n              <tr>\n\n                <th>From</th>\n                <th>For</th>\n                <th>Block</th>\n              </tr>\n              <tr *ngFor=\"let userInfo of userInfos\">\n\n                <td>\n                  {{userInfo.ForUser?.email}}\n                </td>\n                <td>\n                  {{userInfo.FromUser?.email}}\n                </td>\n           \n                <td>\n                  <ul class=\"listItem\">\n      \n                    <li>\n      \n                      <a *ngIf=\"user.isBlocked==true\" (click)=\"Unblock(user._id)\" title=\"Block\">\n                        <i class=\"fa fa-bell-slash\" aria-hidden=\"true\"></i>\n                      </a>\n      \n                      <a *ngIf=\"user.isBlocked==false\" (click)=\"Block(user._id)\" title=\"Unblock\">\n                        <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                      </a>\n      \n                    </li>\n      \n                  </ul>\n                </td>\n              </tr>\n            </tbody>\n\n\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AlertVideoUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertVideoUserComponent", function() { return AlertVideoUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertVideoUserComponent = /** @class */ (function () {
    function AlertVideoUserComponent(admin) {
        this.admin = admin;
    }
    AlertVideoUserComponent.prototype.ngOnInit = function () {
        this.userInfoAbusiveAlert();
    };
    AlertVideoUserComponent.prototype.userInfoAbusiveAlert = function () {
        var _this = this;
        this.admin.userInfoAbusiveAlert().subscribe(function (res) {
            console.log('info', res.data);
            // console.log('77777777777777777777777',res.data[0].)
            _this.userInfos = res.data;
        });
    };
    AlertVideoUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-video-user',
            template: __webpack_require__(/*! ./alert-video-user.component.html */ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.html"),
            styles: [__webpack_require__(/*! ./alert-video-user.component.css */ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AlertVideoUserComponent);
    return AlertVideoUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/edit-users/edit-users.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/edit-users/edit-users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-users works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/edit-users/edit-users.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersComponent", function() { return EditUsersComponent; });
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

var EditUsersComponent = /** @class */ (function () {
    function EditUsersComponent() {
    }
    EditUsersComponent.prototype.ngOnInit = function () {
    };
    EditUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-users',
            template: __webpack_require__(/*! ./edit-users.component.html */ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.html"),
            styles: [__webpack_require__(/*! ./edit-users.component.css */ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditUsersComponent);
    return EditUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listItem{\n    list-style-type: none;\n    margin: 0; padding: 0;\n}\n.listItem li{ display: inline-block; margin-right: 8px; }\n.dotRed{\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: red;\n    position: absolute;\n    top: 10px;\n    left: 5px;\n}\n.dotGreen{\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: green;\n    position: absolute;\n    top: 10px;\n    left: 5px; \n}\n.posRelative{\n    position: relative;\n    padding-left: 30px;\n}\n.listItem {\n    list-style-type: none;\n    margin: 0;\n    padding: 0\n}\n.listItem li {\n    display: inline-block;\n    margin-right: 8px\n}\n.table-responsive img {\n    max-width: 24%;\n}\n.example-viewport {\n    height: 450px;\n    width: 100%;\n    /* border: 1px solid black; */\n  }\n.example-item {\n    height: 50px;\n  }\nform {\n    overflow: hidden;\n  }\n.admin-box-controls{\n      display: flex;\n      flex-wrap: wrap;\n      align-items:center;\n      width: 100%;\n      padding-bottom: 15px;\n  }\n.searchForm{\n      display: flex;\n      padding: 0;\n      align-items: flex-start;\n  \n  }\n.searchInp{\n    padding: 20px;\n    padding-left:10px;\n    outline: none;\n    border:1px solid lightgray;\n    margin: 5px;\n    border-radius: 5px;\n  }\n.searchBtn{\n  padding: 10px;  \n}\n.btn-search{\n    color:white;\n    background: linear-gradient(180deg, #feba36 0, #f92387 163.64%);\n    padding: 5px;\n    padding-left:10px ;\n    padding-right:10px ;\n    outline: none;\n    border-radius: 10px;\n    border:1px solid #feba36;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.dropdown{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 !important;\n    padding: 0;\n}\n.search-area{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.enableGenderArea{\n    display: flex;\n    padding: 0;\n}\n.enabled{\n    display: flex;\n    align-items: center;\n\n}\n.statusG{\n    padding: 5px;\n    margin-left: 5px;\n    color:white;\n    font-size: 12px;\n    border-radius: 5px;\n    width: 5.2em;\n    background-color: green;\n    border:1px solid green;\n}\n.statusR{\n    padding: 5px;\n    margin-left: 5px;\n    color:white;\n    font-size: 12px;\n    border-radius: 5px;\n    width: 5.2em;\n    background-color: red;\n    border:1px solid red;\n}\n.fields{\n\n}\n.label{\n    margin: 0;\n    font-weight: 500;\n    margin-left: 5px;\n}\n.checkBx{\n    margin-left: 5px;\n}\nselect {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    padding: 0px 5px;\n    border-radius: 13px;\n    border: 1px solid #fc6763;\n    background: #fff;\n    font-size: 15px;\n    color: #3e4148;\n    line-height: 1;\n    -webkit-appearance: none;\n}"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"admin-bar\">\n    <div class=\"wrapper dashboard\">\n        <div class=\"admin-main-container\"> -->\n<!-- <div class=\"admin-main-content\"> -->\n<div class=\"admin-main-content\">\n    <h3>List of Online Users</h3>\n    <div class=\"admin-box-controls\">\n        \n        <form [formGroup]=\"searchForm\" class=\"searchForm col-lg-3 col-md-3 col-sm-12\" novalidate\n            (ngSubmit)=\"submitListUser()\">\n            <div class=\"search-area\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"searchText\" id=\"inputUrl\"\n                    placeholder=\"Search Here\">\n                <div *ngIf=\"searchForm.controls['searchText'].touched\">\n                    <span *ngIf=\"searchForm.controls['searchText'].hasError('required')\" class=\"error\">\n                        Required\n                    </span>\n                </div>\n                <span *ngIf=\"searchForm.controls['searchText'].hasError('maxlength')\" class=\"error\">\n                    Length exceded\n                </span>\n            </div>\n            <button type=\"submit\" class=\"btn-search\">Search</button>\n        </form>\n    </div>\n       <!--  <cdk-virtual-scroll-viewport itemSize=\"60\" class='example-viewport'> -->\n            <div class=\"table-responsive example-itema\">\n                <table class=\"table NoTopBorder custom-table user-control-tablea \">\n                    <tbody>\n                        <tr>\n\t\t\t\t\t\t\t<th class=\"label\">Sr no</th>\n                            <th class=\"label\">Name</th>\n                            <th class=\"label\">App Version</th>\n                            <th class=\"label\">Email</th>\n                            <th class=\"label\">Gender\n                                <div class=\"dropdown\">\n                                    <select (change)=\"onGenderChangeEvent($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"male\">Male</option>\n                                        <option value=\"female\">female</option>\n                                    </select>\n                                </div>\n                            </th>\n                            <th class=\"label\">K\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Keeping Kosher\">K</option>\n                                        <option value=\"Not Keeping Kosher\">NK</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">S\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp1\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Keeping Shabbos\">S</option>\n                                        <option value=\"Not Keeping Shabbos\">NS</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">T\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp2\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Wearing Tefillin\">T</option>\n                                        <option value=\"Not Wearing Tefillin\">NT</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">C\n                                <!-- <div>\n                                                <input type=\"checkbox\" data-md-icheck (change)=\"addprop1($event)\" />\n                                            </div> -->\n                            </th>\n                            <th class=\"label\">DOB</th>\n                            <th class=\"label\">Age\n                                <div class=\"dropdown\">\n                                    <select (change)=\"onAgeChangeEvent($event.target.value)\">\n                                        <option style=\"display:none\">Select</option>\n                                        <option *ngFor=\"let item of ageLists\" value={{item._id.age}}>{{item._id.age}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </th>\n                            <!-- <th>\n                                            Last Online\n                                        </th>\n                                        <th>Last Online Date</th>\n                                        <th>\n                                            Last Offline\n                                        </th>\n                                        <th>Last Offline Date</th> -->\n                            <th class=\"label\">Last seen</th>\n                            <th class=\"label\">Device Type</th>\n                            <th class=\"label\">Location Alarm Enabled</th>\n                            <th class=\"label\"> Gender Alarm Enabled</th>\n                            <th class=\"label\">City</th>\n                            <th class=\"label\">Country</th>\n                            <th class=\"label\"> Subscription Done</th>\n                            <th class=\"label\">Subscription</th>\n                            <th class=\"label\">Action</th>\n                        </tr>\n                        <tr *ngFor=\"let user of onusers;let i = index\">\n\t\t\t\t\t\t\t<td>{{(this.page*40)+i+1}}</td>\n                            <td class=\"posRelative\" [routerLink]=\"['/admin/user/video-log/',user._id]\">\n                                <!-- <td class=\"posRelative\" [routerLink]=\"['/video-log/',user._id]\"> -->\n\n                                <span [ngClass]=\"user.isOnline ? 'dotGreen' : 'dotRed'\"></span>\n                                <a> {{user?.firstName}}</a>\n                            </td>\n                            <td>\n                                {{user?.appVersion}}\n                            </td>\n                            <td>\n                                {{user?.email}}\n                            </td>\n                            <td (click)=\"openGenderModal(user?._id,user.gender)\">\n                                <div *ngIf=\"!user.gender;else other\">\n                                    Male\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Keeping Kosher')||(supImpAns?.answer_text=='Not Keeping Kosher')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Keeping Kosher');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Keeping Shabbos')||(supImpAns?.answer_text=='Not Keeping Shabbos')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Keeping Shabbos');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of  user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Wearing Tefillin')||(supImpAns?.answer_text=='Not Wearing Tefillin')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Wearing Tefillin');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td *ngIf=\"!user?.gender\">\n                                <div *ngIf=\"user?.isCohen;else cohen\">\n                                    Y\n                                </div>\n                            </td>\n                            <td *ngIf=\"user?.gender\">\n                                <div *ngIf=\"user?.isAbleToMarryCohen;else AbleToMarryCohen\">\n                                    Y\n                                </div>\n                            </td>\n\n                            <td (click)=\"openAgeModal(user?._id,user?.DOB)\">\n                                {{user?.DOB}}\n                            </td>\n                            <td>\n                                {{user?.age}}\n                            </td>\n                            <td>\n                                {{user?.updatedAt| date: 'dd/MM/yyyy'}}\n                            </td>\n                            <!-- <td>\n                                            {{user.lastOnlineTime}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOnlineDateWithTZ| date: 'dd/MM/yyyy'}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOfflineTime}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOfflineDateWithTZ| date: 'dd/MM/yyyy'}}\n                                        </td> -->\n                            <td>\n                                {{user?.device_type}} </td>\n                            <td>\n                                {{user?.isLocationAlarmEnabled | yesNo:user?.isLocationAlarmEnabled }}\n                            </td>\n                            <td>\n                                {{user?.isGenderAlarmEnabled | yesNo:user?.isGenderAlarmEnabled}}\n                            </td>\n                            <td>\n                                {{user?.city}}\n                            </td>\n                            <td>\n                                {{user?.country}}\n                            </td>\n                            <td *ngIf=\"user?.isSubscriptionDone;else no\">\n                                Yes\n                            </td>\n\n                            <td (click)=\"enableSubscription(user?._id,user?.isSubscriptionFree)\">\n                                <!-- <div class=\"box-video__item\">\n                                                            <form [formGroup]=\"checkBoxForm\">\n                                                              <input type=\"checkbox\" (change)=\"onCheckboxChagen(user._id, $event.target.checked)\">\n                                                            </form>\n                                                          </div> -->\n                                <div *ngIf=\"user.isSubscriptionFree;else subscriptionFree\">\n                                    <!-- <div *ngIf=\"isSubscriptionDone\"> -->\n                                    <!-- <a title=\"Enable Subscription\"> -->\n                                    <button pButton type=\"button\" label=\"Enable\"\n                                        class=\"ui-button-rounded ui-button-success\"></button>\n                                    <!-- <img src=\"../../../../../assets/img/subscription.png\" alt=\"Shidduch View\"> -->\n                                    <!-- </a> -->\n\n                                    <!-- <button >Enable Subscription</button> -->\n                                    <!-- </div> -->\n                                </div>\n                                <!-- <p-checkbox [(ngModel)]=\"checkSubscription\" binary=\"true\"></p-checkbox> -->\n                            </td>\n\n                            <td>\n                                <ul class=\"listItem\">\n                                    <li>\n                                        <a title=\"Edit\">\n                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"delete(user?._id)\" title=\"Delete\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sendNotification(user?._id)\" title=\"Send Notification\">\n                                            <i class=\"fa fa-send-o\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a *ngIf=\"user?.isBlocked==true\" (click)=\"Unblock(user?._id)\" title=\"Block\">\n                                            <i class=\"fa fa-bell-slash\" aria-hidden=\"true\"></i>\n                                        </a>\n                                        <a *ngIf=\"user?.isBlocked==false\" (click)=\"Block(user?._id)\" title=\"Unblock\">\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\t\t\t\t\n            </div>\n\t\t\t<div id=\"userList\">\n\t\t\t\t<p-paginator  [rows]=\"40\" [totalRecords]=totalCount (onPageChange)=\"paginateUsers($event)\"></p-paginator>\n\t\t\t</div>\n\t\t\t<div id=\"userGenderList\" style=\"display:none\">\n\t\t\t\t<p-paginator [rows]=\"40\" [totalRecords]=totalCount (onPageChange)=\"paginateUsers($event)\"></p-paginator>\n\t\t\t</div>\n        <!-- </cdk-virtual-scroll-viewport> -->\n    </div>\n    <!-- </div>\n\n        </div>\n\n    </div> -->\n    <!-- <p-paginator [rows]=\"20\" [totalRecords]=totalCount (onPageChange)=\"paginate($event)\"></p-paginator> -->\n<ng-template #disablealarm>\n    <span class=\"fields\">Alarm Disabled:</span>\n\n</ng-template>\n<ng-template #lableChange>\n    <label for=\"gender\" class=\"label\">Enable:</label>\n</ng-template>\n\n\n<ng-template #other>\n    <td>Female</td>\n</ng-template>\n\n<ng-template #abbrivated>\n    <td>N</td>\n</ng-template>\n\n<ng-template #no>\n    <td>No</td>\n</ng-template>\n<ng-template #AbleToMarryCohen>\n    <td>N</td>\n</ng-template>\n<ng-template #subscriptionFree>\n    <!-- <a title=\"Disable Subscription\">\n            <img src=\"../../../../../assets/img/unsubscribe.png\" alt=\"Shidduch View\">\n    </a> -->\n    <button pButton type=\"button\" label=\"Disable\" class=\"ui-button-rounded ui-button-danger\"></button>\n</ng-template>\n<ng-template #cohen>\n    <td>N</td>\n</ng-template>\n<div class=\"modal\" id=\"myModalEditAge\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeEditAgeModal()\">×</button>\n        <form [formGroup]=\"editAgeForm\" novalidate (ngSubmit)=\"onEditAge()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Edit D.O.B.\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"DOB\"\n                        placeholder=\"Enter the DOB (dd/mm/yyyy)\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n\n\n\n<div class=\"modal\" id=\"myModalEditGender\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeEditGenderModal()\">×</button>\n        <form [formGroup]=\"editGenderForm\" novalidate (ngSubmit)=\"onEditGender()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Edit D.O.B.\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"gender\"\n                        placeholder=\"Enter the DOB (dd/mm/yyyy)\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"sendNotifcationIndividual\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closesendNotificationModal()\">×</button>\n        <form [formGroup]=\"sendNotificationForm\" novalidate (ngSubmit)=\"onSendNotifcation()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Send Notification\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"title\" placeholder=\"Enter title\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"message\" placeholder=\"Enter message\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">Send</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<ngx-spinner bdOpacity=0.1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ngx-spinner bdOpacity=0 .1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner> -->\n\n<!-- <td>\n    <select [(ngModel)]=\"item.category\">\n         <option style=\"display:none\">select a category</option>\n         <option *ngFor=\"let item of categories\" [ngValue]=\"item.category\" value=\"item.category\">{{item.category}}</option>\n       </select>\n     </td> \n    -->"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ListOnlineUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOnlineUsersComponent", function() { return ListOnlineUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/export-xlxs.service */ "./src/app/shared/service/export-xlxs.service.ts");
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListOnlineUsersComponent = /** @class */ (function () {
    function ListOnlineUsersComponent(adminService, spinner, toastr, fb, excelService, notifcation, scrollDispatcher, cd) {
        this.adminService = adminService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.fb = fb;
        this.excelService = excelService;
        this.notifcation = notifcation;
        this.scrollDispatcher = scrollDispatcher;
        this.cd = cd;
        this.onusers = [];
        this.checkSubscription = false;
        this.page = 0;
        this.genderValues = [
            { label: 'Enable Gender Alarm', value: null },
            { label: 'Male', value: { id: 0, name: 'Male', code: 'M' } },
            { label: 'Female', value: { id: 1, name: 'Female', code: 'F' } },
            { label: 'Both', value: { id: 2, name: 'Both', code: 'MandF' } },
        ];
    }
    ListOnlineUsersComponent.prototype.ngOnInit = function () {
        // this.exportDataToCSV();
        this.checkBoxForm = this.fb.group({
            userid: this.fb.array([])
        });
        // this.spinner.show()
        // setTimeout(() => {
        //   this.spinner.hide()
        // }, 1000)
        this.editAgeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)]),
        });
        this.sendNotificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.editGenderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.listOnlineUsers(this.page);
        this.ageList();
        this.genderSelected = '';
        /* setInterval(() => {
                  this.listOnlineUsers(this.page);
                }, 1000); */
    };
    ListOnlineUsersComponent.prototype.enableDisableGenderBasedAlarm = function (flag) {
        var _this = this;
        // console.log('genderalarm', this.isDisabledFemale, flag);
        this.notifcation.confirm('You want to enable alarm').then(function (data) {
            // console.log('dataaaaa', data);
            if (data.value) {
                var gendervalue = {
                    // tslint:disable-next-line:radix
                    gender: parseInt(_this.isDisabledFemale[0]),
                    enableOrDisableAlarm: !flag
                };
                _this.adminService.enableOrDisableGenderAlarm(gendervalue).subscribe(function (res) {
                    if (res.code === 200) {
                        _this.isDisabledFemale = '';
                        _this.listOnlineUsers(0);
                    }
                    else {
                        _this.isDisabledFemale = '';
                        _this.listOnlineUsers(0);
                    }
                });
            }
            else {
                _this.isDisabledFemale = '';
            }
        });
    };
    ListOnlineUsersComponent.prototype.ageList = function () {
        var _this = this;
        this.adminService.ageList().subscribe(function (res) {
            // console.log(res.data, '************');
            if (res.code === 200) {
                _this.ageLists = res.data;
            }
            else {
            }
        });
    };
    /* ngAfterViewInit(): void {
        this.scrollDispatcher.scrolled()
            .subscribe(event => {
                console.log('gdfgggggdfgdfgdfgfg', this.page, 'event', event);
                const pageNumber = this.page;
                pageNumber = parseInt(pageNumber) + 1;
                console.log(pageNumber, 'this.page');
                this.listOnlineUsers(pageNumber);
                this.cd.detectChanges();
            });
    } */
    /* ngAfterViewInit(): void {
      this.scrollDispatcher.scrolled().pipe(
        filter(event => this.virtualScroll.measureScrollOffset('bottom') === 0)
      ).subscribe(event => {
        console.log('gdfgggggdfgdfgdfgfg', this.page, 'event', event);
        const pageNumber = this.page;
        pageNumber = parseInt(pageNumber) + 1;
        console.log(pageNumber, 'this.page');
        this.listOnlineUsers(pageNumber);
        this.cd.detectChanges();
      });
  
    } */
    ListOnlineUsersComponent.prototype.submitListUser = function () {
        this.listOnlineUsers(this.page);
    };
    ListOnlineUsersComponent.prototype.switchPagination = function (switchpagination) {
        if (switchpagination == 'userList') {
            document.getElementById('userGenderList').style.display = 'none';
            document.getElementById('userList').style.display = 'block';
        }
        if (switchpagination == 'userGenderList') {
            document.getElementById('userList').style.display = 'none';
            document.getElementById('userGenderList').style.display = 'block';
        }
    };
    ListOnlineUsersComponent.prototype.listOnlineUsers = function (page) {
        var _this = this;
        console.log('156 page number', page);
        if (this.searchForm.valid) {
            // console.log(this.searchForm.value, 'this.searchForm.value');
            // this.spinner.show()
            var pageObj = {
                page: page,
                isOnline: true,
                searchText: this.searchForm.value
            };
            this.adminService.listOnlineUsers(pageObj).subscribe(function (res) {
                // console.log('users onlinelistOnlineUsers', res);
                if (res.code === 200) {
                    // this.spinner.hide();
                    //this.onusers = [];
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                    // console.log('this.onusersthis.onusers', this.femaleAlarm, this.maleAlarm);
                }
            });
        }
        else {
            // this.spinner.show();
            var pageObj = {
                page: page,
                isOnline: true,
            };
            this.adminService.listOnlineUsers(pageObj).subscribe(function (res) {
                // console.log('users onlinelistOnlineUsers', res);
                if (res.code === 200) {
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                }
            });
        }
        this.switchPagination('userList');
    };
    ListOnlineUsersComponent.prototype.paginateUsers = function (event) {
        var _this = this;
        if (this.genderSelected == '') {
            var obj = {
                page: event.page,
                isOnline: true,
            };
            this.spinner.show();
            this.adminService.listOnlineUsers(obj).subscribe(function (res) {
                // console.log('users', res);
                if (res.code === 200) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                }
            });
            this.page = event.page;
        }
        else {
            // console.log(event, '00000000000000000000000000000');
            if (this.genderSelected === 'male') {
                this.spinner.show();
                var gender = {
                    gender: 0,
                    isOnline: true,
                    page: event.page
                };
                this.adminService.genderFilter(gender).subscribe(function (res) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                });
            }
            else if (this.genderSelected === 'female') {
                this.spinner.show();
                var gender1 = {
                    gender: 1,
                    isOnline: true,
                    page: event.page
                };
                this.adminService.genderFilter(gender1).subscribe(function (res) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                });
            }
            this.page = event.page;
        }
    };
    ListOnlineUsersComponent.prototype.listOnlineUsersWhenActionPerformed = function (page) {
        var _this = this;
        this.page = 0;
        var pageObj = {
            page: page,
            isOnline: true,
        };
        this.adminService.listOnlineUsers(pageObj).subscribe(function (res) {
            // console.log('users onlinelistOnlineUsers', res);
            if (res.code === 200) {
                // this.spinner.hide();
                _this.onusers = [];
                _this.onusers = _this.onusers.concat(res.data.data);
                // console.log('this.onusersthis.onusers', this.onusers);
                _this.totalCount = res.data.totalCount;
            }
        });
    };
    ListOnlineUsersComponent.prototype.sendNotification = function (id) {
        this.sendNotificationUserid = id;
        document.getElementById('sendNotifcationIndividual').style.display = 'block';
    };
    ListOnlineUsersComponent.prototype.closesendNotificationModal = function () {
        document.getElementById('sendNotifcationIndividual').style.display = 'none';
    };
    ListOnlineUsersComponent.prototype.onSendNotifcation = function () {
        var _this = this;
        var userinfo = {
            id: this.sendNotificationUserid,
            value: this.sendNotificationForm.value
        };
        // console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyy', userinfo);
        this.adminService.individualNotification(userinfo).subscribe(function (res) {
            if (res.code === 200) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 403) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 500) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 202) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
        });
    };
    ListOnlineUsersComponent.prototype.checkUserSubscription = function () {
    };
    ListOnlineUsersComponent.prototype.enableSubscription = function (id, blSbuscription) {
        var _this = this;
        // console.log('id', id, blSbuscription);
        var data = {
            isSubscriptionFree: !blSbuscription,
            user_id: id
        };
        this.adminService.enable_disable_subscrition(data).subscribe(function (res) {
            console.log('res', res);
            if (res.code === 200) {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
            }
        });
        // this.listOnlineUsers(0);
        this.listOnlineUsersWhenActionPerformed(0);
    };
    ListOnlineUsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.notifcation.confirm('You want to delete user').then(function (data) {
            console.log('dataaaaa', data);
            if (data.value) {
                _this.adminService.deleteUser(id).subscribe(function (res) {
                    if (res.code === 200) {
                        // this.toastr.success(res.message)
                        // this.listOnlineUsers(0);
                        _this.listOnlineUsersWhenActionPerformed(0);
                        _this.notifcation.successToast('Deleted User');
                    }
                    else {
                        // this.toastr.error(res.message)
                        // this.listOnlineUsers(0);
                        _this.listOnlineUsersWhenActionPerformed(0);
                        _this.notifcation.infoToast(res.message);
                    }
                });
            }
            else {
                _this.notifcation.infoToast('Cancled');
            }
        });
    };
    ListOnlineUsersComponent.prototype.Unblock = function (id) {
        var _this = this;
        this.adminService.unBlockUser(id).subscribe(function (res) {
            if (res.code === 200) {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
            }
            else {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
            }
        });
    };
    ListOnlineUsersComponent.prototype.Block = function (id) {
        var _this = this;
        this.adminService.blockUser(id).subscribe(function (res) {
            if (res.code === 200) {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
            }
            else {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
            }
        });
    };
    ListOnlineUsersComponent.prototype.openAgeModal = function (id, DOB) {
        document.getElementById('myModalEditAge').style.display = 'block';
        this.editAgeForm.setValue({ 'id': id, 'DOB': DOB });
    };
    ListOnlineUsersComponent.prototype.closeEditAgeModal = function () {
        document.getElementById('myModalEditAge').style.display = 'none';
    };
    ListOnlineUsersComponent.prototype.openGenderModal = function (id, gender) {
        document.getElementById('myModalEditGender').style.display = 'block';
        if (gender == 0) {
            this.editGenderForm.setValue({ 'id': id, 'gender': 'Male' });
        }
        else {
            this.editGenderForm.setValue({ 'id': id, 'gender': 'Female' });
        }
    };
    ListOnlineUsersComponent.prototype.closeEditGenderModal = function () {
        document.getElementById('myModalEditGender').style.display = 'none';
    };
    ListOnlineUsersComponent.prototype.onEditAge = function () {
        var _this = this;
        // console.log(this.editAgeForm.value);
        this.adminService.editAGE_DOB(this.editAgeForm.value).subscribe(function (res) {
            if (res.code === 200) {
                // this.listOnlineUsers(0);
                _this.listOnlineUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            }
        });
    };
    ListOnlineUsersComponent.prototype.onEditGender = function () {
        var _this = this;
        // console.log(this.editGenderForm.value)
        if (this.editGenderForm.value.gender == 'Male' || this.editGenderForm.value.gender == 'male') {
            var data = {
                formValue: this.editGenderForm.value,
                gender: 0
            };
            this.adminService.editGender(data).subscribe(function (res) {
                // this.listOnlineUsers(0)
                _this.listOnlineUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            });
        }
        else if (this.editGenderForm.value.gender == 'Female' || this.editGenderForm.value.gender == 'female') {
            var data = {
                formValue: this.editGenderForm.value,
                gender: 1
            };
            this.adminService.editGender(data).subscribe(function (res) {
                // this.listOnlineUsers(0)
                _this.listOnlineUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            });
        }
        else {
            this.notifcation.infoToast('Invalid Input');
        }
    };
    ListOnlineUsersComponent.prototype.onGenderChangeEvent = function (event) {
        var _this = this;
        // console.log(event, '00000000000000000000000000000');
        if (event === 'male') {
            this.page = 0;
            var gender = {
                gender: 0,
                isOnline: true,
                page: this.page
            };
            this.adminService.genderFilter(gender).subscribe(function (res) {
                console.log(res.data.totalCount);
                _this.onusers = res.data.data;
                _this.totalCount = res.data.totalCount;
            });
        }
        else if (event === 'female') {
            this.page = 0;
            var gender1 = {
                gender: 1,
                isOnline: true,
                page: this.page
            };
            this.adminService.genderFilter(gender1).subscribe(function (res) {
                console.log(res.data.totalCount);
                _this.onusers = res.data.data;
                _this.totalCount = res.data.totalCount;
            });
        }
        this.genderSelected = event;
        this.switchPagination('userGenderList');
    };
    ListOnlineUsersComponent.prototype.onAgeChangeEvent = function (event) {
        var _this = this;
        this.page = 0;
        // console.log(event, 'AgeAgeAgeAgeAgeAge');
        var age = {
            age: event,
            isOnline: true,
            page: this.page
        };
        this.adminService.ageFilter(age).subscribe(function (res) {
            // console.log(res.data);
            if (res.code === 200) {
                _this.onusers = res.data;
            }
            else {
            }
        });
    };
    ListOnlineUsersComponent.prototype.onSUPIMPCHANGE = function (event) {
        console.log('eeeeeeee', this.supImp, this.supImp1, this.supImp2);
    };
    ListOnlineUsersComponent.prototype.exportDataToCSV = function () {
        var _this = this;
        var userList = [];
        this.adminService.userInfoToCSV().subscribe(function (res) {
            if (res.code === 200) {
                _this.usersList = res.data;
                _this.usersList.forEach(function (element) {
                    // console.log(element, 'element');
                    userList.push({
                        Question: element.questions,
                        option1: element.option1,
                        option2: element.option2,
                    });
                });
            }
            if (userList.length) {
                _this.excelService.exportAsExcelFile(userList, 'UserInfomation');
            }
            else {
                // this.notification.infoToast('No data available to export')
                _this.toastr.info('No data available to export');
            }
        });
    };
    ListOnlineUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-online-users',
            styles: [__webpack_require__(/*! ./list-online-users.component.css */ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.css")],
            template: __webpack_require__(/*! ./list-online-users.component.html */ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.html"),
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__["ExportXlxsService"],
            _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListOnlineUsersComponent);
    return ListOnlineUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-users/list-users.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-users/list-users.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listItem{\n    list-style-type: none;\n    margin: 0; padding: 0;\n}\n.listItem li{ display: inline-block; margin-right: 8px; }\n.dotRed{\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: red;\n    position: absolute;\n    top: 10px;\n    left: 5px;\n}\n.dotGreen{\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    background: green;\n    position: absolute;\n    top: 10px;\n    left: 5px; \n}\n.posRelative{\n    position: relative;\n    padding-left: 30px;\n}\n.listItem {\n    list-style-type: none;\n    margin: 0;\n    padding: 0\n}\n.listItem li {\n    display: inline-block;\n    margin-right: 8px\n}\n.table-responsive img {\n    max-width: 24%;\n}\n.example-viewport {\n    height: 450px;\n    width: 100%;\n    /* border: 1px solid black; */\n  }\n.example-item {\n    height: 50px;\n  }\nform {\n    overflow: hidden;\n  }\n.admin-box-controls{\n      display: flex;\n      flex-wrap: wrap;\n      align-items:center;\n      width: 100%;\n      padding-bottom: 15px;\n  }\n.searchForm{\n      display: flex;\n      padding: 0;\n      align-items: flex-start;\n  \n  }\n.searchInp{\n    padding: 20px;\n    padding-left:10px;\n    outline: none;\n    border:1px solid lightgray;\n    margin: 5px;\n    border-radius: 5px;\n  }\n.searchBtn{\n  padding: 10px;  \n}\n.btn-search{\n    color:white;\n    background: linear-gradient(180deg, #feba36 0, #f92387 163.64%);\n    padding: 5px;\n    padding-left:10px ;\n    padding-right:10px ;\n    outline: none;\n    border-radius: 10px;\n    border:1px solid #feba36;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n.dropdown{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 0 !important;\n    padding: 0;\n}\n.search-area{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.enableGenderArea{\n    display: flex;\n    padding: 0;\n}\n.enabled{\n    display: flex;\n    align-items: center;\n\n}\n.statusG{\n    padding: 5px;\n    margin-left: 5px;\n    color:white;\n    font-size: 12px;\n    border-radius: 5px;\n    width: 5.2em;\n    background-color: green;\n    border:1px solid green;\n}\n.statusR{\n    padding: 5px;\n    margin-left: 5px;\n    color:white;\n    font-size: 12px;\n    border-radius: 5px;\n    width: 5.2em;\n    background-color: red;\n    border:1px solid red;\n}\n.fields{\n\n}\n.label{\n    margin: 0;\n    font-weight: 500;\n    margin-left: 5px;\n}\n.checkBx{\n    margin-left: 5px;\n}\nselect {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    padding: 0px 5px;\n    border-radius: 13px;\n    border: 1px solid #fc6763;\n    background: #fff;\n    font-size: 15px;\n    color: #3e4148;\n    line-height: 1;\n    -webkit-appearance: none;\n}"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-users/list-users.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-users/list-users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"admin-bar\">\n    <div class=\"wrapper dashboard\">\n        <div class=\"admin-main-container\"> -->\n<!-- <div class=\"admin-main-content\"> -->\n<div class=\"admin-main-content\">\n    <h3>\n\t\tList of Users \n\t\t<button class=\"export_button btn btn-primary \" (click)=\"exportAsXLSXReports()\" style=\"float:right\">Export User Data</button>\n\t\n\t</h3>\n\t\n\t\n    <div class=\"admin-box-controls\">\n        <div class=\"enableGenderArea col-lg-4 col-md-4 col-sm-12\">\n\n            <div class=\"enabled\">\n                <span class=\"fields\" *ngIf=\"femaleAlarm;else disablealarm\">Alarm Enabled:</span>\n                <div class=\"fields\" [ngClass]=\"femaleAlarm ? 'statusG' : 'statusR'\">FEMALE</div>\n            </div>\n            <label for=\"gender\" class=\"label\" *ngIf=\"femaleAlarm;else lableChange\">Disable:</label>\n            <p-checkbox name=\"groupname\" value=\"1\" [(ngModel)]=\"isDisabledFemale\"\n                (click)=\"enableDisableGenderBasedAlarm(femaleAlarm)\"></p-checkbox>\n            <!-- <input class=\"checkBx\" type=\"checkbox\" name=\"gender\" [(ngModel)]=\"isDisabledFemale\" > -->\n        </div>\n\n        <div class=\"enableGenderArea col-lg-4 col-md-4 col-sm-12\">\n            <div class=\"enabled\">\n                <span class=\"fields\" *ngIf=\"maleAlarm;else disablealarm\">Alarm Enabled:</span>\n                <div class=\"fields status\" [ngClass]=\"maleAlarm ? 'statusG' : 'statusR'\">MALE</div>\n            </div>\n            <label for=\"gender\" class=\"label\" *ngIf=\"maleAlarm;else lableChange\">Disable:</label>\n            <p-checkbox name=\"groupname\" value=\"0\" [(ngModel)]=\"isDisabledFemale\"\n                (click)=\"enableDisableGenderBasedAlarm(maleAlarm)\"></p-checkbox>\n            <!-- <input class=\"checkBx\" type=\"checkbox\" name=\"gender\" [(ngModel)]=\"isDisabledMale\" (click)=\"enableDisableGenderBasedAlarm()\"> -->\n        </div>\n        <!-- <div class=\"dropdown col-lg-3 col-md-3 col-sm-12\">\n            <p-dropdown [options]=\"genderValues\" [(ngModel)]=\"genderalarm\"></p-dropdown>\n            <button type=\"submit\" class=\"btn-search\" (click)=\"enableDisableGenderBasedAlarm()\">Submit</button>\n        </div> -->\n\n        <form [formGroup]=\"searchForm\" class=\"searchForm col-lg-3 col-md-3 col-sm-12\" novalidate\n            (ngSubmit)=\"submitListUser()\">\n            <div class=\"search-area\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"searchText\" id=\"inputUrl\"\n                    placeholder=\"Search Here\">\n                <div *ngIf=\"searchForm.controls['searchText'].touched\">\n                    <span *ngIf=\"searchForm.controls['searchText'].hasError('required')\" class=\"error\">\n                        Required\n                    </span>\n                </div>\n                <span *ngIf=\"searchForm.controls['searchText'].hasError('maxlength')\" class=\"error\">\n                    Length exceded\n                </span>\n            </div>\n            <button type=\"submit\" class=\"btn-search\">Search</button>\n        </form>\n\t\t\n\t\t\n    </div>\n       <!--  <cdk-virtual-scroll-viewport itemSize=\"60\" class='example-viewport'> -->\n            <div class=\"table-responsive example-itema\">\n                <table class=\"table NoTopBorder custom-table user-control-tablea \">\n                    <tbody>\n                        <tr>\n\t\t\t\t\t\t\t<th class=\"label\">Sr no</th>\n                            <th class=\"label\">Name</th>\n                            <th class=\"label\">App Version</th>\n                            <th class=\"label\">Email</th>\n                            <th class=\"label\">Gender\n                                <div class=\"dropdown\">\n                                    <select (change)=\"onGenderChangeEvent($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"male\">Male</option>\n                                        <option value=\"female\">female</option>\n                                    </select>\n                                </div>\n                            </th>\n                            <th class=\"label\">K\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Keeping Kosher\">K</option>\n                                        <option value=\"Not Keeping Kosher\">NK</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">S\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp1\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Keeping Shabbos\">S</option>\n                                        <option value=\"Not Keeping Shabbos\">NS</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">T\n                                <div class=\"dropdown\">\n                                    <!-- <select [(ngModel)]=\"supImp2\" (change)=\"onSUPIMPCHANGE($event.target.value)\">\n                                        <option style=\"display:none\">select</option>\n                                        <option value=\"Wearing Tefillin\">T</option>\n                                        <option value=\"Not Wearing Tefillin\">NT</option>\n                                    </select> -->\n                                </div>\n                            </th>\n                            <th class=\"label\">C\n                                <!-- <div>\n                                                <input type=\"checkbox\" data-md-icheck (change)=\"addprop1($event)\" />\n                                            </div> -->\n                            </th>\n                            <th class=\"label\">DOB</th>\n                            <th class=\"label\">Age\n                                <div class=\"dropdown\">\n                                    <select (change)=\"onAgeChangeEvent($event.target.value)\">\n                                        <option style=\"display:none\">Select</option>\n                                        <option *ngFor=\"let item of ageLists\" value={{item._id.age}}>{{item._id.age}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </th>\n                            <!-- <th>\n                                            Last Online\n                                        </th>\n                                        <th>Last Online Date</th>\n                                        <th>\n                                            Last Offline\n                                        </th>\n                                        <th>Last Offline Date</th> -->\n                            <th class=\"label\">Last seen</th>\n                            <th class=\"label\">Device Type</th>\n                            <th class=\"label\">Location Alarm Enabled</th>\n                            <th class=\"label\"> Gender Alarm Enabled</th>\n                            <th class=\"label\">City</th>\n                            <th class=\"label\">Country</th>\n                            <th class=\"label\"> Subscription Done</th>\n                            <th class=\"label\">Subscription</th>\n                            <th class=\"label\">Action</th>\n                        </tr>\n                        <tr *ngFor=\"let user of onusers;let i = index\">\n\t\t\t\t\t\t\t<td>{{(this.page*40)+i+1}}</td>\n                            <td class=\"posRelative\" [routerLink]=\"['/admin/user/video-log/',user._id]\">\n                                <!-- <td class=\"posRelative\" [routerLink]=\"['/video-log/',user._id]\"> -->\n\n                                <span [ngClass]=\"user.isOnline ? 'dotGreen' : 'dotRed'\"></span>\n                                <a> {{user?.firstName}}</a>\n                            </td>\n                            <td>\n                                {{user?.appVersion}}\n                            </td>\n                            <td>\n                                {{user?.email}}\n                            </td>\n                            <td (click)=\"openGenderModal(user?._id,user.gender)\">\n                                <div *ngIf=\"!user.gender;else other\">\n                                    Male\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Keeping Kosher')||(supImpAns?.answer_text=='Not Keeping Kosher')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Keeping Kosher');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Keeping Shabbos')||(supImpAns?.answer_text=='Not Keeping Shabbos')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Keeping Shabbos');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <div *ngFor=\"let supImpAns of  user?.sup_imp_ans;let i = index \">\n                                    <div\n                                        *ngIf=\"(supImpAns?.answer_text=='Wearing Tefillin')||(supImpAns?.answer_text=='Not Wearing Tefillin')\">\n                                        <div *ngIf=\"(supImpAns?.answer_text=='Wearing Tefillin');else abbrivated\">\n                                            Y\n                                        </div>\n                                    </div>\n                                </div>\n                            </td>\n                            <td *ngIf=\"!user?.gender\">\n                                <div *ngIf=\"user?.isCohen;else cohen\">\n                                    Y\n                                </div>\n                            </td>\n                            <td *ngIf=\"user?.gender\">\n                                <div *ngIf=\"user?.isAbleToMarryCohen;else AbleToMarryCohen\">\n                                    Y\n                                </div>\n                            </td>\n\n                            <td (click)=\"openAgeModal(user?._id,user?.DOB)\">\n                                {{user?.DOB}}\n                            </td>\n                            <td>\n                                {{user?.age}}\n                            </td>\n                            <td>\n                                {{user?.updatedAt| date: 'dd/MM/yyyy'}}\n                            </td>\n                            <!-- <td>\n                                            {{user.lastOnlineTime}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOnlineDateWithTZ| date: 'dd/MM/yyyy'}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOfflineTime}}\n                                        </td>\n                                        <td>\n                                            {{user.lastOfflineDateWithTZ| date: 'dd/MM/yyyy'}}\n                                        </td> -->\n                            <td>\n                                {{user?.device_type}} </td>\n                            <td>\n                                {{user?.isLocationAlarmEnabled | yesNo:user?.isLocationAlarmEnabled }}\n                            </td>\n                            <td>\n                                {{user?.isGenderAlarmEnabled | yesNo:user?.isGenderAlarmEnabled}}\n                            </td>\n                            <td>\n                                {{user?.city}}\n                            </td>\n                            <td>\n                                {{user?.country}}\n                            </td>\n                            <td *ngIf=\"user?.isSubscriptionDone;else no\">\n                                Yes\n                            </td>\n\n                            <td (click)=\"enableSubscription(user?._id,user?.isSubscriptionFree)\">\n                                <!-- <div class=\"box-video__item\">\n                                                            <form [formGroup]=\"checkBoxForm\">\n                                                              <input type=\"checkbox\" (change)=\"onCheckboxChagen(user._id, $event.target.checked)\">\n                                                            </form>\n                                                          </div> -->\n                                <div *ngIf=\"user.isSubscriptionFree;else subscriptionFree\">\n                                    <!-- <div *ngIf=\"isSubscriptionDone\"> -->\n                                    <!-- <a title=\"Enable Subscription\"> -->\n                                    <button pButton type=\"button\" label=\"Enable\"\n                                        class=\"ui-button-rounded ui-button-success\"></button>\n                                    <!-- <img src=\"../../../../../assets/img/subscription.png\" alt=\"Shidduch View\"> -->\n                                    <!-- </a> -->\n\n                                    <!-- <button >Enable Subscription</button> -->\n                                    <!-- </div> -->\n                                </div>\n                                <!-- <p-checkbox [(ngModel)]=\"checkSubscription\" binary=\"true\"></p-checkbox> -->\n                            </td>\n\n                            <td>\n                                <ul class=\"listItem\">\n                                    <li>\n                                        <a title=\"Edit\">\n                                            <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"delete(user?._id)\" title=\"Delete\">\n                                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a (click)=\"sendNotification(user?._id)\" title=\"Send Notification\">\n                                            <i class=\"fa fa-send-o\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a *ngIf=\"user?.isBlocked==true\" (click)=\"Unblock(user?._id)\" title=\"Block\">\n                                            <i class=\"fa fa-bell-slash\" aria-hidden=\"true\"></i>\n                                        </a>\n                                        <a *ngIf=\"user?.isBlocked==false\" (click)=\"Block(user?._id)\" title=\"Unblock\">\n                                            <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n\t\t\t\t\n            </div>\n\t\t\t<div id=\"userList\">\n\t\t\t\t<p-paginator  [rows]=\"40\" [totalRecords]=totalCount (onPageChange)=\"paginateUsers($event)\"></p-paginator>\n\t\t\t</div>\n\t\t\t<div id=\"userGenderList\" style=\"display:none\">\n\t\t\t\t<p-paginator [rows]=\"40\" [totalRecords]=totalCount (onPageChange)=\"paginateUsers($event)\"></p-paginator>\n\t\t\t</div>\n        <!-- </cdk-virtual-scroll-viewport> -->\n    </div>\n    <!-- </div>\n\n        </div>\n\n    </div> -->\n    <!-- <p-paginator [rows]=\"20\" [totalRecords]=totalCount (onPageChange)=\"paginate($event)\"></p-paginator> -->\n<ng-template #disablealarm>\n    <span class=\"fields\">Alarm Disabled:</span>\n\n</ng-template>\n<ng-template #lableChange>\n    <label for=\"gender\" class=\"label\">Enable:</label>\n</ng-template>\n\n\n<ng-template #other>\n    <td>Female</td>\n</ng-template>\n\n<ng-template #abbrivated>\n    <td>N</td>\n</ng-template>\n\n<ng-template #no>\n    <td>No</td>\n</ng-template>\n<ng-template #AbleToMarryCohen>\n    <td>N</td>\n</ng-template>\n<ng-template #subscriptionFree>\n    <!-- <a title=\"Disable Subscription\">\n            <img src=\"../../../../../assets/img/unsubscribe.png\" alt=\"Shidduch View\">\n    </a> -->\n    <button pButton type=\"button\" label=\"Disable\" class=\"ui-button-rounded ui-button-danger\"></button>\n</ng-template>\n<ng-template #cohen>\n    <td>N</td>\n</ng-template>\n<div class=\"modal\" id=\"myModalEditAge\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeEditAgeModal()\">×</button>\n        <form [formGroup]=\"editAgeForm\" novalidate (ngSubmit)=\"onEditAge()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Edit D.O.B.\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"DOB\"\n                        placeholder=\"Enter the DOB (dd/mm/yyyy)\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n\n\n\n<div class=\"modal\" id=\"myModalEditGender\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeEditGenderModal()\">×</button>\n        <form [formGroup]=\"editGenderForm\" novalidate (ngSubmit)=\"onEditGender()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Edit D.O.B.\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"gender\"\n                        placeholder=\"Enter the DOB (dd/mm/yyyy)\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"sendNotifcationIndividual\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closesendNotificationModal()\">×</button>\n        <form [formGroup]=\"sendNotificationForm\" novalidate (ngSubmit)=\"onSendNotifcation()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Send Notification\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"id\" placeholder=\"\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"title\" placeholder=\"Enter title\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"message\" placeholder=\"Enter message\">\n                </label>\n\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">Send</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<ngx-spinner bdOpacity=0.1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n\n\n\n\n\n\n\n\n\n\n\n<!-- <ngx-spinner bdOpacity=0 .1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner> -->\n\n<!-- <td>\n    <select [(ngModel)]=\"item.category\">\n         <option style=\"display:none\">select a category</option>\n         <option *ngFor=\"let item of categories\" [ngValue]=\"item.category\" value=\"item.category\">{{item.category}}</option>\n       </select>\n     </td> \n    -->"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/list-users/list-users.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/list-users/list-users.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/export-xlxs.service */ "./src/app/shared/service/export-xlxs.service.ts");
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(adminService, spinner, toastr, fb, excelService, notifcation, scrollDispatcher, cd) {
        this.adminService = adminService;
        this.spinner = spinner;
        this.toastr = toastr;
        this.fb = fb;
        this.excelService = excelService;
        this.notifcation = notifcation;
        this.scrollDispatcher = scrollDispatcher;
        this.cd = cd;
        this.onusers = [];
        this.checkSubscription = false;
        this.page = 0;
        this.genderValues = [
            { label: 'Enable Gender Alarm', value: null },
            { label: 'Male', value: { id: 0, name: 'Male', code: 'M' } },
            { label: 'Female', value: { id: 1, name: 'Female', code: 'F' } },
            { label: 'Both', value: { id: 2, name: 'Both', code: 'MandF' } },
        ];
    }
    ListUsersComponent.prototype.ngOnInit = function () {
        // this.exportDataToCSV();
        this.checkBoxForm = this.fb.group({
            userid: this.fb.array([])
        });
        // this.spinner.show()
        // setTimeout(() => {
        //   this.spinner.hide()
        // }, 1000)
        this.editAgeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20)]),
        });
        this.sendNotificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.editGenderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])
        });
        this.listUsers(this.page);
        this.ageList();
        this.genderSelected = '';
    };
    ListUsersComponent.prototype.enableDisableGenderBasedAlarm = function (flag) {
        var _this = this;
        // console.log('genderalarm', this.isDisabledFemale, flag);
        this.notifcation.confirm('You want to enable alarm').then(function (data) {
            // console.log('dataaaaa', data);
            if (data.value) {
                var gendervalue = {
                    // tslint:disable-next-line:radix
                    gender: parseInt(_this.isDisabledFemale[0]),
                    enableOrDisableAlarm: !flag
                };
                _this.adminService.enableOrDisableGenderAlarm(gendervalue).subscribe(function (res) {
                    if (res.code === 200) {
                        _this.isDisabledFemale = '';
                        _this.listUsers(0);
                    }
                    else {
                        _this.isDisabledFemale = '';
                        _this.listUsers(0);
                    }
                });
            }
            else {
                _this.isDisabledFemale = '';
            }
        });
    };
    ListUsersComponent.prototype.ageList = function () {
        var _this = this;
        this.adminService.ageList().subscribe(function (res) {
            // console.log(res.data, '************');
            if (res.code === 200) {
                _this.ageLists = res.data;
            }
            else {
            }
        });
    };
    /* ngAfterViewInit(): void {
        this.scrollDispatcher.scrolled()
            .subscribe(event => {
                console.log('gdfgggggdfgdfgdfgfg', this.page, 'event', event);
                const pageNumber = this.page;
                pageNumber = parseInt(pageNumber) + 1;
                console.log(pageNumber, 'this.page');
                this.listUsers(pageNumber);
                this.cd.detectChanges();
            });
    } */
    /* ngAfterViewInit(): void {
      this.scrollDispatcher.scrolled().pipe(
        filter(event => this.virtualScroll.measureScrollOffset('bottom') === 0)
      ).subscribe(event => {
        console.log('gdfgggggdfgdfgdfgfg', this.page, 'event', event);
        const pageNumber = this.page;
        pageNumber = parseInt(pageNumber) + 1;
        console.log(pageNumber, 'this.page');
        this.listUsers(pageNumber);
        this.cd.detectChanges();
      });
  
    } */
    ListUsersComponent.prototype.submitListUser = function () {
        this.listUsers(this.page);
    };
    ListUsersComponent.prototype.switchPagination = function (switchpagination) {
        if (switchpagination == 'userList') {
            document.getElementById('userGenderList').style.display = 'none';
            document.getElementById('userList').style.display = 'block';
        }
        if (switchpagination == 'userGenderList') {
            document.getElementById('userList').style.display = 'none';
            document.getElementById('userGenderList').style.display = 'block';
        }
    };
    ListUsersComponent.prototype.listUsers = function (page) {
        var _this = this;
        console.log('156 page number', page);
        if (this.searchForm.valid) {
            // console.log(this.searchForm.value, 'this.searchForm.value');
            this.spinner.show();
            var pageObj = {
                page: page,
                searchText: this.searchForm.value
            };
            this.adminService.listUsers(pageObj).subscribe(function (res) {
                console.log('users onlinelistUsers', res);
                if (res.code === 200) {
                    _this.spinner.hide();
                    _this.onusers = [];
                    _this.onusers = _this.onusers.concat(res.data.data);
                    _this.totalCount = res.data.totalCount;
                    _this.maleAlarm = res.data.maleAlarm[0].isGenderAlarmEnabled;
                    _this.femaleAlarm = res.data.femaleAlarm[0].isGenderAlarmEnabled;
                    // console.log('this.onusersthis.onusers', this.femaleAlarm, this.maleAlarm);
                }
            });
        }
        else {
            // this.spinner.show();
            var pageObj = {
                page: page
            };
            this.adminService.listUsers(pageObj).subscribe(function (res) {
                // console.log('users onlinelistUsers', res);
                if (res.code === 200) {
                    // this.spinner.hide();
                    _this.onusers = _this.onusers.concat(res.data.data);
                    // console.log('this.onusersthis.onusers', this.onusers);
                    _this.totalCount = res.data.totalCount;
                    _this.maleAlarm = res.data.maleAlarm[0].isGenderAlarmEnabled;
                    _this.femaleAlarm = res.data.femaleAlarm[0].isGenderAlarmEnabled;
                    // console.log('this.onusersthis.onusers', this.femaleAlarm, this.maleAlarm);
                }
            });
        }
        this.switchPagination('userList');
    };
    ListUsersComponent.prototype.paginateUsers = function (event) {
        var _this = this;
        if (this.genderSelected == '') {
            var obj = {
                page: event.page
            };
            this.spinner.show();
            this.adminService.listUsers(obj).subscribe(function (res) {
                // console.log('users', res);
                if (res.code === 200) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                }
            });
            this.page = event.page;
        }
        else {
            // console.log(event, '00000000000000000000000000000');
            if (this.genderSelected === 'male') {
                this.spinner.show();
                var gender = {
                    gender: 0,
                    page: event.page
                };
                this.adminService.genderFilter(gender).subscribe(function (res) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                });
            }
            else if (this.genderSelected === 'female') {
                this.spinner.show();
                var gender1 = {
                    gender: 1,
                    page: event.page
                };
                this.adminService.genderFilter(gender1).subscribe(function (res) {
                    _this.spinner.hide();
                    _this.onusers = res.data.data;
                    _this.totalCount = res.data.totalCount;
                });
            }
            this.page = event.page;
        }
    };
    ListUsersComponent.prototype.listUsersWhenActionPerformed = function (page) {
        var _this = this;
        this.page = 0;
        var pageObj = {
            page: page
        };
        this.adminService.listUsers(pageObj).subscribe(function (res) {
            // console.log('users onlinelistUsers', res);
            if (res.code === 200) {
                // this.spinner.hide();
                _this.onusers = [];
                _this.onusers = _this.onusers.concat(res.data.data);
                // console.log('this.onusersthis.onusers', this.onusers);
                _this.totalCount = res.data.totalCount;
            }
        });
    };
    ListUsersComponent.prototype.sendNotification = function (id) {
        this.sendNotificationUserid = id;
        document.getElementById('sendNotifcationIndividual').style.display = 'block';
    };
    ListUsersComponent.prototype.closesendNotificationModal = function () {
        document.getElementById('sendNotifcationIndividual').style.display = 'none';
    };
    ListUsersComponent.prototype.onSendNotifcation = function () {
        var _this = this;
        var userinfo = {
            id: this.sendNotificationUserid,
            value: this.sendNotificationForm.value
        };
        // console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyy', userinfo);
        this.adminService.individualNotification(userinfo).subscribe(function (res) {
            if (res.code === 200) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 403) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 500) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
            else if (res.code === 202) {
                // this.notifcation.infoToast(res.message)
                _this.toastr.info(res.message);
                _this.closesendNotificationModal();
                _this.sendNotificationForm.reset();
            }
        });
    };
    ListUsersComponent.prototype.checkUserSubscription = function () {
    };
    ListUsersComponent.prototype.enableSubscription = function (id, blSbuscription) {
        var _this = this;
        // console.log('id', id, blSbuscription);
        var data = {
            isSubscriptionFree: !blSbuscription,
            user_id: id
        };
        this.adminService.enable_disable_subscrition(data).subscribe(function (res) {
            console.log('res', res);
            if (res.code === 200) {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
            }
        });
        // this.listUsers(0);
        this.listUsersWhenActionPerformed(0);
    };
    ListUsersComponent.prototype.delete = function (id) {
        var _this = this;
        this.notifcation.confirm('You want to delete user').then(function (data) {
            console.log('dataaaaa', data);
            if (data.value) {
                _this.adminService.deleteUser(id).subscribe(function (res) {
                    if (res.code === 200) {
                        // this.toastr.success(res.message)
                        // this.listUsers(0);
                        _this.listUsersWhenActionPerformed(0);
                        _this.notifcation.successToast('Deleted User');
                    }
                    else {
                        // this.toastr.error(res.message)
                        // this.listUsers(0);
                        _this.listUsersWhenActionPerformed(0);
                        _this.notifcation.infoToast(res.message);
                    }
                });
            }
            else {
                _this.notifcation.infoToast('Cancled');
            }
        });
    };
    ListUsersComponent.prototype.Unblock = function (id) {
        var _this = this;
        this.adminService.unBlockUser(id).subscribe(function (res) {
            if (res.code === 200) {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
            }
            else {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
            }
        });
    };
    ListUsersComponent.prototype.Block = function (id) {
        var _this = this;
        this.adminService.blockUser(id).subscribe(function (res) {
            if (res.code === 200) {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
            }
            else {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
            }
        });
    };
    ListUsersComponent.prototype.openAgeModal = function (id, DOB) {
        document.getElementById('myModalEditAge').style.display = 'block';
        this.editAgeForm.setValue({ 'id': id, 'DOB': DOB });
    };
    ListUsersComponent.prototype.closeEditAgeModal = function () {
        document.getElementById('myModalEditAge').style.display = 'none';
    };
    ListUsersComponent.prototype.openGenderModal = function (id, gender) {
        document.getElementById('myModalEditGender').style.display = 'block';
        if (gender == 0) {
            this.editGenderForm.setValue({ 'id': id, 'gender': 'Male' });
        }
        else {
            this.editGenderForm.setValue({ 'id': id, 'gender': 'Female' });
        }
    };
    ListUsersComponent.prototype.closeEditGenderModal = function () {
        document.getElementById('myModalEditGender').style.display = 'none';
    };
    ListUsersComponent.prototype.onEditAge = function () {
        var _this = this;
        // console.log(this.editAgeForm.value);
        this.adminService.editAGE_DOB(this.editAgeForm.value).subscribe(function (res) {
            if (res.code === 200) {
                // this.listUsers(0);
                _this.listUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            }
        });
    };
    ListUsersComponent.prototype.onEditGender = function () {
        var _this = this;
        // console.log(this.editGenderForm.value)
        if (this.editGenderForm.value.gender == 'Male' || this.editGenderForm.value.gender == 'male') {
            var data = {
                formValue: this.editGenderForm.value,
                gender: 0
            };
            this.adminService.editGender(data).subscribe(function (res) {
                // this.listUsers(0)
                _this.listUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            });
        }
        else if (this.editGenderForm.value.gender == 'Female' || this.editGenderForm.value.gender == 'female') {
            var data = {
                formValue: this.editGenderForm.value,
                gender: 1
            };
            this.adminService.editGender(data).subscribe(function (res) {
                // this.listUsers(0)
                _this.listUsersWhenActionPerformed(0);
                document.getElementById('myModalEditGender').style.display = 'none';
            });
        }
        else {
            this.notifcation.infoToast('Invalid Input');
        }
    };
    ListUsersComponent.prototype.onGenderChangeEvent = function (event) {
        var _this = this;
        // console.log(event, '00000000000000000000000000000');
        if (event === 'male') {
            this.page = 0;
            var gender = {
                gender: 0,
                page: this.page
            };
            this.adminService.genderFilter(gender).subscribe(function (res) {
                console.log(res.data.totalCount);
                _this.onusers = res.data.data;
                _this.totalCount = res.data.totalCount;
            });
        }
        else if (event === 'female') {
            this.page = 0;
            var gender1 = {
                gender: 1,
                page: this.page
            };
            this.adminService.genderFilter(gender1).subscribe(function (res) {
                console.log(res.data.totalCount);
                _this.onusers = res.data.data;
                _this.totalCount = res.data.totalCount;
            });
        }
        this.genderSelected = event;
        this.switchPagination('userGenderList');
    };
    ListUsersComponent.prototype.onAgeChangeEvent = function (event) {
        var _this = this;
        this.page = 0;
        // console.log(event, 'AgeAgeAgeAgeAgeAge');
        var age = {
            age: event,
            page: this.page
        };
        this.adminService.ageFilter(age).subscribe(function (res) {
            // console.log(res.data);
            if (res.code === 200) {
                _this.onusers = res.data;
            }
            else {
            }
        });
    };
    ListUsersComponent.prototype.onSUPIMPCHANGE = function (event) {
        console.log('eeeeeeee', this.supImp, this.supImp1, this.supImp2);
    };
    ListUsersComponent.prototype.exportAsXLSXReports = function () {
        var _this = this;
        var userListData = [];
        var i = 1;
        this.adminService.userInfoToCSV().subscribe(function (res) {
            console.log(res);
            if (res.code === 200) {
                _this.usersList = res.data.data;
                _this.usersList.forEach(function (element) {
                    if (!element.gender && element.isCohen) {
                        _this.C = "Y";
                    }
                    else if (element.gender && element.isAbleToMarryCohen) {
                        _this.C = "Y";
                    }
                    else {
                        _this.C = "N";
                    }
                    element.sup_imp_ans.forEach(function (value, index) {
                        if (value.answer_text == 'Keeping Kosher' || value.answer_text == 'Not Keeping Kosher') {
                            if (value.answer_text == 'Keeping Kosher') {
                                _this.K = "Y";
                            }
                            else {
                                _this.K = "N";
                            }
                        }
                    });
                    element.sup_imp_ans.forEach(function (value, index) {
                        if (value.answer_text == 'Keeping Shabbos' || value.answer_text == 'Not Keeping Shabbos') {
                            if (value.answer_text == 'Keeping Shabbos') {
                                _this.S = "Y";
                            }
                            else {
                                _this.S = "N";
                            }
                        }
                    });
                    element.sup_imp_ans.forEach(function (value, index) {
                        if (value.answer_text == 'Wearing Tefillin' || value.answer_text == 'Not Wearing Tefillin') {
                            if (value.answer_text == 'Wearing Tefillin') {
                                _this.T = "Y";
                            }
                            else {
                                _this.T = "N";
                            }
                        }
                    });
                    userListData.push({
                        SNo: i++,
                        Name: element.firstName,
                        Email: element.email,
                        Age: element.age,
                        DOB: element.DOB,
                        Gender: element.gender ? 'Female' : 'Male',
                        DeviceType: element.device_type,
                        AppVersion: element.appVersion,
                        City: element.city,
                        Country: element.country,
                        isGenderAlarmEnabled: element.isGenderAlarmEnabled ? 'Yes' : 'No',
                        isLocationAlarmEnabled: element.isLocationAlarmEnabled ? 'Yes' : 'No',
                        isSubscriptionDone: element.isSubscriptionDone ? 'Yes' : 'No',
                        K: _this.K,
                        S: _this.S,
                        T: _this.T,
                        C: _this.C,
                    });
                });
            }
            if (userListData.length) {
                _this.excelService.exportAsExcelFile(userListData, 'UserInfomation');
            }
            else {
                // this.notification.infoToast('No data available to export')
                _this.toastr.info('No data available to export');
            }
        });
    };
    ListUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-users',
            template: __webpack_require__(/*! ./list-users.component.html */ "./src/app/admin/modules/manage-users/list-users/list-users.component.html"),
            styles: [__webpack_require__(/*! ./list-users.component.css */ "./src/app/admin/modules/manage-users/list-users/list-users.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_service_export_xlxs_service__WEBPACK_IMPORTED_MODULE_4__["ExportXlxsService"],
            _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListUsersComponent);
    return ListUsersComponent;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/manage-users-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/manage-users-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ManageUsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersRoutingModule", function() { return ManageUsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-users/add-users.component */ "./src/app/admin/modules/manage-users/add-users/add-users.component.ts");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/admin/modules/manage-users/list-users/list-users.component.ts");
/* harmony import */ var _list_online_users_list_online_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-online-users/list-online-users.component */ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.ts");
/* harmony import */ var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-users/edit-users.component */ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.ts");
/* harmony import */ var _send_notifcations_send_notifcations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-notifcations/send-notifcations.component */ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.ts");
/* harmony import */ var _video_log_video_log_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-log/video-log.component */ "./src/app/admin/modules/manage-users/video-log/video-log.component.ts");
/* harmony import */ var _alert_video_user_alert_video_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./alert-video-user/alert-video-user.component */ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'add-user',
        component: _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_2__["AddUsersComponent"]
    },
    {
        path: 'list-online-user',
        component: _list_online_users_list_online_users_component__WEBPACK_IMPORTED_MODULE_4__["ListOnlineUsersComponent"]
    },
    {
        path: 'list-user',
        component: _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__["ListUsersComponent"]
    },
    {
        path: 'edit-user/:id',
        component: _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_5__["EditUsersComponent"]
    },
    {
        path: 'video-log/:id',
        component: _video_log_video_log_component__WEBPACK_IMPORTED_MODULE_7__["VideoLogComponent"]
    },
    {
        path: 'send-notification',
        component: _send_notifcations_send_notifcations_component__WEBPACK_IMPORTED_MODULE_6__["SendNotifcationsComponent"]
    },
    {
        path: 'alert-user',
        component: _alert_video_user_alert_video_user_component__WEBPACK_IMPORTED_MODULE_8__["AlertVideoUserComponent"]
    }
];
var ManageUsersRoutingModule = /** @class */ (function () {
    function ManageUsersRoutingModule() {
    }
    ManageUsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageUsersRoutingModule);
    return ManageUsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/manage-users.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/manage-users.module.ts ***!
  \*******************************************************************/
/*! exports provided: ManageUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersModule", function() { return ManageUsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-users-routing.module */ "./src/app/admin/modules/manage-users/manage-users-routing.module.ts");
/* harmony import */ var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-users/add-users.component */ "./src/app/admin/modules/manage-users/add-users/add-users.component.ts");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/admin/modules/manage-users/list-users/list-users.component.ts");
/* harmony import */ var _list_online_users_list_online_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-online-users/list-online-users.component */ "./src/app/admin/modules/manage-users/list-online-users/list-online-users.component.ts");
/* harmony import */ var _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-users/edit-users.component */ "./src/app/admin/modules/manage-users/edit-users/edit-users.component.ts");
/* harmony import */ var _send_notifcations_send_notifcations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./send-notifcations/send-notifcations.component */ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _video_log_video_log_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video-log/video-log.component */ "./src/app/admin/modules/manage-users/video-log/video-log.component.ts");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _alert_video_user_alert_video_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alert-video-user/alert-video-user.component */ "./src/app/admin/modules/manage-users/alert-video-user/alert-video-user.component.ts");
/* harmony import */ var _shared_service_conformation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/service/conformation.service */ "./src/app/shared/service/conformation.service.ts");
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
/* harmony import */ var angular_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-tabs-component */ "./node_modules/angular-tabs-component/dist/index.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/rating */ "./node_modules/primeng/rating.js");
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_rating__WEBPACK_IMPORTED_MODULE_24__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
var ManageUsersModule = /** @class */ (function () {
    function ManageUsersModule() {
    }
    ManageUsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_users_add_users_component__WEBPACK_IMPORTED_MODULE_4__["AddUsersComponent"],
                _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__["ListUsersComponent"],
                _list_online_users_list_online_users_component__WEBPACK_IMPORTED_MODULE_6__["ListOnlineUsersComponent"],
                _edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_7__["EditUsersComponent"],
                _send_notifcations_send_notifcations_component__WEBPACK_IMPORTED_MODULE_8__["SendNotifcationsComponent"],
                _video_log_video_log_component__WEBPACK_IMPORTED_MODULE_10__["VideoLogComponent"],
                _alert_video_user_alert_video_user_component__WEBPACK_IMPORTED_MODULE_13__["AlertVideoUserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_23__["SharedModule"],
                _manage_users_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageUsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11__["OverlayPanelModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
                angular_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_17__["PaginatorModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollDispatchModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                primeng_rating__WEBPACK_IMPORTED_MODULE_24__["RatingModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_2__["LaddaModule"].forRoot({
                    style: 'contract',
                    spinnerSize: 40,
                    spinnerColor: 'red',
                    spinnerLines: 12
                }),
            ],
            providers: [_shared_service_conformation_service__WEBPACK_IMPORTED_MODULE_14__["ConformService"], _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollDispatcher"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ManageUsersModule);
    return ManageUsersModule;
}());



/***/ }),

/***/ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"an-page-content\">\n  <div class=\"an-content-body manage-price\">\n      <div class=\"an-body-topbar wow fadeIn\">\n          <div class=\"an-page-title\">\n              <h2>Send Notification</h2>\n          </div>\n      </div>\n      <!-- <div class=\"dropdown\">\n        <select (change)=\"onGenderChangeEvent($event.target.value)\">\n            <option style=\"display:none\">select</option>\n            <option value=\"male\">Male</option>\n            <option value=\"female\">female</option>\n        </select>\n    </div> -->\n      <form [formGroup]=\"sendNotificationForm\" novalidate (ngSubmit)=\"onNotifications()\">\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"\">\n                          <input type=\"text\" formControlName=\"message\" class=\"form-control\" id=\"inputUrl\" placeholder=\"Message\">\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                      <div class=\"\">\n                          <input type=\"text\" formControlName=\"title\" class=\"form-control\" id=\"inputName\" placeholder=\"Title\">\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"\">\n                        <select class=\"custom-select\" formControlName=\"gender\">\n                            <option value=\"\"  disabled>Choose Gender</option>\n                            <option value=0>Male</option>\n                            <option value=1>Female</option>\n                            <option value=3>All</option>\n                         </select>\n                    </div>\n                </div>\n            </div>\n          </div>\n          <div class=\"\">\n              <div class=\"form-group\">\n                  <div class=\"\">\n                    <button type=\"submit\">Send Notification</button>\n                        <!-- <button id=\"my-button\"   class=\"ladda-button\" data-style=\"expand-right\" data-color=\"green\" ><span class=\"ladda-label\">Send</span></button> -->\n                      <!-- <button type=\"submit\" class=\"btn btn-primary\">Send</button> -->\n                  </div>\n              </div>\n          </div>\n      </form>\n  </div>\n</div>\n\n<ngx-spinner bdOpacity=0.1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SendNotifcationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendNotifcationsComponent", function() { return SendNotifcationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/service/notifiation.service */ "./src/app/shared/service/notifiation.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendNotifcationsComponent = /** @class */ (function () {
    function SendNotifcationsComponent(adminService, notification, spinner) {
        this.adminService = adminService;
        this.notification = notification;
        this.spinner = spinner;
        this.isLoading = false;
    }
    SendNotifcationsComponent.prototype.ngOnInit = function () {
        this.sendNotificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])
        });
    };
    SendNotifcationsComponent.prototype.onNotifications = function () {
        var _this = this;
        if (this.sendNotificationForm.valid) {
            this.spinner.show();
            console.log(this.sendNotificationForm.value, 'this.sendNotificationForm.value');
            this.adminService.sendNotifcations(this.sendNotificationForm.value).subscribe(function (res) {
                console.log('response', res);
                // var l = Ladda.create(document.querySelector('#ladda-button'));
                // l.start()
                if (res.code === 200) {
                    // l.stop()
                    _this.isLoading = !_this.isLoading;
                    _this.spinner.hide();
                    _this.notification.notificationSent(res.message);
                }
                else {
                    // l.stop()
                    _this.isLoading = !_this.isLoading;
                    _this.spinner.hide();
                    _this.notification.notificationSent(res.message);
                }
            });
        }
        else {
        }
    };
    SendNotifcationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-notifcations',
            template: __webpack_require__(/*! ./send-notifcations.component.html */ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.html"),
            styles: [__webpack_require__(/*! ./send-notifcations.component.css */ "./src/app/admin/modules/manage-users/send-notifcations/send-notifcations.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _shared_service_notifiation_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], SendNotifcationsComponent);
    return SendNotifcationsComponent;
}());

/**
 * ask vilas sir for dmoin
 * ask anil for the domain
 * do this task on priority
 * then the dashboard again
 *
 */ 


/***/ }),

/***/ "./src/app/admin/modules/manage-users/video-log/video-log.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/video-log/video-log.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-left{\n    background: green\n}\n.answer-right{\n    background: red\n}\n.DivWithScroll{\n    height:400px;\n    overflow:scroll;\n    overflow-x:hidden;\n}\n.modal-box {\n    min-width: 430px;\n    margin-left: 546px;\n    margin-top: 64px;\n}\n.add_notes{\n\tpadding:10px;\n}\n/* .form__control {\n    width: 72%;\n    max-width: 100%;\n    height: auto;\n    padding: 5px 26px;\n    border-radius: 13px;\n    border: 1px solid #fc6763;\n    background: #fff;\n    font-size: 15px;\n    color: #3e4148;\n    line-height: 1;\n}\n\n.view-tooltip form .btn--full {\n    width: 70%;\n    border-radius: 21px;\n} */"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/video-log/video-log.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/video-log/video-log.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-main-content\">\n        <div class=\"admin-box user-profile\">\n\t\t\t\n\t\t\t\t<div class=\"admin-box-item col-4 user-profile-item user-info\">\n\t\t\t\t\t<div class=\"user-profile-header\">\n\t\t\t\t\t\t<h2 class=\"h2\">USER INFO\n\t\t\t\t\t\t\t<br> DETAILS</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"user-profile-content\">\n\t\t\t\t\t\t<ul class=\"user-profile-list user-profile-row\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">Name</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1FirstName}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">Email</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1email}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">GENDER</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1Gender}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">DOB</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1DOB}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">Age</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1Age}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__title text-uppercase\">Device Type</span>\n\t\t\t\t\t\t\t\t<span class=\"user-profile-row__text align-right\">{{user1device_token}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<div class=\"admin-box-item col-4 user-profile-item user-sq\">\n\t\t\t\t\t<div class=\"user-profile-header\">\n\t\t\t\t\t\t<h2 class=\"h2\">SUPERIMPORTANT\n\t\t\t\t\t\t\t<br> QUESTIONS</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"user1SuperImpQandA?.length\" >\n\t\t\t\t\t\t<div class=\"user-profile-content\">\n\t\t\t\t\t\t\t<div *ngFor=\"let user1SuperImpQandAs of user1SuperImpQandA \">\n\t\t\t\t\t\t\t\t<div class=\"dashboard-info__amount\">\n\t\t\t\t\t\t\t\t\t<ul class=\"user-profile-list user-profile-col\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"user-profile-col__title\">{{user1SuperImpQandAs?.question}}</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"user-profile-col__text\">{{user1SuperImpQandAs?.answer}}</p>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"admin-box-item col-4 user-profile-item user-sq\">\n\t\t\t\t\t<div class=\"user-profile-header\">\n\t\t\t\t\t\t<h2 class=\"h2\">INTRODUCE YOURSELF\n\t\t\t\t\t\t\t<br> QUESTIONS</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"user-profile-content\">\n\t\t\t\t\t\t<div *ngIf=\"myIntroduceYourSelfs\" class=\"DivWithScroll\">\n\t\t\t\t\t\t\t<table class=\"table NoTopBorder custom-table user-profile-table\">\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Question</th>\n\t\t\t\t\t\t\t\t\t\t<th>Option1</th>\n\t\t\t\t\t\t\t\t\t\t<th>Option2</th>\n\t\t\t\t\t\t\t\t\t\t<th>Skip/Answered</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let myIntroduceYourSelf of myIntroduceYourSelfs \">\n\t\t\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"myIntroduceYourSelf.questionAndAnswers[0]\">\n\t\t\t\t\t\t\t\t\t\t\t{{myIntroduceYourSelf?.questionAndAnswers[0]?.questions}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"myIntroduceYourSelf.questionAndAnswers[0]\" [ngClass]=\"myIntroduceYourSelf.answer_text==myIntroduceYourSelf.questionAndAnswers[0].option1  ? 'answer-left' : 'answer-right'\">\n\t\t\t\t\t\t\t\t\t\t\t{{myIntroduceYourSelf?.questionAndAnswers[0]?.option1 }}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"myIntroduceYourSelf.questionAndAnswers[0]\" [ngClass]=\"myIntroduceYourSelf.answer_text==myIntroduceYourSelf.questionAndAnswers[0].option2  ? 'answer-left' : 'answer-right'\">\n\t\t\t\t\t\t\t\t\t\t\t{{myIntroduceYourSelf?.questionAndAnswers[0]?.option2}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"myIntroduceYourSelf.questionAndAnswers[0]\">\n\t\t\t\t\t\t\t\t\t\t\t<td *ngIf=\"myIntroduceYourSelf.answer_text;else other\">\n\t\t\t\t\t\t\t\t\t\t\t\tAnswered\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"admin-box-item col-6\">\n\t\t\t\t\t<div class=\"user-profile-header\">\n\t\t\t\t\t\t<h2 class=\"h2\">Add User Notes</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"user-profile-content add_notes\">\n\t\t\t\t\t\t<form [formGroup]=\"addNotes\" novalidate  class=\"form-default\" (ngSubmit)=\"onAddNotes()\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t  <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t  <div class=\"\">\n\t\t\t\t\t\t\t\t\t\t  <textarea formControlName=\"notes\" class=\"form-control\" id=\"inputNotes\" placeholder=\"Add Notes Here...\"></textarea>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t  <div class=\"\">\n\t\t\t\t\t\t\t\t\t\t <input #imageInput type=\"file\" formControlName=\"imageInput\" (change)=\"processFile(imageInput)\" accept=\"image/*\">\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile\" class=\"img-preview-container\">\n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.pending\" class=\"img-loading-overlay\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"img-spinning-circle\"></div>\n\t\t\t\t\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.status === 'ok'\" class=\"alert alert-success\"> Image Uploaded Succesfuly!</div>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"selectedFile.status === 'fail'\" class=\"alert alert-danger\"> Image Upload Failed!</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary \">ADD NOTES</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t</div>\n\t\t\n\t\t\t\t<div class=\"admin-box-item col-6\">\n\t\t\t\t\t<div class=\"user-profile-header\">\n\t\t\t\t\t\t<h2 class=\"h2\">All User Notes</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"user-profile-content add_notes\">\n\t\t\t\t\t\t<div *ngIf=\"userNotes && userNotes.length > 0\" class=\"DivWithScroll\">\n\t\t\t\t\t\t\t<table class=\"table NoTopBorder custom-table user-profile-table\">\n\t\t\t\t\t\t\t\t<tbody *ngFor=\"let notes of userNotes \">\n\t\t\t\t\t\t\t\t\t<tr >\n\t\t\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t{{notes.notes}}\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"userNotes && userNotes.length == 0\" class=\"DivWithScroll add_notes\">\n\t\t\t\t\t\t\t<p>Sorry! You don't have notes yet.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t</div>\n\t\t\n\t\t\t\n    \n            <div class=\" admin-box-item user-control\">\n                    <div *ngIf=\"user1PossibleMatch?.length\">\n                        <div class=\"user-profile-header\">\n                            <h2 class=\"h2\">Possible Match</h2>\n                        </div>\n                        <!-- <div class=\"user-profile-content\"> -->\n                            <div class=\"table-responsive\">\n        \n                            <table class=\"table NoTopBorder custom-table user-control-table\">\n                                <tbody>\n                                    <tr>\n\t\t\t\t\t\t\t\t\t\t<th>Sr no</th>\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                        <th>Gender</th>\n                                        <th>Device</th>\n                                        <th>DOB</th>\n                                        <th>Age</th>\n                                        <th>View</th>\n                                        <th>Setup Date</th>\n                                    </tr>\n                                        <tr *ngFor=\"let user1PossibleMatchs of user1PossibleMatch;let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{(this.page1*40)+i+1}}</td>\n                                            <td [routerLink]=\"['/admin/user/video-log/',user1PossibleMatchs?._id]\"> {{user1PossibleMatchs?.firstName}} </td>\n                                            <td>\n                                                {{user1PossibleMatchs?.email}}\n                                            </td>\n                                            <td *ngIf=\"!user1PossibleMatchs?.gender; else femaleDisplay\">\n                                                Male\n                                            </td>\n                                            <td>\n                                                {{user1PossibleMatchs?.device_type}}\n                                            </td>\n                                            <td>\n                                                {{user1PossibleMatchs?.DOB}}\n                                            </td>\n                                            <td>\n                                                {{user1PossibleMatchs?.age}}\n                                            </td>\n                                            <td>\n                                                <button icon=\"pi pi-search\" class=\"twoToneButton\" (click)=\"selectUserID($event,user1PossibleMatchs?._id,op3)\" type=\"button\">View</button>\n                                            </td>\n\t\t\t\t\t\t\t\t\t\t\t <td>\n                                                <button icon=\"pi pi-search\" class=\"twoToneButton\" (click)=\"setUpDateModal($event,user1PossibleMatchs?._id,user1ID)\" type=\"button\">Setup</button>\n                                            </td>\n                                        </tr>\n                                </tbody>\n                            </table>\n\t\t\t\t\t\t\t<p-paginator [rows]=\"40\" [totalRecords]=possibleMatchCount\n                                (onPageChange)=\"paginateMatching($event)\"></p-paginator>\n                        </div>\n                    <!-- </div> -->\n                </div>\n                \n            </div>\n    \n    \n            <div class=\"admin-box-item  user-control\">\n                       <div class=\"table-responsive\">\n                        <div *ngIf=\"rankedUser?.length\">\n                            <div class=\"user-profile-header\">\n                                <h2 class=\"h2\">Rank Users</h2>\n                            </div>\n                            <div class=\"user-profile-content\">\n            \n                                <table class=\"table NoTopBorder custom-table user-control-table\">\n                                    <tbody>\n                                        <tr>\n                                            <!-- <th>Name</th> -->\n\t\t\t\t\t\t\t\t\t\t\t<th>Sr no</th>\n                                            <th>Email</th>\n                                            <th>Gender</th>\n                                            <th>DOB</th>\n                                            <th>Age</th>\n                                            <th>Max answer matched</th>\n                                            <th>View</th>\n                                        </tr>\n                                            <tr *ngFor=\"let rankedUsr of rankedUser;let i = index \">\n\t\t\t\t\t\t\t\t\t\t\t\t<td>{{(this.page2*40)+i+1}}</td>\n                                                <!-- <td [routerLink]=\"['/admin/user/video-log/',rankedUsr.userInfo[0]?._id]\"> {{rankedUsr.userInfo[0]?.firstName}} </td> -->\n                                                <td>\n                                                    {{rankedUsr.userInfo[0]?.email}}\n                                                </td>\n                                                <div *ngIf=\"!rankedUsr.userInfo[0]?.gender; else femaleDisplay\">\n                                                        <td >\n                                                                Male\n                                                            </td>\n                                                </div>\n                                               \n                                                <td>\n                                                    {{rankedUsr.userInfo[0]?.DOB}}\n                                                </td>\n                                                <td>\n                                                    {{rankedUsr.userInfo[0]?.age}}\n                                                </td>\n                                                <td>{{rankedUsr?.total}}</td>\n            \n                                                <td>\n                                                    <button icon=\"pi pi-search\" (click)=\"openQandAModal(rankedUsr._id)\" type=\"button\">View</button>\n                                                </td>\n                                            </tr>\n                                    </tbody>\n                                </table>\n\t\t\t\t\t\t\t\t<p-paginator [rows]=\"40\" [totalRecords]=totalCount\n                                (onPageChange)=\"paginateMatchingRanked($event)\"></p-paginator>\n                            </div>\n                        </div>\n                    </div> \n            </div>\n            <div class=\"admin-box-item  user-control\">\n                <div class=\"table-responsive\">\n                    <div *ngIf=\"videoCallDoneArrays?.length\">\n                        <div class=\"user-profile-header\">\n                            <h2 class=\"h2\">Last dates</h2>\n                        </div>\n                        <div class=\"user-profile-content\">\n                           <table class=\"table NoTopBorder custom-table\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th>Sr no</th>\n\t\t\t\t\t\t\t\t\t<th>User1</th>\n\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t<th>Gender</th>\n\t\t\t\t\t\t\t\t\t<th>Device Type</th>\n\t\t\t\t\t\t\t\t\t<th>App Version</th>\n\t\t\t\t\t\t\t\t\t<th>Interested</th>\n\t\t\t\t\t\t\t\t\t<th>User2</th>\n\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t<th>Gender</th>\n\t\t\t\t\t\t\t\t\t<th>Device Type</th>\n\t\t\t\t\t\t\t\t\t<th>App Version</th>\n\t\t\t\t\t\t\t\t\t<th>Interested</th>\n\t\t\t\t\t\t\t\t\t<th>Video</th>\n\t\t\t\t\t\t\t\t\t<th>Review</th>\n\t\t\t\t\t\t\t\t\t<th>Date Count</th>\n\t\t\t\t\t\t\t\t\t<th>Date</th>\n\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let viewallvideoDate of videoCallDoneArrays;let i = index\">\n\t\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\n\t\t\t\t\t\t\t\t\t<td [routerLink]=\"['/admin/user/video-log/',viewallvideoDate?.user1info[0]?._id]\">\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user1info[0]?.firstName}}\n\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user1info[0]?.age}}\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user1info[0]?.gender | gender}}\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user1info[0]?.device_type}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t   <td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user1info[0]?.appVersion}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewallvideoDate?.user1info[0]?._id==viewallvideoDate?.reviewLog[0]?.review_from\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewallvideoDate?.reviewLog[0]?.isInterested;else interested\">\n\t\t\t\t\t\t\t\t\t\t\tYes\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewallvideoDate?.user1info[0]?._id==viewallvideoDate?.reviewLog[1]?.review_from\">\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewallvideoDate?.reviewLog[1]?.isInterested;else interested\">\n\t\t\t\t\t\t\t\t\t\t\tYes\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td [routerLink]=\"['/admin/user/video-log/',viewallvideoDate?.user2info[0]?._id]\">\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user2info[0]?.firstName}}\n\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user2info[0]?.age}}\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user2info[0]?.gender | gender}}\n\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user2info[0]?.device_type}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.user2info[0]?.appVersion}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewallvideoDate?.reviewLog.length >=2;else no \">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"viewallvideoDate?.user2info[0]?._id==viewallvideoDate?.reviewLog[0]?.review_from\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewallvideoDate?.reviewLog[0]?.isInterested;else interested\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tYes\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewallvideoDate?.user2info[0]?._id==viewallvideoDate?.reviewLog[1]?.review_from\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"viewallvideoDate?.reviewLog[1]?.isInterested;else interested\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tYes\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a title=\"View Video Date\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"downloadVideo(viewallvideoDate?.archive_s3_url)\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"showDialog(viewallvideoDate)\" pButton\n\t\t\t\t\t\t\t\t\t\t\ticon=\"pi pi-info-circle\" label=\"Review\"></button>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?._id?.dateCount}}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t{{viewallvideoDate?.reviewLog[0]?.createdAt | dateWithTimezone:'America/New_York':'LLLL' }}\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <!-- </div> -->\n   \n</div>\n\n\n\n\n\n\n<p-overlayPanel #op3>\n    <div class=\"view-tooltip\">\n        <ul class=\"view-tooltip-list view-tooltip-col\">\n            <li *ngFor=\"let superImpQandAUser2s of superImpQandAUser2 \">\n                <h3 class=\"view-tooltip-col__title\">{{superImpQandAUser2s?.question}}</h3>\n                <p class=\"view-tooltip-col__text\">{{superImpQandAUser2s?.answer}}</p>\n            </li>\n        </ul>\n    </div>\n</p-overlayPanel>\n<ng-template #femaleDisplay>\n    <td>\n            Female\n\n    </td>\n</ng-template>\n\n<p-overlayPanel #op4>\n    <div *ngFor=\"let getReview of getReviews\">\n        <div class=\"view-tooltip view-tooltip--padding\">\n            <div class=\"\">\n                <form [formGroup]=\"rForm\" novalidate=\"\" class=\"col-md-5 \" (ngSubmit)=\"editReview(rForm.value)\">\n                    <div formArrayName=\"add\">\n                        <div *ngFor=\"let dat of this.rForm.controls.add.controls; index as i\" [formGroupName]=\"i\">\n                            <input formControlName=\"isInterested\" class=\"form__control  \" placeholder=\"Interested\">\n                            <input formControlName=\"pleasant\" class=\"form__control \" placeholder=\"pleasant\">\n                            <input formControlName=\"attractive\" class=\"form__control \" placeholder=\"attractive\">\n                            <input formControlName=\"marriageFocused\" class=\"form__control \" placeholder=\"marriageFocused\">\n                            <textarea formControlName=\"notes\" class=\"form__control \" placeholder=\"notes\"></textarea>\n                        </div>\n                    </div>\n                    <input type=\"submit\" class=\"btn btn--orange btn--full \" value=\"Submit Form\">\n                </form>\n                <div class=\"\">\n                    <ul class=\"\">\n                        <li>\n                            <span class=\"view-tooltip-row__title\">Reviewer</span>\n                            <span class=\"view-tooltip-row__text \">{{getReview.userInfo?.firstName}}</span>\n                        </li>\n                        <li>\n                            <span class=\"view-tooltip-row__title\">Reviewer Email</span>\n                            <span class=\"view-tooltip-row__text \">{{getReview.userInfo?.email}}</span>\n                        </li>\n                        <li>\n                            <span class=\"view-tooltip-row__title\">Reviewee</span>\n                            <span class=\"view-tooltip-row__text \">{{getReview.userInfo2?.firstName}}</span>\n                        </li>\n                        <li>\n                            <span class=\"view-tooltip-row__title\"> Reviewee Email</span>\n                            <span class=\"view-tooltip-row__text \">{{getReview.userInfo2?.email}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</p-overlayPanel>\n\n\n<!-- <div class=\"modal\" id=\"myModalReview\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeReviewModal()\">×</button>\n        <form [formGroup]=\"editReviewForm\" novalidate (ngSubmit)=\"editReviews()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n               View and Edit Reivew\n            </div>\n            <div class=\"modal-form-body\">\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"rId\" placeholder=\"Enter the youtube video code...\" style=\"display: none;\">\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"isInterested\" placeholder=\"Enter the youtube video code...\" required>\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"pleasant\" placeholder=\"Enter the title...\" required>\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"attractive\" placeholder=\"Enter the sub-title...\" required>\n                </label>\n                <label class=\"form__label\">\n                    <input type=\"text\" class=\"form__control\" formControlName=\"marriageFocused\" placeholder=\"Enter the Category...\" required>\n                </label>\n                <label class=\"form__label\">\n                            <textarea formControlName=\"notes\" class=\"form__control \" placeholder=\"notes\"></textarea>\n\n                </label>\n                <div class=\"btn-group btn-group--c\">\n                    <button type=\"submit\" class=\"btn btn--orange\">submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div> -->\n\n<div class=\"modal\" id=\"myModalSetUpDate\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeSetUpDateModal()\">×</button>\n        <form [formGroup]=\"setupDateForm\" novalidate (ngSubmit)=\"onSubmitSetupDate()\" class=\"form-default\">\n            <div class=\"modal-header__title\">\n                <span class=\"modal-header__icon\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                </span>\n                Setup a Date\n            </div>\n            <div class=\"modal-form-body\">\n\t\t\t\t\n                <label class=\"form__label\">\n                    <input type=\"date\" class=\"form__control\" formControlName=\"MatchDate\" placeholder=\"Enter the Date (dd/mm/yyyy)\">\n\t\t\t\t</label>\n\t\n                <div class=\"btn-group btn-group--c\">\n\t\t\t\t\n                    <button type=\"submit\" class=\"btn btn--orange\">Submit</button>\n\t\t\t\t\t\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"myOpenQandAModal\">\n    <div class=\"modal-box\">\n        <button title=\"Close (Esc)\" class=\"modal-close\" (click)=\"closeQandAModal()\">×</button>\n        <div class=\"user-profile-content\">\n            <div class=\"DivWithScroll\">\n\n                <table class=\"table NoTopBorder custom-table user-profile-table\">\n                    <tbody>\n                        <tr>\n\n                            <th>Question</th>\n                            <th>Option1</th>\n                            <th>Option2</th>\n                            <th>Skip/Answered</th>\n\n                        </tr>\n                        <tr *ngFor=\"let introduceYourSelf of introduceYourSelfs\">\n\n                            <td *ngIf=\"introduceYourSelf.questionAndAnswers[0]\">\n                                {{introduceYourSelf?.questionAndAnswers[0]?.questions}}\n                            </td>\n                            <td *ngIf=\"introduceYourSelf.questionAndAnswers[0]\" [ngClass]=\"introduceYourSelf.answer_text==introduceYourSelf.questionAndAnswers[0].option1  ? 'answer-left' : 'answer-right'\">\n                                {{introduceYourSelf?.questionAndAnswers[0]?.option1 }}\n                            </td>\n                            <td *ngIf=\"introduceYourSelf.questionAndAnswers[0]\" [ngClass]=\"introduceYourSelf.answer_text==introduceYourSelf.questionAndAnswers[0].option2  ? 'answer-left' : 'answer-right'\">\n                                {{introduceYourSelf?.questionAndAnswers[0]?.option2}}\n                            </td>\n                            <div *ngIf=\"introduceYourSelf.questionAndAnswers[0]\">\n                                <td *ngIf=\"introduceYourSelf.answer_text;else other\">\n                                    Answered\n                                </td>\n                            </div>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #other>\n    <td>Skipped</td>\n</ng-template>\n\n\n\n\n<ngx-spinner bdOpacity=0.1 size=\"medium\" color=\"#50008e\" type=\"line-scale\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n\n\n<p-dialog header=\"View Video\" [(visible)]=\"displayVideo\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '600px', minWidth: '600px'}\"\n    [minY]=\"700\" closable='true' dismissableMask='true' baseZIndex='0' closeOnEscape='true' responsive='true' baseZIndex='0'>\n    <video autoplay=\"autoplay\" preload=\"auto\" #videoPlayer ng-click=\"pauseOrPlay()\" controls>\n        <source src=\"{{videourl}}\" type=\"video/mp4\" />\n        </video>\n\n\n</p-dialog>\n\n<p-dialog header=\"View Reviews\" [(visible)]=\"displayReviews\" [modal]=\"true\" [responsive]=\"true\"\n    [style]=\"{width: '620px', minWidth: '620px'}\" [minY]=\"700\" closable='true' dismissableMask='true' baseZIndex='0'\n    closeOnEscape='true' responsive='true' baseZIndex='0'>\n    <div *ngIf=\"viewReview?.user1info[0]?._id==viewReview?.reviewLog[0].review_from;else viewReviewofElse\">\n        <table class=\"table NoTopBorder custom-table\">\n\n            <tr>\n                <th>Name</th>\n                <th>Pleasant</th>\n                <th>Attractive</th>\n                <th>MarriageFocused</th>\n\n                <th>Note</th>\n                <th>Interested</th>\n            </tr>\n\n\n            <tr>\n                <td>{{viewReview?.user1info[0]?.firstName}}</td>\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[0]?.pleasant readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                    </p-rating>\n                </td>\n\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[0]?.attractive readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                    </p-rating>\n                </td>\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[0]?.marriageFocused readonly=\"true\" stars=\"5\"\n                        [cancel]=\"false\"></p-rating>\n                </td>\n                <td>{{viewReview?.reviewLog[0]?.notes}} </td>\n                <!-- <td>\n                    {{viewReview?.reviewLog[0].isInterested}}\n                </td> -->\n                <td *ngIf=\"viewReview?.reviewLog[0]?.isInterested;\">\n                    Yes <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To No\" (click) = \"changeValue(viewReview?.reviewLog[0]?._id,'no')\">\n                </td>\n                <td *ngIf=\"!viewReview?.reviewLog[0]?.isInterested;\">\n                    No <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To Yes\" (click) = \"changeValue(viewReview?.reviewLog[0]?._id,'yes')\">\n                </td>\n            </tr>\n            <tr>\n                <td>{{viewReview?.user2info[0]?.firstName}}</td>\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[1]?.pleasant readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                    </p-rating>\n                </td>\n\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[1]?.attractive readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                    </p-rating>\n                </td>\n                <td>\n                    <p-rating [ngModel]=viewReview?.reviewLog[1]?.marriageFocused readonly=\"true\" stars=\"5\"\n                        [cancel]=\"false\"></p-rating>\n                </td>\n                <td>{{viewReview?.reviewLog[1]?.notes}} </td>\n                <!-- <td>\n                    {{viewReview?.reviewLog[1].isInterested}}\n\n                </td> -->\n                <td *ngIf=\"viewReview?.reviewLog[1]?.isInterested;\">\n                    Yes <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To No\" (click) = \"changeValue(viewReview?.reviewLog[1]?._id,'no')\">\n                </td>\n                <td *ngIf=\"!viewReview?.reviewLog[1]?.isInterested;\">\n                    No <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To Yes\" (click) = \"changeValue(viewReview?.reviewLog[1]?._id,'yes')\">\n                </td>\n            </tr>\n\n        </table>\n    </div>\n\n\n</p-dialog>\n\n\n\n<ng-template #viewReviewofElse>\n    <table class=\"table NoTopBorder custom-table\">\n        <tr>\n            <th>Name</th>\n            <th>Pleasant</th>\n            <th>Attractive</th>\n            <th>MarriageFocused</th>\n\n            <th>Note</th>\n            <th>Interested</th>\n        </tr>\n        <tr>\n            <td>{{viewReview?.user2info[0]?.firstName}}</td>\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[1]?.pleasant readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                </p-rating>\n            </td>\n\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[1]?.attractive readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                </p-rating>\n            </td>\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[1]?.marriageFocused readonly=\"true\" stars=\"5\"\n                    [cancel]=\"false\"></p-rating>\n            </td>\n            <td>{{viewReview?.reviewLog[1]?.notes}} </td>\n            <td *ngIf=\"viewReview?.reviewLog[1]?.isInterested;\">\n                Yes <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To No\" (click) = \"changeValue(viewReview?.reviewLog[1]?._id,'no')\">\n            </td>\n            <td *ngIf=\"!viewReview?.reviewLog[1]?.isInterested;\">\n                No <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To Yes\" (click) = \"changeValue(viewReview?.reviewLog[1]?._id,'yes')\">\n            </td>\n        </tr>\n        <tr>\n            <td>{{viewReview?.user1info[0]?.firstName}}</td>\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[0]?.pleasant readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                </p-rating>\n            </td>\n\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[0]?.attractive readonly=\"true\" stars=\"5\" [cancel]=\"false\">\n                </p-rating>\n            </td>\n            <td>\n                <p-rating [ngModel]=viewReview?.reviewLog[0]?.marriageFocused readonly=\"true\" stars=\"5\"\n                    [cancel]=\"false\"></p-rating>\n            </td>\n            <td>{{viewReview?.reviewLog[0]?.notes}} </td>\n            <td *ngIf=\"viewReview?.reviewLog[0]?.isInterested;\">\n                Yes\t<input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To No\" (click) = \"changeValue(viewReview?.reviewLog[0]?._id,'no')\">\n            </td>\n\t\t\t<td *ngIf=\"!viewReview?.reviewLog[0]?.isInterested;\">\n                No <input class=\"btn btn-primary\" type=\"button\" name=\"changevalue\" value=\"Change To Yes\" (click) = \"changeValue(viewReview?.reviewLog[0]?._id,'yes')\">\n            </td>\n        </tr>\n    </table>\n</ng-template>\n\n\n<ng-template #no>\n    <div>No</div>\n</ng-template>\n<ng-template #interested>\n    <div>\n        No\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/admin/modules/manage-users/video-log/video-log.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/modules/manage-users/video-log/video-log.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VideoLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoLogComponent", function() { return VideoLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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






var ImageSnippet = /** @class */ (function () {
    function ImageSnippet(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
        this.status = 'init';
    }
    return ImageSnippet;
}());
var VideoLogComponent = /** @class */ (function () {
    function VideoLogComponent(admin, route, spinner, elRef, toaster, toastr, fb) {
        this.admin = admin;
        this.route = route;
        this.spinner = spinner;
        this.elRef = elRef;
        this.toaster = toaster;
        this.toastr = toastr;
        this.fb = fb;
        this.displayVideo = false;
        this.displayReviews = false;
        this.selectedFile = '';
        this.page = 0;
        this.rForm = fb.group({
            add: this.fb.array([]),
        });
        // this.addData()
        this.addNotes = this.fb.group({
            notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageInput: ['']
        });
        this.editReviewForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            rId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            isInterested: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            pleasant: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            attractive: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            marriageFocused: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])
        });
    }
    VideoLogComponent.prototype.ngOnInit = function () {
        this.rankWiseListForPossibleMatch();
        this.superImportantQuestion();
        this.videoCallDone();
        this.getMyOwnQandAns();
        this.setupDateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            MatchDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])
        });
        this.page1 = 0;
        this.page2 = 0;
        this.getNotes();
    };
    VideoLogComponent.prototype.ngAfterViewInit = function () {
        this.superImportantQuestion();
    };
    VideoLogComponent.prototype.setUpDateModal = function (event, user2_ID, user1_ID) {
        //console.log(event);
        this.Match_UserID_1 = user1_ID;
        this.Match_UserID_2 = user2_ID;
        document.getElementById('myModalSetUpDate').style.display = 'block';
    };
    VideoLogComponent.prototype.closeSetUpDateModal = function () {
        document.getElementById('myModalSetUpDate').style.display = 'none';
    };
    VideoLogComponent.prototype.onSuccess = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'ok';
    };
    VideoLogComponent.prototype.onError = function () {
        this.selectedFile.pending = false;
        this.selectedFile.status = 'fail';
        this.selectedFile.src = '';
    };
    VideoLogComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.selectedFile = new ImageSnippet(event.target.result, file);
            _this.selectedFile.pending = true;
        });
        reader.readAsDataURL(file);
    };
    VideoLogComponent.prototype.superImportantQuestion = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params, 'params');
            _this.spinner.show();
            var obj = {
                id: params['id'],
                page: _this.page
            };
            _this.admin.superImportant(obj).subscribe(function (res) {
                console.log('age gender and super imp questions xcxdf', res);
                if (res.code == 200) {
                    //console.log(res.data);
                    _this.spinner.hide();
                    _this.user1Age = res.data.age;
                    if (res.data.gender == 1) {
                        _this.user1Gender = 'Female';
                    }
                    else if (res.data.gender == 0) {
                        _this.user1Gender = 'Male';
                    }
                    _this.user1SuperImpQandA = res.data.superImpQandA;
                    _this.user1email = res.data.email;
                    _this.user1FirstName = res.data.name;
                    _this.user1DOB = res.data.DOB;
                    _this.user1Age = res.data.age;
                    _this.user1PossibleMatch = res.data.possibleMatch;
                    _this.user1ID = params['id'];
                    _this.user1device_token = res.data.device_type;
                    _this.possibleMatchCount = res.data.possibleMatchCount;
                    //console.log('((((((((6^^^^^^^^^^^^^^^^^^^^^', this.user1PossibleMatch);
                    console.log(res.data.possibleMatchCount);
                }
                else {
                    console.log('No primary matching for the usert');
                    _this.spinner.hide();
                }
            });
        });
    };
    VideoLogComponent.prototype.onAddNotes = function () {
        var _this = this;
        if (this.addNotes.value.notes) {
            this.route.params.subscribe(function (params) {
                console.log(_this.selectedFile);
                if (!_this.selectedFile || _this.selectedFile == undefined) {
                    var obj = {
                        notes: _this.addNotes.value.notes,
                        added_for: params['id'],
                        added_by: params['id']
                    };
                    console.log('this is here ');
                    _this.admin.addUserNotes(obj).subscribe(function (res) {
                        if (res.code === 200) {
                            console.log(res);
                            _this.getNotes();
                            _this.addNotes.reset();
                        }
                    });
                }
                else {
                    var obj = {
                        notes: _this.addNotes.value.notes,
                        added_for: params['id'],
                        added_by: params['id'],
                    };
                    _this.admin.addUserNotesWithFile(obj, _this.selectedFile.file).subscribe(function (res) {
                        if (res.code === 200) {
                            console.log(res);
                            _this.getNotes();
                            _this.addNotes.reset();
                        }
                    });
                }
            });
        }
        else {
            this.toastr.error('Please Enter Notes.');
        }
    };
    VideoLogComponent.prototype.getNotes = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var obj = {
                added_for: params['id'],
            };
            _this.admin.getUserNotes(obj).subscribe(function (res) {
                if (res.code === 200) {
                    _this.userNotes = res.data;
                    //console.log('list of all notes for User:'+res);
                }
            });
        });
    };
    VideoLogComponent.prototype.rankWiseListForPossibleMatch = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params test', params);
            var obj = {
                id: params['id'],
                page: _this.page
            };
            _this.admin.listRankedMatch(obj).subscribe(function (res) {
                console.log('age gender and super imp questions', res);
                if (res.code == 200) {
                    _this.rankedUser = res.data.rankedData;
                    _this.totalCount = res.data.totalCount;
                    console.log(res.data.rankedUser);
                }
                else if (res.code == 404) {
                    console.log('Data not found');
                    _this.spinner.hide();
                }
            });
        });
    };
    VideoLogComponent.prototype.paginateMatching = function (event) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params, 'params');
            _this.spinner.show();
            var obj = {
                id: params['id'],
                page: event.page
            };
            _this.admin.superImportant(obj).subscribe(function (res) {
                console.log('age gender and super imp questions xcxdf', res);
                if (res.code == 200) {
                    //console.log(res.data);
                    _this.spinner.hide();
                    _this.user1Age = res.data.age;
                    if (res.data.gender == 1) {
                        _this.user1Gender = 'Female';
                    }
                    else if (res.data.gender == 0) {
                        _this.user1Gender = 'Male';
                    }
                    _this.user1SuperImpQandA = res.data.superImpQandA;
                    _this.user1email = res.data.email;
                    _this.user1FirstName = res.data.name;
                    _this.user1DOB = res.data.DOB;
                    _this.user1Age = res.data.age;
                    _this.user1PossibleMatch = res.data.possibleMatch;
                    _this.user1ID = params['id'];
                    _this.user1device_token = res.data.device_type;
                    _this.possibleMatchCount = res.data.possibleMatchCount;
                    //console.log('((((((((6^^^^^^^^^^^^^^^^^^^^^', this.user1PossibleMatch);
                    console.log(res.data.possibleMatchCount);
                }
                else {
                    console.log('No primary matching for the usert');
                    _this.spinner.hide();
                }
            });
        });
        this.page1 = event.page;
    };
    VideoLogComponent.prototype.paginateMatchingRanked = function (event) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params test', params);
            var obj = {
                id: params['id'],
                page: event.page
            };
            _this.admin.listRankedMatch(obj).subscribe(function (res) {
                console.log('age gender and super imp questions', res);
                if (res.code == 200) {
                    _this.rankedUser = res.data.rankedData;
                    _this.totalCount = res.data.totalCount;
                    console.log(res.data.rankedUser);
                }
                else if (res.code == 404) {
                    console.log('Data not found');
                    _this.spinner.hide();
                }
            });
        });
        this.page2 = event.page;
    };
    VideoLogComponent.prototype.getMyOwnQandAns = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.admin.introduceYourSelf(params['id']).subscribe(function (res) {
                console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiii', res.data);
                if (res.code == 200) {
                    _this.myIntroduceYourSelfs = res.data;
                }
                else {
                    _this.myIntroduceYourSelfs = false;
                }
            });
        });
    };
    VideoLogComponent.prototype.videoCallDone = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params', params);
            var obj = {
                id: params['id']
            };
            _this.admin.videoCallDone(obj).subscribe(function (res) {
                console.log('avideoCallDoneions', res);
                if (res.code == 200) {
                    _this.videoCallDoneArrays = res.data;
                }
                else if (res.code == 404) {
                    console.log('data not found ');
                }
            });
        });
    };
    VideoLogComponent.prototype.selectUserID = function (event, userid, overlaypanel) {
        var _this = this;
        // this.selectedCar = car;
        console.log('userid********************', userid);
        this.admin.superImportantOfUser2(userid).subscribe(function (res) {
            _this.superImpQandAUser2 = res.data.superImpQandAUser2;
            console.log('superImpQandAUser2superImpQandAUser2********************', _this.superImpQandAUser2);
            overlaypanel.toggle(event);
        });
    };
    VideoLogComponent.prototype.showDialog = function (data) {
        console.log('DATA', data);
        this.viewReview = data;
        this.displayReviews = true;
    };
    VideoLogComponent.prototype.changeValue = function (review_id, changed_value) {
        var _this = this;
        var obj = {
            review_id: review_id,
            value: changed_value
        };
        this.admin.changeReviewInterest(obj).subscribe(function (res) {
            console.log('changeReviewInterest', res);
            if (res.code == 200) {
                _this.displayReviews = false;
                _this.toastr.success('Interest has been updated successfully.');
                _this.videoCallDone();
            }
            else if (res.code == 404) {
                _this.displayReviews = false;
                _this.toastr.success('Some error occurred in updating Interest. Please try again.');
                _this.videoCallDone();
            }
        });
    };
    /* viewReview(event, userid, sessionId, overlaypanel: OverlayPanel) {
      this.route.params.subscribe(params => {
        console.log('userid', userid, 'sessionId', sessionId)
        const obj = {
          useridFrom: userid,
          useridFor: params['id'],
          sessionId: sessionId
        }
        this.admin.getReview(obj).subscribe(res => {
          console.log(res.data, 'review data')
          this.getReviews = res.data;
  
          overlaypanel.toggle(event);
          let formArr = this.rForm.controls.add as FormArray;
          this.getReviews.forEach(x => {
            console.log(x, 'formArray');
            if (formArr.length !== 0) {
              formArr.removeAt(0);
              formArr.push(this.fb.group({
                id: x._id,
                isInterested: x.isInterested,
                pleasant: x.pleasant,
                attractive: x.attractive,
                marriageFocused: x.marriageFocused,
                notes: x.notes,
                review_from: x.review_from,
                review_for: x.review_for
              }
              ) );
            } else {
              console.log('5555555555555555');
              formArr.push(this.fb.group({
                id: x._id,
                isInterested: x.isInterested,
                pleasant: x.pleasant,
                attractive: x.attractive,
                marriageFocused: x.marriageFocused,
                notes: x.notes,
                review_from: x.review_from,
                review_for: x.review_for
              }
              )
              );
            }
  
          });
          // formArr.disable()
        });
      });
  
    } */
    VideoLogComponent.prototype.editReview = function (value) {
        console.log('values))', value);
        this.admin.editReview(value).subscribe(function (res) {
        });
    };
    VideoLogComponent.prototype.downloadVideo = function (dataurl) {
        this.videoplayer.nativeElement.load();
        this.displayVideo = true;
        this.videourl = dataurl;
        // const a = document.createElement('a');
        // a.href = dataurl;
        // a.setAttribute('download', 'archive.mp4');
        // a.click();
    };
    VideoLogComponent.prototype.openQandAModal = function (userid) {
        var _this = this;
        console.log('iddddddddddd', userid.user);
        document.getElementById('myOpenQandAModal').style.display = 'block';
        this.admin.introduceYourSelf(userid.user).subscribe(function (res) {
            _this.introduceYourSelfs = res.data;
        });
    };
    VideoLogComponent.prototype.closeQandAModal = function () {
        document.getElementById('myOpenQandAModal').style.display = 'none';
    };
    VideoLogComponent.prototype.closeReviewModal = function () {
        document.getElementById('myModalReview').style.display = 'none';
    };
    VideoLogComponent.prototype.onSubmitSetupDate = function () {
        var _this = this;
        console.log(this.setupDateForm.value.MatchDate);
        var pageObj = {
            scheduled_by: this.Match_UserID_1,
            scheduled_for: this.Match_UserID_2,
            dateScheduled: this.setupDateForm.value.MatchDate,
        };
        console.log(pageObj);
        this.admin.arrangeFirstTimeUserDate(pageObj).subscribe(function (res) {
            if (res.code === 200 && res.data.length) {
                _this.closeSetUpDateModal();
                _this.toaster.success('First Date Setup Successfully.');
            }
            else {
                _this.closeSetUpDateModal();
                _this.toaster.success('First Date Setup Successfully.');
            }
        });
    };
    VideoLogComponent.prototype.editReviews = function () {
        //   if (this.editYoutubeForm.valid) {
        //     this.adminService.editYoutubeLink(this.editYoutubeForm.value).subscribe(res => {
        //       if (res.code == 200) {
        //         this.listYouTubeInfo()
        //         this.editYoutubeForm.reset()
        //         this.closeEditModal()
        //         this.notification.successToast(res.message)
        //       } else {
        //         this.notification.infoToast(res.message)
        //         this.closeEditModal()
        //       }
        //     })
        //   } else {
        //     this.notification.errorToast('Invalid')
        //     this.closeEditModal()
        //   }
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VideoLogComponent.prototype, "videoplayer", void 0);
    VideoLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-log',
            template: __webpack_require__(/*! ./video-log.component.html */ "./src/app/admin/modules/manage-users/video-log/video-log.component.html"),
            styles: [__webpack_require__(/*! ./video-log.component.css */ "./src/app/admin/modules/manage-users/video-log/video-log.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], VideoLogComponent);
    return VideoLogComponent;
}());

/**
 * Get the Users with who he got a match his age his gender his review for that user his super imp question answer
 * and what anwers he has given for questions
 */ 


/***/ }),

/***/ "./src/app/shared/service/conformation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/service/conformation.service.ts ***!
  \********************************************************/
/*! exports provided: ConformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConformService", function() { return ConformService; });
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConformService = /** @class */ (function () {
    function ConformService() {
    }
    // deleteConfirmationBox() {
    //     return Swal.fire({
    //         title: 'Are you sure?',
    //         text: 'You will not be able to recover this imaginary file!',
    //         type: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'No, keep it'
    //       })
    // }
    ConformService.prototype.deleteConfirmationBox = function (text) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                title: 'Are you sure?',
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then(function (val) {
                if (val.value) {
                    return observer.next('true');
                }
                else if (val.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                    return observer.next('false');
                }
            });
        });
    };
    ConformService.prototype.updateConfirmationBox = function (text) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
                title: 'Are you sure?',
                text: text,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            }).then(function (val) {
                if (val.value) {
                    return observer.next('true');
                }
                else if (val.dismiss === sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.DismissReason.cancel) {
                    return observer.next('false');
                }
            });
        });
    };
    ConformService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConformService);
    return ConformService;
}());

/**
 * 1) Drop Down api for video count
 * 2) Filter based on gender and age
 * 3) Filter based on Rating
 */ 


/***/ })

}]);
//# sourceMappingURL=modules-manage-users-manage-users-module.js.map