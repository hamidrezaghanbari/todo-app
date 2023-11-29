import { MouseEventHandler } from "react";
import { Button } from "..";

type ListStatusProps = {
  todoListLoading: boolean;
  todoListLength: number;
  onDelete?: MouseEventHandler<HTMLButtonElement>;
  onDeleteLoading?: boolean;
};

export const ListStatus = ({
  todoListLoading,
  todoListLength,
  onDelete,
  onDeleteLoading = false,
}: ListStatusProps) => {
  if (todoListLoading) {
    return "isLoading ...";
  
  } else if (todoListLength === 0) {
    return "Empty List!";

  } else {
    return (
      <Button
        disabled={onDeleteLoading}
        className="w-full !bg-red-400 mt-5"
        onClick={onDelete}
      >
        Delete all
      </Button>
    );
  }
};
