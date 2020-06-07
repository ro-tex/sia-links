# SiaLinks
SiaLinks translates Sia links (sia://hash) to standard http links (https://siasky.net/hash).

It comes preloaded with some Skynet portals but you can add your own or remove a portal you don't like.

## Installation

```shell script
npm i sia-links
```

## Usage

Translate a Sia link to a normal http link (we call these Skylinks):
```javascript
import {translateSiaLink} from "sia-links"

const httpLink = translateSiaLink('sia://AAAEYkkFXaH7YyMDLfw0lEMKm_NDAmvpoq7NurZeQ22Yrg')
if (httpLink !== null) {
  // Use the link however you want!
}
```

Add/remove portals to/from the list of portals SiaLink uses to generate the Skylinks:
```javascript
import {addPortal, removePortal} from "sia-links"

let success = addPortal('skynet.portal.xyz')
success = removePortal('slow.portal.bad')
```

Too simple? Yup, this is a very simple package.
