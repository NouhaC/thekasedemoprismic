import MyComponent from '../../../../slices/ImageGallery';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageGallery'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_gallery","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Consectetur nostrud consequat adipisicing esse esse eiusmod do magna ullamco enim occaecat irure sit consequat fugiat. Veniam reprehenderit incididunt nostrud magna aliqua excepteur excepteur irure consectetur nulla reprehenderit. Amet sunt ad est laboris ad enim sit do exercitation sunt.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"synthesize mission-critical e-markets"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Veniam nostrud aliqua sit proident excepteur pariatur ut ullamco deserunt consequat magna voluptate anim pariatur consectetur.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"drive collaborative infrastructures"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Sint sit consequat laborum commodo. Culpa elit adipisicing laborum Lorem incididunt magna adipisicing quis sit nostrud aliqua nulla deserunt. Sint adipisicing ex aute cupidatat labore.","spans":[]}],"link":{"link_type":"Web","url":"http://twitter.com"},"linkLabel":"deliver wireless partnerships"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Excepteur elit aliquip adipisicing aute labore et esse velit enim est eu et sint eiusmod minim. Adipisicing quis non elit est. Do fugiat adipisicing irure culpa id quis commodo culpa sit.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"reintermediate out-of-the-box e-business"}],"primary":{"galleryTitle":[{"type":"heading2","text":"Matrix user-centric action-items","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
