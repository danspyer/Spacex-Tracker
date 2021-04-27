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
                    <div className="col-6">
                        <div className="LeftAlignText">
                            <h2 className="bold">{results.data?.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
} 