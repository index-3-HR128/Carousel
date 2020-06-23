import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import TopBar from './TopBar.jsx';
import LikeForm from './LikeForm.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      user: {},
      error: null,
      isLoaded: false,
      page: 1,
      listbuttonRender: 'default'
    };
    this.createNewList = this.createNewList.bind(this);
    this.cancelCreateListButton = this.cancelCreateListButton.bind(this);
    this.submitCreateListbutton = this.submitCreateListbutton.bind(this);
  }

  //List form button interrupt
  createNewList(){
    this.setState({
      listbuttonRender: 'form'
    })
  }

  cancelCreateListButton(){
    this.setState({
      listbuttonRender: 'default'
    })
  }
  submitCreateListbutton(){
    //perform post options on user!
    this.setState({
      listbuttonRender: 'default'
    })
  }
  //end of List form button interrupt



  componentDidMount(){
    axios.get('http://localhost:3003/api/places')
    .then((res)=>{
      //suppose to do some filtring here?
      const fourplaces = res.data.slice(0,12);
      this.setState({
        places: fourplaces
      })
    })
    .then( ()=> axios.get('http://localhost:3003/api/users'))
    .then((res) => {
      //taking 1st sample as example
      const currentUser = res.data[9];
      this.setState({
        isLoaded:true,
        user: currentUser
      })
    })
  }

  render() {
    const {error, isLoaded, places} = this.state;
    if(error) {
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return <div>loading...</div>;
    }else {
      return (
        <div>
          <TopBar page={this.state.page} totalpage={3}/>
          <Carousel places={this.state.places} />
          <LikeForm
            user={this.state.user}
            listbuttonRender={this.state.listbuttonRender}
            createNewList={this.createNewList}
            cancelCreateListButton = {this.cancelCreateListButton}
            submitCreateListbutton = {this.submitCreateListbutton}/>
        </div>
      )
    }

  }
}

export default App;