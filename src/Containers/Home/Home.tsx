import TVShowForm from "../../components/TVShowForm/TVShowForm.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-50 mx-auto">
        <TVShowForm />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
