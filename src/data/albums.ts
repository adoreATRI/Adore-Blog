// 相册和照片的类型定义

export interface Photo {
	id: string;
	src: string;
	thumbnail?: string;
	alt: string;
	title?: string;
	description?: string;
	tags?: string[];
	date?: string;
	location?: string;
	width?: number;
	height?: number;
	camera?: string;
	lens?: string;
	settings?: {
		iso?: number;
		aperture?: string;
		shutterSpeed?: string;
		focalLength?: string;
	};
}

export interface AlbumGroup {
	id: string;
	title: string;
	description: string;
	cover: string;
	date: string;
	location?: string;
	tags?: string[];
	layout?: "grid" | "masonry" | "justified";
	columns?: number;
	photos: Photo[];
}
