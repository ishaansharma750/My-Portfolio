'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
	return (
		<div className='h-[calc(100vh-6rem)] flex flex-col lg:flex-row md:flex-row px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20'>
			{/* image cointainer */}
			<din className='h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-1/3 relative'>
				<Image
					src='/hero.png'
					alt='hero image'
					fill
					className='object-contain'
				/>
			</din>

			{/* text cointainer */}
			<din className='h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-2/3 flex flex-col gap-2 justify-center '>
				{/* TITLE */}
				<h1 className='text-3xl font-bold md:text-4xl lg:text-5xl'>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600 text-3xl mt-14 font-bold  md:text-4xl lg:text-5xl text-start'>
						Hello, I am
					</span>
					<br />
					<TypeAnimation
						sequence={['Suansh Budhiraja', 1000, 'Frontend Developer', 1000]}
						wrapper='span'
						speed={50}
						style={{ fontSize: '2rem', display: 'inline-block' }}
						repeat={Infinity}
					/>  
				</h1>

				{/* DESCRIPTION */}
				<p className='my-6 md:text-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
					dolorem officiis quas neque praesentium, cupiditate commodi? Beatae,
					sit vitae! Nobis distinctio magni amet illum. Quod, autem! Ex fugiat
					consequuntur eum distinctio veniam. Adipisci error culpa laudantium
					obcaecati harum repellendus quo eligendi in nobis quae? Atque
				</p>

				{/* BUTTONS */}
				<div className='flex gap-4'>
					<button className='p-2 rounded-lg ring-1 ring-black bg-black text-white'>
						View my Work
					</button>
					<button className='p-2 rounded-lg ring-1 ring-black'>
						Contact Me
					</button>
					<Link
						href='/#.pdf'
						target={'_blank'}
						download={true}
						className='p-2 rounded-lg ring-1 ring-black'>
						Download CV
					</Link>
				</div>
			</din>
		</div>
	);
};

export default HomePage;
