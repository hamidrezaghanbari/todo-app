import { useState } from "react";
import { AddIcon, Button } from "..";
import AddForm from "./add-form";

const AddTodo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {open ? (
        <AddForm close={() => setOpen(false)} />
      ) : (
        <h1 className="font-bold text-lg pt-2">
          To Do <small className="font-thin text-sm pl-1">( 20 Limit )</small>
        </h1>
      )}

      <Button
        onClick={() => setOpen((prev) => !prev)}
        className={open ? "rotate-45" : "rotate-0"}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default AddTodo;
