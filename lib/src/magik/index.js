"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Magik API
 *
 */
var aspecto_1 = require("./aspecto");
var celeritate_1 = require("./celeritate");
var declaro_1 = require("./declaro");
var dixit_1 = require("./dixit");
var do_1 = require("./do");
var doNTimes_1 = require("./doNTimes");
var durableMap_1 = require("./durableMap");
var exmemento_1 = require("./exmemento");
var exsultus_1 = require("./exsultus");
var getPlayer_1 = require("./getPlayer");
var getSender_1 = require("./getSender");
var hic_1 = require("./hic");
var iacta_1 = require("./iacta");
var ianuae_1 = require("./ianuae");
var icePath_1 = require("./icePath");
var incendium_1 = require("./incendium");
var infierno_1 = require("./infierno");
var locationFromJSON_1 = require("./locationFromJSON");
var locationToJSON_1 = require("./locationToJSON");
var memento_1 = require("./memento");
var noxvida_1 = require("./noxvida");
var random_1 = require("./random");
var satio_1 = require("./satio");
var shakti_1 = require("./shakti");
var spectris_1 = require("./spectris");
var stella_1 = require("./stella");
var type_1 = require("./type");
var viburnum_1 = require("./viburnum");
var volare_1 = require("./volare");
// If we need these namespaced timers, it should be done on the global object at boot time
// const timers = require('./timer');
var MagikcraftAPI = {
    aspecto: aspecto_1.aspecto,
    celeritate: celeritate_1.celeritate,
    clearInterval: clearInterval,
    clearTimeout: clearTimeout,
    declaro: declaro_1.declaro,
    dixit: dixit_1.dixit,
    do: function (iterations) {
        if (iterations === void 0) { iterations = 1; }
        return new do_1.Doable(iterations);
    },
    doNTimes: doNTimes_1.doNTimes,
    DurableMap: durableMap_1.DurableMap,
    exsultus: exsultus_1.exsultus,
    exmemento: exmemento_1.exmemento,
    fromJSON: locationFromJSON_1.locationFromJSON,
    getPlayer: getPlayer_1.getPlayer,
    getPlugin: function () { return __plugin; },
    getSender: getSender_1.getSender,
    hic: hic_1.hic,
    iacta: iacta_1.iacta,
    ianuae: ianuae_1.ianuae,
    icePath: icePath_1.icePath,
    incendium: incendium_1.incendium,
    infierno: infierno_1.infierno,
    memento: memento_1.memento,
    noxvida: noxvida_1.noxvida,
    random: random_1.random,
    satio: satio_1.satio,
    setInterval: setInterval,
    setTimeout: setTimeout,
    shakti: shakti_1.shakti,
    spectris: spectris_1.spectris,
    stella: stella_1.stella,
    toJSON: locationToJSON_1.locationToJSON,
    type: type_1.type,
    viburnum: viburnum_1.viburnum,
    volare: volare_1.volare,
};
exports.default = MagikcraftAPI;
