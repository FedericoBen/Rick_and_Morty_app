import { useState } from "react";
import FilterMenuDesktop from "../filter-menu-desktop";
import ButtonSearch from "../../atoms/button-search";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";


const FilterMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();



  return (
    <div>
      <FilterMenuDesktop
        open={menuOpen}
        onOpen={() => setMenuOpen(true)}
        onClose={() => setMenuOpen(false)}
      />
      <ButtonSearch
        className="md:hidden"
        onClick={() => {
          navigate(ROUTES.FILTER);
        }}
      />
    </div>
  );
};

export default FilterMenu;
