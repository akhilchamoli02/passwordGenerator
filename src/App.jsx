import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    toast('Password Copied to Clipboard!');
  };

  const passwordGenerator = useCallback(() => {
    let tempPassword = '';
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    if(numberAllowed){
      str += '0123456789';
    }
    if(charAllowed){
      str += '`~!@#$%^&*()-_=+[]{}|;:,<.>/?';
    }
    for(let i = 0; i< length; i++)
    {
      let charIndex = Math.floor(Math.random() * str.length);
      tempPassword += str[charIndex];
    }

    setPassword(tempPassword);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-screen-md my-52 mx-auto px-3 py-4 rounded-lg bg-gray-700 text-center text-orange-700'>
        <h1 className='text-white text-3xl p-2'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4 shadow'>
          <input type="text" value={password} placeholder='Password' readOnly className='w-full outline-none py-1 px-3'/>
          <button className='bg-blue-700 outline-none text-white shrink-0 px-3 py-0.5' onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="range" min={6} max={99} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label>Length: ({length})</label>

          <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)}/>
          <label htmlFor="numberInput">Numbers</label>
          
          <input type="checkbox" defaultChecked = {charAllowed} id='charInput' onChange={() => setCharAllowed((prev) => !prev)}/>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
