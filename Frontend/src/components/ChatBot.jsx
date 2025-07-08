import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { marked } from "marked";
import { Loader2 } from "lucide-react"; // Spinner icon

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) {
      setResponse("Please enter a message.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "HTTP-Referer": "https://ivanyuantama-web.vercel.app",
          "X-Title": "SiteName",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
    "model": "google/gemini-2.5-pro",
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": input
          },
          {
            "type": "image_url",
            "image_url": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg"
            }
          }
        ]
      }
    ]
  }),
      });

      const data = await res.json();
      const markdownText = data.choices?.[0]?.message?.content || "No response received.";
      setResponse(marked.parse(markdownText));
    } catch (error) {
      setResponse("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 transition-all">
        <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">ChatBot Ivan</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white transition-all"
          />

          <Button onClick={sendMessage} disabled={loading} className="w-fit self-center px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-all">
            Ask!
          </Button>

          {/* Spinner below the button */}
          {loading && (
            <div className="flex justify-center items-center mt-2">
              <Loader2 className="animate-spin h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
          )}

          {/* Response */}
          <div
            id="response"
            className={`mt-6 p-5 rounded-lg text-justify bg-gray-100 dark:bg-gray-800 shadow-md prose dark:prose-invert max-w-none transition-all duration-300 ${loading || !response ? "opacity-50" : "opacity-100"}`}
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
