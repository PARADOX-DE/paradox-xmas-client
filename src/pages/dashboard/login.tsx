import React, { useState } from "react";

import Button from "components/button";
import Input from "components/input";

import Logo from "assets/vectors/paradox-logo.svg";
import { useAuthContext } from "app/contexts/auth-context";

const Dashboard: React.FC = () => 
{
  const { currentAuthUser } = useAuthContext();
  
  return (
    <div className="flex justify-center items-center h-full backdrop-blur-sm">
      <div className="flex bg-primary bg-opacity-30 h-full 2xl:w-3/12 xl:w-1/3 w-full justify-center items-center">
        <div className="flex flex-col items-center justify-center w-full p-16 gap-3">
          <div className="text-center">
            <img src={Logo} alt="Logo" className="w-36"/>
          </div>

          <div className="text-center">
            <p className="font-medium text-3xl">Adventskalender</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 w-full h-[1px]" />

          <p className="font-default text-base">Willkommen, { currentAuthUser?.username }.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;