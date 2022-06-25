import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";

interface Lesson {
  id: string;
  title: string;
}
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
