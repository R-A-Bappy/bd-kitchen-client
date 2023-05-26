import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const DataDetail = ({ detail }) => {
    const { picture, name, likes, recipes, experience, id } = detail;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <figure>
                    <LazyLoad threshold={0.95}><img src={picture} alt="Shoes" /></LazyLoad>
                </figure>

                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div>
                            <h2 className="card-title">{name}</h2>
                            <p> <FaHeart className='text-red-600 inline'></FaHeart> <span>{likes}</span></p>
                        </div>
                        <div>
                            <h3>Experience(years): {experience}</h3>
                            <h4 className='text-right'>Recipes: {recipes}</h4>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to={`/${id}`}><button className="btn btn-primary w-full">View Recipes Button</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDetail;