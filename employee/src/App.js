import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import OmdbContainer from "./components/OmdbContainer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={OmdbContainer} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

// export default App;


// import OmdbContainer from "./components/OmdbContainer";

// function App() {
//   return <OmdbContainer />;
// }

export default App;