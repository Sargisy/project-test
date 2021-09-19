import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getList} from '../services/index'
import './index.css';

const Categories = ({changeSelectedCategory}) => {

  const dispatch = useDispatch();


  const getCategoriesList = async () => {
    const url = `https://api.thecatapi.com/v1/categories `;

    const categoriesList = await getList(url);
    dispatch({ type: 'GET_CATEGORIES', categoriesList}) 
} 

  useEffect(() => {
    getCategoriesList()    
  }, []);

  const categoriesData = useSelector(state => {
    return state.categories.categories});

  const getCategoriesButtons =()=>{
    if(!categoriesData) return '';

    const buttons = categoriesData.map(({id, name}) => {
      return <button className="buttons" onClick={()=>{changeSelectedCategory({id, name})}} key={id}>{name}</button>
    });
    return buttons
  }  
  

    return (         
        <section className="container" id="section-categories">
          {getCategoriesButtons()}     
        </section>
     );
}
 
export default Categories;