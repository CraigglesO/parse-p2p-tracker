# Parse P2P Tracker

### Parse Tracker links to JSON

Break down a UPD or WSS link to a JSON object for easy use.

## Install

```
npm install parse-p2p-tracker
```

## Usage
```

import parseTracker from 'parse-p2p-tracker'

const trackerLink = 'udp://public.popcorn-tracker.org:6969';

let result: Object = parse(trackerLink: string);

// result = {
//            type: 'udp',                           : string
              path: 'public.popcorn-tracker.org'     : string
              port: 6969                             : number
//          }

```

## Example torrent metadata

announce:
    [ 'udp://0.0.0.0:1337',
      'wss://tracker.btorrent.xyz',
      'wss://tracker.fastcast.nz',
      'wss://tracker.openwebtorrent.com',
      'udp://public.popcorn-tracker.org:6969']

Happy Coding kids.
