import { Line } from "../components/Button/Button.Style";
import { Card, CardHeader, CardIcon, CardPrice, Typography, CardButton, HorizontalContainer, VerticalContainer, VIcon } from "../components/Card/Card"


// icons
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { CodeBlock } from "./codeblock/CodeBlock";

export const CardDoc = () => {
    const code1 = `
    <Card>
        <CardHeader> <h2>Jingle Bells</h2> <CardIcon> <AiOutlineHeart /> </CardIcon> </CardHeader>
       <CardPrice>
          <p>₹450.58</p>
          <p>₹300.50</p>
          <p>only</p>
       </CardPrice>
       <Typography> SHIMZAN High Speed & Smooth 3x3 Cube for Kids Playing & Learning (6x6x6 CM)  (1 Pieces)</Typography>
       <CardButton>z
          <button> <AiOutlineShoppingCart /> Add To Cart</button>
          <button>Buy Now</button>
       </CardButton>
    </Card>
    `

    const code2 = `
    <HorizontalContainer>
            <img src="https://examplef.jpeg?q=70" alt="" />
            <div>
                <CardHeader>
                    <h2>DJOKR Men</h2>
                <CardIcon><AiOutlineHeart /></CardIcon>
                </CardHeader>
                <CardPrice>
                    <p>₹450.58</p>
                    <p>₹300.50</p>
                    <p>only</p>
                </CardPrice>
                <Typography> DJOKR Perfume For Men Gift Set Pack of 4x20 ML , Premium 
                Luxury Long Lasting Fragrance Eau de Parfum - 80 ml  (For Men)</Typography>
                <CardButton>
                    <button> <AiOutlineShoppingCart /> Add To Cart</button>
                    <button>Buy Now</button>
                </CardButton>
            </div>
    </HorizontalContainer>    
    `

    const code3 = `
    <VerticalContainer>
            <img src="https://example.jpeg?q=70" alt="" />
            <div>
            <CardHeader><h2>DJOKR Men</h2>
                <VIcon><AiOutlineHeart /></VIcon>
            </CardHeader>
            <CardPrice>
                <p>₹450.58</p>
                <p>₹300.50</p>
                <p>only</p>
            </CardPrice>
            <Typography> DJOKR Perfume For Men Gift Set Pack of 4x20 ML , Premium 
            Luxury Long Lasting Fragrance Eau de Parfum - 80 ml  (For Men)</Typography>
            <CardButton>
                <button> <AiOutlineShoppingCart /> Add To Cart</button>
                <button>Buy Now</button>
            </CardButton>
            </div>
    </VerticalContainer>
    `

    return (
        <>
            <h2>Cards</h2>

            <p>A card is container for a few short, related pieces of information. It roughly resembles a playing card in size and shape, and is intended as a linked, short representation of a conceptual unit.</p>

            <Line />
            <div>

                <h2>Basic Card</h2>

                <div>
                    <Card>
                        <CardHeader>
                            <h2>Jingle Bells</h2>
                            <CardIcon>
                                <AiOutlineHeart />
                            </CardIcon>
                        </CardHeader>

                        <CardPrice>
                            <p>₹450.58</p>
                            <p>₹300.50</p>
                            <p>only</p>
                        </CardPrice>
                        <Typography>SHIMZAN High Speed & Smooth 3x3 Cube for Kids Playing & Learning (6x6x6 CM)  (1 Pieces)</Typography>
                        <CardButton>
                            <button> <AiOutlineShoppingCart /> Add To Cart</button>
                            <button>Buy Now</button>
                        </CardButton>
                    </Card>

                    <div>
                        <CodeBlock code={code1} />
                    </div>

                </div>
            </div>
            <Line />

            <div>
                <h2> Horizontal Card</h2>
                <HorizontalContainer>
                    <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/i/n/k/-original-imagqe28ryyub4zf.jpeg?q=70" alt="" />
                    <div>
                        <CardHeader>
                            <h2>DJOKR Men</h2>
                            <CardIcon>
                                <AiOutlineHeart />
                            </CardIcon>
                        </CardHeader>
                        <CardPrice>
                            <p>₹450.58</p>
                            <p>₹300.50</p>
                            <p>only</p>
                        </CardPrice>
                        <Typography>
                            DJOKR Perfume For Men Gift Set Pack of 4x20 ML , Premium Luxury Long Lasting Fragrance Eau de Parfum - 80 ml  (For Men)
                        </Typography>
                        <CardButton>
                            <button> <AiOutlineShoppingCart /> Add To Cart</button>
                            <button>Buy Now</button>
                        </CardButton>
                    </div>
                </HorizontalContainer>
                <div>
                    <CodeBlock code={code2} />
                </div>

            </div>
            <Line />

            <div>
                <h2> Vertical Card</h2>
                <VerticalContainer>
                    <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/i/n/k/-original-imagqe28ryyub4zf.jpeg?q=70" alt="" />
                    <div>
                        <CardHeader>
                            <h2>DJOKR Men</h2>
                            <VIcon>
                                <AiOutlineHeart />
                            </VIcon>
                        </CardHeader>
                        <CardPrice>
                            <p>₹450.58</p>
                            <p>₹300.50</p>
                            <p>only</p>
                        </CardPrice>
                        <Typography>
                            DJOKR Perfume For Men Gift Set Pack of 4x20 ML , Premium Luxury Long Lasting Fragrance Eau de Parfum - 80 ml  (For Men)
                        </Typography>
                        <CardButton>
                            <button> <AiOutlineShoppingCart /> Add To Cart</button>
                            <button>Buy Now</button>
                        </CardButton>
                    </div>
                </VerticalContainer>

                <div>
                    <CodeBlock code={code3} />
                </div>

            </div>


        </>
    );
};
