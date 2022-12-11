    import React from 'react';

import '../../style/components/form_page/Formulaire.scss';

const Formulaire = () => {
    return (
        <div className='form'>
            <div className="bg"></div>

            <div className="title">
                <h1>Réservez votre prestation</h1> <br />
                <h3>On vous recontactera dans les plus brefs délais</h3>
            </div>

            <div className="container">
            <form>
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
                <input type="time" name="h_deb" id="h_deb" required/> 
                {/* <label for="h_fin">Heure approximative de fin : </label>
                <input type="time" name="" id="h_fin" required/> */}</p>
		
		        <p><label for="place">Lieu : </label> 
                <input type="text" name="place" id="place" required placeholder="Lieu de l'évènement"/><br/> 
                <span id="propal">Afin de vous proposez un décor sur mesusre nous vous invitons à nous transmettre des photos et vidéos du lieu par WhatsApp au <strong> +590 690 74 69 31</strong></span></p>
		
		        <p><label for="nb_invit">Nombre d'invités : </label> 
                <input type="number" name="nb-invit" id="nb_invit" required placeholder="Quel est le nombre d'invité ?"/></p>

{/* 				<p><label for="type_event">Type de prestations :</label> <br/> 
                <span>Veuillez choisir une prestation</span></p> */}

                <p><label for="type_presta">Type de prestations :</label>
                <select name="type_presta" id="type_presta">
                    <option value="picnic">Pique-Nique</option>
                    <option value="event">Évènement</option>
                    <option value="ballon">Ballon Desinger</option>
                </select></p>

{/* 		        <div id="type_presta">
			        <div>
				        <input type="checkbox" id="picnic" name="type_event" value="picnic" />
				        <label for="picnic">Pique nique</label>
			        </div>

                    <div>
                        <input type="checkbox" id="event" name="type_event" value="event"/>
                        <label for="event">Évènement</label>
                    </div>

                    <div>
                        <input type="checkbox" id="ballon" name="type_event" value="ballon"/>
                        <label for="ballon">Ballon Designer</label>
                    </div>
                </div> */}

		
                <p><label for="type_occasion"> Pour quelle occasion ?</label></p>
                <select name="type_occas" id="type_occas">
                    <option value="birthDay">Anniversaire</option>
                    <option value="weddingPropose">Demande en Mariage</option>
                    <option value="religious">Célébraion Religieuse</option>
                    <option value="birthParty">Fête de Naissance</option>
                    <option value="engagement">Annonce de Fiançailles</option>
                    <option value="wedding">Mariage</option>
                    <option value="baby">Baby Shower</option>
                    <option value="evj">EVJF - EVJG</option>
                    <option value="sharing">Moment de partage</option>
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
                    <option value="1ePrix">500€ - 1000€</option>
                    <option value="2ePrix">100€ - 1500€</option>
                    <option value="autrePrix">1500€ +</option>
                </select></p>

                <p><label for="how">Comment avez vous connue l'Idylle ? </label> 
                <input type="text" name="how" id="how" placeholder='Via Instagram'/></p>
		 
        		<p> <input type="submit" name="submit" value="Envoyer"/> </p>
            </form>
        </div>    
    </div>
    );
};

export default Formulaire;