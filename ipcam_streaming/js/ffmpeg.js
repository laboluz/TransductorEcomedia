
if((navigator.appVersion.indexOf("iPod")==-1)
   && (navigator.appVersion.indexOf("iPhone")==-1)
   && (navigator.appName.indexOf("Microsoft Internet Explorer")==-1))
{
	document.write('<script language="JavaScript1.2" type="text/javascript" src="js/commonff.js"><\/script>');
	document.write('<script language="JavaScript1.2" type="text/javascript" src="js/pcm-player.js"><\/script>');
	document.write('<script language="JavaScript1.2" type="text/javascript" src="js/video-player.js"><\/script>');
	document.write('<script language="JavaScript1.2" type="text/javascript" src="js/webgl-player.js"><\/script>');
}
