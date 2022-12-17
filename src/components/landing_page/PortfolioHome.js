import React from 'react';

const PortfolioHome = () => {

    const style= {
           container: {
            height: '60vh', 
            backgroundColor:'rgba(24, 24, 24, 0.833)', 
            marginTop:'50px',
           } 
    }
    
    return (
        <div className='portfolioHome' style={style.container}>
            <h1 style={{textAlign:'center'}}>Découvrez nos créations</h1>
        </div>
    );
};

export default PortfolioHome;