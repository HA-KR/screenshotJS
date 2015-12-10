Screenshot JS
====================

Take screenshots using phantom js

###Usage
```bash
$ WIDTH=320;\
  HEIGHT=990;\
  SITE="dummy2";\
  URL="http://$SITE.buildabazaar.com ";\
  phantomjs screenshot.js $URL $WIDTH $HEIGHT "$SITE.png"\
  &&\
  display "$SITE.png"

```


###Requirements
* phantom js (http://phantomjs.org/)

