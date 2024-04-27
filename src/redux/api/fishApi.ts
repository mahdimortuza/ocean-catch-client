import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const fishApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFish: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.fishes],
    }),
  }),
});

const { useCreateFishMutation } = fishApi;
