import axios from "axios";
import { apiPexelsKey } from "./сonstants";

export function searchWord(keyword, onSuccess, onError) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios
    .get(apiUrl)
    .then((response) => onSuccess(response.data[0]))
    .catch(() => onError(true));
}

export function searchPictures(keyword, onSuccess, onError) {
  const pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiPexelsKey}&per_page=4`;
  let headers = { Authorization: `Bearer ${apiPexelsKey}` };
  axios
    .get(pexelsApiUrl, { headers: headers })
    .then((response) => onSuccess(response.data.photos))
    .catch(() => onError(true));
}
