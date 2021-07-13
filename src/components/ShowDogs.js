import React from 'react';

function ShowDogs({ breedList, selected, handleSelect, getBreedImage, imgUrl }) {

    return (
        <div>
            Breed List <br />
            <select value={selected} onChange={handleSelect}>
                <option>Choose a breed</option>
                {breedList.map((breed) => {
                    return (
                        <option value={breed}>
                            {breed}
                        </option>
                    )
                })}
            </select>
            <button disabled={!selected} onClick={getBreedImage}>Submit</button>
            <img style={{height: '300px', minWidth: '300px', backgroundSize: 'cover'}} src={imgUrl} alt="dog" />
        </div>
    )
}

export default ShowDogs;