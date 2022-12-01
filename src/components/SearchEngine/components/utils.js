import axios from "axios";
import { apiPexelsKey } from "../Constants";

export function SearchWord(keyword, onSuccess, onError) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios
    .get(apiUrl)
    .then((response) => onSuccess(response.data[0]))
    .catch(() => onError(true));
}

export function SearchPictures(keyword, onSuccess, onError) {
  const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
  let headers = { Authorization: `Bearer ${apiPexelsKey}` };
  axios
    .get(pexelsApiUrl, { headers: headers })
    .then((response) => onSuccess(response.data.photos))
    .catch(() => onError(true));
}
