import './App.css';

import Button from './components/Button';

function App() {
  const buttonProps = {
    text: '타이틀',
    color: 'orange'
  } 

  return (
    <>
    <Button {...buttonProps}/>
    <Button text={'메일'} color={'red'}/>
    <Button text={'카페'} color={'blue'}/>
    <Button text={'블로그'} color={'yellow'}/>
    <Button />
    </>
  )
}

export default App;
