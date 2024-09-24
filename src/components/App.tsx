import "./App.css";

import React,{ useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { fetchPhoto } from "../unsplash-api";
import toast, { Toaster } from "react-hot-toast";
import { Photo } from "../types";

const App = () => {
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<string | boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalUrl, setModalUrl] = useState<string>("");
    const [modalAlt, setModalAlt] = useState<string>("");
    const scrollBlock = useRef<HTMLDivElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const request = e.currentTarget.elements.namedItem("request") as HTMLInputElement;
        if (request.value.trim() === "") {
            toast.error("Please enter search term!");
            return;
        }
        setSearch(request.value);
        e.currentTarget.reset();
        setPhotos([]);
        setError(false);
        setLoading(true);
        setPage(1);
        setIsVisible(false);
        setIsEmpty(false);
    };

    const onLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const openModal = (url: string, alt: string) => {
        setShowModal(true);
        setModalUrl(url);
        setModalAlt(alt);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalUrl("");
        setModalAlt("");
    };

    useEffect(() => {
        if (!search) return;
        const fetchImages = async () => {
            setLoading(true);
            try {
                const data = await fetchPhoto(search, page, 15);
                if (!data.results.length) {
                    toast.error("Sorry. There is no images...");
                    return setIsEmpty(true);
                }
                setPhotos(prevImages => [...prevImages, ...data.results]);
                setIsVisible(page < Math.ceil(data.total_pages / data.results.length));
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [search, page]);

    useEffect(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, [photos]);

    return (
        <div ref={scrollBlock}>
            <SearchBar onSubmit={handleSubmit} />
            <ImageGallery images={photos} openModal={openModal} />
            {loading && <Loader />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {isEmpty && <ErrorMessage>Sorry. There is no images...</ErrorMessage>}
            {isVisible && (
                <LoadMoreBtn onClick={onLoadMore} disabled={loading}>
                    Load more
                </LoadMoreBtn>
            )}
            <ImageModal modalIsOpen={showModal} src={modalUrl} alt={modalAlt} closeModal={closeModal} />
            <Toaster position="top-right" />
        </div>
    );
};

export default App;
