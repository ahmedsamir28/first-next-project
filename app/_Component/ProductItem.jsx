import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { List } from 'lucide-react'

const ProductItem = ({ product }) => {
    return (
        <Link href={`/product-details/${product?.id}`} className='p-1 bg-white rounded-lg  hover:cursor-pointer'>
            <Image src={product?.attributes?.banner?.data?.attributes?.url}
				alt='banner-card'
				width={400}
				height={350}
				className='rounded-t-lg h-[170px] object-cover'
			/>
            <div className='flex items-center border-2 justify-between p-3 rounded-b-lg bg-gray-50'>
                <div className=''>
                    <h2 className='text-[12px] text-black font-medium line-clamp-1'>{product?.attributes?.title}</h2>
                    <h2 className='text-[10px] text-gray-400 flex  gap-1 items-center'>
						<List className='w-4 h-4' /> {product?.attributes?.category}
                    </h2>
                </div>
                <h2 className='text-black border-2'>{product?.attributes?.price}</h2>
            </div>
        </Link>
    );
}

export default ProductItem;
