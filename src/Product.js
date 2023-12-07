function Product (props) {
    return (
        <div className="product" >
            <img src={props.img_url} />
            <h2> {props.name}</h2>
            <h2> {props.price}</h2>
        </div>
    )
}

export default Product;