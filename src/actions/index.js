import axios from 'axios';

// const ROOT_URL = 'http://api.wxdecoder.com/metar/decode';
const ROOT_URL = 'http://api.wxdecoder.com/metar/decode';

export const FETCH_METAR = 'FETCH_METAR';

export function fetchMetar(input) {
  // TODO: determine whether input is an airport ID or raw METAR text

  const url = `${ROOT_URL}/${input}/`;
  const request = axios.get(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return {
    type: FETCH_METAR,
    payload: request
  };
}
