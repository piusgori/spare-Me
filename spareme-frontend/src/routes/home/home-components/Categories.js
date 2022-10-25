import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { categories } from '../../../data/categories'

const Categories = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
        <Typography sx={{ mt: 4, mb: 4, textAlign: 'center' }} variant='h5'>Main Spare Categories</Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={{ xs: 2, md: 3 }} justifyContent="center" sx={{ margin: '20px 4px 10px 4px' }}>
            {categories.map((each) => (
                <Grid xs={3} sm={6} md={4} key={each.id} item display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Card sx={{ width: matches ? 200 : 345 }}>
                        <CardActionArea>
                            <CardMedia component="img" height="140" image={each.image} alt={each.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" sx={{ color: 'black' }} component="div">{each.name} spares</Typography>
                                <Typography variant="body2" color="text.secondary">{each.sub.length} sub categories</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
  )
}

export default Categories