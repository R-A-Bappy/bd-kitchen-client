import { Rating, ThinStar } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const RecipeDetail = ({ recipeData }) => {
    const [Disable, setDisable] = useState(true);
    const { picture, name, rating, ingredients, cookingMethod } = recipeData;

    const handleDisable = () => {
        setDisable(false);
        toast.success("The recipe is your favorite");
    }

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{cookingMethod.slice(0, 100)}...</p>
                    <p><span className='text-xl font-semibold'>Ingredients: </span>{ingredients.map((i, index) => <li key={index}>{i}</li>)}</p>
                    <div className="card-actions justify-between items-center">
                        <Rating style={{ maxWidth: 150 }} value={rating} itemStyles={myStyles} readOnly />
                        <button onClick={handleDisable} className={`btn ${Disable ? "btn-primary" : "btn-disabled"}`} >favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;