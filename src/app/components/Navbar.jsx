'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { motion } from 'framer-motion';
import {
	bottomVarients,
	centerVarients,
	listItemVarients,
	listVarients,
	topVarients,
} from './Animations';
const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='w-full h-full flex items-center justify-between px-2 sm:px-8 md:px-10 lg:px-20 xl:px-0'>
			{/* Links */}
			<div className='hidden md:flex xl:gap-4 xl:w-1/3 text-lg items-center justify-center'>
				<NavLink url='/' className='mx-2' title='Home' line={true} />
				<NavLink url='/about' className='mx-2' title='About' line={true} />
				<NavLink
					url='/portfolio'
					className='mx-2'
					title='Portfolio'
					line={true}
				/>
				<NavLink url='/contact' className='mx-2' title='Contact' line={true} />
			</div>

			{/* logo */}
			<div className='md:hidden xl:justify-center lg:flex xl:w-1/3'>
				<Link
					href='/'
					className='text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center'>
					<span className='text-white mr-1'>Suansh </span>
					<span className='w-22 h-8 rounded text-black p-0.5 bg-white flex items-center justify-center'>
						Budhiraja
					</span>
				</Link>
			</div>

			{/* social */}
			<div className=' hidden md:flex xl:w-1/3 xl:gap-10 md:gap-6 items-center justify-center'>
				<motion.div whileHover={{ y: -2 }} className=''>
					<NavLink src='/github.png' alt='Github' line={false} />
				</motion.div>
				<motion.div whileHover={{ y: -2 }} className=''>
					<NavLink src='/facebook.png' alt='Github' line={false} />
				</motion.div>
				<motion.div whileHover={{ y: -2 }} className=''>
					<NavLink src='/instagram.png' alt='Github' line={false} />
				</motion.div>
				<motion.div whileHover={{ y: -2 }} className=''>
					<NavLink src='/linkedin.png' alt='Github' line={false} />
				</motion.div>
			</div>

			{/* Responsive menu */}
			<div className='md:hidden'>
				{/* Menu items*/}
				<button
					className='w-10 h-10 flex flex-col justify-evenly z-50 relative '
					onClick={() => setOpen((prev) => !prev)}>
					<motion.div
						variants={topVarients}
						animate={open ? 'opened' : 'closed'}
						className='w-8 h-1 bg-black rounded origin-left'></motion.div>
					<motion.div
						variants={centerVarients}
						animate={open ? 'opened' : 'closed'}
						className='w-8 h-1 bg-black rounded'></motion.div>
					<motion.div
						variants={bottomVarients}
						animate={open ? 'opened' : 'closed'}
						className='w-8 h-1 bg-black rounded origin-left'></motion.div>
				</button>

				{/* list menu */}
				{open && (
					<motion.div
						variants={listVarients}
						initial='closed'
						animate='opened'
						className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
						<motion.div variants={listItemVarients} className=''>
							<Link href='/'> Home</Link>
						</motion.div>
						<motion.div variants={listItemVarients}>
							<Link href='/about'>About</Link>
						</motion.div>
						<motion.div variants={listItemVarients}>
							<Link href='/portfolio'> Portfolio</Link>
						</motion.div>
						<motion.div variants={listItemVarients}>
							<Link href='/contact'> Contact</Link>
						</motion.div>
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
