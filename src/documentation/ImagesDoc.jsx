import { Line } from "../components/Button/Button.Style";
import ImageComponent, { RoundImage } from "../components/Images/Image.Style";
import { CodeBlock } from "./codeblock/CodeBlock";

export const ImagesDoc = () => {
  const code1 = `<ImageComponent src={ } alt=""/>`;
  const code2 = `<RoundImage src={ } alt="" />`;

  return (
    <>
      <h2>Images</h2>
      <p>
        Images are made responsive. This applies max-width: 100%; and height:
        auto; to the image so that it scales with the parent width.
      </p>
      <Line />
      <div>
        <h2>Responsive Image</h2>
        <ImageComponent
          src={
            "https://wallpapers.com/images/featured/snow-mountain-ydg6x966wun8nkjs.jpg"
          }
          alt="mountain"
        />
        <CodeBlock code={code1} />
      </div>
      <Line />
      <div>
        <h2>Circular Image</h2>
        <RoundImage
          src={
            "https://wallpapers.com/images/featured/snow-mountain-ydg6x966wun8nkjs.jpg"
          }
          alt="mountain"
        />
        <CodeBlock code={code2} />
      </div>
    </>
  );
};
