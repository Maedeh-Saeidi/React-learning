import Demo from "./components/Demo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


const App = ()=>{

return <>
<QueryClientProvider client={queryClient}>
  <Demo></Demo>
</QueryClientProvider>
</>
}
export default App;