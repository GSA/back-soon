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
<script type="text/javascript">
  url = "digitalgov.gov";
</script>
<script type="text/javascript">msg="<p><strong><span>Due to a lapse in government funding</span>, all "+url+" sites, services and online survey collection requests will be unavailable until further notice.</strong></p><p class='bs_usa'>Updates regarding government operating status and resumption of normal operations can be found at <a href='https://usa.gov' title='https://usa.gov'>usa.gov</a>.</p>",window.onload=function(){document.body.innerHTML+="<div id='bs'><div>"+msg+"<a href='#' title='Close' id='bs_close'>Continue to "+url+" »</a></div></div>"},document.onclick=function(n){"bs"!=n.target.id&&"bs_close"!=n.target.id||(bs.style.display="none")};</script>
<style media="screen">#bs{background:#000;opacity:.8;width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}#bs div{position:absolute;top:1.5em;left:0;right:0;margin:0 auto;padding:2em 2em 2.5em;background:#fff;width:90%;box-sizing:border-box;color:#000;font-family:Helvetica,Arial,sans-serif}#bs span{background:#FFC116}#bs a{color:blue}#bs_close{margin-top:15px;padding:10px 15px;border:2px solid blue;display:inline-block;font-weight:700}#bs p{margin-top:0;font-size:24px;line-height:30px}#bs .bs_usa{font-size:18px;line-height:24px}@media only screen and (min-width: 600px){#bs div{padding:2.5em 2.5em 3em;top:5em;width:600px}}</style>

```
