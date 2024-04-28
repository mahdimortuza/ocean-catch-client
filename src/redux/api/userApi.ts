import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    getSingeUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useCreateUserMutation, useGetSingeUserQuery } = userApi;
