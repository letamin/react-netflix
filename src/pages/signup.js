import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [error, setError] = useState("");

    const isInValid = (password === "" || emailAddress === "" || firstName === "");

    const handleSignUp = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1,
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    })
                    .catch(error => setError(error.message))
            })
            .catch(error => {
                setError(error.message);
                setFirstName("");
                setEmailAddress("");
                setPassword("");
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            autoComplete="off"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInValid} type="submit">Sign Up</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPCHA to ensure you are not a bot.
                        Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}
