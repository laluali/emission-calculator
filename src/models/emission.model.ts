

export class EmissionModel implements VehicleEmissionInterface {

    emission: number;
    vehicleType: string;

    constructor(vehicleType: string, emission: number) {
        this.vehicleType = vehicleType;
        this.emission = emission;
    }

}
