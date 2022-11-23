import React from "react";

export default function Constants(props) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;

  return apiUrl;
}
