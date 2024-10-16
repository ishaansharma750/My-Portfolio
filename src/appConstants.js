export const skills = [
	'HTML/CSS',
	'JavaScript',
	'React js',
	'Nest js',
	'MUI',
	'GIT',
];

export const links = [
	{ url: '/', title: 'Home' },
	{ url: '/about', title: 'About' },
	{ url: '/portfolio', title: 'Portfolio' },
	{ url: '/contact', title: 'Contact' },
];

export const socialLinks = [
	{
		url: '/github.png',
		title: 'Github',
		socialLink: 'https://github.com/ishaansharma750',
	},
	{ url: '/facebook.png', title: 'Facebook', socialLink: '' },
	{ url: '/instagram.png', title: 'Instagram', socialLink: '' },
	{
		url: '/linkedin.png',
		title: 'Linkedin',
		socialLink: 'https://www.linkedin.com/in/suansh-budhiraja-11a970217/',
	},
];

export const topVarients = {
	closed: { rotate: 0 },
	opened: { rotate: 43, backgroundColor: 'rgb(255,255,255)' },
};

export const centerVarients = {
	closed: { opacity: 1 },
	opened: { opacity: 0 },
};

export const bottomVarients = {
	closed: { rotate: 0 },
	opened: { rotate: -43, backgroundColor: 'rgb(255,255,255)' },
};

export const listVarients = {
	closed: { x: '100vw' },
	opened: {
		x: 0,
		transition: { when: 'beforeChildren', staggerChildren: 0.2 },
	},
};

export const listItemVarients = {
	closed: { x: -10, opacity: 0 },
	opened: { x: 0, opacity: 1 },
};
