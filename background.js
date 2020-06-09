
browser.runtime.onMessage.addListener(function(message){
    if(message == "KIT-START"){
        browser.contextMenus.create({
            id: "kit-video-downloader",
            title: "KIT Video Downloaden",
            contexts: ["all"],
        });
    }
    else if (message == "KIT-END"){
        browser.contextMenus.remove("kit-video-downloader"); 
    }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "kit-video-downloader") {
        browser.tabs.sendMessage(tab.id, "DOWNLOAD").then(); 
    }
});

browser.runtime.onMessage.addListener(message =>{
    if(message.type == "DOWNLOAD-START"){
        browser.downloads.download({
            url: message.payload,
            saveAs: true
          }).then();
    }
})



