<template>
	<div
		class="px-4 py-6"
		:class="{
'bg-slate-50': !darkmode,
'bg-stone-700': darkmode,
'text-slate-900': !darkmode,
'text-slate-50': darkmode
}"
	>
		<header class="max-w-screen-sm mx-auto">
			<h1 class="text-6xl mt-12">
				Design
			</h1>
		</header>
		<main class="max-w-screen-sm mx-auto">
			<section class="container">
				<p class="mt-8 mb-2">
					3D installasjoner, effekter, dekormaling og illustrasjoner.
				</p>
			</section><span>
				Se mer på
			</span><a
				href="https://vedvikdesign.no"
				target="_blank"
			>
				vedvikdesign.no
			</a>
		</main>
	</div>
</template>
<script>
	export default {
		props: ['darkmode'],
		components: {}
	};

</script>
<style scoped></style>