import React from 'react';

type Props = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

export const Image = ({ src, width, height, alt, className }: Props) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
);

export default Image;
