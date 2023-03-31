import React from 'react';

const BlocCook = ({c}) => {
    
   console.log(c);
    return (
        <div className='bloc-cook'>
          <div>
                <div >
                    <h2>{c.strMeal}</h2>
                </div> 
                <div>
                    <h4>Orgine : {c.strArea}</h4>
                </div>
                <div className="img-container">
                    <img src={c.strMealThumb} alt="" /> 
                </div>
                <div className="info-container">
                    <span>
                        {c.strInstructions.substring(0, 390)+" ..."}
                    </span>
                </div>
            </div>    
        </div>
        
        
        // <div className='bloc-cook'>
        //     <div >
        //         <h2>{objectCook[0].strMeal}</h2>
        //     </div> 
        //     <div className="img-container">
        //         <img src={objectCook[0].strMealThumb} alt="" /> 
        //     </div>
        //     <div className="info-container">
        //         <span>
        //             {objectCook[0].strInstructions}
        //         </span>
        //     </div>
            
        // </div>
    );
};

export default BlocCook;