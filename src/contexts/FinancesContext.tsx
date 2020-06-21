import React, { createContext, ReactNode, useMemo, useReducer } from "react";

interface Source {
  name: string;
  values: number[];
}

interface Finances {
  sources: { [key: string]: Source };
}

interface FinancesAction {
  type: "ADD_SOURCE";
  payload: Source;
}

const initialState: Finances = {
  sources: {}
};

interface Props {
  children: ReactNode;
}

const FinancesContext = createContext<{
  state: Finances;
  addSource: (sourceName: string) => void;
  // @ts-ignore: allow null-ish as initial state (won't be null by render time)
}>(null);

export const FinancesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    (state: Finances, action: FinancesAction): Finances => {
      if (action.type === "ADD_SOURCE") {
        return {
          ...state,
          sources: {
            ...state.sources,
            [action.payload.name]: action.payload
          }
        };
      }
      throw Error(
        `Unhandled action "${action.type}" with payload${action.payload}`
      );
    },
    initialState
  );

  const addSource = useMemo(
    () => (sourceName: string): void => {
      dispatch({
        type: "ADD_SOURCE",
        payload: {
          name: sourceName,
          values: []
        }
      });
    },
    []
  );

  return (
    <FinancesContext.Provider value={{ state, addSource }}>
      {children}
    </FinancesContext.Provider>
  );
};

export default FinancesContext;
