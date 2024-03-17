<script>
  import { Carousel } from 'flowbite-svelte';
  import {images} from './images.js';
</script>

<div class="max-w-4xl">
  <Carousel {images} let:Controls>
    <Controls />
  </Carousel>
</div>

  