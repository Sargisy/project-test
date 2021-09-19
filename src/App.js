import React, { useState, lazy, Suspense  } from 'react';
import Categories from './views/Categories';
// import Images from './views/Images';
import './app.css';

const Images = lazy(()=> import('./views/Images'));


function App() {         
    const [categoryId, setCategoryId] = useState()
    const [pageNumber, setPageNumber] = useState(1)

    const handleCategoryChange = (event) =>{
        const {id} = event.target ? event.target : event;
        setCategoryId(id)
        setPageNumber(1)
    }
    

    return (
        <main>
            <div className="pageContainer">
                <div className="categories">
                  <Categories changeSelectedCategory={handleCategoryChange} />
                </div> 
                <div className="contentContainer">
                <div className="images">
                <Suspense fallback={<div>Loading...</div>}>
                <Images categoryId={categoryId} pageNumber={pageNumber}/>
                </Suspense>
                 </div>
                <div className="divider"></div>
                <div className="buttonContainer"> 
                <button className="loadMoreButton" onClick={()=>{setPageNumber(pageNumber+1)}}>Load more</button>                
                </div>
                 </div>                     
            </div>
                
            </main>
    );
}

export default App;
