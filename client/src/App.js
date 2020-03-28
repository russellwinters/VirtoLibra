import React from 'react'
import Header from './Components/Header'
import {FirebaseProvider} from './context'
import FirebaseExample from './Components/FirebaseExample'
import BestSeller from './Components/BestSeller'

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <Header />
        {/* <FirebaseExample /> */}
        <BestSeller />
      </div>
    </FirebaseProvider>
  )
}

export default App
