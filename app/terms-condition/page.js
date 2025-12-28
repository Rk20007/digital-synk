import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Welcome to <strong>Digital Synk</strong>! These terms and conditions outline the rules and regulations for the use of https://digitalsynk.com's Website, located at <strong>https://digitalsynk.com</strong>.
        </p>
        <p className="mb-4">
          By accessing this website we assume you accept these terms and conditions. Do not continue to use https://digitalsynk.com if you do not agree to take all of the terms and conditions stated on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-4">
          We employ the use of cookies. By accessing https://digitalsynk.com, you agreed to use cookies in agreement with the https://digitalsynk.com's Privacy Policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">License</h2>
        <p className="mb-4">
          Unless otherwise stated, https://digitalsynk.com and/or its licensors own the intellectual property rights for all material on https://digitalsynk.com. All intellectual property rights are reserved. You may access this from https://digitalsynk.com/ for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p className="mb-4">
          You must not:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Republish material from https://digitalsynk.com</li>
          <li>Sell, rent or sub-license material from https://digitalsynk.com</li>
          <li>Reproduce, duplicate or copy material from https://digitalsynk.com</li>
          <li>Redistribute content from https://digitalsynk.com</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hyperlinking to our Content</h2>
        <p className="mb-4">
          The following organizations may link to our Website without prior written approval:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content Liability</h2>
        <p className="mb-4">
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reservation of Rights</h2>
        <p className="mb-4">
          We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
      </section>
    </div>
  );
}