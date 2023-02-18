import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import PaginationConFetch from "./pages/PaginationConFetch";
import PaginationSinFetch from "./pages/PaginationSinFetch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PaginationSinFetch />} />
            <Route path="/pagination-fetch" element={<PaginationConFetch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Paginación sin fetch</Link>
        <Link to="/pagination-fetch">Paginación con fetch</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
