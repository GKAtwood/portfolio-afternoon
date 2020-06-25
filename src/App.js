import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dropdownView: false
    }
  }

  toggleDropdown =()=>{
    this.setState({dropdownView: !this.state.dropdownView})
  }

render(){
  return(
        <div className ="App">
            <header className = 'main-header'>
              <h1>Start Bootstrap</h1>
              <nav className= 'desktop-menu'>
                <p>SERVICES</p>
                <p>PORTFOLIO</p>
                <p>ABOUT</p>
                <p>TEAM</p>
                <p>CONTACT</p>
              </nav>
              <div className = 'dropdown' onClick = {this.toggleDropdown}>MENU</div>
                {this.state.dropdownView
                ? (
                <nav className='mobile-menu'>
                  <span>SERVICES</span>
                  <span>PORTFOLIO</span>
                  <span>ABOUT</span>
                  <span>TEAM</span>
                  <span>CONTACT</span>
                </nav>
                )
              : null}
          </header>

          <section className='section'>
                  <h2>Welcome to our studio!</h2>
                  <h3>IT'S NICE TO MEET YOU</h3>
                  <button>TELL ME MORE</button>


          </section>


  </div>

     )
  }

}



export default App;
