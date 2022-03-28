import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { IndexWrapper } from "../styles/IndexWrapper";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [values, setValues] = useState({
    text: "",
    password: "",
  });
  const router = useRouter();
  const [values2, setValues2] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues2(!values2);
  };
  const see = () => {
    if (values.text == "diyor" && values.password == 2400) {
      localStorage.setItem("access_token", true);
      router.push("/savdo");
    } else {
      toast.warn("hatolik !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push(`/savdo`);
    }
  }, []);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <IndexWrapper>
        <ToastContainer />
        <div className="soha">
          <TextField
            id="filled-basic"
            onChange={handleChange2("text")}
            label="Filled"
            variant="filled"
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values2 ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values2 ? "Y" : "N"}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button onClick={see} variant="contained">
            Success
          </Button>
        </div>
      </IndexWrapper>
    </>
  );
};

export default Index;
