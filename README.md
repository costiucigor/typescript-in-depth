# typescriptindepth

Explain the difference between slots and scoped slots.

View answer


2.
Explain Vue.js reactivity and common issues when tracking changes.

View answer



3.
What are mixins? Describe their benefits and drawbacks.

View answer






Apply to Join Toptal's Development Network

and enjoy reliable, steady, remote Freelance Vue.js Developer Jobs

4.
What is a single-file component?

View answer


5.
Describe data flow between components in a Vue.js app.

View answer



6.
List the most common cause of memory leaks in Vue.js apps and how they can be solved.

View answer




7.
What is the virtual DOM and how is it beneficial?

View answer



8.
Consider the following code (index.html is omitted for brevity.) What is it going to output in the browser? Please mention any notable console output as well.

const MockComponent = {
  props: {
    showMe: {
      type: Boolean,
      required: true,
    },
  },
  template: `
    <div v-if="showMe">
      This is a test component
    </div>
  `,  
};

new Vue({
  el: '#app',
  
  components: {
    MockComponent,
  },

  template: `
    <div>
      <MockComponent showMe="" />
    </div>
  `,
});
View answer


9.
Consider the following code (index.html is omitted for brevity). What is it going to output in the console?

const MockComponent = {
  render() {
    return this.$slots.default;
  },

  data() {
    return {
      status: '',
    };
  },

  watch: {
    status: {
      handler(newVal) {
        console.log('Status update: ' + newVal);
      },
      immediate: true,
    },
  },

  beforeCreate() {
    this.status = 'initializing';
  },
  mounted() {
    this.status = 'online';
  },
  beforeDestroy() {
    this.status = 'offline';
  },
};

new Vue({
  el: '#app',

  components: {
    MockComponent,
  },

  template: `
	<div>
  	<MockComponent v-if="showComponent" />
	</div>
  `,

  data() {
    return {
      showComponent: false,
    };
  },

  mounted() {
    this.showComponent = true;
    window.setTimeout(() => {
      this.showComponent = false;
    }, 1000);
  },
});
View answer


10.
Why would you choose Vue.js over other front-end frameworks?
