import React from 'react';

import '../../style/components/wedding_page/FormW.scss';

const FormW = () => {
    return (
        <div className='formW'>
            <h2>Sautons le pas !</h2>
            <form>
                <p><label htmlFor="nameWoman">Nom et prénom de la future mariée</label> <input name='nameWoman' type="text" required/></p>

                <p><label htmlFor="nameMan">Nom et prénom du futur marié</label> <input name='nameMan' type="text" required/></p>

                <p><label htmlFor="email">Adresse mail</label> <input name='email' type="email" required/></p>

                <p><label htmlFor="telephone">N° de téléphone</label> <input name='email' type="tel" required/></p>

                <p><label htmlFor="dateCivil">Date du mariage civil</label> <input name='dateCivil' type="date" required/></p>

                <p><label htmlFor="dateLaique">Date du mariage laïque</label> <input name='dateLaique' type="date" required/></p>

                <div className="radioRow">
                    <div className="left">
                        <label htmlFor="prestation">Prestation souhaitée </label>
                    </div>
                    <div className="right">
                        <label htmlFor="prestation">
                            <input type="radio" name='prestation' value="Complete"/> 
                            Complète
                        </label>
                        
                        <label htmlFor="prestation">
                            <input type="radio" name="prestation" value="Partielle"/>
                            Partielle
                        </label>
                    </div>
                </div>
                

                <p><label htmlFor="invite">Nombre d'invités</label><input type="number" name='invite' required/></p>

                <p> <label htmlFor="theme">Thématique choisi</label><input type="text" name='theme' required/></p>

                <p><label htmlFor="color">Couleur choisi</label><input type="text" name='color' required/></p>

                <p><label htmlFor="connu">Comment avez-vous connu l'idylle ?</label><input type="text" name='connu' required/></p>

                <div className="textStart">
                    <p><label htmlFor="importantPoint">Avez-vous un point important à mettre en avant lors de vos/votre cérémonie(s) ?</label></p> 
                    <p><textarea name="importantPoint" cols="85" rows="5"></textarea></p>

                    <p><label htmlFor="dontWant">Avez-vous des éléments que vous ne souhaitez pas voir lors de vos/votre cérémonie(s) ?</label></p>
                    <p><textarea name="dontwant" cols="205" rows="5"></textarea></p>
                </div>

                {/* <p><input type="submit" value="Envoyer" /></p> */}
                <button>
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Envoyer</span>
                </button>
            </form>
        </div>
    );
};

export default FormW;