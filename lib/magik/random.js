"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = function (min, max) {
    if (min === void 0) { min = 1; }
    if (max === void 0) { max = 10; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
