
Vue.component('windows', {
  props: {
    'questions': Object,
  },
  template: `
      <span>
          <span class="list">
            <ul>
              <li v-for="(w, index) in questions" :class="[w.open ? 'active': '']"  @click="$emit('chosen_question', index)">
               <h3>{{w.question}}</h3>
                <p>{{w.answer}} </p>
                <button>Learn more</button>
             </li>
            </ul>
          </span>
      </span>
  `,

})


var app = new Vue({
  el: '.container',

  data: {
    questions: [
        {
       	    question: 'Why this term ?',
       	    answer: 'Several windows are stacked on each other. All of them are "shaded", so only their captions are visible. If one of them is clicked, to make it active, it is "unshaded" or "maximized". Other windows in accordion are displaced around top or bottom edge.',
       	    open: false,
        },
        {
            question: 'When to use accordion components ?',
       	    answer: 'Several windows are stacked on each other. All of them are "shaded", so only their captions are visible. If one of them is clicked, to make it active, it is "unshaded" or "maximized". Other windows in accordion are displaced around top or bottom edge.',
       	    open: false,
        },
        {
       	    question: 'How can it be defined ?',
       	    answer: 'Several windows are stacked on each other. All of them are "shaded", so only their captions are visible. If one of them is clicked, to make it active, it is "unshaded" or "maximized". Other windows in accordion are displaced around top or bottom edge.',
       	    open: false,
        },
        {
            question: 'When to use accordion components ?',
            answer: 'Several windows are stacked on each other. All of them are "shaded", so only their captions are visible. If one of them is clicked, to make it active, it is "unshaded" or "maximized". Other windows in accordion are displaced around top or bottom edge.',
            open: false,
        }
    ]
  },

  methods: {
  	chosen_question (index) {
  	this.questions = this.questions.map( (v,i) => {
  	if(index == i){
  	v.open = !v.open;
  	}else {
         v.open = false;
        }
  	return v;
         })
        }
  }
});


