'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { LinkArrow } from '../../public/icons';
import { motion } from 'framer-motion';

const HomePage = () => {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row md:flex-row px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20'>
				{/* image cointainer */}
				<din className='h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-2/3 relative'>
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
					<h1 className='text-3xl font-bold md:text-4xl lg:text-6xl'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600 text-3xl my-8 font-bold md:text-5xl lg:text-6xl text-start'>
							Hello, I am
						</span>
						<br />
						<TypeAnimation
							sequence={['Suansh Budhiraja', 1000, 'Frontend Developer', 1000]}
							wrapper='span'
							speed={40}
							style={{ fontSize: '3rem', display: 'inline-block' }}
							repeat={Infinity}
						/>
					</h1>

					{/* DESCRIPTION */}
					<p className='my-3 md:text-xl'>
						As a skilled frontend developer, I am dedicated to turning ideas
						into innovative web applications. I invite you to explore my latest
						projects that showcase my expertise in React.js and web development.
						My passion for creating seamless user experiences drives me to
						continuously learn and implement the latest technologies, ensuring
						that every project not only meets but exceeds client expectations.
					</p>

					{/* BUTTONS */}
					<div className='w-full flex gap-4'>
						<Link
							href='./Resume/Suansh_Budhiraja_.pdf'
							target={'_blank'}
							download={true}
							className='flex items-center bg-black text-white p-2.5 px-4 rounded-lg text-lg font-semibold hover:text-black border-2 border-transparent hover:border-black hover:bg-transparent'>
							Resume <LinkArrow className='w-5 m-1' />
						</Link>
						<Link
							href={'mailto:ishaansharma750@gmail.com'}
							target='_blank'
							className='flex items-center p-2.5 px-4 rounded-lg text-lg font-semibold ring-1 ring-black'>
							Contact Me
						</Link>
					</div>
				</din>
			</div>
		</motion.div>
	);
};

export default HomePage;
