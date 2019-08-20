(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Material';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error500/error500.component */ "./src/app/error500/error500.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _showusers_showusers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./showusers/showusers.component */ "./src/app/showusers/showusers.component.ts");
/* harmony import */ var _friendstask_friendstask_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./friendstask/friendstask.component */ "./src/app/friendstask/friendstask.component.ts");
/* harmony import */ var _individualtasks_individualtasks_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./individualtasks/individualtasks.component */ "./src/app/individualtasks/individualtasks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"],
                _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__["Error500Component"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
                _showusers_showusers_component__WEBPACK_IMPORTED_MODULE_20__["ShowusersComponent"],
                _friendstask_friendstask_component__WEBPACK_IMPORTED_MODULE_21__["FriendstaskComponent"],
                _individualtasks_individualtasks_component__WEBPACK_IMPORTED_MODULE_22__["IndividualtasksComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'sign-in', component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"], pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'showusers', component: _showusers_showusers_component__WEBPACK_IMPORTED_MODULE_20__["ShowusersComponent"] },
                    { path: 'friendstask/:userId', component: _friendstask_friendstask_component__WEBPACK_IMPORTED_MODULE_21__["FriendstaskComponent"] },
                    { path: 'individualtasks/:userId', component: _individualtasks_individualtasks_component__WEBPACK_IMPORTED_MODULE_22__["IndividualtasksComponent"] },
                    { path: 'profile/:userId', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"] },
                    { path: '500', component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__["Error500Component"] },
                    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
                    { path: '**', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"], _socket_service__WEBPACK_IMPORTED_MODULE_15__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        //public url = 'http://localhost:3000';
        this.url = 'http://api.veeramakali.ga';
        //get userinfo from localstoreage
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        //set userInfo in local storage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    // get all countries
    AppService.prototype.getAllCountry = function () {
        var response = this.http.get("https://restcountries.eu/rest/v2/all");
        return response;
    };
    // get country form code
    AppService.prototype.getCountry = function (code) {
        var response = this.http.get("https://restcountries.eu/rest/v2/callingcode/" + code);
        return response;
    };
    //get all users
    AppService.prototype.getAllUsers = function () {
        var response = this.http.get(this.url + "/api/v1/users/view/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get users details
    AppService.prototype.getUserInfo = function (id) {
        var response = this.http.get(this.url + "/api/v1/users/" + id + "/details?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get info about users friends
    AppService.prototype.getUserFriends = function (friendsArray) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('friends', friendsArray)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/users/findFriend", params);
    };
    //signup 
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.forgotPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email);
        return this.http.post(this.url + "/api/v1/users/forgot-password", params);
    }; // end of forgotPasswordFunction function.
    // send invitation mail
    AppService.prototype.sendInvite = function (userId, email) {
        var response = this.http.post(this.url + "/api/v1/users/invitation?userId=" + userId + "&email=" + email, email);
        return response;
    };
    // Add invited friend to friends array
    AppService.prototype.addInviteFriend = function (userId, inviteId) {
        var response = this.http.post(this.url + "/api/v1/users/addInvitedFriend?userId=" + userId + "&inviteId=" + inviteId, inviteId);
        return response;
    };
    // remove friend to friends array
    AppService.prototype.unFriend = function (userId, friendId) {
        var response = this.http.post(this.url + "/api/v1/users/unFriend?userId=" + userId + "&friendId=" + friendId, friendId);
        return response;
    };
    // change password
    AppService.prototype.changePasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.put(this.url + "/api/v1/users/change-password", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'))
            .set('userId', data);
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    //Friends request
    AppService.prototype.request = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/request", params);
    };
    //Friends request
    AppService.prototype.requested = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/requested", params);
    };
    //add as friend
    AppService.prototype.addAsFriend = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/addAsFriend", params);
    };
    //get all tasks
    AppService.prototype.getAllTasks = function () {
        var response = this.http.get(this.url + "/api/v1/task/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //creating a task
    AppService.prototype.createTask = function (taskObj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('createdBy', taskObj.createdBy)
            .set('createdByUserId', taskObj.createdByUserId)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('type', taskObj.type)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/task/create", params);
    };
    //edit task
    AppService.prototype.editTask = function (taskObj) {
        // friendsList to store in history for undo purpose
        var friendList = this.getUserInfoFromLocalstorage().friends;
        friendList.push(this.getUserInfoFromLocalstorage().userId);
        friendList = taskObj.type === "public" ? friendList : this.getUserInfoFromLocalstorage().userId;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('type', taskObj.type)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('modifiedOn', taskObj.modifiedOn)
            .set('friends', friendList)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/task/" + taskObj.taskId + "/edit", params);
    }; // end of edit function.
    //delete task
    AppService.prototype.deleteTask = function (taskObj) {
        // friendsList to store in history for undo purpose
        var friendList = this.getUserInfoFromLocalstorage().friends;
        friendList.push(this.getUserInfoFromLocalstorage().userId);
        friendList = taskObj.type === "public" ? friendList : this.getUserInfoFromLocalstorage().userId;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('type', taskObj.type)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('modifiedOn', taskObj.modifiedOn)
            .set('friends', friendList)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/task/" + taskObj.taskId + "/delete", params);
    }; // end of delete task function
    //Undo tasks
    AppService.prototype.undo = function () {
        var response = this.http.get(this.url + "/api/v1/task/" + this.getUserInfoFromLocalstorage().userId + "/undo?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get notification for user
    AppService.prototype.getUserNotification = function (id) {
        var response = this.http.get(this.url + "/api/v1/task/" + id + "/notification?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/error404/error404.component.css":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-404{\n    background-image: url('404.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    height: -webkit-fill-available;\n}"

/***/ }),

/***/ "./src/app/error404/error404.component.html":
/*!**************************************************!*\
  !*** ./src/app/error404/error404.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-404\">\n</div>"

/***/ }),

/***/ "./src/app/error404/error404.component.ts":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error404Component = /** @class */ (function () {
    function Error404Component(router, _route) {
        this.router = router;
        this._route = _route;
    }
    Error404Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(["/sign-in"]);
        }, 6000);
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/error404/error404.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/error500/error500.component.css":
/*!*************************************************!*\
  !*** ./src/app/error500/error500.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n    margin-top: 15%;\n    font-size: 5em;\n}"

/***/ }),

/***/ "./src/app/error500/error500.component.html":
/*!**************************************************!*\
  !*** ./src/app/error500/error500.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h1 class=\"head mx-auto\">500!</h1>\n  </div>\n  <hr>\n  <p class=\"text-center\">Internal server error!</p>\n  <p class=\"text-center\">A team of highly trained monkeys has ben dispatched to deal with the sitution.</p>\n  <p class=\"text-center\">If you see them show them this information.</p>\n  <p class=\"text-center\">And don't forget to try again later!</p>\n</div>"

/***/ }),

/***/ "./src/app/error500/error500.component.ts":
/*!************************************************!*\
  !*** ./src/app/error500/error500.component.ts ***!
  \************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error500Component = /** @class */ (function () {
    function Error500Component(router, _route) {
        this.router = router;
        this._route = _route;
    }
    Error500Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/sign-in']);
        }, 4000);
    };
    Error500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error500',
            template: __webpack_require__(/*! ./error500.component.html */ "./src/app/error500/error500.component.html"),
            styles: [__webpack_require__(/*! ./error500.component.css */ "./src/app/error500/error500.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/friendstask/friendstask.component.css":
/*!*******************************************************!*\
  !*** ./src/app/friendstask/friendstask.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friendstask/friendstask.component.html":
/*!********************************************************!*\
  !*** ./src/app/friendstask/friendstask.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!userInfo\"></mat-progress-bar>\n\n\n\n\n<div class=\"container\">\n\n  <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n    <i class=\"material-icons\"> arrow_back </i>\n  </button>\n\n  <h1 class='text-center'>My Friends Tasks</h1>\n\n  <div class=\"row\">\n\n\n\n  </div>\n\n</div>\n\n\n\n\n\n<br>\n\n\n\n\n<div class='container'>\n  <!--<div class='row ' style=\"text-align:center\" *ngIf='users.length>0'>-->\n  <div class=\"row\">\n    <div *ngFor=\"let user of friends\" class='col-md-4'>\n      <div *ngIf=\"user.userId !== id\">\n\n        <mat-card class=\" mat-card-green-people\">\n          <p class=\"strong\">{{user.firstName}}</p>\n          <button [routerLink]=\"['/individualtasks',user.userId]\" *ngIf=\"userInfo.friends.includes(user.userId)\"\n            mat-raised-button class=\"mat-elevation-z8\" color='primary'>See the Tasks\n          </button>\n        </mat-card>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/friendstask/friendstask.component.ts":
/*!******************************************************!*\
  !*** ./src/app/friendstask/friendstask.component.ts ***!
  \******************************************************/
/*! exports provided: FriendstaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendstaskComponent", function() { return FriendstaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FriendstaskComponent = /** @class */ (function () {
    function FriendstaskComponent(location, SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.location = location;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
    }
    FriendstaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.appService.getUserInfoFromLocalstorage().userId;
        this.name = this.appService.getUserInfoFromLocalstorage().firstName;
        this.checkStatus();
        this.getUserDetails();
        setTimeout(function () {
            _this.getUsersFriends();
        }, 2000);
    };
    // get detail of current user
    FriendstaskComponent.prototype.getUserDetails = function () {
        var _this = this;
        var id = this._route.snapshot.params.userId;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            var countryCode = _this.userInfo.mobileNumber.split(" ");
            // getting country of user
            _this.getCountry(countryCode[1]);
            // getting phone no
            _this.userInfo.mobileNumber = countryCode[2];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get users friends 
    FriendstaskComponent.prototype.getUsersFriends = function () {
        var _this = this;
        this.appService.getUserFriends(this.userInfo.friends).subscribe(function (data) {
            var response = data;
            if (response.status === 200) {
                _this.friends = response.data;
            }
            else if (response.status === 404) {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get country of user
    FriendstaskComponent.prototype.getCountry = function (code) {
        var _this = this;
        this.appService.getCountry(code).subscribe(function (data) {
            _this.country = data[0].name;
        });
    };
    //remove user from friends array
    FriendstaskComponent.prototype.unFriend = function () {
        var _this = this;
        this.appService.unFriend(this.userInfo.userId, this.id).subscribe(function (data) {
            if (data['status'] === 200) {
                _this.snackBar.open("Friend has been removed from your friend's list", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.name,
                    senderId: _this.id,
                    receiverName: '',
                    receiverId: _this.userInfo.userId,
                    message: _this.name + " has unfriend you.",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 2000);
            }
            else {
                _this.snackBar.open("Some error occured in removing friend from friend's list", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    FriendstaskComponent.prototype.goBack = function () {
        this.location.back();
    };
    FriendstaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friendstask',
            template: __webpack_require__(/*! ./friendstask.component.html */ "./src/app/friendstask/friendstask.component.html"),
            styles: [__webpack_require__(/*! ./friendstask.component.css */ "./src/app/friendstask/friendstask.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], FriendstaskComponent);
    return FriendstaskComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 42.5%;\n    margin: 3%\n  }\n\n  span{\n      font-size: smaller;\n  }\n\n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .mat-card-green-people{\n    background: #acd8c9d6;\n    color: rgba(0,0,0,.54);\n    margin: 20px;\n  }\n\n  .people-search{\n      width: 100%;\n  }\n\n  .people-ul{\n      display: flex;\n      list-style: none;\n      overflow-x: auto;\n  }\n\n  .example-full-width {\n    width: 86%;\n  }\n\n  .example-full-width1 {\n    width: 83%;\n  }\n\n  .add-btn{\n      margin:3px;\n      margin-top: 30px;\n     \n  }\n\n  .head-up{\n    margin-top: 6% !important;\n  }\n\n  .head-down{\n    margin-bottom: 6% !important;\n\n  }\n\n  .head{\n      margin: 5% 0px;\n  }\n\n  .graph-card{\n      width: 100%\n  }\n\n  .card{\n      width: 100%;\n      height: 365px;\n      margin-bottom: 30px;\n\n  }\n\n  .add-task{\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      margin: 30px;\n\n      padding: 12px;\n      background: #3F51B5;\n      border: none;\n      border-radius: 51px;\n      color: white;\n  }\n\n  .add-task-mobile{\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 30px;\n  }\n\n  .email-input{\n      width: 60%\n  }\n\n  .mat-card-primary{\n    background-color: white;\n  }\n\n  .task-card{\n      width: 100%;\n  }\n\n  .task-head{\n    display: inline-block;\n    margin: 0px;\n    width: 86%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    \n  }\n\n  .costum-checkBox{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n  }\n\n  .costum-checkBox:hover{\n    text-decoration: line-through;\n  }\n\n  .task-ul{\n      height: 150px;\n      font-size: smaller;\n      list-style: none;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      overflow-y: scroll;\n      text-overflow: ellipsis;\n      padding: 0px;\n  }\n\n  .task-ul::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n}\n\n  .subtask-ul{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.85em;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABsFBMVEUAAADlcGHqinjmgHHjZFDiaFXebVrpd2bmf23ZbFruUTbwVTruUjTqWTruXEPtYU3tVD3iX0flaFLlem3wf3HsUTXvUzftTTDtUTLnTS7wVjzuTS7wUTjuW0LvTTHsV0HrUjfsWUDzWUTsVD7rVj7vVj3wbFHnWEbra1Lxcl7mVkLnVj7pYk34bVX4YUjlXUryaVrsZVTeXErxb1rsWkftZ1brcljoemPfYU/dZVb7iXXtXEbcbVvrbVr1lpLmlHznSEP0X0nqQybxTzXuTS3wSzDnVTXlSC/sUTnzaEfmWDjnSTTwWTrpUjnuXUjuTDPxVz3lWjrrYkrwVDfgUDLmZVLoVUTiUTvoZ0/uc1zlWUb3embfbE71Z1bsVD3jWzzxYlXwXEXkV0vcZVbdZ1bteGfvTi71cWbzTjD5iGvndGH2gWrxcGPpeF/kg3PqemfnWEH2iXzabV/0b1rQhn3WY1bIXU/0UjrwlovlSjXzSy3wTTLvTTDxVDjxPBvzSCn0OxrtUjbvUDTzRSXxQiTrPh3yUTPuSi31SivrRynwRSf1Rib0QR/uTzf4QyP3PR22rECmAAAAenRSTlMALwoFZ0wsIxUM7efbzsejmpZbHhD9+/v49vHu5+Pg2NjTzsjEuKSempaSi4aEgH16dXRvbWtfWVNJQkFAPjkxCPf39fTy8ePi393Z19DNy8rJv766tbWurKqlnpuXlpaSioJ1bGtpYmFfVk1KREA6ODc3MSsrKSQhHg3m++gAAAGCSURBVCjPdc1lT/MAFIbhu+3cDXd3d+d1d3fF3aFdO8flL0PIyFjW3t9Orpw8ZBrxuyLho1jp1yFyMzkiiTsfWtp8blXO7yI74flpnkkCSQRCLfJjIetVjgQItpYfqnmxB+/M0FzYkdHuaDnUncjOht7Z6eYKuUhgpejvjc6fVjN6mGiwpG+bTx3H/miO64JJF4NR1zqZhG2wvdgAoEpjWaslp+EvAKPRKZJOdPIFgIpj6lO7ejz2GWyRHpJt6OYdo+uYviP0a/rFy/sUVxlwr4d4PYrJgJfKOOgXVasBTziJj+zcmzRgi4PwsLVYNODVfJQFsSxkwP0KJX249wy4UcHtpW7AgB0emp7R2aivQsKM5Uy0eSRdrlGAgu98+6+na1or0HlAqNqaq1JBCQDqe2ae5vIrbRyAxegAvx/as9H+WuuB636kNvHeDdxWc+HFP276lJqge79ykHRDtef7ZjJ9fCJhrZHjb362t/95q5zI/uytrUnA4i+Nha+q7AiS7hJhtUjTU6UrxgAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n    background-size: 18px;\n    cursor: default !important;\n}\n\n  .subtask-ul:hover{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: default !important;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAQlBMVEUAAAAnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2xG1CEaAAAAFXRSTlMAqnzrjIRLHtXNwZlWPScNB+G0aF7WnooZAAAAYElEQVQY052OSRKAIAwEo6AooODS//+qC7nATfuSydTUJPKLPKytddA3Tg9D7QTakIfzmZalGM6gsiO8c4TNicpZi3dRHOQ7W50yJJkglk3LuglTPT0CXmpmrDREm+QzF4WMA9vRiMqfAAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n    background-size: 18px;\n }\n\n  .div-width{\n    width: 75%;\n}\n\n  @media screen and (max-width: 450px) {\n    .task-head{\n        display: inline-block;\n        margin: 0px;\n        width: 220px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .div-width{\n        width: 100%;\n    }\n  }\n\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #3f51b5 !important;\n    color: black !important;\n    cursor: default;\n}\n\n  .add-details{\n    margin-top: 20px;\n}\n\n  .sortBtn{\n    margin: 5px\n}\n\n  /* Amimations */\n\n  .anime{\n    -webkit-animation: Animation 4s forwards 0s ease;\n            animation: Animation 4s forwards 0s ease;\n\n  }\n\n  @-webkit-keyframes Animation{\n    0%{\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n        opacity: 0;\n        }\n    83%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 0.5;\n        }\n    100%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 1;\n        }\n}\n\n  @keyframes Animation{\n    0%{\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n        opacity: 0;\n        }\n    83%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 0.5;\n        }\n    100%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 1;\n        }\n}\n\n  .anime1{\n  -webkit-animation: Animation1 2s forwards 0s ease;\n          animation: Animation1 2s forwards 0s ease;\n\n}\n\n  @-webkit-keyframes Animation1{\n  0%{\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\n            transform: rotate(0) scale(0.5) skewY(-25deg);\n    opacity: 0.5;\n    }\n100%{\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\n            transform: rotate(0) scale(1) skewY(0deg);\n    opacity: 1;\n    }\n}\n\n  @keyframes Animation1{\n  0%{\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\n            transform: rotate(0) scale(0.5) skewY(-25deg);\n    opacity: 0.5;\n    }\n100%{\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\n            transform: rotate(0) scale(1) skewY(0deg);\n    opacity: 1;\n    }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- The Modal  For Creating task-->\n    <div class=\"modal fade\" id=\"myModal\">\n        <div class=\"modal-dialog modal-dialog-centered\">\n            <div class=\"modal-content\" style=\"background: #acd8c9d6\">\n\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Create task</h4>\n                    <mat-slide-toggle color=\"primary\" checked=\"checked\" [(ngModel)]=\"private\" *ngIf='!editMode'>\n                        Private\n                    </mat-slide-toggle>\n                    <button mat-icon-button *ngIf='editMode' matTooltip='Delete Task?' color='primary'\n                        data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\"\n                        aria-controls=\"collapseExample\"><i class=\"material-icons\">delete_outline</i></button>\n\n                </div>\n                <div class=\"collapse\" id=\"collapseExample\">\n                    <div class=\"card-body\">\n                        Do you want to delete this tasklist? <button mat-raised-button\n                            class=\"mat-elevation-z8 add-btn float-right\" color='primary' (click)=\"deleteTask()\"\n                            data-dismiss=\"modal\">Yes!</button>\n                    </div>\n                </div>\n\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n\n                    <mat-form-field>\n                        <input matInput placeholder=\"Title\" type=\"text\" [(ngModel)]=\"title\">\n                    </mat-form-field>\n                    <button mat-raised-button class=\"mat-elevation-z8 add-btn float-right\" color='primary'\n                        (click)='addTask()' data-dismiss=\"modal\"><i class=\"material-icons\">\n                            done_outline\n                        </i></button>\n                    <hr>\n                    <div *ngFor='let x of taskNumberIds; let i = index'>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Task{{i+1}}\" type=\"text\" [(ngModel)]=\"this['subtask' + x]\">\n                        </mat-form-field>\n\n\n                        <div *ngIf=\"this['subtask' + x]\">\n                            <div\n                                *ngFor=\"let detail of [1, 2, 3, 4, 5]; let j = index; let first = first; let last = last\">\n                                <mat-expansion-panel [expanded]=\"step === detail\" (opened)=\"setStep(detail)\" hideToggle>\n                                    <mat-expansion-panel-header>\n                                        <mat-panel-title>\n                                            SubTask:{{detail}}\n                                        </mat-panel-title>\n                                        <mat-panel-description>\n                                            {{ this['detail' + i + detail ] }}\n                                        </mat-panel-description>\n                                    </mat-expansion-panel-header>\n\n                                    <mat-form-field class=\"example-full-width1\">\n                                        <input matInput placeholder=\"Detail {{detail}}\" type=\"text\"\n                                            [(ngModel)]=\"this['detail' + i + detail ]\">\n                                    </mat-form-field>\n\n                                    <button *ngIf=\"!last\" mat-icon-button color=\"primary\" class=\"float-right \"\n                                        (click)=\"nextStep()\"> <i class=\"material-icons\">\n                                            add\n                                        </i></button>\n                                    <mat-action-row *ngIf=\"last\">\n                                        <button mat-button color=\"warn\" (click)=\"prevStep()\"> <i class=\"material-icons\">\n                                                keyboard_arrow_up\n                                            </i></button>\n                                    </mat-action-row>\n                                </mat-expansion-panel>\n                            </div>\n                            <!-- Epansion panel for adding details endds here -->\n                        </div>\n                        <hr>\n                        <br>\n\n                    </div>\n                    <div class='float-right'>\n\n                        <button *ngIf='count != 10' mat-mini-fab class=\"mat-elevation-z8 add-btn\" color='primary'\n                            (click)='add()'> <i class=\"material-icons\">\n                                add\n                            </i></button>\n\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button mat-raised-button class=\"mat-elevation-z8\" color='primary' data-dismiss=\"modal\">\n                        <i class=\"material-icons\">\n                            close\n                        </i></button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- end of modal -->\n\n\n\n    <!-- Modal  for notification-->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notification</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!notifications\"></mat-progress-bar>\n\n                    <div *ngIf=\"notifications\" class=\"container\">\n                        <div class=\"row\" *ngFor=\"let notify of notifications.slice().reverse()\">\n\n                            <h6 class=\"lift-up\">\n                                <i class=\"material-icons\">list_alt</i>\n\n                                {{ notify }}</h6>\n                            <hr>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button mat-raised-button color=\"primary\" class=\"btn btn-secondary\"\n                        data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <mat-progress-bar mode=\"indeterminate\" value=\"40\" *ngIf=\"!users && !userInfo\"></mat-progress-bar>\n\n        <div class=\"container\">\n            <div class=\"row\" style=\"margin-top:10px\">\n                <div class=\"ml-auto\">\n\n                    Welcome, <span *ngIf=\"userInfo\"><b>{{userInfo.firstName}}</b></span> &nbsp;&nbsp;|\n                    <button mat-icon-button matTooltip=\"Notification\" data-toggle=\"modal\" data-target=\"#exampleModal\"><i\n                            class=\"material-icons\" matBadge=\"{{notificationCount}}\" color=\"primary\"\n                            matBadgeOverlap=\"true\" (click)='clearCount()'>\n                            notifications_none </i></button>\n\n                    | <button [routerLink]=\"['/showusers']\" mat-icon-button (click)=\"ngOnInit()\"\n                        matTooltip=\"Show All Users\"> <i class=\"material-icons\">supervisor_account </i></button>\n                    | &nbsp;&nbsp;\n                    <button mat-raised-button class=\"mat-elevation-z8\" (click)=\"logout()\">\n                        Logout\n                    </button>\n\n\n                </div>\n\n            </div>\n\n\n\n\n\n            <!-- Heading  -->\n            <h2 class=\"text-center head-up\">My Tasks</h2>\n\n            <br>\n\n            <div *ngIf=\"users && userInfo\" class=\"row\">\n\n                <div *ngFor=\"let user of users\">\n\n                    <div class='text-center'>\n\n\n                        <button [routerLink]=\"['/friendstask',user.userId]\" *ngIf=\"user.userId === id\" mat-raised-button\n                            class=\"mat-elevation-z8\" matTooltip=\"Show Friends Tasks\" color='primary'><i\n                                class=\"material-icons\">\n                                account_circle\n                            </i></button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <mat-spinner *ngIf='!tasks && !empty' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n            <!-- card in case of no tasks -->\n            <mat-card class=\"text-center\" *ngIf='empty && !tasks'>\n                <h4>{{empty}}</h4>\n                <button mat-icon-button (click)=\"ngOnInit()\"> <i class=\"material-icons\">refresh </i></button>\n            </mat-card>\n\n            <div *ngIf='tasks' class=\"row\">\n\n                <div class='col-md-12'>\n\n\n\n                    <div class=\"text-center\">\n                        <!-- pgination \n                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n                        <mat-form-field>\n                            <input matInput placeholder=\"Search for Tasks\" type=\"text\" [(ngModel)]=\"filter\">\n                        </mat-form-field>\n                    </div>\n\n\n                </div>\n\n\n\n            </div>\n\n            <hr>\n\n            <button mat-raised-button class=\"mat-elevation-z8 float-right\" color='primary' matTooltip=\"Ctrl + Z\"\n                (click)='undo()'><i class=\"material-icons\">undo</i></button>\n\n            <!-- for loop starts here -->\n            <div class=\"row\"\n                *ngFor='let task of tasks  | orderBy: key : reverse | filter:filter  | paginate: { itemsPerPage: 12, currentPage: p }'\n                style=\"margin-top:60px\">\n\n\n                <!-- card for pusblic tasks -->\n                <!--|| userInfo.friends.includes(task.createdByUserId)\"-->\n                <div *ngIf=\"task.type === 'public' && userId === task.createdByUserId\" class=\"mx-auto div-width\">\n\n                    <mat-card class=\"card mat-card-primary task-card mat-elevation-z8\">\n                        <h4 class=\"task-head\">{{ task.title }}</h4>\n                        <button mat-icon-button matTooltip=\"Edit\" color=\"primary\"\n                            *ngIf=\"userId === task.createdByUserId || userInfo.friends.includes(task.createdByUserId)\"\n                            class=\"float-right\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editValue(task)\">\n                            <i class=\"material-icons\">\n                                edit\n                            </i>\n                        </button>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Created By:</span>\n                            <span class=\"mx-auto\"><b>{{ task.createdBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n                        </div>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Modified By:</span>\n                            <span class=\"mx-auto\"><b>{{ task.modifiedBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.modifiedOn | date:'medium'}}</b></span>\n                        </div>\n                        <hr>\n                        <ul class=\"task-ul\">\n                            <li *ngFor='let subtask of task.tasks; let i = index'>\n                                <mat-checkbox matTooltip=\"Mark Complete\" class=\"example-margin\" color=\"primary\"\n                                    (change)=\"taskChecked(task,i)\"\n                                    [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n                                    {{ subtask.task }}\n                                </mat-checkbox>\n\n                                <ul>\n                                    <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\"\n                                            (click)=\"subtaskChecked(task, i, j)\"\n                                            [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n                                            {{x}}\n                                        </button>\n\n                                    </li>\n                                </ul>\n                                <hr>\n                            </li>\n                        </ul>\n                    </mat-card>\n                </div>\n\n                <!-- Card for private tasks of user -->\n                <div *ngIf=\"task.type === 'private' && userId === task.createdByUserId\" class=\"mx-auto div-width\">\n\n                    <mat-card class=\"card mat-card-green mat-elevation-z8\">\n                        <h4 class=\"task-head\">{{ task.title }}</h4>\n                        <button mat-icon-button color=\"link\" (click)=\"editValue(task)\" data-toggle=\"modal\"\n                            data-target=\"#myModal\" class=\"float-right\" matTooltip=\"Edit\">\n                            <i class=\"material-icons\">\n                                edit\n                            </i>\n                        </button>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Created By:</span>\n                            <span class=\"ml-auto\"><b>{{ task.createdBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n                        </div>\n\n                        <hr>\n                        <ul class=\"task-ul\">\n                            <li *ngFor='let subtask of task.tasks; let i = index'>\n                                <mat-checkbox class=\"example-margin\" color=\"basic\" (click)=\"taskChecked(task,i)\"\n                                    matTooltip=\"Mark Complete\">\n                                    {{ subtask.task }}\n                                </mat-checkbox>\n\n                                <ul>\n\n                                    <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\"\n                                            (click)=\"subtaskChecked(task, i, j)\">\n                                            {{x}}\n                                        </button>\n\n                                    </li>\n                                </ul>\n                                <hr>\n                            </li>\n                        </ul>\n                    </mat-card>\n                </div>\n            </div>\n            <!-- end of task row -->\n        </div>\n        <div class=\"col-md-12 text-center\">\n            <!-- pagination -->\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n\n    </div>\n\n    <!-- Add task Button -->\n    <button class=\"mat-elevation-z8 add-task d-none d-md-block\" color='primary' data-toggle=\"modal\"\n        data-target=\"#myModal\" (click)=\"clear(); editModeOff()\" matTooltip=\"Add a Task\">Add Task\n        <i class=\"material-icons\" style=\"font-size : 14px\">\n            add\n        </i></button>\n\n    <!-- add task button for mobile -->\n    <button mat-mini-fab class=\"mat-elevation-z8 add-task-mobile d-xs-inline d-sm-inline d-md-none\" color='primary'\n        data-toggle=\"modal\" (click)=\"clear(); editModeOff()\" data-target=\"#myModal\"><i class=\"material-icons\"\n            matTooltip=\"Add a Task\">\n            add\n        </i></button>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        //initializing p to one
        this.p = 1;
        //sorting
        this.key = 'createdOn';
        this.reverse = false;
        this.pageSize = 10;
        this.userList = [];
        // task variables
        this.private = false;
        this.spinner = false;
        this.taskCreationUpdate = false;
        this.editMode = false;
        this.step = 0;
        // Modal for create and update tasklist variables
        this.count = 1;
        this.taskNumberIds = [1];
        //notification related variables
        this.notifications = [];
        this.notificationCount = null;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList =>', _this.userList);
            }); // end online-user-list
        };
        /////////////////////////////////////////Noyification related code//////////////////////////////////
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
                console.log("Inside get notify");
                // pushing data to notification array
                _this.notifications.push(message.message);
                _this.notificationCount++;
                _this.getUserDetails(_this.userId);
                _this.getALLUsers();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        // get notifications related task changes done by friends
        this.getTaskChanges = function () {
            _this.SocketService.taskChanges().subscribe(function (data) {
                if (data.receiverId.includes(_this.userId)) {
                    var message = data;
                    _this.snackBar.open("" + message.message, "Dismiss", {
                        duration: 5000,
                    });
                    // pushing data to notification array
                    _this.notifications.push(message.message);
                    //playing notification sound.
                    _this.audio = new Audio();
                    _this.audio.src = "../../../assets/light.mp3";
                    _this.audio.load();
                    _this.audio.play();
                    _this.notificationCount++;
                }
                _this.getAllTasks();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        ///////////////////////////////////////Task related code///////////////////////////////////
        // get all tasks
        this.getAllTasks = function () {
            _this.appService.getAllTasks().subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.tasks = data['data'];
                }
                else if (data['status'] === 404) {
                    _this.empty = data['message'];
                }
                else {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; //end of get all task
        //create task function or edit task and make api request
        this.addTask = function () {
            _this.taskList = [];
            if (_this.title) {
                _this.spinner = true;
                var taskObj_1 = {
                    taskId: '',
                    title: _this.title,
                    type: '',
                    tasks: [],
                    createdByUserId: _this.userId,
                    createdBy: _this.userInfo.firstName,
                    modifiedBy: _this.userInfo.firstName,
                    modifiedOn: Date.now(),
                };
                // handling private or public task
                if (_this.private == true) {
                    taskObj_1.type = 'private';
                }
                else {
                    taskObj_1.type = 'public';
                }
                // Mapping all the NgModels to TaskObj to send them to backend
                for (var i = 1; i <= 10; i++) {
                    if (_this["subtask" + i]) {
                        var taskDetailsObj = {
                            task: _this["subtask" + i],
                            status: "pending",
                            subtask: []
                        };
                        for (var j = 1; j <= 5; j++) {
                            if (_this["detail" + (i - 1) + j]) {
                                taskDetailsObj.subtask.push(_this["detail" + (i - 1) + j]);
                            }
                        }
                        taskObj_1.tasks.push(taskDetailsObj);
                    }
                }
                if (_this.editMode === false) {
                    //If edit mode is false the create task
                    _this.appService.createTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 2000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has created " + _this.title + " tasklist.",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    }); //end of create task
                }
                else {
                    taskObj_1.taskId = _this.taskId;
                    taskObj_1.modifiedBy = _this.userInfo.firstName;
                    //If edit mode is true then edit task
                    _this.appService.editTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("Task Edited!", "Dismiss", {
                                duration: 5000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has Edited " + taskObj_1.title + " tasklist. ",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    });
                } //end of edit task
            }
            else {
                _this.snackBar.open("Please enter title", "Dismiss", {
                    duration: 2000,
                });
            }
        };
        // logout Function
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; // end logout
    }
    HomeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    //checking for keypress to undo
    HomeComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.getModifierState && event.getModifierState('Control') && event.keyCode === 90) {
            this.undo();
        }
    }; //end of host listener
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.appService.getUserInfoFromLocalstorage().userId;
        this.checkStatus();
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.createVariable();
        this.getNotify();
        this.getTaskChanges();
        this.getUserDetails(this.userId);
        //this.invitation = `http://localhost:4200/sign-up?userId=${this.userId}`;
        this.invitation = "http://veeramakali.ga/sign-up?userId=" + this.userId;
        //on purpose Delay to ensure perfromance at OnInit
        setTimeout(function () {
            _this.getAllTasks();
        }, 1000);
        setTimeout(function () {
            _this.checkForInvitation();
        }, 6000);
        setTimeout(function () {
            _this.getALLUsers();
        }, 4000);
        setTimeout(function () {
            _this.getNotification(_this.userId);
        }, 8000);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    //undo button
    HomeComponent.prototype.undo = function () {
        var _this = this;
        this.appService.undo().subscribe(function (data) {
            _this.undoData = data;
            if (_this.undoData.status == 200) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
                // sending notification
                var notifyObject = {
                    type: "public",
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: '',
                    receiverId: '',
                    message: _this.userInfo.firstName + " has Undo a tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                _this.getAllTasks();
            }
            else if (_this.undoData.status == 404) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("Some Error occured", "Dismiss", {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // create variable for task details (subtasks variables)
    HomeComponent.prototype.createVariable = function () {
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j];
            }
        }
    };
    // Get all users
    HomeComponent.prototype.getALLUsers = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (data) {
            _this.users = data['data'];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // get detail of current user
    HomeComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            setTimeout(function () {
                _this.appService.setUserInfoInLocalStorage(_this.userInfo);
            }, 2000);
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    // adding user to requested array of the friend .
    //adding friend to request array of the user.
    HomeComponent.prototype.addAsFriend = function (id, name) {
        var _this = this;
        // send friends request
        this.appService.request(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has sent you friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // add user to pending or requested array
        this.appService.requested(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // Add request user to friends array
    HomeComponent.prototype.addToFriend = function (id, name) {
        var _this = this;
        // add friend to friends array
        this.appService.addAsFriend(id, this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has accepted your friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // nested form
    HomeComponent.prototype.remove = function (i) {
        this.count--;
    };
    HomeComponent.prototype.add = function () {
        this.taskNumberIds.push(++this.count);
    };
    // Main taask check function
    HomeComponent.prototype.taskChecked = function (task, i) {
        var _this = this;
        var taskObj = task;
        var removedTask = task.tasks[i].task;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        setTimeout(function () {
            task.tasks.splice(i, 1);
            _this.appService.editTask(taskObj).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Task Completed!", "Dismiss", {
                        duration: 5000,
                    });
                    // sending notification
                    var notifyObject = {
                        type: taskObj.type,
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: taskObj.createdBy,
                        receiverId: taskObj.createdByUserId,
                        message: _this.userInfo.firstName + " has Checked \" " + removedTask + " \" task from\" " + taskObj.title + " \" tasklist. ",
                        createdOn: Date.now()
                    };
                    _this.SocketService.taskNotify(notifyObject);
                    // refreshing
                    _this.getAllTasks();
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }, 500);
    };
    // Subtask check function
    HomeComponent.prototype.subtaskChecked = function (task, i, j) {
        var _this = this;
        var taskObj = task;
        var removedSubtask = task.tasks[i].subtask[j];
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        task.tasks[i].subtask.splice(j, 1);
        this.appService.editTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("SubTask Completed!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Checked \" " + removedSubtask + " \" from \" " + taskObj.title + " \" tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of subtask check.
    //function for pre render value to form for editing values
    HomeComponent.prototype.editValue = function (task) {
        var _this = this;
        // setting this variable for passing to delete task function
        this.taskDetailsToEdit = task;
        this.editMode = true;
        this.clear();
        // this.count = this.taskDetailsToEdit.tasks.length;
        this.title = task.title;
        this.taskId = task.taskId;
        if (task.type == 'private') {
            this.private = true;
        }
        else {
            this.private = false;
        }
        var i = 1;
        task.tasks.map(function (x) {
            _this["subtask" + i] = x.task;
            x.subtask.filter(function (y) {
                for (var j = 1; j <= 5; j++) {
                    _this["detail" + (i - 1) + j] = x.subtask[j - 1];
                }
            });
            i++;
        });
    };
    // delete task function
    HomeComponent.prototype.deleteTask = function () {
        var _this = this;
        var taskObj = this.taskDetailsToEdit;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        this.appService.deleteTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("Task Deleted!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Deleted " + taskObj.title + " tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of delete task.
    //code to get last 10 notification
    HomeComponent.prototype.getNotification = function (id) {
        var _this = this;
        this.appService.getUserNotification(id).subscribe(function (data) {
            var response = data['data'];
            _this.notifications = [];
            if (response != null) {
                response.map(function (x) {
                    _this.notifications.unshift(x.message);
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    ////////////////////////////////add details/////////////////////////////////
    HomeComponent.prototype.editModeOff = function () {
        this.editMode = false;
    };
    HomeComponent.prototype.clear = function () {
        this.private = false;
        this.title = '';
        this.count = 1;
        this.taskNumberIds = [1];
        for (var i = 1; i <= 10; i++) {
            this["subtask" + i] = '';
        }
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j] = '';
            }
        }
    };
    // clearing notification count
    HomeComponent.prototype.clearCount = function () {
        this.notificationCount = null;
    };
    //code for mat-expansion panel in the modal for subtasks
    HomeComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HomeComponent.prototype.nextStep = function () {
        this.step++;
    };
    HomeComponent.prototype.prevStep = function () {
        this.step--;
    };
    // send invitation mail
    HomeComponent.prototype.sendInvitationMail = function () {
        var _this = this;
        this.appService.sendInvite(this.userId, this.mail).subscribe(function (data) {
            var response = data;
            if (response['status'] === 200) {
                _this.snackBar.open("Invitation mail sent successfully", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("Some error occured", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    //copy to clipboard
    HomeComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open("Invitation link copied successfully", "Dismiss", {
            duration: 5000,
        });
    };
    //check for invitation
    HomeComponent.prototype.checkForInvitation = function () {
        var _this = this;
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId')) {
            var inviteId_1 = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId');
            this.appService.addInviteFriend(this.userId, inviteId_1).subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.snackBar.open("Friend added to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('inviteId');
                    // sending notification
                    var notifyObject = {
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: '',
                        receiverId: inviteId_1,
                        message: "You are now friend with " + _this.userInfo.firstName,
                        createdOn: new Date()
                    };
                    _this.SocketService.sendNotify(notifyObject);
                    _this.getUserDetails(_this.userId);
                }
                else {
                    _this.snackBar.open("Some error occured in adding invited friend to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "handleKeyboardEvent", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]] //very important line if not included socket code will not hit for first time.
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}()); // end of export class



/***/ }),

/***/ "./src/app/individualtasks/individualtasks.component.css":
/*!***************************************************************!*\
  !*** ./src/app/individualtasks/individualtasks.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 42.5%;\r\n    margin: 3%\r\n  }\r\n\r\n  span{\r\n      font-size: smaller;\r\n  }\r\n\r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-card-green-people{\r\n    background: #acd8c9d6;\r\n    color: rgba(0,0,0,.54);\r\n    margin: 20px;\r\n  }\r\n\r\n  .people-search{\r\n      width: 100%;\r\n  }\r\n\r\n  .people-ul{\r\n      display: flex;\r\n      list-style: none;\r\n      overflow-x: auto;\r\n  }\r\n\r\n  .example-full-width {\r\n    width: 86%;\r\n  }\r\n\r\n  .example-full-width1 {\r\n    width: 83%;\r\n  }\r\n\r\n  .add-btn{\r\n      margin:3px;\r\n      margin-top: 30px;\r\n     \r\n  }\r\n\r\n  .head-up{\r\n    margin-top: 6% !important;\r\n  }\r\n\r\n  .head-down{\r\n    margin-bottom: 6% !important;\r\n\r\n  }\r\n\r\n  .head{\r\n      margin: 5% 0px;\r\n  }\r\n\r\n  .graph-card{\r\n      width: 100%\r\n  }\r\n\r\n  .card{\r\n      width: 100%;\r\n      height: 365px;\r\n      margin-bottom: 30px;\r\n\r\n  }\r\n\r\n  .add-task{\r\n      position: fixed;\r\n      bottom: 0;\r\n      right: 0;\r\n      margin: 30px;\r\n\r\n      padding: 12px;\r\n      background: #3F51B5;\r\n      border: none;\r\n      border-radius: 51px;\r\n      color: white;\r\n  }\r\n\r\n  .add-task-mobile{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin: 30px;\r\n  }\r\n\r\n  .email-input{\r\n      width: 60%\r\n  }\r\n\r\n  .mat-card-primary{\r\n    background-color: white;\r\n  }\r\n\r\n  .task-card{\r\n      width: 100%;\r\n  }\r\n\r\n  .task-head{\r\n    display: inline-block;\r\n    margin: 0px;\r\n    width: 86%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    \r\n  }\r\n\r\n  .costum-checkBox{\r\n    background: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n  }\r\n\r\n  .costum-checkBox:hover{\r\n    text-decoration: line-through;\r\n  }\r\n\r\n  .task-ul{\r\n      height: 150px;\r\n      font-size: smaller;\r\n      list-style: none;\r\n      width: 100%;\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      overflow-y: scroll;\r\n      text-overflow: ellipsis;\r\n      padding: 0px;\r\n  }\r\n\r\n  .task-ul::-webkit-scrollbar {\r\n    width: 0px;  /* remove scrollbar space */\r\n    background: transparent;  /* optional: just make scrollbar invisible */\r\n}\r\n\r\n  .subtask-ul{\r\n    list-style: none;\r\n    padding-left: 50px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    font-size: 0.85em;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABsFBMVEUAAADlcGHqinjmgHHjZFDiaFXebVrpd2bmf23ZbFruUTbwVTruUjTqWTruXEPtYU3tVD3iX0flaFLlem3wf3HsUTXvUzftTTDtUTLnTS7wVjzuTS7wUTjuW0LvTTHsV0HrUjfsWUDzWUTsVD7rVj7vVj3wbFHnWEbra1Lxcl7mVkLnVj7pYk34bVX4YUjlXUryaVrsZVTeXErxb1rsWkftZ1brcljoemPfYU/dZVb7iXXtXEbcbVvrbVr1lpLmlHznSEP0X0nqQybxTzXuTS3wSzDnVTXlSC/sUTnzaEfmWDjnSTTwWTrpUjnuXUjuTDPxVz3lWjrrYkrwVDfgUDLmZVLoVUTiUTvoZ0/uc1zlWUb3embfbE71Z1bsVD3jWzzxYlXwXEXkV0vcZVbdZ1bteGfvTi71cWbzTjD5iGvndGH2gWrxcGPpeF/kg3PqemfnWEH2iXzabV/0b1rQhn3WY1bIXU/0UjrwlovlSjXzSy3wTTLvTTDxVDjxPBvzSCn0OxrtUjbvUDTzRSXxQiTrPh3yUTPuSi31SivrRynwRSf1Rib0QR/uTzf4QyP3PR22rECmAAAAenRSTlMALwoFZ0wsIxUM7efbzsejmpZbHhD9+/v49vHu5+Pg2NjTzsjEuKSempaSi4aEgH16dXRvbWtfWVNJQkFAPjkxCPf39fTy8ePi393Z19DNy8rJv766tbWurKqlnpuXlpaSioJ1bGtpYmFfVk1KREA6ODc3MSsrKSQhHg3m++gAAAGCSURBVCjPdc1lT/MAFIbhu+3cDXd3d+d1d3fF3aFdO8flL0PIyFjW3t9Orpw8ZBrxuyLho1jp1yFyMzkiiTsfWtp8blXO7yI74flpnkkCSQRCLfJjIetVjgQItpYfqnmxB+/M0FzYkdHuaDnUncjOht7Z6eYKuUhgpejvjc6fVjN6mGiwpG+bTx3H/miO64JJF4NR1zqZhG2wvdgAoEpjWaslp+EvAKPRKZJOdPIFgIpj6lO7ejz2GWyRHpJt6OYdo+uYviP0a/rFy/sUVxlwr4d4PYrJgJfKOOgXVasBTziJj+zcmzRgi4PwsLVYNODVfJQFsSxkwP0KJX249wy4UcHtpW7AgB0emp7R2aivQsKM5Uy0eSRdrlGAgu98+6+na1or0HlAqNqaq1JBCQDqe2ae5vIrbRyAxegAvx/as9H+WuuB636kNvHeDdxWc+HFP276lJqge79ykHRDtef7ZjJ9fCJhrZHjb362t/95q5zI/uytrUnA4i+Nha+q7AiS7hJhtUjTU6UrxgAAAABJRU5ErkJggg==');\r\n    background-repeat: no-repeat;\r\n    background-size: 18px;\r\n    cursor: default !important;\r\n}\r\n\r\n  .subtask-ul:hover{\r\n    list-style: none;\r\n    padding-left: 50px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    cursor: default !important;\r\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAQlBMVEUAAAAnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2xG1CEaAAAAFXRSTlMAqnzrjIRLHtXNwZlWPScNB+G0aF7WnooZAAAAYElEQVQY052OSRKAIAwEo6AooODS//+qC7nATfuSydTUJPKLPKytddA3Tg9D7QTakIfzmZalGM6gsiO8c4TNicpZi3dRHOQ7W50yJJkglk3LuglTPT0CXmpmrDREm+QzF4WMA9vRiMqfAAAAAElFTkSuQmCC');\r\n    background-repeat: no-repeat;\r\n    background-size: 18px;\r\n }\r\n\r\n  .div-width{\r\n    width: 75%;\r\n}\r\n\r\n  @media screen and (max-width: 450px) {\r\n    .task-head{\r\n        display: inline-block;\r\n        margin: 0px;\r\n        width: 220px;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n      }\r\n      .div-width{\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n  .ngx-pagination .current {\r\n    padding: 0.1875rem 0.625rem;\r\n    background: #3f51b5 !important;\r\n    color: black !important;\r\n    cursor: default;\r\n}\r\n\r\n  .add-details{\r\n    margin-top: 20px;\r\n}\r\n\r\n  .sortBtn{\r\n    margin: 5px\r\n}\r\n\r\n  /* Amimations */\r\n\r\n  .anime{\r\n    -webkit-animation: Animation 4s forwards 0s ease;\r\n            animation: Animation 4s forwards 0s ease;\r\n\r\n  }\r\n\r\n  @-webkit-keyframes Animation{\r\n    0%{\r\n        -webkit-transform: translateY(-100%);\r\n                transform: translateY(-100%);\r\n        opacity: 0;\r\n        }\r\n    83%{\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n        opacity: 0.5;\r\n        }\r\n    100%{\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n        opacity: 1;\r\n        }\r\n}\r\n\r\n  @keyframes Animation{\r\n    0%{\r\n        -webkit-transform: translateY(-100%);\r\n                transform: translateY(-100%);\r\n        opacity: 0;\r\n        }\r\n    83%{\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n        opacity: 0.5;\r\n        }\r\n    100%{\r\n        -webkit-transform: translateY(0%);\r\n                transform: translateY(0%);\r\n        opacity: 1;\r\n        }\r\n}\r\n\r\n  .anime1{\r\n  -webkit-animation: Animation1 2s forwards 0s ease;\r\n          animation: Animation1 2s forwards 0s ease;\r\n\r\n}\r\n\r\n  @-webkit-keyframes Animation1{\r\n  0%{\r\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\r\n            transform: rotate(0) scale(0.5) skewY(-25deg);\r\n    opacity: 0.5;\r\n    }\r\n100%{\r\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\r\n            transform: rotate(0) scale(1) skewY(0deg);\r\n    opacity: 1;\r\n    }\r\n}\r\n\r\n  @keyframes Animation1{\r\n  0%{\r\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\r\n            transform: rotate(0) scale(0.5) skewY(-25deg);\r\n    opacity: 0.5;\r\n    }\r\n100%{\r\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\r\n            transform: rotate(0) scale(1) skewY(0deg);\r\n    opacity: 1;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/individualtasks/individualtasks.component.html":
/*!****************************************************************!*\
  !*** ./src/app/individualtasks/individualtasks.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n    <i class=\"material-icons\"> arrow_back </i>\n  </button>\n\n  \n\n  <div class=\"row\">\n\n\n\n  </div>\n\n</div>\n\n\n\n<div class=\"container\">\n\n  <!-- The Modal  For Creating task-->\n  <div class=\"modal fade\" id=\"myModal\">\n    <div class=\"modal-dialog modal-dialog-centered\">\n      <div class=\"modal-content\" style=\"background: #acd8c9d6\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Create task</h4>\n          <mat-slide-toggle color=\"primary\" checked=\"checked\" [(ngModel)]=\"private\" *ngIf='!editMode'>\n            Private\n          </mat-slide-toggle>\n          <button mat-icon-button *ngIf='editMode' matTooltip='Delete Task?' color='primary' data-toggle=\"collapse\"\n            data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\"><i\n              class=\"material-icons\">delete_outline</i></button>\n\n        </div>\n        <div class=\"collapse\" id=\"collapseExample\">\n          <div class=\"card-body\">\n            Do you want to delete this tasklist? <button mat-raised-button class=\"mat-elevation-z8 add-btn float-right\"\n              color='primary' (click)=\"deleteTask()\" data-dismiss=\"modal\">Yes!</button>\n          </div>\n        </div>\n\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n\n          <mat-form-field>\n            <input matInput placeholder=\"Title\" type=\"text\" [(ngModel)]=\"title\">\n          </mat-form-field>\n          <button mat-raised-button class=\"mat-elevation-z8 add-btn float-right\" color='primary' (click)='addTask()'\n            data-dismiss=\"modal\"><i class=\"material-icons\">\n              done_outline\n            </i></button>\n          <hr>\n          <div *ngFor='let x of taskNumberIds; let i = index'>\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Task{{i+1}}\" type=\"text\" [(ngModel)]=\"this['subtask' + x]\">\n            </mat-form-field>\n\n\n            <div *ngIf=\"this['subtask' + x]\">\n              <div *ngFor=\"let detail of [1, 2, 3, 4, 5]; let j = index; let first = first; let last = last\">\n                <mat-expansion-panel [expanded]=\"step === detail\" (opened)=\"setStep(detail)\" hideToggle>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      SubTask:{{detail}}\n                    </mat-panel-title>\n                    <mat-panel-description>\n                      {{ this['detail' + i + detail ] }}\n                    </mat-panel-description>\n                  </mat-expansion-panel-header>\n\n                  <mat-form-field class=\"example-full-width1\">\n                    <input matInput placeholder=\"Detail {{detail}}\" type=\"text\"\n                      [(ngModel)]=\"this['detail' + i + detail ]\">\n                  </mat-form-field>\n\n                  <button *ngIf=\"!last\" mat-icon-button color=\"primary\" class=\"float-right \" (click)=\"nextStep()\"> <i\n                      class=\"material-icons\">\n                      add\n                    </i></button>\n                  <mat-action-row *ngIf=\"last\">\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\"> <i class=\"material-icons\">\n                        keyboard_arrow_up\n                      </i></button>\n                  </mat-action-row>\n                </mat-expansion-panel>\n              </div>\n              <!-- Epansion panel for adding details endds here -->\n            </div>\n            <hr>\n            <br>\n\n          </div>\n          <div class='float-right'>\n\n            <button *ngIf='count != 10' mat-mini-fab class=\"mat-elevation-z8 add-btn\" color='primary' (click)='add()'>\n              <i class=\"material-icons\">\n                add\n              </i></button>\n\n          </div>\n        </div>\n\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button mat-raised-button class=\"mat-elevation-z8\" color='primary' data-dismiss=\"modal\">\n            <i class=\"material-icons\">\n              close\n            </i></button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!-- end of modal -->\n\n\n\n  <!-- Modal  for notification-->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notification</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!notifications\"></mat-progress-bar>\n\n          <div *ngIf=\"notifications\" class=\"container\">\n            <div class=\"row\" *ngFor=\"let notify of notifications.slice().reverse()\">\n\n              <h6 class=\"lift-up\">\n                <i class=\"material-icons\">list_alt</i>\n\n                {{ notify }}</h6>\n              <hr>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button mat-raised-button color=\"primary\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <mat-progress-bar mode=\"indeterminate\" value=\"40\" *ngIf=\"!users && !userInfo\"></mat-progress-bar>\n\n\n\n  <!-- Heading  -->\n  <h2 class=\"text-center head-up\">My Friends Tasks</h2>\n \n\n  <br>\n\n\n  <!-- Tasks -->\n\n  <mat-spinner *ngIf='!tasks && !empty' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n  <!-- card in case of no tasks -->\n  <mat-card class=\"text-center\" *ngIf='empty && !tasks'>\n    <h4>{{empty}}</h4>\n    <button mat-icon-button (click)=\"ngOnInit()\"> <i class=\"material-icons\">refresh </i></button>\n  </mat-card>\n\n  <div *ngIf='tasks' class=\"row\">\n\n    <div class='col-md-12'>\n\n\n\n      <div class=\"text-center\">\n        <!-- pgination \n                <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n        <mat-form-field>\n          <input matInput placeholder=\"Search for Tasks\" type=\"text\" [(ngModel)]=\"filter\">\n        </mat-form-field>\n      </div>\n\n\n    </div>\n\n\n\n  </div>\n\n  <hr>\n\n  <button mat-raised-button class=\"mat-elevation-z8 float-right\" color='primary' matTooltip=\"Ctrl + Z\"\n    (click)='undo()'><i class=\"material-icons\">undo</i></button>\n\n  <!-- for loop starts here -->\n  <div class=\"row\"\n    *ngFor='let task of tasks  | orderBy: key : reverse | filter:filter  | paginate: { itemsPerPage: 12, currentPage: p }'\n    style=\"margin-top:60px\">\n\n\n    <!-- card for pusblic tasks -->\n    <!--|| userInfo.friends.includes(task.createdByUserId)\"-->\n    \n    <div *ngIf=\"task.type === 'public' && id === task.createdByUserId\" class=\"mx-auto div-width\">\n\n      <mat-card class=\"card mat-card-primary task-card mat-elevation-z8\">\n        <h4 class=\"task-head\">{{ task.title }}</h4>\n        <button mat-icon-button matTooltip=\"Edit\" color=\"primary\"\n          *ngIf=\"id === task.createdByUserId || userInfo.friends.includes(task.createdByUserId)\" class=\"float-right\"\n          data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editValue(task)\">\n          <i class=\"material-icons\">\n            edit\n          </i>\n        </button>\n        <br>\n        <br>\n        <div class=\"row\">\n          <span style=\"margin-left: 16px\">Created By:</span>\n          <span class=\"mx-auto\"><b>{{ task.createdBy }}</b></span>\n          <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n        </div>\n        <div class=\"row\">\n          <span style=\"margin-left: 16px\">Modified By:</span>\n          <span class=\"mx-auto\"><b>{{ task.modifiedBy }}</b></span>\n          <span class=\"ml-auto\"><b>{{ task.modifiedOn | date:'medium'}}</b></span>\n        </div>\n        <hr>\n        <ul class=\"task-ul\">\n          <li *ngFor='let subtask of task.tasks; let i = index'>\n            <mat-checkbox matTooltip=\"Mark Complete\" class=\"example-margin\" color=\"primary\"\n              (change)=\"taskChecked(task,i)\"\n              [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n              {{ subtask.task }}\n            </mat-checkbox>\n\n            <ul>\n              <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\" (click)=\"subtaskChecked(task, i, j)\"\n                  [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n                  {{x}}\n                </button>\n\n              </li>\n            </ul>\n            <hr>\n          </li>\n        </ul>\n      </mat-card>\n    </div>\n\n    <!-- Card for private tasks of user \n    <div *ngIf=\"task.type === 'private' && userId === task.createdByUserId\" class=\"mx-auto div-width\">\n\n      <mat-card class=\"card mat-card-green mat-elevation-z8\">\n        <h4 class=\"task-head\">{{ task.title }}</h4>\n        <button mat-icon-button color=\"link\" (click)=\"editValue(task)\" data-toggle=\"modal\" data-target=\"#myModal\"\n          class=\"float-right\" matTooltip=\"Edit\">\n          <i class=\"material-icons\">\n            edit\n          </i>\n        </button>\n        <br>\n        <br>\n        <div class=\"row\">\n          <span style=\"margin-left: 16px\">Created By:</span>\n          <span class=\"ml-auto\"><b>{{ task.createdBy }}</b></span>\n          <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n        </div>\n\n        <hr>\n        <ul class=\"task-ul\">\n          <li *ngFor='let subtask of task.tasks; let i = index'>\n            <mat-checkbox class=\"example-margin\" color=\"basic\" (click)=\"taskChecked(task,i)\" matTooltip=\"Mark Complete\">\n              {{ subtask.task }}\n            </mat-checkbox>\n\n            <ul>\n\n              <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\" (click)=\"subtaskChecked(task, i, j)\">\n                  {{x}}\n                </button>\n\n              </li>\n            </ul>\n            <hr>\n          </li>\n        </ul>\n      </mat-card>\n    </div>\n  </div> -->\n  <!-- end of task row --> \n\n</div>\n\n\n\n<div class=\"col-md-12 text-center\">\n  <!-- pagination -->\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</div>"

/***/ }),

/***/ "./src/app/individualtasks/individualtasks.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/individualtasks/individualtasks.component.ts ***!
  \**************************************************************/
/*! exports provided: IndividualtasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualtasksComponent", function() { return IndividualtasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IndividualtasksComponent = /** @class */ (function () {
    function IndividualtasksComponent(location, SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.location = location;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        //initializing p to one
        this.p = 1;
        //sorting
        this.key = 'createdOn';
        this.reverse = false;
        this.pageSize = 10;
        this.userList = [];
        // task variables
        this.private = false;
        this.spinner = false;
        this.taskCreationUpdate = false;
        this.editMode = false;
        this.step = 0;
        // Modal for create and update tasklist variables
        this.count = 1;
        this.taskNumberIds = [1];
        //notification related variables
        this.notifications = [];
        this.notificationCount = null;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList =>', _this.userList);
            }); // end online-user-list
        };
        /////////////////////////////////////////Noyification related code//////////////////////////////////
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
                console.log("Inside get notify");
                // pushing data to notification array
                _this.notifications.push(message.message);
                _this.notificationCount++;
                _this.getUserDetails(_this.userId);
                _this.getALLUsers();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        // get notifications related task changes done by friends
        this.getTaskChanges = function () {
            _this.SocketService.taskChanges().subscribe(function (data) {
                if (data.receiverId.includes(_this.userId)) {
                    var message = data;
                    _this.snackBar.open("" + message.message, "Dismiss", {
                        duration: 5000,
                    });
                    // pushing data to notification array
                    _this.notifications.push(message.message);
                    //playing notification sound.
                    _this.audio = new Audio();
                    _this.audio.src = "../../../assets/light.mp3";
                    _this.audio.load();
                    _this.audio.play();
                    _this.notificationCount++;
                }
                _this.getAllTasks();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        ///////////////////////////////////////Task related code///////////////////////////////////
        // get all tasks
        this.getAllTasks = function () {
            _this.appService.getAllTasks().subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.tasks = data['data'];
                }
                else if (data['status'] === 404) {
                    _this.empty = data['message'];
                }
                else {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; //end of get all task
        //create task function or edit task and make api request
        this.addTask = function () {
            _this.taskList = [];
            if (_this.title) {
                _this.spinner = true;
                var taskObj_1 = {
                    taskId: '',
                    title: _this.title,
                    type: '',
                    tasks: [],
                    createdByUserId: _this.userId,
                    createdBy: _this.userInfo.firstName,
                    modifiedBy: _this.userInfo.firstName,
                    modifiedOn: Date.now(),
                };
                // handling private or public task
                if (_this.private == true) {
                    taskObj_1.type = 'private';
                }
                else {
                    taskObj_1.type = 'public';
                }
                // Mapping all the NgModels to TaskObj to send them to backend
                for (var i = 1; i <= 10; i++) {
                    if (_this["subtask" + i]) {
                        var taskDetailsObj = {
                            task: _this["subtask" + i],
                            status: "pending",
                            subtask: []
                        };
                        for (var j = 1; j <= 5; j++) {
                            if (_this["detail" + (i - 1) + j]) {
                                taskDetailsObj.subtask.push(_this["detail" + (i - 1) + j]);
                            }
                        }
                        taskObj_1.tasks.push(taskDetailsObj);
                    }
                }
                if (_this.editMode === false) {
                    //If edit mode is false the create task
                    _this.appService.createTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 2000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has created " + _this.title + " tasklist.",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    }); //end of create task
                }
                else {
                    taskObj_1.taskId = _this.taskId;
                    taskObj_1.modifiedBy = _this.userInfo.firstName;
                    //If edit mode is true then edit task
                    _this.appService.editTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("Task Edited!", "Dismiss", {
                                duration: 5000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has Edited " + taskObj_1.title + " tasklist. ",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    });
                } //end of edit task
            }
            else {
                _this.snackBar.open("Please enter title", "Dismiss", {
                    duration: 2000,
                });
            }
        };
        // logout Function
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; // end logout
    }
    IndividualtasksComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    //checking for keypress to undo
    IndividualtasksComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.getModifierState && event.getModifierState('Control') && event.keyCode === 90) {
            this.undo();
        }
    }; //end of host listener
    IndividualtasksComponent.prototype.ngOnInit = function () {
        //this.id = this.appService.getUserInfoFromLocalstorage().userId;
        var _this = this;
        var routeid = this._route.snapshot.params['userId'];
        this.id = routeid;
        this.checkStatus();
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.createVariable();
        this.getNotify();
        this.getTaskChanges();
        this.getUserDetails(this.userId);
        this.invitation = "http://veeramakali.ga/sign-up?userId=" + this.userId;
        // this.invitation = `http://todo-angular.akshaypatil.online/sign-up?userId=${this.userId}`;
        //on purpose Delay to ensure perfromance at OnInit
        setTimeout(function () {
            _this.getAllTasks();
        }, 1000);
        setTimeout(function () {
            _this.checkForInvitation();
        }, 6000);
        setTimeout(function () {
            _this.getALLUsers();
        }, 4000);
        setTimeout(function () {
            _this.getNotification(_this.userId);
        }, 8000);
    };
    IndividualtasksComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    //undo button
    IndividualtasksComponent.prototype.undo = function () {
        var _this = this;
        this.appService.undo().subscribe(function (data) {
            _this.undoData = data;
            if (_this.undoData.status == 200) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
                // sending notification
                var notifyObject = {
                    type: "public",
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: '',
                    receiverId: '',
                    message: _this.userInfo.firstName + " has Undo a tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                _this.getAllTasks();
            }
            else if (_this.undoData.status == 404) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("Some Error occured", "Dismiss", {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // create variable for task details (subtasks variables)
    IndividualtasksComponent.prototype.createVariable = function () {
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j];
            }
        }
    };
    // Get all users
    IndividualtasksComponent.prototype.getALLUsers = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (data) {
            _this.users = data['data'];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // get detail of current user
    IndividualtasksComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            setTimeout(function () {
                _this.appService.setUserInfoInLocalStorage(_this.userInfo);
            }, 2000);
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    // adding user to requested array of the friend .
    //adding friend to request array of the user.
    IndividualtasksComponent.prototype.addAsFriend = function (id, name) {
        var _this = this;
        // send friends request
        this.appService.request(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has sent you friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // add user to pending or requested array
        this.appService.requested(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // Add request user to friends array
    IndividualtasksComponent.prototype.addToFriend = function (id, name) {
        var _this = this;
        // add friend to friends array
        this.appService.addAsFriend(id, this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has accepted your friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // nested form
    IndividualtasksComponent.prototype.remove = function (i) {
        this.count--;
    };
    IndividualtasksComponent.prototype.add = function () {
        this.taskNumberIds.push(++this.count);
    };
    // Main taask check function
    IndividualtasksComponent.prototype.taskChecked = function (task, i) {
        var _this = this;
        var taskObj = task;
        var removedTask = task.tasks[i].task;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        setTimeout(function () {
            task.tasks.splice(i, 1);
            _this.appService.editTask(taskObj).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Task Completed!", "Dismiss", {
                        duration: 5000,
                    });
                    // sending notification
                    var notifyObject = {
                        type: taskObj.type,
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: taskObj.createdBy,
                        receiverId: taskObj.createdByUserId,
                        message: _this.userInfo.firstName + " has Checked \" " + removedTask + " \" task from\" " + taskObj.title + " \" tasklist. ",
                        createdOn: Date.now()
                    };
                    _this.SocketService.taskNotify(notifyObject);
                    // refreshing
                    _this.getAllTasks();
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }, 500);
    };
    // Subtask check function
    IndividualtasksComponent.prototype.subtaskChecked = function (task, i, j) {
        var _this = this;
        var taskObj = task;
        var removedSubtask = task.tasks[i].subtask[j];
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        task.tasks[i].subtask.splice(j, 1);
        this.appService.editTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("SubTask Completed!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Checked \" " + removedSubtask + " \" from \" " + taskObj.title + " \" tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of subtask check.
    //function for pre render value to form for editing values
    IndividualtasksComponent.prototype.editValue = function (task) {
        var _this = this;
        // setting this variable for passing to delete task function
        this.taskDetailsToEdit = task;
        this.editMode = true;
        this.clear();
        // this.count = this.taskDetailsToEdit.tasks.length;
        this.title = task.title;
        this.taskId = task.taskId;
        if (task.type == 'private') {
            this.private = true;
        }
        else {
            this.private = false;
        }
        var i = 1;
        task.tasks.map(function (x) {
            _this["subtask" + i] = x.task;
            x.subtask.filter(function (y) {
                for (var j = 1; j <= 5; j++) {
                    _this["detail" + (i - 1) + j] = x.subtask[j - 1];
                }
            });
            i++;
        });
    };
    // delete task function
    IndividualtasksComponent.prototype.deleteTask = function () {
        var _this = this;
        var taskObj = this.taskDetailsToEdit;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        this.appService.deleteTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("Task Deleted!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Deleted " + taskObj.title + " tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of delete task.
    //code to get last 10 notification
    IndividualtasksComponent.prototype.getNotification = function (id) {
        var _this = this;
        this.appService.getUserNotification(id).subscribe(function (data) {
            var response = data['data'];
            _this.notifications = [];
            if (response != null) {
                response.map(function (x) {
                    _this.notifications.unshift(x.message);
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    ////////////////////////////////add details/////////////////////////////////
    IndividualtasksComponent.prototype.editModeOff = function () {
        this.editMode = false;
    };
    IndividualtasksComponent.prototype.clear = function () {
        this.private = false;
        this.title = '';
        this.count = 1;
        this.taskNumberIds = [1];
        for (var i = 1; i <= 10; i++) {
            this["subtask" + i] = '';
        }
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j] = '';
            }
        }
    };
    // clearing notification count
    IndividualtasksComponent.prototype.clearCount = function () {
        this.notificationCount = null;
    };
    //code for mat-expansion panel in the modal for subtasks
    IndividualtasksComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    IndividualtasksComponent.prototype.nextStep = function () {
        this.step++;
    };
    IndividualtasksComponent.prototype.prevStep = function () {
        this.step--;
    };
    // send invitation mail
    IndividualtasksComponent.prototype.sendInvitationMail = function () {
        var _this = this;
        this.appService.sendInvite(this.userId, this.mail).subscribe(function (data) {
            var response = data;
            if (response['status'] === 200) {
                _this.snackBar.open("Invitation mail sent successfully", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("Some error occured", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    //copy to clipboard
    IndividualtasksComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open("Invitation link copied successfully", "Dismiss", {
            duration: 5000,
        });
    };
    //check for invitation
    IndividualtasksComponent.prototype.checkForInvitation = function () {
        var _this = this;
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId')) {
            var inviteId_1 = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId');
            this.appService.addInviteFriend(this.userId, inviteId_1).subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.snackBar.open("Friend added to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('inviteId');
                    // sending notification
                    var notifyObject = {
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: '',
                        receiverId: inviteId_1,
                        message: "You are now friend with " + _this.userInfo.firstName,
                        createdOn: new Date()
                    };
                    _this.SocketService.sendNotify(notifyObject);
                    _this.getUserDetails(_this.userId);
                }
                else {
                    _this.snackBar.open("Some error occured in adding invited friend to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                }
            });
        }
    };
    IndividualtasksComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], IndividualtasksComponent.prototype, "handleKeyboardEvent", null);
    IndividualtasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individualtasks',
            template: __webpack_require__(/*! ./individualtasks.component.html */ "./src/app/individualtasks/individualtasks.component.html"),
            styles: [__webpack_require__(/*! ./individualtasks.component.css */ "./src/app/individualtasks/individualtasks.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], IndividualtasksComponent);
    return IndividualtasksComponent;
}()); // end of export class



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic{\n    margin: 5%;\n    font-size: 15em;\n}\n.profile-pic2{\n    font-size: 4em;\n}\n.marginTop{\n    margin-top: 2%; \n    background-color: #ffffff61;\n    color: rgba(0,0,0,.54);\n}\n.people-search{\n    width: 100%;\n}\n.people-ul{\n    display: flex;\n    list-style: none;\n    overflow-x: auto;\n}\n.mat-card-green-people {\n    margin: 5%;\nbox-shadow: 3px 3px 6px 1px rgba(0,0,0,0.2) ;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!userInfo\"></mat-progress-bar>\n\n<div class=\"container\">\n\n    <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n        <i class=\"material-icons\"> arrow_back </i>\n    </button>\n\n    <div class=\"row\">\n\n        <!-- Main card -->\n        <mat-card class=\"mx-auto marginTop\" *ngIf=\"userInfo\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <button mat-raised-button matTooltip=\"Unfriend\" (click)=\"unFriend()\" class=\"ml-auto\"> Unfriend</button>\n                    <div class=\"col-md-12\">\n                        <div class=\"text-center\">\n\n                            <i class=\"material-icons profile-pic\"> account_circle</i>\n                            <h2 style=\"text-transform:capitalize\">{{userInfo.firstName}} {{userInfo.lastName}}</h2>\n                            <hr>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\">\n                        <p>Email :</p>\n                        <p><b>{{userInfo.email}}</b></p>\n                        <br>\n\n                        <p>Phone no.</p>\n                        <p *ngIf=\"userInfo.mobileNumber\"> <b>{{userInfo.mobileNumber}}</b> </p>\n\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <p>Join On :</p>\n                        <p> <b>{{userInfo.createdOn | date: \"medium\"}}</b> </p>\n\n                        <br>\n\n                        <p>Country :</p>\n                        <p *ngIf=\"country\"> <b>{{country}}</b> </p>\n                    </div>\n\n                </div>\n\n                <!-- Friend's friend list -->\n                <mat-expansion-panel class=\"mat-elevation-z8\">\n\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <i class=\"material-icons\"> person_pin </i>\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{userInfo.firstName}}'s friends.\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n\n                    <mat-form-field class=\"text-center people-search\">\n                        <input matInput placeholder=\"Search Peoples\" type=\"text\" [(ngModel)]=\"peopleSearch\">\n                    </mat-form-field>\n\n                    <mat-spinner *ngIf='!friends' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n                    <div *ngIf=\"friends\" class=\"row\">\n\n                        <ul class=\"people-ul\">\n                            <li *ngFor=\"let user of friends | filter: peopleSearch\">\n\n                                <mat-card class=\" mat-card-green-people \" *ngIf='user.userId !== id'>\n                                    <p> <i class=\"material-icons profile-pic2\"> account_circle</i></p>\n                                    <p>{{user.firstName}}</p>\n                                </mat-card>\n\n                            </li>\n                        </ul>\n\n                    </div>\n\n                </mat-expansion-panel>\n\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(location, SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.location = location;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.appService.getUserInfoFromLocalstorage().userId;
        this.name = this.appService.getUserInfoFromLocalstorage().firstName;
        this.checkStatus();
        this.getUserDetails();
        setTimeout(function () {
            _this.getUsersFriends();
        }, 2000);
    };
    // get detail of current user
    ProfileComponent.prototype.getUserDetails = function () {
        var _this = this;
        var id = this._route.snapshot.params.userId;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            var countryCode = _this.userInfo.mobileNumber.split(" ");
            // getting country of user
            _this.getCountry(countryCode[1]);
            // getting phone no
            _this.userInfo.mobileNumber = countryCode[2];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get users friends 
    ProfileComponent.prototype.getUsersFriends = function () {
        var _this = this;
        this.appService.getUserFriends(this.userInfo.friends).subscribe(function (data) {
            var response = data;
            if (response.status === 200) {
                _this.friends = response.data;
            }
            else if (response.status === 404) {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get country of user
    ProfileComponent.prototype.getCountry = function (code) {
        var _this = this;
        this.appService.getCountry(code).subscribe(function (data) {
            _this.country = data[0].name;
        });
    };
    //remove user from friends array
    ProfileComponent.prototype.unFriend = function () {
        var _this = this;
        this.appService.unFriend(this.userInfo.userId, this.id).subscribe(function (data) {
            if (data['status'] === 200) {
                _this.snackBar.open("Friend has been removed from your friend's list", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.name,
                    senderId: _this.id,
                    receiverName: '',
                    receiverId: _this.userInfo.userId,
                    message: _this.name + " has unfriend you.",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 2000);
            }
            else {
                _this.snackBar.open("Some error occured in removing friend from friend's list", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            declarations: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-bar{\n    min-height: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: 0px 0 28px 2px rgba(0,0,0,0.4) ;\n    width: 55px;\n    z-index: 100;\n    background-color: #acd8c9d6;\n}\n\n.side-bar p {\n    display: none;\n}\n\n.side-bar-list{\n    list-style: none;\n    padding-left: 0px;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.menu{\n    margin: 15px;\n    cursor: pointer;\n}\n\n.side-bar:hover {\n    z-index: 100;\n    background-color: #acd8c9d6;\n    min-height: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: 7px 0 28px 2px rgba(0,0,0,0.4) ;\n    width: 255px;\n    transition: width 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86) 10ms;\n}\n\n.side-bar:hover p{\n    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 500ms;\n    display: inline-block;\n    margin-bottom: 0px;\n    }\n\n.nav-bar{\n    transition: all 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22) 10ms;\n    z-index: 100;\n    /* background-color: #acd8c9d6; */\n    width: 100%;\n    position: fixed;\n    height: 50px;\n}\n\n.nav-bar ul{\n    display: none;\n}\n\n.nav-menu{\n    margin: 15px;\n    float:right;\n}\n\n.nav-bar:hover ul{\n    transition: all 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22) 10ms;\n\n    display: inline;\n    height: auto;\n    z-index: 100;\n    background-color: #acd8c9d6;\n    width: 100%;\n    position: fixed;\n    margin: 0px;\n    padding: 15px;\n\n\n}\n\n.nav-bar:hover p{\n    display: inline;\n}\n\n.logout{\n    cursor: pointer;\n    height:24px;\n    width: 24px;\n}"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar d-xs-inline d-sm-inline d-md-none\">\n    <i class=\"material-icons nav-menu\">menu</i>\n    <ul class=\"side-bar-list\" style=\"padding-top:51px\">\n      <li [routerLink]=\"['/home']\">\n        <i class=\"material-icons\">\n          home\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Home</p>\n  \n      </li>\n      <hr>\n      \n      <li [routerLink]=\"['/sign-in']\">\n        <i class=\"material-icons\">\n          sentiment_satisfied_alt\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-In</p>\n      </li>\n      <hr>\n      <li [routerLink]=\"['/sign-up']\" >\n        <i class=\"material-icons\">\n          pets\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-Up</p>\n  \n      </li>\n      <hr>\n      <li [routerLink]=\"['/sign-up']\" >\n        <i class=\"material-icons\">\n            timer\n            </i>\n       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{hour}}:{{minute}}:{{second}}  </p> \n       \n      </li>\n      <hr>\n      <li (click)=\"logout()\" >\n        <img class=\"logout\" src=\"./../../../assets/logout.png\" alt=\"Logout\" >\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Logout</p>\n  \n      </li>\n    </ul>\n</div>\n\n<div class=\"side-bar d-none d-md-block\">\n\n  <i class=\"material-icons menu\">menu</i>\n\n  <ul class=\"side-bar-list\">\n    <li [routerLink]=\"['/home']\">\n      <i class=\"material-icons\">\n        home\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Home</p>\n\n    </li>\n    \n    <hr>\n    <li [routerLink]=\"['/sign-in']\">\n      <i class=\"material-icons\">\n        sentiment_satisfied_alt\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-In</p>\n    </li>\n      <hr>\n\n    <li [routerLink]=\"['/sign-up']\" >\n      <i class=\"material-icons\">\n        pets\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-Up</p>\n\n    </li>\n    <hr>\n    <li [routerLink]=\"['/sign-up']\" >\n      <i class=\"material-icons\">\n          timer\n          </i>\n     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{hour}}:{{minute}}:{{second}}  </p> \n\n    </li>\n    <hr>\n    <li (click)=\"logout()\" >\n      <img class=\"logout\" src=\"./../../../assets/logout.png\" alt=\"Logout\" >\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Logout</p>\n\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(socketService, appService, snackBar, router, _route) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.count = 7200;
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
            });
        }; // end logout
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counter = setInterval(function () {
            _this.timer();
        }, 1000);
    };
    SideBarComponent.prototype.timer = function () {
        this.count = this.count - 1;
        if (this.count == -1) {
            clearInterval(this.counter);
            return;
        }
        var seconds = this.count % 60;
        var minutes = Math.floor(this.count / 60);
        var hours = Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 60;
        this.hour = hours;
        this.minute = minutes;
        this.second = seconds;
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/shared/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/shared/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/showusers/showusers.component.css":
/*!***************************************************!*\
  !*** ./src/app/showusers/showusers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-green-people{\r\n    margin:2%;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/showusers/showusers.component.html":
/*!****************************************************!*\
  !*** ./src/app/showusers/showusers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n      <i class=\"material-icons\"> arrow_back </i>\n    </button>\n\n</div>\n\n\n\n<div class='container'>\n  <br>\n  <br>\n  <h1 class='text-center'>Friends Using To DO List</h1>\n  <br>\n\n  <hr><br>\n\n</div>\n\n<div class='container'>\n  <!--<div class='row ' style=\"text-align:center\" *ngIf='users.length>0'>-->\n  <div *ngIf=\"users && userInfo\" class=\"row\">\n\n    <div *ngFor=\"let user of users\">\n\n      <div *ngIf=\"userId !== user.userId \">\n\n\n\n        <mat-card class=\"mat-card-green-people\">\n\n          <div class='col-md-4'>\n\n\n\n            <p>{{user.firstName}}</p>\n            <button\n              *ngIf=\"!userInfo.firstName.includes('Vignesh')&&!userInfo.request.includes(user.userId) && !userInfo.friends.includes(user.userId) && !userInfo.requested.includes(user.userId)\"\n              mat-raised-button class=\"mat-elevation-z8\" color='primary' \n              (click)=\"addAsFriend(user.userId, user.firstName)\">\n              \n\n              Add as Friend\n\n            </button>\n\n            <button *ngIf=\"userInfo.requested.includes(user.userId)\" mat-raised-button class=\"mat-elevation-z8\"\n              color='disabled' disabled>Pending...</button>\n\n            <button *ngIf=\"userInfo.request.includes(user.userId)\" mat-raised-button class=\"mat-elevation-z8\"\n              color='primary' (click)=\"addToFriend(user.userId, user.firstName)\">\n              \n\n                Accept Request\n              </button>\n\n            <button [routerLink]=\"['/profile',user.userId]\" *ngIf=\"userInfo.friends.includes(user.userId)\"\n              mat-raised-button class=\"mat-elevation-z8\" color='primary'>\n                Show Friend Profile\n              </button>\n\n          </div>\n\n        </mat-card>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/showusers/showusers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/showusers/showusers.component.ts ***!
  \**************************************************/
/*! exports provided: ShowusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowusersComponent", function() { return ShowusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowusersComponent = /** @class */ (function () {
    function ShowusersComponent(location, SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.location = location;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        //initializing p to one
        this.p = 1;
        //sorting
        this.key = 'createdOn';
        this.reverse = false;
        this.pageSize = 10;
        this.userList = [];
        // task variables
        this.private = false;
        this.spinner = false;
        this.taskCreationUpdate = false;
        this.editMode = false;
        this.step = 0;
        // Modal for create and update tasklist variables
        this.count = 1;
        this.taskNumberIds = [1];
        //notification related variables
        this.notifications = [];
        this.notificationCount = null;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList =>', _this.userList);
            }); // end online-user-list
        };
        /////////////////////////////////////////Noyification related code//////////////////////////////////
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
                console.log("Inside get notify");
                // pushing data to notification array
                _this.notifications.push(message.message);
                _this.notificationCount++;
                _this.getUserDetails(_this.userId);
                _this.getALLUsers();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        // get notifications related task changes done by friends
        this.getTaskChanges = function () {
            _this.SocketService.taskChanges().subscribe(function (data) {
                if (data.receiverId.includes(_this.userId)) {
                    var message = data;
                    _this.snackBar.open("" + message.message, "Dismiss", {
                        duration: 5000,
                    });
                    // pushing data to notification array
                    _this.notifications.push(message.message);
                    //playing notification sound.
                    _this.audio = new Audio();
                    _this.audio.src = "../../../assets/light.mp3";
                    _this.audio.load();
                    _this.audio.play();
                    _this.notificationCount++;
                }
                _this.getAllTasks();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        ///////////////////////////////////////Task related code///////////////////////////////////
        // get all tasks
        this.getAllTasks = function () {
            _this.appService.getAllTasks().subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.tasks = data['data'];
                }
                else if (data['status'] === 404) {
                    _this.empty = data['message'];
                }
                else {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; //end of get all task
        //create task function or edit task and make api request
        this.addTask = function () {
            _this.taskList = [];
            if (_this.title) {
                _this.spinner = true;
                var taskObj_1 = {
                    taskId: '',
                    title: _this.title,
                    type: '',
                    tasks: [],
                    createdByUserId: _this.userId,
                    createdBy: _this.userInfo.firstName,
                    modifiedBy: _this.userInfo.firstName,
                    modifiedOn: Date.now(),
                };
                // handling private or public task
                if (_this.private == true) {
                    taskObj_1.type = 'private';
                }
                else {
                    taskObj_1.type = 'public';
                }
                // Mapping all the NgModels to TaskObj to send them to backend
                for (var i = 1; i <= 10; i++) {
                    if (_this["subtask" + i]) {
                        var taskDetailsObj = {
                            task: _this["subtask" + i],
                            status: "pending",
                            subtask: []
                        };
                        for (var j = 1; j <= 5; j++) {
                            if (_this["detail" + (i - 1) + j]) {
                                taskDetailsObj.subtask.push(_this["detail" + (i - 1) + j]);
                            }
                        }
                        taskObj_1.tasks.push(taskDetailsObj);
                    }
                }
                if (_this.editMode === false) {
                    //If edit mode is false the create task
                    _this.appService.createTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 2000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has created " + _this.title + " tasklist.",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    }); //end of create task
                }
                else {
                    taskObj_1.taskId = _this.taskId;
                    taskObj_1.modifiedBy = _this.userInfo.firstName;
                    //If edit mode is true then edit task
                    _this.appService.editTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("Task Edited!", "Dismiss", {
                                duration: 5000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has Edited " + taskObj_1.title + " tasklist. ",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    });
                } //end of edit task
            }
            else {
                _this.snackBar.open("Please enter title", "Dismiss", {
                    duration: 2000,
                });
            }
        };
        // logout Function
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; // end logout
    }
    ShowusersComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    //checking for keypress to undo
    ShowusersComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.getModifierState && event.getModifierState('Control') && event.keyCode === 90) {
            this.undo();
        }
    }; //end of host listener
    ShowusersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkStatus();
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.createVariable();
        this.getNotify();
        this.getTaskChanges();
        this.getUserDetails(this.userId);
        this.invitation = "http://veeramakali.ga/sign-up?userId=" + this.userId;
        // this.invitation = `http://todo-angular.akshaypatil.online/sign-up?userId=${this.userId}`;
        //on purpose Delay to ensure perfromance at OnInit
        setTimeout(function () {
            _this.getAllTasks();
        }, 1000);
        setTimeout(function () {
            _this.checkForInvitation();
        }, 6000);
        setTimeout(function () {
            _this.getALLUsers();
        }, 4000);
        setTimeout(function () {
            _this.getNotification(_this.userId);
        }, 8000);
    };
    ShowusersComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    //undo button
    ShowusersComponent.prototype.undo = function () {
        var _this = this;
        this.appService.undo().subscribe(function (data) {
            _this.undoData = data;
            if (_this.undoData.status == 200) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
                // sending notification
                var notifyObject = {
                    type: "public",
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: '',
                    receiverId: '',
                    message: _this.userInfo.firstName + " has Undo a tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                _this.getAllTasks();
            }
            else if (_this.undoData.status == 404) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("Some Error occured", "Dismiss", {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // create variable for task details (subtasks variables)
    ShowusersComponent.prototype.createVariable = function () {
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j];
            }
        }
    };
    // Get all users
    ShowusersComponent.prototype.getALLUsers = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (data) {
            _this.users = data['data'];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // get detail of current user
    ShowusersComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            setTimeout(function () {
                _this.appService.setUserInfoInLocalStorage(_this.userInfo);
            }, 2000);
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    // adding user to requested array of the friend .
    //adding friend to request array of the user.
    ShowusersComponent.prototype.addAsFriend = function (id, name) {
        var _this = this;
        // send friends request
        this.appService.request(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has sent you friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // add user to pending or requested array
        this.appService.requested(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // Add request user to friends array
    ShowusersComponent.prototype.addToFriend = function (id, name) {
        var _this = this;
        // add friend to friends array
        this.appService.addAsFriend(id, this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has accepted your friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // nested form
    ShowusersComponent.prototype.remove = function (i) {
        this.count--;
    };
    ShowusersComponent.prototype.add = function () {
        this.taskNumberIds.push(++this.count);
    };
    // Main taask check function
    ShowusersComponent.prototype.taskChecked = function (task, i) {
        var _this = this;
        var taskObj = task;
        var removedTask = task.tasks[i].task;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        setTimeout(function () {
            task.tasks.splice(i, 1);
            _this.appService.editTask(taskObj).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Task Completed!", "Dismiss", {
                        duration: 5000,
                    });
                    // sending notification
                    var notifyObject = {
                        type: taskObj.type,
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: taskObj.createdBy,
                        receiverId: taskObj.createdByUserId,
                        message: _this.userInfo.firstName + " has Checked \" " + removedTask + " \" task from\" " + taskObj.title + " \" tasklist. ",
                        createdOn: Date.now()
                    };
                    _this.SocketService.taskNotify(notifyObject);
                    // refreshing
                    _this.getAllTasks();
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }, 500);
    };
    // Subtask check function
    ShowusersComponent.prototype.subtaskChecked = function (task, i, j) {
        var _this = this;
        var taskObj = task;
        var removedSubtask = task.tasks[i].subtask[j];
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        task.tasks[i].subtask.splice(j, 1);
        this.appService.editTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("SubTask Completed!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Checked \" " + removedSubtask + " \" from \" " + taskObj.title + " \" tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of subtask check.
    //function for pre render value to form for editing values
    ShowusersComponent.prototype.editValue = function (task) {
        var _this = this;
        // setting this variable for passing to delete task function
        this.taskDetailsToEdit = task;
        this.editMode = true;
        this.clear();
        // this.count = this.taskDetailsToEdit.tasks.length;
        this.title = task.title;
        this.taskId = task.taskId;
        if (task.type == 'private') {
            this.private = true;
        }
        else {
            this.private = false;
        }
        var i = 1;
        task.tasks.map(function (x) {
            _this["subtask" + i] = x.task;
            x.subtask.filter(function (y) {
                for (var j = 1; j <= 5; j++) {
                    _this["detail" + (i - 1) + j] = x.subtask[j - 1];
                }
            });
            i++;
        });
    };
    // delete task function
    ShowusersComponent.prototype.deleteTask = function () {
        var _this = this;
        var taskObj = this.taskDetailsToEdit;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        this.appService.deleteTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("Task Deleted!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Deleted " + taskObj.title + " tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of delete task.
    //code to get last 10 notification
    ShowusersComponent.prototype.getNotification = function (id) {
        var _this = this;
        this.appService.getUserNotification(id).subscribe(function (data) {
            var response = data['data'];
            _this.notifications = [];
            if (response != null) {
                response.map(function (x) {
                    _this.notifications.unshift(x.message);
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    ////////////////////////////////add details/////////////////////////////////
    ShowusersComponent.prototype.editModeOff = function () {
        this.editMode = false;
    };
    ShowusersComponent.prototype.clear = function () {
        this.private = false;
        this.title = '';
        this.count = 1;
        this.taskNumberIds = [1];
        for (var i = 1; i <= 10; i++) {
            this["subtask" + i] = '';
        }
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j] = '';
            }
        }
    };
    // clearing notification count
    ShowusersComponent.prototype.clearCount = function () {
        this.notificationCount = null;
    };
    //code for mat-expansion panel in the modal for subtasks
    ShowusersComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ShowusersComponent.prototype.nextStep = function () {
        this.step++;
    };
    ShowusersComponent.prototype.prevStep = function () {
        this.step--;
    };
    // send invitation mail
    ShowusersComponent.prototype.sendInvitationMail = function () {
        var _this = this;
        this.appService.sendInvite(this.userId, this.mail).subscribe(function (data) {
            var response = data;
            if (response['status'] === 200) {
                _this.snackBar.open("Invitation mail sent successfully", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("Some error occured", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    //copy to clipboard
    ShowusersComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open("Invitation link copied successfully", "Dismiss", {
            duration: 5000,
        });
    };
    //check for invitation
    ShowusersComponent.prototype.checkForInvitation = function () {
        var _this = this;
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId')) {
            var inviteId_1 = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId');
            this.appService.addInviteFriend(this.userId, inviteId_1).subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.snackBar.open("Friend added to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('inviteId');
                    // sending notification
                    var notifyObject = {
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: '',
                        receiverId: inviteId_1,
                        message: "You are now friend with " + _this.userInfo.firstName,
                        createdOn: new Date()
                    };
                    _this.SocketService.sendNotify(notifyObject);
                    _this.getUserDetails(_this.userId);
                }
                else {
                    _this.snackBar.open("Some error occured in adding invited friend to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                }
            });
        }
    };
    ShowusersComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ShowusersComponent.prototype, "handleKeyboardEvent", null);
    ShowusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showusers',
            template: __webpack_require__(/*! ./showusers.component.html */ "./src/app/showusers/showusers.component.html"),
            styles: [__webpack_require__(/*! ./showusers.component.css */ "./src/app/showusers/showusers.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ShowusersComponent);
    return ShowusersComponent;
}()); // end of export class



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = /** @class */ (function () {
    function SocketService(http, appService) {
        var _this = this;
        this.http = http;
        this.appService = appService;
        //private url = 'http://localhost:3000';
        this.url = 'http://todo-node.akshaypatil.online';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // end events to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.sendNotify = function (notifyObject) {
            _this.socket.emit('notify', notifyObject);
        }; // end send notify
        this.notify = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notify
        //send notification data for changes in task beeen made
        this.taskNotify = function (notifyObject) {
            // friendsList to store in history for undo purpose
            var friendList = _this.appService.getUserInfoFromLocalstorage().friends;
            friendList.push(_this.appService.getUserInfoFromLocalstorage().userId);
            notifyObject.receiverId = friendList;
            if (notifyObject.type === "public") {
                _this.socket.emit('task-notify', notifyObject);
            }
        }; // end send TaskNotify
        //Listing to task chages 
        this.taskChanges = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("task-changes", function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notify
        // disconnect socket
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n   background-color:#29b6f6\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }\n  \n  .mat-card-green-people {\n    margin: 5%;\n  box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.2) ;\n  }"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n            <mat-card class=\"mx-auto marginTop mat-card-green-people\">\n\n          <h1 class=\"text-center\" style=\"margin-top:10%\"> CHANGE PASSWORD</h1>\n          <br>\n          <h6>Enter a new password</h6>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass1\">\n          </mat-form-field>\n          <br><br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass2\">\n          </mat-form-field>\n          <br>\n          <h6>Don't have account yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n          <br>\n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"changePasswordFunction()\"><i\n              class=\"material-icons\">navigate_next</i></button>\n          <br><br>\n\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(appService, router, _route, snackBar) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.snackBar = snackBar;
        this.validation = function () {
            if (_this.pass1 === _this.pass2) {
                if (_this.pass1.length >= 8) {
                    return true;
                }
                else {
                    _this.snackBar.open("Please make sure your password is more than 8 character", "Dismiss", {
                        duration: 5000,
                    });
                    return false;
                }
            }
            else {
                _this.snackBar.open("Please make sure you have enter same password in both feilds", "Dismiss", {
                    duration: 5000,
                });
            }
        };
        this.changePasswordFunction = function () {
            if (_this.validation()) {
                var captureId = _this._route.snapshot.paramMap.get("userId");
                var data = {
                    userId: captureId,
                    password: _this.pass1
                };
                _this.appService.changePasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                });
            }
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n   background-color: #29b6f6\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }\n  \n  .mat-card-green-people {\n    margin: 5%;\n  box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.2) ;\n  }"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n            <mat-card class=\"mx-auto marginTop mat-card-green-people\">\n\n          <h1 class=\"text-center\" style=\"margin-top:10%\"> FORGOT PASSWORD</h1>\n          <br>\n          <h6>Please enter your Email to get a password recovery mail.</h6>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n            \n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <br><br>\n\n          <br>\n          <h6>Don't have account yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n          <h6 style=\"cursor:pointer\" [routerLink]=\"['/sign-in']\">Sign-in.</h6>\n          <br>\n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n          <br><br>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(snackBar, appService, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.appService = appService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.submit = function () {
            if (!_this.email) {
                _this.snackBar.open("Please enter email", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.appService.forgotPasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                });
            }
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    //Validations
    ForgotPasswordComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n  background-color: #29b6f6\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }\n  \n  .toggle-margin{\n    margin: 15px !important;\n  }\n  \n  .head-up{\n    margin-top: 6% !important;\n  }\n  \n  .head-down{\n    margin-bottom: 6% !important;\n  }\n  \n  /* Animations */\n  \n  .anime{\n    -webkit-animation: Animation 4s forwards 0s ease;\n            animation: Animation 4s forwards 0s ease;\n\n  }\n  \n  @-webkit-keyframes Animation{\n    0%{\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n        opacity: 0;\n        }\n    83%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 0.5;\n        }\n    100%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 1;\n        }\n}\n  \n  @keyframes Animation{\n    0%{\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n        opacity: 0;\n        }\n    83%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 0.5;\n        }\n    100%{\n        -webkit-transform: translateY(0%);\n                transform: translateY(0%);\n        opacity: 1;\n        }\n}\n  \n  .anime1{\n  -webkit-animation: Animation1 4s forwards 0s ease;\n          animation: Animation1 4s forwards 0s ease;\n\n}\n  \n  @-webkit-keyframes Animation1{\n  0%{\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\n            transform: rotate(0) scale(0.5) skewY(-25deg);\n    opacity: 0.5;\n    }\n100%{\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\n            transform: rotate(0) scale(1) skewY(0deg);\n    opacity: 1;\n    }\n}\n  \n  @keyframes Animation1{\n  0%{\n    -webkit-transform: rotate(0) scale(0.5) skewY(-25deg);\n            transform: rotate(0) scale(0.5) skewY(-25deg);\n    opacity: 0.5;\n    }\n100%{\n    -webkit-transform: rotate(0) scale(1) skewY(0deg);\n            transform: rotate(0) scale(1) skewY(0deg);\n    opacity: 1;\n    }\n}\n  \n  .mat-card-primary{\n    background-color: white;\n  }\n  \n  .task-card{\n      width: 100%;\n  }\n  \n  .task-head{\n    display: inline-block;\n    margin: 0px;\n    width: 86%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n  }\n  \n  .costum-checkBox{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n  }\n  \n  .costum-checkBox:hover{\n    text-decoration: line-through;\n  }\n  \n  .task-ul{\n      height: 150px;\n      font-size: smaller;\n      list-style: none;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      overflow-y: scroll;\n      text-overflow: ellipsis;\n      padding: 0px;\n  }\n  \n  .task-ul::-webkit-scrollbar {\n    width: 0px;  /* remove scrollbar space */\n    background: transparent;  /* optional: just make scrollbar invisible */\n}\n  \n  .subtask-ul{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.85em;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABsFBMVEUAAADlcGHqinjmgHHjZFDiaFXebVrpd2bmf23ZbFruUTbwVTruUjTqWTruXEPtYU3tVD3iX0flaFLlem3wf3HsUTXvUzftTTDtUTLnTS7wVjzuTS7wUTjuW0LvTTHsV0HrUjfsWUDzWUTsVD7rVj7vVj3wbFHnWEbra1Lxcl7mVkLnVj7pYk34bVX4YUjlXUryaVrsZVTeXErxb1rsWkftZ1brcljoemPfYU/dZVb7iXXtXEbcbVvrbVr1lpLmlHznSEP0X0nqQybxTzXuTS3wSzDnVTXlSC/sUTnzaEfmWDjnSTTwWTrpUjnuXUjuTDPxVz3lWjrrYkrwVDfgUDLmZVLoVUTiUTvoZ0/uc1zlWUb3embfbE71Z1bsVD3jWzzxYlXwXEXkV0vcZVbdZ1bteGfvTi71cWbzTjD5iGvndGH2gWrxcGPpeF/kg3PqemfnWEH2iXzabV/0b1rQhn3WY1bIXU/0UjrwlovlSjXzSy3wTTLvTTDxVDjxPBvzSCn0OxrtUjbvUDTzRSXxQiTrPh3yUTPuSi31SivrRynwRSf1Rib0QR/uTzf4QyP3PR22rECmAAAAenRSTlMALwoFZ0wsIxUM7efbzsejmpZbHhD9+/v49vHu5+Pg2NjTzsjEuKSempaSi4aEgH16dXRvbWtfWVNJQkFAPjkxCPf39fTy8ePi393Z19DNy8rJv766tbWurKqlnpuXlpaSioJ1bGtpYmFfVk1KREA6ODc3MSsrKSQhHg3m++gAAAGCSURBVCjPdc1lT/MAFIbhu+3cDXd3d+d1d3fF3aFdO8flL0PIyFjW3t9Orpw8ZBrxuyLho1jp1yFyMzkiiTsfWtp8blXO7yI74flpnkkCSQRCLfJjIetVjgQItpYfqnmxB+/M0FzYkdHuaDnUncjOht7Z6eYKuUhgpejvjc6fVjN6mGiwpG+bTx3H/miO64JJF4NR1zqZhG2wvdgAoEpjWaslp+EvAKPRKZJOdPIFgIpj6lO7ejz2GWyRHpJt6OYdo+uYviP0a/rFy/sUVxlwr4d4PYrJgJfKOOgXVasBTziJj+zcmzRgi4PwsLVYNODVfJQFsSxkwP0KJX249wy4UcHtpW7AgB0emp7R2aivQsKM5Uy0eSRdrlGAgu98+6+na1or0HlAqNqaq1JBCQDqe2ae5vIrbRyAxegAvx/as9H+WuuB636kNvHeDdxWc+HFP276lJqge79ykHRDtef7ZjJ9fCJhrZHjb362t/95q5zI/uytrUnA4i+Nha+q7AiS7hJhtUjTU6UrxgAAAABJRU5ErkJggg==');\n    background-repeat: no-repeat;\n    background-size: 18px;\n    cursor: default !important;\n}\n  \n  .subtask-ul:hover{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: default !important;\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAQlBMVEUAAAAnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2wnI2xG1CEaAAAAFXRSTlMAqnzrjIRLHtXNwZlWPScNB+G0aF7WnooZAAAAYElEQVQY052OSRKAIAwEo6AooODS//+qC7nATfuSydTUJPKLPKytddA3Tg9D7QTakIfzmZalGM6gsiO8c4TNicpZi3dRHOQ7W50yJJkglk3LuglTPT0CXmpmrDREm+QzF4WMA9vRiMqfAAAAAElFTkSuQmCC');\n    background-repeat: no-repeat;\n    background-size: 18px;\n }\n  \n  .div-width{\n    width: 75%;\n}\n  \n  #signup{\n  margin:50px auto;\n}\n  \n  .marginTop{\n  margin-top: 10%; \n  margin-bottom:10%\n /* background-color: #ffffff61;\n  color: rgba(0,0,0,.54);*/\n}\n  \n  .mat-card-green-people {\n  margin: 5%;\nbox-shadow: 3px 3px 6px 1px rgba(0,0,0,0.2) ;\n}\n\n"

/***/ }),

/***/ "./src/app/user/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-items-center signup\">\n        <div class=\"container\">\n\n          <!--<h1 class=\"text-center head-up\"><img class=\"anime\" src=\"./../../assets/check.png\" alt=\"\"> To</h1>-->\n          <!--<h1 class=\"text-center head-down\"><img class=\"anime\" src=\"./../../assets/check.png\" alt=\"\"> Do</h1>-->\n          <div class=\"row\">\n\n\n            <mat-card class=\"mx-auto marginTop mat-card-green-people\">\n\n              <h3 class=\"text-center\" style=\"margin-top:5%\"> Welcome</h3>\n              <br>\n              <h6 class='text-center'>Signin to continue.</h6>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\"\n                  [(ngModel)]=\"email\">\n                <!--<mat-hint>Email seems to be Ok!</mat-hint>-->\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                  Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br><br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\">\n              </mat-form-field>\n              <br>\n              <h6>Don't have account yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n              <h6 style=\"cursor:pointer\" [routerLink]=\"['/forgot-password']\">Forgot password.</h6>\n              <br>\n              <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i\n                  class=\"material-icons\">navigate_next</i></button>\n              <br>\n\n            </mat-card>\n\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: MyErrorStateMatcher, SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SigninComponent = /** @class */ (function () {
    function SigninComponent(appService, vcr, snackBar, router, _route) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.progress = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    //Validations
    SigninComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    // Submit function
    SigninComponent.prototype.submit = function () {
        var _this = this;
        this.progress = true;
        // check for email
        if (this.email) {
            // check for password 
            if (this.password.length >= 8) {
                var data = {
                    email: this.email,
                    password: this.password
                };
                this.appService.signinFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        _this.router.navigate(['/home']);
                    }
                    else if (apiResponse.status === 404) {
                        _this.progress = false;
                        _this.snackBar.open("Email or Password wrong", "Dismiss", {
                            duration: 5000,
                        });
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                });
            }
            else {
                this.snackBar.open("Make sure your password is more than 8 random characters", "Dismiss", {
                    duration: 5000,
                });
            } // check for password ends here
        }
        else {
            this.snackBar.open("Please enter a valid Email and Password", "Dismiss", {
                duration: 5000,
            });
        } // check for email ends here
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/user/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/user/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n    background-color: #29b6f6\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }\n  \n  .example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n  \n  .example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n          <h1 class=\"text-center\" style=\"margin-top:4%\"> SignUp</h1>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"First name\" type=\"text\" [(ngModel)]=\"firstName\" autofocus>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Last name\" type=\"text\" [(ngModel)]=\"lastName\" autofocus>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select [(value)]=\"selected\">\n              <mat-option>None</mat-option>\n              <mat-option *ngFor=\"let country of countryCode\" [value]=\"country.code\">{{ country.name }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          &nbsp;&nbsp;&nbsp;\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile number\" type=\"number\" [(ngModel)]=\"mobileNumber\" autofocus>\n          </mat-form-field>\n\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\" autofocus>\n            \n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" autofocus>\n          </mat-form-field>\n\n          <br>\n\n          <h6>Already have account? <a [routerLink]=\"['/sign-in']\">SignIn</a> </h6>\n          \n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: MyErrorStateMatcher, SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, snackBar, router, _route) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.progress = false;
        this.countryCode = [];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getCountries();
        //to Check if the user has been invited by someone, if so store it in cookie to add him as friend.
        var userId = this._route.snapshot.queryParams.userId;
        if (userId) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('inviteId', userId);
        }
    };
    // get countries to get calling code of all the countries and maping them to select
    SignupComponent.prototype.getCountries = function () {
        var _this = this;
        this.appService.getAllCountry().subscribe(function (data) {
            _this.countries = data;
            _this.countries.map(function (x) {
                var obj = {
                    name: x.name,
                    code: x.callingCodes[0]
                };
                _this.countryCode.push(obj);
            });
        });
    };
    //Validations
    SignupComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    // On submit function
    SignupComponent.prototype.submit = function () {
        var _this = this;
        if (!this.firstName) {
            this.snackBar.open("enter first name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.lastName) {
            this.snackBar.open("enter last name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.mobileNumber) {
            this.snackBar.open("enter mobile", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.selected) {
            this.snackBar.open("enter country", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.email) {
            this.snackBar.open("enter email", "Dismiss", {
                duration: 5000,
            });
        }
        else if (this.password.length < 8) {
            this.snackBar.open("Please make sure your password is more than 8 random characters", "Dismiss", {
                duration: 5000,
            });
        }
        else {
            this.progress = true;
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobile: '',
                email: this.email,
                password: this.password,
            };
            data.mobile = "+" + this.selected + " " + this.mobileNumber;
            this.appService.signupFunction(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Signup Successful", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.snackBar.open(apiResponse.message + ".", "Dismiss", {
                        duration: 5000,
                    });
                }
            }, function (err) {
                _this.snackBar.open("some error occured. Please try again later", "Dismiss", {
                    duration: 5000,
                });
            });
        } // end condition
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"] },
                    { path: 'change-password/:userId', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"] }
                ])
            ],
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Edwisor\Projects\Todo-master\Todo-master\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map