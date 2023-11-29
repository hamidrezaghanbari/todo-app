import { getAllTodo } from "@/service/requests";
import { Todo } from "..";
import { useQuery } from "@tanstack/react-query";
import { ListStatus } from "./status";
import { useDelete, useDeleteAll } from "@/hooks";

const List = () => {
  const { data: todoList, isLoading: todoListLoading } = useQuery({
    queryKey: ["TODO_LIST"],
    queryFn: () =>
      getAllTodo({ user_id: sessionStorage.getItem("user_id") ?? "" }),
  });

  const { deleteAllLoading, handleDeleteAll } = useDeleteAll();

  const { deleteLoading, handleDelete } = useDelete();

  return (
    <div className="flex flex-col overflow-y-auto gap-2">
      {Array.isArray(todoList) &&
        todoList?.map((todo, index) => (
          <Todo
            key={todo.id}
            currentIndex={index}
            onDelete={() => handleDelete(todo?.id)}
            onDeleteLoading={deleteLoading}
            {...todo}
          />
        ))}

      <ListStatus
        todoListLength={todoList?.length ?? 0}
        todoListLoading={todoListLoading}
        onDelete={handleDeleteAll}
        onDeleteLoading={deleteAllLoading}
      />
    </div>
  );
};

export default List;
