import Head from "next/head";
import SignIn from "../components/Authentication/SignIn";
import { withPublic } from "../hooks/route";

const Login = ({ auth }) => {
  const { currentUser } = auth;
  console.log(currentUser);
  return (
    <>
      <Head>
        <title>Sign In - Invoicer</title>
        <meta name="description" content="Sign in to invoicer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </>
  );
};

export default withPublic(Login);
