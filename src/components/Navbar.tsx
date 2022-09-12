import { Link } from "react-router-dom";
import { useAnimeStore } from "../store/animeStore";
import { useState } from "react";

// Icons import
import { BiSearchAlt } from "react-icons/bi";
import { FaSadCry } from "react-icons/fa";

export const Navbar = () => {
	const { searchAnime, Anime, setAnime } = useAnimeStore();

	const handleChange = (event: any) => {
		setAnime(event.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		searchAnime(Anime);
	};

	return (
		<nav className='shadow-md flex flex-col justify-center items-center md:flex-row md:justify-between w-screen py-2 px-5 bg-gray-dark'>
			{/* Navigation Links */}
			<div className='flex gap-10 px-4 items-center w-3/5 py-3 text-orange'>
				<Link to='/' className='flex text-center items-center gap-2 hover:'>
					<FaSadCry /> <span className='text-lg'>Naki</span>
				</Link>
				<Link to='/about' className='text-lg'>
					About
				</Link>
			</div>

			{/* Search bar */}

			<form
				className='w-full lg:w-2/5 flex items-center flex-row-reverse px-3 relative'
				method='get'
				onSubmit={handleSubmit}
			>
				<input
					onChange={handleChange}
					value={Anime}
					placeholder='Search Anime/Manga series'
					className='p-3 px-3 w-full md:w-4/5 h-4/5 focus:outline-none focus:border-x-orange focus:border-y-blue border-2 border-y-orange border-x-blue rounded-md'
				/>
				<button
					type='submit'
					className='flex items-center h-full  px-4 justify-center absolute bg-gray-dark rounded border-2 border-y-blue border-r-blue border-l-0 rounded-l-none'
				>
					<BiSearchAlt color='white' />
				</button>
			</form>
		</nav>
	);
};
