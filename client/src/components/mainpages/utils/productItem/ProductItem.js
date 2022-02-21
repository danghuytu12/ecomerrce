import React from 'react'
import BtnRender from './BtnRender'
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                    onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <Tooltip
                    placement='bottom-start'
                    title={(
                        <span className='customToolTipM'>
                            {product.title}
                        </span>
                    )}
                >
                    <h2 className="title" style={{textAlign:'center'}}>
                        {product.title}
                    </h2>
                </Tooltip>
                {/* <h2 title={product.title}>{product.title}</h2> */}
                <Tooltip title={(
                    <span className='customToolTipM'>Giá sản phẩm: $ {product.price}</span>
                )}>
                    <span>Giá sản phẩm: $ {product.price}</span>
                </Tooltip>
                {/* <span>${product.price}</span> */}
                <Tooltip title={(
                    <p className='customToolTipM'>{product.description}</p>
                )}>
                    <p className='webkit--one-line'>{product.description}</p>
                </Tooltip>
            </div>


            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
