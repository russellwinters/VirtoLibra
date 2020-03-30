import React from "react";
import Header from "./Components/Header";
import Background from "./Components/Background";
import Content from "./Components/Content";
import { FirebaseProvider } from "./context";
import FirebaseExample from "./Components/FirebaseExample";
import BestSeller from "./Components/BestSeller";
import GenreList from "./Components/GenreList";
import AuthForm from "./Components/AuthForm";
import AuthBoundary from "./Components/AuthBoundary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Background>
        <FirebaseProvider>
          {/* <link
            href="https://fonts.googleapis.com/css?family=Lato&display=swap"
            rel="stylesheet"
          ></link> */}
          <Header />
          <Switch>
            <Route exact path="/" component={AuthForm} />
            <Route
              path="/dashboard"
              exact
              render={({ match }) => {
                return (
                  <div className="App">
                    <AuthBoundary>
                      <Content>
                        <GenreList />
                        <FirebaseExample />
                        <BestSeller match={match} />
                      </Content>
                    </AuthBoundary>
                  </div>
                );
              }}
            />
            <Route
              path="/dashboard/:genre"
              render={({ match }) => {
                return (
                  <div className="App">
                    <AuthBoundary>
                      <Content>
                        <GenreList />
                        <FirebaseExample />
                        <BestSeller match={match} />
                      </Content>
                    </AuthBoundary>
                  </div>
                );
              }}
            />
          </Switch>
        </FirebaseProvider>
      </Background>
    </Router>
  );
}

export default App;
