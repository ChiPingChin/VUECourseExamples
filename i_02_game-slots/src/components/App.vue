<script>
import gsap from 'gsap';

import SlotItem from './SlotItem';

function shuffle(array) {
  // eslint-disable-next-line
  for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
}


export default {
  components: {
    SlotItem,
  },
  data() {
    return {
      items: shuffle(Array.from(Array(10).keys())),
      currentPointIndex: -1,
      isGaming: false,
    };
  },
  computed: {
    computedIndex():string {
      return (this.currentPointIndex % 26);
    },
  },
  created() {
    this.itemIndex = 0; // no reactive
  },
  mounted() {
  },
  methods: {
    getItemIndex():string {
      const id:number = this.items[this.itemIndex % 10];
      this.itemIndex += 1;
      return id;
    },
    startGame() {
      console.log('startGame');
      const time:number = 5.0 + Math.random() * 3;
      const value:number = this.currentPointIndex + 100 + (Math.random() * 50 - 25 | 0);
      this.isGaming = true;
      gsap.to(this, time,
        {
          duration: time,
          currentPointIndex: value,
          ease: 'circ.inOut',
          snap: {
            currentPointIndex: 1,
          },
          onComplete: () => {
            this.isGaming = false;
          },
        });
    },
  },

};
</script>

<template>
  <div class="app">
    <div class="container">
      <p>{{ computedIndex }}</p>
      <div class="grid">
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="0"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="1"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="2"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="3"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="4"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="6"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="7"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="8"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="9"
        />

        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="10"
          class="item-right-2"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="11"
          class="item-right-3"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="12"
          class="item-right-4"
        />

        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="22"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="21"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="20"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="19"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="18"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="17"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="16"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="15"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="14"
          class="item-row-5"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="13"
          class="item-row-5"
        />

        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="25"
          class="item-left-2"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="24"
          class="item-left-3"
        />
        <SlotItem
          :id="getItemIndex()"
          :current-point-index="computedIndex"
          :index="23"
          class="item-left-4"
        />
      </div>
      <button
        v-show="!isGaming"
        class="btn btn-lg btn-primary"
        @click="startGame"
      >
        start
      </button>
    </div>
  </div>
</template>


<style lang="scss">
html, body {
  background-color:black;
  color: white;
}
.grid {
  display: grid;
  grid-template-columns: repeat(10, 10%);

  .item-left{
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column: 1 / 2;
  }
  .item-row-5{
    grid-row: 5;
  }
  @for $i from 2 through 4 {
    .item-right-#{$i} {
      grid-row: $i;
      grid-column: 10;
    }
    .item-left-#{$i} {
      grid-row: $i;
      grid-column: 1;
    }
  }
}
</style>
