import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => item.uid.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    // {id: '111111', name: 'Jahanzeb', phone: '222222', shift: 'Monday'}
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
