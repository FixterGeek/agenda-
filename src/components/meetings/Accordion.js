import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MeetingsListUser from './MeetingsListUser';
import RaisedButton from 'material-ui/RaisedButton';
import NoteMeeting from './NoteMeeting'
import OrderOfDay from './OrderOfDay'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as notesActions from '../../redux/actions/notesActions';
import NewOrderOfDay from './NewOrderOfDay'



class Acordion extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          expandable1:true,
          expandable2:false,
          order:{},
          editOrder:{},
          newOrder:false,
          disabled:true,
          active:false
      };
  }

  expandable1=()=>{
    let {expandable1}=this.state;
    expandable1 =!expandable1;
    this.setState({expandable1,expandable2:false})
  }
  expandable2=()=>{
    let {expandable2}=this.state;
    expandable2 =!expandable2;
    this.setState({expandable2,expandable1:false})
  }

  ////Ordern del Dia
  openOrder=()=>{
    let {newOrder}=this.state
    newOrder =! newOrder
    this.setState({newOrder})
  }
  changeDone =(id,status)=>{
       let {editOrder} = this.state;
       editOrder['id']=id
       editOrder['status']= !status
      this.props.orderActions.editOrder(editOrder);
      console.log(editOrder)
  }
  //delete Order
  onDeleteOrder=(i)=>{
   console.log("Voy a eliminar",i)
   this.props.orderActions.deleteOrder(i);
  };



  render(){
    let user=this.props.isStaff;
    let order = {};
    if(user){
      order=this.props.order
    }else{
      order=this.props.meeting.order
    }
    return(
      <div style={{width:'25%',margin:'0px auto'}}>
        <NewOrderOfDay open={this.state.newOrder} close={this.openOrder} id={this.props.id}/>

        <Card style={{marginBottom:'5px'}}  expanded={this.state.expandable1}  onExpandChange={this.expandable1}>
          <CardHeader
            title="ORDEN DEL DIA"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{color:'white'}}
            style={{backgroundColor:"#63a2f1",textAlign:'start'}}
          />
        <CardText expandable={true} style={{padding:'none'}}>
          {this.props.order.length <= 0 ? [(this.props.isStaff !== true ?<p>No hay ordenes del dia</p>:<RaisedButton primary={true} label="Agregar nueva orden del dia" style={style.btnNew} onClick={this.openOrder}/>)] :
           <OrderOfDay order={order} disabled={this.state.disabled} active={this.state.active} changeDone={this.changeDone} open={this.openOrder} isStaff={this.props.isStaff} onDelete={this.onDeleteOrder}/>}
          </CardText>
        </Card>

        <Card style={{marginTop:'5px',marginBottom:'5px'}} containerStyle={{paddingBottom:'none'}} expanded={this.state.expandable2} onExpandChange={this.expandable2}>
          <CardHeader
            title="USUARIOS"
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{textAlign:'start',color:'white'}}
            style={{backgroundColor:"#63a2f1",textAlign:'start'}}
          />
        <CardText expandable={true} style={{padding:'none',paddingBottom:'0px'}}>
            <MeetingsListUser
              employees={this.props.employees}
              meeting={this.props.meeting}
              openListAdd={this.props.openListAdd}
              isStaff={this.props.isStaff}
              />
          </CardText>
        </Card>
      </div>
    );
  }
}
const style = {
  btnNew:{
    marginTop:'5px',
  }
};


function mapStateToProps(state, ownProps) {

    return {

    }
}

function mapDispatchToProps(dispatch) {
    return{
        orderActions:bindActionCreators(orderActions,dispatch),
        notesActions:bindActionCreators(notesActions,dispatch)
    }
}

Acordion = connect(mapStateToProps, mapDispatchToProps)(Acordion);
export default Acordion;
/*


*/
