import './MailSender.scss';
import ButtonTemplate from '../../ui-components/ButtonTemplate/ButtonTemplate';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SnackBar from '../../ui-components/SnackBar/SnackBar';

const SERVICE_ID = 'service_afu12kv';
const TEMPLATE_ID = 'template_anvvinn';
const PUBLIC_KEY = 'JLjd2FkS-iPbgmfNr';

const MailSender: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackBarType, setSnackBarType] = useState<'success' | 'error' | null>(
    null
  );
  const [snackBarText, setSnackBarText] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null || sending) return;

    setSending(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      setSnackBarType('success');
      setSnackBarText('Email enviado correctamente!');
      form.current.reset();
    } catch (error) {
      // Narrowed rather than annotated: TypeScript types a catch binding
      // on its own, and widening it by hand would defeat strict mode.
      const detail = error instanceof Error ? error.message : String(error);
      console.error('Email send failed:', detail);
      setSnackBarType('error');
      setSnackBarText('Error al enviar el email!');
    } finally {
      setSending(false);
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
          {/* Every field carries a real label. A placeholder disappears
              the moment the user types and is not a reliable accessible
              name. */}
          <div className='emailSender-field'>
            <label className='emailSender-label' htmlFor='user_name'>
              Nombre completo
            </label>
            <input
              id='user_name'
              className='emailSender-form-input'
              type='text'
              placeholder='Tu nombre'
              name='user_name'
              autoComplete='name'
              required
            />
          </div>

          <div className='emailSender-field'>
            <label className='emailSender-label' htmlFor='user_email'>
              Email
            </label>
            <input
              id='user_email'
              className='emailSender-form-input'
              type='email'
              placeholder='tu@email.com'
              name='user_email'
              autoComplete='email'
              required
            />
          </div>

          <div className='emailSender-field'>
            <label className='emailSender-label' htmlFor='subject'>
              Asunto
            </label>
            <input
              id='subject'
              className='emailSender-form-input'
              type='text'
              placeholder='Sobre qué querés hablar'
              name='subject'
              required
            />
          </div>

          <div className='emailSender-field'>
            <label className='emailSender-label' htmlFor='message'>
              Mensaje
            </label>
            <textarea
              id='message'
              className='emailSender-form-textarea'
              name='message'
              placeholder='Contame los detalles...'
              rows={6}
              required
            ></textarea>
          </div>

          <ButtonTemplate
            name={sending ? 'Enviando...' : 'Enviar mensaje'}
            type='submit'
            disabled={sending}
          />
        </form>
      </div>
      {showSnackbar && snackBarType && (
        <SnackBar text={snackBarText} severity={snackBarType} />
      )}
    </>
  );
};

export default MailSender;
