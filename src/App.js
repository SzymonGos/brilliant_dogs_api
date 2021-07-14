import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { format } from 'date-fns';
import ShowDogs from "./components/ShowDogs";
import Comments from "./components/Comments";


const apiURL = 'https://dog.ceo/api';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: '1rem',
      width: '100%',
      minHeight: '100vh'
    },
    page: {
      padding: theme.spacing(3)
    },
    title: {
      flexGrow: 1,
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
          <Typography>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
    <Container maxWidth='md' className={classes.root}>
    <ShowDogs
        imgUrl={imgUrl}
        selected={selected}
        breedList={breedList}
        handleSelect={handleSelect}
        getBreedImage={getBreedImage}
      />
      <Comments />
    </Container>
    </main>
  );
}

export default App;
