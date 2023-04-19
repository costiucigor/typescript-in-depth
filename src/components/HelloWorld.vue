<script lang="ts" setup>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',


  const mergeSort = (array: number[]): number[] => {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  const merge = (left: number[], right: number[]): number[] => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  const array = generateOneBillionIntegers(); // generate an array of one billion integers
  const sortedArray = mergeSort(array);
});
</script>


<template>
  <div class="hello">
    <h3>

    </h3>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
