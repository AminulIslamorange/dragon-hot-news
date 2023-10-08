import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummariCard from '../../Shared/NewsSummariCard/NewsSummariCard';


const Category = () => {
    const categoryNews=useLoaderData()
  
 
    return (
        <div>
            <h3>This Category has news :{categoryNews.length}</h3>
            {categoryNews.map(news=><NewsSummariCard
            key={news._id}
            news={news}
            
            
            ></NewsSummariCard>)}
        </div>
    );
};

export default Category;