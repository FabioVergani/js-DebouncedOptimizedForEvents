(w=>{
	const Tset=w.setTimeout,Tclear=clearTimeout,debounced=(f,n=300)=>{const g=()=>{f(v);Tclear(e);e=null};let v,e=null;return x=>{v=x;if(null===e){e=Tset(g,n)}}};
  
/*
sample:
	$elem.addEventListener('scroll',debounced(event=>{
		console.log(event.target.scrollTop)
	}));
*/
  

})(window);
