import { EHttpRsCode } from "../configs/const.ts";
import { IPagination, IUniReponse } from "../interfaces/response.ts";

export default class R {
  static json<T>(option: IUniReponse<T>) {
    return option
  }

  static ok<T>(data: T) {
    return this.json({
      success: true,
      code: EHttpRsCode.OK,
      message: EHttpRsCode[EHttpRsCode.OK],
      data,
    })
  }

  static pageOk<T>(
    list: T[],
    pageSize: number,
    pageNumber: number,
    totalCount: number,
    totalPages: number,
  ) {
    return this.ok<IPagination<T>>({
      pageSize,
      pageNumber,
      totalCount,
      totalPages,
      nextPage: totalPages > pageNumber,
      prePage: pageNumber > 1 && totalPages > 1,
      list
    })
  }

  static fail(code: number, message: string) {
    return this.json({
      success: false,
      code,
      message,
      data: null,
    })
  }
}