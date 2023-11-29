import { deleteAllTodo } from "@/service/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAll = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteAllTodoRequest, isPending: deleteAllLoading } =
    useMutation({
      mutationFn: deleteAllTodo,
    });

  const handleDeleteAll = (e: any) => {
    e.preventDefault();
    deleteAllTodoRequest(
      {
        user_id: sessionStorage.getItem("user_id") ?? "",
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["TODO_LIST"] });
        },
      }
    );
  };

  return { handleDeleteAll, deleteAllLoading };
};
