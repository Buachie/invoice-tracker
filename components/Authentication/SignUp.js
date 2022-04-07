import { Formik, Form, Field, ErrorMessage, Label } from "formik";
import { useAuth } from "../../contexts/AuthenticationContext";
import styles from "./Authentication.module.scss";

const SignUp = () => {
  const { signup } = useAuth();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (values.password !== values.confirmPassword) {
            errors.password = "Passwords do not match";
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await signup(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h2>Sign Up</h2>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
            />
            <ErrorMessage name="password" component="div" />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.input}
            />
            <ErrorMessage name="confirmPassword" component="div" />
            <button
              className={styles.submit}
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
