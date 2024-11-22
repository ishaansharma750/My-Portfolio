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

export const items = [
	{
		id: 1,
		color: 'from-blue-500 via-gray-800 to-black',
		title: 'Crypto tracker',
		desc: [
			'Utilizes React for a dynamic and interactive UI, incorporating Material-UI (Mui) components for a sleek and intuitive design.',
			'Implemented Chart.js for visually engaging price charts and graphs, providing a comprehensive view of cryptocurrency data from the Coin Gecko API.',
			'Enhances user engagement using Framer Motion to create smooth animations for phone interactions and text entrance effects.',
		],

		img: '/Projects/Crypto-tracker.png',
		link: 'https://crypto-tracker-ish.netlify.app/',
		githubIcon: '/github.png',
		github: 'https://github.com/ishaansharma750/Crypto-Tracker-App',
	},
	{
		id: 2,
		color: 'from-purple-800 via-purple-700 to-indigo-900',
		title: 'Podcast App',
		desc: [
			'Implemented CRUD operations in the podcast platform become user-friendly and to ensure an intuitive, responsive user-friendly interface for managing podcast content using React.',
			'Implemented the Firebase Auth, Fire Store, Firebase Storage for managing the authentication and audio files and User Data.',
			'Developed a (Custom Music Player) using JavaScript to track and listen all the Podcasts ',
		],
		img: '/Projects/Podcast-app.png',
		link: 'https://simple-podcast-app.netlify.app/',
		githubIcon: '/github.png',
		github: 'https://github.com/ishaansharma750/Podcast-App',
	},
	{
		id: 3,
		color: 'bg-gradient-to-r from-green-900 to-emerald-800',
		title: 'Lets Notify',
		desc: [
			'Contributing to the development of a scalable push notification platform, leveraging React, NestJS.',
			'Designed and implemented responsive UIs using Tailwind CSS and MUI, enhancing user engagement and performance.',
			'Collaborated with cross-functional teams to deliver personalized notification features and ensure seamless project execution.',
			' Optimized application functionality and UI components to meet business requirements and improve user experience..',
		],
		img: '/Projects/Quik-notify.png',
		link: 'https://web-dev.letsnotify.co.in/',
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
