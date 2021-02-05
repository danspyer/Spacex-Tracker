import React from "react";
import { NextLaunchModel } from './Interface/NextLaunchModel'

export interface NextLaunchProps {
    show: boolean,
    data: NextLaunchModel | undefined
};

export const NextLaunch = (props: NextLaunchProps) => {
    return (
        <div className="LaunchDate">
            {props?.data?.name}
            <br></br>
            {props?.data?.date_utc}
        </div>
    );
}