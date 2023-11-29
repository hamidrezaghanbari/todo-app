import httpService from "./https";
import * as Props from "./types";

export const login = ({ email, password }: Props.LoginRequest) =>
  httpService.post<Props.LoginResponse, Props.LoginRequest>("login", {
    email: email,
    password: password,
  });

export const logout = () => httpService.post("logout", {});

export const addTodo = ({ user_id, todo }: Props.CreateTodoPayload) =>
  httpService.post<Props.Todo, Props.TodoRequest>(`${user_id}/todos`, {
    ...todo,
  });

export const editTodo = ({ user_id, id, todo }: Props.EditTodoPayload) =>
  httpService.put<Props.Todo, Props.TodoRequest>(`${user_id}/todos/${id}`, {
    ...todo,
  });

export const getAllTodo = ({ user_id }: Props.GetDeleteAllTodo) =>
  httpService.get<Props.Todo[]>(`${user_id}/todos`, {});

export const getTodo = ({ user_id, id }: Props.GetDeleteTodo) =>
  httpService.get<Props.Todo>(`${user_id}/todos/${id}`, {});

export const deleteTodo = ({ user_id, id }: Props.GetDeleteTodo) =>
  httpService.delete<Props.DeleteResponse>(`${user_id}/todos/${id}`, {});

export const deleteAllTodo = ({ user_id }: Props.GetDeleteAllTodo) =>
  httpService.delete<Props.DeleteResponse>(`${user_id}/todos`, {});
