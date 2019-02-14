(w=>{
	const console=w.console,
	debounced=(f,n=300)=>{const a=w.setTimeout,b=w.clearTimeout;let e;return x=>{b(e),e=a(()=>{f(x)},n)}};
	//
	w.addEventListener('resize',debounced(event=>{
		console.info('resize:%O',event)
	}));
	//
})(window)
