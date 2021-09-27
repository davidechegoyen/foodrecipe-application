import './Pagelayout.css';
import './Recipepage.css';
import { useHistory } from 'react-router-dom';
import { useEffect , useState} from 'react';
import Axios from 'axios';

const Recipepage = ({id}) => {

    const history = useHistory();
    const [recipe, setRecipeState] = useState('')
    
    const onClickHandlerBackToSearch = () =>{
        history.push(`/`)
    }

    useEffect(() => {
        Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res)=>setRecipeState(res.data.meals[0]))
            .catch((err)=>console.error(err))
            // eslint-disable-next-line 
    }, [])

    const ingredientDeconstruction = ({strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7
                                   ,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20})=>{       
   
    const ingredientList = Object.values({strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7
                                   ,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20});    
 
    return ingredientList;
    }

const measurementsDeconstruction = ({strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7
                                   ,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,strMeasure19,strMeasure20})=>{       
   
    const measurementList = Object.values({strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7
                                   ,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,strMeasure19,strMeasure20});    
    
    return measurementList;
}

    //const instructionSplit = recipe.strInstructions.split(". ")
    //console.log(instructionSplit)
    return (
        <div className="page">
            <div className="content">
                <div className="recipecard block">        
                    <img src={recipe.strMealThumb} alt={`${recipe.strMeal}_image`}/>            
                    <h1>{recipe.strMeal}</h1> 
                    <h2>Ingredients</h2>
                    <p>{`${ingredientDeconstruction(recipe)} `}</p> 
                    <h2>Measurements</h2>
                    <p>{`${measurementsDeconstruction(recipe)} `}</p>
                    <h2>Instructions</h2>
                    <p>{recipe.strInstructions}</p>
                    <button onClick={onClickHandlerBackToSearch}>Back to Search</button>   
                                                        
                </div>
            </div>          
        </div>
    )
}

export default Recipepage
