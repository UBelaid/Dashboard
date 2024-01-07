import React from "react";
import { Dashboard } from "./screens/Dashboard";

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <main className="flex-grow overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </>
  );
};

export default App;
