import React , {Component} from "react";
class Calculator extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
       results:'',
      keysNumbers:[0,1,2,3,4,5,6,7,8,9],
      keysOper:['+','/','*','C','S']

    }
  }
   
    getButton=(e)=>{
const valeur=e.target.name;

if(valeur=='C')
{
  this.setState({
    results:''
  })
}
else if(valeur=='S')
{
  this.setState({
    results:this.state.results.toString().slice(0,-1)
  })
}
else if(valeur=='=')
{
this.setState({
  results:eval(this.state.results)
})
}
else
{
  this.setState({
    results:this.state.results+valeur
  })
}
    }
   
    render()
    {
      return (
        <div>
          <fieldset>
       <table>
        <tr>
          <td colSpan={10}><input type="text" value={this.state.results} className="input"/></td>
        </tr>
        <tr>
        {
        this.state.keysNumbers.map((n,index)=>{
       
          return <td><button name={n} onClick={this.getButton}>{n}</button></td>
 
        })
      }
      </tr>
      <tr>
        {
        this.state.keysOper.map((n,index)=>{
       
          return <td colSpan={2}><button name={n} onClick={this.getButton} className="input">{n}</button></td>
 
        })
      }
      </tr>
      <tr>
          <td colSpan={10}><button name='=' onClick={this.getButton} className="input">=</button></td>
        </tr>
       </table>
       </fieldset>
        </div>

        );
       
      }
   
    }
export default Calculator