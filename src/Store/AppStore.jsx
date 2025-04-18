import { createContext, useReducer } from "react";
export const AppStore = createContext([]);

//reducer function//
function todoReducerFunc(currState, action) {
  console.log(currState);
  let newState = currState;
  if (action.type === "ADD_POST") {
    newState = [
      ...currState,
      { title: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newState = currState.filter(
      (item) => item.title != action.payload.itemName
    );
  }

  return newState;
}
//reducer function//

// context//
export default function AppStoreProvider({ children }) {
  const [todoItems, dispatchTodoFunc] = useReducer(todoReducerFunc, []);

  const reducerHandlerFunction = {
    addNewItem: function (itemName, itemDate) {
      const newItem = {
        type: "ADD_POST",
        payload: {
          itemName,
          itemDate,
        },
      };
      dispatchTodoFunc(newItem);
    },
    removeItem: function (itemName) {
      const deletedItem = {
        type: "DELETE_ITEM",
        payload: {
          itemName,
        },
      };
      dispatchTodoFunc(deletedItem);
    },
  };

  return (
    <AppStore.Provider value={{ todoItems, reducerHandlerFunction }}>
      {children}
    </AppStore.Provider>
  );
}
