interface CounterFiltersProps {
  count: number;
}

const CounterFilters = ({ count }: CounterFiltersProps) => {
  return (
    <section className="bg-secondary600 bg-opacity-20 min-w-min-[64px] min-h-[24px] rounded-[12px] pr-[12px] pl-[12px] flex items-center justify-center">
      <p className="text-custom_green text-[14px] font-greycliff font-medium">{`${count} filter${
        count > 1 ? "s" : ""
      }`}</p>
    </section>
  );
};

export default CounterFilters;
