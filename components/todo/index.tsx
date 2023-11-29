import { MouseEventHandler, useState } from "react";
import { AddIcon, Button, Input, TrashIcon } from "..";
import { useUpdate } from "@/hooks";

type TodoProps = {
  description: string;
  completed?: boolean;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  onDeleteLoading?: boolean;
  currentIndex: number;
  id: string | number;
};

const Todo = ({
  description,
  completed = false,
  onDelete,
  onDeleteLoading = false,
  currentIndex,
  id,
}: TodoProps) => {
  const [open, setOpen] = useState(false);

  const { handleEdit, descState, completedState, editLoading } = useUpdate({
    callback: () => setOpen(false),
    currentIndex,
    desc: description,
    isComplete: completed,
    id: id?.toString(),
  });

  return (
    <div
      className={`"w-full flex border-l-8 hover:shadow-xl items-center justify-between rounded-xl px-3 border border-slate-800 transition-all duration-150 hover:cursor-pointer shadow-md py-3 bg-primary-light 
            ${completed ? "border-l-green-400" : "border-l-red-400"}`}
    >
      {open ? (
        <form
          onSubmit={handleEdit}
          className="w-full flex gap-2 items-center justify-between"
        >
          <Input
            label="Description"
            placeholder="Description*"
            name="description"
            stateHandler={descState}
            className="w-36"
          />

          <Input
            label="Done?"
            placeholder="Description*"
            name="description"
            stateHandler={completedState}
            type="checkbox"
            className="w-10"
          />

          <Button
            disabled={descState?.value?.length == 0 || editLoading}
            className="bg-green-400 mr-2 hover:bg-green-600"
            type="submit"
          >
            <AddIcon />
          </Button>
        </form>
      ) : (
        <span onClick={() => setOpen(true)} className="hover:cursor-pointer">
          {description}
        </span>
      )}

      <Button
        onClick={open ? () => setOpen(false) : onDelete}
        disabled={onDeleteLoading}
      >
        {open ? <AddIcon className="rotate-45 w-6 h-6" /> : <TrashIcon />}
      </Button>
    </div>
  );
};

export default Todo;
