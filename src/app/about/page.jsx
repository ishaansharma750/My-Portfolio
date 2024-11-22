'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import AnimatedText from '../../components/AnimatedText';
import { skills } from '../../appConstants';
import Brain from '../../components/Brain';

const AboutPage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();
	const isSkillRefInView = useInView(skillRef, { once: true });
	// const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, { once: true });
	// const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			{/* CONTAINER */}
			<div className='h-full overflow-scroll lg:flex ' ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div
					className='p-2 sm:p-8 md:p-10 lg:px-20 xl:p-20 flex flex-col gap-6 md:gap-20 lg:gap-18 xl:gap-22 
                        lg:w-1/2 xl:w-1/2'>
					{/* BIOGRAPHY CONTAINER */}
					<AnimatedText
						text='Turning Visions Into Reality with Code And Design'
						classname='text-xl sm:!text-3xl md:!text-4xl lg:!text-4xl xl:!text-5xl'
					/>

					<div className='flex flex-col gap-12 justify-center'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
						{/* BIOGRAPHY DESC */}
						<p className='text-lg'>
							Hi, I'm Suansh Budhiraja, a passionate Frontend Developer with
							backend knowledge, dedicated to crafting responsive, dynamic, and
							user-centric web experiences. With expertise in React.js, Tailwind
							CSS, Material-UI, I combine design with functionality to bring
							seamless digital experiences to life.
						</p>
						<p className='text-lg'>
							I believe that design is about more than just making things look
							pretty – it's about solving problems and creating intuitive,
							enjoyable experiences for users
						</p>
						<p className='text-lg'>
							Whether I'm working on a website, mobile app, or other digital
							product, I bring my commitment to design excellence and
							user-centered thinking to every project I work on. I look forward
							to the opportunity to bring my skills and passion to your next
							project.
						</p>
						{/* BIOGRAPHY SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col gap-6 justify-center' ref={skillRef}>
						{/* SKILL TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'>
							SKILLS
						</motion.h1>
						{/* SKILL LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className='flex gap-4 flex-wrap'>
							<div className='flex gap-4 flex-wrap'>
								{skills?.map((skill) => {
									return (
										<div className='rounded p-2 text-md cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
											{skill}
										</div>
									);
								})}
							</div>
						</motion.div>
						{/* SKILL SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path
								d='M15 11L12 14L9 11'
								stroke='#000000'
								strokeWidth='1'></path>
						</motion.svg>
					</div>

					{/* EXPERIENCE CONTAINER */}
					<div
						className='flex flex-col gap-6 justify-center pb-40'
						ref={experienceRef}>
						{/* EXPERIENCE TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'>
							EXPERIENCE
						</motion.h1>
						{/* EXPERIENCE LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							className=''>
							{/* EXPERIENCE LIST ITEM */}
							<div className='flex justify-center h-auto'>
								{/* LEFT */}
								<div className='w-6/12'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
										Frontend Developer
									</div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic gap-2'>
										<p>
											Developed and maintained scalable web application using
											MUI, Tailwind for styling, React for frontend, Nest.js for
											backend, and MySQL for database management, enhanced user
											interfaces and optimized application performance
										</p>
										<br />
										<p>
											Designed and implemented UI components and services,
											collaborating with cross-functional teams to ensure smooth
											project delivery and adherence to business requirements
										</p>
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold -mt-2'>
										November 2023 - Present
									</div>
									{/* JOB COMPANY */}
									<div className='p-2 ml-2 rounded bg-white text-sm font-semibold w-fit'>
										Let's Notify
									</div>
								</div>
								{/* CENTER */}
								<div className='w-1/12 flex justify-center '>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-6/12'></div>
							</div>
							{/* EXPERIENCE LIST ITEM */}
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-6/12'></div>
								{/* CENTER */}
								<div className='w-1/12 flex justify-center'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}

								<div className='w-6/12'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>
										Freelancer{' '}
									</div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic gap-2'>
										I provided web solutions, applying a range of technologies
										to address client requirements.{' '}
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold -mt-2'>
										2023 - Present{' '}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/2 h-auto sticky top-10 z-30 xl:w-1/2 mt-12'>
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
