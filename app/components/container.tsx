import {ReactNode} from 'react';

interface Container {
  children: ReactNode;
}


const Container: React.FC<Container> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
