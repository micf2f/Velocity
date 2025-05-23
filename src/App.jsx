import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import SignUpRoute from "./routes/SignUpRoute";
import ProfileRoute from "./routes/ProfileRoute";
import ErrorRoute from "./routes/ErrorRoute";


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUpRoute />} />
          <Route path="/profile" element={<ProfileRoute />} />
        </Route>
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </Router>

  );

}


export default App;
