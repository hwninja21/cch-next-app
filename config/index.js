const dev = process.env.NODE_ENV !== 'production';

export const homeURL = dev ? 'http://localhost:3000' : 'https://cchproject.vercel.app';

// export const apiURL = dev ? 'http://localhost:5001/cachyio/us-central1/api' : 'https://us-central1-cachyio.cloudfunctions.net/api';
export const apiURL = dev ? 'https://us-central1-cachyio.cloudfunctions.net/api-test' : 'https://us-central1-cachyio.cloudfunctions.net/api-test';
// test publishable key for stripe
export const  STRIPE_API_KEY = 'pk_test_3BbUboWCnl7oVa6rWMDeIKnq0064Nv3xyE';
