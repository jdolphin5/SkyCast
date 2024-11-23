import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log(data); // Send this to your API
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          username: data.username,
          password: data.password,
        },
        { withCredentials: true }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error signing in with username/password", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            variant="contained"
            sx={{ backgroundColor: "black", width: "100px" }}
          >
            Login
          </Button>
          <Button
            type="submit"
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
