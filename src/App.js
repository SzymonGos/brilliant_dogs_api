import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, AppBar, Toolbar, Typography, Container, Paper } from "@material-ui/core";
import { format } from 'date-fns';
import ShowDogs from "./components/ShowDogs";
import Comments from "./components/Comments";


const apiURL = 'https://dog.ceo/api';

const useStyles = makeStyles((theme) => {
  return {

    root: {
      margin: '1rem 0',
      width: '100%',
      minHeight: '100vh'
    },
    page: {
      padding: theme.spacing(3)
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: '.9rem'
      }
    },
    paper: {
      padding: '0 1rem',
      [theme.breakpoints.down('xs')]: {
        padding: '0 0.3rem'
      },
    }
  }
})

function App() {

  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState('');
  const [breedList, setBreedList] = useState(['']);
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  const getBreedList = () => {
    axios
      .get(`${apiURL}/breeds/list`)
      .then((resp) => {
        const data = resp.data.message;
        setBreedList(data);
        setIsLoading(false)
      })
      .catch(error => console.log('Error When Fetching List'));
  }

  const getBreedImage = () => {
    setIsLoading(true)
    axios
      .get(`${apiURL}/breed/${selected}/images/random`)
      .then((resp) => {
        const data = resp.data.message;
        setImgUrl(data)
        setIsLoading(false)
      })
      .catch(error => console.log('Error When Fetching Image'));
  }

  useEffect(() => {
    getBreedList();
  }, [])


  // if (isLoading) {
  //   return (
  //       <div>
  //       Loading...
  //       </div>
  //   )
  // }

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }

  return (
    <main>
      <AppBar position='sticky'>
        <Container maxWidth='md'>
          <Toolbar>
            <Typography
              className={classes.title}
            >
              Brilliant Dog API
            </Typography>
            <Typography
              className={classes.date}
            >
              Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth='md' className={classes.root}>
        <Paper
          elevation={0}
          className={classes.paper}
        >
          <ShowDogs
            imgUrl={imgUrl}
            selected={selected}
            breedList={breedList}
            handleSelect={handleSelect}
            getBreedImage={getBreedImage}
          />
          <Comments
            selected={selected}
          />
        </Paper>
      </Container>

    </main>
  );
}

export default App;
