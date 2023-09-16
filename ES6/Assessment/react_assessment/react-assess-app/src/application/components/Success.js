import React, {Component} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory"

export default class Success extends Component {

      constructor(props){
            super(props);
            this.state = {
                  age : 10
            }
      }

      getFromChild = (info) =>{
            this.setState({
              age : info 
            });
      }

      render(){
         let name = "ryan";
         let address = "earth";

         return( 
                  <>
                  <h3>Some Success quotes</h3>

                  <p>“All our dreams can come true; if we have the courage to pursue them.” – Walt Disney</p>
                  <p>“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” – Dwayne Johnson</p>
                  <p>“Do what you can, with what you’ve got, where you are.” – Teddy Roosevelt</p>
                  <SuccessChild name={name} address={address} elementComp={<SuccessStory callbk={this.getFromChild}/>}/>
                  <br></br>
                  <h4>Age Passed from SuccessStory</h4>
                  <p>Age: {this.state.age}</p>
                  </>
            );
      };
      
}

// let Success = (props) => {

//       let name = "ryan";
//       let address = "earth";

//       return( 
//          <>
//           <h3>Some Success quotes</h3>

//           <p>“All our dreams can come true; if we have the courage to pursue them.” – Walt Disney</p>
//           <p>“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” – Dwayne Johnson</p>
//           <p>“Do what you can, with what you’ve got, where you are.” – Teddy Roosevelt</p>
//           <SuccessChild name={name} address={address}/>
//           <>{props.element}</>
//          </>
//       );
// };


// export default Success;



 
