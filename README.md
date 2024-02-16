## html:5 used to generate html file skeleton
## dev dependencies/ prod dependencies
## fetch from CDN is not good :
                        - Costly operation
                        - Latency(since network extra call takes some time to load)
                         - have to keep updating cdn react verion number in the url
# parcel
    -   Minification
    -   Hot Module Replacement
    -   Compression
    -   Image Optimization
    -   Buldling
    -   Caching- Faster Builds
    -   Code Splitting
    -   Differential Buldling - supports older browsers
    -   Error Dignostics
    -   Consistent Hashing
    -   Hosting apps on http/ https
    -   Tree Shaking/ remove unnecessary nodes

# Caret(^)-->Minor version upgrade vs Tilda(~)-->major version upgrade
# npm-install packages vs npx- execute package
# npx parcel index.html
# prod build: npx parcel build index.html(remove main:App.js from package.json else you will get error during build)