import FilterMenuDesktop from "../filter-menu-desktop";
import ButtonSearch from "../../atoms/button-search";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";

const FilterMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <FilterMenuDesktop />
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
