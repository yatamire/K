const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
      app.options.push(option);
      e.target.elements.option.value = '';
    }
    render();
  };
  
  const onMakeDecision = () => {
  
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  
  }
  
  const onRemoveAll = () => {
  
    const randomNum = Math.random() * app.options.length;
    console.log(randomNum);
  
  }

class Form extends RTCIceCandidate.Component {

    render = () => {

        const template = (
          <div>
            <form onSubmit={onFormSubmit}>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name'></input>
              <button>Add Option</button>
              <input type='submit' value='Submit'/>
            </form>
          </div>
        );
      
        ReactDOM.render(template, appRoot);
      }

}

export default Form


const appRoot = document.getElementById('app');

render();