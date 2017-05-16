/**
 * Created by einavcarmon on 16/05/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormGroup, FormControl, HelpBlock, ControlLabel, Button, ButtonGroup,ButtonToolbar} from 'react-bootstrap';
import { bindActionCreators} from 'redux';
import {updateSearchTerm} from '../actions/index'


class Search extends Component {

    constructor(props){
        super(props);

        this.state = {
            updateSearch: this.props.updateSearchTerm,
            searchTermInputValue: '',
            color:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.colorClicked = this.colorClicked.bind(this);

        this.colors = ["red","blue", "yellow", "green", "black", "white"]

    }

    updateSearch () {
        let searchParams = `utf8=%E2%9C%93&q=${this.state.searchTermInputValue}&lang=en&availability=for_sale&substrate=all&sort=classic&view=design&offset=0&limit=10&color_family1=${this.state.color}&color_family2=&commit=Search`;

        this.state.updateSearch(searchParams);
    }

    colorClicked(color)
    {
        this.setState({color:color});
        this.updateSearch();
    }

    getValidationState() {
        const length = this.state.searchTermInputValue.length;
        if (length > 2) return 'success';
        else if (length > 1) return 'warning';
        else if (length > 0) return 'error';
    }

    handleChange(e) {
        this.setState({ searchTermInputValue: e.target.value });
        this.updateSearch();
    }

    render () {

        this.updateSearch();

        return (
            <div className="search-form">
                <form>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState()}
                    >
                        <ControlLabel>I'm looking for </ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.searchTermInputValue}
                            placeholder="dogs"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        <ControlLabel>In color </ControlLabel>
                        <div>
                            <ButtonToolbar>
                                <ButtonGroup>
                                    {this.colors.map((color) => {
                                        return <Button key={color} className={`btn-${color}`} onClick={() => this.colorClicked(color)}>{color}</Button>
                                    })}
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </FormGroup>
                </form>
                <Link to="/results">Search</Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateSearchTerm}, dispatch);
}

function mapStateToProps({searchTerm}){
    return {searchTerm}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
