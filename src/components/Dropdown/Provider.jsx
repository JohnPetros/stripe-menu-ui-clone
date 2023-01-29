import { createContext, useCallback, useEffect, useState } from "react";

export const Context = createContext();

export function DropdownProvider({ children }) {
  const [options, setOptions] = useState([]);
  const [targetId, setTargetId] = useState(null);
  const [casheId, setCasheId] = useState(null);

  const registerOption = useCallback(
    ({
      id,
      optionDimensions,
      optionCenterX,
      WrappedContent,
      backgroundHeight,
    }) => {
      setOptions((options) => [
        ...options,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
          backgroundHeight,
        },
      ]);
    },
    [setOptions]
  );

  const updateOptionProps = useCallback(
    (optionId, props) => {
      setOptions((options) => {
        options.map((option) => {
          if (option.id === optionId) {
          }
          return option;
        });
      });
    },
    [setOptions]
  );

  const getOptionById = useCallback(
    (id) => options.find((option) => option.id === id),
    [options]
  );

  const deleteOptionById = useCallback(
    (id) =>
      setOptions((options) => options.filter((option) => option.id !== id)),
    [setOptions]
  );

  useEffect(() => {
    if (targetId) setCasheId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        setTargetId,
        setCasheId,
        options,
        targetId,
        casheId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
