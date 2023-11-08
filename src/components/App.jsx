//import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

import React, { useState } from "react";

function App() {
  //const [note, setNote] = useState(dummyNotes);

  return (
    <div>
      <Header></Header>
      <Note></Note>
      <Footer></Footer>
    </div>
  );
}
export default App;
