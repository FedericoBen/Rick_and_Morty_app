import { useEffect, RefObject } from "react";

interface UseEventDocumentProps<T extends Element> {
  eventFunction: () => void;
  refs: (RefObject<T> | null)[];
}

const useEventDocument = <T extends Element>({
  refs,
  eventFunction,
}: UseEventDocumentProps<T>) => {
  function handlerOnClick(e: MouseEvent): void {
    if (refs.some((ref) => !ref?.current)) return;
    const path = e.composedPath() as Element[];
    const condition = !path.some((element) =>
      refs.some((ref) => ref?.current === element)
    );
    if (condition) eventFunction();
  }

  useEffect(() => {
    document.addEventListener("click", handlerOnClick);
    return () => {
      document.removeEventListener("click", handlerOnClick);
    };
  }, []);

  return null;
};

export default useEventDocument;
