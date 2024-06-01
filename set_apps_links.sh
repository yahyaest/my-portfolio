# This script uses the `sed` command to replace a specific URL in a JavaScript file.
# It replaces the URL in nginx at /usr/share/nginx/html  with desired URL.
# The modified JavaScript file is located at "/usr/share/nginx/html/static/chunks/pages/index-8fef214023cc03cd.js".

sed -i 's#https://flask-pc-builder-app.herokuapp.com/#https://yahyamachat.com/pc-builder-app/#g' /usr/share/nginx/html/static/chunks/pages/index-8fef214023cc03cd.js

sed -i 's#https://covid-19-tracker-44022.web.app/#https://yahyamachat.com/covid-19-app/#g' /usr/share/nginx/html/static/chunks/pages/index-8fef214023cc03cd.js

sed -i 's#https://games-api-finder.web.app/#https://yahyamachat.com/game-app/#g' /usr/share/nginx/html/static/chunks/pages/index-8fef214023cc03cd.js
