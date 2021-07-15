import React from 'react';
import { Box, TextField, Typography, makeStyles, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useState } from 'react';


const useStyles = makeStyles(() => {
    return {
        field: {
            margin: '1rem 0',
            display: 'block'
        },
        title: {
            marginBottom: '1rem'
        },
        button: {
            alignSelf: 'flex-end'
        }
    }
})

function Comments({ selected }) {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const data = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setMessageError(false);

        if(name === ''){
            setNameError(true)
        }
        if(message === ''){
            setMessageError(true)
        }
        
        if(name && message){
            console.log(name + ' ' +message);
        } 
    }

    return (
        <section>
            <Box
                display='flex'
                justifyContent='center'
                flexDirection='column'
            >
                <Typography
                    variant='h5'
                    align='center'
                    className={classes.title}
                >
                    Leave a Comment
                </Typography>
                <div className="underline"></div>

                {/* Create a Comment */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    autoComplete='off'
                >
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        className={classes.field}
                        label='Name'
                        variant='outlined'
                        fullWidth
                        required
                        error={nameError}
                    />
                    <TextField
                        onChange={(e) => setMessage(e.target.value)}
                        className={classes.field}
                        label='Message'
                        variant='outlined'
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={messageError}
                    />
                    <Button
                        color='primary'
                        variant="contained"
                        type='submit'                      
                    >
                        send <KeyboardArrowRightIcon />
                    </Button>
                </form>
            </Box>
            {/* Comments */}
        </section>
    )
}

export default Comments