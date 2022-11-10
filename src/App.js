import React, { Fragment, useState } from 'react';
import Editor from 'react-simple-code-editor';
import './App.css';
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'
import { Button } from './components/Button/Button';
import { itemMapper, notify, sampleData } from './utils';
import { sampleUCPage } from './data';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainRenderer from './MainRenderer';
function App() {
  const highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )
  

  const getSampleObject = (callb, key) => {
    let data = callb();
    navigator.clipboard.writeText(data);
    notify("Sample object for "+key+" copied to clipboard! Please paste it in JSON Object in Editor")
  }
  const [code, setCode] = React.useState(`{
    "text-1": {
      "value": "Hello Students!",
      "fontWeight": "bold",
      "fontSize": "24px"
    },
    "space-1": {
      "height": "32px"
    },
    "image-1": {
      "src": "https://testbytes.technoallianceindia.com/wp-content/uploads/2019/06/Untitled-17-1-300x300.png",
      "height": "300px"
    }
}`);

  const [templatesData, setTemplatesData] = useState({});
  const [error, setError] = useState('');
//   const [executableCode, setExecutableCode] = React.useState(`{
//     "text-1": {
//       "value": "Hello Students!",
//       "fontWeight": "bold",
//       "fontSize": "24px"
//     },
//     "space-1": {
//       "height": "32px"
//     },
//     "image-1": {
//       "src": "https://testbytes.technoallianceindia.com/wp-content/uploads/2019/06/Untitled-17-1-300x300.png",
//       "height": "300px"
//     }
// }`);

  const resetTemplateData = (code) => {
    setError('');
    try{
      const data = JSON.parse(code);
      console.log('templatesData', data);
      setTemplatesData(data);
    } catch(e) {
      console.log(e)
      if (!code) {
        setError('No Input Given');
        return ;
      }
      setError('Syntax Error: Please ensure it is a JSON Object. All keys & values are in double quotes & there are no trailing commas for last key of the data')
    }
  }

  return (
    <div className="App">
              <ToastContainer />

      <div className='code-container'>
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "4px",
          padding: "4px",
        }}>
          
          {Object.keys(sampleData).map((key) => <Button action={() => getSampleObject(sampleData[key], key)} text={key} />)}

          <Button action={() => {
            resetTemplateData(code);
          }} color={"#999"} text={"Run code"} />
        </div>
        <Editor
          onClick={(e) =>{ 
            if(e.detail === 5)
           {
            navigator.clipboard.writeText(sampleUCPage)
            
           }
          }}
          value={code}
          placeholder={"{}"}
          onValueChange={code => setCode(code)}
          highlight={() => highlight(code)}
          padding={16}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            overflow: "scroll",
            outline: "none",
            border: "none",
            caretColor: "white",
            minHeight: "100vh"
          }}
        />
      </div>
      {error ? <div>{error}</div>
        :
        <MainRenderer templatesList={Object.keys(templatesData)} state={templatesData} />
      }
      {/** <Space height={20} color={"#777"} />
        <Image src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
        
        <Grid columns={2} gap={16} backgroundColor={"gray"} /> */}
    </div>
    // </div>
  );
}

export default App;
