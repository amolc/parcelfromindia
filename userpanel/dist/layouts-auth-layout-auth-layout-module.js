(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow border-0\">\n\n        <div class=\"container clearfix py-5\">\n          <div class=\"m-portlet__head\">\n            <div class=\"m-portlet__head-caption\">\n              <div class=\"m-portlet__head-title\">\n                <h3 class=\"m-portlet__head-text\">\n                  One Step Away From Getting Your Loved Stuff!\n                </h3>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"container clearfix divcenter\" style=\"max-width: 900px;\">\n            <div class=\" nobottommargin\">\n              <form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\"\n                autocomplete=\"off\" [formGroup]=\"addresForm\" (ngSubmit)=\"addres()\">\n                <div class=\"m-portlet__body\">\n                  <div class=\"form-group m-form__group row\">\n                    <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\n                      <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\"\n                        style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\n                        BILLING ADDRESS\n                      </span><br>\n                      <div style=\"margin-top:25px; margin-left:15px;color:#db1a20;\">\n                        <p>All fields are mandatory</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group m-form__group row\">\n\n                    <div class=\"col-lg-6 col-md-4\">\n\n                      <label>\n                        First Name:\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"fname\"\n                        id=\"fname\" formControlName=\"fname\">\n                      <ng-container *ngFor=\"let error of error_messages.fname\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('fname').hasError(error.type) &&\n                    (addresForm.get('fname').dirty || addresForm.get('fname').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        Last Name:\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter last name\" name=\"lname\"\n                        id=\"lname\" formControlName=\"lname\">\n                      <ng-container *ngFor=\"let error of error_messages.lname\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('lname').hasError(error.type) &&\n                       (addresForm.get('lname').dirty || addresForm.get('lname').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                        address\n                      </label>\n                      <textarea type=\"text\" rows=\"4\" class=\"form-control\"\n                        placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"address\"\n                        id=\"address\" formControlName=\"address\"></textarea>\n                      <ng-container *ngFor=\"let error of error_messages.address\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('address').hasError(error.type) &&\n                    (addresForm.get('address').dirty || addresForm.get('address').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                        2nd address\n                      </label>\n                      <textarea type=\"text\" rows=\"4\" class=\"form-control\"\n                        placeholder=\"Please enter Street Name, Locality\" name=\"address2\" id=\"address2\"\n                        formControlName=\"address2\"></textarea>\n\n                    </div>\n                    <ng-container *ngFor=\"let error of error_messages.address2\">\n                      <div class=\"error-message\" *ngIf=\"addresForm.get('address2').hasError(error.type) &&\n                    (addresForm.get('address2').dirty || addresForm.get('address2').touched)\">\n                        {{ error.message }}\n                      </div>\n                    </ng-container>\n                  </div>\n\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                        City\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"city\" id=\"city\"\n                        formControlName=\"city\">\n                      <ng-container *ngFor=\"let error of error_messages.city\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('city').hasError(error.type) &&\n                       (addresForm.get('city').dirty || addresForm.get('city').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                      <div class=\"clearfix\"></div>\n\n\n\n                    </div>\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        State\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"state\"\n                        id=\"state\" formControlName=\"state\">\n                      <ng-container *ngFor=\"let error of error_messages.state\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('state').hasError(error.type) &&\n                       (addresForm.get('state').dirty || addresForm.get('state').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                        Country\n                      </label>\n                      <input type=\"text\" name=\"country\" id=\"country\" class=\"form-control\" formControlName=\"country\">\n                      <ng-container *ngFor=\"let error of error_messages.country\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('country').hasError(error.type) &&\n                    (addresForm.get('country').dirty || addresForm.get('country').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        postcode\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"postal_code\"\n                        id=\"postal_code\" formControlName=\"postal_code\">\n                      <ng-container *ngFor=\"let error of error_messages.postal_code\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('postal_code').hasError(error.type) &&\n                    (addresForm.get('postal_code').dirty || addresForm.get('postal_code').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                      <div class=\"clearfix\"></div>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        Mobile Number\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter your mobile number\"\n                        name=\"mobile\" id=\"mobile\" formControlName=\"mobile\">\n                      <ng-container *ngFor=\"let error of error_messages.mobile\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('mobile').hasError(error.type) &&\n                 (addresForm.get('mobile').dirty || addresForm.get('mobile').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n                  </div>\n\n\n                  <div class=\"form-group m-form__group row\">\n                    <div class=\"m-radio-inline\" style=\"margin-top: 20px;\">\n\n                      <label>\n                        Is Shipping Address Same As Billing Address?\n                        <span></span>\n                      </label>\n                      <label class=\"m-radio\">\n                        <input type=\"radio\" name=\"same\" class=\"same\" id=\"same\" value=\"yes\" (click)=\"checkvalue($event)\">\n                        Yes\n                        <span></span>\n                      </label>\n                      <label class=\"m-radio\">\n                        <input type=\"radio\" name=\"same\" class=\"same\" id=\"same\" value=\"no\" (click)=\"checkvalue($event)\">\n\n                        No\n                        <span></span>\n                      </label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group m-form__group row\">\n                    <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\n                      <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\"\n                        style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\n                        SHIPPING ADDRESS\n                      </span>\n                    </div>\n                  </div>\n                  <div class=\"form-group m-form__group row\">\n                    <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                        First Name\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\"\n                        name=\"shipping_fname\" id=\"shipping_fname\" value=\"{{fname==null?null:fname}}\"\n                        formControlName=\"shipping_fname\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_fname\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_fname').hasError(error.type) &&\n                    (addresForm.get('shipping_fname').dirty || addresForm.get('shipping_fname').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        Last Name\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter last name\"\n                        name=\"shipping_lname\" id=\"shipping_lname\" value=\"{{lname==null?null:lname}}\"\n                        formControlName=\"shipping_lname\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_lname\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_lname').hasError(error.type) &&\n                    (addresForm.get('shipping_lname').dirty || addresForm.get('shipping_lname').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                        Shipping Address1\n                      </label>\n                      <textarea type=\"text\" rows=\"4\" class=\"form-control\"\n                        placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\"\n                        name=\"shipping_address\" id=\"shipping_address\" value=\"{{address==null?null:address}}\"\n                        formControlName=\"shipping_address\" required></textarea>\n                    </div>\n                  </div>\n                  <ng-container *ngFor=\"let error of error_messages.shipping_address\">\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_address').hasError(error.type) &&\n                    (addresForm.get('shipping_address').dirty || addresForm.get('shipping_address').touched)\">\n                      {{ error.message }}\n                    </div>\n                  </ng-container>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-12 col-md-10\">\n                      <label>\n                        Shipping Address2\n                      </label>\n                      <textarea type=\"text\" rows=\"4\" class=\"form-control\"\n                        placeholder=\"Please enter Street Name, Locality\" name=\"shipping_address2\" id=\"shipping_address2\"\n                        value=\"{{address2==null?null:address2}}\" formControlName=\"shipping_address2\"\n                        required></textarea>\n                    </div>\n                  </div>\n                  <ng-container *ngFor=\"let error of error_messages.shipping_address2\">\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_address2').hasError(error.type) &&\n                 (addresForm.get('shipping_address2').dirty || addresForm.get('shipping_address2').touched)\">\n                      {{ error.message }}\n                    </div>\n                  </ng-container>\n\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                        City\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"shipping_city\"\n                        id=\"shipping_city\" value=\"{{city==null?null:city}}\" formControlName=\"shipping_city\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_city\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_city').hasError(error.type) &&\n                    (addresForm.get('shipping_city').dirty || addresForm.get('shipping_city').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                      <div class=\"clearfix\"></div>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        State\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\"\n                        name=\"shipping_state\" id=\"shipping_state\" value=\"{{state==null?null:state}}\"\n                        formControlName=\"shipping_state\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_state\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_state').hasError(error.type) &&\n                    (addresForm.get('shipping_state').dirty || addresForm.get('shipping_state').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-6 col-md-4\">\n                      <label>\n                        Country\n                      </label>\n                      <input type=\"text\" name=\"shipping_country\" id=\"shipping_country\" class=\"form-control\"\n                        value=\"{{country==null?null:country}}\" formControlName=\"shipping_country\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_country\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_country').hasError(error.type) &&\n                    (addresForm.get('shipping_country').dirty || addresForm.get('shipping_country').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        postcode\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode \"\n                        name=\"shipping_postal_code\" id=\"shipping_postal_code\"\n                        value=\"{{postal_code==null?null:postal_code}}\" formControlName=\"shipping_postal_code\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_postal_code\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_postal_code').hasError(error.type) &&\n                    (addresForm.get('shipping_postal_code').dirty || addresForm.get('shipping_postal_code').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                      <div class=\"clearfix\"></div>\n                    </div>\n\n                  </div>\n\n                  <div class=\"form-group m-form__group row topgap\">\n                    <div class=\"col-lg-6 col-md-4 topgap\">\n                      <label class=\"\">\n                        Mobile Number\n                      </label>\n                      <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter your mobile number\"\n                        name=\"shipping_mobile\" id=\"shipping_mobile\" value=\"{{mobile==null?null:mobile}}\"\n                        formControlName=\"shipping_mobile\">\n                      <ng-container *ngFor=\"let error of error_messages.shipping_mobile\">\n                        <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_mobile').hasError(error.type) &&\n              (addresForm.get('shipping_mobile').dirty || addresForm.get('shipping_mobile').touched)\">\n                          {{ error.message }}\n                        </div>\n                      </ng-container>\n                    </div>\n                  </div>\n\n\n                  <div class=\"m-form__actions m-form__actions\" style=\"text-align: center;\">\n                    <button type=\"submit\" class=\"btn btn-primary\">\n                      Save\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <!-- .postcontent end -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\"> login or create new account .</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small> sign in </small>\n          </div>\n          <form [formGroup]=\"loginForm\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required\n                  formControlName=\"email\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.email\">\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) &&\n                    (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                    {{ error.message }}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required\n                  formControlName=\"password\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.password\">\n                  <div class=\"error-message\"\n                    *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                    {{ error.message }}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"doLogin()\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <a [routerLink]=\"['/reset']\" class=\"text-light\"><small>Forgot password?</small></a>\n        </div>\n        <div class=\"col-6 text-right\">\n          <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\"> login or create new account .</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        \n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small> sign up </small>\n          </div>\n          <form [formGroup]=\"signUpForm\" (ngSubmit)=\"doRegister()\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter First Name\" name=\"fname\" id=\"fname\" required\n            formControlName=\"fname\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.fname\">\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('fname').hasError(error.type) &&\n            (signUpForm.get('fname').dirty || signUpForm.get('fname').touched)\">\n                        {{ error.message }}\n                    </div>\n                </ng-container>\n            </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Last Name\" name=\"lname\" id=\"lname\" required\n            formControlName=\"lname\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.lname\">\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('lname').hasError(error.type) &&\n            (signUpForm.get('lname').dirty || signUpForm.get('lname').touched)\">\n                        {{ error.message }}\n                    </div>\n                </ng-container>\n            </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter mobile\" name=\"mobile\" id=\"mobile\" required formControlName=\"mobile\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.mobile\">\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('mobile').hasError(error.type) &&\n            (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched)\">\n                        {{ error.message }}\n                    </div>\n                </ng-container>\n            </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required formControlName=\"email\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('email').hasError(error.type) &&\n            (signUpForm.get('email').dirty || signUpForm.get('email').touched)\">\n                        {{ error.message }}\n                    </div>\n                </ng-container>\n            </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required formControlName=\"password\">\n              </div>\n              <div>\n                <ng-container *ngFor=\"let error of error_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('password').hasError(error.type) &&\n            (signUpForm.get('password').dirty || signUpForm.get('password').touched)\">\n                        {{ error.message }}\n                    </div>\n                </ng-container>\n            </div>\n            </div>\n            <!-- <input type=\"hidden\" placeholder=\"enter the project_id \" name=\"psw\" id=\"psw\" required formControlName=\"project_id\"> -->\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=signUpForm.invalid>Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-7\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6\">\n            <h1 class=\"text-white\">Welcome!</h1>\n            <p class=\"text-lead text-light\">reset account .</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <!-- Page content -->\n  <div class=\"container mt--8 pb-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-secondary shadow border-0\">\n          \n          <div class=\"card-body px-lg-5 py-lg-5\">\n            <div class=\"text-center text-muted mb-4\">\n              <small> reset password</small>\n            </div>\n            <form [formGroup]=\"loginForm\">\n              <div class=\"form-group mb-3\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input class=\"form-control\"  type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required formControlName=\"email\">\n                </div>\n                <div>\n                  <ng-container *ngFor=\"let error of error_messages.email\">\n                      <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) &&\n                      (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                          {{ error.message }}\n                      </div>\n                  </ng-container>\n              </div>\n              </div>\n              \n              \n              <div class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"doLogin()\">RESET</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class=\"row mt-3\">\n          <div class=\"col-6\">\n            <a [routerLink]=\"['/login']\" class=\"text-light\"><small>Login</small></a>\n          </div>\n          <div class=\"col-6 text-right\">\n            <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/add-address/add-address.component */ "./src/app/pages/add-address/add-address.component.ts");
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import { RouterModule } from '@angular/router';




var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // NgbModule
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _pages_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_8__["AddAddressComponent"],
                _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_9__["ResetpasswordComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/add-address/add-address.component */ "./src/app/pages/add-address/add-address.component.ts");
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'shipment', component: _pages_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_2__["AddAddressComponent"] },
    { path: 'reset', component: _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordComponent"] },
];


/***/ }),

/***/ "./src/app/pages/add-address/add-address.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-address/add-address.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/add-address/add-address.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/add-address/add-address.component.ts ***!
  \************************************************************/
/*! exports provided: AddAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressComponent", function() { return AddAddressComponent; });
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




var AddAddressComponent = /** @class */ (function () {
    function AddAddressComponent(formBuilder, http, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.router = router;
        this.error_messages = {};
        this.fname = '';
        this.lname = '';
        this.address = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.mobile = '';
        this.postal_code = '';
        this.setupAddressFormData();
    }
    AddAddressComponent.prototype.checkvalue = function (event) {
        if (event.target.value == 'yes') {
            //this.addressForm.value.fname=this.addressForm.value.fname
            //this.addressForm.value.fname=this.addressForm.value.fname
            (this.fname = this.addresForm.controls.fname.value),
                (this.lname = this.addresForm.controls.lname.value),
                (this.address = this.addresForm.controls.address.value),
                (this.address2 = this.addresForm.controls.address2.value),
                (this.city = this.addresForm.controls.city.value),
                (this.state = this.addresForm.controls.state.value),
                (this.country = this.addresForm.controls.country.value),
                (this.mobile = this.addresForm.controls.mobile.value),
                (this.postal_code = this.addresForm.controls.postal_code.value);
        }
        else {
            (this.fname = null),
                (this.lname = null),
                (this.address = null),
                (this.address2 = null),
                (this.city = null),
                (this.state = null),
                (this.country = null),
                (this.mobile = null),
                (this.postal_code = null);
        }
    };
    AddAddressComponent.prototype.setupAddressFormData = function () {
        this.error_messages = {
            fname: [{ type: 'required', message: 'First Name is Required' }],
            lname: [{ type: 'required', message: 'lname is Required' }],
            address: [{ type: 'required', message: 'address  is required.' }],
            address2: [{ type: 'required', message: 'address2  is required.' }],
            city: [{ type: 'required', message: 'city  is required.' }],
            state: [{ type: 'required', message: 'state  is required.' }],
            country: [{ type: 'required', message: 'country  is required.' }],
            postal_code: [{ type: 'required', message: 'postal code  is required.' }],
            mobile: [
                { type: 'required', message: 'mobile Number  is required.' },
                { type: 'minlength', message: 'minimun length should be 10 .' },
                { type: 'maxlength', message: 'maximum length should be 12 .' },
            ],
            shipping_fname: [{ type: 'required', message: 'First Name is Required' }],
            shipping_lname: [{ type: 'required', message: 'lname is Required' }],
            shipping_address: [{ type: 'required', message: 'address  is required.' }],
            shipping_address2: [{ type: 'required', message: 'address2  is required.' }],
            shipping_city: [{ type: 'required', message: 'city  is required.' }],
            shipping_state: [{ type: 'required', message: 'state  is required.' }],
            shipping_country: [{ type: 'required', message: 'country  is required.' }],
            shipping_postal_code: [
                { type: 'required', message: 'postal code  is required.' },
            ],
            shipping_mobile: [
                { type: 'required', message: 'mobile Number  is required.' },
                { type: 'minlength', message: 'minimun length should be 10 .' },
                { type: 'maxlength', message: 'maximum length should be 12 .' },
            ],
        };
        this.addresForm = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
            ])),
            shipping_fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])),
            shipping_mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
            ])),
        });
    };
    AddAddressComponent.prototype.ngOnInit = function () { };
    AddAddressComponent.prototype.addres = function () {
        var _this = this;
        this.params = {
            fname: this.addresForm.controls.fname.value,
            lname: this.addresForm.controls.lname.value,
            address: this.addresForm.controls.address.value,
            address2: this.addresForm.controls.address2.value,
            mobile: this.addresForm.controls.mobile.value,
            city: this.addresForm.controls.city.value,
            state: this.addresForm.controls.state.value,
            country: this.addresForm.controls.country.value,
            postal_code: this.addresForm.controls.postal_code.value,
            shipping_fname: this.addresForm.controls.shipping_fname.value == ''
                ? this.fname
                : this.addresForm.controls.shipping_fname.value,
            shipping_lname: this.addresForm.controls.shipping_lname.value == ''
                ? this.lname
                : this.addresForm.controls.shipping_lname.value,
            shipping_address: this.addresForm.controls.shipping_address.value == ''
                ? this.address
                : this.addresForm.controls.shipping_address.value,
            shipping_address2: this.addresForm.controls.shipping_address2.value == ''
                ? this.address2
                : this.addresForm.controls.shipping_address2.value,
            shipping_mobile: this.addresForm.controls.shipping_mobile.value == ''
                ? this.mobile
                : this.addresForm.controls.shipping_mobile.value,
            shipping_city: this.addresForm.controls.shipping_city.value == ''
                ? this.city
                : this.addresForm.controls.shipping_city.value,
            shipping_state: this.addresForm.controls.shipping_state.value == ''
                ? this.state
                : this.addresForm.controls.shipping_state.value,
            shipping_country: this.addresForm.controls.shipping_country.value == ''
                ? this.country
                : this.addresForm.controls.shipping_country.value,
            shipping_postal_code: this.addresForm.controls.shipping_postal_code.value == ''
                ? this.postal_code
                : this.addresForm.controls.shipping_postal_code.value,
            owner: "5f32ca5c8f33c3b541702c12"
        };
        console.log(this.params);
        return new Promise(function (resolve, reject) {
            _this.http.post("https://labs.80startups.com/api/v1/1/shipment/createshipment", _this.params).subscribe(function (result) {
                console.log("result", result);
                _this.router.navigateByUrl('/dashboard');
            }, function (err) {
                console.log(err);
                alert("please enter fill ");
                // reject(err);
            });
        });
    };
    AddAddressComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AddAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-address',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-address.component.css */ "./src/app/pages/add-address/add-address.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddAddressComponent);
    return AddAddressComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.error_messages = {};
        this.setupLoginFormData();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.setupLoginFormData = function () {
        this.error_messages = {
            email: [
                { type: "required", message: 'Email is Required' },
                { type: "pattern", message: 'Please Enter valid Email' }
            ],
            password: [
                { type: "required", message: 'Password is Required' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.params = {
            "email": this.loginForm.value.email,
            "password": this.loginForm.value.password,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("https://labs.80startups.com/api/v1/1/user/loginUser", _this.params).subscribe(function (result) {
                console.log(result, "result");
                // localStorage.setItem('token', JSON.stringify(result['users'].tokens))
                _this.router.navigateByUrl('/dashboard');
            }, function (err) {
                console.log(err);
                alert("please enter correct email and password");
            });
        });
    };
    LoginComponent.prototype.register = function () {
        console.log("register");
        this.router.navigateByUrl('/register');
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, formBuilder, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.error_messages = {};
        this.setupLoginFormData();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.setupLoginFormData = function () {
        this.error_messages = {
            fname: [
                { type: "required", message: 'First Name is Required' }
            ],
            lname: [
                { type: "required", message: 'lname is Required' }
            ],
            phone: [
                { type: "required", message: "Phone Number  is required." },
                { type: "minlength", message: "minimun length should be 10 ." },
                { type: "maxlength", message: "maximum length should be 12 ." }
            ],
            mobile: [
                { type: "required", message: "mobile Number  is required." },
                { type: "minlength", message: "minimun length should be 10 ." },
                { type: "maxlength", message: "maximum length should be 12 ." }
            ],
            email: [
                { type: "required", message: 'Email is Required' },
                { type: "pattern", message: 'Please Enter valid Email' }
            ],
            password: [
                { type: "required", message: "Password is Required." },
                { type: "minlength", message: "minimun length should be 8 ." },
                { type: "maxlength", message: "maximum length should be 12 ." }
            ],
            projectid: [
                { type: "required", message: "Password is Required." },
            ]
        };
        this.signUpForm = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)
            ])),
        });
    };
    RegisterComponent.prototype.doRegister = function () {
        var _this = this;
        this.params = {
            "fname": this.signUpForm.controls.fname.value,
            "lname": this.signUpForm.controls.lname.value,
            "mobile": this.signUpForm.controls.mobile.value,
            "email": this.signUpForm.controls.email.value,
            "password": this.signUpForm.controls.password.value,
            "projectid": "1",
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("https://labs.80startups.com/api/v1/1/user/createUser", _this.params).subscribe(function (result) {
                console.log("result", result);
                _this.router.navigateByUrl('/login');
            }, function (err) {
                console.log(err);
                alert("please enter email and password");
                // reject(err);
            });
        });
    };
    RegisterComponent.prototype.signin = function () {
        this.router.navigateByUrl('/login');
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/resetpassword/resetpassword.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/resetpassword/resetpassword.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/resetpassword/resetpassword.component.ts ***!
  \****************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
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




var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(router, formBuilder, http) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.error_messages = {};
        this.setupLoginFormData();
    }
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent.prototype.setupLoginFormData = function () {
        this.error_messages = {
            email: [
                { type: "required", message: 'Email is Required' },
                { type: "pattern", message: 'Please Enter valid Email' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
            ])),
        });
    };
    ResetpasswordComponent.prototype.doLogin = function () {
        var _this = this;
        this.params = {
            "email": this.loginForm.value.email,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("https://api.80startups.com/auth/loginUser/1", _this.params).subscribe(function (result) {
                console.log(result, "result");
                _this.router.navigateByUrl('/AddAddress');
            }, function (err) {
                console.log(err);
                alert("please enter correct email and password");
            });
        });
    };
    ResetpasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ResetpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __importDefault(__webpack_require__(/*! raw-loader!./resetpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/pages/resetpassword/resetpassword.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map