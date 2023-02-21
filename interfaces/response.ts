export interface IUniReponse<T> extends Record<string, any> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}

export interface IPaginationParams {
  pageSize: number;
  pageNumber: number;
}

export interface IPagination<T> extends IPaginationParams {
  totalCount: number;
  totalPages: number;
  nextPage: boolean;
  prePage: boolean;
  list: T[];
}