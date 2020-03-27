import React from "react";
import Header from "./Components/Header";
import {FirebaseProvider} from "./context";
import FirebaseExample from "./Components/FirebaseExample";

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Header />
        <FirebaseExample />
      </div>
    </FirebaseProvider>
  );
}

export default App;
