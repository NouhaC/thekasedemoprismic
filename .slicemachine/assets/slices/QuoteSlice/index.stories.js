import MyComponent from '../../../../slices/QuoteSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/QuoteSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Id sit dolor magna.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => ({
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
      mock: {"variation":"quoteReference","name":"quoteReference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Dolor ea ad adipisicing. Quis ex non ut esse exercitation nostrud magna ullamco.","spans":[]}],"reference":[{"type":"paragraph","text":"Enim elit consectetur commodo qui id occaecat in anim dolore consequat nostrud. Amet amet ad adipisicing ullamco occaecat ipsum non in officia ut laboris quis labore.","spans":[]}]},"id":"_QuoteReference"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_QuoteReference.storyName = 'quoteReference'
