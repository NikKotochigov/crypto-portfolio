import {
	BadgeIcon,
	GithubIcon,
	HomeIcon,
	LinkedinIcon,
	TwitterIcon,
	YoutubeIcon,
    WalletIcon,
    EyeIcon,
} from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: "Kotochigov Nikolay",
	bio: "Learning new things everyday",
	links: [
		{
			label: "Github",
			href: "https://github.com/NikKotochigov",
			Icon: GithubIcon,
		},
		{
			label: "Twitter",
			href: "",
			Icon: TwitterIcon,
		},
		{
			label: "LinkedIn",
			href: "/",
			Icon: LinkedinIcon,
		},
		{
			label: "Youtube",
			href: "https://www.youtube.com/A7med3bdulBaset",
			Icon: YoutubeIcon,
		},
	],
	navLinks: [
		{
			name: "Home",
			href: "/",
			Icon: HomeIcon,
		},
		{
			name: "Portfolio",
			href: "/portfolio",
			Icon: WalletIcon,
		},
		{
			name: "Watchlist",
			href: "/watchlist",
			Icon: EyeIcon,
		},
	],
} as const