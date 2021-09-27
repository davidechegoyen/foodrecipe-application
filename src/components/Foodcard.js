import './Foodcard.css'

const Foodcard = ({strMeal,strMealThumb}) => {
    return (
        <div className="card">    
            <img src={strMealThumb} alt={`${strMeal}_image`}/>      
            <div className="card-content">                
                <h2>{strMeal}</h2>
                <button>Recipe</button>
            </div>                    
        </div>
    )
}

export default Foodcard
