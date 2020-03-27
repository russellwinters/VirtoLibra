import React from "react";
import Header from "./Components/Header";
import {FirebaseProvider} from "./context";

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Header />
      </div>
    </FirebaseProvider>
  );
}

export default App;
