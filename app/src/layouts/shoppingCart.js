import React from "react"

const EXAMPLE_DATA = [
    {
        id: 1,
        photo: "http://placekitten.com/g/280/169",
        title: "A Kitten Tour of New Zealand",
        shippingDate: new Date(2020, 3, 10),
        returnDate: new Date(2020, 5, 10),
        quantity: 1,
        price: 15
    }
]

export default function ShoppingCart() {
    /*
        Design:
        https://www.figma.com/proto/IQSLstsDcsIhljMamKyJnJ/TherapyBox?node-id=994%3A81&scaling=min-zoom

        1. Change Shipping Date should be in there, but not yet functional.  We will
        transfer in, and make changes to the state in the redux store, but for now 
        just use the dummy data to populate the components.

        2. Remove as well should be non-functional, the Shopping Cart will have its 
        own reducer and portion of the redux store and we'll be able to modify or
        delete then.

        3. Please include the voucher/coupon section with Button from @material-ui/core,
        but also inactive.  This seciton will be fleshed out further later.

    */
   
    console.log(EXAMPLE_DATA)

    return(
        <div>
            Shopping Cart
        </div>
    )
}