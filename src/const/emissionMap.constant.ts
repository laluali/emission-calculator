import {EmissionModel} from "../models/emission.model";

export class EmissionMapConstant{
    private emissionMap: Map<string, EmissionModel>;

    constructor() {
        this.emissionMap = new Map<string, EmissionModel>();
        this.emissionMap.set('small-diesel-car', new EmissionModel('small-diesel-car', 142));
        this.emissionMap.set('small-petrol-car', new EmissionModel('small-petrol-car', 154));
        this.emissionMap.set('small-plugin-hybrid-car', new EmissionModel('small-plugin-hybrid-car', 73));
        this.emissionMap.set('small-electric-car', new EmissionModel('small-electric-car', 50));
        this.emissionMap.set('medium-diesel-car', new EmissionModel('medium-diesel-car', 171));
        this.emissionMap.set('medium-petrol-car', new EmissionModel('medium-petrol-car', 192));
        this.emissionMap.set('medium-plugin-hybrid-car', new EmissionModel('medium-plugin-hybrid-car', 110));
        this.emissionMap.set('medium-electric-car', new EmissionModel('medium-electric-car',58));
        this.emissionMap.set('large-diesel-car', new EmissionModel('large-diesel-car', 209));
        this.emissionMap.set('large-petrol-car', new EmissionModel('large-petrol-car', 282));
        this.emissionMap.set('large-plugin-hybrid-car', new EmissionModel('large-plugin-hybrid-car', 126));
        this.emissionMap.set('large-electric-car', new EmissionModel('large-electric-car', 73));
        this.emissionMap.set('bus', new EmissionModel('bus', 27));
        this.emissionMap.set('train', new EmissionModel('train', 6));
    }

    getEmissionMap(){
        return this.emissionMap;
    }

    getEmission(transportationMethod: string) : EmissionModel | Error | undefined{
        return this.emissionMap.has(transportationMethod) ? this.emissionMap.get(transportationMethod) : new Error('Unsupported transportation Method');
    }
}
