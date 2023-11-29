import { addTodo } from "@/service/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

type UseAddProps = {
  callback: () => void;
};

export const useAdd = ({ callback }: UseAddProps) => {
  const [description, setDescription] = useState("");

  const { mutate: addTodoRequest } = useMutation({
    mutationFn: addTodo,
  });

  const queryClient = useQueryClient();

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    addTodoRequest(
      {
        user_id: sessionStorage.getItem("user_id") ?? "",
        todo: { description: description },
      },
      {
        onSuccess: () => {
          callback();
          setDescription("");
          queryClient.invalidateQueries({ queryKey: ["TODO_LIST"] });
        },
      }
    );
  };

  return {
    descState: { value: description, setState: setDescription },
    handleAddTodo,
  };
};
