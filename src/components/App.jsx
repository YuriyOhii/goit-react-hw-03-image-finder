import { PureComponent } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Layout } from './Layout';

export class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
      </Layout>
    );
  }
}
