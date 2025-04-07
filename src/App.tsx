
import { ChatContainer } from "./components/chat/ChatContainer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <main className="container">
      <ChatContainer />
      <Toaster />
    </main>
  );
}

export default App;