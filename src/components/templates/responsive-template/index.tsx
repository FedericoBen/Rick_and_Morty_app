import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../../organisms/sidebar";
import SelectedCharacter from "../../organisms/selected-character";
import ROUTES from "../../../constants/routes";
import FilterMenuResponsive from "../../molecules/filter-menu-responsive";
import { useEffect } from "react";

const ResponsiveTemplate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(ROUTES.HOME);
  }, []);

  return (
    <main className="md:hidden w-screen h-screen">
      <Routes>
        <Route path={ROUTES.HOME} element={<Sidebar />} />
        <Route path={ROUTES.VIEW_CHARACTER} element={<SelectedCharacter />} />
        <Route path={ROUTES.FILTER} element={<FilterMenuResponsive />} />
      </Routes>
    </main>
  );
};

export default ResponsiveTemplate;
