import HeaderResponsive from "../../atoms/header-responsive";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../constants/routes";
import useFilter from "../../../hooks/use-filter";
import useCreateSectionsFilter from "../../../hooks/use-create-sections-filter";

const FilterMenuResponsive = () => {
  const { handlerFilter } = useFilter();
  const navigate = useNavigate();

  const Sections = useCreateSectionsFilter({
    filterAction: () => {
      navigate(ROUTES.HOME);
      handlerFilter();
    },
  });

  return (
    <section className="md:hidden flex flex-col gap-20 ring-1 padding-24 h-screen w-screen md:h-278 md:w-343 bg-white z-50 p-24">
      <HeaderResponsive title="Filter" onClick={() => navigate(ROUTES.HOME)} />
      {Sections}
    </section>
  );
};

export default FilterMenuResponsive;
