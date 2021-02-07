import React, { useEffect, useState } from "react";
import { NextLaunchModel } from "./Interface/NextLaunchModel";
import {NextLaunch} from './NextLaunch'
import { useQuery, QueryResult } from "react-query";

export const NextLaunchLogic = (props: any) => {

    const [LaunchDate, updateLaunchDate] = useState("");
    const [ShowData, setShowData] = useState(false);
    const [Success, setSuccess] = useState(false)

    function FetchLaunchData(): QueryResult<NextLaunchModel> {
        return useQuery("todos", async () => {
          const response = await fetch("https://api.spacexdata.com/v4/launches/next");
      
          if (!response.ok) {
            throw new Error("Failed to fetch!");
          }
      
          return await response.json();
        });
      }

    const result = FetchLaunchData();

    let year:any = new Date().getFullYear();    

    return (
      <NextLaunch show={result.status == "success"} data={result.data} />
    );
} 