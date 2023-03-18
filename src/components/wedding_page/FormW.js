import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import '../../style/components/wedding_page/FormW.scss';

const FormW = () => {

    //fontion envoie de mail
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0g8p4yn', 'template_oewogun', form.current, 'Tgz1pP6Jqvdt8ZD8X')
            .then((result) => {
                console.log(result.text);
                window.alert("Votre message à bien été envoyé.\nVérifier vos spams si vous n'avez rien reçu.");
                e.target.reset();
                console.log("message envoyé");

            }, (error) => {
                console.log(error.text);
                console.log("echec de l'envoie");
            });
    };

    return (
        <div className='formW'>
            <h2>Sautons le pas !</h2>
            <form ref={form} onSubmit={sendEmail}>
                <p><label htmlFor="nameWoman">Nom et prénom de la future mariée</label> <input name='nameWoman' type="text" placeholder='Nom de jeune fille et Prénom' required /></p>

                <p><label htmlFor="nameMan">Nom et prénom du futur marié</label> <input name='nameMan' type="text" placeholder='Nom et Prénom' required /></p>

                <p><label htmlFor="email">Email</label> <input name='email' type="email" placeholder='Adresse mail' required /></p>

                <p><label htmlFor="telephone">Téléphone</label> <input name='telephone' type="tel" placeholder='Numéro de téléphone' required /></p>

                <p><label htmlFor="dateCivil">Date du mariage civil</label> <input name='dateCivil' type="date" required /></p>

                <p><label htmlFor="dateLaique">Date du mariage laïque</label> <input name='dateLaique' type="date" required /></p>

                <div className="radioRow">
                    <div className="left">
                        <label htmlFor="prestation">Prestation souhaitée </label>
                    </div>
                    <div className="right">
                        <label htmlFor="prestation">
                            <input type="radio" name='prestation' value="Complete" />
                            Complète
                        </label>

                        <label htmlFor="prestation">
                            <input type="radio" name="prestation" value="Partielle" />
                            Partielle
                        </label>
                    </div>
                </div>


                <p><label htmlFor="invite">Nombre d'invités</label><input type="number" name='invite' placeholder="Nombre d'invités" required /></p>

                <p> <label htmlFor="theme">Thématique choisie</label><input type="text" name='theme' placeholder='Amour Gloire et Beauté' required /></p>

                <p><label htmlFor="color">Couleurs choisies</label><input type="text" name='color' placeholder='Vert anis - Blanc' required /></p>

                <p><label htmlFor="connu">Comment avez-vous connu l'idylle ?</label><input type="text" name='connu' placeholder='Instagram' required /></p>

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