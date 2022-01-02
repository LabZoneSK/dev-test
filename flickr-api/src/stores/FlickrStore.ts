import {
  types, flow, Instance,
} from 'mobx-state-tree';
import axios from 'axios';

export const Flickr = types.model('Flickr', {
  title: '',
  link: '',
  description: '',
  modified: '',
  generator: '',
  items: types.array(
    types.model({
      title: '',
      link: '',
      media: types.model({
        m: '',
      }),
      date_taken: '',
      description: '',
      published: '',
      author: '',
      author_id: '',
      tags: '',
    }),
  ),
  isLoading: true,
}).views((self) => ({
  listItems(filter:string) {
    if (filter !== '') {
      return self.items.filter((item) => item.title.toLowerCase().includes(filter.toLowerCase()));
    }
    return self.items;
  },
})).actions((self) => ({
  addImage: (images:typeof self.items) => {
    images.map((image) => {
      const filteredImage = self.items.filter((item) => item.title === image.title);
      if (filteredImage.length === 0) {
        self.items.push(image);
      }
    });
  },
})).actions((self) => ({
// note the star, this a generator function!
  fetchContent: flow(function* fetchInstalled() {
    try {
      const result = yield axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
        .then((res) => {
          const content = res.data;
          const init = content.indexOf('(');
          const jsonContent = JSON.parse(content.substr(init + 1, content.length - (init + 2)));
          return jsonContent;
        });
      self.items = result.items;
      self.description = result.description;
      self.generator = result.generator;
      self.link = result.link;
      self.modified = result.modified;
      self.title = result.title;
      self.isLoading = false;
    } catch (err) {
      console.log(err);
    }
  }),
}));
export default Flickr;
