import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import { Container, Navbar } from "react-bootstrap";
import ShowDetails from "./Containers/ShowDetails/ShowDetails.tsx";

const App = () => {
  return (
    <>
      <header className="mb-5">
        <Navbar className="bg-dark ">
          <Container>
            <NavLink className="navbar-brand text-white" to="/">
              TV Shows
            </NavLink>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/shows/:id" element={<ShowDetails />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
