import Unsplash from 'unsplash-js';
import { Unsplash as UnsplashSecret } from '../../secret';

let unsplash: Unsplash;

const initializeUnsplash = () => {
  unsplash = new Unsplash({
    applicationId: UnsplashSecret.accessKey,
    secret: UnsplashSecret.secretKey,
  });
};

export const getUnsplash = () => {
  if (!unsplash) {
    initializeUnsplash();
  }
};
