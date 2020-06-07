import {getRandomPortal} from "./portals.js"

export {isSiaLink, translateSiaLink}

const SIA_LINK_RE = /^sia:\/\/([a-zA-Z0-9-_]{46}.*)$/

// Checks if the given string is a valid Sia link.
// Returns bool.
function isSiaLink(sialink) {
  if (!sialink || sialink.length === 0) {
    return false
  }
  const matches = sialink.match(SIA_LINK_RE)
  return !!matches
}

// Translates the given Sia link into a valid http link using a random portal.
// Returns string or null.
function translateSiaLink(sialink) {
  if (!sialink || sialink.length === 0) {
    return null
  }
  const portal = getRandomPortal()
  return sialink.replace(SIA_LINK_RE, `https://${portal}/$1`)
}


