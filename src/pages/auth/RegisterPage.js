import React from "react";
import AuthTemplate from "../../containers/auth/AuthTemplate";
import RegisterContainer from "../../containers/auth/RegisterContainer";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterContainer />
    </AuthTemplate>
  );
};

export default RegisterPage;
