import React from "react";
import { Props } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({images, openModal}: Props) => {
    return (
        <ul className={css.gallery}>
            {images.map(image => {
                return (
                    <li key={image.id} style={{"--width": image.width, "--height": image.height}}>
                        <ImageCard img={image} openModal={openModal} />
                    </li>
                );
            })}
        </ul>
    );
};
export default ImageGallery;
