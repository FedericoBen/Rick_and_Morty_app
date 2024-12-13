interface OrderListProps {
  ascendantOrder: () => void;
  descendantOrder: () => void;
}

const OrderList = ({ ascendantOrder, descendantOrder }: OrderListProps) => {
  return (
    <span className="flex items-center w-full justify-between">
      <p className="text-[16px] text-custom_blue text-nowrap font-greycliff font-medium">
        Order list
      </p>

      <button
        className="hover:bg-gray-100 p-[4px] rounded-lgs text-[16px] hover:text-custom_gray"
        onClick={ascendantOrder}
      >
        A - Z
      </button>
      <button
        className="hover:bg-gray-100 p-[4px] rounded-lgs text-[16px] hover:text-custom_gray"
        onClick={descendantOrder}
      >
        Z - A
      </button>
    </span>
  );
};

export default OrderList;
