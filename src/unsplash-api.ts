import axios, {AxiosResponse} from "axios";
import opts from "../opts.js";
import { FetchPhotoResponse } from "./types.js";

axios.defaults.baseURL = "https://api.unsplash.com/";

// interface Photo {
//     id: string;
//     description: string | null;
//     alt_description: string | null;
//     urls: {
//         raw: string,
//         full: string,
//         regular: string,
//         small: string,
//         thumb: string,
//     };
// }

// interface FetchPhotoResponse {
//     total: number;
//     total_pages: number;
//     results: Photo[];
// }

export const fetchPhoto = async (query: string, page: number, per_page: number): Promise<FetchPhotoResponse> => {
    const url = `/search/photos/?client_id=${opts.ACC_KEY}&query=${query}&page=${page}&per_page=${per_page}`;

    const response: AxiosResponse<FetchPhotoResponse> = await axios.get(url);
    return response.data;
};
