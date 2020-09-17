
<script>
export default {
  name: 'vd-title',
  props: {
    level: {
      type: Number,
      default: 1,
      validator(value) {
        return value >= 1 && value <= 6;
      }
    }
  },
  methods: {
    clickHandler() {
      alert("Title Clicked");
    }
  },
  render(createElement) {
    return createElement(`h${this.level}`, {
      on: {
        click:this.clickHandler,
      }
    },
    this.$slots.default);
  },
}
</script>
