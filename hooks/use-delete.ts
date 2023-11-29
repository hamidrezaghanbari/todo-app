import { deleteTodo } from "@/service/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDelete = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTodoRequest, isPending: deleteLoading } = useMutation({
    mutationFn: deleteTodo,
  });

  const handleDelete = (todoId: string | number) => {
    deleteTodoRequest(
      {
        user_id: sessionStorage.getItem("user_id") ?? "",
        id: todoId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["TODO_LIST"] });
        },
      }
    );
  };

  return { handleDelete, deleteLoading };
};
