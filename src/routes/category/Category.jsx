import React from 'react';
import { useParams } from 'react-router-dom';
import './Category.scss';



const Category = () => {
    const CategoryId = useParams()
    console.log(CategoryId);
    return (
        <div>
            category
        </div>
    );
}

export default Category;
