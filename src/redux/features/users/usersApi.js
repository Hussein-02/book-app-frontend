import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/users`,
    credentials: "include",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUserQuery } = usersApi;
export default usersApi;
