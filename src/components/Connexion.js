import React from 'react';

import { render } from 'react-dom'; 

class Connexion extends React.Component{
    render(){
        return(
            <div className="connexionBox">
                <form className="connexion">
                    <input 
                        type="text"
                        placeholder="pseudo"
                        required
                    />
                    <button 
                        type="submit">
                            GO
                    </button>
                </form>
            </div>
        )
        
    }
}
export default Connexion; 