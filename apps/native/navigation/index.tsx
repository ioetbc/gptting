import React from "react";
import {useAuthentication} from "../hooks/useAuthentication";
import UserStack from "./user-stack";
import AuthStack from "./auth-stack";

export default function RootNavigation() {
  const {user} = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
