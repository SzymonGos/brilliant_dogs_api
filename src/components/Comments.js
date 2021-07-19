import React, { useState } from 'react';
import { Box, TextField, Typography, makeStyles, Button, Card, CardContent } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(() => {
    return {
        field: {
            margin: '1rem 0',
            display: 'block'
        },
        title: {
            marginBottom: '1.5rem'
        },
        button: {
            alignSelf: 'flex-end'
        },
        responses: {
            marginTop: '3rem',
            fontWeight: 'bold'
        },
        messageBox: {
            margin: '2rem 0'
        },
        messageCard: {
            marginBottom: '2rem',
            boxShadow: 'rgb(0 0 0 / 12%) 0px 2px 8px'
        },
        author: {
            textAlign: 'right',
            fontStyle: 'italic'
        },

    }
})

function Comments({ selected }) {

    const classes = useStyles();
    const [isSelected, setIsSelected] = useState(false);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError(false);
        setMessageError(false);

        if(selected === ''){
            setIsSelected(true)
        }

        if (name === '') {
            setNameError(true)
        }
        if (message === '') {
            setMessageError(true)
        }

        if (selected && (name && message)) {
            setComments((comments) => [
                ...comments, {
                    id: uuidv4().substring(0, 10),
                    breed: selected,
                    name: name,
                    message: message
                }
            ]);
            setName('');
            setMessage('');
            setIsSelected(false);
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
                    <Box>{(isSelected)
                        ? <Typography
                            variant='body2'
                            color='secondary'
                        >
                            Please choose a breed
                        </Typography>
                        : null}
                    </Box>

                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        className={classes.field}
                        label='Name'
                        variant='outlined'
                        fullWidth
                        required
                        value={name}
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
                        value={message}
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
            {/* Comments section */}
            <Typography
                className={classes.responses}
                variant='h6'
            >
                Responses({comments.length})
            </Typography>
            <Box
                className={classes.messageBox}
            >
                {comments.map((comment) => {
                    const { id, breed, name, message } = comment
                    return (
                        <Card key={id} className={classes.messageCard}>
                            <CardContent>
                                <Typography
                                    variant='h6'
                                    className={classes.title}
                                >
                                    <Box fontWeight='fontWeightBold'> Breed: {breed}</Box>
                                </Typography>
                                <Typography
                                    gutterBottom
                                >{message}</Typography>
                                <Typography
                                    className={classes.author}
                                > {name}</Typography>
                            </CardContent>
                        </Card>
                    )
                }).reverse()
                }
            </Box>
        </section>
    )
}

export default Comments;