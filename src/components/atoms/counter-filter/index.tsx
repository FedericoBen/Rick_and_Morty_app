interface CounterFiltersProps {
  count: number;
}

const CounterFilters = ({ count }: CounterFiltersProps) => {
  return (
    <section className="bg-secondary600 bg-opacity-20 min-w-min-64 min-h-24 rounded-[12px] pr-12 pl-12 flex items-center justify-center">
      <p className="text-custom_green text-14 font-sans font-medium">{`${count} filter${
        count > 1 ? "s" : ""
      }`}</p>
    </section>
  );
};

export default CounterFilters;
