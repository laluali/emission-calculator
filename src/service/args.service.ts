/**
 * @file ArgsService
 * @desc This file will hold all the data formation manipulations needed for arguments received from CLI
 */
export class ArgsService{

    argsMap:Map<string, string>;

    /**
     * @constructor Initialises Arguments Map
     */
    constructor() {
        this.argsMap = new Map<string, string>();
    }

    /**
     *
     * @param val
     * @return Map<string, string>
     */
    getArgsMap(val: string[]):Map<string, string> {
        val.forEach(
            (v,i) => {
                if(v.includes('=')){
                    this.argsMap.set(v.split('=')[0].replace('--', ''), v.split('=')[1]);
                } else if(v.startsWith('--')){
                    this.argsMap.set(v.replace('--', ''), '')
                } else {
                    let key = (val[i-1]).replace('--', '');
                    this.argsMap.set(key, v)
                }
            }
        )
        return this.argsMap;
    }
}
