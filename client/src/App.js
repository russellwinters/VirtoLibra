import React from "react";
import Header from "./Components/Header";
import Background from "./Components/Background";
import Content from "./Components/Content";
import { FirebaseProvider } from "./context";
import FirebaseExample from "./Components/FirebaseExample";
import GenreList from "./Components/GenreList";

function App() {
  return (
    <Background>
      <FirebaseProvider>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
        <div className="App">
          <Header />
          <Content>
            <GenreList />
            <FirebaseExample />
          </Content>
        </div>
      </FirebaseProvider>
    </Background>
  );
}

export default App;
