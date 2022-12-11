import React, { useState } from "react";

import Button from "components/button";
import Input from "components/input";

import Logo from "assets/vectors/paradox-logo.svg";

const Login: React.FC = () => 
{
  const [userAlias, setUserAlias] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLoginSubmit = (): void => {
    
  }

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

          <div className="flex justify-center items-center bg-gray-900 bg-opacity-50 border-solid border-gray-800 border-opacity-30 border-[1px] w-full h-12 rounded">
            <p className="font-default text-base">Bitte mit den IC-Logindaten einloggen.</p>
          </div>

          <Input label="Nutzername:" fullWidth={true} />
          <Input label="Passwort:" fullWidth={true} />

          <Button fullWidth={true}>Einloggen</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;