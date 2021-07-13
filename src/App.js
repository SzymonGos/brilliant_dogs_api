import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowDogs from "./components/ShowDogs";


const apiURL = 'https://dog.ceo/api';

function App() {

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


  if (isLoading) {
    return (
      <main>
        Loading...
      </main>
    )
  }

  const handleSelect = (e) => {
    setSelected(e.target.value)
  }
  console.log(selected);
  return (
    <main>
      <ShowDogs
        breedList={breedList}
        selected={selected}
        handleSelect={handleSelect}
        getBreedImage={getBreedImage}
        imgUrl={imgUrl}
      />
    </main>
  );
}

export default App;
