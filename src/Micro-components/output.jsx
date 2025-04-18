import RenderLists from "./renderList";
import { useContext } from "react";
import { AppStore } from "../Store/AppStore";
export default function Output() {
  const { todoItems } = useContext(AppStore);
  return (
    <>
      <div className="container text-center  ">
        {todoItems.map((todoItem) => {
          return <RenderLists todoItem={todoItem} key={todoItem.title} />;
        })}
      </div>
    </>
  );
}
