// docs/chat/widget.js
(() => {
  // Prefer your custom domain if it's working for you:
  // const WORKER_URL = "https://api.gbaltus-ue09.be";
  const WORKER_URL = "https://iatechniqueweb.greg-baltus.workers.dev";

  const CLASS_TOKEN = "8cnAegHjwbtPYVYyk8Fl5yuYFVMqGb";
  const EMAIL_RE = /^[^\s@]+@(helmo\.be|student\.helmo\.be)$/i;

  // one conversation per page load
  const conversationId = crypto.randomUUID();
  const CLIENT_VERSION = "v1.0.0";

  document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("chat-root");
    if (!rootEl) return;

    // identity elements
    const emailInput = document.getElementById("student-email");
    const saveEmailBtn = document.getElementById("save-email");
    const emailStatus = document.getElementById("email-status");

    // chat elements
    const logEl  = document.getElementById("chat-log");
    const formEl = document.getElementById("chat-form");
    const inputEl = document.getElementById("chat-input");
    const sendBtn = formEl?.querySelector("button");

    if (!logEl || !formEl || !inputEl || !emailInput || !saveEmailBtn) return;

    // load saved email
    const saved = (localStorage.getItem("student_email") || "").trim();
    if (saved) {
      emailInput.value = saved;
      emailStatus.textContent = `Saved: ${saved}`;
      emailInput.classList.add("ok");
    }

    function validEmail(v) { return EMAIL_RE.test((v || "").trim()); }

    saveEmailBtn.addEventListener("click", () => {
      const email = emailInput.value.trim().toLowerCase();
      if (!validEmail(email)) {
        emailStatus.textContent = "Please enter a valid HELMo email.";
        emailStatus.style.color = "#c62828";
        return;
      }
      localStorage.setItem("student_email", email);
      emailStatus.textContent = `Saved: ${email}`;
      emailStatus.style.color = "#2e7d32";
    });

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

    function showThinking() {
      const wrap = document.createElement("div");
      wrap.className = "msg bot thinking";
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.textContent = "💬 The assistant is thinking...";
      wrap.appendChild(bubble);
      logEl.appendChild(wrap);
      logEl.scrollTop = logEl.scrollHeight;
      return wrap; // so we can remove it later
    }

    formEl.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = (localStorage.getItem("student_email") || "").trim().toLowerCase();
      if (!validEmail(email)) {
        emailStatus.textContent = "Please save your HELMo email before chatting.";
        emailStatus.style.color = "#c62828";
        emailInput.focus();
        return;
      }

      const text = (inputEl.value || "").trim();
      if (!text) return;

      addMessage("user", text);
      inputEl.value = "";
      inputEl.focus();

      if (sendBtn) sendBtn.disabled = true;

      // 🟡 Show “thinking…” indicator
      const thinkingEl = showThinking();

      try {
        const resp = await fetch(WORKER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CLASS-TOKEN": CLASS_TOKEN,
          },
          body: JSON.stringify({
            message: text,
            student_email: email,
            conversation_id: conversationId,
            client_version: CLIENT_VERSION,
          }),
        });

        const replyText = await resp.text();

        // 🟢 Remove the “thinking…” message
        if (thinkingEl) thinkingEl.remove();

        if (!resp.ok) {
          addMessage("bot", `Error ${resp.status}: ${replyText}`);
        } else {
          addMessage("bot", replyText);
        }
      } catch (err) {
        console.error(err);
        if (thinkingEl) thinkingEl.remove(); // remove it even on error
        addMessage("bot", "Network error.");
      } finally {
        if (sendBtn) sendBtn.disabled = false;
      }
    });
  });
})();
