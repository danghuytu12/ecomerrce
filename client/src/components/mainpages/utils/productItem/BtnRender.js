import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'
import Button from '@mui/material/Button';

function BtnRender({ product, deleteProduct }) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart


    return (
        <div className="row_btn">
            {
                isAdmin ?
                    <>
                        {/* <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link> */}
                        <Button variant="outlined" color="error" style={{ width: "89px" }}
                            onClick={() => deleteProduct(product._id, product.images.public_id)}
                        >
                            Delete
                        </Button>
                        <Link id="btn_view" to={`/edit_product/${product._id}`}>
                            Edit
                        </Link>
                    </>
                    : <>
                        {/* <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                            Buy
                        </Link> */}
                        <Button variant="outlined" color="error" style={{ width: "89px" }}
                            onClick={() => addCart(product)}
                        >
                            Buy
                        </Button>
                        <Link id="btn_view" to={`/detail/${product._id}`}>
                            View
                        </Link>
                    </>
            }

        </div>
    )
}

export default BtnRender
