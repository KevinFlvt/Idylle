import React from 'react';

import '../../style/components/wedding_page/FormW.scss';

const FormW = () => {
    return (
        <div className='formW'>
            <h2>Sautons le pas !</h2>
            <form action="" method='post'>
                <p><label htmlFor="nameWoman">Nom et prénom de la future mariée</label> <input name='nameWoman' type="text" /></p>

                <p><label htmlFor="nameMan">Nom et prénom du futur marié</label> <input name='nameMan' type="text" /></p>

                <p><label htmlFor="email">Adresse mail</label> <input name='email' type="email" /></p>

                <p><label htmlFor="telephone">N° de téléphone</label> <input name='email' type="tel" /></p>

                <p><label htmlFor="dateCivil">Date du mariage civil</label> <input name='dateCivil' type="date" /></p>

                <p><label htmlFor="dateLaique">Date du mariage laïque</label> <input name='dateLaique' type="date" /></p>

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
                

                <p><label htmlFor="invite">Nombre d'invités</label><input type="number" name='invite' /></p>

                <p> <label htmlFor="theme">Thématique choisi</label><input type="text" name='theme' /></p>

                <p><label htmlFor="color">Couleur choisi</label><input type="text" name='color' /></p>

                <p><label htmlFor="connu">Comment avez-vous connu l'idylle ?</label><input type="text" name='connu' /></p>

                <div className="textStart">
                    <p><label htmlFor="importantPoint">Avez-vous un point important à mettre en avant lors de vos/votre cérémonie(s) ?</label></p> 
                    <p><textarea name="importantPoint" cols="85" rows="5"></textarea></p>

                    <p><label htmlFor="dontWant">Avez-vous des éléments que vous ne souhaitez pas voir lors de vos/votre cérémonie(s) ?</label></p>
                    <p><textarea name="dontwant" cols="85" rows="5"></textarea></p>
                </div>

                <p><input type="submit" value="Envoyer" /></p>
            </form>
        </div>
    );
};

export default FormW;