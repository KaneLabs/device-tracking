Device Recognition for Augur Challenge

Possible sources for fingerprinting devices

##Browser
- cookies
- flash local shared objects
- silverlight isolated storage (shared between non icognito browsers)
- HTML5 localstorage
- Flash Asset Cache
- window.nam
- HTTP Strict Transport Security (load http, see if redirect, if not tag)
- DNS cache
- User Specific (language, char enc, timezone)

##Machine
- User-Agent
- Clock Skew and Drift
- CPU & GPU benchmarks (GL_RENDERER or JS benchmarks)
- screen & browser resolutions
- window.outerHeight, window.innerHeight
- font detection
- plugin detection (navigator.plugins)
- browser extensions

##Network

- X-Forwarder-For
- external IP
- TCP headers
