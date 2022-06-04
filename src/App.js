import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetup from "./pages/AllMeetups";
import Favorities from "./pages/Favorities";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      {/* <MainNavigation/> */}
      <Routes>
        <Route path="/" element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorities" element={<Favorities />} />
      </Routes>
    </Layout >
  );
}

export default App;
