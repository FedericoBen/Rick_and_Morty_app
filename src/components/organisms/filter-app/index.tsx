import useCharacterStore from "../../../store/use-character-store";
import ContainerFilterInfo from "../../molecules/container-filter-info";
import ORDER_RESULT from "../../../constants/filters/order-result";
import useMenuFilterStore from "../../../store/use-menu-filter-store";
import OrderList from "../../molecules/order-list";
import Filter from "../../molecules/filter";

const FilterApp = () => {
  const orderList = useCharacterStore((state) => state.orderList);
  const filtersSelected = useMenuFilterStore((state) => state.filtersSelected);
  const listCharacters = useCharacterStore((state) => state.listCharacters);

  return (
    <div className="flex flex-col gap-5 mb-45 ">
      <Filter />
      {filtersSelected.length > 0 && (
        <ContainerFilterInfo
          countResults={listCharacters.length}
          countFilters={filtersSelected.length}
        />
      )}
      <OrderList
        ascendantOrder={() => orderList(ORDER_RESULT.ASCENDANT)}
        descendantOrder={() => orderList(ORDER_RESULT.DESCENDANT)}
      />
    </div>
  );
};

export default FilterApp;
