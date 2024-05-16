import "./App.css";
import MainLayout from "./Component/MainLayout/MainLayout";
import Management from "./Pages/Management";

function App() {
  return (
    <div className="flex flex-col">
      <MainLayout>
        <Management />
      </MainLayout>
    </div>
  );
}

export default App;
