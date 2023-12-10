import { Box } from "@mui/material"
import { Header } from "./Header"
import { Message } from "./Message"

export const MessageLayout = () => {

    return (
        <>
            <Box sx={{ backgroundColor: '#F0ECE5', borderRadius: '1rem' , p : 5, m : 2}}>
                <Header authorName="Shivam Srivastava" designation="Software Developer" />
                <Message />
            </Box>
        </>
    )


}