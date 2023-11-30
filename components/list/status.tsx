import { MouseEventHandler } from "react";
import { Button } from "..";
import { Case, Switch } from "@/utils";

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
  return (
    <Switch>
      <Case condition={!!todoListLoading}>
        <span>isLoading ...</span>
      </Case>

      <Case condition={!todoListLoading && todoListLength === 0}>
        <span>Empty List!</span>
      </Case>

      <Case condition={!todoListLoading && todoListLength !== 0}>
        <Button
          disabled={onDeleteLoading}
          className="w-full !bg-red-400 mt-5"
          onClick={onDelete}
        >
          Delete all
        </Button>
      </Case>
    </Switch>
  );

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
