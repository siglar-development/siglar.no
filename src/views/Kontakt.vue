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
				Kontakt
			</h1>
		</header>
		<main class="max-w-screen-sm mx-auto">
			<section
				style="margin:auto"
				class="container"
			>
				<p class="mt-8 mb-2">
					Ta kontakt for nærmere samarbeid.
				</p>
				<address class="not-italic mb-12">
					<label for="">
						Krabberødveien 47, 3960 Stathelle
					</label><br /><a
						href="mailto: kontakt@siglar.no"
						target="_blank"
					>
						kontakt@siglar.no
					</a><br /><a
						href="tel: +47 906 10 570"
						target="_blank"
					>
						+47 906 10 570
					</a>
				</address>
			</section>
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