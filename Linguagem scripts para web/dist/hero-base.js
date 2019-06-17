"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    //
    function Hero() {
    }
    ;
    //
    Hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    Hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    Hero.prototype.getIdsecreta = function () {
        return this.idsecreta;
    };
    Hero.prototype.setIdsecreta = function (idsecreta) {
        this.idsecreta = idsecreta;
    };
    Hero.prototype.get = function () {
        return this.codenome;
    };
    return Hero;
}());
exports.Hero = Hero;
