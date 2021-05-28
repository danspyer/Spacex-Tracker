export interface RocketInfoModel {
    name: string;
    diameter: diameter;
    height: height;
    mass: mass;
    dry_mass_kg: number;
    dry_mass_lb: number;
    height_w_trunk: height_w_trunk;
    payload_weights: payload_weights[];
}
interface diameter {
    meters: number;
    feet: number;
}
interface height {
    meters: number;
    feet: number;
}
interface mass {
    kg: number;
    lb: number;
}
interface payload_weights {
    id: string;
    kg: number;
    lb: number;
}
interface height_w_trunk {
    meters: number;
    feet: number;
}
