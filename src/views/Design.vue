<template>
	<div
		class="px-8 py-6"
		:class="{
'bg-slate-50': !darkmode,
'bg-stone-700': darkmode,
'text-slate-900': !darkmode,
'text-slate-50': darkmode
}"
	>
		<header class="max-w-screen-sm mx-auto">
			<h1 class="text-6xl mt-12 mb-6">
				Design
			</h1>
		</header>
		<main class="max-w-screen-sm mx-auto">
			<section
				style="margin:auto"
				class="container"
			>
				<h2 class="mt-12 text-3xl pb-6">
					Siglar Development AS
				</h2>
				<p class="mb-11 mt-6">
					Ta kontakt for nærmere samarbeid.
				</p>
				<address class="mb-12">
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