import { Formik, Form, Field, ErrorMessage, Label } from "formik";
import { useAuth } from "../../contexts/AuthenticationContext";
import Backdrop from "../form/Backdrop";
import styles from "./Authentication.module.scss";

const SignIn = ({ isOpen, setIsOpen }) => {
  const { login } = useAuth();
  return (
    <>
      {isOpen && (
        <>
          <Backdrop setIsOpen={setIsOpen} />
          <div className={styles.container}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  await login(values.email, values.password).then(() => {
                    setIsOpen(false);
                  });
                  setSubmitting(false);
                } catch (error) {
                  return error;
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form className={styles.form}>
                  <h2>Sign In</h2>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    className={styles.input}
                  />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className={styles.input}
                  />
                  <ErrorMessage name="password" component="div" />
                  <button
                    className={styles.submit}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign In
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </>
  );
};

export default SignIn;
