import create from "zustand";
import axios from "axios";


interface AnimeState {
	Anime: string;
	Animes: any[];
	searchAnime: (str: string) => Promise<void>;
	setAnime: (str: string) => void;
}

export const useAnimeStore = create<AnimeState>((set) => ({
	Anime: "",
	Animes: [],
	searchAnime: async (str) => {
		const response = await axios.get("https://api.jikan.moe/v4/anime", {
			params: {
				letter: str,
			},
		});
		set({ Animes: [...response.data.data] });
	},
	setAnime: (str) => set({ Anime: str }),
}));
