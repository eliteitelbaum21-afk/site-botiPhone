"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2, CheckCircle2, ChevronDown } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  leadCaptured?: boolean;
}

const GREETING: Message = {
  role: "assistant",
  content: "היי! 👋 אני הסוכן החכם של BotiPhone.\nאשמח לענות על שאלות על הבוט הטלפוני, הקמפיינים, או המרכזיה בענן.\nאיך אוכל לעזור?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");

    const userMsg: Message = { role: "user", content };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setLoading(true);

    try {
      const apiMessages = nextMessages
        .filter((m) => m.role !== "assistant" || !m.leadCaptured)
        .map(({ role, content }) => ({ role, content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        let errorMsg = "שגיאה בחיבור, נסו שוב.";
        try {
          const errData = (await res.json()) as { error?: string };
          if (errData.error) errorMsg = errData.error;
        } catch {
          /* non-JSON response */
        }
        setMessages((prev) => [...prev, { role: "assistant", content: errorMsg }]);
        return;
      }

      const data = (await res.json()) as {
        reply?: string;
        error?: string;
        leadCaptured?: boolean;
      };

      const assistantMsg: Message = {
        role: "assistant",
        content: data.error ?? data.reply ?? "אני כאן לעזור!",
        leadCaptured: data.leadCaptured,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      if (data.leadCaptured) {
        setLeadCaptured(true);
      }

      if (!open) setUnread((n) => n + 1);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "שגיאה בחיבור, נסו שוב." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] flex flex-col rounded-2xl shadow-2xl shadow-black/40 border border-white/10 bg-[#0f1117] overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">BotiPhone</p>
              <p className="text-white/70 text-xs">סוכן AI • עונה מיד</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="סגור צ'אט"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 scroll-smooth" style={{ minHeight: 220 }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-brand-primary text-white rounded-br-sm"
                    : "bg-white/8 text-gray-100 rounded-bl-sm border border-white/8"
                }`}
              >
                {msg.content}
                {msg.leadCaptured && (
                  <div className="mt-2 flex items-center gap-1.5 text-green-400 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>הפרטים נשמרו — נחזור אליכם בקרוב!</span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-end">
              <div className="bg-white/8 border border-white/8 rounded-2xl rounded-bl-sm px-3 py-2">
                <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick actions — shown before any user message */}
        {messages.length === 1 && (
          <div className="px-3 pb-1 flex flex-wrap gap-2">
            {["מה כוללת המרכזייה?", "כמה עולה?", "רוצה שיחזרו אליי"].map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs bg-white/8 hover:bg-white/15 border border-white/10 text-gray-300 rounded-full px-3 py-1.5 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-3 py-3 border-t border-white/10 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="כתוב הודעה..."
            disabled={loading}
            className="flex-1 bg-white/8 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0"
            aria-label="שלח"
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary shadow-lg shadow-brand-primary/40 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label={open ? "סגור צ'אט" : "פתח צ'אט"}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <Bot className="w-6 h-6 text-white" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
}
