import Product from "./Product";

function Products (){


    let product_data = [
        {id:1, name:"samsung s10", price:"50000", img_url:"https://www.refurbished.store/cache/images/samsung-galaxy-s10-wit-frontandback_600x600_BGresize_16777215-tj.png"},
        {id:2, name:"samsung s22", price:"90000", img_url:"https://m.media-amazon.com/images/I/41ntGH88Z2L._SX300_SY300_QL70_FMwebp_.jpg"},
        {id:3, name:"samsung s23", price:"120000", img_url:"https://m.media-amazon.com/images/I/41xHTtB5juL._SX300_SY300_QL70_FMwebp_.jpg"}
    ]

    return(
        <div className="productes">

            {
                product_data.map((data)=>{
                    return(
                        <div key={data.id}>
                        <Product name={data.name} price={data.price} img_url={data.img_url} ></Product>
                        </div>
                    )
                })
            }


         </div>
    )}

export default Products;