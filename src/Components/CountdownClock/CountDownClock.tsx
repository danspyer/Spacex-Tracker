import React, { useState } from "react";
import { CountdownProps } from "./Interface/CountdownProps";
import "../CountdownClock/CountDownClock.css"

export const CountdownTimer = (props: CountdownProps) => {

    const [daysToGo, updateDays] = useState("");
    const [hoursToGo, updateHours] = useState("");
    const [MinuitesToGo, updateMins] = useState("");
    const [SecondsToGo, updateSecs] = useState("");

    setInterval( function() {
        if( props.target_date_unix == null)
        {
            return;
        }

        var now_unix = Math.floor(Date.now() / 1000);

        var launch_unix = props.target_date_unix;

        var SecondsToLaunch = launch_unix - now_unix;

        var days = Math.floor(SecondsToLaunch / (60 * 60 * 24));
        var hours = Math.floor((SecondsToLaunch % (60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((SecondsToLaunch % (60 * 60)) / (60));
        var seconds = Math.floor((SecondsToLaunch % 60));

        updateDays(days.toString());
        updateHours(hours.toString());
        updateMins(minutes.toString());
        updateSecs(seconds.toString())

    }, props.update_interval )

    return (
        <div>
            <div className="countdownContainer">
                <div className="CountdownElement days">
                    <h3 className="bold">{daysToGo}</h3>
                </div>
                <div className="CountdownElement hours">
                    <h3 className="bold">{hoursToGo}</h3>
                </div>
                <div className="CountdownElement mins">
                    <h3 className="bold">{MinuitesToGo}</h3>
                </div>
                <div className="CountdownElement seconds">
                    <h3 className="bold">{SecondsToGo}</h3>
                </div>
            </div>
        </div>
    );
}