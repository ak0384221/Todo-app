import Button from "@mui/material/Button";
import { useContext } from "react";
import { AppStore } from "../Store/AppStore";
export default function RenderLists({ todoItem }) {
  const { reducerHandlerFunction } = useContext(AppStore);

  return (
    <>
      <div className="container text-center mb-12 ">
        <div className="row align-items-start">
          <div className="col">{todoItem.title}</div>
          <div className="col">{todoItem.date}</div>
          <div className="col">
            <Button
              onClick={() => {
                reducerHandlerFunction.removeItem(todoItem.title);
              }}
              variant="contained"
              color="error"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
