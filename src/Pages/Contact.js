import React from 'react'
import BannerImage from "../assets/2blackbean.jpg"

function Contact() {
  return (
    <div className='contact' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='leftSide'></div>
        <div className='rightSide'></div>
        <h1>Bizimle iletişime geçin</h1>
        <form id='contact-form'>
            <label htmlFor=''>İsim Soyisim</label>
            <input placeholder='Lütfen isim ve soyisminizi giriniz'></input>
            <label htmlFor='email'>Email</label>
            <input name='mail' placeholder='Lütfen Email adresinizi girin'type='email' ></input>
            <label htmlFor='megssage' >Görüş Bildir</label>
            <textarea placeholder='Mesajınızı buraya yazabilirsiniz'></textarea>
            <button type='submit'>Gönder</button>
    

        </form>
    </div>
  )
}

export default Contact