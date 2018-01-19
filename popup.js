url = "digitalgov.gov";
msg = "<p><strong>Due to a lapse in government funding, all <span>"+url+"</span> sites, services and online survey collection requests will be unavailable until further notice.</strong></p><p>Updates regarding government operating status and resumption of normal operations can be found at <a href='https://usa.gov' title='USA.gov'>usa.gov</a>.</p>"
window.onload = function() {
  document.body.innerHTML+= "<div id='bs'><div>"+msg+"</div></div>";
}
