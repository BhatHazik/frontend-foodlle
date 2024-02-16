import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../Styles/Recipes.css"
import UseAuth from '../Auth/Auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Recipes = (props) => {
UseAuth();
  const [recipeData, setRecipeData] = useState([]);
  const [category, setCategory] = useState('chicken');
  const [error, setError] = useState("");


  

     const handleCategoryChange = async (e) => {
      
          setCategory(e.target.value);
        
     }

  
  


useEffect(() => {
  
    const fetchRecipes = async () => {
      try {
        setError("");
        const response = await axios.get(`http://localhost:4000/api/fetch/recipes?q=${category}`)
        setRecipeData(response.data.d);
      } catch (error) {
        console.error('Error fetching recipe data:', error);
        setError(error);
      }
    };

 
    fetchRecipes();
  }, [category]);


 




  

  return (



<div className={props.displayPort2} > 



      <div className='recipe-container'>
        <div className='big-title-container'>
          <div className='big-title-bg'>
            <div className='big-title'>
            <h1>Recipes</h1>
</div>
</div>
          
</div>

      <div  className='heading'>
              
                <input type="text" placeholder='Search Recipe' value={category} onChange={handleCategoryChange} />
                {/* <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
     </div>
     

{error ? <div > <h5 className='spinner'>...........0</h5> </div> :

<div className='container'>
  

{recipeData.map((recipe, recipeIndex) => (
 
 <div key={recipeIndex} className='items-container'>

   <div className='img-title-container'>
    <div className={props.h1Div}>
      <h1>{recipe.Title}</h1>
    </div>
   
   
    <img src={recipe.Image} alt={recipe.Title}  />
   
   </div>

   


<div className={props.ingredientsContainer}>
<div className='recipe-left'>

   <h2><strong>Ingredients:</strong></h2>


<ul>
  {Object.values(recipe.Ingredients).map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))}
</ul>
   </div>

   <div className='recipe-right'>

   <h2 ><strong>Instructions:</strong></h2>

<p>{recipe.Instructions}</p>
   </div>

</div>
   
   
 </div>
))}
</div>}
</div>
</div> 

  );
}

export default Recipes
