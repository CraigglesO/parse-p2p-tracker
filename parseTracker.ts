

function parseTracker(trackerLink: string) {
  let result = {
    type: '',
    path: '',
    port: 0
  };

  result.type = trackerLink.slice(0,3);
  result.path = trackerLink.slice(6);
  result.port = Number(result.path.slice((-4)));
  result.path = result.path.split(':')[0];

  return result;

}

let x = parseTracker('udp://public.popcorn-tracker.org:6969');

console.log(x);

export default parseTracker;