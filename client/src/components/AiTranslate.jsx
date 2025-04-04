import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faLanguage)

function AiTranslate() {
  return (
    <div id="google_translate_element">
    <FontAwesomeIcon icon={faLanguage} className="translate-icon" />
  </div>
  )
}

export default AiTranslate