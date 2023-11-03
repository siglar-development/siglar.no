<template>
	<div
		class="px-4 py-6"
		:class="{
'text-slate-900': !darkmode,
'text-slate-50': darkmode
}"
	>
		<header class="max-w-screen-sm">
			<h1 class="text-6xl mt-12">
				Design
			</h1>
		</header>
		<main class="max-w-screen-sm">
			<section class="container">
				<Accordion
					title="3D installasjoner, effekter, dekormaling og illustrasjoner."
					class="text-slate-900 mt-8"
					:open="true"
				><span>
						Se mer på
					</span><a
						href="https://vedvikdesign.no"
						target="_blank"
					>
						vedvikdesign.no
					</a> </Accordion>
			</section>
		</main>
	</div>
</template>
<script>
	import Accordion from '@/vueplay/Accordion.vue';
	export default {
		props: ['darkmode'],
		components: {
			Accordion: Accordion
		}
	};

</script>
<style scoped></style>