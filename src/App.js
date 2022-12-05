import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import PageIntro from "./components/PageIntro/PageIntro";
import Web3Box from "./components/Web3Box/Web3Box";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import BlockInfo from "./components/BlockInfo/BlockInfo";
import SendBlock from "./components/SendBlock/SendBlock";
import PDABlock from "./components/PDABlock/PDABlock";



function App() {
  return (
    <div className="App">
      <Header />
      <PageIntro />
      <BlockInfo />
      <SendBlock />
      <PDABlock />
      <Web3Box />
    </div>
  );
}

export default App;
