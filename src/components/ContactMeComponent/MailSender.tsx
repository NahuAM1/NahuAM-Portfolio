import './MailSender.scss';
import ButtonTemplate from '../../ui-components/ButtonTemplate/ButtonTemplate';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SnackBar from '../../ui-components/SnackBar/SnackBar';

const MailSender: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackBarType, setSnackBarType] = useState<'success' | 'error' | null>(
    null
  );
  const [snackBarText, setSnackBarText] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;

    try {
      const result = await emailjs.sendForm(
        'service_afu12kv',
        'template_anvvinn',
        form.current,
        {
          publicKey: 'JLjd2FkS-iPbgmfNr',
        }
      );
      console.log('SUCCESS!', result.text);
      setSnackBarType('success');
      setSnackBarText('Email enviado correctamente!');
    } catch (error: any) {
      console.log('FAILED...', error.text);
      setSnackBarType('error');
      setSnackBarText('Error al enviar el email!');
    }

    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 5000);
  };

  return (
    <>
      <div className='emailSender-container'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='emailSender-form-control'
        >
          <input
            className='emailSender-form-input'
            type='text'
            placeholder='Nombre Completo'
            name='user_name'
            required
          />
          <input
            className='emailSender-form-input'
            type='email'
            placeholder='Email'
            name='user_email'
            required
          />
          <input
            className='emailSender-form-input'
            type='text'
            placeholder='Asunto'
            name='subject'
            required
          />
          <textarea
            className='emailSender-form-textarea'
            name='message'
            cols={30}
            rows={10}
            required
          ></textarea>
          <ButtonTemplate name='Enviar' />
        </form>
      </div>
      {showSnackbar && snackBarType && (
        <SnackBar text={snackBarText} severity={snackBarType} />
      )}
    </>
  );
};

export default MailSender;
