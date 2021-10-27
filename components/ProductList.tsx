import Product, { IProduct } from "./Product";
import styles from "../styles/ProductList.module.scss"
import { getStaticProps } from "../pages"

interface IproductListProps {
    products: IProduct[]
}

const ProductList = (props: IproductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product key={index} product={product} />)}
        </div >
    )
}

export default ProductList