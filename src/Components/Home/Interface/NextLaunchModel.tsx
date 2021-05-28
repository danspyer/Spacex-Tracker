export interface NextLaunchModel {
    date_utc: Date;
    date_unix: number;
    name: string;
    details: string;
    cores: Cores[];
}

export interface Cores {
    landing_attempt: boolean;
    landing_type: string;
    landpad: string;
    reused: boolean;
}


export interface landPad {
    name: string;
    full_name: string;
    type: string;
}