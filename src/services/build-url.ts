import { QUERY_PARAMS_KEYS } from "@/constants/api-keys-constants";
import type { PaginationProtocol } from "@/protocols/pagination-protocol";

export class UrlBuilder{
  constructor(private readonly _url: string) {}

  getUrl() {
    return this._url;
  }

  withPagination({
    page,
    limit,
  }: PaginationProtocol) {
    const url = new URL(this._url);

    if(!page && !limit){
      return new UrlBuilder(url.toString());
    }

    url.searchParams.set(QUERY_PARAMS_KEYS.PAGE, String(page));
    url.searchParams.set(QUERY_PARAMS_KEYS.LIMIT, String(limit));

    return new UrlBuilder(url.toString());
  }
}