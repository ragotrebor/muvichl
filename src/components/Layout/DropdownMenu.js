import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCatalogs} from '../../store/actions/catalogActions.js'
import { Dropdown } from 'semantic-ui-react'

 class DropdownMenu extends Component {
    componentDidMount(){
      this.props.getCatalogs()
    }

    render() {
      const {catalogs} = this.props.catalogs;

      return (
        <Dropdown.Menu>
          {catalogs.map(c => 
            <Dropdown.Item key={c.id} onClick={() => this.props.onDropdownSelect(c.id)}>{c.name}</Dropdown.Item>
          )}
        </Dropdown.Menu>
        
      )
    }
}

const mapStateToProps  = (state) => ({catalogs:state.catalogs})

export default connect(mapStateToProps, {getCatalogs})(DropdownMenu)