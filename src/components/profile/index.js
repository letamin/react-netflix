import React from 'react'
import { Container, Title, List, Item, Name, Picture } from './styles/profile';

export default function Profile({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profile.List = function functionProfileList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

Profile.Item = function functionProfileItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profile.Picture = function functionProfilePicture({ src, ...restProps }) {
    return (
        <Picture
            {...restProps}
            src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
        />
    )
}

Profile.Name = function functionProfileName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}
