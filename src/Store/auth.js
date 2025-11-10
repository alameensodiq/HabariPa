import { baseUrl } from "../utils";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// http://37.27.3.112:35000/api/v1/
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data
      })
    })
  })
});

export const { useLoginMutation } = authApi;
