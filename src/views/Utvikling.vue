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
				Utvikling
			</h1>
		</header>
		<main class="max-w-screen-sm">
			<section class="mt-8 container">
				<Accordion title="Konsulent tjenester innenfor utvikling av programvare og nettsider.">
					<li>
						Software as a Service
					</li>
					<li>
						Nettbutikker
					</li>
					<li>
						Informative nettsider
					</li>
				</Accordion>
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