/**
 * Created by einavcarmon on 15/04/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators} from 'redux';

import { fetchSearch, getSearchTerm } from '../actions/index'

import ControlledCarousel from './controlled_carousel';


class Fabrics extends Component{

    constructor(props){
        super(props);
        this.state = {
            userName:props.userName,
            search:{}
        };

        // needs the props in order to be bound to the right scope
        this.props.fetchSearch(this.props.getSearchTerm());
    }

    render () {
        if (this.props.search && this.props.search.results){
            let items = this.props.search.results;

            return (
                <div>
                    <ControlledCarousel items={items}></ControlledCarousel>
                    <Link to="/search">Back to Search</Link>
                </div>
            )
        } else {
            return <div>Loading..</div>
        }
    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchSearch, getSearchTerm}, dispatch);
}

function mapStateToProps({search}){
    return {search}
}

export default connect(mapStateToProps, mapDispatchToProps)(Fabrics);

