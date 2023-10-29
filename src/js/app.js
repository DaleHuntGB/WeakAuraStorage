function copyTextAlpine(text) {
	return {
		copyText: text,
		copyNotification: false,
		copyToClipboard() {
			navigator.clipboard.writeText(this.copyText);
			this.copyNotification = true;
			let that = this;
			setTimeout(function(){
				that.copyNotification = false;
			}, 3000);
		}
	}
};