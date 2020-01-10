/// <reference types="@scriptcraft/types" />
/**
 * Magik API
 *
 */
import { aspecto } from './aspecto';
import { celeritate } from './celeritate';
import { declaro } from './declaro';
import { dixit } from './dixit';
import { Doable } from './do';
import { doNTimes } from './doNTimes';
import { DurableMap } from './durableMap';
import { exmemento } from './exmemento';
import { exsultus } from './exsultus';
import { getSender } from './getSender';
import { iacta } from './iacta';
import { ianuae } from './ianuae';
import { icePath } from './icePath';
import { incendium } from './incendium';
import { infierno } from './infierno';
import { locationFromJSON } from './locationFromJSON';
import { locationToJSON } from './locationToJSON';
import { noxvida } from './noxvida';
import { satio } from './satio';
import { shakti } from './shakti';
import { spectris } from './spectris';
import { stella } from './stella';
import { viburnum } from './viburnum';
import { volare } from './volare';
declare const MagikcraftAPI: {
    aspecto: typeof aspecto;
    celeritate: typeof celeritate;
    clearInterval: (handle: number) => void;
    clearTimeout: (handle: number) => void;
    declaro: typeof declaro;
    dixit: typeof dixit;
    do: (iterations?: number) => Doable;
    doNTimes: typeof doNTimes;
    DurableMap: typeof DurableMap;
    exsultus: typeof exsultus;
    exmemento: typeof exmemento;
    fromJSON: typeof locationFromJSON;
    getPlayer: (player: any) => Player | null;
    getPlugin: () => Plugin;
    getSender: typeof getSender;
    hic: () => Location;
    iacta: typeof iacta;
    ianuae: typeof ianuae;
    icePath: typeof icePath;
    incendium: typeof incendium;
    infierno: typeof infierno;
    memento: typeof import("./memento")._setItem;
    noxvida: typeof noxvida;
    random: (min?: number, max?: number) => number;
    satio: typeof satio;
    setInterval: (callbackFn: any, delay: any) => number;
    setTimeout: (callbackFn: any, delay: any) => number;
    shakti: typeof shakti;
    spectris: typeof spectris;
    stella: typeof stella;
    toJSON: typeof locationToJSON;
    type: (name: any) => any;
    viburnum: typeof viburnum;
    volare: typeof volare;
};
export default MagikcraftAPI;
//# sourceMappingURL=index.d.ts.map