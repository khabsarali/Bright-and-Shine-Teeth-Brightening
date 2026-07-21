export interface Review {
  /** Reviewer display name, exactly as left on Google. */
  name: string;
  /** Review text, verbatim (only obvious spacing/punctuation tidied). */
  text: string;
  /** Date or relative date, as shown on the Google listing. */
  date: string;
  /**
   * Star rating. These are 5-star Google reviews; `rating` drives the star
   * display and should be verified against the live Google listing before
   * launch. No ratings were invented for reviews that lacked text — those
   * reviewers are omitted entirely (see note below).
   */
  rating: number;
}

/**
 * Real customer reviews from the business's Google listing. Wording is
 * preserved; only obvious spacing/punctuation was corrected.
 *
 * Intentionally omitted (no review text was provided, and no rating is
 * confirmed): MUKESHIMANA Beatha, Hina Ahmed, High Autos, Haroon Shahid, Zee.
 */
export const reviews: Review[] = [
  {
    name: "HEALING STRENGTH OF NATURE",
    text: "I came Bright and Shine Teeth Whitening to get my teeth whitened. My experience was great, and I loved the holiday promo with the complimentary kit. I also bought one kit for my sister. Thank you, Kiran, for the amazing result and beautiful home-care kit.",
    date: "Edited 2 years ago",
    rating: 5,
  },
  {
    name: "Shanzay LLC",
    text: "I am very happy with this product. Works well at a great price. I would definitely buy it again. Highly recommend 👍🏻",
    date: "2 years ago",
    rating: 5,
  },
  {
    name: "Sean Bowes",
    text: "I got my teeth whitened yesterday with Kiran! She was extremely professional and knowledgeable about the products she used. Such a nice lady too, very friendly! Good price compared to what I've paid in the past! I'll definitely be going back once the coffee and vape make my teeth yellow again! 😁",
    date: "3 years ago",
    rating: 5,
  },
  {
    name: "Jaanvi Bakshi",
    text: "Best place to get whitening. Love the attention to detail. Recommended!!!",
    date: "4 weeks ago",
    rating: 5,
  },
  {
    name: "Kamla Gupta",
    text: "If you care for your oral health and smile, this is the place to visit. Everything from A–Z was conducted professionally. Kiran makes every effort to make you comfortable during the whole process. I was very pleased with the results.",
    date: "3 years ago",
    rating: 5,
  },
  {
    name: "Sabeen Rafat",
    text: "Best teeth whitening experience! Kiran is excellent in her services. She is very professional, kind, and friendly. Her prices are very reasonable and her results are amazing.",
    date: "3 years ago",
    rating: 5,
  },
  {
    name: "Preetha Rajan",
    text: "This place is great :) Kiran was so sweet, and everything was set up pretty professionally.",
    date: "2 years ago",
    rating: 5,
  },
  {
    name: "Shakeel Khan",
    text: "My teeth were brighter after just one session! I could not believe what a difference they could make in a short period of time. If you are looking to freshen up your smile at an affordable price and have visible results in a short period of time, this is the place. Gorgeous setting, super-clean environment, and top-notch service. Highly recommended!",
    date: "3 years ago",
    rating: 5,
  },
  {
    name: "Syed Shahid",
    text: "Excellent results.",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    name: "TD Shark",
    text: "I would buy it again, definitely. Thanks for this awesome whitening kit. Love it. Highly recommend 👍🏻",
    date: "2 years ago",
    rating: 5,
  },
  {
    name: "Sadia S",
    text: "Lovely lady. You can really notice the difference. Will definitely be coming back again. Thank you 😊",
    date: "3 years ago",
    rating: 5,
  },
  {
    name: "Isha Verma",
    text: "Great experience getting my teeth whitened here! The lady was very friendly, the process was smooth, and I saw a noticeable difference right away. Very clean place, and I'm really happy with the results—will definitely be back.",
    date: "2 weeks ago",
    rating: 5,
  },
  {
    name: "Laila Girard",
    text: "I love, love it.",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    name: "Amrit Brar",
    text: "Great experience with Kiran!",
    date: "3 weeks ago",
    rating: 5,
  },
  {
    name: "Aqeel Ahmed",
    text: "Had a great experience getting my teeth whitened by Kiran. The results were amazing—my teeth look much brighter, and I couldn't be happier. Thanks, Kiran, for the excellent service!",
    date: "4 weeks ago",
    rating: 5,
  },
  {
    name: "Phoenix Watchmaker",
    text: "Love the results. Friendly service and professional. Would recommend to everyone.",
    date: "1 month ago",
    rating: 5,
  },
];
