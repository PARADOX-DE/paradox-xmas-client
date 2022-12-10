import React from "react";

import {
  TextField as MuiInput,
  StandardTextFieldProps,

  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { UserIcon, UsersIcon } from "@heroicons/react/outline";

interface IInputProps extends StandardTextFieldProps { }

const Input: React.FC<IInputProps> = ({
  label,
  value,
  placeholder,
  size,
  disabled,
  fullWidth,
  className,
  onChange
}) => {
  return (
    <MuiInput 
      label={label}
      value={value}
      placeholder={placeholder}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      onChange={onChange}
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#767676" fillRule="evenodd" d="M11.995 2c2.617 0 4.894 2.033 4.626 4.471l-.025.189-.516 4.28c-.317 2.088-1.956 3.499-4.085 3.499-2.054 0-3.647-1.314-4.043-3.3l-.037-.215-.51-4.244C6.99 4.14 9.312 2 11.995 2zM22 19.192c0-2.134-2.263-3.692-5.277-3.692-.838 0-1.912.187-3.041.485l-1.098.302a5.98 5.98 0 01-.127.03l-.215.043a1.518 1.518 0 01-.244.023c-.214 0-.428-.042-.772-.145l-.283-.085-.552-.15a13.21 13.21 0 00-.914-.197l-1.081-.194a7.135 7.135 0 00-1.122-.112C4.44 15.5 2 17.114 2 19.19v.865c0 1.063.8 1.942 1.812 1.942L20.187 22C21.199 22 22 21.12 22 20.058v-.866zm-7.716-2.329c.925-.225 1.787-.363 2.439-.363 2.524 0 4.277 1.207 4.277 2.692v.866c0 .53-.375.942-.813.942l-16.375-.003c-.437 0-.812-.412-.812-.942v-.865c0-1.416 1.926-2.69 4.274-2.69.248 0 .562.034.962.099l.465.081 1.021.193c.282.06.568.132.858.215l.252.076.313.091c.325.088.576.128.853.128.223 0 .453-.034.775-.112l.356-.093.645-.183.51-.132zM8.372 6.37C8.196 4.551 9.942 3 11.995 3c2.119 0 3.914 1.65 3.61 3.52l-.515 4.284-.034.188c-.306 1.48-1.492 2.447-3.06 2.447-1.633 0-2.847-1.048-3.09-2.65l-.534-4.42z" clipRule="evenodd"></path></svg>
          </InputAdornment>
        ),
      }}
      sx={
        {
          border: "1px solid rgb(222, 237, 242)",
          borderRadius: "4px 4px 0px 0px",
          background: "rgb(255, 255, 255)",

          "& .MuiFormLabel-root": {
            fontSize: "16px",
            fontFamily: "SantanderMicroTextW05-Rg",
            color: "rgb(118, 118, 118)",
            margin: "0px 16px"
          },

          "& .MuiInputLabel-shrink": {
            marginTop: "5px"
          },

          "& .MuiInputBase-root": {
            padding: "0px 12px 5px 0px"
          },

          "input": {
            paddingLeft: "16px",
            paddingRight: "16px",
            color: "rgb(68, 68, 68)",
            fontFamily: "SantanderMicroTextW05-Rg",
          }
        }
      }
    />
  );
};

export default Input;