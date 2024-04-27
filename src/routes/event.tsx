import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Bridge from "../components/Icons/Bridge";
import Logo from "../components/Icons/Logo";
import Modal from "../components/Modal";
import { EVENTS } from "../data/eventData";
import { listImages } from "../utils/firebase";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";

const Event = () => {
  const [images, setImages] = useState([]);
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
  const { photoId, eventId } = useParams();

  const { title, subTitle, results } = EVENTS[eventId];

  //   useEffect(() => {
  //     // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
  //     if (lastViewedPhoto && !photoId) {
  //       lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
  //       setLastViewedPhoto(null);
  //     }
  //   }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  useEffect(() => {
    const fetchImages = async (folder: string) => {
      const list = await listImages(folder);
      setImages(list);
    };
    fetchImages(eventId);
  }, [eventId]);

  return (
    <>
      <main className="mx-auto max-w-[1960px] p-4">
        {Array.isArray(images) && images.length && photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="after:content relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            <Logo />
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              {title}
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              {subTitle}
            </p>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              <span className="font-bold">Kết quả chung cuộc</span>
              {results.map((result) => (
                <span key={result}>
                  <br />
                  <span>{result}</span>
                </span>
              ))}
            </p>
          </div>
          {images.map(({ url, id }) => (
            <Link
              key={id}
              to={`${id}`}
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <img
                alt="Event photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                src={url}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className="p-6 text-center text-white/80 sm:p-12">
        Credit to "Team 2gether"
      </footer>
    </>
  );
};

export default Event;
