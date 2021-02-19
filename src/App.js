import React from 'react';
import { CssBaseline, Button, IconButton, Icon, Container, Card, CardActions, CardContent, Typography, CardHeader, Avatar, CardMedia, makeStyles } from '@material-ui/core'

const usesStyles = makeStyles({
  media: {
    height: 200
  },
  readMore: {
    marginLeft: "auto"
  },
  avatar: {
    backgroundColor: "lightblue"
  }
});

function ArticleCard(props) {
  const classes = usesStyles();
  return (
        <Card>
          <CardHeader 
          title="John Doe" 
          subheader="Joined 18-02-2021" 
          avatar={<Avatar className = {classes.avatar}>JD</Avatar>} />
          <CardMedia 
          className = {classes.media}
          image="http://i.picsum.photos/id/1058/4608/3072.jpg?hmac=kfHIsJ4T3b-ily0CcdGESnuC4wwOPtnOQpcICheyvFQ"/>
          <CardContent>
            <Typography variant="h6">Clickbait title!</Typography>
            <Typography variant="body2">Really interesting take on some topic...</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <Icon>favorite</Icon>
            </IconButton>
            <IconButton>
              <Icon>share</Icon>
            </IconButton>
            <Button 
            className = {classes.readMore} 
            variant="outlined" 
            color="primary">Read More</Button>
          </CardActions>  
        </Card>
  );
}

function App() {
  const classes = usesStyles();
  return (
    <div className="App">
        <CssBaseline>
          <Container>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
            <ArticleCard></ArticleCard>
          </Container>
        </CssBaseline>
    </div>
  );
}

export default App;
