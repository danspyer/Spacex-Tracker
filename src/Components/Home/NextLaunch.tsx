import React from "react";
import { NextLaunchModel } from './Interface/NextLaunchModel'
import { CountdownTimer } from '../CountdownClock/CountDownClock'

export interface NextLaunchProps {
    show: boolean,
    data: NextLaunchModel | undefined
};

export const NextLaunch = (props: NextLaunchProps) => {
    return (
        <div className="NextLaunchContainer LaunchDate">

            <div className="FlexContainer-H h100">
                <div className="FlexChild h100 TextCenter">
                    <div className="LeftAlignText">
                        <h4> UPCOMING LAUNCH: </h4>
                        <h2>{props?.data?.name}</h2>
                    </div>
                
                </div>
                <div className="FlexChild h100 TextCenter">
                    <div className="LeftAlignText">
                        <CountdownTimer target_date_unix={props.data?.date_unix} update_interval={1000} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}