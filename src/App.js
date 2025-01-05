import React, { lazy, Suspense, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchUsersData } from './Redux/actions/actions';
import Topbar from './Components/Topbar';
import Loader from './Components/Utilities/LoaderComponent';
const UsersDashboard = lazy(() => import('./Components/UsersDashboard'));
const UserProfile = lazy(() => import('./Components/Settings/UserSettings'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch])
  return (
    <Router>
    <Suspense fallback={<Loader />}>
    <div className="h-screen flex overflow-hidden">
      {/* Header */}
      <Topbar/>

      {/* Main Content Area */}
      <div className="pages_container">
      <Routes>
          <Route path="/" element={<UsersDashboard />} />
          <Route path="/settings" element={<UserProfile />} />
      </Routes>
      </div>
    </div>
    </Suspense>
  </Router>
  );
}

export default App;
