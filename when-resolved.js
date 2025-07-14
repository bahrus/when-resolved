// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, ProPAP, PAP, AllProps, AP, BAP} from './ts-refs/when-resolved/types' */

/**
 * @implements {Actions}
 * 
 */
class WhenResolved extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
    }
}

await WhenResolved.bootUp();
export { WhenResolved };