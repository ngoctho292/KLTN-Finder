import axiosClient from "../axios/axios.client.js";
import apiEndpoints from "./api.endpoint.js"

const api = {
    mediaList: async ({ mediaType, mediaCategory, page }) => await axiosClient.get(apiEndpoints.mediaList({ mediaType, mediaCategory, page })),
    mediaDetail: async ({ mediaType, page }) => await axiosClient.get(apiEndpoints.mediaDetail({ mediaType, page })),
    mediaGenres: async ({ mediaType }) => await axiosClient.get(apiEndpoints.mediaGenres({ mediaType })),
    mediaCredits: async ({ mediaType, mediaId }) => await axiosClient.get(apiEndpoints.mediaCredits({ mediaType, mediaId })),
    mediaVideos: async ({ mediaType, mediaId }) => await axiosClient.get(apiEndpoints.mediaVideos({ mediaType, mediaId })),
    mediaImages: async ({ mediaType, mediaId }) => await axiosClient.get(apiEndpoints.mediaImages({ mediaType, mediaId })),
    mediaRecommend: async ({ mediaType, mediaId }) => await axiosClient.get(apiEndpoints.mediaRecommend({ mediaType, mediaId })),
    mediaSearch: async ({ mediaType, query, page }) => await axiosClient.get(apiEndpoints.mediaSearch({ mediaType, query, page })),
    personDetail: async ({ personId }) => await axiosClient.get(apiEndpoints.personDetail({ personId })),
    personMedias: async ({ personId }) => await axiosClient.get(apiEndpoints.personMedias({ personId })),
}

export default api