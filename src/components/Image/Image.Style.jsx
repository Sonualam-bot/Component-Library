import styled from 'styled-components';

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  /* margin: 0 auto; */
`;

function ImageComponent({ src, alt }) {
    return <ResponsiveImage src={src} alt={alt} />;
}

export default ImageComponent;
