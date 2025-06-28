import { BookProvider } from "./context/BookContext";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import "./App.css";

function App() {
  return (
    <BookProvider>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </BookProvider>
  );
}

export default App;