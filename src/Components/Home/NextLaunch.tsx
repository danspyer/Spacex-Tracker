import React from "react";
import { NextLaunchModel } from './Interface/NextLaunchModel'
import { CountdownTimer } from '../CountdownClock/CountDownClock'
import { useState } from 'react';

export interface NextLaunchProps {
    show: boolean,
    data: NextLaunchModel | undefined
};

const LaunchDetails = (props: NextLaunchProps) => {
    return (
        <div className="row darkBackground mt-5">
            <div className="col-6 text-left mt-4 mb-4 pl-4">
                <h4>{props?.data?.name}</h4>
                <p>Check back soon for more info</p>
            </div>
            <div className="col-6 mt-4 mb-4">
                <table className="table ">
                    <tbody>
                        <tr>
                            <td>SCHEDULED LAUNCH</td>
                            <td>March 10, 2021</td>
                        </tr>
                        <tr>
                            <td>REUSED</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>PAYLOAD ORBIT</td>
                            <td>LEO</td>
                        </tr>
                        <tr>
                            <td>LANDING ZONE</td>
                            <td>DRONESHIP, OCISLY</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export const NextLaunch = (props: NextLaunchProps) => {
    const [ShowLaunchDetails, SetShowLaunchDetails] = useState(false);

    const onClick = () => {
        ShowLaunchDetails == false ? SetShowLaunchDetails(true) : SetShowLaunchDetails(false)
    }

    return (
        <div className="NextLaunchContainer LaunchDate">
            <div className="FlexContainer-H h100">
                <div className="FlexChild h100 TextCenter container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="LeftAlignText">
                                <h4> UPCOMING </h4>
                                <h2 className="bold">{props?.data?.name} Mission</h2>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="LeftAlignText">
                                <CountdownTimer target_date_unix={props.data?.date_unix} update_interval={1000} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="LeftAlignText mt-2">
                                <button className="btn SpaceXBtn" onClick={onClick}>
                                    <a> View More </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    { ShowLaunchDetails ? <LaunchDetails data={props.data} show={false} /> : null }
                </div>
            </div>
        </div>
    );
}