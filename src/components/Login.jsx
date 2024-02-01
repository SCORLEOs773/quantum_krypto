import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const CustomContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const CustomPaper = styled(Paper)({
  width: "500px",
  padding: "30px",
  borderRadius: "20px",
  background: "#87CEEB",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
});

const CustomTextField = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
});

const CustomButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#000000",
  fontWeight: "bold",
  borderRadius: "20px",
  width: "100%",
  marginBottom: "10px",
});

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
  };

  const handleAppleLogin = () => {
    // Handle Apple login logic
  };

  return (
    <CustomContainer>
      <CustomPaper>
        <h1 style={{ color: "#000000" }}>Login</h1>
        <CustomTextField label="Username" variant="outlined" />
        <CustomTextField label="Password" type="password" variant="outlined" />
        <CustomButton variant="contained" onClick={handleLogin}>
          Login
        </CustomButton>
        <Divider style={{ margin: "20px 0" }} />
        <CustomButton
          variant="outlined"
          onClick={handleGoogleLogin}
          style={{ backgroundColor: "#4285F4", color: "#ffffff" }}
        >
          Login with Google
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={handleAppleLogin}
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          Login with Apple
        </CustomButton>
      </CustomPaper>
      <p style={{ marginTop: "20px", color: "#FFFFFF" }}>
        "Crypto is the key to unlock your digital fortress!"
      </p>
    </CustomContainer>
  );
};

export default Login;
