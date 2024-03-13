'use client'
import { useEffect, useState } from 'react'
import productApis from '../_Utils/productApis'
import ProductList from './ProductList'
import { ArrowRight } from 'lucide-react'

const ProductSection = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        getLatestProducts_();
    }, [])

    const getLatestProducts_ = () => {
        productApis.getLatestProducts().then(res => {
            setProductList(res.data.data)
        })
    }

    return (
        <div className='px-10 md:px-20 bg-gray-900'>
            <h2 className='font-bold text-[20px] my-3'>Brand New
                <span className='font-normal text-[14px] float-right text-primary flex  items-center cursor-pointer hover:text-teal-600'>
                    View All Collection
                    <ArrowRight className='h-4' />
                </span>
            </h2><ProductList productList={productList} />
        </div>
    );
}

export default ProductSection;
