import "./Mainpage.css"
import "./Pagelayout.css"
import "../components/Foodcard.css"
import Axios from "axios"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const Mainpage = ({recipeIdChanger}) => {

    const [search, setSearchState] = useState('')
    const [recipeList , setRecipeList] = useState([])
    const [pageNumber , setPageNumber] = useState(0)
    const [isThereAnythingToDisplay, setIsThereAnythingToDisplay] = useState(recipeList? true:false)

    const history = useHistory();   
    const itemsPerPage = 5;
    const pagesVisited = pageNumber * itemsPerPage
    const pageCount = Math.ceil(recipeList.length / itemsPerPage)

    const fetchData = (ingredient)=>{      
        Axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then((res)=>{
                if(res.data.meals){
                    setRecipeList(res.data.meals)
                }
                else{
                    setIsThereAnythingToDisplay(false)
                }               
            })                
            .catch((err)=>console.error(err))
    }  

    const onClickHandlerSearchButton = () =>{        
        const ingredient = search.replace(" ","_") 
        fetchData(ingredient)
        setIsThereAnythingToDisplay(true)
    }

    const onClickHandlerRecipeButton = (id)=>{
        recipeIdChanger(id)
        history.push(`/recipepage=${id}`)
    }

    //Display Items function
    const displayItems = recipeList.slice(pagesVisited , pagesVisited + itemsPerPage).map((item)=>{
                     return  <div className="card" key={item.idMeal}>    
                                <img src={item.strMealThumb} alt={`${item.strMeal}_image`}/>      
                                <div className="card-content">                
                                    <h2>{item.strMeal}</h2>
                                    <button onClick={()=>onClickHandlerRecipeButton(item.idMeal)}>Recipe</button>
                                </div>                    
                            </div>
                    })


    const changePageHandler =({selected})=>{
        setPageNumber(selected)
    }

   //console.log(displayItems)
   //Console log check for data
   //console.log(recipeList)

    return (
        <div className="mainpage page">
            <div className="content">
                <div className="mainpage-block block">
                    <h1>Food Mama</h1>                    
                    <h3>Type in your favorite ingredient and we'll find a recipe for you ;)</h3>
                    <div className="searchbox">
                        <input onChange={(e)=>setSearchState(e.currentTarget.value)}/><button onClick={onClickHandlerSearchButton}><i className="fas fa-search fa-lg"></i></button>
                    </div>                    
                </div>
                <div className="foodcardblock block">
                 { 
                    isThereAnythingToDisplay? displayItems.map(item=>item) :<h1>No Recipes found :( </h1>
                 }          
                 
                </div>
                {
                    isThereAnythingToDisplay?<ReactPaginate 
                                previousLabel={`Previous`}
                                nextLabel={`Next`}
                                pageCount={pageCount}
                                onPageChange={changePageHandler}
                                containerClassName={`pagination`}
                                previousLinkClassName={`prevbtn`}
                                nextLinkClassName={`nextbtn`}
                                disabledClassName={`paginationDisabled`}
                                activeClassName={`paginationActive`}
                                />:null
                 }
            </div>
        </div>
    )
}

export default Mainpage
