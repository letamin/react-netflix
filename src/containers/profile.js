import React from 'react';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profile } from "../components";

export function ProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                </Header.Frame>
            </Header>

            <Profile>
                <Profile.Title>Who is watching?</Profile.Title>
                <Profile.List>
                    <Profile.Item onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                        <Profile.Picture src={user.photoURL} />
                        <Profile.Name>{user.displayName}</Profile.Name>
                    </Profile.Item>
                </Profile.List>
            </Profile>
        </>
    )
}
