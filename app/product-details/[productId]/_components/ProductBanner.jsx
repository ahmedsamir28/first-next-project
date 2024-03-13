import React from 'react';
import Image from 'next/image'

const ProductBanner = ({ product }) => {
    return (
        <div className='bg-zinc-100  lg:rounded-l-lg h-96 flex items-center justify-center  w-72 p-2'>
            {product?.attributes?.banner?.data?.attributes?.url ?
                <Image
                    src={product?.attributes?.banner?.data?.attributes?.url}
                    alt='product-details-banner'
                    width={300}
                    height={300}
                    className=''
                /> :
                <div className='w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
            }
        </div>
    );
}

export default ProductBanner;
