import { GenericArray } from '../types';

interface ObjectParam {
  [key: string]: {
    [key: string]: any;
  };
}

/**
 * using `.keys` & `.map` over `.values` for deeper support.
 * see: https://caniuse.com/#feat=object-values
 */
export default (object: ObjectParam): GenericArray =>
  Object.keys(object).map(key => object[key]);
