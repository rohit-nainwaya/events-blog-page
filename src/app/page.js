// src/app/page.js
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  // Array of giveaway links with labels
  const giveawayLinks = [
    { label: 'Get Color', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Get Foodie', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Get Disco', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Get Dosti', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Get Trendy', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Get Twinkle', url: 'https://gpay.app.goo.gl/ALs8rs' },
    { label: 'Special Offer', url: 'https://g.co/payinvite/b4f36m' },
  ];

  // Array of gift links with labels
  const giftLinks = [
    { label: 'Gift Color', url: 'https://gpay.app.goo.gl/m1yzYX' },
    { label: 'Gift Foodie', url: 'https://gpay.app.goo.gl/xFr5nW' },
    { label: 'Gift Disco', url: 'https://gpay.app.goo.gl/TBFpWW' },
    { label: 'Gift Dosti', url: 'https://gpay.app.goo.gl/eSKDtJ' },
    { label: 'Gift Trendy', url: 'https://gpay.app.goo.gl/phkHxf' },
    { label: 'Gift Twinkle', url: 'https://gpay.app.goo.gl/dgbwpq' },
    { label: 'Special Offer', url: 'https://g.co/payinvite/b4f36m' },
  ];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to the Google Pay Laddoo Giveaway Event!</h1>
      <p className={styles.text}>
        Join the fun and collect as many ladoos as possible. Share them with friends and earn rewards! Click on the links below to gift your extra ladoos.
      </p>

      <section>
        <h2 className={styles.subtitle}>Google Pay Laddoo Giveaway</h2>
        <p className={styles.text}>
          Join the Google Pay Laddoo Giveaway to earn rewards up to ₹1001! Participate by completing various tasks.
        </p>
        
        <div className={styles.giveawayLinks}>
          {giveawayLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.giveawayLink}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <h2 className={styles.subtitle}>How to Participate</h2>
        <ul className={styles.text}>
          <li>Pay at a merchant with a minimum of ₹100.</li>
          <li>Recharge or pay a bill of at least ₹100.</li>
          <li>Purchase a gift card worth ₹200 or more.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.subtitle}>Gift Extra Laddoos</h2>
        <p className={styles.text}>
          Share extra ladoos with friends to help them win rewards!
        </p>
        <div className={styles.laddooClaimLinks}>
          {giftLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ladduLink}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.subtitle}>More Events</h2>
        <p className={styles.text}>
          Explore other seasonal events and giveaways happening now!
        </p>
      </section>

      {/* Google AdSense placeholder */}
      <div className={styles.adContainer}>
        {/* Replace this paragraph with your AdSense code */}
        <p>Ad space for Google AdSense</p>
      </div>

      <section className={styles.rulesSection}>
        <h2 className={styles.subtitle}>Camping Rules</h2>
        <ul className={styles.rulesList}>
          <li><strong>Avoid Multiple Entries:</strong> Only one entry per person is allowed per event.</li>
          <li><strong>Stay Within Campaign Period:</strong> Participation is valid only during the specified period.</li>
          <li><strong>Fair Play Required:</strong> Unfair practices will result in disqualification.</li>
          <li><strong>Accurate Information:</strong> Provide correct and verifiable information to avoid disqualification.</li>
          <li><strong>Platform Guidelines:</strong> Adhere to Google Pay's platform rules to avoid penalties.</li>
        </ul>
      </section>

      <section className={styles.termsSection}>
        <h2 className={styles.subtitle}>Terms and Conditions</h2>
        <p className={styles.text}>
          By participating in the Google Pay Laddoo Giveaway, you agree to abide by all rules and regulations set forth by Google Pay and the event organizers. Failure to comply with these terms may result in disqualification from the event and forfeiture of any rewards.
        </p>
      </section>
    </main>
  );
}