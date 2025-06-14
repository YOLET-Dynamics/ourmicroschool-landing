export type HttpResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      code: string;
      message: string;
    };
