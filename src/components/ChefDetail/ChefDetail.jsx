import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import LazyLoad from 'react-lazy-load';

const ChefDetail = () => {
    const chefDetail = useLoaderData();
    const { picture, name, description, recipes, likes, experience, recipeDetail } = chefDetail;
    return (
        <div className='w-11/12 md:w-10/12 mx-auto'>
            <div className='md:flex gap-8 mb-24'>
                <div className='md:pl-24 pt-12'>
                    <LazyLoad threshold={0.95}>
                        <img className='rounded' src={picture} alt="Chef Photo" style={{ height: "300px", width: "600px" }} />
                    </LazyLoad>
                </div>
                <div className='pt-12 md:pt-20'>
                    <h2 className='text-lg font-medium text-gray-500 mb-2'><span className='text-2xl font-bold text-gray-700'>Name:</span> {name}</h2>
                    <h2 className='text-lg font-medium text-gray-500 mb-2'><span className='text-2xl font-bold text-gray-700'>Description:</span> {description}</h2>
                    <h2 className='text-lg font-medium text-gray-500 mb-2'><span className='text-2xl font-bold text-gray-700'>Experience:</span> {experience} years</h2>
                    <h2 className='text-lg font-medium text-gray-500 mb-2'><span className='text-2xl font-bold text-gray-700'>Recipes:</span> {recipes}</h2>
                    <p> <FaHeart className='text-red-600 inline'></FaHeart> <span>{likes}</span></p>
                    <button></button>
                </div>
            </div>
            <div>
                <h2 className='text-5xl font-bold text-center mb-24'>Recipes</h2>
                <div className='md:flex md:gap-8 mb-12'>
                    {
                        recipeDetail.map((recipeData, index) => <RecipeDetail key={index} recipeData={recipeData} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;