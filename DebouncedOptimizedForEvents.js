(w=>{
 const Tset=w.setTimeout,Tclear=w.clearTimeout,debounced=(f,n=300)=>{let e=null;return x=>{if(null===e){e=Tset(()=>{f(x);Tclear(e);e=null},n)}}};

})(window);
