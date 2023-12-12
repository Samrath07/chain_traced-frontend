import { Box } from "@mui/material"
import { Header } from "./Header"
import { StyledButton, StyledTextArea } from "./styles/CustomStyles"
import { useState } from "react"
import { StoreMessages } from "./StoreMessage"

export const Message = () => {

    const [addMessage, setAddMessage] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [storeMessage, setStoreMessage] = useState<string[]>([]);

    const handleAddPost = () => {
        setAddMessage(true);
    }
    const handleMessageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    const handleMessageSubmit = () => {
        setAddMessage(false);
        setMessage('');
        setStoreMessage([...storeMessage, message]);
    }

    return (
        <>
            <Box>
                <Box sx={{
                    backgroundColor: '#FFF',
                    borderRadius: '1rem',
                    p: 5, display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Header authorName="Shivam Srivastava" />
                    {/* <Message /> */}
                    {!addMessage &&
                        <StyledButton variant="contained" onClick={handleAddPost}>New Message</StyledButton>
                    }
                </Box>
                {addMessage &&
                    <Box sx={{ m: 3 }}>
                        <Box>
                            <StyledTextArea placeholder="Write a message..." onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                handleMessageInput(event)
                            }} />
                        </Box>
                        <Box sx={{ textAlign: 'right', my: 3 }}>
                            <StyledButton variant="contained" onClick={handleMessageSubmit} disabled={message === ''}>Post</StyledButton>
                        </Box>
                    </Box>
                }
            </Box>

            {storeMessage.length > 0 &&
                <>
                    <StoreMessages storeMessages={storeMessage} setStoreMessages={setStoreMessage} />
                </>
            }

        </>
    )


}