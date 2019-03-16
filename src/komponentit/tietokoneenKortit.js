import React from 'react';
import { connect } from 'react-redux';



const TietokoneenKortit = (props) => {
    const kortit = props.kortit.map((kortti, i) => {
        return <span key={i} className="w3-animate-opacity"><img src={kortti.url} alt={`kortti${i}`} 
        height="100" className="kortti w3-card-4" /></span>
    });

    
    return (
        <div className="kortit">
           {kortit}
        </div>
    );
}

const mapStateToProps = state => ({
    kortit: state.peli.tietokoneenKortit
});

export default connect(mapStateToProps)(TietokoneenKortit);