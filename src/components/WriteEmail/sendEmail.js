import emailjs from '@emailjs/browser';
import { emailID } from './emailID';


export const sendEmail = (templateParams) => {
    

    const send = (params = templateParams) => {
        emailjs.send(emailID.MY_ID.SERVICE_ID, emailID.MY_ID.TEMPLATE_ID, params, {
          publicKey: emailID.MY_ID.PUBLIC_KEY,
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );
    }

    return send()

}