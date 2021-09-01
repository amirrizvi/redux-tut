import React from 'react'

function Home(){
    return(
        <div>
             <div className="add-to-cart">
                <img src="https://thumbs.dreamstime.com/b/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg" />
            </div>
            <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://images.macrumors.com/article-new/2017/09/iphonexdesign-800x669.jpg" />
            </div>
            <div className="text-wrapper item">
                <span>I-Phone</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                <button>Add to cart</button>
            </div>
        </div>
        </div>
    )
}

export default Home;