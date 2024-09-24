import React, { ReactNode } from "react";

export interface Props {
    children?: ReactNode,
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled: boolean,
    // any props that come into the component
}
export interface Photo {
    id: string;
    description: string | null;
    alt_description: string | null;
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