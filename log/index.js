"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function returns a namespaced log function.
 * The log function takes one argument and an optional second argument.
 *
 * @example
 *
 * import { Logger } from '@magikcraft/log'
 * const log = Logger('my_module')
 * log('A message')
 * log('Players:', players)
 *
 * @param namespace
 */
exports.Logger = function (namespace) { return function (msg, toLog) {
    var ns = "[" + namespace.replace('/server/scriptcraft-plugins/', '') + "] ";
    var message = toLog ? ns + " " + msg + " " + toLog : ns + " " + msg;
    console.log(message); // tslint:disable-line
}; };
