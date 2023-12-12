import { Box, Typography } from "@mui/material"
import { StyledDeleteButton } from "./styles/CustomStyles"
import { Dispatch } from "react"

export const StoreMessages = ({ storeMessages, setStoreMessages }: {
    storeMessages: string[],
    setStoreMessages: Dispatch<React.SetStateAction<string[]>>
}) => {

    const handleDeleteMessage = (index: number) => {
        const newStoreMessages = storeMessages.filter((_item, i) => i !== index);
        setStoreMessages(newStoreMessages);
    }


    return (
        <>
            {storeMessages.map((item, index) => {
                return (
                    <Box
                        key={index}
                        sx={{
                            backgroundColor: '#EDEDED',
                            borderRadius: '1rem',
                            p: 5,
                            m: 2,
                            display: "flex",
                            justifyContent: 'space-between'
                        }}>
                        <Box>
                            <Typography variant="h6">{item}</Typography>
                        </Box>
                        <Box>
                            <StyledDeleteButton
                                variant="contained"
                                onClick={() => handleDeleteMessage(index)}
                            >
                                Delete
                            </StyledDeleteButton>
                        </Box>
                    </Box>
                )
            })}
        </>
    )

}