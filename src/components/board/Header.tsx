import { Avatar, Box, Grid, Typography } from "@mui/material";

interface HeaderProps {
    authorName: string;
    designation?: string;
}
export const Header = ({ authorName, designation }: HeaderProps) => {


    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Grid container direction="row">
                    <Grid item xs={0.5}>
                        <Avatar sx={{ width: 50, height: 50, backgroundColor: '#B6BBC4' }}>
                            SS
                        </Avatar>
                    </Grid>
                    <Grid item xs={11.5}>
                        <Typography variant="h5">{authorName}</Typography>
                        <Typography variant="h6">{designation}</Typography>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}