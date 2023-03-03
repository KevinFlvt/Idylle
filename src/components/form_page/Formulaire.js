import React, { useRef } from 'react';
import { FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

import '../../style/components/form_page/Formulaire.scss';

const Formulaire = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0g8p4yn', 'template_gkx3vc8', form.current, 'Tgz1pP6Jqvdt8ZD8X')
        .then((result) => {
            console.log(result.text);
            window.alert("Votre message à bien été envoyé. \n Vérifier vos spams si vous n'avez rien reçu.");
            e.target.reset();
            console.log("message envoyé");

        }, (error) => {
            console.log(error.text);
            console.log("echec de l'envoie");
        });
    };

    return (
        <div className='form'>

            <div className="insta">
            <a href="https://www.instagram.com/lidyllee/?hl=fr" target="_blank" rel='noreferrer' id='insta'><FaInstagram /></a>
            </div>
            
            <div className="bg"></div>

            <div className="title">
                <h1>Réservez votre prestation</h1> <br />
                <p>Merci de l'intérêt que vous nous portez. Nous vous contacterons dans les plus brefs délais. <br />
                   Merci de votre compréhension.<br />
                   L'idylle <span>&#129498;&#127995;</span></p>
            </div>

            <div className="container">
            <form ref={form} onSubmit={sendEmail}>
                <p><label for="nom">Nom :</label> 
                <input type="text" name="nom" id="nom" placeholder='Nom de famille' required/></p>

                
                <p><label for="prenom">Prénom :</label> 
                <input type="text" name="prenom" id="prenom" placeholder='Prénom' required/></p>
                
                <p><label for="mail">Email :</label> 
                <input type="email" name="mail" id="mail" placeholder='Adresse e-mail' required/></p>
                
                <p><label for="tel">Téléphone : </label> 
                <input type="tel" name="tel" id="tel" placeholder='+590 690 11 22 33' required/></p>
            
                <p><label for="home">Résidence :</label>
                <input type="text" name="home" id="home" placeholder='Adresse de résidence'/></p>
		
		        <p><label for="event">Date de l'évènement : </label> 
                <input type="date" name="event" id="event" required/></p>
		
		        <p><label for="h_deb">Heure de début : </label>
                <input type="time" name="h_deb" id="h_deb" required/></p>

                <p><label for="h_fin">Heure approximative de fin : </label>
                <input type="time" name="h_fin" id="h_fin" required/> </p>
		
		        <p><label for="place">Lieu : </label> 
                <input type="text" name="place" id="place" required placeholder="Lieu de l'évènement"/></p>
                <p className="propal"><span>Afin de vous proposez un décor sur mesusre nous vous invitons à nous transmettre des photos et vidéos du lieu par WhatsApp au <strong> +590 690 74 69 31</strong></span></p>
		
		        <p><label for="nb_invit">Nombre d'invités : </label> 
                <input type="number" name="nb_invit" id="nb_invit" required placeholder="Quel est le nombre d'invité ?"/></p>

                <p><label for="type_presta">Type de prestations :</label>
                <select name="type_presta" id="type_presta">
                    <option value="Pique-Nique">Pique-Nique</option>
                    <option value="Évènement">Évènement</option>
                    <option value="Ballon">Balloon Designer</option>
                    <option value="Mariage">Wedding Planner</option>
                </select></p>
		
                <p><label for="type_occasion"> Pour quelle occasion ?</label></p>
                <select name="type_occas" id="type_occas">
                    <option value="Annonce de Fiançailles">Annonce de Fiançailles</option>
                    <option value="Célébration Religieuse">Célébration Religieuse</option>
                    <option value="Demande en mariage">Demande en Mariage</option>
                    <option value="Moment de partage">Moment de partage</option>
                    <option value="Fête de Naissance">Fête de Naissance</option> 
                    <option value="EVJF - EVJG">EVJF - EVJG</option>
                    <option value="Baby Shower">Baby Shower</option>   
                    <option value="Anniversaire">Anniversaire</option>  
                    <option value="Mariage">Mariage</option>
                </select>
                
                <div className="radioRow">
                    <div className="left">
                        <label htmlFor="eat"> Service de restauration ? </label>
                    </div>
                    <div className="right">
                        <label for="eat"> 
                            <input type="radio" id="eat_yes" name="eat" value="oui"/>
                            Oui
                        </label> 
                         
                        <label for="eat">
                            <input type="radio" name="eat" id="eat_no" value="non"/>
                            Non
                        </label>   
                    </div>
                </div>

                <p><br /></p>
                <p><label for="theme">Thème Choisi :</label> 
                <input type="text" name="theme" id="theme" placeholder='La nature'/></p>

                <p><label for="color">Choix des Couleurs : <br /><span>(deux à trois)</span> </label> 
                <input type="text" name="color" id="color" required placeholder='Cyan - Dorée'/></p>

                <p><label for="other">Autres :</label> 
                <input type="text" name="other" id="other" placeholder='Informations complémentaires'/></p> 
                
                <p><label for="price">Budget :</label> 
                <select name="price" id="price">
                    <option value="900€ - 1500€">900€ - 1500€</option>
                    <option value="1500€ - 2000€">1500€ - 2000€</option>
                    <option value="3000€ +">3000€ +</option>
                </select></p>

                <p><label for="how">Comment avez vous connue l'Idylle ? </label> 
                <input type="text" name="how" id="how" placeholder='Via Instagram'/></p>
		 
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
    </div>
    );
};

export default Formulaire;