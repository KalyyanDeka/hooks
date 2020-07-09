import React, { useState } from "react";

export const AuthContext = React.creactContext({
  isAuth: false,
  login: () => {},
});

const AuthContxtProvider = (props) => {
  const [isAuthenticated, setIsAthenticated] = useState(false);

  const loginHandler = () => {
    setIsAthenticated(true);
  };

  return (
    <AuthContext.provider
      value={{ login: loginHandler, isAuth: isAuthenticated }}
    >
      {props.children}
    </AuthContext.provider>
  );
};

export default AuthContxtProvider;
