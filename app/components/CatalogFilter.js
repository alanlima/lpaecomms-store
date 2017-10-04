import React, { Component } from 'react'

const ContentStyles = {
    mainStyle: {
        marginBottom: "20px",
        padding: "0 20%"
    },
    labelStyle: {
        marginRight: "7px",
    },
    inputStyle: {
        minWidth: "200px",
        width: "600px"
    }
}

class CatalogFilter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            textFilter: ''
        }

        this.handleTextChanged = this.handleTextChanged.bind(this);
    }

    handleTextChanged(event) {
        this.setState({
            textFilter: event.target.value
        }, () => this.props.applyTextFilter(this.state.textFilter))
    }

    render() {
        const { textFilter } = this.state;

        return (
            <div className="row" style={ContentStyles.mainStyle}>
                <label htmlFor="textFilter" style={ContentStyles.labelStyle}>Search:</label>
                <input name="textFilter" 
                       style={ContentStyles.inputStyle}
                       type="text" value={textFilter} onChange={this.handleTextChanged} />
            </div>  
        )
    }
}

module.exports = CatalogFilter