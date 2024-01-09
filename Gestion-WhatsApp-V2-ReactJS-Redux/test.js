import React from 'react';

class Apppp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            x:"hamid",
            b:"xxxxxx"

        }

    }

    ok = () => {
        this.setState({
          x: "koko"
        }, () => {
          console.log(this.state.b);
        });
      }

    
    render(){
        return(
            <div>
                {console.log(this.state.x)}
                {console.log(this.state.b)}
              <button onClick={this.ok}>onCli</button>
            </div>
        )
       }

}
export default Apppp 



