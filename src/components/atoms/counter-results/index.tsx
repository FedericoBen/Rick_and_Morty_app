interface CounterResultsProps {
  count: number;
}

const CounterResults = ({ count }: CounterResultsProps) => { 
  return (
    <p className="text-16 text-custom_blue font-sans font-medium">
      {`${count} Results`}
    </p>
  );
};

export default CounterResults;
