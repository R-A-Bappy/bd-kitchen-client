import React, { useEffect, useState } from 'react';
import DataDetail from '../DataDetail/DataDetail';
import { Rating, ThinStar } from '@smastrom/react-rating';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Home = () => {
    const [dataDetails, setDataDetails] = useState([]);

    useEffect(() => {
        fetch('https://biryani-chef-server-site-r-a-bappy.vercel.app/')
            .then(res => res.json())
            .then(data => setDataDetails(data))
            .catch(error => console.log(error))
    }, []);

    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div>
            <div className="bg-[url('https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/homemade-chicken-tikka-masala-AW6RTJ7.jpg')] h-64 md:min-h-screen bg-no-repeat bg-cover flex flex-col justify-center items-center mb-24">
                <h2 className='text-4xl md:text-6xl font-bold text-gray-100'>Hello<span className='text-red-500'>!</span> Guest</h2>
                <h2 className='text-4xl md:text-6xl font-bold text-gray-100'>Welcome To Our</h2>
                <h2 className='text-4xl md:text-6xl font-bold text-gray-100'>BD kitchen</h2>
            </div>
            <div className='mb-24'>
                <h2 className='text-4xl text-gray-900 text-center my-4 font-bold'>Chef Information</h2>
                <p className='md:w-2/4 text-center text-gray-600 mx-auto mb-12'>A Bangladeshi chef is a culinary professional who specializes in creating authentic Bangladeshi cuisine. They are responsible for planning and preparing menus, managing kitchen staff, ordering ingredients, and ensuring that dishes are prepared to the highest standards of quality and taste.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-10/12 mx-auto gap-8'>
                    {
                        dataDetails.map(detail => <DataDetail key={detail.id} detail={detail}></DataDetail>)
                    }
                </div>
            </div>
            {/* latest recipes section */}
            <div>
                <h2 className='text-4xl text-gray-900 text-center my-4 font-bold mb-16'>Latest Recipes</h2>
                <div className='md:flex w-11/12 md:w-10/12 mx-auto md:justify-between md:gap-8 mb-24'>
                    <div className="card w-full mb-8 md:mb-0 bg-base-100 shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="baked chicken" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Baked Chicken Breast</h2>
                            <Rating style={{ maxWidth: 200 }} value={5} itemStyles={myStyles} readOnly />
                            <p className='text-gray-400 mb-8'>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                            <div className="card-actions border-t border-t-red-300 pb-4">
                                <p className='absolute bottom-3 left-8 text-lg font-medium border-r border-r-red-300 pr-16'>Chicken</p>
                                <p className='absolute bottom-3 right-24 text-lg font-medium'>1 hr 20 mins</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full mb-8 md:mb-0 bg-base-100 shadow-xl">
                        <figure><img src="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/vegan-tofu-baked-cheese-pancakes-with-mango-2GBH46C.jpg" alt="baked chicken" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Tofu and Cheese Pancakes</h2>
                            <Rating style={{ maxWidth: 200 }} value={3.8} itemStyles={myStyles} readOnly />
                            <p className='text-gray-400 mb-8'>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                            <div className="card-actions border-t border-t-red-300 pb-4">
                                <p className='absolute bottom-3 left-8 text-lg font-medium border-r border-r-red-300 pr-16'>Desserts</p>
                                <p className='absolute bottom-3 right-24 text-lg font-medium'>1 hr 35 mins</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/cooked-vegetables-according-to-chinese-recipe-PN2GKUB.jpg" alt="Chinese Veggie Stir Fry" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Chinese Veggie Stir Fry</h2>
                            <Rating style={{ maxWidth: 200 }} value={4.5} itemStyles={myStyles} readOnly />
                            <p className='text-gray-400 mb-8'>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                            <div className="card-actions border-t border-t-red-300 pb-4">
                                <p className='absolute bottom-3 left-8 text-lg font-medium border-r border-r-red-300 pr-16'>Vegetarian</p>
                                <p className='absolute bottom-3 right-20 text-lg font-medium'>1 hr 40 mins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* meet the chef section */}
            <div>
                <h2 className='text-4xl text-gray-900 text-center my-4 font-bold mb-16'>Meet The Chefs</h2>
                <div className='md:flex w-11/12 md:w-10/12 mx-auto gap-8'>
                    <div className="card w-full bg-base-100 shadow-xl mb-8 md:mb-0">
                        <figure><img src="https://media.istockphoto.com/id/1169586694/photo/happy-asian-chef-holding-carton-plates-in-food-truck.jpg?s=612x612&w=is&k=20&c=MlkzeuN4xGOIPw6YsgjkwcnOFZi1hLTZi2k-q8S6H9M=" alt="chef picture" /></figure>
                        <div className="card-body  items-center text-center">
                            <h2 className="card-title text-4xl font-bold">Christine</h2>
                            <p>Master Chef</p>
                            <div className="card-actions text-4xl gap-8 pt-4">
                                <FaTwitter className='hover:text-green-500' />
                                <FaFacebook className='hover:text-green-500' />
                                <FaInstagram className='hover:text-green-500' />
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl mb-8 md:mb-0">
                        <figure><img src="https://media.istockphoto.com/id/877309720/photo/confident-chef-standing-arms-crossed-in-kitchen.jpg?s=612x612&w=is&k=20&c=dXkhlXpcI-XE2RRnaXIo1J3BHFE8LdLH-8lnrf1aMB8=" alt="chef picture" /></figure>
                        <div className="card-body  items-center text-center">
                            <h2 className="card-title text-4xl font-bold">John Martin</h2>
                            <p>Master Chef</p>
                            <div className="card-actions text-4xl gap-8 pt-4">
                                <FaTwitter className='hover:text-green-500' />
                                <FaFacebook className='hover:text-green-500' />
                                <FaInstagram className='hover:text-green-500' />
                            </div>
                        </div>
                    </div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src="https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=2048x2048&w=is&k=20&c=v1b_VOF7bUPMN6UV4G-6zOW-dXt89kWO02dM5vrN1MQ=" alt="chef picture" /></figure>
                        <div className="card-body  items-center text-center">
                            <h2 className="card-title text-4xl font-bold">Sarah Albert</h2>
                            <p>Master Chef</p>
                            <div className="card-actions text-4xl gap-8 pt-4">
                                <FaTwitter className='hover:text-green-500' />
                                <FaFacebook className='hover:text-green-500' />
                                <FaInstagram className='hover:text-green-500' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:bg-[url("https://images.unsplash.com/photo-1551554781-c46200ea959d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-no-repeat bg-cover md:mb-20 invisible md:visible'>
                    <div className="flex w-11/12 md:w-10/12 mx-auto justify-evenly h-96 items-end pb-6 -mt-48">
                        <div>
                            <h2 className='text-6xl text-lime-600 font-bold'>340</h2>
                            <p className='text-lg text-lime-600 text-center'>Master Chefs</p>
                        </div>
                        <div>
                            <h2 className='text-6xl text-lime-600 font-bold'>6403</h2>
                            <p className='text-lg text-lime-600 text-center'>Total Recipes</p>
                        </div>
                        <div>
                            <h2 className='text-6xl text-lime-600 font-bold'>8400</h2>
                            <p className='text-lg text-lime-600 text-center'>Happy Users</p>
                        </div>
                        <div>
                            <h2 className='text-6xl text-lime-600 font-bold'>600</h2>
                            <p className='text-lg text-lime-600 text-center'>Categories</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;