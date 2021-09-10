var menuItem = {
  title: "Search in UrbanDictionary",
  contexts:["image"],
  id: "menuButton"
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(content){
  var media = content.mediaType;
});