import { FETCH_METAR } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_METAR:
      return {
        raw_metar: action.payload.data.decoded_metar.raw_metar,
        icao_id: action.payload.data.decoded_metar.icao_id.decoded,
        decoded_metar: action.payload.data.decoded_metar
       };
  }
  return state;
}
