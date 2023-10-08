import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummariCard from '../../Shared/NewsSummariCard/NewsSummariCard';

const Home = () => {
    const allNews=useLoaderData();
    return (
        <div>
            <h3>Dragon News Home:{allNews.length}</h3>


            {
                allNews.map(news=><NewsSummariCard
                key={news._id}
                news={news}>

                </NewsSummariCard>)
            }
            
        </div>
    );
};

export default Home;