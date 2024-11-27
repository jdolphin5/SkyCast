import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { loginCall, signupCall } from "../../../Functions/API";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFormData>();

  const onSubmitLogin = (data: LoginFormData) => {
    console.log("login button clicked");
    loginCall(data.username, data.password);
  };

  const onSubmitSignup = (data: LoginFormData) => {
    console.log("signup button clicked");
    signupCall(data.username, data.password).then((data: any | null) => {
      console.log("signup data", data);
    });
  };

  return (
    <form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="standard-basic-username"
              label="Username"
              variant="standard"
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "red" },
                "& .MuiInput-root:before": { borderBottomColor: "gray" },
                "& .MuiInput-root:hover:before": {
                  borderBottomColor: "darkgray",
                },
                "& .MuiInput-root:after": { borderBottomColor: "red" },
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="standard-basic-password"
              label="Password"
              variant="standard"
              type="password"
              sx={{
                "& .MuiInputBase-input": { color: "white" },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputLabel-root.Mui-focused": { color: "red" },
                "& .MuiInput-root:before": { borderBottomColor: "gray" },
                "& .MuiInput-root:hover:before": {
                  borderBottomColor: "darkgray",
                },
                "& .MuiInput-root:after": { borderBottomColor: "red" },
              }}
            />
          )}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <Button
            onClick={handleSubmit(onSubmitLogin)}
            variant="contained"
            sx={{ backgroundColor: "black", width: "100px" }}
          >
            Login
          </Button>
          <Button
            onClick={handleSubmit(onSubmitSignup)}
            variant="contained"
            sx={{ backgroundColor: "black", width: "100px" }}
          >
            Sign up
          </Button>
        </div>
      </Box>
    </form>
  );
};
export default LoginForm;
