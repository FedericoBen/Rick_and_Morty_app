interface CounterResultsProps {
  count: number;
}

const CounterResults = ({ count }: CounterResultsProps) => {
  return (
    <p className="text-[16px] text-custom_blue font-greycliff font-medium">
      {`${count} Results`}
    </p>
  );
};

export default CounterResults;
