import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HomePage } from "../../features/Home/HomePage";
import EventDeteiledPage from "../../features/event/EventDetailed/EventDeteiledPage";
import { PeopleDashboard } from "../../features/User/PeopleDashboard/PeopleDashboard";
import { UserDetailedPage } from "../../features/User/UserDetailedPage/UserDetailedPage";
import { SettingsDashboard } from "../../features/User/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/TestArea/TestComponent";

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
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDeteiledPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route
                    exact
                    path={["/createEvent", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        ></Route>
      </Fragment>
    );
  }
}

export default withRouter(App);
