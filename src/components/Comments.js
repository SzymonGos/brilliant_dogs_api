import React from 'react';
import { Box, TextField, Typography, makeStyles, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles(() => {
    return {
        field: {
            margin: '1rem 0',
            display: 'block'
        },
        title: {
            marginBottom: '1rem'
        },
    }
})

function Comments({ selected }) {

    const classes = useStyles();

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
                    noValidate
                    autoComplete='off'
                >
                    <TextField
                        className={classes.field}
                        label='Title'
                        variant='outlined'
                        fullWidth
                        required
                    />
                    <TextField
                        className={classes.field}
                        label='Message'
                        variant='outlined'
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />
                    <Button
                        color='primary'
                        variant="contained"
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