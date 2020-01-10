"use strict";
// export const getSender = () => (typeof self !== 'undefined' ? self : null)
Object.defineProperty(exports, "__esModule", { value: true });
function getSender() {
    return typeof self !== 'undefined' ? self : null;
}
exports.getSender = getSender;
