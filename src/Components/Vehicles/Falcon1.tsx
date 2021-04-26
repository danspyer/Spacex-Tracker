import {
  RouteComponentProps
} from "react-router-dom";

type TParams = { vehicle: string }

export interface GetVehicleProps {
  shortname: string
}

export const GetVehicleId = (param : string) => {
  switch (param) {
    case'falcon1':
      return "5e9d0d95eda69955f709d1eb";
    case 'falcon9':
      return "5e9d0d95eda69973a809d1ec";
  }
};

export const Vehicle = (props: RouteComponentProps<TParams>) => {

  let VehicleId = GetVehicleId(props.match.params.vehicle);

  console.log(VehicleId);

  return (
    <div className="NextLaunchContainer LaunchDate">
          <div className="FlexContainer-H h100">
              <div className="FlexChild h100 TextCenter container-fluid">
                  <div className="row">
                      <div className="col-6">
                          <div className="LeftAlignText">
                              <h2 className="bold">{props.match.params.vehicle}</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
} 