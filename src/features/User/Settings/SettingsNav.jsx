import React, { Fragment } from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const SettingsNav = () => {
  return (
    <Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Menu.Item as={NavLink} to="/settings/basics">
          Basics
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/about">
          About Me
        </Menu.Item>
        <Menu.Item as={NavLink} to="/settings/photos">
          My Photos
        </Menu.Item>
      </Menu>
      <Grid.Row />
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Menu.Item>My Account</Menu.Item>
      </Menu>
    </Fragment>
  );
};
