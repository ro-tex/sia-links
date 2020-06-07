export {getRandomPortal, addPortal, removePortal}

const portals = [
  'siasky.net',
  'skydrain.net',
  'sialoop.net',
  'skynet.luxor.tech',
  'skynet.tutemwesi.com',
  'siacdn.com',
  'vault.lightspeedhosting.com',
]

// Returns a random Skynet portal.
function getRandomPortal() {
  if (portals.length === 0) {
    return 'siasky.net'
  }
  const randPortalIdx = Math.floor(Math.random() * portals.length)
  return portals[randPortalIdx]
}

// Add a new Skynet portal to the list of available portals.
// Returns bool. True on success and false on invalid portal URL.
function addPortal(portalURL) {
  const pURL = cleanPortalURL(portalURL)
  if (pURL === null) {
    return false
  }
  return !!portals.push(pURL)
}

// Removes a portal URL from the list of available portals.
// Returns bool. True on success, false on invalid portal URL or non-existent portal.
function removePortal(portalURL) {
  const pURL = cleanPortalURL(portalURL)
  if (pURL === null) {
    return false
  }
  const idx = portals.indexOf(pURL)
  if (idx === -1) {
    return false
  }
  return !!(portals.splice(idx, 1).length)
}

// Returns the portal's domain, e.g. 'siasky.net'. Returns null on invalid portal URL.
function cleanPortalURL(portalURL) {
  if (!portalURL || portalURL.length === 0) {
    return null
  }
  // remove the protocol and anything after the slash
  return portalURL.replace(/https:\/\/|http:\/\//, '').replace(/\/.*/g, '')
}

