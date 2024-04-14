import './WriteEmail.scss'
import { CircleUserRound } from 'lucide-react'
import { EditorTiptap } from './EditorTiptap';


export function WriteEmail() {

  return (
    <div className='write-email'>
      {/* form */}
      <h1 className='write-email__title'>Send message</h1>
      <div className="write-email__contact contact">
        <div className="contact__from">
          <span className='contact__label'>From</span>
          <input className='contact__sender' type="email" placeholder='Enter your email address'/>
        </div>
        <div className="contact__to">
          <span className='contact__label'>To</span>
          <a href="and.yevchenko@gmail.com" className='contact__receiver'><CircleUserRound /><span>Andrii Yevchenko</span></a>
        </div>
      </div>
      <div className="write-email__mail mail">
        <EditorTiptap />
      </div>
      <div className="write-email__footer footer">
        <div className="footer__buttons buttons">
          <button className='buttons__cancel'>Cancel</button>
          <button className='buttons__send'>Send</button>
        </div>
      </div>
    </div>
  );
}