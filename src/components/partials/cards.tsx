import { X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface CardProps {
  title: string;
  description: string;
  images: string[];
  developed: string[];
  readme: string | boolean;
  app: string | boolean | undefined;
}

function Card({
  title = "",
  description = "",
  images = [""],
  developed = [""],
  readme = "",
  app = "",
}: CardProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const openModal = (link) => {
    setIframeSrc(link); // Define a URL para o iframe
    setIsIframeLoading(true); // Ativa o loader
    setIsModalOpen(true); // Abre o modal
  };

  return (
    <div
      className="w-full bg-white rounded-lg shadow-md overflow-hidden group hover:scale-105 hover: transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem com Carrossel */}
      <div className="relative overflow-hidden h-60">
        <img
          src={images[carouselIndex]}
          alt={`Imagem ${carouselIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Bullets para indicar a posição */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === carouselIndex ? "bg-red-600" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Descrição e Badges */}
      <div className="p-4 min-h-[200px]">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        {/* Badges */}
        <div className="flex flex-wrap mt-2 gap-3">
          {developed.slice(0, 3).map((i, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 text-xs font-medium px-2 py-1 rounded "
            >
              {i}
            </span>
          ))}
          {developed.length > 3 && (
            <Popover>
              <PopoverTrigger>
                <button className="bg-gray-500 text-gray-100 cursor-pointer text-xs font-medium px-2 py-1 rounded-full ">
                  +{developed.length - 3}
                </button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  {developed.slice(3).map((i, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 text-xs font-medium px-2 py-1 rounded mr-1 mb-1"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      {/* Footer com botões */}
      <div className="px-4 py-3 border-t border-gray-200 flex justify-end gap-4">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <a
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700"
            href={readme}
            target="_blank"
          >
            Documento
          </a>

          <DialogTrigger asChild>
            <button
              className="bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
              onClick={() => openModal(app)}
              disabled={!app}
            >
              Aplicação
            </button>
          </DialogTrigger>

          {/* Modal com o iframe */}
          <DialogContent className="bg-white w-full max-w-[80%] h-4/5 rounded-lg overflow-hidden shadow-lg">
            <DialogClose asChild></DialogClose>

            {/* Loader */}
            {isIframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
                <div className="loader border-t-4 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
              </div>
            )}

            <iframe
              src={iframeSrc}
              title="External Content"
              className="w-full h-full mt-4"
              onLoad={() => setIsIframeLoading(false)}
            ></iframe>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Card;
