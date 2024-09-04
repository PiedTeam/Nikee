import { InputPassword } from 'ui-lib';
import './index.css';
import { Input } from '@nextui-org/react';

const App = () => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <InputPassword/>
    </div>
  );
};

export default App;
