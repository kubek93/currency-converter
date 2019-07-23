import axios from 'axios';
import { parseUrlParams } from '../utils/transforms';

//
//
// CURRENCY API
//
//

export const generateGetRequestByUrl = async (urlParams = null) => {
  const apiUrl = process.env.REACT_APP_CURRENCY_API_URL;
  const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
  const urlParamsWithKey = { ...urlParams, app_id: apiKey };
  const urlParamsParsed = parseUrlParams(urlParamsWithKey);
  const url = `${apiUrl}/latest.json${urlParamsParsed}`;

  try {
    const response = await axios({
      method: 'get',
      url,
      responseType: 'stream'
    });

    return response;
  } catch (err) {
    console.error('Something wrong with generateGetRequestByUrl function!', err);
  }
};

// GET
export const getAllCurrencies = async urlParams => {
  const response = await generateGetRequestByUrl(urlParams);
  return response;
};
