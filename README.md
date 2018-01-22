# Back Soon

A simple pop-up for agency websites during a lapse in funding

---


This bit of javascript inserts a pop-up on the screen saying,

**Due to a lapse in government funding, all [domain.gov] sites, services and online survey collection requests will be unavailable until further notice.**

**Updates regarding government operating status and resumption of normal operations can be found at <a href='https://usa.gov' title='https://usa.gov'>usa.gov</a>.**


![image](https://user-images.githubusercontent.com/395641/35200837-cb771208-fee2-11e7-9f08-01140d7972c9.png)


---


## How to use this
Copy and paste this into the `<head>` of your website

```
<!-- Back Soon! — A simple pop-up for agency websites to use during a lapse in funding https://github.com/GSA/back-soon -->
<script type="text/javascript">url="digitalgov.gov";msg="<p><strong>Due to a lapse in government funding, all "+url+" sites, services and online survey collection requests will be unavailable until further notice.</strong></p><p class='bs_usa'>Updates regarding government operating status and resumption of normal operations can be found at <a href='https://usa.gov' title='https://usa.gov'>usa.gov</a>.</p>" window.onload=function(){document.body.innerHTML+="<div id='bs'><div>"+msg+"<a href='#' title='Close' id='bs_close'>close</a></div></div>";} document.onclick=function(e){if(e.target.id=='bs'||e.target.id=='bs_close'){bs.style.display='none';}};</script>
<style media="screen">#bs{background:#000;opacity:0.8;width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}#bs div{position:absolute;top:5em;left:0;right:0;margin:0 auto;padding:1.5em 2.5em 2em 2.5em;background:#fff;width:40%;color:#000;font-family:Helvetica,Arial,sans-serif}#bs a{color:blue}#bs p{font-size:1.5em;line-height:1.3em}#bs .bs_usa{font-size:1em;line-height:1.4em}</style>

```
