import React from 'react';
import PokeDetailsModal from '../PokeDetailsModal/PokeDetailsModal';

import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeDet: {},
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {

        const urlId = this.props.poke.url.match(/([^/]*)\/*$/)[1];

        return (
            <>
                <div key={this.props.pokeId} className="card">
                    <PokeDetailsModal show={this.state.show} handleClose={this.hideModal} url={this.props.poke.url} />
                    <div onClick={this.showModal}>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${this.props.pokeId}.png`} alt={this.props.poke.name} />
                        <h3>#{urlId} {this.props.poke.name}</h3>
                    </div>
                </div>
            </>
        );
    };
}


export default Card;