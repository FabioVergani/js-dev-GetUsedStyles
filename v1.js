<script>
//#
console.clear('GrabUsedStyle');

//#
function isBlank(s){return s===''||/^\s*$/g.test(s)};

//#
Beautify={
 Selector:function(s){
	s=s.replace(/,\s*/g,',\n');
	return s;
 },
 Rule:function(s){
	return s.replace(/;\s*/g,';\n\t').replace(/,\s*/g,',').replace(/\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g,function($0,$1,$2,$3){
		var f=function(x){return ('0'+Number(x).toString(16)).substr(-2)};
		return ['#',f($1),f($2),f($3)].join('')
    });
 }
};

//#
function StylesIn(d){
	var u=[],s=d.styleSheets;
	for(var r,o,i=0,l=s.length;i<l;i++){
		o=s[i];
		r=o.rules||o.cssRules;
		for(var e,t,j=0,n=r.length;j<n;j++){
			e=r[j];
			if(!isBlank(e.style.cssText)){
				t=e.selectorText;
				if(t){t=/^[^:]+/.exec(t);if(t){t=t[0].trim();if(/^\*/.test(t)||d.querySelector(t)){u.push(e)}}}
			};
		}
	};
	return u.map(function(x){
		var a=Beautify.Selector,b=Beautify.Rule;
		return [a(x.selectorText),'{\n\t',b(x.style.cssText),'\r}'].join('').replace(/;(\n|\s)*\}/g,'\n}\n\n');
	}).join('\n');
};
//#
(function(w,f){
 var l='load',d=w.document,i='at'+l,init=function(){w.removeEventListener(l,i,0);f(w,d)};
 w.addEventListener(l,init,0);
})(this,function(w,d){
 console.log('used',StylesIn(d));
});



//
//console.log();




/*
 var fileref=document.createElement("link");
 fileref.setAttribute("rel", "stylesheet");
 fileref.setAttribute("type", "text/css");
 fileref.setAttribute("href","http://www.javascriptkit.com/javatutors/mystyle.css");
 document.getElementsByTagName("head")[0].appendChild(fileref);

*/
/*

(function(o){
 var f=function(p){o[p]=function(s){console.timeStamp(s+':'+p)}};
 f('start');
 f('end');
})(console.timeStamp);
//


(function(o,p){
 if(!o[p]){o[p]=function(s){return}};
})(String.prototype,'sss');


*/


</script>
