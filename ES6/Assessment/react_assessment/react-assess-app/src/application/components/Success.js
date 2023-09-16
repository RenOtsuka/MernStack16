import React, {Component} from "react";
import SuccessChild from "./SuccessChild";


export default class Success extends Component {

   constructor(props){
      super(props);

      
     
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
                  <SuccessChild name={name} address={address}/>
                  <>{this.props.element}</>
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



 
