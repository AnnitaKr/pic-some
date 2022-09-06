import React, {useState, useContext} from "react"
import {Context} from "../Context"

export default function Form() {
    const {emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Send")
    const [justPlacedOrder, setJustPlacedOrder] = useState(false)

    const [formData, setFormData] = useState(
        {firstName: "", lastName: "", email: "", mobile: "", address: "", terms: false}
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function placeOrder(event) { 
        event.preventDefault()
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            setJustPlacedOrder(true)
            emptyCart()
        }, 3000)
    }
    
    return (
        <div>

        {
            justPlacedOrder ? <h2 className="thank-you-message">
            Thank you for your purchase! 
            It is on its way to you.</h2> : 
       
        <form className="payment-form">
        <h2 className="desc">Fill out this form to get you favorite items sent to you.</h2>
            <input 
                id="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                id="mobile"
                type="text"
                placeholder="Mobile"
                onChange={handleChange}
                name="mobile"
                value={formData.mobile}
            />
            <input
                id="address"
                type="text"
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formData.address}
        />
            
            <label htmlFor="terms"><input
                id="terms"
                type="checkbox"
                onChange={handleChange}
                name="terms"
                checked={formData.terms}
            />I agree to the terms and conditions.</label>

            <button className="form-btn" onClick={placeOrder}>{buttonText}</button>
            <p className="small-text">You will pay upon delivery.</p>
        </form>
         }

        </div>
    )
}
