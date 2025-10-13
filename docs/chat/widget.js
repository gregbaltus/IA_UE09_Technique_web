// docs/chat/widget.js
(() => {
    const WORKER_URL = "https://iatechniqueweb.greg-baltus.workers.dev";
    //const WORKER_URL = "https://api.gbaltus-ue09.be"
  
    // Wait for the DOM and bail out if the widget isn't on this page
    document.addEventListener("DOMContentLoaded", () => {
      const rootEl  = document.getElementById("chat-root");
      if (!rootEl) return; // script is loaded on other pages too
  
      const logEl   = document.getElementById("chat-log");
      const formEl  = document.getElementById("chat-form");
      const inputEl = document.getElementById("chat-input");
      const sendBtn = formEl?.querySelector("button");
  
      if (!logEl || !formEl || !inputEl) return;
  
      function addMessage(role, text) {
        const wrap = document.createElement("div");
        wrap.className = `msg ${role}`;
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = text;
        wrap.appendChild(bubble);
        logEl.appendChild(wrap);
        logEl.scrollTop = logEl.scrollHeight;
      }
  
      formEl.addEventListener("submit", async (e) => {
        e.preventDefault(); // stop page reload
        const text = (inputEl.value || "").trim();
        if (!text) return;
  
        addMessage("user", text);
        inputEl.value = "";
        inputEl.focus();
  
        if (sendBtn) sendBtn.disabled = true;
        try {
          // For now your Worker ignores the body and just replies "hello world!"
          const resp = await fetch(WORKER_URL, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "X-CLASS-TOKEN": "8cnAegHjwbtPYVYyk8Fl5yuYFVMqGb",

            }, 
            body: JSON.stringify({ message: text }),
          });
          const reply = await resp.text();
          addMessage("bot", reply);
        } catch (err) {
          addMessage("bot", "Network error.");
          console.error(err);
        } finally {
          if (sendBtn) sendBtn.disabled = false;
        }
      });
    });
  })();
  