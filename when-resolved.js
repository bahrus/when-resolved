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
        propInfo: {
            ...propInfo,
            parsedStatements: {},
            rawStatements: {},
        },
        positractions: [resolved, rejected],
        compacts:{
            when_parsedStatements_changes_call_hydrate: 0,
        }
    }

    de = de;

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        const {parsedStatements} = self;
        const {find} = await import('trans-render/dss/find.js');
        const {whenResolved} = await import('be-hive/whenResolved.js');
        for(const parsedStatement of parsedStatements){
            const {localSpecifier, remoteSpecifier} = parsedStatement;
        }
        return /** @type {PAP} */({
            resolved: true,
        })
    }
}

await WhenResolved.bootUp();
export { WhenResolved };