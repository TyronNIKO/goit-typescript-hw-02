import React, { ReactNode } from "react";

export interface Props {
    children?: ReactNode,
    disabled: boolean,
    images: Image[],
    img: Image,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    openModal: (url: string, alt: string | undefined) => void,
    // any props that come into the component
}
export interface Photo {
    id: string;
    description: string | null;
    alt_description: string | undefined;
    urls: {
        raw: string,
        full: string,
        regular: string,
        small: string,
        thumb: string,
    };
}

export interface FetchPhotoResponse {
    total: number;
    total_pages: number;
    results: Photo[];
}

export interface Image {
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string | undefined;
    user: {
        name: string;
    };
    likes: number;
}
export interface ImageModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    src: string;
    alt: string | undefined;
}
