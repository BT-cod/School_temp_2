/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@splidejs/react-splide" {
	import { ComponentType, ReactNode } from "react";

	export interface SplideProps {
		options?: Record<string, any>;
		hasTrack?: boolean;
		tag?: string;
		className?: string;
		children?: ReactNode; // <-- Add this line
	}

	export interface SplideSlideProps {
		className?: string;
		children?: ReactNode; // <-- Add this line
	}

	export const Splide: ComponentType<SplideProps>;
	export const SplideSlide: ComponentType<SplideSlideProps>;
}

declare module "@splidejs/react-splide/css";
