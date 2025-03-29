
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./app/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
				'condensed': ['Oswald', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-left': {
					'0%': { transform: 'translateX(30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(-30px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				'image-fade': {
					'0%': { opacity: '0', transform: 'scale(1.05)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'background-pan': {
					'0%': { backgroundPosition: '0% center' },
					'100%': { backgroundPosition: '100% center' },
				},
				'text-reveal': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-out': 'fade-out 0.8s ease-out forwards',
				'slide-up': 'slide-up 0.8s ease-out forwards',
				'slide-down': 'slide-down 0.8s ease-out forwards',
				'slide-left': 'slide-left 0.8s ease-out forwards',
				'slide-right': 'slide-right 0.8s ease-out forwards',
				'image-fade': 'image-fade 1.2s ease-out forwards',
				'background-pan': 'background-pan 3s linear infinite',
				'text-reveal': 'text-reveal 1s ease-out forwards',
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
