import { editTodo } from "@/service/requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { Todo } from "@/service/types";

type UseAddProps = {
  callback: () => void;
  id: string;
  desc: string;
  isComplete: boolean;
  currentIndex: number;
};

export const useUpdate = ({
  desc,
  isComplete,
  id,
  callback,
  currentIndex,
}: UseAddProps) => {
  const [description, setDescription] = useState(desc);
  const [completed, setCompleted] = useState(isComplete);

  const { mutate: editTodoRequest, isPending: editLoading } = useMutation({
    mutationFn: editTodo,
  });

  const queryClient = useQueryClient();

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    editTodoRequest(
      {
        user_id: sessionStorage.getItem("user_id") ?? "",
        id: id,
        todo: {
          description: description,
          completed: !!completed,
        },
      },
      {
        onSuccess: () => {
          callback();

          queryClient.setQueryData(["TODO_LIST"], (oldData: Todo[]) => {
            return oldData.map((item, index) =>
              index !== currentIndex
                ? item
                : { ...item, description, completed: !!completed }
            );
          });
        },
      }
    );
  };

  return {
    handleEdit,
    descState: { value: description, setState: setDescription },
    completedState: {
      value: completed ? "1" : "",
      setState: () => setCompleted((prev) => !prev),
    },
    editLoading,
  };
};
