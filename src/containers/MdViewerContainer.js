import React, { Component } from 'react'
import MdViewer from '../components/MdViewer'
import marked from 'marked'

export default class MdViewerContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            raw: '',
            interpreted: ''
        }

        this.handleChangeMarkdown = this.handleChangeMarkdown.bind(this)
        this.handleClearInput = this.handleClearInput.bind(this)
    }

    componentDidMount() {
        this.setState({
            interpreted: marked(this.state.raw)
        })
    }

    handleChangeMarkdown(e) {
        const newMarkdown = e.target.value

        this.setState({
            raw: newMarkdown,
            interpreted: marked(newMarkdown)
        })
    }

    handleClearInput() {
        console.log('clear clicked')
        this.setState({
            raw: '',
            interpreted: ''
        })
    }

    render() {
        const { raw, interpreted } = this.state
        let htmlString = {
            __html: interpreted
        }
        return (
            <MdViewer
                onChange={this.handleChangeMarkdown}
                handleClearInput={this.handleClearInput}
                value={raw}
                result={htmlString} />
        )
    }
}