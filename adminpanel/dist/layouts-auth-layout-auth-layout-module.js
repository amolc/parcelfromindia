(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"header-body\">\r\n        <!-- Card stats -->\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Page content -->\r\n  <div class=\"container-fluid mt--7\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"card shadow border-0\">\r\n          \r\n  <div class=\"container clearfix py-5\">\r\n    <div class=\"m-portlet__head\">\r\n        <div class=\"m-portlet__head-caption\">\r\n           <div class=\"m-portlet__head-title\">\r\n              <h3 class=\"m-portlet__head-text\">\r\n                One Step Away From Getting Your Loved Stuff!\r\n              </h3>\r\n           </div>\r\n        </div>\r\n    </div>\r\n     \r\n    <div class=\"container clearfix divcenter\" style=\"max-width: 900px;\">\r\n       <div class=\" nobottommargin\">\r\n        <form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed\" autocomplete=\"off\"  [formGroup]=\"addresForm\">\r\n            <div class=\"m-portlet__body\">\r\n                <div class=\"form-group m-form__group row\">\r\n                    <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\r\n                       <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\r\n                             BILLING ADDRESS\r\n                       </span><br>\r\n                        <div style=\"margin-top:25px; margin-left:15px;color:#db1a20;\"><p>All fields are mandatory</p></div>\r\n                    </div>\r\n                 </div>\r\n               <div class=\"form-group m-form__group row\">\r\n                   \r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                       \r\n                     <label>\r\n                     First Name: \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"fname\" id=\"fname\"  formControlName=\"fname\" required >\r\n                 </div>\r\n                 <ng-container *ngFor=\"let error of error_messages.fname\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('fname').hasError(error.type) &&\r\n                    (addresForm.get('fname').dirty || addresForm.get('fname').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     Last Name: \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter last name\" name=\"lname\" id=\"lname\" formControlName=\"lname\" required >\r\n                    </div>\r\n                    <ng-container *ngFor=\"let error of error_messages.lname\">\r\n                       <div class=\"error-message\" *ngIf=\"addresForm.get('lname').hasError(error.type) &&\r\n                       (addresForm.get('lname').dirty || addresForm.get('lname').touched)\">\r\n                           {{ error.message }}\r\n                       </div>\r\n                   </ng-container>\r\n               </div>\r\n              <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-12 col-md-10\">\r\n                     <label>\r\n                       address \r\n                     </label>\r\n                    <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"address\" id=\"address\" formControlName=\"address\" required ></textarea>\r\n                                                        \r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.address\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('address').hasError(error.type) &&\r\n                    (addresForm.get('address').dirty || addresForm.get('address').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n               </div>\r\n              <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-12 col-md-10\">\r\n                     <label>\r\n                    2nd address \r\n                     </label>\r\n                    <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"address2\" id=\"address2\" formControlName=\"address2\" required ></textarea>\r\n                                                        \r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.address2\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('address2').hasError(error.type) &&\r\n                    (addresForm.get('address2').dirty || addresForm.get('address2').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n               </div>  \r\n               \r\n                  <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                     <label>\r\n                     City  \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"city\" id=\"city\" formControlName=\"city\"  required >\r\n                     <ng-container *ngFor=\"let error of error_messages.city\">\r\n                       <div class=\"error-message\" *ngIf=\"addresForm.get('city').hasError(error.type) &&\r\n                       (addresForm.get('city').dirty || addresForm.get('city').touched)\">\r\n                           {{ error.message }}\r\n                       </div>\r\n                   </ng-container>\r\n                     <div class=\"clearfix\"></div>\r\n                        \r\n\r\n\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     State \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"state\" id=\"state\" formControlName=\"state\" required >\r\n                      \r\n                    </div>\r\n                    <ng-container *ngFor=\"let error of error_messages.state\">\r\n                       <div class=\"error-message\" *ngIf=\"addresForm.get('state').hasError(error.type) &&\r\n                       (addresForm.get('state').dirty || addresForm.get('state').touched)\">\r\n                           {{ error.message }}\r\n                       </div>\r\n                   </ng-container>\r\n               </div>\r\n               <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                     <label>\r\n                      Country  \r\n                     </label>\r\n                     <input type=\"text\" name=\"country\" id=\"country\" class=\"form-control\" required formControlName=\"country\"  >\r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.country\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('country').hasError(error.type) &&\r\n                    (addresForm.get('country').dirty || addresForm.get('country').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     postcode \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode\" name=\"postal_code\" id=\"postal_code\" formControlName=\"postal_code\" required >\r\n                      <div class=\"clearfix\"></div>    \r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.postal_code\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('postal_code').hasError(error.type) &&\r\n                    (addresForm.get('postal_code').dirty || addresForm.get('postal_code').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n              </div>\r\n               <div class=\"form-group m-form__group row topgap\">\r\n                  \r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     Mobile Number \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter your mobile number\" name=\"mobile\" id=\"mobile\" formControlName=\"mobile\"  required >\r\n                  </div>\r\n               </div>\r\n               <ng-container *ngFor=\"let error of error_messages.mobile\">\r\n                 <div class=\"error-message\" *ngIf=\"addresForm.get('mobile').hasError(error.type) &&\r\n                 (addresForm.get('mobile').dirty || addresForm.get('mobile').touched)\">\r\n                     {{ error.message }}\r\n                 </div>\r\n             </ng-container>\r\n                \r\n               <div class=\"form-group m-form__group row\">\r\n                  <div class=\"m-radio-inline\" style=\"margin-top: 20px;\">\r\n                     \r\n                     <label>\r\n                     Is Shipping Address Same As Billing Address? \r\n                     <span></span>\r\n                     </label>\r\n                      <label class=\"m-radio\">\r\n                         <input type=\"radio\" name=\"same\" class=\"same\" id=\"same\" value=\"yes\"  (click)=\"checkvalue($event)\">\r\n                     Yes\r\n                     <span></span>\r\n                     </label>\r\n                     <label class=\"m-radio\">\r\n                         <input type=\"radio\" name=\"same\" class=\"same\" id=\"same\" value=\"no\"  (click)=\"checkvalue($event)\">\r\n                         \r\n                     No\r\n                     <span></span>\r\n                     </label>\r\n                  </div>\r\n               </div>\r\n                \r\n               <div class=\"form-group m-form__group row\">\r\n                <div class=\"m-radio-inline\" style=\"margin-top: 15px;\">\r\n                   <span class=\"m-badge m-badge--primary m-badge--wide m-badge--rounded\" style=\"margin-left: 10px; font-size: 1.2rem;font-family: 'Montserrat'; width: 200px;padding: 12px; background-color:burlywood; \">\r\n                         SHIPPING ADDRESS\r\n                   </span>\r\n                </div>\r\n             </div>\r\n               <div class=\"form-group m-form__group row\">\r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                     <label>\r\n                     First Name\r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter first name\" name=\"shipping_fname\" id=\"shipping_fname\" value=\"{{fname==null?null:fname}}\"  required formControlName=\"shipping_fname\"  required>\r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.shipping_fname\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_fname').hasError(error.type) &&\r\n                    (addresForm.get('shipping_fname').dirty || addresForm.get('shipping_fname').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     Last Name\r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter last name\" name=\"shipping_lname\" id=\"shipping_lname\" value=\"{{lname==null?null:lname}}\" formControlName=\"shipping_lname\" required >     \r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.shipping_lname\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_lname').hasError(error.type) &&\r\n                    (addresForm.get('shipping_lname').dirty || addresForm.get('shipping_lname').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n               </div>\r\n                  <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-12 col-md-10\">\r\n                     <label>\r\n                       Shipping Address1\r\n                     </label>\r\n                    <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter House/Flat Number, Building Name/ Apartment Name\" name=\"shipping_address\" id=\"shipping_address\" value=\"{{address==null?null:address}}\" formControlName=\"shipping_address\" required ></textarea>\r\n                  </div>\r\n                 </div>\r\n                 <ng-container *ngFor=\"let error of error_messages.shipping_address\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_address').hasError(error.type) &&\r\n                    (addresForm.get('shipping_address').dirty || addresForm.get('shipping_address').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-12 col-md-10\">\r\n                     <label>\r\n                       Shipping Address2\r\n                     </label>\r\n                    <textarea type=\"text\" rows=\"4\" class=\"form-control\" placeholder=\"Please enter Street Name, Locality\" name=\"shipping_address2\" id=\"shipping_address2\" value=\"{{address2==null?null:address2}}\" formControlName=\"shipping_address2\" required ></textarea>                                     \r\n                  </div>\r\n               </div>\r\n               <ng-container *ngFor=\"let error of error_messages.shipping_address2\">\r\n                 <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_address2').hasError(error.type) &&\r\n                 (addresForm.get('shipping_address2').dirty || addresForm.get('shipping_address2').touched)\">\r\n                     {{ error.message }}\r\n                 </div>\r\n             </ng-container>\r\n               \r\n                  <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                     <label>\r\n                     City   \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter City\" name=\"shipping_city\" id=\"shipping_city\" value=\"{{city==null?null:city}}\" formControlName=\"shipping_city\" required >\r\n                      <div class=\"clearfix\"></div>\r\n                 </div>\r\n                 <ng-container *ngFor=\"let error of error_messages.shipping_city\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_city').hasError(error.type) &&\r\n                    (addresForm.get('shipping_city').dirty || addresForm.get('shipping_city').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     State \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter state name\" name=\"shipping_state\" id=\"shipping_state\" value=\"{{state==null?null:state}}\" formControlName=\"shipping_state\" required >\r\n                 </div>\r\n                 <ng-container *ngFor=\"let error of error_messages.shipping_state\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_state').hasError(error.type) &&\r\n                    (addresForm.get('shipping_state').dirty || addresForm.get('shipping_state').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n               </div>\r\n               <div class=\"form-group m-form__group row topgap\">\r\n                  <div class=\"col-lg-6 col-md-4\">\r\n                    <label>\r\n                       Country   \r\n                       </label>\r\n                   <input type=\"text\" name=\"shipping_country\" id=\"shipping_country\" class=\"form-control\" value=\"{{country==null?null:country}}\"  formControlName=\"shipping_country\" required>\r\n                 </div>\r\n                 <ng-container *ngFor=\"let error of error_messages.shipping_country\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_country').hasError(error.type) &&\r\n                    (addresForm.get('shipping_country').dirty || addresForm.get('shipping_country').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     postcode \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter postcode \" name=\"shipping_postal_code\" id=\"shipping_postal_code\" value=\"{{postal_code==null?null:postal_code}}\" formControlName=\"shipping_postal_code\" required >\r\n                      <div class=\"clearfix\"></div>\r\n                  </div>\r\n                  <ng-container *ngFor=\"let error of error_messages.shipping_postal_code\">\r\n                    <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_postal_code').hasError(error.type) &&\r\n                    (addresForm.get('shipping_postal_code').dirty || addresForm.get('shipping_postal_code').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n               </div>\r\n               \r\n          <div class=\"form-group m-form__group row topgap\"> \r\n                  <div class=\"col-lg-6 col-md-4 topgap\">\r\n                     <label class=\"\">\r\n                     Mobile Number \r\n                     </label>\r\n                     <input type=\"text\" class=\"form-control m-input\" placeholder=\"Enter your mobile number\" name=\"shipping_mobile\" id=\"shipping_mobile\" value=\"{{mobile==null?null:mobile}}\" formControlName=\"shipping_mobile\" required >\r\n                 </div>\r\n           </div>\r\n           <ng-container *ngFor=\"let error of error_messages.shipping_mobile\">\r\n              <div class=\"error-message\" *ngIf=\"addresForm.get('shipping_mobile').hasError(error.type) &&\r\n              (addresForm.get('shipping_mobile').dirty || addresForm.get('shipping_mobile').touched)\">\r\n                  {{ error.message }}\r\n              </div>\r\n          </ng-container>\r\n               \r\n               <div class=\"m-form__actions m-form__actions\" style=\"text-align: center;\">\r\n                   <button  type=\"submit\" class=\"btn btn-primary\" (click)=\"addres()\" >\r\n                  Save\r\n                  </button>\r\n               </div>\r\n            </div>\r\n         </form>\r\n       </div>\r\n       <!-- .postcontent end -->\r\n    </div>\r\n  </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\"> login or create new account .</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small> sign in </small>\r\n          </div>\r\n          <form [formGroup]=\"loginForm\">\r\n            <div class=\"form-group mb-3\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required\r\n                  formControlName=\"email\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.email\">\r\n                  <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) &&\r\n                    (loginForm.get('email').dirty || loginForm.get('email').touched)\">\r\n                    {{ error.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required\r\n                  formControlName=\"password\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.password\">\r\n                  <div class=\"error-message\"\r\n                    *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                    {{ error.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Project_id\" name=\"project_id\" id=\"project_id\"\r\n                  required formControlName=\"project_id\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.project_id\">\r\n                  <div class=\"error-message\"\r\n                    *ngIf=\"loginForm.get('project_id').hasError(error.type) && (loginForm.get('project_id').dirty || loginForm.get('project_id').touched)\">\r\n                    {{ error.message }}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"doLogin()\">Sign in</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n          <a [routerLink]=\"['/reset']\" class=\"text-light\"><small>Forgot password?</small></a>\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\"> login or create new account .</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <!-- Table -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6 col-md-8\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        \r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small> sign up </small>\r\n          </div>\r\n          <form [formGroup]=\"signUpForm\" (ngSubmit)=\"doRegister()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter First Name\" name=\"fname\" id=\"fname\" required\r\n            formControlName=\"fname\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.fname\">\r\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('fname').hasError(error.type) &&\r\n            (signUpForm.get('fname').dirty || signUpForm.get('fname').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Last Name\" name=\"lname\" id=\"lname\" required\r\n            formControlName=\"lname\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.lname\">\r\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('lname').hasError(error.type) &&\r\n            (signUpForm.get('lname').dirty || signUpForm.get('lname').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter mobile\" name=\"mobile\" id=\"mobile\" required formControlName=\"mobile\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.mobile\">\r\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('mobile').hasError(error.type) &&\r\n            (signUpForm.get('mobile').dirty || signUpForm.get('mobile').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required formControlName=\"email\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.email\">\r\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('email').hasError(error.type) &&\r\n            (signUpForm.get('email').dirty || signUpForm.get('email').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required formControlName=\"password\">\r\n              </div>\r\n              <div>\r\n                <ng-container *ngFor=\"let error of error_messages.password\">\r\n                    <div class=\"error-message\" *ngIf=\"signUpForm.get('password').hasError(error.type) &&\r\n            (signUpForm.get('password').dirty || signUpForm.get('password').touched)\">\r\n                        {{ error.message }}\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            </div>\r\n            <!-- <input type=\"hidden\" placeholder=\"enter the project_id \" name=\"psw\" id=\"psw\" required formControlName=\"project_id\"> -->\r\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\r\n            <div class=\"row my-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=signUpForm.invalid>Create account</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpassword/resetpassword.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n    <div class=\"container\">\r\n      <div class=\"header-body text-center mb-7\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-5 col-md-6\">\r\n            <h1 class=\"text-white\">Welcome!</h1>\r\n            <p class=\"text-lead text-light\">reset account .</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n  <!-- Page content -->\r\n  <div class=\"container mt--8 pb-5\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-5 col-md-7\">\r\n        <div class=\"card bg-secondary shadow border-0\">\r\n          \r\n          <div class=\"card-body px-lg-5 py-lg-5\">\r\n            <div class=\"text-center text-muted mb-4\">\r\n              <small> reset password</small>\r\n            </div>\r\n            <form [formGroup]=\"loginForm\">\r\n              <div class=\"form-group mb-3\">\r\n                <div class=\"input-group input-group-alternative\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                  </div>\r\n                  <input class=\"form-control\"  type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required formControlName=\"email\">\r\n                </div>\r\n                <div>\r\n                  <ng-container *ngFor=\"let error of error_messages.email\">\r\n                      <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(error.type) &&\r\n                      (loginForm.get('email').dirty || loginForm.get('email').touched)\">\r\n                          {{ error.message }}\r\n                      </div>\r\n                  </ng-container>\r\n              </div>\r\n              </div>\r\n              \r\n              \r\n              <div class=\"text-center\">\r\n                <button type=\"button\" class=\"btn btn-primary my-4\" (click)=\"doLogin()\">RESET</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-6\">\r\n            <a [routerLink]=\"['/login']\" class=\"text-light\"><small>Login</small></a>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <a [routerLink]=\"['/register']\" class=\"text-light\"><small>Create new account</small></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

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
    { path: 'addaddress', component: _pages_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_2__["AddAddressComponent"] },
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
        };
        //console.log(this.params);
        return new Promise(function (resolve, reject) {
            _this.http.post("https://api.80startups.com/shipping/createShipping", _this.params).subscribe(function (result) {
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
            project_id: [
                { type: "required", message: 'Project_id is Required' }
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
            project_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ])),
        });
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.params = {
            "email": this.loginForm.value.email,
            "password": this.loginForm.value.password,
            "project_id": this.loginForm.value.project_id,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("https://api.80startups.com/auth/loginUser/" + _this.params.project_id, _this.params).subscribe(function (result) {
                console.log(result, "result");
                localStorage.setItem('token', JSON.stringify(result['users'].tokens));
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
            project_id: [
                { type: "required", message: "Project_id is Required." },
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
            //"project_id": 1,
            "project_id": this.signUpForm.controls.project_id.value,
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("https://api.80startups.com/user/createUser", _this.params).subscribe(function (result) {
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