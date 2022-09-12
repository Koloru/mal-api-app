import auntie from "../assets/images/auntie.jpg";
import wadachi from "../assets/images/wadachi.jpg";

type Anime = {
	title: string;
	status: string;
	description: string;
	images: string;
};

export const Card = ({ title, status, description, images }: Anime) => {
	return (
		<div className='flex flex-col items-center  rounded-md shadow-lg md:w-full lg:w-2/5 md:flex-row md:max-w-xl md:hover:shadow-xl  md:hover:p-1 md:max-h-60 bg-gradient-to-r from-green via-orange2 via-blue via-pink to-orange md:hover:translate-x-1 md:hover:translate-y-5 md:hover:scale-110'>
			<img
				className='object-cover w-full h-full rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg rounded-md'
				src={images}
				alt=''
			/>

			<div className='flex flex-col justify-between p-4 leading-normal bg-blue2 h-full w-full rounded-r-md md:max-w-lg'>
				<p
					className={`${
						status === "Finished Airing" ? "bg-green" : "bg-orange"
					} text-sm w-fit rounded-full px-2 text-white`}
				>
					{status}
				</p>
				<h5 className='mb-2 text-xl font-bold tracking-tight max-h-20 overflow-auto text-ellipsis no-scrollbar'>
					{title}
				</h5>
				<p className='mb-1 font-normal text-sm max-h-20 overflow-auto no-scrollbar text-ellipsis'>
					{description}
				</p>
				<button className='text-white text-right tracking-widest text-sm '>
					See More
				</button>
			</div>
		</div>
	);
};
