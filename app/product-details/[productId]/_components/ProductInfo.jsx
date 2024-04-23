'use client'
import React, { useContext } from 'react'
import { ShoppingCart, BadgeCheck, AlertOctagon } from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_Utils/CartApis'
import { CartContext } from '../../../_context/CartContext'

const ProductInfo = ({ product }) => {
	const { user } = useUser();
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext)

	const handelAddToCart = () => {  
		if (!user) {
			router.push('/sign-in')
		} else {
			// logic to add to cart
			const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					products: [product?.id]
				}
			}

			CartApis.addToCart(data).then(res=>{

				setCart(oldCart => [
					...oldCart,
					{
						id: res?.data?.data?.id,
						product
					}
				])

			}).catch(error=>{

			})

		}
	}

    return (
        <div>
			{product?.id ?
				<div className=' h-96 w-8/12 flex flex-col justify-center gap-4 items-start '>
					<h2 className='text-[30px]  capitalize '>{product?.attributes?.title}</h2>
					<h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
					<h2 className='text-[11px] mt-2'>{product?.attributes?.description }</h2>
					<h2 className='text-[24px] text-primary mt-2'>$ {product?.attributes?.price}</h2>
                    <button onClick={()=>handelAddToCart()} className='flex  gap-2 p-2 text-white rounded-lg bg-primary border-2 border-teal-600 bg-teal-600 hover:bg-gray-900'><ShoppingCart /> Add To Cart</button>
				</div>
				: <SkeletonProductInfo />
			}

		</div>
    );
}

export default ProductInfo;
