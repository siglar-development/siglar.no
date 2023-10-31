<template>
	<div
		class="sm:p-6 w-full max-w-full bg-slate-50 flex flex-col overflow-auto"
		style="position:relative"
	>
		<Carousel
			class="max-w-full sm:mx-auto sm:m-6 sm:shadow-2xl sm:shadow-slate-500 sm:rounded-md mx-auto"
			style="overflow:hidden;width:700px"
		><img
				src="@/assets/launch.png"
				width="100"
				height="100"
			/><img
				src="https://images.wallpaperscraft.com/image/single/pool_building_columns_990136_1600x900.jpg"
				width="100"
				height="100"
			/><img
				src="https://images.wallpaperscraft.com/image/single/starry_sky_night_tree_117028_1600x900.jpg"
				width="100"
				height="100"
			/></Carousel>
		<main
			style="width:100%"
			class="grow"
		>
			<section
				style="width:100%;padding-bottom:120px;padding-top:100px"
				class="text-center"
			>
			</section>
		</main>
	</div>
</template>
<script>
	import Carousel from '@/vueplay/Carousel.vue';
	export default {
		components: {
			Carousel: Carousel
		},
		data: () => ({}),
		methods: {
			open(url) {
				location.href = url;
			}
		}
	};

</script>
<style scoped>
	.logo {
		background-image: url(@/assets/your-logo.png);
	}

	.screenshot {
		background-image: url(@/assets/launch.png);
	}

</style>