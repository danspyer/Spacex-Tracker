import { RouteComponentProps } from "react-router-dom";
import { useState, Fragment } from 'react';
import { useQuery, UseQueryResult } from "react-query";
import { RocketInfoModel } from '../Vehicles/Interface/RocketIntfoModel'

import '../Vehicles/vehicles.css';

type TParams = { vehicle: string }

export interface VehicleProps {
  vehicleData: RocketInfoModel[],
  vehicleSelection: string
}
export const GetVehicleUrl = (param: string) => {
  switch (param) {
    case 'falcon9':
      return "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec";
    case 'falconHeavy':
      return "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69974db09d1ed";
    case 'dragon':
      return "https://api.spacexdata.com/v4/dragons/5e9d058859b1ffd8e2ad5f90";
    case 'starship':
      return "https://api.spacexdata.com/v4/rockets/5e9d0d96eda699382d09d1ee";
    default:
      return "https://api.spacexdata.com/v4/rockets/5e9d0d95eda69973a809d1ec";
  }
};

export const Vehicle = (props: RouteComponentProps<TParams>) => {
  let VehicleId = GetVehicleUrl(props.match.params.vehicle);

  function FetchRocketData() {
    return useQuery<RocketInfoModel, Error>(["RocketData", VehicleId], async () => {
      const response = await fetch(VehicleId);

      if (!response.ok) {
        throw new Error("Failed to fetch!");
      }
      return await response.json()
    });
  }

  const results = FetchRocketData()
  return (
    <div className="NextLaunchContainer LaunchDate">
      <div className="FlexContainer-H h100">
        <div className="FlexChild h100 TextCenter container-fluid">
          <div className="row">
            <div className="col-6 offset-6 col-lg-12  offset-lg-0 ">
              <div className="row">
                <div className="col-lg-8 offset-lg-0 col-4 offset-4 mt-4 mb-4 pl-0 VehicleDataTable">

                  <div className="LeftAlignText">
                    <p className="VehicleName">{results.data?.name}</p>
                    <p className="PanelHeading">OVERVIEW</p>
                  </div>

                  <table className="table">
                    <tbody>
                      <tr>
                        <td>HEIGHT</td>
                        {results.data?.name === "Dragon 2" ? (
                          <td>{results.data?.height_w_trunk.meters} m <span>/ {results.data?.height_w_trunk.feet} ft</span></td>
                        ) : (
                          <td>{results.data?.height?.meters} m <span>/ {results.data?.height.feet} ft</span></td>
                        )}
                      </tr>
                      <tr>
                        <td>DIAMETER</td>
                        <td>{results.data?.diameter?.meters} m <span>/ {results.data?.diameter.feet} ft</span></td>
                      </tr>
                      <tr>
                        <td>MASS</td>
                        {results.data?.name === "Dragon 2" ? (
                          <td>{results.data?.dry_mass_kg} kg</td>
                        ) : (
                          <td>{results.data?.mass?.kg} kg <span>/ {results.data?.mass.lb} lb</span></td>
                        )}
                      </tr>
                      <tr>
                        {results.data?.name === "Dragon 2" ? (
                          <Fragment>
                            <td>LAUNCH PAYLOAD MASS</td>
                            <td> 10 kg </td>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <td>PAYLOAD TO LEO</td>
                            <td>{results.data?.payload_weights[0]?.kg} kg <span>/ {results.data?.payload_weights[0]?.lb} lb</span></td>
                          </Fragment>
                        )}
                      </tr>
                      <tr>
                        {results.data?.name === "Dragon 2" ? (
                          <Fragment>
                            <td>RETURN PAYLOAD MASS</td>
                            <td> 10kg </td>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <td>PAYLOAD TO GTO</td>
                            <td>{results.data?.payload_weights[0]?.kg} kg <span>/ {results.data?.payload_weights[0]?.lb} lb</span></td>
                          </Fragment>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={"col-4 offset-0 col-lg-3 offset-lg-1  " + props.match.params.vehicle + "Img"}>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}