import React, {Component} from "react";
import { Card } from 'react-bootstrap';
import './ask.css';
import '../../App.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import settings from '../../settings.png';


const CaptionElement = () =>
  <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>
    Questions
  </h3>;
/*************************/
/*  Class Implementation */
/*************************/
export class Ask extends Component {
  constructor() {
    super();
	this.state = {
      question: "How many hours did you sleep last night?",
      responses: ["Less than 3", "3 to 6", "6 to 9", "More than 9"]
	};
  }

  render() {
  	let responses = []
  	for (let i in this.state.responses) {
  		let response = this.state.responses[i];
  		responses.push(
			<div onClick={this.props.switchPage} key={i} className="cards" style={{margin: "12px"}}>
	          <Card style={{ width: '9rem', height: '3rem', "backgroundColor": "rgba(0, 0, 0, .45)", "borderStyle": "solid", "borderWidth": "1px", "borderColor": "#FFF4F9", "borderRadius": "15px"}}>
	            <Card.Body className="contains" style={{color: "white", display: "flex", "flexDirection": "row", "justifyContent": "center", "fontWeight":"550", "fontSize": "14px"}}>
	              <Card.Text>
	               {response}
	              </Card.Text>

	            </Card.Body>
	          </Card>
	        </div>
  		)

  	}
    return (
    <div>
    <button id="settings" onClick={this.props.settingsPage}><img src={settings} width="40px" height="40px"/></button>
    <div id="contain">
    <div style={{"font-size": "50px", "font-weight": "900px", "text-shadow": "3px 3px #D3D3D3", display: "flex", "flexDirection": "row", "justifyContent": "center"}}>
    Hello, {this.props.name}! <br></br>
    </div>
    <br></br>
    <Card style={{ width: '47rem', height: '10rem', "backgroundColor": "rgba(245, 245, 245, .45)", "borderStyle": "solid", "borderWidth": "1px", "borderColor": "#FFF4F9", "borderRadius": "15px"}}>
    <br></br>
   	<div style={{"font-size": "25px", "font-weight": "900px", "text-shadow": "3px 3px #D3D3D3", display: "flex", "flexDirection": "row", "justifyContent": "center", "marginBottom":"10px"}}>
 		{this.state.question}
     </div>
    <div id="responses">
    {responses}
     </div>
     </Card>
     </div>
     </div>
    )
  }
}

/*************************/
/*   Export Statements   */
/*************************/
export default Ask;