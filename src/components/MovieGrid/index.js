import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../../store/actions/movieActions.js'

import { Container, Header, Loader, Dimmer, Card, Image, Icon, Button, Modal } from 'semantic-ui-react'

class MovieGrid extends Component {
  componentDidMount() {
    this.props.getMovies(this.props.catalogId)
  }

  componentDidUpdate(prevProp) {
    if (prevProp.catalogId !== this.props.catalogId) this.props.getMovies(this.props.catalogId)
  }

  render() {
    const { movies, loading } = this.props.movies;
    console.log(movies);
    if (loading) {
      return (
        <Dimmer active style={{ marginTop: '7em', width: '80%', marginLeft: '1em', marginBottom: '1em' }}>
          <Loader />
        </Dimmer>
      )
    } else {
      if (this.props.catalogId === -1) {
        return (
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Selecciona catalogo</Header>
          </Container>
        )
      } else {
        return (
          <Container style={{ marginTop: '7em' }}>
            <Header as='h1'>{'https://api.redsalas.cl/api/vod-catalogs/' + this.props.catalogId}</Header>
            {movies.map(c =>
              <MovieCard key={c.movie.id} movie={c.movie} />
            )}
          </Container>
        )
      }
    }


  }
}

class MovieCard extends Component {
  render() {
    return (
      <Card>
        <Image src={'https://api.redsalas.cl/api/movies/posterimages/' + this.props.movie.poster_path} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.movie.original_title}</Card.Header>
          <Card.Meta>
            <span className='date'>{'ID: '+this.props.movie.id}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.movie.overview}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Modal
            trigger={
              <Button animated='vertical'>
                <Button.Content visible>Trailer</Button.Content>
                <Button.Content hidden>
                  <Icon name='youtube' />
                </Button.Content>
              </Button>}
            content={this.props.movie.video}
          />

        </Card.Content>
        <Card.Content extra>
          <Modal
            trigger={
              <Button animated='vertical'>
                <Button.Content visible>Ver película</Button.Content>
                <Button.Content hidden>
                  <Icon name='vimeo' />
                </Button.Content>
              </Button>}
            content={'https://api.redsalas.cl/api/vod-catalogs/  ---- ' + this.props.movie.embeded}
          />
        </Card.Content>
      </Card>
    )

  }

}


const mapStateToProps = (state) => ({ movies: state.movies })

export default connect(mapStateToProps, { getMovies })(MovieGrid)