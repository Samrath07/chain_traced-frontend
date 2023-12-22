import { Box, Typography } from '@mui/material';
import { StyledButton, StyledDeleteButton, StyledTextArea } from './styles/CustomStyles';
import { Dispatch, useState } from 'react';
import { MessageResponse } from './constants';

export const StoreMessages = ({
  storeMessages,
  setStoreMessages,
}: {
  storeMessages: MessageResponse[];
  setStoreMessages: Dispatch<React.SetStateAction<MessageResponse[]>>;
}) => {


  const [reply, setReply] = useState<string>('');
  const [replyMode, setReplyMode] = useState<boolean>(false);
  const [showReplyArea, setShowReplyArea] = useState<string | null>(null);

  const handleDeleteMessage = async (id: string) => {
    await fetch(`http://localhost:8080/messages/${id}`, {
      method: 'DELETE',
      mode: 'cors',
    });
    setStoreMessages(storeMessages.filter((item) => item.id !== id));
  };

  const handleReply = async (id: string) => {
    // setReplyMode(true);
    await fetch(`http://localhost:8080/messages/${id}/reply`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        text: reply,
        author: 'User',

      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {

        const newData = { ...data, replyMode: true };
        setStoreMessages([...storeMessages, newData]);
      });

    setReply('');
    setReplyMode(false);
    setShowReplyArea(null);
  }

  const handleReplyMode = (id: string) => {
    setReplyMode(true);
    setShowReplyArea(id);
  }


  return (
    <>
      {storeMessages.map((item, index) => {
        return (
          <Box key={index}>
            {!item.replyMode &&
              <Box
                sx={{
                  backgroundColor: '#FFECD6',
                  borderRadius: '1rem',
                  p: 2,
                  m: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '50%',
                  height: '20%',
                }}
              >
                <Box>
                  <Typography variant='h5' >{item.author}</Typography>
                  <Typography variant='h4' >{item.text}</Typography>
                </Box>
                <Box>
                  {!replyMode && (
                    <StyledButton
                      variant='contained'
                      onClick={() => handleReplyMode(item.id)}
                      sx={{ backgroundColor: '#001493' }}
                    >
                      Reply
                    </StyledButton>
                  )}
                  <StyledDeleteButton
                    variant='contained'
                    onClick={() => handleDeleteMessage(item.id)}
                  >
                    Delete
                  </StyledDeleteButton>

                </Box>
              </Box>
            }
            {item.replyMode &&
              <Box
                sx={{
                  backgroundColor: '#7BD3EA',
                  borderRadius: '1rem',
                  width: '50%',
                  height: '20%',
                  marginLeft: 'auto',
                  marginRight: '30px',
                  p: 2,
                  my: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography variant='h5'>{item.author}</Typography>
                  <Typography variant='h4'>{item.text}</Typography>
                </Box>
              </Box>
            }
            {showReplyArea === item.id && (
              <Box
                sx={{
                  backgroundColor: '#FFF',
                  borderRadius: '1rem',
                  width: '50%',
                  height: '20%',
                  marginLeft: 'auto',
                  marginRight: '30px',
                  p: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <StyledTextArea
                  placeholder='Reply to this message'
                  value={reply}
                  onChange={(event) => setReply(event.target.value)}
                />
                {reply !== '' &&
                  <StyledButton
                    variant='contained'
                    sx={{ width: '10%', height: '30%' }}
                    onClick={() => handleReply(item.id)}
                  >
                    Reply
                  </StyledButton>
                }
              </Box>
            )}

          </Box>
        );
      })}
    </>
  );
};
