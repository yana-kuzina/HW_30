import { useState } from "react";

import Title from "./components/Title";

function App() {
  const [open, setOpened] = useState<boolean>(false);

  const handleOpen = () => {
    setOpened(true);
  };

  if (open === true) {
    return <Title name="OPEN" type="normal" />;
  }
  return <button onClick={handleOpen}>Open title</button>;
}
export default App;
