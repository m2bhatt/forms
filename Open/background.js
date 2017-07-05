function openUrls() {
    var urls = ['https://mail.google.com/mail/u/0/#inbox','https://calendar.google.com/calendar/render#main_7%7Cmonth',
    'https://shopify.zendesk.com/agent/dashboard',
    'https://apps.shopify.com/','https://app.shopify.com/services/internal/partners', 'https://apps.shopify.com/internal',
    'https://app.shopify.com/services/internal/shops/10153199'];
    var activate = true;
    for (i=0; i<urls.length; i++) {
	if (urls[i].length > 0) {
	    chrome.tabs.create({url: urls[i],
			       active: activate});
	    activate = false;
	}
    }
}

chrome.browserAction.onClicked.addListener(openUrls);
