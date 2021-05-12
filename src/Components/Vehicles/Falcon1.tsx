import { RouteComponentProps } from "react-router-dom";
import { useState } from 'react';
import { useQuery, UseQueryResult } from "react-query";
import { RocketInfoModel } from '../Vehicles/Interface/RocketIntfoModel'

type TParams = { vehicle: string }

export interface VehicleProps {
  vehicleData: RocketInfoModel[],
  vehicleSelection: string
}
export const GetVehicleUrl = (param : string) => {
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

export const Vehicle = (props: RouteComponentProps<TParams>) => 
{
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
                    <div className="col-6 offset-sm-6">
                        <div className="LeftAlignText">
                            <p className="VehicleName">{results.data?.name}</p>
                            <p>OVERVIEW</p>
                        </div>
                        <div>
                          <div className="col-8 mt-4 mb-4 pl-0">
                              <table className="table ">
                                  <tbody>
                                      <tr>
                                          <td>HEIGHT</td>
                                          { results.data?.name === "Dragon 2" ? (
                                            <td>{results.data?.height_w_trunk.meters} m</td>
                                          ) : (
                                            <td>{results.data?.height?.meters} m</td>
                                          ) }
                                      </tr>
                                      <tr>
                                          <td>DIAMETER</td>
                                          <td>{results.data?.diameter?.meters} m</td>
                                      </tr>
                                      <tr>
                                          <td>MASS</td>
                                          { results.data?.name === "Dragon 2" ? (
                                            <td>{results.data?.dry_mass_kg} kg</td>
                                          ) : (
                                            <td>{results.data?.mass?.kg} kg</td>
                                          ) }
                                      </tr>
                                      <tr>
                                          <td>PAYLOAD TO LEO</td>
                                          <td>0 kg</td>
                                      </tr>
                                      <tr>
                                          <td>PAYLOAD TO GTO</td>
                                          <td>0 kg</td>
                                      </tr>
                                      <tr>
                                          <td>PAYLOAD TO MARS</td>
                                          <td>0 kg</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
} 