import CounterFilters from "../../atoms/counter-filter";
import CounterResults from "../../atoms/counter-results";

interface ContainerFilterInfoProps {
  countResults: number;
  countFilters: number;
}

const ContainerFilterInfo = ({
  countResults,
  countFilters,
}: ContainerFilterInfoProps) => {
  return (
    <section className="flex justify-between items-center">
      <CounterResults count={countResults} />
      <CounterFilters count={countFilters} />
    </section>
  );
};

export default ContainerFilterInfo;
