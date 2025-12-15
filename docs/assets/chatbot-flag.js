(function () {
    // Decide if the current URL points to the "00_chatbot" page.
    function isChatbotPath() {
      // 1) Drop index.html if present
      let p = location.pathname.replace(/index\.html?$/i, "");
      // 2) Trim trailing slashes
      p = p.replace(/\/+$/, "");
      // 3) Get last segment
      const parts = p.split("/").filter(Boolean);
      const last = parts[parts.length - 1] || "";
      return last === "00_chatbot";
    }
  
    function applyChatClass() {
      const on = isChatbotPath();
      document.documentElement.classList.toggle("page--chatbot", on);
    }
  
    // Run now
    applyChatClass();
  
    // Run after every MkDocs Material instant navigation
    if (window.document$) {
      window.document$.subscribe(applyChatClass);
    } else {
      // Fallback if instant navigation is disabled
      window.addEventListener("DOMContentLoaded", applyChatClass);
    }
  })();
  