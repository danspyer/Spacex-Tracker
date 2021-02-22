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
                <div className="FlexChild h100 TextCenter container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="LeftAlignText">
                                <h4> UPCOMING LAUNCH: </h4>
                                <h2 className="bold">{props?.data?.name}</h2>
                            </div>
                            <div className="LeftAlignText mt-2">
                                <button className="btn SpaceXBtn">
                                    View More
                                </button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="LeftAlignText">
                                <CountdownTimer target_date_unix={props.data?.date_unix} update_interval={1000} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}