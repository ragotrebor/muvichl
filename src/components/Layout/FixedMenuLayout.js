import React from 'react'
import {
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'
import DropdownMenu from './DropdownMenu.js'
import MovieGrid from './../MovieGrid/index.js'

class FixedMenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogSelected: -1,
    }
  }
  
  handleDropdownSelect = (id) => {
    this.setState({
      catalogSelected: id,
    });
  }

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
              muvichl
            </Menu.Item>
            <Dropdown item simple text='Catalogos'>
              <DropdownMenu onDropdownSelect={this.handleDropdownSelect}/>
            </Dropdown>
          </Container>
        </Menu>
        <MovieGrid catalogId={this.state.catalogSelected}/>
      </div>
    )
  }
}


export default FixedMenuLayout