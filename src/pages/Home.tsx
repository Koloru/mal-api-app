import { useEffect } from "react";
import { Card } from "../components/Card";
import { useAnimeStore } from "../store/animeStore";


export const Home = () => {
	const {Animes,searchAnime, Anime} = useAnimeStore();
	useEffect(()=>{
		searchAnime(Anime)
	},[])

	return (
		<div className='flex flex-wrap p-5 gap-x-4 gap-y-5 justify-center pb-20 max-w-full'>
			{Animes.length > 0 ? Animes.map((anime)=> <Card
				title={anime.title}
				status={anime.status}
				description={anime.synopsis}
				images={anime.images.jpg.large_image_url}
			/>): ''}
		</div>
	);
};
