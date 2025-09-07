import React from "react";
import style from './Contact.module.css';
const Contact=()=>{
    return(

        <section className={style.Component}>
        <div className="container">
          <div className={style.contactBlock}>
                <h2 className="txt-cntr space">Get in Touch with <span>Zcart</span></h2>
                <div className={style.contactitem}>
                 <div>
                    <h3 className="mb-3">Contact Info</h3>
                    <p className="mb-3">Have a question or need support? We're here to
                     help you with your electronics journey.</p>
                    <ul>
                        <li className="sm"><strong>📍 Address:</strong>123 IT Park, Chandigarh, India</li>
                        <li className="sm"><strong>📧 Email:</strong>support@zcart.com</li>
                        <li className="sm"><strong>📞 Phone:</strong>+91</li>
                    </ul>
                 </div>
                 <div>
                    <form className="form-group">
                        <label className={style.name}>Your Name</label><br/>
                        <input className={style.input} type='text'name='name'></input><br/>
                        <label className={style.name}>Email Address</label><br/>
                        <input className={style.input} type='text'name='name'></input><br/>
                        <label className={style.name}>Your Message</label><br/>
                        <textarea rows='4' placeholder="type your message..."className={style.text} /><br/>
                        <button type="button" className="btn secondary">Send Message 🚀</button>
                     </form>
                 </div>
                </div>
            
          </div>
        </div>
        </section>
    )
}
export default Contact;