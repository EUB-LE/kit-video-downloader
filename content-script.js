(function () {


  if (document.getElementById("playerContainer")) {
    browser.runtime.sendMessage("KIT-START");

    window.addEventListener("visibilitychange", function (e) {
      if (document.visibilityState === "visible") {
        browser.runtime.sendMessage("KIT-START");
      } else {
        browser.runtime.sendMessage("KIT-END");
      }
    });

  }

  window.addEventListener("beforeunload", function (e) {
    browser.runtime.sendMessage("KIT-END");
  });

  browser.runtime.onMessage.addListener((message) => {
    if (message == "DOWNLOAD") {
      let video = document.getElementsByTagName("video")[0];
      let src = video.getElementsByTagName("source")[0].getAttribute("src");
      browser.runtime.sendMessage({
        type: "DOWNLOAD-START",
        payload: src
      });


    }
  })

})();

