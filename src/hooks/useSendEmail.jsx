import emailjs from '@emailjs/browser';
import { emailID } from '../components/WriteEmail/emailID';
import { useState } from 'react';


export const useSendEmail = () => {
    
    const [result, setResult] = useState()

    const send = (params) => {
        emailjs.send(emailID.MY_ID.SERVICE_ID, emailID.MY_ID.TEMPLATE_ID, params, {
          publicKey: emailID.MY_ID.PUBLIC_KEY,
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setResult(<div className='send-result'>Sent!</div>)
            setTimeout(() => setResult(), 5000);
          },
          (error) => {
            console.log('FAILED...', error);
            setResult(<div className='send-result send-error'>Error!</div>)
          },
        );
    }

    return { send, result }

}