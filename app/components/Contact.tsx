'use client';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Link from 'next/link';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formFieldsFilled, setFormFieldsFilled] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailMatchError, setEmailMatchError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    const formElements = form.current?.elements;
    const userEmail = (
      formElements?.namedItem('user_email') as HTMLInputElement
    )?.value;
    const userEmailConfirm = (
      formElements?.namedItem('user_email_confirm') as HTMLInputElement
    )?.value;

    setEmailError('');
    setEmailMatchError('');

    if (userEmail && !validateEmail(userEmail)) {
      setEmailError('Please enter a valid email address.');
    }

    if (userEmail && userEmailConfirm && userEmail !== userEmailConfirm) {
      setEmailMatchError('Emails do not match.');
    }
  };

  const checkFormFields = () => {
    const formElements = form.current?.elements;
    const userName = (formElements?.namedItem('user_name') as HTMLInputElement)
      ?.value;
    const userEmail = (
      formElements?.namedItem('user_email') as HTMLInputElement
    )?.value;
    const userMessage = (
      formElements?.namedItem('user_message') as HTMLTextAreaElement
    )?.value;

    setFormFieldsFilled(Boolean(userName && userEmail && userMessage));
    handleValidation();
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.sendForm(
        'kazvee_portfolio_contact',
        'kazvee_contact_form',
        form.current!,
        'dpI3cxrFCD-j5WNSK',
      );

      if (response.status === 200) {
        setStatus('Message sent successfully! ✅');
        setIsFormSubmitted(true);
        setShowThankYou(true);
        form.current?.reset();
        setCaptchaToken(null);
      } else {
        console.error('Error response:', response.text);
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="p-4 md:pt-32" id="contact">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        Contact Me
      </h2>
      <p className="text-base text-pink-500 text-center md:text-3xl my-4">
        The best way to get in touch with me is via{' '}
        <Link
          className="text-blue-600 font-bold hover:text-blue-700"
          href="https://www.linkedin.com/in/kazvee/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          LinkedIn
        </Link>
      </p>

      <p className="text-base text-center lg:text-xl mb-4">
        I&apos;d be happy to connect and chat about exciting projects or new
        challenges. Please don&apos;t hesitate to reach out! 🙂{' '}
      </p>

      <div className="flex flex-col justify-center items-center text-white my-2">
        {!isFormSubmitted && (
          <>
            <p className="text-base text-center lg:text-xl mb-4">
              Alternatively, send a message using the form below:
            </p>

            <form
              ref={form}
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-4"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 bg-[#170E1B] text-white rounded-md"
                required
                disabled={isFormSubmitted}
                onChange={checkFormFields}
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email Address"
                className="w-full p-3 bg-[#170E1B] text-white rounded-md"
                required
                disabled={isFormSubmitted}
                onChange={checkFormFields}
              />

              {emailError && (
                <p className="text-pink-500 text-sm">{emailError}</p>
              )}

              <input
                type="email"
                name="user_email_confirm"
                placeholder="Confirm Your Email Address"
                className="w-full p-3 bg-[#170E1B] text-white rounded-md"
                required
                disabled={isFormSubmitted}
                onChange={checkFormFields}
              />

              {emailMatchError && (
                <p className="text-pink-500 text-sm">{emailMatchError}</p>
              )}

              <textarea
                name="user_message"
                placeholder="Your Message"
                className="w-full p-3 bg-[#170E1B] text-white rounded-md"
                rows={4}
                required
                disabled={isFormSubmitted}
                onChange={checkFormFields}
              />

              {formFieldsFilled && !isFormSubmitted && (
                <div className="flex justify-center items-center">
                  <HCaptcha
                    sitekey="1738c452-2990-4a52-a5f0-b8eeed8adcfa"
                    onVerify={handleCaptchaVerify}
                  />
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={
                    !captchaToken ||
                    isFormSubmitted ||
                    isSubmitting ||
                    !formFieldsFilled ||
                    !!emailError ||
                    !!emailMatchError
                  }
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
                >
                  {isSubmitting
                    ? 'Sending...'
                    : isFormSubmitted
                      ? 'Message Sent'
                      : 'Send Message'}
                </button>
              </div>
            </form>
          </>
        )}

        {status && isFormSubmitted && (
          <div
            role="alert"
            aria-live="polite"
            className={`mt-4 text-center text-xl ${
              status === 'Message sent successfully! ✅'
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {status}
          </div>
        )}

        {showThankYou && (
          <div className="mt-4 text-center text-xl text-pink-500">
            Thank you for your feedback. If a response is required, I will get
            back to you as soon as possible.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
