import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Paper, Typography, Divider} from "@mui/material";


export default function QuizAnswers(props) {
    const formId = uuidv4()
    const answers = [props.answer1, props.answer2, props.answer3, props.answer4]
    return (
        <Paper sx={{marginBottom: 6, paddingX: 4, paddingY: 3}} elevation={2}>
            <FormControl>
                <FormLabel id={formId}>
                    <Typography variant='h6' sx={{color: 'black'}}>{props.question}</Typography>
                </FormLabel>
                <RadioGroup aria-labelledby={formId} name="radio-buttons-group">
                    <FormControlLabel value={props.answer1} control={<Radio/>} label={props.answer1}/>
                    <FormControlLabel value={props.answer2} control={<Radio/>} label={props.answer2}/>
                    <FormControlLabel value={props.answer3} control={<Radio/>} label={props.answer3}/>
                    <FormControlLabel value={props.answer4} control={<Radio/>} label={props.answer4}/>
                </RadioGroup>
            </FormControl>
        </Paper>
    )
}