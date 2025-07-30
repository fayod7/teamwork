import React, { useRef, useState } from 'react'
import Reusable from "../../components/reusable-hero/Reusable";
import Services from "../../components/customer-services/Services";
import { useCart } from '../../store/useCart';
import { Navigate } from 'react-router-dom';
import { api } from '../../api';
const BOT_TOKEN = "8420921383:AAHT2VO0OY87cGz9gKH9ngnTUTNvdoQjyt8"
const CHAT_ID = "-4736369786"

const Checkout = () => {
  const {cart} = useCart()
  if(!cart.length){
    return <Navigate replace to={"/cart"}/>
  }
  const letterCapitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [region, setRegion] = useState("")
  const [street, setStreet] = useState("")
  const [town, setTown] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [addInfo, setAddInfo] = useState("")
  const formRef = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault()
    const user = {
      fname,
      lname,
      companyName,
      region,
      street,
      town,
      zipcode,
      number,
      email,
      addInfo
    }
     console.log(user);
     console.log(cart);
     let text = ""
      text += 'Order %0A %0A'
     text += `Full Name: ${letterCapitalize(user.fname )} ${letterCapitalize(user.lname)} %0A`
     text += `Phone: <b>${user.number}</b> %0A`
     text += `Email: ${user.email} %0A`
     text += `Location: ${user.region} ${user.town} ${user.street} %0A`
     text += `Zip Code: ${user.zipcode} %0A`
     text += `Additional Info: ${user.addInfo} %0A`
     text += `Company Name: ${user.companyName} %0A %0A`
     cart.forEach(item =>{
        text += `Title: <b>${item.title}</b> %0A`
        text += `Quantity: <b>${item.quantity}</b> %0A`
        text += `Price: <b>${item.price}</b> %0A`
     })
     const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
     text += `Total: <b>${totalPrice}</b>`
     api
     .get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`)
  }
  const handleOrder = () =>{
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
   
  }
  return (
    <>
        <Reusable title="Checkout" link="Checkout" />
          <section className='bg-white w-full py-[120px]'>
            <div className="container grid grid-cols-2 gap-[22px] max-[800px]:grid-cols-1">
              <form ref={formRef} onSubmit={handleSubmit} className='p-[30px] gap-5 flex flex-col'>
                <h2 className='text-[36px]'>Blinding details</h2>
                  <div className="flex justify-between items-center gap-3 max-[1070px]:flex-col max-[1070px]:items-baseline">
                    <label className='flex flex-col gap-2' htmlFor="fname">
                      First name
                      <input value={fname} onChange={e=> setFname(e.target.value) } className='py-[10px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='fname' type="text" placeholder='Family name' />
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="lname">
                      Last name
                      <input value={lname} onChange={e=> setLname(e.target.value)} className='py-[10px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='lname' type="text" placeholder='Last name' />
                    </label>
                  </div>
                   <label className='flex flex-col gap-2' htmlFor="companyName">
                      Company name(Optional)
                      <input value={companyName} onChange={e=> setCompanyName(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='companyName' type="text" placeholder='Company name' />
                    </label>
                   <label className='flex flex-col gap-2' htmlFor="region">
                      Country / Region
                    <select value={region} onChange={e=> setRegion(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]' name="" id="region">
                  <option value="tashkent">Tashkent</option>
                  <option value="fergana">Fergana</option>
                  <option value="andijan">Andijan</option>
                  <option value="namangan">Namangan</option>
                  <option value="xorazm">Xorazm</option>
                  <option value="navai">Navai</option>
                  <option value="samarkand">Samarkand</option>
                  <option value="jizzakh">Jizzakh</option>
                  <option value="Bukhara">Bukhara</option>
                  <option value="kashkadarya">Kashkadarya</option>
                  <option value="surkhankadarya">Surkhankadarya</option>
                  <option value="sirdarya">Sirdarya</option>
                  <option value="karakalpakistan">Karakalpakistan</option>
                </select>
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="streetAddress">
                      Street address
                      <input value={street} onChange={e=> setStreet(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='streetAddress' type="text" placeholder='Street address' />
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="town">
                     Town / City
                      <input value={town} onChange={e=> setTown(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='town' type="text" placeholder='Town / City' />
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="zipCode">
                     ZIP code
                      <input value={zipcode} onChange={e=> setZipcode(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='zipCode' type="text" placeholder='ZIP code' />
                    </label>
                    <label value={number} onChange={e=> setNumber(e.target.value)} className='flex flex-col gap-2' htmlFor="phoneNumber">
                     Phone number
                      <input className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='phoneNumber' type="number" placeholder='Phone number' />
                    </label>
                    <label className='flex flex-col gap-2' htmlFor="emailAddress">
                     Email address
                      <input value={email} onChange={e=> setEmail(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='emailAddress' type="email" placeholder='Email address' />
                    </label>
                      <input value={addInfo} onChange={e => setAddInfo(e.target.value)} className='py-[15px] indent-3 focus:border-blue-500 border-[1px] border-slate-300 outline-none shadow-md text-[18px] rounded-[5px]'id='emailAddress' type="text" placeholder='Additional information' />
              </form>
              <div className='flex flex-col px-[30px] py-[20px]'>
                <div className='flex justify-between items-center border-b border-[#D9D9D9] pb-[40px]'>
                      <div className='flex flex-col gap-[15px]'>
                    <h3 className='text-[24px] font-medium'>Product</h3>
                    {cart.map(item => (
                     <p key={item.id}>
                     <span className="text-[#9F9F9F]">{item.title}</span> x {item.quantity}
                      </p>
                     ))}

                    <p>Subtotal</p>
                    <p>Total</p>
                  </div>
                  <div className='flex flex-col gap-[15px]'>
                    <h3 className='text-[24px] font-medium'>
                     Rs {cart?.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                    </h3>
                      <p>Rs. {
                        cart?.map(item=>(
                          <span key={item.id}>{(item.price).toFixed(2)}</span>
                        ))
                        }</p>
                      <p>Rs. {
                        cart?.map(item =>(
                           <span> {(item.price * item.quantity).toFixed(2)}</span>
                        ))
                        }</p>
                      <h2 className='text-[24px] text-[#B88E2F] font-bold'>Rs. 
                        {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                      </h2>
                  </div>
                </div>
                <div className='flex flex-col py-5'>
                  <div className='flex gap-1'>
                    <input name="paymentMethod" value='directBankTransfer' id='directBankTransfer1' type="radio" />
                  <label htmlFor="directBankTransfer1">Direct Bank Transfer</label>
                  </div>
                  <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div className='flex flex-col py-5'>
                  <div className='flex gap-1'>
                    <input name="paymentMethod" value='directBankTransfer' id='directBankTransfer' type="radio" />
                  <label htmlFor="directBankTransfer">Direct Bank Transfer</label>
                  </div>
                  <div className='flex gap-1'>
                    <input name="paymentMethod" value="cashOnDelivery" id='cashOnDelivery' type="radio" />
                  <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                  </div>
                </div>
                <p className='font-light'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-medium'>privacy policy</span>.</p>
                <div className='flex justify-center'>
                  <button onClick={handleOrder} className='py-4 px-[100px] border rounded-[15px] mt-5 duration-200 hover:text-white hover:bg-black hover:cursor-pointer'>Place order</button>
                </div>
              </div>
            </div>
          </section>
         <Services />
    </>
  )
}

export default React.memo(Checkout)