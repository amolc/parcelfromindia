(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js ***!
  \************************************************************************/
/*! exports provided: ClipboardDirective, ClipboardIfSupportedDirective, ClipboardModule, ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */

var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    ClipboardService.prototype.configure = function (config) {
        this.config = config;
    };
    ClipboardService.prototype.copy = function (content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content: content });
        }
        var copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content: content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content: content });
    };
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    ClipboardService.prototype.isTargetValid = function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * Attempts to copy from an input `targetElm`
     */
    ClipboardService.prototype.copyFromInputElement = function (targetElm, isFocus) {
        if (isFocus === void 0) { isFocus = true; }
        try {
            this.selectTarget(targetElm);
            var re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    ClipboardService.prototype.isCopySuccessInIE11 = function () {
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    ClipboardService.prototype.copyFromContent = function (content, container) {
        if (container === void 0) { container = this.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        var toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    };
    /**
     * Remove temporary textarea if any exists.
     */
    ClipboardService.prototype.destroy = function (container) {
        if (container === void 0) { container = this.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * Select the target html input element.
     */
    ClipboardService.prototype.selectTarget = function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    ClipboardService.prototype.copyText = function () {
        return this.document.execCommand('copy');
    };
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    ClipboardService.prototype.clearSelection = function (inputElement, window) {
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    };
    /**
     * Creates a fake textarea for copy command.
     */
    ClipboardService.prototype.createTempTextArea = function (doc, window) {
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    ClipboardService.prototype.pushCopyResponse = function (response) {
        this.copySubject.next(response);
    };
    /**
     * @deprecated use pushCopyResponse instead.
     */
    ClipboardService.prototype.pushCopyReponse = function (response) {
        this.pushCopyResponse(response);
    };
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] }
    ]; };
    ClipboardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    ClipboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]))
    ], ClipboardService);
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, null); })();
    return ClipboardService;
}());

var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    ClipboardDirective.prototype.ngOnInit = function () { };
    ClipboardDirective.prototype.ngOnDestroy = function () {
        this.clipboardSrv.destroy(this.container);
    };
    ClipboardDirective.prototype.onClick = function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    ClipboardDirective.prototype.handleResult = function (succeeded, copiedContent, event) {
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    };
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ngxClipboard')
    ], ClipboardDirective.prototype, "targetElm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "container", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbSuccessMsg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnSuccess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event.target'])
    ], ClipboardDirective.prototype, "onClick", null);
ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) { return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService)); };
ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardDirective, selectors: [["", "ngxClipboard", ""]], hostBindings: function ClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { targetElm: ["ngxClipboard", "targetElm"], container: "container", cbContent: "cbContent", cbSuccessMsg: "cbSuccessMsg" }, outputs: { cbOnSuccess: "cbOnSuccess", cbOnError: "cbOnError" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboard]'
            }]
    }], function () { return [{ type: ClipboardService }]; }, { cbOnSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cbOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event.target']]
        }], targetElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngxClipboard']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbSuccessMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
    return ClipboardDirective;
}());

var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    ClipboardIfSupportedDirective.prototype.ngOnInit = function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) { return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardIfSupportedDirective, selectors: [["", "ngxClipboardIfSupported", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboardIfSupported]'
            }]
    }], function () { return [{ type: ClipboardService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
    return ClipboardIfSupportedDirective;
}());

var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                exports: [ClipboardDirective, ClipboardIfSupportedDirective]
            }]
    }], function () { return []; }, null); })();
    return ClipboardModule;
}());

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js ***!
  \******************************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: function () { return window; } } : undefined);

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assisted-purchase/assisted-purchase.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assisted-purchase/assisted-purchase.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>assisted-purchase works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\" style=\"padding:10px;\">\r\n            <div class=\"m-widget24\">\r\n              <div class=\"m-widget24__item\">\r\n                 <h4 class=\"m-widget24__title\"><span style=\"margin-right: 5px;size: 20px;\"><i class=\"flaticon-truck m--font-brand\" style=\"font-size: 25px !important;\"></i></span>\r\n                  Pick Up\r\n                 </h4>\r\n                 <br>\r\n                 <span class=\"m-widget24__desc\">\r\n                 No. of Orders\r\n                 </span>\r\n                 <span class=\"m-widget24__stats m--font-info\">\r\n                 0                                    </span>\r\n                 <div class=\"m--space-10\"></div>\r\n                 <div class=\"progress m-progress--sm\">\r\n                    <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                 </div>\r\n                 <span class=\"m-widget24__change\">\r\n                 \r\n                   <a  class=\"btn btn-primary\" style=\"width: 80px;color:#ffffff;background-color: #006fe6;border:none;\">Visit</a>    \r\n                 </span>\r\n                 <span class=\"m-widget24__number\">\r\n                 </span>\r\n              </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\" style=\"padding:10px;\">\r\n            <div class=\"m-widget24\">\r\n              <div class=\"m-widget24__item\">\r\n                 <h4 class=\"m-widget24__title\"><span style=\"margin-right: 5px;size: 20px;\"><i class=\"flaticon-interface-1 m--font-brand\" style=\"font-size: 25px !important;\"></i></span>\r\n                    Warehouse\r\n                 </h4>\r\n                 <br>\r\n                 <span class=\"m-widget24__desc\">\r\n                 No. of Orders\r\n                 </span>\r\n                 <span class=\"m-widget24__stats m--font-info\">\r\n                 0                                    </span>\r\n                 <div class=\"m--space-10\"></div>\r\n                 <div class=\"progress m-progress--sm\">\r\n                    <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                 </div>\r\n                 <span class=\"m-widget24__change\">\r\n                 \r\n                   <a  class=\"btn btn-primary\" style=\"width: 80px;color:#ffffff;background-color: #006fe6;border:none;\">Visit</a>    \r\n                 </span>\r\n                 <span class=\"m-widget24__number\">\r\n                 </span>\r\n              </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\" style=\"padding:10px;\">\r\n            <div class=\"m-widget24\">\r\n              <div class=\"m-widget24__item\">\r\n                 <h4 class=\"m-widget24__title\"><span style=\"margin-right: 5px;size: 20px;\"><i class=\"flaticon-time-3 m--font-brand\" style=\"font-size: 25px !important;\"></i></span>\r\n                  Ship\r\n                 </h4>\r\n                 <br>\r\n                 <span class=\"m-widget24__desc\">\r\n                 No. of Orders\r\n                 </span>\r\n                 <span class=\"m-widget24__stats m--font-info\">\r\n                 0                                    </span>\r\n                 <div class=\"m--space-10\"></div>\r\n                 <div class=\"progress m-progress--sm\">\r\n                    <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                 </div>\r\n                 <span class=\"m-widget24__change\">\r\n                 \r\n                   <a  class=\"btn btn-primary\" style=\"width: 80px;color:#ffffff;background-color: #006fe6;border:none;\">Visit</a>    \r\n                 </span>\r\n                 <span class=\"m-widget24__number\">\r\n                 </span>\r\n              </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\" style=\"padding:10px;\">\r\n            <div class=\"m-widget24\">\r\n              <div class=\"m-widget24__item\">\r\n                 <h4 class=\"m-widget24__title\"><span style=\"margin-right: 5px;size: 20px;\"><i class=\"flaticon-paper-plane m--font-brand\" style=\"font-size: 25px !important;\"></i></span>\r\n                  History\r\n                 </h4>\r\n                 <br>\r\n                 <span class=\"m-widget24__desc\">\r\n                 No. of Orders\r\n                 </span>\r\n                 <span class=\"m-widget24__stats m--font-info\">\r\n                 0                                    </span>\r\n                 <div class=\"m--space-10\"></div>\r\n                 <div class=\"progress m-progress--sm\">\r\n                    <div class=\"progress-bar m--bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                 </div>\r\n                 <span class=\"m-widget24__change\">\r\n                 \r\n                   <a  class=\"btn btn-primary\" style=\"width: 80px;color:#ffffff;background-color: #006fe6;border:none;\">Visit</a>    \r\n                 </span>\r\n                 <span class=\"m-widget24__number\">\r\n                 </span>\r\n              </div>\r\n           </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  \r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h3 class=\"mb-0\"> Wallet Balance</h3>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"m-portlet m-portlet--bordered-semi m-portlet--space m-portlet--full-height \">\r\n          \r\n          <div class=\"m-portlet__body\">\r\n             <div class=\"m-widget25\">\r\n                <span class=\"m-widget25__price m--font-brand\" style=\"text-align: center;display: block;font-size:70px;\">\r\n                <i class=\"fa fa-inr\" style=\"font-size:60px!important;\"></i> 0                                 </span>\r\n                <br>\r\n                <span class=\"m-widget25__desc\" style=\"text-align: center;display: block;\">\r\n                Total wallet balance.\r\n                </span>\r\n                <div class=\"m-widget25--progress\" style=\"text-align: center;\">\r\n                   <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                   <div class=\"m-widget25__progress\">\r\n                      <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#m_modal_4\">\r\n                      Add to Wallet 12\r\n                      </button>\r\n                      <div class=\"m--space-14\"></div>\r\n                      \r\n                   </div>\r\n                   <br><br><br>\r\n                   <div class=\"m-widget25__progress\">\r\n                      <button  type=\"button\" class=\"btn btn-secondary\">History</button>\r\n                      <div class=\"m--space-10\"></div>\r\n                      \r\n                   </div>\r\n                   </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\" style=\"background-color: #006fe6 !important;\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h3 class=\"mb-0\" style=\"color:#ffffff;\">Your Indian Address</h3>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <!-- Projects table -->\r\n          <div class=\"m-portlet m-portlet--head-overlay m-portlet--full-height   m-portlet--rounded-force\">\r\n            \r\n            <div class=\"m-portlet__body\">\r\n               <div class=\"m-widget28\">\r\n                  <div class=\"m-widget28__pic m-portlet-fit--sides\" style=\"min-height: 65px;\"></div>\r\n                  <div class=\"m-widget28__container\">\r\n                     <!-- begin::Tab Content -->\r\n                     <div class=\"m-widget28__tab tab-content\">\r\n                        <div id=\"menu11\" class=\"m-widget28__tab-container tab-pane active\">\r\n                           <div class=\"m-widget28__tab-items\">\r\n                              <div class=\"m-widget28__tab-item\">\r\n                                 <span><span style=\"margin-right: 10px;\"><i class=\"flaticon-avatar\"></i></span>\r\n                                 \r\n                                 </span>\r\n                              </div>\r\n                              \r\n                              <div class=\"m-widget28__tab-item\">\r\n                                 <span><span style=\"margin-right: 10px;\"><i class=\"flaticon-map-location\"></i></span>\r\n                               <!-- Ramdas Dagale, Plot no 12 , survey no 253/2/2  -->\r\n                                 </span>\r\n                              </div>\r\n                              <div class=\"m-widget28__tab-item\">\r\n                                 <span><span style=\"margin-right: 10px;\"><i class=\"flticon-placeholder-2\"></i></span>\r\n                                 <!--Near skumar bakery Lohegaon -->\r\n                                 </span>\r\n                              </div>\r\n                              <div class=\"m-widget28__tab-item\">\r\n                                 <span><span style=\"margin-right: 10px;\"><i class=\"flaticon-placeholder-2\"></i></span>\r\n                                <!--- Pune, 411032 -->\r\n                                 </span>\r\n                              </div>\r\n                              <div class=\"m-widget28__tab-item\">\r\n                                 <span><span style=\"margin-right: 10px;\"><i class=\"flaticon-placeholder-2\"></i></span>\r\n                                 <!-- Mobile: +91 8074393145  -->\r\n                                 </span>\r\n                              </div>\r\n                              \r\n                              <div class=\"m-widget28__tab-item\">\r\n                              </div>\r\n                           </div>\r\n                        </div>\r\n                        \r\n                        \r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<!-- <div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow border-0\">\r\n        \r\n<div class=\"container clearfix py-5\">\r\n  <div class=\"m-portlet__head\">\r\n      <div class=\"m-portlet__head-caption\">\r\n         <div class=\"m-portlet__head-title\">\r\n            <h3 class=\"m-portlet__head-text\">\r\n               Fill in the following details to place pickup request.\r\n            </h3>\r\n         </div>\r\n      </div>\r\n  </div>\r\n   \r\n  <div class=\"container clearfix divcenter\" style=\"max-width: 900px;\">\r\n     <div class=\" nobottommargin\">\r\n        <form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\" autocomplete=\"off\" [formGroup]=\"pickupForm\" >\r\n           <div class=\"m-portlet__body\">\r\n              <div class=\"form-group m-form__group row\">\r\n                  <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\r\n                     <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\r\n                           Pickup Address\r\n                     </span><br>\r\n                      <div style=\"margin-top:25px; margin-left:15px;color:#db1a20;\"><p>All fields are mandatory</p></div>\r\n                  </div>\r\n               </div>\r\n               \r\n              <div class=\"form-group m-form__group row\">\r\n                  \r\n                 <div class=\"col-lg-6 col-md-4\">\r\n                      \r\n                    <label>\r\n                    First Name: \r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"pickupfname\" id=\"pickupfname\" formControlName=\"pickupfname\"  required >\r\n                </div>\r\n                \r\n                 <div class=\"col-lg-6 col-md-4 topgap\">\r\n                    <label class=\"\">\r\n                    SurName: \r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter  surname\" name=\"pickuplname\" id=\"pickuplname\" formControlName=\"pickuplname\"  required >\r\n                   </div>\r\n                   \r\n              </div>\r\n             <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-12 col-md-10\">\r\n                    <label>\r\n                      address \r\n                    </label>\r\n                   <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"pickupaddress\" id=\"pickupaddress\" formControlName=\"pickupaddress\"  required ></textarea>\r\n                                                       \r\n                 </div>\r\n                 \r\n              </div>\r\n             <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-12 col-md-10\">\r\n                    <label>\r\n                   2nd address \r\n                    </label>\r\n                   <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"pickupaddress2\" id=\"pickupaddress2\" formControlName=\"pickupaddress2\" required ></textarea>\r\n                                                       \r\n                 </div>\r\n                 \r\n              </div>  \r\n              \r\n                 <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-6 col-md-4\">\r\n                    <label>\r\n                    City  \r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"pickupcity\" id=\"pickupcity\" formControlName=\"pickupcity\"  required >\r\n                    \r\n                    <div class=\"clearfix\"></div>\r\n                       \r\n\r\n\r\n                 </div>\r\n                 <div class=\"col-lg-6 col-md-4 topgap\">\r\n                    <label class=\"\">\r\n                    State \r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"pickupstate\" id=\"pickupstate\" formControlName=\"pickupstate\" required >\r\n                     \r\n                   </div>\r\n                   \r\n              </div>\r\n              <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-6 col-md-4\">\r\n                    <label>\r\n                     Country  \r\n                    </label>\r\n                    <input type=\"text\" name=\"pickupcountry\" id=\"pickupcountry\" class=\"form-control\" formControlName=\"pickupcountry\" required >\r\n                 </div>\r\n                 \r\n                 <div class=\"col-lg-6 col-md-4 topgap\">\r\n                    <label class=\"\">\r\n                    postcode \r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"pickuppostal_code\" id=\"pickuppostal_code\" formControlName=\"pickuppostal_code\"  required >\r\n                     <div class=\"clearfix\"></div>    \r\n                 </div>\r\n                 \r\n             </div>\r\n             <div class=\"form-group m-form__group row topgap\">\r\n              <div class=\"col-lg-6 col-md-4\">\r\n                 <label>\r\n                  Mobile  \r\n                 </label>\r\n                 <input type=\"text\" placeholder=\"Enter mobile number\" name=\"pickupmobile\" id=\"pickupmobile\" class=\"form-control\" formControlName=\"pickupmobile\" required   >\r\n              </div>\r\n              \r\n              <div class=\"col-lg-6 col-md-4 topgap\">\r\n                 <label class=\"\">\r\n                 Email \r\n                 </label>\r\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Email Adddress\" name=\"pickupemail\" id=\"pickupemail\" formControlName=\"pickupemail\"  required >\r\n                  <div class=\"clearfix\"></div>    \r\n              </div>\r\n              \r\n          </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"form-group m-form__group row\">\r\n            <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\r\n               <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\r\n                     WareHouse Information\r\n               </span>\r\n            </div>\r\n         </div> \r\n         <br>\r\n         <br>\r\n         <div class=\"form-group m-form__group row\">\r\n                  \r\n            <div class=\"col-lg-6 col-md-4\">\r\n                 \r\n               <label>\r\n               First Name: \r\n               </label>\r\n               <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"WareHousefname\" id=\"WareHousefname\" formControlName=\"WareHousefname\"  required >\r\n           </div>\r\n           \r\n            <div class=\"col-lg-6 col-md-4 topgap\">\r\n               <label class=\"\">\r\n               SurName: \r\n               </label>\r\n               <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter  surname\" name=\"WareHouselname\" id=\"WareHouselname\" formControlName=\"WareHouselname\"  required >\r\n              </div>\r\n              \r\n         </div>\r\n        <div class=\"form-group m-form__group row topgap\">\r\n            <div class=\"col-lg-12 col-md-10\">\r\n               <label>\r\n                 address \r\n               </label>\r\n              <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"WareHouseaddress\" id=\"WareHouseaddress\" formControlName=\"WareHouseaddress\"  required ></textarea>\r\n                                                  \r\n            </div>\r\n            \r\n         </div>\r\n        <div class=\"form-group m-form__group row topgap\">\r\n            <div class=\"col-lg-12 col-md-10\">\r\n               <label>\r\n              2nd address \r\n               </label>\r\n              <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"WareHouseaddress2\" id=\"WareHouseaddress2\" formControlName=\"WareHouseaddress2\" required ></textarea>\r\n                                                  \r\n            </div>\r\n            \r\n         </div>  \r\n         \r\n            <div class=\"form-group m-form__group row topgap\">\r\n            <div class=\"col-lg-6 col-md-4\">\r\n               <label>\r\n               City  \r\n               </label>\r\n               <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"WareHousecity\" id=\"WareHousecity\" formControlName=\"WareHousecity\"  required >\r\n               \r\n               <div class=\"clearfix\"></div>\r\n                  \r\n\r\n\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-4 topgap\">\r\n               <label class=\"\">\r\n               State \r\n               </label>\r\n               <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"WareHousestate\" id=\"WareHousestate\" formControlName=\"WareHousestate\" required >\r\n                \r\n              </div>\r\n              \r\n         </div>\r\n         <div class=\"form-group m-form__group row topgap\">\r\n            <div class=\"col-lg-6 col-md-4\">\r\n               <label>\r\n                Country  \r\n               </label>\r\n               <input type=\"text\" name=\"WareHousecountry\" id=\"WareHousecountry\" class=\"form-control\" formControlName=\"WareHousecountry\" required >\r\n            </div>\r\n            \r\n            <div class=\"col-lg-6 col-md-4 topgap\">\r\n               <label class=\"\">\r\n               postcode \r\n               </label>\r\n               <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"WareHousepostal_code\" id=\"WareHousepostal_code\" formControlName=\"WareHousepostal_code\"  required >\r\n                <div class=\"clearfix\"></div>    \r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"form-group m-form__group row topgap\">\r\n         <div class=\"col-lg-6 col-md-4\">\r\n            <label>\r\n             Mobile  \r\n            </label>\r\n            <input type=\"text\" placeholder=\"Enter mobile number\" name=\"WareHousemobile\" id=\"WareHousemobile\" class=\"form-control\" formControlName=\"WareHousemobile\" required   >\r\n         </div>\r\n         \r\n         <div class=\"col-lg-6 col-md-4 topgap\">\r\n            <label class=\"\">\r\n            Email \r\n            </label>\r\n            <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Email Adddress\" name=\"WareHouseemail\" id=\"WareHouseemail\" formControlName=\"WareHouseemail\"  required >\r\n             <div class=\"clearfix\"></div>    \r\n         </div>\r\n         \r\n     </div>\r\n          <br>\r\n          <br>\r\n          <div class=\"form-group m-form__group row\">\r\n              <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\r\n                 <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\r\n                       Parcel Information\r\n                 </span>\r\n              </div>\r\n           </div>    \r\n               <br>\r\n               <br>\r\n              <div class=\"form-group m-form__group row\">\r\n               <div class=\"col-lg-6 col-md-4\">\r\n                  <label>\r\n                      Weight of the parcel \r\n                  </label>\r\n                  <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Weight in kg\" name=\"weight\" id=\"weight\" formControlName=\"weight\">\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 topgap\">\r\n                  <label class=\"\">\r\n                  Dimensions \r\n                  </label>\r\n                  <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Length \" name=\"length\" id=\"length\" formControlName=\"length\">\r\n                </div>\r\n               <div class=\"col-lg-2 col-md-2 topgap\">\r\n                  <label class=\"\">\r\n                   Width in cm\r\n                  </label>\r\n                  <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Width \" name=\"width\" id=\"width\" formControlName=\"width\">\r\n                </div>\r\n               <div class=\"col-lg-2 col-md-2 topgap\">\r\n                  <label class=\"\">\r\n                  Height in cm\r\n                  </label>\r\n                  <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Height \" name=\"height\" id=\"height\" formControlName=\"height\">\r\n               </div>   \r\n              </div>\r\n                 <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-12 col-md-10\">\r\n                  <label>\r\n                      Contents of the parcel\r\n                  </label>\r\n                  <textarea class=\"form-control m-input\" placeholder=\"Enter contents\" name=\"package_items\" id=\"package_items\" rows=\"3\" formControlName=\"package_items\"></textarea>  \r\n                 </div>\r\n                </div>\r\n               \r\n               <div class=\"form-group m-form__group row topgap\">\r\n                 <div class=\"col-lg-12 col-md-10\">\r\n                  <label>\r\n                      Value of contents in <i class=\"fa fa-inr\"></i>\r\n                  </label>\r\n                      <textarea class=\"form-control m-input\" placeholder=\"Enter contents value\" name=\"no_of_packages\" id=\"no_of_packages\" rows=\"3\" formControlName=\"no_of_packages\"></textarea>     \r\n                 </div>\r\n              </div>\r\n          \r\n              <div class=\"m-form__actions m-form__actions\" style=\"text-align: center;\">\r\n                  <button class=\"btn btn-warning m-btn m-btn--custom m-btn--icon\" id=\"shedule_data\" data-wizard-action=\"next\" (click)=\"pickup()\">\r\n                  <span>\r\n                  <span>\r\n                  Submit\r\n                  </span> &nbsp;&nbsp;\r\n                  <i class=\"la la-arrow-right\"></i>\r\n                  </span>\r\n                  </button>\r\n              </div>\r\n           </div>\r\n        </form>\r\n     </div>\r\n      .postcontent end \r\n  </div>\r\n</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"container-fluid mt--7\" style=\"margin-top:50px!important;\">\r\n   <button routerLinkActive=\"active\" [routerLink]=\"['/pickup']\" >AddPickup</button>  \r\n\r\n      <div _ngcontent-c5=\"\" class=\"row mt-5\">\r\n        <div _ngcontent-c5=\"\" class=\"col-xl-12 mb-5 mb-xl-0\">\r\n          <div _ngcontent-c5=\"\" class=\"card shadow\">\r\n            <div _ngcontent-c5=\"\" class=\"card-header border-0\">\r\n              <div _ngcontent-c5=\"\" class=\"row align-items-center\">\r\n                <div _ngcontent-c5=\"\" class=\"col\">\r\n                  <h3 _ngcontent-c5=\"\" class=\"mb-0\">Manage Shipment</h3>\r\n                </div>\r\n                <!-- <div _ngcontent-c5=\"\" class=\"col text-right\"><a _ngcontent-c5=\"\" class=\"btn btn-sm btn-primary\" href=\"#!\">See all</a>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div _ngcontent-c5=\"\" class=\"table-responsive\">\r\n              <table _ngcontent-c5=\"\" class=\"table align-items-center table-flush\">\r\n                <thead _ngcontent-c5=\"\" class=\"thead-light\">\r\n                  <tr _ngcontent-c5=\"\">\r\n                    <th _ngcontent-c5=\"\" scope=\"col\"><input type=\"checkbox\" class=\"form-check-input\" value=\"\"></th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">TRACKING NO.</th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">RECEIVER</th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">DESTINATION</th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">BOOKING DATE</th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">CHARGES</th>\r\n                    <th _ngcontent-c5=\"\" scope=\"col\">STATUS</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody _ngcontent-c5=\"\">\r\n                  <tr _ngcontent-c5=\"\">\r\n                    <th _ngcontent-c5=\"\" scope=\"row\"><input type=\"checkbox\" class=\"form-check-input\" value=\"\"></th>\r\n                    <td _ngcontent-c5=\"\">111111</td>\r\n                    <td _ngcontent-c5=\"\"><i _ngcontent-c5=\"\" class=\"fas fa-box text-success mr-3\"></i>Amol C</td>\r\n                    <td _ngcontent-c5=\"\">Pune</td>\r\n                    <td _ngcontent-c5=\"\">15-08-2020</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\" style=\"padding:5px;border-radius:5px;border:green 1px solid;\">Paid</button> 200SG</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\">Delivered<span style=\"font-size:10px;\">2 days ago</span></button></td>\r\n                    <!-- <td _ngcontent-c5=\"\"><i _ngcontent-c5=\"\" class=\"fas fa-arrow-up text-success mr-3\"></i> 46,53%</td> -->\r\n                  </tr>\r\n                  <tr _ngcontent-c5=\"\">\r\n                    <th _ngcontent-c5=\"\" scope=\"row\"><input type=\"checkbox\" class=\"form-check-input\" value=\"\"></th>\r\n                    <td _ngcontent-c5=\"\">222222</td>\r\n                    <td _ngcontent-c5=\"\"><i _ngcontent-c5=\"\" class=\"fas fa-box text-success mr-3\"></i>Amol C</td>\r\n                    <td _ngcontent-c5=\"\">Pune</td>\r\n                    <td _ngcontent-c5=\"\">15-08-2020</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\" style=\"padding:5px;border-radius:5px;border:green 1px solid;\">Paid</button> 200SG</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\">Delay<span style=\"font-size:10px;\">2 days ago</span></button></td>\r\n                  </tr>\r\n                  <tr _ngcontent-c5=\"\">\r\n                    <th _ngcontent-c5=\"\" scope=\"row\"><input type=\"checkbox\" class=\"form-check-input\" value=\"\"></th>\r\n                    <td _ngcontent-c5=\"\">333333</td>\r\n                    <td _ngcontent-c5=\"\"><i _ngcontent-c5=\"\" class=\"fas fa-box text-success mr-3\"></i>Amol C</td>\r\n                    <td _ngcontent-c5=\"\">Pune</td>\r\n                    <td _ngcontent-c5=\"\">15-08-2020</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\" style=\"padding:5px;border-radius:5px;border:red 1px solid;\">Unpaid</button> 200SG</td>\r\n                    <td _ngcontent-c5=\"\"><button  type=\"button\" class=\"btn btn-secondary\">Over Load<span style=\"font-size:10px;\">2 days ago</span></button></td>\r\n                  </tr>\r\n                  \r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    \r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-suite/my-suite.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-suite/my-suite.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>my-suite works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pickup/pickup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pickup/pickup.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n      <div class=\"header-body\">\n        <!-- Card stats -->\n        \n      </div>\n    </div>\n  </div>\n  <!-- Page content -->\n   <div class=\"container-fluid mt--7\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card shadow border-0\">\n          \n  <div class=\"container clearfix py-5\">\n    <div class=\"m-portlet__head\">\n        <div class=\"m-portlet__head-caption\">\n           <div class=\"m-portlet__head-title\">\n              <h3 class=\"m-portlet__head-text\">\n                 Fill in the following details to place pickup request.\n              </h3>\n           </div>\n        </div>\n    </div>\n     \n    <div class=\"container clearfix divcenter\" style=\"max-width: 900px;\">\n       <div class=\" nobottommargin\">\n          <form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\" autocomplete=\"off\" [formGroup]=\"pickupForm\" >\n             <div class=\"m-portlet__body\">\n                <div class=\"form-group m-form__group row\">\n                    <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\n                       <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\n                             Pickup Address\n                       </span><br>\n                        <div style=\"margin-top:25px; margin-left:15px;color:#db1a20;\"><p>All fields are mandatory</p></div>\n                    </div>\n                 </div>\n                 \n                <div class=\"form-group m-form__group row\">\n                    \n                   <div class=\"col-lg-6 col-md-4\">\n                        \n                      <label>\n                      First Name: \n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"pickupfname\" id=\"pickupfname\" formControlName=\"pickupfname\"  required >\n                  </div>\n                  \n                   <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                      SurName: \n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter  surname\" name=\"pickuplname\" id=\"pickuplname\" formControlName=\"pickuplname\"  required >\n                     </div>\n                     \n                </div>\n               <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                        address \n                      </label>\n                     <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"pickupaddress\" id=\"pickupaddress\" formControlName=\"pickupaddress\"  required ></textarea>\n                                                         \n                   </div>\n                   \n                </div>\n               <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                     2nd address \n                      </label>\n                     <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"pickupaddress2\" id=\"pickupaddress2\" formControlName=\"pickupaddress2\" required ></textarea>\n                                                         \n                   </div>\n                   \n                </div>  \n                \n                   <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                      City  \n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"pickupcity\" id=\"pickupcity\" formControlName=\"pickupcity\"  required >\n                      \n                      <div class=\"clearfix\"></div>\n                         \n  \n  \n                   </div>\n                   <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                      State \n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"pickupstate\" id=\"pickupstate\" formControlName=\"pickupstate\" required >\n                       \n                     </div>\n                     \n                </div>\n                <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                       Country  \n                      </label>\n                      <input type=\"text\" name=\"pickupcountry\" id=\"pickupcountry\" class=\"form-control\" formControlName=\"pickupcountry\" required >\n                   </div>\n                   \n                   <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                      postcode \n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"pickuppostal_code\" id=\"pickuppostal_code\" formControlName=\"pickuppostal_code\"  required >\n                       <div class=\"clearfix\"></div>    \n                   </div>\n                   \n               </div>\n               <div class=\"form-group m-form__group row topgap\">\n                <div class=\"col-lg-6 col-md-4\">\n                   <label>\n                    Mobile  \n                   </label>\n                   <input type=\"text\" placeholder=\"Enter mobile number\" name=\"pickupmobile\" id=\"pickupmobile\" class=\"form-control\" formControlName=\"pickupmobile\" required   >\n                </div>\n                \n                <div class=\"col-lg-6 col-md-4 topgap\">\n                   <label class=\"\">\n                   Email \n                   </label>\n                   <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Email Adddress\" name=\"pickupemail\" id=\"pickupemail\" formControlName=\"pickupemail\"  required >\n                    <div class=\"clearfix\"></div>    \n                </div>\n                \n            </div>\n            <br>\n            <br>\n            <div class=\"form-group m-form__group row\">\n              <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\n                 <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\n                       WareHouse Information\n                 </span>\n              </div>\n           </div> \n           <br>\n           <br>\n           <div class=\"form-group m-form__group row\">\n                    \n              <div class=\"col-lg-6 col-md-4\">\n                   \n                 <label>\n                 First Name: \n                 </label>\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"WareHousefname\" id=\"WareHousefname\" formControlName=\"WareHousefname\"  required >\n             </div>\n             \n              <div class=\"col-lg-6 col-md-4 topgap\">\n                 <label class=\"\">\n                 SurName: \n                 </label>\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter  surname\" name=\"WareHouselname\" id=\"WareHouselname\" formControlName=\"WareHouselname\"  required >\n                </div>\n                \n           </div>\n          <div class=\"form-group m-form__group row topgap\">\n              <div class=\"col-lg-12 col-md-10\">\n                 <label>\n                   address \n                 </label>\n                <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"WareHouseaddress\" id=\"WareHouseaddress\" formControlName=\"WareHouseaddress\"  required ></textarea>\n                                                    \n              </div>\n              \n           </div>\n          <div class=\"form-group m-form__group row topgap\">\n              <div class=\"col-lg-12 col-md-10\">\n                 <label>\n                2nd address \n                 </label>\n                <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"WareHouseaddress2\" id=\"WareHouseaddress2\" formControlName=\"WareHouseaddress2\" required ></textarea>\n                                                    \n              </div>\n              \n           </div>  \n           \n              <div class=\"form-group m-form__group row topgap\">\n              <div class=\"col-lg-6 col-md-4\">\n                 <label>\n                 City  \n                 </label>\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"WareHousecity\" id=\"WareHousecity\" formControlName=\"WareHousecity\"  required >\n                 \n                 <div class=\"clearfix\"></div>\n                    \n  \n  \n              </div>\n              <div class=\"col-lg-6 col-md-4 topgap\">\n                 <label class=\"\">\n                 State \n                 </label>\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"WareHousestate\" id=\"WareHousestate\" formControlName=\"WareHousestate\" required >\n                  \n                </div>\n                \n           </div>\n           <div class=\"form-group m-form__group row topgap\">\n              <div class=\"col-lg-6 col-md-4\">\n                 <label>\n                  Country  \n                 </label>\n                 <input type=\"text\" name=\"WareHousecountry\" id=\"WareHousecountry\" class=\"form-control\" formControlName=\"WareHousecountry\" required >\n              </div>\n              \n              <div class=\"col-lg-6 col-md-4 topgap\">\n                 <label class=\"\">\n                 postcode \n                 </label>\n                 <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"WareHousepostal_code\" id=\"WareHousepostal_code\" formControlName=\"WareHousepostal_code\"  required >\n                  <div class=\"clearfix\"></div>    \n              </div>\n              \n          </div>\n          <div class=\"form-group m-form__group row topgap\">\n           <div class=\"col-lg-6 col-md-4\">\n              <label>\n               Mobile  \n              </label>\n              <input type=\"text\" placeholder=\"Enter mobile number\" name=\"WareHousemobile\" id=\"WareHousemobile\" class=\"form-control\" formControlName=\"WareHousemobile\" required   >\n           </div>\n           \n           <div class=\"col-lg-6 col-md-4 topgap\">\n              <label class=\"\">\n              Email \n              </label>\n              <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Email Adddress\" name=\"WareHouseemail\" id=\"WareHouseemail\" formControlName=\"WareHouseemail\"  required >\n               <div class=\"clearfix\"></div>    \n           </div>\n           \n       </div>\n            <br>\n            <br>\n            <div class=\"form-group m-form__group row\">\n                <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\n                   <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\n                         Parcel Information\n                   </span>\n                </div>\n             </div>    \n                 <br>\n                 <br>\n                <div class=\"form-group m-form__group row\">\n                 <div class=\"col-lg-6 col-md-4\">\n                    <label>\n                        Weight of the parcel \n                    </label>\n                    <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Weight in kg\" name=\"weight\" id=\"weight\" formControlName=\"weight\">\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 topgap\">\n                    <label class=\"\">\n                    Dimensions \n                    </label>\n                    <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Length \" name=\"length\" id=\"length\" formControlName=\"length\">\n                  </div>\n                 <div class=\"col-lg-2 col-md-2 topgap\">\n                    <label class=\"\">\n                     Width in cm\n                    </label>\n                    <input type=\"text\" pattern=\"^\\d*(\\.\\d{0,2})?$\" title=\"required numeric value\" class=\"form-control m-input\" placeholder=\"Enter Width \" name=\"width\" id=\"width\" formControlName=\"width\">\n                  </div>\n                 <div class=\"col-lg-2 col-md-2 topgap\">\n                    <label class=\"\">\n                    Height in cm\n                    </label>\n                    <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter Height \" name=\"height\" id=\"height\" formControlName=\"height\">\n                 </div>   \n                </div>\n                   <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-12 col-md-10\">\n                    <label>\n                        Contents of the parcel\n                    </label>\n                    <textarea class=\"form-control m-input\" placeholder=\"Enter contents\" name=\"package_items\" id=\"package_items\" rows=\"3\" formControlName=\"package_items\"></textarea>  \n                   </div>\n                  </div>\n                 \n                 <div class=\"form-group m-form__group row topgap\">\n                   <div class=\"col-lg-12 col-md-10\">\n                    <label>\n                        Value of contents in <i class=\"fa fa-inr\"></i>\n                    </label>\n                        <textarea class=\"form-control m-input\" placeholder=\"Enter contents value\" name=\"no_of_packages\" id=\"no_of_packages\" rows=\"3\" formControlName=\"no_of_packages\"></textarea>     \n                   </div>\n                </div>\n            \n                <div class=\"m-form__actions m-form__actions\" style=\"text-align: center;\">\n                    <button class=\"btn btn-warning m-btn m-btn--custom m-btn--icon\" id=\"shedule_data\" data-wizard-action=\"next\" (click)=\"pickup()\">\n                    <span>\n                    <span>\n                    Submit\n                    </span> &nbsp;&nbsp;\n                    <i class=\"la la-arrow-right\"></i>\n                    </span>\n                    </button>\n                </div>\n             </div>\n          </form>\n       </div>\n        \n    </div>\n  </div>\n        </div>\n      </div>\n    </div>\n  </div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prohibited-items/prohibited-items.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prohibited-items/prohibited-items.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>prohibited-items works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-calculator/shipping-calculator.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-calculator/shipping-calculator.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shipping-calculator works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" >\n  <!-- Mask -->\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\n  <!-- Header container -->\n  <div class=\"container-fluid d-flex align-items-center\">\n    <div class=\"row\">\n      \n    </div>\n  </div>\n</div>\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n  \n    <div class=\"col-xl-8 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">My account</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">Settings</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Username</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Username\" value=\"lucky.jesse\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                    <input type=\"email\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"jesse@example.com\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">First name</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"First name\" value=\"Lucky\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Last name</label>\n                    <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Last name\" value=\"Jesse\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Address -->\n            <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-city\">City</label>\n                    <input type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"City\" value=\"New York\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Country</label>\n                    <input type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"Country\" value=\"United States\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                    <input type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"Postal code\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">About me</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"form-group\">\n                <label>About Me</label>\n                <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words about you ...\">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_my_suite_my_suite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/my-suite/my-suite.component */ "./src/app/pages/my-suite/my-suite.component.ts");
/* harmony import */ var _pages_assisted_purchase_assisted_purchase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/assisted-purchase/assisted-purchase.component */ "./src/app/pages/assisted-purchase/assisted-purchase.component.ts");
/* harmony import */ var _pages_shipping_calculator_shipping_calculator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/shipping-calculator/shipping-calculator.component */ "./src/app/pages/shipping-calculator/shipping-calculator.component.ts");
/* harmony import */ var _pages_prohibited_items_prohibited_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/prohibited-items/prohibited-items.component */ "./src/app/pages/prohibited-items/prohibited-items.component.ts");
/* harmony import */ var _pages_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/pickup/pickup.component */ "./src/app/pages/pickup/pickup.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








//import { IconsComponent } from '../../pages/icons/icons.component';


//import { TablesComponent } from '../../pages/tables/tables.component';






// import { ToastrModule } from 'ngx-toastr';
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
                _pages_my_suite_my_suite_component__WEBPACK_IMPORTED_MODULE_10__["MySuiteComponent"],
                _pages_assisted_purchase_assisted_purchase_component__WEBPACK_IMPORTED_MODULE_11__["AssistedPurchaseComponent"],
                _pages_shipping_calculator_shipping_calculator_component__WEBPACK_IMPORTED_MODULE_12__["ShippingCalculatorComponent"],
                _pages_prohibited_items_prohibited_items_component__WEBPACK_IMPORTED_MODULE_13__["ProhibitedItemsComponent"],
                _pages_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_14__["PickupComponent"]
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_my_suite_my_suite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/my-suite/my-suite.component */ "./src/app/pages/my-suite/my-suite.component.ts");
/* harmony import */ var _pages_assisted_purchase_assisted_purchase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/assisted-purchase/assisted-purchase.component */ "./src/app/pages/assisted-purchase/assisted-purchase.component.ts");
/* harmony import */ var _pages_shipping_calculator_shipping_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/shipping-calculator/shipping-calculator.component */ "./src/app/pages/shipping-calculator/shipping-calculator.component.ts");
/* harmony import */ var _pages_prohibited_items_prohibited_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/prohibited-items/prohibited-items.component */ "./src/app/pages/prohibited-items/prohibited-items.component.ts");
/* harmony import */ var _pages_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/pickup/pickup.component */ "./src/app/pages/pickup/pickup.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import { IconsComponent } from '../../pages/icons/icons.component';


//import { TablesComponent } from '../../pages/tables/tables.component';





var AdminLayoutRoutes = [
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'user-profile', component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"] },
    { path: 'pickup', component: _pages_pickup_pickup_component__WEBPACK_IMPORTED_MODULE_7__["PickupComponent"] },
    { path: 'SchedulePickup', component: _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_1__["MapsComponent"] },
    { path: 'mysuite', component: _pages_my_suite_my_suite_component__WEBPACK_IMPORTED_MODULE_3__["MySuiteComponent"] },
    { path: 'purchase', component: _pages_assisted_purchase_assisted_purchase_component__WEBPACK_IMPORTED_MODULE_4__["AssistedPurchaseComponent"] },
    { path: 'ShippingCalculator', component: _pages_shipping_calculator_shipping_calculator_component__WEBPACK_IMPORTED_MODULE_5__["ShippingCalculatorComponent"] },
    { path: 'ProhibitedItems', component: _pages_prohibited_items_prohibited_items_component__WEBPACK_IMPORTED_MODULE_6__["ProhibitedItemsComponent"] }
];


/***/ }),

/***/ "./src/app/pages/assisted-purchase/assisted-purchase.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/assisted-purchase/assisted-purchase.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2lzdGVkLXB1cmNoYXNlL2Fzc2lzdGVkLXB1cmNoYXNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/assisted-purchase/assisted-purchase.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/assisted-purchase/assisted-purchase.component.ts ***!
  \************************************************************************/
/*! exports provided: AssistedPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistedPurchaseComponent", function() { return AssistedPurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AssistedPurchaseComponent = /** @class */ (function () {
    function AssistedPurchaseComponent() {
    }
    AssistedPurchaseComponent.prototype.ngOnInit = function () {
    };
    AssistedPurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assisted-purchase',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assisted-purchase.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assisted-purchase/assisted-purchase.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assisted-purchase.component.css */ "./src/app/pages/assisted-purchase/assisted-purchase.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AssistedPurchaseComponent);
    return AssistedPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/maps/maps.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var MapsComponent = /** @class */ (function () {
    function MapsComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.error_messages = {};
        //this.pickupFormData();
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./maps.component.scss */ "./src/app/pages/maps/maps.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-suite/my-suite.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-suite/my-suite.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXN1aXRlL215LXN1aXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/my-suite/my-suite.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/my-suite/my-suite.component.ts ***!
  \******************************************************/
/*! exports provided: MySuiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySuiteComponent", function() { return MySuiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MySuiteComponent = /** @class */ (function () {
    function MySuiteComponent() {
    }
    MySuiteComponent.prototype.ngOnInit = function () {
    };
    MySuiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-suite',
            template: __importDefault(__webpack_require__(/*! raw-loader!./my-suite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-suite/my-suite.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./my-suite.component.css */ "./src/app/pages/my-suite/my-suite.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MySuiteComponent);
    return MySuiteComponent;
}());



/***/ }),

/***/ "./src/app/pages/pickup/pickup.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/pickup/pickup.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpY2t1cC9waWNrdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pickup/pickup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/pickup/pickup.component.ts ***!
  \**************************************************/
/*! exports provided: PickupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupComponent", function() { return PickupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PickupComponent = /** @class */ (function () {
    function PickupComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.error_messages = {};
        this.pickupFormData();
    }
    PickupComponent.prototype.ngOnInit = function () {
    };
    PickupComponent.prototype.pickupFormData = function () {
        this.error_messages = {
            pickupfname: [
                { type: "required", message: 'First Name is Required' }
            ],
            pickuplname: [
                { type: "required", message: 'lname is Required' }
            ],
            pickupmobile: [
                { type: "required", message: "mobile Number  is required." },
                { type: "minlength", message: "minimun length should be 10 ." },
                { type: "maxlength", message: "maximum length should be 12 ." }
            ],
            pickupemail: [
                { type: "required", message: 'Email is Required' },
                { type: "pattern", message: 'Please Enter valid Email' }
            ],
            pickupcity: [
                { type: "required", message: "city is Required." },
            ],
            pickupstate: [
                { type: "required", message: "state is Required." },
            ],
            pickupcountry: [
                { type: "required", message: "country is Required." },
            ],
            pickuppostal_code: [
                { type: "required", message: "country is Required." },
            ],
            pickupaddress: [
                { type: "required", message: "address is Required." },
            ],
            pickupaddress2: [
                { type: "required", message: "address is Required." },
            ],
            WareHousefname: [
                { type: "required", message: 'First Name is Required' }
            ],
            WareHouselname: [
                { type: "required", message: 'lname is Required' }
            ],
            WareHousemobile: [
                { type: "required", message: "mobile Number  is required." },
                { type: "minlength", message: "minimun length should be 10 ." },
                { type: "maxlength", message: "maximum length should be 12 ." }
            ],
            WareHouseemail: [
                { type: "required", message: 'Email is Required' },
                { type: "pattern", message: 'Please Enter valid Email' }
            ],
            WareHousecity: [
                { type: "required", message: "city is Required." },
            ],
            WareHousestate: [
                { type: "required", message: "state is Required." },
            ],
            WareHousecountry: [
                { type: "required", message: "country is Required." },
            ],
            WareHousepostal_code: [
                { type: "required", message: "country is Required." },
            ],
            WareHouseaddress: [
                { type: "required", message: "address is Required." },
            ],
            WareHouseaddress2: [
                { type: "required", message: "address is Required." },
            ],
            weight: [
                { type: "required", message: "weight is Required." },
            ],
            height: [
                { type: "required", message: "height is Required." },
            ],
            width: [
                { type: "required", message: "width is Required." },
            ],
            length: [
                { type: "required", message: "length is Required." },
            ],
            package_items: [
                { type: "required", message: "package_items is Required." },
            ],
            no_of_packages: [
                { type: "required", message: "no_of_packages is Required." },
            ],
        };
        this.pickupForm = this.formBuilder.group({
            pickupfname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickuplname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickupmobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
            ])),
            pickupemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            ])),
            pickupcity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickupstate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickupcountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickuppostal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickupaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            pickupaddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHousefname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHouselname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHousemobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
            ])),
            WareHouseemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            ])),
            WareHousecity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHousestate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHousecountry: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHousepostal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHouseaddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            WareHouseaddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            length: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            width: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            package_items: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            no_of_packages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    PickupComponent.prototype.pickup = function () {
        var _this = this;
        var tracking_no = new Date().getTime();
        console.log(tracking_no);
        this.params = {
            "pickupfname": this.pickupForm.controls.pickupfname.value,
            "pickuplname": this.pickupForm.controls.pickuplname.value,
            "pickupmobile": this.pickupForm.controls.pickupmobile.value,
            "pickupemail": this.pickupForm.controls.pickupemail.value,
            "pickupcity": this.pickupForm.controls.pickupcity.value,
            "pickupstate": this.pickupForm.controls.pickupstate.value,
            "pickupcountry": this.pickupForm.controls.pickupcountry.value,
            "pickuppostal_code": this.pickupForm.controls.pickuppostal_code.value,
            "pickupaddress": this.pickupForm.controls.pickupaddress.value,
            "pickupaddress2": this.pickupForm.controls.pickupaddress2.value,
            "WareHousefname": this.pickupForm.controls.WareHousefname.value,
            "WareHouselname": this.pickupForm.controls.WareHouselname.value,
            "WareHousemobile": this.pickupForm.controls.WareHousemobile.value,
            "WareHouseemail": this.pickupForm.controls.WareHouseemail.value,
            "WareHousecity": this.pickupForm.controls.WareHousecity.value,
            "WareHousestate": this.pickupForm.controls.WareHousestate.value,
            "WareHousecountry": this.pickupForm.controls.WareHousecountry.value,
            "WareHousepostal_code": this.pickupForm.controls.WareHousepostal_code.value,
            "WareHouseaddress": this.pickupForm.controls.WareHouseaddress.value,
            "WareHouseaddress2": this.pickupForm.controls.WareHouseaddress2.value,
            "weight": this.pickupForm.controls.weight.value,
            "length": this.pickupForm.controls.length.value,
            "width": this.pickupForm.controls.width.value,
            "height": this.pickupForm.controls.height.value,
            "package_items": this.pickupForm.controls.package_items.value,
            "no_of_packages": this.pickupForm.controls.no_of_packages.value,
            "tracking_no": tracking_no
        };
        //console.log(this.params)
        return new Promise(function (resolve, reject) {
            _this.http.post("https://api.80startups.com/parcel/createPickup", _this.params).subscribe(function (result) {
                console.log("result", result);
                _this.router.navigateByUrl('/DashBorad');
            }, function (err) {
                console.log(err);
                alert("please enter email ");
                // reject(err);
            });
        });
    };
    PickupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PickupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pickup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pickup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pickup/pickup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pickup.component.css */ "./src/app/pages/pickup/pickup.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PickupComponent);
    return PickupComponent;
}());



/***/ }),

/***/ "./src/app/pages/prohibited-items/prohibited-items.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/prohibited-items/prohibited-items.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2hpYml0ZWQtaXRlbXMvcHJvaGliaXRlZC1pdGVtcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/prohibited-items/prohibited-items.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/prohibited-items/prohibited-items.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProhibitedItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProhibitedItemsComponent", function() { return ProhibitedItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProhibitedItemsComponent = /** @class */ (function () {
    function ProhibitedItemsComponent() {
    }
    ProhibitedItemsComponent.prototype.ngOnInit = function () {
    };
    ProhibitedItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prohibited-items',
            template: __importDefault(__webpack_require__(/*! raw-loader!./prohibited-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prohibited-items/prohibited-items.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./prohibited-items.component.css */ "./src/app/pages/prohibited-items/prohibited-items.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProhibitedItemsComponent);
    return ProhibitedItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/shipping-calculator/shipping-calculator.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shipping-calculator/shipping-calculator.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NoaXBwaW5nLWNhbGN1bGF0b3Ivc2hpcHBpbmctY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/shipping-calculator/shipping-calculator.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/shipping-calculator/shipping-calculator.component.ts ***!
  \****************************************************************************/
/*! exports provided: ShippingCalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingCalculatorComponent", function() { return ShippingCalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ShippingCalculatorComponent = /** @class */ (function () {
    function ShippingCalculatorComponent() {
    }
    ShippingCalculatorComponent.prototype.ngOnInit = function () {
    };
    ShippingCalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping-calculator',
            template: __importDefault(__webpack_require__(/*! raw-loader!./shipping-calculator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shipping-calculator/shipping-calculator.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./shipping-calculator.component.css */ "./src/app/pages/shipping-calculator/shipping-calculator.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingCalculatorComponent);
    return ShippingCalculatorComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/pages/user-profile/user-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map