import React from "react";
import Routes from "./Routes";
import { updateAccessToken } from "./utils/updateAccessToken";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    updateAccessToken(setLoading);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <Routes />;
};

export default App;
