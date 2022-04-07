import Head from "next/head";
import SignUp from "../components/Authentication/SignUp";
import { withPublic } from "../hooks/route";

const Register = () => {
  return <SignUp />;
};

export default Register;
