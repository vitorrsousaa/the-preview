import { env } from "@/config/environment";
import { STORAGE_KEYS } from "@/config/storages";
import { delay } from "@/utils/delay";
import axios from "axios";
import { AppError } from "../errors/app-error";

export const httpClient = axios.create({
	baseURL: env.VITE_API_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
	const storedAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

	if (storedAccessToken) {
		config.headers.Authorization = `Bearer ${storedAccessToken}`;
	}

	return config;
});

httpClient.interceptors.request.use((config) => {
	config.headers.set(
		"Access-Control-Allow-Origin",
		"https://admin.lalepratas925.com.br",
	);
	config.headers["Content-Type"] = "application/json";

	return config;
});

httpClient.interceptors.response.use(
	async (data) => {
		if (env.IS_DEVELOPMENT) {
			await delay();
		}

		return data;
	},
	async (error) => {
		if (env.IS_DEVELOPMENT) {
			await delay();
		}

		return Promise.reject(new AppError(error));
	},
);
