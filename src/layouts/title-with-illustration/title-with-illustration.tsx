import React from "react";

import Illustration from "assets/vectors/login-illustration.svg";

type TitleWithIllustrationProps = {
  title?: string
  children?: React.ReactNode
}

const TitleWithIllustration: React.FC<TitleWithIllustrationProps> = ({children, title = "Willkommen bei Santander"}) => {
  return (
    <div
      className="
        w-full relative 
        flex flex-grow flex-shrink-0 flex-col 
        justify-between items-center
        bg-white
      "
    >
      <div
        className="
          flex flex-row 
          mt-12 mb-16
        "
      >
        <div
          className="
            flex 
            w-full h-full

            md:flex-[0_1_50%]
          "
        >
          <div
            className="
              max-w-xs
              pl-4 pr-4

              md:p-0
              md:mx-10
              md:max-w-lg

              lg:mr-20
              
              xl:mr-28
            "
          >
            <p
              className="
                font-headline
                text-4xl text-gray-900

                lg:text-[40px]
                lg:leading-10
                md:text-3xl
              "
            >{title}</p>

            <div
              className="
                pt-4
              "
            >
              <span className="text-xs font-micro text-gray-800">Weitere Informationen zum Online Banking finden Sie </span>
              <a className="font-micro-bold text-xs text-primary">hier</a>
              <span className="text-xs font-micro text-gray-800">.</span>
            </div>

            <form>
              { children }
            </form>
          </div>
        </div>

        <div
          className="
            hidden
            w-full h-full

            md:flex-[0_1_50%]
            md:block
          "
        >
          <div className="
            xl:ml-28
            lg:ml-20
            md:ml-10

            flex
            justify-[left]
            items-center
            h-full
          ">
            <img src={Illustration} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleWithIllustration;