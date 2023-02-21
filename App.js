import { WithAntdTheme } from "global/hoc";
import RouterConfig from "navigation";

const App = () => (
  <WithAntdTheme>
    <RouterConfig />
  </WithAntdTheme>
);

export default App;
