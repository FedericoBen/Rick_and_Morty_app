import { useRef, useState } from "react";
import ButtonSearch from "../../atoms/button-search";
import useEventDocument from "../../../hooks/use-event-document";
import useFilter from "../../../hooks/use-filter";
import useCreateSectionsFilter from "../../../hooks/use-create-sections-filter";

const FilterMenuDesktop = () => {
  const { handlerFilter } = useFilter();

  const [open, setOpen] = useState(false);

  const Sections = useCreateSectionsFilter({
    filterAction: () => {
      setOpen(false);
      handlerFilter();
    },
  });

  const labelRef = useRef<HTMLLabelElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEventDocument<HTMLLabelElement | HTMLButtonElement>({
    refs: [labelRef, buttonRef],
    eventFunction: () => {
      setOpen(false);
    },
  });

  return (
    <>
      <ButtonSearch
        className="hidden md:flex"
        ref={buttonRef}
        onClick={() => setOpen(true)}
      />
      {open && (
        <section
          ref={labelRef}
          className="hidden gap-2 md:flex flex-col justify-between ring-1 ring-black left-0 ring-opacity-5 shadow-lg padding-24 rounded-md  md:absolute md:top-[110%] md:min-h-[278px] md:w-[343px] md:h-auto bg-white z-50 p-[24px]"
        >
          {Sections}
        </section>
      )}
    </>
  );
};

export default FilterMenuDesktop;
