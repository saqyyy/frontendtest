/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */

import React, { useRef, useState } from 'react'
import { css } from "@emotion/react";
import { useIntersection } from './ImageIntersection';

type ImgElementProps = {
  src: string;
  alt?: string;
}; // FIXME

interface ImageProps extends ImgElementProps { }

export default function Image(props: ImageProps): JSX.Element {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useIntersection(imageRef, () => {
    setIsInView(true);
  });
  return (
    <div
      ref={imageRef}
      css={css`
      background-color: #ccc;
      overflow: hidden;
      position: relative;
      max-width: 800px;
      margin: 20px auto;
      height:500px;
      `}
    >
      {isInView && (
        <img
          {...props}
          css={css`
          width: 100%;
          height:100%;
          `}
        />
      )}
    </div >
  );
}
