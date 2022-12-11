import React from 'react';
import '../../style/components/landing_page/Histoire.scss';
import photoPresentation from '../../medias/naila-ballon.jpg';

const Histoire = () => {
    return (
        <div className='histoire'>
            <div className="row">

                <div className="col">
                    <img src={photoPresentation} alt="Présentation" />
                </div>

                <div className="col">
                    <hr className="separate" />
                    <h1>Notre Histoire</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores qui sunt adipisci cum, quos impedit deserunt fuga voluptatum error!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores qui sunt adipisci cum, quos impedit deserunt fuga voluptatum error!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores qui sunt adipisci cum, quos impedit deserunt fuga voluptatum error!</p>
                </div>

            </div>
        </div>
    );
};

export default Histoire;