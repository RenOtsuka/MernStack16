import React, {Component, PureComponent} from "react";

//PureComponent has inbuilt implementation of shouldComponentUpdate
export default class HomeComponent extends PureComponent {

//export default class HomeComponent extends Component {
    //creation life cycle method
    constructor(props){
        super(props)
        this.state = {
            uName : "Jason",
            uState : "Chicago"
        }

        //Ref - elements work out of scope of react renderer, as free html element
        this.userNameRef = React.createRef();
        this.userAddressRef = React.createRef();

        //we can't access html element before dom creation as render method is not called yet
        //this.userNameRef.current.value = "Initial user name"
        //this.userAddressRef.current.value = "Initial user address"

        this.counter = 1;
        this.counterInterval;
        //this.initializeTicks();
    }

    //we need to implement componentDidMount to change values after initialization
    componentDidMount(){
        console.log("component is mounted on browser / dom created")
        //we can access html once component is mounted
        this.userNameRef.current.value = "Initial user name"
        this.userAddressRef.current.value = "Initial user address"

        // setTimeout(() => {
        //     this.userNameRef.current.focus()
        // }, 3000);
    }

    //update life cycle method - decides whether re-render should happen or not
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, nextState)

    //     if (nextState.uName=== this.state.uName && nextState.uState === this.state.uState) {
    //         return false //no need to call render method as states are same
    //     } else {
    //         return true
    //     }

    //     //return true
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);

        // this.setState({
        //     uState : prevState.uState
        // })
    }



    textChange = (evt)=>{

        let target = evt.target;
        let value = target.value;
        let classList = target.classList;
        console.log(value)

        if (classList.contains("userName")) {
            this.setState({
                uName : value
            })    
        } else {
            this.setState({
                uState : value
            })
        }

        evt.preventDefault();
    }

    // textChangeAddress = (evt)=>{

    //     let target = evt.target;
    //     let value = target.value;
    //     console.log(value)
    //     this.setState({
    //         uState : value
    //     })


    //     evt.preventDefault();
    // }

    formSubmit = (evt)=>{
        let userName = this.userNameRef.current.value;
        let userAddress = this.userAddressRef.current.value;

        //alert(userName + userAddress)
        this.setState({
            uName : userName,
            uState : userAddress
        })


        evt.preventDefault();
    }

    initializeTicks = ()=>{
        this.counterInterval = setInterval(() => {
            console.log("Logging the counter "+ this.counter++)
        }, 2000);
    }

    //destruction life cycle method
    componentWillUnmount(){
        //delete all subscriptions from the component
        //stop any api call
        console.log("Component Will Unmount!!!")

        clearInterval(this.counterInterval)
    }

    //creation and update life cycle method
    render(){
        console.log("rendering the component!!!")
        return(
            <>
                <h1>Home Component</h1>

                {/* controlled component using div based structure */}
                <div className="form col-md-12">
                    <div className="col-md-8">
                        <label>User Name </label>
                        <input type="text" className="userName" value={this.state.uName} onChange={this.textChange}></input>
                    </div>
                    <div className="col-md-8">
                        <label>Home Address </label>
                        <input type="text" className="address" value={this.state.uState} onChange={this.textChange}></input>
                    </div>
                </div>

                {/* uncontrolled component where we update the state at the end */}
                <form action="/saveUser" onSubmit={this.formSubmit}>
                    <b>User Name</b>
                    <input type="text" ref={this.userNameRef} ></input>
                    <b>Address</b>
                    <input type="text" ref={this.userAddressRef} ></input>

                    <button type="submit" >Save</button>
                </form>
            </>
        )
    }
}