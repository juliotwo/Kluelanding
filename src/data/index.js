import terms from './terms'
import termsEs from './termsEs'
import privacy from './privacy'
import privacyEs from './privacyEs'
import cookies from './cookies'

export const navData = {
  links: [
    { href: '/about-us', title: 'About Us' },
  ],
  button: { href: '#download-app', title: 'Download App' },
}

export const faqData = {
  title: 'Frequently Questioned Answers',
  data: [
    {
      question: 'What is KLU USA?',
      answer: 'KLU USA is a global Fintech designed specifically for immigrants. With KLU USA you can keep, spend, and share your money all within one simple app. KLU USA is a financial technology company, not a bank. Banking services provided by XXXXX, member FDIC. KLU USA is a financial technology company, not a bank. Banking services provided by XXXXX, member FDIC.'
    },
    {
      question: 'Is KLU USA for immigrants only?',
      answer: 'KLU USA’s features and benefits are specifically designed for immigrants, however all residents of the United States over 18 can sign up as well. We welcome everybody.'
    },
    {
      question: 'Will it affect my credit score?',
      answer: 'No, we do not check your credit score to open an account and being an account holder does not help build your credit score. However, if you set up a direct deposit to your KLU USA account and use the benefits. '
    },
    {
      question: 'Are there really no fees?',
      answer: 'Really, no fees! We don’t charge any of the usual fees for minimum balance, overdraft, maintenance, ATM withdrawal (from 55,000+ Allpoint ®️ ATMs), transfers, service charges, card issues, etc. When you choose KLU USA as your primary bank account and set up direct deposit from your payroll provider, you get even more benefits.'
    },
    {
      question: 'What information do you need to create an account?',
      answer: 'When you sign up, we’ll ask for your phone number, birthday, residential address, and Social Security Number. If you don’t have a Social Security Number, you can provide your Tax Identification Number (TIN).'
    },
    {
      question: 'How long does it take to open an account?',
      answer: 'Signing up usually takes less than 5 minutes it may take longer depending on how quickly we can verify your identity.'
    },
    {
      question: 'Can I use KLU USA outside the United States?',
      answer: 'Yes! you can use the KLU USA debit card and app outside of the U. S. but the account itself is US-based and you must reside in the United States to open an account.'
    }
  ]
}

export const footerData = {
  rightsReserved: '© 2023 Klu USA.',
  links: [
    { href: '/faqs', title: 'FAQs' },
    { href: '/legal', title: 'Legal' },
    { href: '#security', title: 'Security' },
  ],
  icons: [
    { href: '#', icon: '/images/social-ig.svg', name: 'Instagram' },
    { href: '#', icon: '/images/social-fb.svg', name: 'Facebook' },
    { href: '#', icon: '/images/social-tw.svg', name: 'Twitter' },
    { href: '#', icon: '/images/social-in.svg', name: 'LinkedIn' },
  ],
  address: '1350 E Highland St. Southlake TX 76092',
  email: 'contact@klu.us',
  disclaimerTitle: 'Disclaimers',
  disclaimers: 'KLU USA, Inc. is not a bank. Banking services provided by XXXXX, member FDIC. The KLU USA Debit Mastercard® is issued by XXXXX, pursuant to a license from Mastercard International and may be used everywhere Mastercard® debit cards are accepted. Please note: by clicking on some of the links above, you will leave the KLU USA website and be directed to an external website. The privacy policies of the external website may differ from our privacy policies. Please review the privacy policies and security indicators displayed on the external website before providing any personal information. Faster funding claim is based on a comparison of our policy of making funds available upon receipt of Payment instruction versus the typical banking practice of posting funds at settlement. Fraud prevention restrictions may delay availability of funds with or without notice. Early availability of funds requires payor’s support of direct deposit and is subject to the timing of payor’s payment instruction. Please note: We do not accept deposits via wire transfers. We do not accept printed checks. Any printed checks sent to us, or to the issuing bank will be destroyed. Direct Deposit must be made in the Account holder’s name only. THE ONLY FEDERAL PAYMENTS THAT MAY BE DIRECT DEPOSITED TO YOUR ACCOUNT ARE FEDERAL PAYMENTS FOR THE BENEFIT OF THE ACCOUNT HOLDER. If you have questions about this requirement please call Customer Service at the number of the back of your debit card. Direct deposit capability is subject to payor’s support of the feature. Check with your payor to find out when the direct deposit of funds will start. Funds availability is subject to the timing of payor’s funding. 1 Free remittance and no transfer fees for direct deposit clients. Fees apply for customers that did not set up direct deposit into their KLU USA account. 2 In some countries we offer a prepaid KLU USA Mastercard® instead of a full bank account, depending on local regulations. 3 Allpoint® ATM network. Out-of-network cash withdrawal fees apply. 4 Direct deposit account holders are those who receive direct deposits from their employer or benefit provider into their KLU USA  checking account with a cumulative monthly minimum of $1,000. No minimum balance required at any time. 5 Provided by ©Perpay Inc. through a partnership with KLU USA.'
};

export const downloadAppData = {
  title: 'Open your Klu Account today',
  description: 'Download the app and start enjoying the benefits',
  buttons: [
    { href: '#', icon: '/images/app-store.svg', name: 'App Store', titleTop: 'Download on the', titleBottom: 'App Store' },
    { href: '#', icon: '/images/play-store.svg', name: 'Play Store', titleTop: 'Android App on', titleBottom: 'Google Play' },
  ]
}

export const mainLandingData = {
  hero: {
    title: 'Banking Beyond Borders',
    description: 'Send money home in minutes fro free',
    button: { href: '#download-app', title: 'Download App' },
  },
  cardsSection: {
    title: 'A card design for you',
    description: 'With the Klu USA card, your purchases become even more convenient. Gain access to exclusive discounts, special promotions, and a hassle-free shopping experience, along with the option to transfer money to your family members. Discover a new level of convenience with Klu USA!',
    button: { href: '#', title: 'Go premium with metal' }
  },
  join: {
    title: 'Join Klu USA',
    description: 'Open your account in less than 48 hrs'
  },
  benefits: {
    title: 'Benefits',
    features: [
      'Cash deposits in more than 20 thousand establishments in the USA',
      'Transfer money quickly and securely',
      'Transfer money/remittances to Mexico instantly',
      'Regardless of your immigration status, open your Klu account because Klu is for everyone'
    ]
  },
}

export const aboutUsPageData = {
  hero: {
    title: 'We’re a global fintech company that’s making banking more accessible',
    description: ' Few banking services have the power to link people across the globe. We created MOMENTO to connect you with your family and friends near and far from the convenience of your smartphone - for little to no cost.',
    link: { href: '#', title: 'Bank where your best interests matter' },
  },
  cardsSection: {
    title: 'We’re helping you save more and worry less',
    description: 'Klu - usa saves people money through its free banking app and debit card. By taking fees and minimum balances out of the equation, we’re making banking affordable for everyone, everywhere.',
  },
}

export const legalData = {
  tabs: [
    'Terms and conditions',
    'Privacy Policy',
    'Cookies Policy',
    'Terminos y condiciones',
    'Politicas de privacidad',
  ],
  terms,
  privacy,
  cookies,
  termsEs,
  privacyEs,
}

