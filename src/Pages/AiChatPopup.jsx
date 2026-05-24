import { useState } from "react";

function AiChatPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* fixed button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-white font-semibold shadow-xl hover:scale-105 transition"
      >
        Chat With AI
      </button>

      {/* popup */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl h-[85vh] rounded-3xl bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl overflow-hidden relative">
            
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-3xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            {/* AI Chat UI */}
            <div className="h-full flex flex-col items-center justify-center px-6">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-14">
                Over to you, John.
              </h1>

              <div className="w-full max-w-3xl rounded-full bg-white shadow-xl flex items-center px-6 py-4 gap-4">
                <button className="text-3xl text-gray-700">+</button>

                <input
                  type="text"
                  placeholder="Ask AI"
                  className="flex-1 outline-none text-lg bg-transparent text-gray-700"
                />

                <span className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>
                  Pro
                </span>

                <button className="text-2xl">🎙️</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AiChatPopup;