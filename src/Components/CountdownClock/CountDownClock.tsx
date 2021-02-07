import React, { useEffect, useState } from "react";
import { CountdownProps } from "./Interface/CountdownProps";
import "../CountdownClock/CountDownClock.css"

export const CountdownTimer = (props: CountdownProps) => {

    const [daysToGo, updateDays] = useState("");
    const [hoursToGo, updateHours] = useState("");
    const [MinuitesToGo, updateMins] = useState("")
    const [SecondsToGo, updateSecs] = useState("")

    setInterval( function() {
        if( props.target_date_unix == null)
        {
            return;
        }

        var nowMS = Date.now();
        console.log('NowMS: ' + nowMS);

        var LaunchUnixTime = props.target_date_unix * 1000
        console.log('UNIX Time to launch: ' + LaunchUnixTime);

        var MSToLaunch = LaunchUnixTime - nowMS;

        var days = Math.floor(MSToLaunch / (1000 * 60 * 60 * 24));
        var hours = Math.floor((MSToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((MSToLaunch % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((MSToLaunch % (1000 * 60)) / 1000);

        updateDays(days.toString());
        updateHours(hours.toString());
        updateMins(minutes.toString());
        updateSecs(seconds.toString())

    }, 1000 )

    return (
        <div>
            <div className="countdownContainer">
                <div className="CountdownElement days">
                    <p>{daysToGo}</p>
                </div>
                <div className="CountdownElement hours">
                    <p>{hoursToGo}</p>
                </div>
                <div className="CountdownElement mins">
                    <p>{MinuitesToGo}</p>
                </div>
                <div className="CountdownElement seconds">
                    <p>{SecondsToGo}</p>
                </div>
            </div>
        </div>
    );
} 