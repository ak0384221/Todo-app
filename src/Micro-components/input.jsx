import Button from "@mui/material/Button";
import { useRef } from "react";
import { useContext } from "react";
import { AppStore } from "../Store/AppStore";

export default function Input() {
  const { reducerHandlerFunction } = useContext(AppStore);
  let todoEl = useRef();
  let todoDateEl = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    let todoName = todoEl.current.value;
    let todoDate = todoDateEl.current.value;
    todoEl.current.value = "";
    todoDateEl.current.value = "";
    reducerHandlerFunction.addNewItem(todoName, todoDate);
  }

  return (
    <>
      <div className="container text-center mb-12 ">
        <form onSubmit={handleSubmit} className="row align-items-start">
          <div className="col">
            {/* //todolist// */}
            <input
              aria-label="title"
              className="w-[10rem] border  px-2 h-[3rem] focus:outline-0  rounded-sm placeholder:text-sm"
              placeholder="Enter your todo here"
              ref={todoEl}
              required
            />
          </div>
          {/* //todoDate// */}
          <div className="col">
            <input
              aria-label="date"
              className="w-[9rem] focus:outline-0 h-[3rem] border  text-white px-2"
              type="date"
              ref={todoDateEl}
              required
            />
          </div>
          <div className="col">
            <Button type="submit" variant="contained" color="success">
              Add to list
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
