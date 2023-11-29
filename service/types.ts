export type IParams = {
  [key: string]: any;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number | string;
  name: string;
  email: string;
  token: string;
} & IParams;

export type ErrorResponse = {
  message: string;
};

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type TBase = {
  user_id: string | number;
};

export type TodoId = {
  id: string | number;
};

export type Todo = {
  description: string;
  completed?: boolean;
  meta?: {
    [key: string]: string;
  };
} & TodoId;

export type TodoRequest = Omit<Partial<Todo>, "meta" | "id">

export type CreateTodoPayload = TBase & { todo: TodoRequest };
export type EditTodoPayload = TBase & TodoId & { todo: TodoRequest };


export type DeleteResponse = { message: string };

export type GetDeleteTodo = TBase & TodoId;
export type GetDeleteAllTodo = TBase;
