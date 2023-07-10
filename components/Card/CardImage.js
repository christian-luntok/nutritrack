import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={600}
                height={420}
                alt={alt}
                objectFit="cover"
                loading="lazy"
                className={`w-full h-full ${imageClassName && imageClassName}`}
            />
        </div>
    );
};
