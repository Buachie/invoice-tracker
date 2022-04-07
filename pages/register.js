import Head from "next/head";
import SignUp from "../components/Authentication/SignUp";
import { withPublic } from "../hooks/route";

const Register = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Invoicer</title>
        <meta name="description" content="Sign up for invoicer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp />
    </>
  );
};

export default Register;
