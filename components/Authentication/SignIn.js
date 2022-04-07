import { Formik, Form, Field, ErrorMessage, Label } from "formik";
import { useAuth } from "../../contexts/AuthenticationContext";
import styles from "./Authentication.module.scss";

const SignIn = () => {
  const { login } = useAuth();
  return (
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
          } else if (values.password !== values.confirmPassword) {
            errors.password = "Passwords do not match";
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await login(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <h2>Sign In</h2>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="email"
              className={styles.input}
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
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
  );
};

export default SignIn;
