import React, { useState }  from 'react';
import { Box, TextField, Typography, makeStyles, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { v4 as uuidv4 } from 'uuid';

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
    const [comments, setComments] = useState([]);

    console.log(comments);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setMessageError(false);

        if (name === '') {
            setNameError(true)
        }
        if (message === '') {
            setMessageError(true)
        }

        if (name && message) {
            setComments((comments) => [
                ...comments, {
                    id : uuidv4().substring(0, 10),
                    breed: selected,
                    name: name,
                    message: message
                }
            ])
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
            {/* Comments / test */}
            <div>
                {comments.map((comment) => {
                    const { id, breed, name, message } = comment
                    return (
                        <div key={id}>
                            <h3>{breed}</h3>
                            <p>{name}</p>
                            <p>{message}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Comments