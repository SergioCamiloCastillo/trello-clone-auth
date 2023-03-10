"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("@environments/environment");
var token_interceptor_1 = require("../interceptor/token.interceptor");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.apiUrl = environment_1.environment.API_URL;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl + "/api/v1/users", {
            context: token_interceptor_1.checkToken()
        });
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
