import Link from 'next/link';
import React from 'react';
import { createPortal } from 'react-dom';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleOverlayClick}>
            <div
                className="relative bg-[#482B56] rounded-lg w-full max-w-[80vw] max-h-[80vh] p-4 flex flex-col"
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-policy-title"
                aria-describedby="privacy-policy-content">
                <div className="flex justify-between items-center mb-4">
                    <h2
                        id="privacy-policy-title"
                        className="text-xl font-semibold">
                        Privacy Policy
                    </h2>
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center w-10 h-10 border rounded-full border-purple-500 bg-pink-200 hover:border-pink-500 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        aria-label="Close modal">
                        <span className="text-xl">✖️</span>
                    </button>
                </div>
                <div
                    id="privacy-policy-content"
                    className="overflow-y-auto max-h-[60vh] p-4 text-sm text-white border border-pink-500 rounded-lg">
                    <p className='text-xl font-semibold mb-2'>
                        hCaptcha
                    </p>
                    <p>
                        We use the hCaptcha security service (hereinafter &quot;hCaptcha&quot;) on our website. This service is provided by Intuition Machines, Inc., a Delaware US Corporation (&quot;IMI&quot;). hCaptcha is used to check whether user actions on our online service (such as submitting a login or contact form) meet our security requirements. To do this, hCaptcha analyzes the behavior of the website or mobile app visitor based on various characteristics. This analysis starts automatically as soon as the website or mobile app visitor enters a part of the website or app with hCaptcha enabled. For the analysis, hCaptcha evaluates various information (e.g. IP address, how long the visitor has been on the website or app, or mouse movements made by the user). The data collected during the analysis will be forwarded to IMI. hCaptcha analysis in the &quot;invisible mode&quot; may take place completely in the background. Website or app visitors are not advised that such an analysis is taking place if the user is not shown a challenge. Data processing is based on Art. 6(1)(b) of the GDPR: the processing of personal data is necessary for the performance of a contract to which the website visitor is party (for example, the website terms) or in order to take steps at the request of the website visitor prior to entering into a contract. Our online service (including our website, mobile apps, and any other apps or other forms of access offered by us) needs to ensure that it is interacting with a human, not a bot, and that activities performed by the user are not related to fraud or abuse. In addition, processing may also be based on Art. 6(1)(f) of the GDPR: our online service has a legitimate interest in protecting the service from abusive automated crawling, spam, and other forms of abuse that can harm our service or other users of our service. IMI acts as a &quot;data processor&quot; acting on behalf of its customers as defined under the GDPR, and a &quot;service provider&quot; for the purposes of the California Consumer Privacy Act (CCPA). For more information about hCaptcha&apos;s privacy policy and terms of use, please visit the following links:
                        <Link
                            href="https://www.hcaptcha.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 ml-1">
                            hCaptcha Privacy Policy
                        </Link> and
                        <Link
                            href="https://www.hcaptcha.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-600 ml-1">
                            hCaptcha Terms of Use
                        </Link>.
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default PrivacyPolicyModal;