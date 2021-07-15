import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, FormControl, InputLabel, Select, MenuItem, makeStyles, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const placeHolder = 'https://dummyimage.com/250x250/546ac2/ffffff&text=Brilliant+Dogs+=)'

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: '10rem'
    },
    root: {
        flexGrow: 1,
    },
    button: {
        alignSelf: 'flex-end',
        marginLeft: '1.1rem',
        height: 'max-content'
    },
    image: {
        borderRadius: '5px',
        maxWidth: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '450px'
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: '700px'
        },
    },
   
}));

function ShowDogs({ breedList, selected, handleSelect, getBreedImage, imgUrl }) {

    const classes = useStyles();
    return (
        <section>
            <Box
                display='flex'
                justifyContent='center'
                mb={6}
            >
                <FormControl
                    className={classes.formControl}
                >
                    <InputLabel color='secondary'>Choose a breed</InputLabel>
                    <Select
                        value={selected}
                        onChange={handleSelect}
                    >
                        {breedList.map((breed) => {
                            return (
                                <MenuItem
                                    key={uuidv4().substring(0, 10)} value={breed}
                                >
                                    {breed}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    disabled={!selected}
                    onClick={getBreedImage}
                >
                    Submit
                    <KeyboardArrowRightIcon />
                </Button>
            </Box>
            <Box
                display='flex'
                justifyContent='center'
            >
                <img
                    className={classes.image}
                    src={imgUrl || placeHolder}
                    alt="brilliant dog"
                />
            </Box>
        </section>
    )
}

export default ShowDogs;