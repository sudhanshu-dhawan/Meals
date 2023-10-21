import React, { useState } from 'react'

   
 const Meals=()=> {
  const [Mealtitle,setMealtitle]= useState([]); 
  const[loadingmsg,setloadingmsg] = useState('');
  const [fetchData,setFetchData] =useState(null);
  const handlechange=(event)=>{
    
    setMealtitle(event.target.value);
    console.log(event.target.value);
  }
  
   
  const fetchMealData=async()=>{
          setloadingmsg('loading your meal data....');
          try{
            // const apikey = '1'
            const response = await
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Mealtitle}`);
            
            if(response.ok){
              setloadingmsg('');
              const Data = await response.json();
              setFetchData(Data);
              console.log(Data);
            }
          }catch(error){
            setloadingmsg('Page temporarily down');
            setFetchData("null");
            console.log(error);
          }
        }
        
        return (
          
          <>
          <div className='datas' >
          
           
    <h1 className='myh1'>Ready To Get Your Favourite Meal !!<img className='image' src="https://c1.wallpaperflare.com/preview/899/135/827/chef-cooker-dessert-cook.jpg" alt="" height={100}/> </h1>
   
    <p >(you can enter any words like chicken  , salad  or name of a dish and find your tasty meal)</p>
  
   
   <input className='searchbar' type="text" placeholder='enter meal name' onChange={handlechange}  />
   <br />
   <button onClick={fetchMealData}>search</button>
   
   <br />
   {loadingmsg}
   { fetchData &&
   
   <div>
    
    <h1>Meal Name: {fetchData.meals[0].strMeal}</h1>
    <p>Meal ID: {fetchData.meals[0].idMeal}</p>
    <p>Category:{fetchData.meals[0].strCategory}</p>
    <p>Country of Origin: {fetchData.meals[0].strArea}</p>
     <p>Your tasty meal:</p><img src={fetchData.meals[0].strMealThumb } height={250}  alt="" />
     <h2>Your Meal Recipe: </h2>
     <h3>{fetchData.meals[0].strInstructions}</h3> 
     
  
    </div>
    
    }
   
   </div>

  
  
    </>
  
  );
};
export default Meals;
