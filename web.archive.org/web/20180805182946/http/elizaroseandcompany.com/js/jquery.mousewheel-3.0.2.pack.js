var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*! Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 *
 * Version: 3.0.2
 * 
 * Requires: 1.2.2+
 */

(function(b){function d(a){var f=[].slice.call(arguments,1),e=0;a=b.event.fix(a||window.event);a.type="mousewheel";if(a.wheelDelta)e=a.wheelDelta/120;if(a.detail)e=-a.detail/3;f.unshift(a,e);return b.event.handle.apply(this,f)}var c=["DOMMouseScroll","mousewheel"];b.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],d,false);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],
d,false);else this.onmousewheel=null}};b.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
}

/*
     FILE ARCHIVED ON 08:16:09 Oct 16, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:45:23 Mar 31, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.387
  exclusion.robots: 0.014
  exclusion.robots.policy: 0.007
  esindex: 0.007
  cdx.remote: 54.726
  LoadShardBlock: 237.86 (3)
  PetaboxLoader3.datanode: 175.75 (5)
  PetaboxLoader3.resolve: 3081.956 (3)
  load_resource: 3047.438 (2)
*/