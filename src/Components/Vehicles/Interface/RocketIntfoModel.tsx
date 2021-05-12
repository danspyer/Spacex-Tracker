export interface RocketInfoModel {
    name: string;
    diameter: diameter;
    height: height;
    mass: mass;
    dry_mass_kg: number;
    dry_mass_lb: number;
    height_w_trunk: height_w_trunk;
}
export interface diameter {
    meters: number;
}
export interface height {
    meters: number;
}
export interface mass {
    kg: number;
}
export interface payload_weights {
    id: string;
    kg: number;
}

export interface height_w_trunk {
    meters: number;
}


