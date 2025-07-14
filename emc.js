// @ts-check
import { BeHive, MountObserver, seed } from 'be-hive/be-hive.js';
/** @import {AP} from './ts-refs/when-resolved/types'; */
/** @import {EMC} from './ts-refs/trans-render/be/types' */

const remoteSpecifierStringSetLocalProp = String.raw `^(?<remoteSpecifierString>.*) set (?<localProp>.*)`;

/**
 * @type {[string, string]}
 */
const rssTors = ['remoteSpecifierString', 'remoteSpecifier'];
/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'when-resolved',
    enhPropKey: 'whenResolved',
    importEnh: async () => {
        const { WhenResolved } = await import('./when-resolved.js');
        return WhenResolved;
    },
    map: {
        '0.0': {
            instanceOf: 'Object$entences',
            objValMapsTo: '.',
            regExpExts: {
                parsedStatements: [
                    {
                        regExp: remoteSpecifierStringSetLocalProp,
                        defaultVals: {},
                        dssKeys: [['remoteSpecifierString', 'remoteSpecifier'], ['localSpecifierString', 'localSpecifier']],
                    }
                ]
            }
        }
    }
};

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);