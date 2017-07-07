(function () {
  // I used pageAction instead of browserAction to have the ability to hide
  // the icon when we're on a non usable site

  // Listen for changes in the tabs and check the urls/domains
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(tab.url.indexOf('apps.shopify.com/') > -1 && tab.url.length > 25
      && !(tab.url.indexOf('apps.shopify.com/categories') > -1)
      && !(tab.url.indexOf('apps.shopify.com/?filter') > -1) && !(tab.url.indexOf('apps.shopify.com/?sortby') > -1)
      && !(tab.url.indexOf('apps.shopify.com/collections') > -1)
  ) {
  //  if(tab.url.indexOf('apps.shopify.com') > -1 || tab.url.indexOf('help.shopify.com/') > -1) {
      // only show the ungreyed icons for the domains listed in the IF statement above
      chrome.pageAction.show(tabId);
    }
  });

  chrome.pageAction.onClicked.addListener(function(tab) {
    //var title = window.location.pathname.substring(1);
    //window.location.href='https://modeanalytics.com/shopify/reports/d607feae5484?param_app_store_path='+title;
    var title = tab.url.split("/").pop();
    chrome.tabs.update(tab.id, { url: 'https://modeanalytics.com/shopify/reports/d607feae5484?param_app_store_path='+title });
  });

})();
