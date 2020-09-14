(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

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
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
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
                _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__["ResetpasswordComponent"]
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
/* harmony import */ var _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/resetpassword/resetpassword.component */ "./src/app/pages/resetpassword/resetpassword.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'reset', component: _pages_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordComponent"] },
];


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