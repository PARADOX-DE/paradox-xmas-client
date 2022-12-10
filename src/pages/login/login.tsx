import React, { useState } from "react";

import Button from "components/button";
import Input from "components/input";

import TitleWithIllustration from "layouts/title-with-illustration";

const Login: React.FC = () => 
{
  const [userAlias, setUserAlias] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLoginSubmit = (): void => {
    
  }

  return (
    <TitleWithIllustration>
      <Input 
        className="!mt-6"
        fullWidth={true}
        label="Benutzerkennung"
        variant="standard"
        onChange={userAlias => setUserAlias(userAlias.target.value)} />

      <Input 
        className="!mt-8"
        fullWidth={true}
        label="Passwort"
        variant="standard"
        onChange={password => setPassword(password.target.value)} />

      <a 
        className="
        block cursor-pointer text-sm font-micro-bold text-primary mt-4 mb-6 whitespace-nowrap hover:ease-in-out 
        hover:transition hover:text-primary-light
      ">Passwort zurücksetzen</a>
      
      <Button
        size="large"
        fullWidth={true}
        onClick={handleLoginSubmit}>
          Einloggen
      </Button>
    </TitleWithIllustration>
  );
};

export default Login;