
import './sass/App.sass';
import QuoteTemplate from './QuoteTemplate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);


function App() {
  return (
    <div>
      <QuoteTemplate />
    </div>
  );
}

export default App;
