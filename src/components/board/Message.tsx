import { Box } from "@mui/system"
import { StyledDeleteButton, StyledTextArea } from "./styles/CustomStyles"
import { useState } from "react";
import { StyledButton } from "./styles/CustomStyles";
import { Typography } from "@mui/material";
export const Message = () => {

    const [message, setMessage] = useState<string>("");
    const [storeMessage, setStoreMessage] = useState<string[]>([]);
    const [isMessageEmpty, setIsMessageEmpty] = useState<boolean>(true);

    const handleMessageInput = (event:
        React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    const handleMessageSubmit = () => {
        // here we will send the message to the server using the api

        // here we are adding the message to the storeMessage array
        setStoreMessage([...storeMessage, message]);
        setIsMessageEmpty(false);
        setMessage("");
    }

    const handleEdit = () => {
        // here we will send the edited message to the server using the api
    }
    const handleDelete = () => {
        // here we will send the delete message to the server using the api
        setIsMessageEmpty(true);
        setStoreMessage(storeMessage.filter((message) => message !== message));
    }

    return (

        <>
            {isMessageEmpty &&
                <Box>
                    <Box>
                        <StyledTextArea placeholder="Write a message..." onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleMessageInput(event)
                        }} />
                    </Box>
                    <Box sx={{ textAlign: 'right', pt: 1 }}>
                        <StyledButton variant="contained" onClick={handleMessageSubmit} disabled={message === ''}>Post</StyledButton>
                    </Box>
                </Box>
            }
            {!isMessageEmpty &&
                <Box>
                    {storeMessage.map((message, index) => {
                        return (
                            <Box key={index}>
                                <Box>
                                    <Typography variant="h6">{message}</Typography>

                                </Box>
                                <Box>
                                    <StyledButton variant="contained" onClick={handleEdit}>Edit</StyledButton>
                                    <StyledDeleteButton
                                        variant="contained"
                                        onClick={handleDelete}
                                        sx={{ backgroundColor: '#FA4659' }}
                                    >
                                        Delete
                                    </StyledDeleteButton>
                                </Box>

                            </Box>)
                    })}
                </Box>
            }

        </>
    )
}