import Layout from "./layout/Layout.tsx";
import RainCloud from "./components/RainCloud.tsx";
import woof from "./assets/woof.png";

function App() {
  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: 100,
            marginBottom: 100,
          }}
        >
          <RainCloud />
          <img src={woof} alt="Woof" style={{ height: 200 }} />
        </div>
      </Layout>
    </>
  );
}

export default App;
