'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavLink = ({ url, title, line, src, alt }) => {
	const router = useRouter();
	const pathName = usePathname();
	return (
		<>
			{line ? (
				<Link className={'mx-4 relative group'} href={url}>
					{title}
					<span
						className={`h-[2px] inline-block w-0 bg-black absolute bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-200 ${
							pathName === url ? 'w-full' : 'w-0'
						}`}>
						&nbsp;
					</span>
				</Link>
			) : (
				<Link href='#'>
					<Image src={src} alt={alt} width={35} height={35} />
				</Link>
			)}
		</>
	);
};

export default NavLink;
