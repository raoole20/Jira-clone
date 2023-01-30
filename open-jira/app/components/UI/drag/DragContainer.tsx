import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Grid, IconButton, Paper, styled, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ListCard } from './ListCard';

export const DragContainer = () => {
    return (
        <Box
            mt={5}
            sx={{ height: 'calc(100vh - 280px)' }}>
            <Grid
                container
                spacing={3}
                height='calc(100vh - 280px)'>

                <Grid item xs={4}>
                    <ListCard status='pending' title={'Pending'} />
                </Grid>
                <Grid item xs={4}>
                    <ListCard status='process' title={'In Process'} />
                </Grid>
                <Grid item xs={4}>
                    <ListCard status='finish' title={'Finish'} />
                </Grid>

            </Grid>
        </Box>
    )
}
