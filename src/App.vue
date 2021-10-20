<template lang='pug'>
div
	span(v-for='item in list') {{ item }}
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	data: () => ({
		list: [
			'a', 'b', 'c',
		],
	}),
})
</script>
