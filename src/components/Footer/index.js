import Footer from './Footer';
import React from 'react';


class FooterContainer extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll',this.scrollFunction)
    };

    componentWillUnmount() {
        window.removeEventListener('scroll',this.scrollFunction);
    };

    scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("btnTop").style.display = "block";
        } else {
            document.getElementById("btnTop").style.display = "none";
        }
    };

    upToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    generateProps(){
        return {
            ...this.state,
            ...this.props,
            upToTop:this.upToTop,

        }
    }

    render(){
        const props = this.generateProps();
        return <Footer  { ...props } />
    }
}




export default FooterContainer;