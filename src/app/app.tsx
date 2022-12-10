
import Button from "components/button";

import styles from "./app.module.css";

import Header from "layouts/header";
import Login from "pages/login";
import PersonalInformation from "pages/personal-information";

const App = (): JSX.Element => {
  return (
    <main  
      className="
        flex flex-col 
        items-stretch content-end justify-start 
        h-[calc(100vh-80px)]
        mt-20
        relative
        

        lg:min-h-0
        md:h-[calc(100vh-112px)]
        md:mt-28
      "
    >
        <Header />
        <Login />
    </main>
  );
};

export default App;
