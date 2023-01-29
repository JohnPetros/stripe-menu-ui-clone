import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
