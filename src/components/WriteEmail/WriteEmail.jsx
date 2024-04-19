import './WriteEmail.scss'
import { CircleUserRound } from 'lucide-react'
import { EditorTiptap } from './EditorTiptap'
import { useState } from 'react'
import { sendEmail } from './sendEmail';
import { emailID } from './emailID';


export function WriteEmail() {
  
  const [templateParams, setTemplateParams] = useState({
    name: '',
    notes: '',
  })


  return (
    <div className='write-email'>
        <h1 className='write-email__title'>Send message</h1>
        <div className="write-email__contact contact">
          <div className="contact__from">
            <span className='contact__label'>From</span>
            <input className='contact__sender' type="email" placeholder='Enter your email address'
            onChange={(e) => setTemplateParams(prev => {
              return {...prev, name: e.target.value}
            })}
            />
          </div>
          <div className="contact__to">
            <span className='contact__label'>To</span>
            <a href={emailID.MY_EMAIL_ADDRESS} className='contact__receiver'><CircleUserRound /><span>Andrii Yevchenko</span></a>
          </div>
        </div>
        <div className="write-email__mail mail" onWheel={()=> console.log(1)}>
          <EditorTiptap setTemplateParams={setTemplateParams}/>
        </div>
        <div className="write-email__footer footer">
          <div className="footer__buttons buttons">
            <button className='buttons__cancel'>Cancel</button>
            <button className='buttons__send' onClick={() => sendEmail(templateParams)}>Send</button>
          </div>
        </div>
    </div>
  );
}