import lenIcon from "../../../assets/icons/len_icon.svg";
import FilterMenu from "../../molecules/filter-menu";
import useCharacterStore from "../../../store/use-character-store";
import ContainerFilterInfo from "../../molecules/container-filter-info";
import ORDER_RESULT from "../../../constants/filters/order-result";
import useMenuFilterStore from "../../../store/use-menu-filter-store";
import OrderList from "../../molecules/order-list";

const Filter = () => {
  const orderList = useCharacterStore((state) => state.orderList);
  const filtersSelected = useMenuFilterStore((state) => state.filtersSelected);
  const listCharacters = useCharacterStore((state) => state.listCharacters);

  return (
    <div className="flex flex-col gap-5 mb-[45px] ">
      <span className="flex relative items-center justify-between w-full bg-[#F3F4F6] h-[52px] rounded-[8px] pt-[9px] pr-[13px] pb-[9px] pl-[20px]">
        <img src={lenIcon} alt="lenIcon" />
        <p className="text-14px text-gray">Search or filter results</p>
        <FilterMenu />
      </span>
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

export default Filter;
