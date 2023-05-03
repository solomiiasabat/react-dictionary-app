import axios from "axios";
import { apiKey } from "./constants";

export function searchWord(keyword, onSuccess, onError) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios
    .get(apiUrl)
    .then((response) => onSuccess(response.data[0]))
    .catch(() => onError(true));
}

export function searchPictures(keyword, onSuccess, onError) {
  const pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}&per_page=4`;
  let headers = { Authorization: `Bearer ${apiKey}` };
  axios
    .get(pexelsApiUrl, { headers: headers })
    .then((response) => onSuccess(response.data.photos))
    .catch(() => onError(true));
}
