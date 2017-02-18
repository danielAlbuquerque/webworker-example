onmessage = function(e) {
	if(e.data.values !== undefined) {
		this.postMessage({result: e.data.values.num1 + e.data.values.num2});
	}
}