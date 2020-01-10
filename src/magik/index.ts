/**
 * Magik API
 *
 */
import { aspecto } from './aspecto'
import { celeritate } from './celeritate'
import { declaro } from './declaro'
import { dixit } from './dixit'
import { Doable } from './do'
import { doNTimes } from './doNTimes'
import { DurableMap } from './durableMap'
import { exmemento } from './exmemento'
import { exsultus } from './exsultus'
import { getPlayer } from './getPlayer'
import { getSender } from './getSender'
import { hic } from './hic'
import { iacta } from './iacta'
import { ianuae } from './ianuae'
import { icePath } from './icePath'
import { incendium } from './incendium'
import { infierno } from './infierno'
import { locationFromJSON } from './locationFromJSON'
import { locationToJSON } from './locationToJSON'
import { memento } from './memento'
import { noxvida } from './noxvida'
import { random } from './random'
import { satio } from './satio'
import { shakti } from './shakti'
import { spectris } from './spectris'
import { stella } from './stella'
import { type } from './type'
import { viburnum } from './viburnum'
import { volare } from './volare'

// If we need these namespaced timers, it should be done on the global object at boot time

// const timers = require('./timer');

const MagikcraftAPI = {
	aspecto,
	celeritate,
	clearInterval,
	clearTimeout,
	declaro,
	dixit,
	do: (iterations = 1) => new Doable(iterations),
	doNTimes,
	DurableMap,
	exsultus,
	exmemento,
	fromJSON: locationFromJSON,
	getPlayer,
	getPlugin: () => __plugin,
	getSender,
	hic,
	iacta,
	ianuae,
	icePath,
	incendium,
	infierno,
	memento,
	noxvida,
	random,
	satio,
	setInterval,
	setTimeout,
	shakti,
	spectris,
	stella,
	toJSON: locationToJSON,
	type,
	viburnum,
	volare,
}

export default MagikcraftAPI
