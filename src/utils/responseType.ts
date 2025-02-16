export type DefaultDataResponse = {
  message: string;
};

export type ResponseType<T = DefaultDataResponse> = T | void;
