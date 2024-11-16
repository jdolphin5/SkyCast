import { TextField } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface LoginMenuProps {
  navigationSelected: string;
  setNavigationSelected: Dispatch<SetStateAction<string>>;
}

const LoginMenu: React.FC<LoginMenuProps> = (props: LoginMenuProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div className="sub-menu-container">
      <div className="grid-sub-menu-title">
        {/*Left column with Nav Title */}
        <div className="grid-sub-menu-title-left">
          <h1>LOGIN</h1>
        </div>
        {/*Right column with X to close*/}
        <div
          className="grid-sub-menu-title-right"
          onClick={() => props.setNavigationSelected("none")}
        >
          <p
            className={"hover-class-color"}
            style={
              {
                margin: "0px",
                padding: "0px",
                cursor: "pointer",
                "--hover-color": "red",
              } as React.CSSProperties
            }
          >
            X
          </p>
        </div>
      </div>

      <div className="sub-menu-list">
        <TextField
          id="standard-basic-username"
          label="Username"
          variant="standard"
          sx={{
            "& .MuiFormControl-root": {
              //height: "40px", // Adjust the overall height of the TextField
              //width: "260px", // Adjust the overall width of the TextField
            },
            "& .MuiInput-root": {
              //height: "100%", // Ensure input area fills the container
              //height: "45px", // Adjust input height
              //width: "260px", // Adjust input width
            },
            "& .MuiInputBase-input": {
              //class for the user-entered text
              color: "white",
            },
            "& .MuiInputLabel-root": {
              //class for the label / helper text
              //transform: "translate(0, 12px) scale(1)", // Adjust label position for alignment
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              //class for the label / helper text when focused
              //transform: "translate(0, -6px) scale(0.75)", // Shrink label when focused
              color: "red",
            },
            "& .MuiInput-root:before": {
              borderBottomColor: "gray", // Default border color
            },
            "& .MuiInput-root:hover:before": {
              borderBottomColor: "darkgray", // Hover border color
            },
            "& .MuiInput-root:after": {
              borderBottomColor: "red", // Focused border color
            },
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
          }}
        />
        <TextField
          id="standard-basic-password"
          label="Password"
          variant="standard"
          type="password"
          sx={{
            "& .MuiInputBase-input": {
              //class for the user-entered text
              color: "white",
            },
            "& .MuiInputLabel-root": {
              //class for the label / helper text
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              //class for the label / helper text when focused
              color: "red",
            },
            "& .MuiInput-root": {
              //height: "45px", // Adjust input height
              //width: "260px", // Adjust input width
            },
            "& .MuiInput-root:before": {
              borderBottomColor: "gray", // Default border color
            },
            "& .MuiInput-root:hover:before": {
              borderBottomColor: "darkgray", // Hover border color
            },
            "& .MuiInput-root:after": {
              borderBottomColor: "red", // Focused border color
            },
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default LoginMenu;
