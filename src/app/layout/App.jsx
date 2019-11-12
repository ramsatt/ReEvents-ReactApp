import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { HomePage } from "../../features/Home/HomePage";
import { EventDeteiledPage } from "../../features/event/EventDetailed/EventDeteiledPage";
import { PeopleDashboard } from "../../features/User/PeopleDashboard/PeopleDashboard";
import { UserDetailedPage } from "../../features/User/UserDetailedPage/UserDetailedPage";
import { SettingsDashboard } from "../../features/User/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDeteiledPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        ></Route>
      </Fragment>
    );
  }
}

export default App;
