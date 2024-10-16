import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMui } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { FaNode } from 'react-icons/fa6';
// import {TbNextjs} from 'react-icons/'
// import { FaNodejs } from 'react-icons/fa';
// import {RiReactjsLine} from 'react-icons/ri'
// import {RiReactjsLine} from 'react-icons/ri'

const Technologies = () => {
	return (
		<div className='border-b border-neutral-800 pb-24 '>
			{/* <h2 className='my-20 text-center text-4xl '>Technologies</h2> */}
			<div className='flex flex-wrap justify-center items-center gap-4'>
				<div className='rounded-lg border-4 border-neutral-600 p-4'>
					<RiReactjsLine className='text-4xl text-cyan-400' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaNodeJs className='text-4xl text-yellow-400' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiMui className='text-4xl text-cyan-400' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaNode className='text-4xl text-cyan-400' />
				</div>
				<div className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiMysql className='text-4xl text-cyan-400' />
				</div>
			</div>
		</div>
	);
};

export default Technologies;
