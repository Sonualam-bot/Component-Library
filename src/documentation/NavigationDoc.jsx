import { Line } from "../components/Button/Button.Style"
import { Typography } from "../components/Card/Card.Style"
import SingleIcon, { BottomIcon } from "../components/navigation/Navigation"
import { BottomNavigation, Box } from "../components/navigation/Navigation.Style"
import { Link } from "react-router-dom"
import { CodeBlock } from "./codeblock/CodeBlock"


//icons
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineHistory, AiFillFolderAdd } from "react-icons/ai"
import { MdManageAccounts } from "react-icons/md"
import { BiLocationPlus } from "react-icons/bi"
import { useState } from "react"

export const NavigationDoc = () => {
    const [activeVariant, setActiveVariant] = useState('recent');

    const code = `
    <Box>
        <Typography>Title</Typography>
        <div>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Product</Link>   
        </div>
         <div>
            <SingleIcon icon={<AiOutlineShoppingCart />} />
            <SingleIcon icon={<AiOutlineHeart />} />
            <SingleIcon icon={<MdManageAccounts />} />
        </div >
    </Box >
    `

    const code1 = `
    <BottomNavigation>
        <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="recent" icon={<AiOutlineHistory />} />
        <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="fav" icon={<AiOutlineHeart />} />
        <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="location" icon={<BiLocationPlus />} />
        <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="folder" icon={<AiFillFolderAdd />} />
    </BottomNavigation>
    
    `

    return (
        <>
            <h2>Navigation Component</h2>
            <p>The Bottom Navigation bar allows movement between primary destinations in an app.</p>
            <Line />
            <h2>Desktop Navigation</h2>
            <Box>
                <Typography>Title</Typography>
                <div>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Product</Link>
                </div>
                <div>
                    <SingleIcon icon={<AiOutlineShoppingCart />} />
                    <SingleIcon icon={<AiOutlineHeart />} />
                    <SingleIcon icon={<MdManageAccounts />} />
                </div >
            </Box >

            <div>
                <CodeBlock code={code} />
            </div>
            <Line />
            <div>
                <h2>Bottom Navigation</h2>
                <BottomNavigation>
                    <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="recent" icon={<AiOutlineHistory />} />
                    <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="fav" icon={<AiOutlineHeart />} />
                    <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="location" icon={<BiLocationPlus />} />
                    <BottomIcon activeVariant={activeVariant} setActiveVariant={setActiveVariant} variant="folder" icon={<AiFillFolderAdd />} />
                </BottomNavigation>
            </div>
            <div>
                <CodeBlock code={code1} />
            </div>
        </>
    )
}