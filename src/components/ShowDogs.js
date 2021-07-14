import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, FormControl, InputLabel, Select, MenuItem, makeStyles, Button, Paper } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const placeHolder = 'https://dummyimage.com/250x250/546ac2/ffffff.jpg&text=Your+Dog+Here+=)'

const useStyles = makeStyles(() => ({
    formControl: {
        minWidth: '10rem',
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '2rem 0',

    },
    button: {
        alignSelf: 'flex-end',
        marginLeft: '1.1rem',
        height: 'max-content'
    }
}));

function ShowDogs({ breedList, selected, handleSelect, getBreedImage, imgUrl }) {

    const classes = useStyles();
    return (
        <Paper
            elevation={0}
            className={classes.paper}
        >
            <Box 
            display='flex' 
            justifyContent='center'
            mb={3}
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
                    <KeyboardArrowRightIcon/>
                </Button>
            </Box>
            <Box 
            display='flex' 
            justifyContent='center'
            >
            <img style={{ height: '300px', minWidth: '300px', backgroundSize: 'cover' }} src={imgUrl || placeHolder} alt="dog" />
            </Box>
        </Paper>
    )
}

export default ShowDogs;