import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import TopBar from './TopBar.jsx';
import LikeForm from './LikeForm.jsx';
import Modal from 'react-modal';
import styles from './styles.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      totalplaces: [],
      user: {},
      error: null,
      isLoaded: false,
      page: 1,
      listbuttonRender: 'default',
      saveToAListRender: 'false',
      likelistinput: '',
      clickedplace: {},
      modelOpen: false
    };
    this.customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-100%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    Modal.setAppElement(document.getElementById('app'))

    this.createNewList = this.createNewList.bind(this);
    this.cancelCreateListButton = this.cancelCreateListButton.bind(this);
    this.submitCreateListbutton = this.submitCreateListbutton.bind(this);
    this.leftArrowClicked = this.leftArrowClicked.bind(this);
    this.rightArrowClicked = this.rightArrowClicked.bind(this);
    this.heartClicked = this.heartClicked.bind(this);
    this.exitLikeFormClicked = this.exitLikeFormClicked.bind(this);
    this.likeListOnChange = this.likeListOnChange.bind(this);
    this.listLikeToggle = this.listLikeToggle.bind(this);

    this.serverUserPost = "http://localhost:3003/api/users";
    this.userIndex = 0;
  }

  //heart clicked
  heartClicked(place){
    this.setState({
      saveToAListRender: 'true',
      clickedplace: place,
      modelOpen: true
    })
  }

  //List form button interrupt
  exitLikeFormClicked(){
    this.setState({
      saveToAListRender: 'false',
      clickedplace: {},
      modelOpen: false
    })
  }

  createNewList(){
    this.setState({
      listbuttonRender: 'form'
    })
  }

  likeListOnChange(e){
    e.preventDefault();
    this.setState({
      likelistinput: e.target.value
    })
  }

  cancelCreateListButton(){
    this.setState({
      listbuttonRender: 'default'
    })
  }

  submitCreateListbutton(e){
    console.log('submit button clicked!');
    //perform post options on user!
    let obj = {
      "_id": this.state.user._id,
      "likeplace": this.state.clickedplace._id,
      "list": this.state.likelistinput,
      "like": true
    }

    axios.post(this.serverUserPost,obj)
    .then((res)=>{
      console.log(res.status);
      this.setState({
        likelistinput: '',
        listbuttonRender: 'default'
      })
    })
    .catch((e)=>{
      console.log(e);
    })
    .then( ()=> axios.get('http://localhost:3003/api/users'))
    .then((res) => {
      const currentUser = res.data[this.userIndex];
      this.setState({
        user: currentUser
      })
    })
    .catch((e)=>{
      console.log(e);
    })
    e.preventDefault();
  }

  listLikeToggle(e, singleList){
    console.log("list is clicked");
    if(singleList._id !== ''){
      //patch request
      let placeId = singleList._id;
      const obj = {
            like: singleList.like === true ? false: true
      }
      axios.patch(`http://localhost:3003/api/users/${placeId}`, obj)
      .then((res)=>{
        console.log(res.status);
      })    .catch((e)=>{
        console.log(e);
      })
      .then( ()=> axios.get('http://localhost:3003/api/users'))
      .then((res) => {
        const currentUser = res.data[this.userIndex];
        console.log(currentUser);
        this.setState({
          user: currentUser
        })
      })
      .catch((e)=>{
        console.log(e);
      })
      e.preventDefault();
    }else if(singleList._id === ''){
      let obj = {
        "_id": this.state.user._id,
        "likeplace": this.state.clickedplace._id,
        "list": singleList.list,
        "like": true
      }
      axios.post(`http://localhost:3003/api/users`, obj)
      .then((res)=>{
        console.log(res.status);
      })    .catch((e)=>{
        console.log(e);
      })
      .then( ()=> axios.get('http://localhost:3003/api/users'))
      .then((res) => {
        const currentUser = res.data[this.userIndex];
        console.log(currentUser);
        this.setState({
          user: currentUser
        })
      })
      .catch((e)=>{
        console.log(e);
      })
      e.preventDefault();
    }
  }




  //end of List form button interrupt

  //topbar onclick
  leftArrowClicked(){
    console.log("leftArrow clicked");
    const totalPlaceCopy = [... this.state.totalplaces];
    let fourplaces = [];
    let updatePage
    if(this.state.page === 2){
      fourplaces = totalPlaceCopy.slice(0,4)
      updatePage = 1;
      console.log(fourplaces);
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }else if(this.state.page === 3){
      fourplaces = totalPlaceCopy.slice(4,8)
      updatePage = 2;
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }else if(this.state.page === 1){
      fourplaces = totalPlaceCopy.slice(8)
      updatePage = 3;
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }
  }
  rightArrowClicked(){
    console.log("rightArrow clicked");
    const totalPlaceCopy = [... this.state.totalplaces];
    let fourplaces = [];
    let updatePage
    if(this.state.page === 1){
      fourplaces = totalPlaceCopy.slice(4,8);
      console.log(fourplaces);
      updatePage = 2;
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }else if(this.state.page === 2){
      fourplaces = totalPlaceCopy.slice(8)
      updatePage = 3;
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }else if(this.state.page === 3){
      fourplaces = totalPlaceCopy.slice(0,4)
      updatePage = 1;
      this.setState({
        page: updatePage,
        places: fourplaces
      })
    }
  }


  componentDidMount(){
    axios.get('http://localhost:3003/api/places')
    .then((res)=>{
      //suppose to do some filtring here?
      const totalplaces = [...res.data].slice(0,12);
      const fourplaces = [...totalplaces].slice(0,4);
      this.setState({
        places: totalplaces,
        totalplaces: totalplaces
      })
    })
    .then( ()=> axios.get('http://localhost:3003/api/users'))
    .then((res) => {
      //taking 1st sample as example
      const currentUser = res.data[this.userIndex];
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
        <div className={styles.wrapper}>
          <Modal
              isOpen={this.state.modelOpen}
              style={this.customStyles}
              contentLabel="Example Modal">
            <LikeForm
              user={this.state.user}
              listbuttonRender={this.state.listbuttonRender}
              clickedplace = {this.state.clickedplace}
              createNewList={this.createNewList}
              cancelCreateListButton = {this.cancelCreateListButton}
              submitCreateListbutton = {this.submitCreateListbutton}
              exitLikeFormClicked = {this.exitLikeFormClicked}
              likeListOnChange = {this.likeListOnChange}
              listLikeToggle = {this.listLikeToggle}
              />
          </Modal>
          <TopBar
            page={this.state.page}
            totalpage={3}
            leftArrowClicked={this.leftArrowClicked}
            rightArrowClicked={this.rightArrowClicked}/>
          <Carousel
            places={this.state.places}
            heartClicked = {this.heartClicked}
            likeplace = {this.state.user.likeplace} />
        </div>
      )
    }

  }
}

export default App;