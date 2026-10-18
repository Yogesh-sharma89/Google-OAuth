import AppProvider from "./provider/AppProvider";
import QueryProvider from "./provider/queryProvider";

const App = () => {
  return (
    <>
      <QueryProvider>
        <AppProvider />
      </QueryProvider>
    </>
  );
};
export default App;
