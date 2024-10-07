import Counter from './components/Counter';

const App = () => {
  return (
    <div className="counter-page">
      <div className="counter">
        <h2 className="counter__title">Redux Complete Tutorial</h2>
        <Counter />
      </div>
    </div>
  );
};

export default App;
