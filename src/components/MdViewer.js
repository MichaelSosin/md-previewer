import React from 'react'
import { Card, CardText, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style = {
    card: {
        margin: 24,
        padding: 12
    }
}
const MdViewer = (props)=> (
    <Card style={style.card}>
        <TextField
            floatingLabelText='Insert Markdown Here'
            multiLine
            rows={6}
            fullWidth
            onChange={props.onChange}
            value={props.value} />
        <CardTitle 
            title='See the result here:' />
        <CardText 
            dangerouslySetInnerHTML={props.result} 
            rows={6} />
        <RaisedButton
            primary
            label='Clear'
            disabled={!props.value}
            onClick={props.handleClearInput} />
    </Card>
)

export default MdViewer