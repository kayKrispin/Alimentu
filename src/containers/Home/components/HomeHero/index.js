import HomeHero from './HomeHero';
import React from 'react';

class HomeHeroContainer extends React.Component {

    state={
        visible:false,
    };

    generateProps () {
        return {
            ...this.state,
            ...this.props,
            handleModal:this.handleModal,
        };
    }

    handleModal = () => {
        this.setState({
            visible:!this.state.visible
        })
    };

        render()
        {
            const props = this.generateProps()
            return <HomeHero {...props}/>
        }
    }

export default  HomeHeroContainer;