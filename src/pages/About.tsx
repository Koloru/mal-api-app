import { BiBorderRadius } from "react-icons/bi";
import auntie from "../assets/images/auntie.jpg";

export function About() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='w-3/4 md:w-2/5 xl:w-1/5 flex flex-col justify-center items-center gap-5'>
				<img src={auntie} className='rounded-full' alt='Whislash Arknights' />
				<h2 className='sm:text-sm lg:text-lg text-orange  font-medium title-font mb-1'>
					Whislash auntie is cute
				</h2>
			</div>

			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-5 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='sm:text-2xl font-medium title-font mb-4 text-gray-900'>
							Hello and thank you for checking out this small project that I
							made.
						</h1>

						<p className='lg:w-2/3 mx-auto leading-relaxed text-base text-justify'>
							I've decided to make this project to learn more about fetching
							data from an API and also to learn more stuff regarding state
							management, routing, and just being a better developer in general
							while having a lot of fun.
						</p>
						<p className='lg:w-3/3 mx-auto leading-relaxed text-base text-justify mt-5 font-bold uppercase'>
							The data in the API is owned by their respective owners and I am
							in no way an owner of them
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
