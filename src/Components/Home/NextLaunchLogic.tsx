import React, { useEffect, useState } from "react";
import { NextLaunchModel } from "./Interface/NextLaunchModel";
import {NextLaunch} from './NextLaunch'
import { useQuery } from "react-query";

export const NextLaunchLogic = (props: any) => {
    function FetchLaunchData() {
      return useQuery<NextLaunchModel, Error>("todos", async () => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/next");
    
        if (!response.ok) {
          throw new Error("Failed to fetch!");
        }
    
        return await response.json()
      });
    }

    const result = FetchLaunchData();  

    return (
      <NextLaunch show={result.status == "success"} data={result.data} />
    );
} 