"use client";
import BreadCrumb from "@/app/_Component/BreadCrumb";
import productApis from "@/app/_Utils/productApis";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "@/app/_Component/ProductList";


function ProductDetails({ params }) {
    const path = usePathname();
    const [productDetails, setProductDetails] = useState({});
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductById_()
    }, [params?.productId])

    const getProductById_ = () => {
        productApis.getProductById(params?.productId).then((res) => {

            setProductDetails(res.data.data)
            getProductListByCategory(res.data.data);
        })
    }

    const getProductListByCategory = (product) => {
        productApis.getProductsByCategory(product?.attributes.category
            ).then((res) => {
            setProductList(res?.data?.data);
        }
        );
    };


    return (
        <div className="px-10 py-8 md:px-28">
            <BreadCrumb path={path} />
            <div className="rounded-lg  lg:border-2 mt-10 flex justify-center items-center  flex-col lg:flex-row  gap-10 w-80 lg:w-9/12 m-auto">
                <ProductBanner product={productDetails} />
                <ProductInfo product={productDetails} />
            </div>
            <div>
                <h2 className="mt-24 mb-4 text-xl">Similar Products</h2>
                <ProductList productList={productList} />
            </div>
        </div>
    );
}

export default ProductDetails;
