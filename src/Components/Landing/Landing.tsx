import { useState, useEffect } from 'react';
import { BrowserRouter as  Router, Route, Link, Switch, useHistory } from 'react-router-dom'
import {Vehicle} from '../Vehicles/Falcon1'
import { NextLaunchLogic } from '../Home/NextLaunchLogic'
import {RocketInfoModel} from '../Vehicles/Interface/RocketIntfoModel'
import {OrbitViewer} from '../OrbitViewer/OrbitViewer'

export const Landing = (props: any) => {

    let VData: RocketInfoModel[] = [];

    const [vehicleData, setVehicleData] = useState<RocketInfoModel[]>(VData);
    const [VehicleSelection, setVehicleSelection] = useState("");
    const history = useHistory();

    const getVehicleSelection = () => {
        const locationStr = history.location.pathname.toString();
        if (locationStr.includes("/vehicles/")) {
            const vehicle = locationStr
                .replace("/vehicles/", "")
                .split("/")[0]
                .toString();
            setVehicleSelection(vehicle);
        }
    };

    const getVehicleData = async() => {
        const falcon9 = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec"
        );
        const falconHeavy = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed"
        );
        const starship = fetch(
            "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee"
        );
        const dragon = fetch(
            "https://api.spacexdata.com/v4/dragons/5e9d058859b1ffd8e2ad5f90"
        );
        await Promise.all([falcon9, falconHeavy, starship, dragon])
            .then((responses) => {
                return Promise.all(
                    responses.map((response) => {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                setVehicleData(data);
            });
    }

    return (
        <div style={{display: "contents"}}>
            <Switch>
                <Route exact path="/" component={NextLaunchLogic}/>
                <Route exact path="/vehicles/:vehicle" component={Vehicle}/>
                <Route exact path="/orbit" component={OrbitViewer}/>
              </Switch>
        </div>
    );
};