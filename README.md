# bandcamp-cover-scrapper
Scrappe Bandcamp to download albums covers

## Getting started

1. Scrappe urls from Bandcamp (make sure to browse until the end of the page to get all urls)

```javascript
for (var i = 0; i < document.querySelectorAll(".collection-item-art").length; i++ ) {

console.log(document.querySelectorAll(".collection-item-art")[i].src)
}

```

2. Select all urls given in the console and copy them to urls.txt

3. Clone and init the project
   
```bash
git clone git@github.com:m4444te/bandcamp-cover-scrapper.git
cd bandcamp-cover-scrapper
npm install
npm run start
```
