import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.base_api}` }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
