SNSBtns = {
	init : function(div, prm) {
		if (prm.type===undefined) return false;
		SNSBtns.prm = prm;
		var d = $(div).addClass('SNSBtns');
		var w = parseInt(d.width() / prm.type.length)-32;
		var h = d.height();
		for ( var i in prm.type ) {
			switch (prm.type[i]) {
			case 'twitter':
				var b = $('<div>').addClass('twitter').width(w).height(h)
						.on('click', SNSBtns.onTwitter);
				d.append(b);
				break;
			case 'facebook':
				var b = $('<div>').addClass('facebook').on('click', SNSBtns.onFacebook)
						.width(w).height(h);
				d.append(b);
				break;
			case 'gplus':
				var b = $('<div>').addClass('gplus').on('click', SNSBtns.onGplus)
						.width(w).height(h);
				d.append(b);
				break;
			case 'line':
				var b = $('<div>').addClass('line').on('click', SNSBtns.onLine)
						.width(w).height(h);
				d.append(b);
				break;
			case 'hatena':
				var b = $('<div>').addClass('hatena').on('click', SNSBtns.onHatena)
						.width(w).height(h);
				d.append(b);
				break;
			}
		}
		w = (w<h) ? w : h;
		w = (w<34) ? w : 34;
		w-=2;
		$('.SNSBtns>div').css('background-size', w);
		return true;
	},
	onTwitter : function() {
		var url = 'https://twitter.com/intent/tweet?text=' + encodeURI(SNSBtns.prm.text)
			+ '&url=' + encodeURI(SNSBtns.prm.url) + '&via=moltie&';
		window.open(url, "share via twitter", "window=800,height=400,scrollbars=no");
	},
	onFacebook : function() {
		var url = 'https://www.facebook.com/sharer/sharer.php?u=' 
				+ encodeURI(SNSBtns.prm.url);
		window.open(url, "share via facebook", "window=800,height=400,scrollbars=no");
	},
	onGplus : function() {
		var url = 'https://plus.google.com/share?url=' 
				+ encodeURI(SNSBtns.prm.url);
		window.open(url, "share via facebook", "window=800,height=400,scrollbars=no");
	},
	onLine : function() {
		var url = 'http://line.me/R/msg/text/?' 
			    + encodeURI(SNSBtns.prm.text + ' - ' + SNSBtns.prm.url);
		window.open(url, "share via line", "scrollbars=yes");
	},
	onHatena : function() {
		var url = 'http://b.hatena.ne.jp/entry/' 
			    + encodeURI(SNSBtns.prm.url);
		window.open(url, "share via hatena");
	}
};
