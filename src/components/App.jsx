import { PureComponent } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Layout } from './Layout';
import {getGalleryImages} from '../api/services'

export class App extends PureComponent {
  
  state = {
    per_page: 12,
    page: 1,
    query: "",
    images: [],
  };

  async componentDidUpdate(_, pS) {
    const { per_page, query, page } = this.state
    if(pS.query !== query) {
      const images = await getGalleryImages({per_page, query, page});
      this.setState({images});
      
    }
  }

  getQuery = query =>{
    this.setState({query});
  };

  render() {
    const { images } = this.state
    return (
      <Layout>
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery images={images} />
        <Loader />
        <Button />
      </Layout>
    );
  }
}
