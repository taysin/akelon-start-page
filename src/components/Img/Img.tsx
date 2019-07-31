import React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  alt: string;
}

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & img {
    max-height: 123px;
    flex: 0 0 auto;
  }
`;

const Img = ({ src, alt }: Props) => (
  <ImgWrapper>
    <img src={src} alt={alt} />
  </ImgWrapper>
);

export default Img;
