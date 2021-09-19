import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getList} from '../services/index'

const Images = ({categoryId, pageNumber}) => {
   const dispatch = useDispatch();

    const getImagesData = async () => {
        const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=${pageNumber}${categoryId?`&category_ids=${categoryId}`:''} `;

        const imagesDataList = await getList(url);
        dispatch({ type:pageNumber > 1 ?'CHANGE_PAGE_NUMBER':'LOAD_IMAGES', imagesDataList}) 
    }
    
      useEffect(() => {
       getImagesData()    
      }, [categoryId, pageNumber]);  

    const imagesData = useSelector(state => state.images.images);


    const getImages = () => {

      if(!imagesData) return '';      

      const images = imagesData.map(({id, url}) => {
        return<div className="imageContainer"><img src={url} alt=""  key={id} height='300'/></div>
      });

      return images
    }


    return (         
        <section id="section-images">
        <div >
          {getImages()}     
        </div>     
        </section>
     );
}
 
export default Images;