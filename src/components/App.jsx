import { PureComponent } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Layout } from './Layout';
import { getGalleryImages } from '../api/services';

export class App extends PureComponent {
  state = {
    per_page: 12,
    page: 1,
    query: '',
    images: [],
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(_, pS) {
    const { per_page, query, page } = this.state;
    if (pS.query !== query || pS.page !== page) {
      try {
        if (pS.query !== query && page !== 1)
          return this.setState(() => ({ images: [], page: 1 }));
        this.setState(() => ({ isLoading: true, error: null }));
        const images = await getGalleryImages({ per_page, query, page });
        this.setState(s => ({ images: [...s.images, ...images] }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  getQuery = query => {
    this.setState({ query });
  };

  changePage = () => {
    this.setState(s => ({ page: s.page + 1 }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.getQuery} />
        {error && <b>Something went wrong! Try to reload the page!</b>}
        {images.length > 0 && <ImageGallery images={images} />}

        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.changePage} />}
      </Layout>
    );
  }
}
