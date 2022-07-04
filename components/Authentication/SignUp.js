import { Formik, Form, Field, ErrorMessage, Label } from "formik";
import { useAuth } from "../../contexts/AuthenticationContext";
import Backdrop from "../form/Backdrop";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  z-index: 1000;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  background-color: #fff;
  padding: 1em;
  border-radius: 20px;
`;

const StyledField = styled(Field)`
  padding: 0.5em;
  border-radius: 30px;
  border: 1px solid #dfe3fa;
`;
const SubmitButton = styled.button`
  padding: 0.5em;
  border-radius: 30px;
  border: 1px solid #dfe3fa;
  background-color: #7c5dfa;
  color: #fff;
  transition: 0.3s ease-out;
  &:hover {
    background-color: lighten(#7c5dfa, 5%);
  }
`;
const SignUp = ({ isOpen, setIsOpen }) => {
  const { signup } = useAuth();
  return (
    <>
      {isOpen && (
        <>
          <Backdrop setIsOpen={setIsOpen} />
          <Wrapper>
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
                try {
                  await signup(values.email, values.password).then(() => {
                    setIsOpen(false);
                  });
                  setSubmitting(false);
                } catch (error) {
                  return error;
                }
              }}
            >
              {({ isSubmitting }) => (
                <StyledForm>
                  <h2>Sign Up</h2>
                  <StyledField
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <ErrorMessage name="email" component="div" />
                  <StyledField
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                  <ErrorMessage name="password" component="div" />
                  <StyledField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                  />
                  <ErrorMessage name="confirmPassword" component="div" />
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    Sign Up
                  </SubmitButton>
                </StyledForm>
              )}
            </Formik>
          </Wrapper>
        </>
      )}
    </>
  );
};

export default SignUp;
