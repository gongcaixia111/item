<script>
export default {
  name: "Tab",
  data() {
    return {};
  },
  props: {
    label: {
      type: String,
      default: "tab"
    },
    index: {
      type: [String, Number],
      default: 1
    }
  },
  mounted(){
      this.$parent.panes.push(this)
  },
  methods:{
      handlerClick(){
          this.$parent.onChanges(this.index)
      }
  },
  computed: {
    active() {
      return this.$parent.value == this.index;
    }
  },
  render() {
    let tab = this.$slots.label || this.label;

    let className = {
      tab: true,
      active: this.active
    };
    return <li class={className} onClick={ this.handlerClick }>{tab}</li>;
  }
};
</script>
<style scoped>
.tab {
  flex: 1;
  text-align: center;
  list-style: none;
  line-height: 40px;
  margin-right: 30px;
  position: relative;
  cursor: pointer;
}

.tab.active {
  border-bottom: 2px solid blue;
}

.tab.last-child {
  margin-right: 0;
}
</style>
