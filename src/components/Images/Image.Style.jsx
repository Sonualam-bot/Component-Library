import styled from "styled-components";

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: 100%;
  display: block;
  /* margin: 0 auto; */
`;

const CircularImage = styled(ResponsiveImage)`
  border-radius: 50%;
`;

const CircleContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 1rem 0rem;
`;

export const Container = styled.div`
  width: 600px;
  height: 400px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const RoundImage = ({ src, alt }) => {
  return (
    <CircleContainer>
      <CircularImage src={src} alt={alt} />
    </CircleContainer>
  );
};

function ImageComponent({ src, alt }) {
  return (
    <Container>
      <ResponsiveImage src={src} alt={alt} />
    </Container>
  );
}

export default ImageComponent;
