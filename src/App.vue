<template>
	<div
		class="border-t-4 w-full"
		style="border-color:#00414C;height:54px"
	>
	</div>
	<div
		class="border-t-2 border-b sticky top-0 z-30"
		:style="'border-color:' + (darkmode ? '#555' : '')"
	>
		<TopMenu
			class="max-w-screen-2xl mx-auto"
			:dark="darkmode"
			@darkmode="darkmode=$event"
			:breakpoint="640"
			style="height:120px"
			:border="'#00414C'"
			:background="'white'"
			:hover="'rgb(248, 248, 248)'"
		>
			<template v-slot:logo=""><router-link to="/"><img
						src="@/assets/logo.png"
						class="pr-4 ml-5 py-4"
						:style="{
 filter: darkmode ? 'invert(100%) hue-rotate(180deg)' : ''
}"
						style="width:160px"
					/></router-link> </template>
			<li :active="$route.path.includes('/okonomi')">
				<router-link to="/okonomi">
					Økonomi
				</router-link>
			</li>
			<li :active="$route.path.includes('/design')">
				<router-link to="/design">
					Design
				</router-link>
			</li>
			<li :active="$route.path.includes('/utvikling')">
				<router-link to="/utvikling">
					Utvikling
				</router-link>
			</li>
			<li :active="$route.path === '/'">
				<router-link to="/">
					Kontakt
				</router-link>
			</li><template v-slot:end-before=""></template>
		</TopMenu>
	</div>
	<div
		class="max-w-screen-2xl mx-auto sm:flex-row flex-col w-full relative flex"
		style="position:relative"
	>
		<router-view
			class="overflow-auto shadow-slate-200 sm:order-2 grow order-3 main-view"
			style="min-height:calc(100vh - 377px)"
			:darkmode="darkmode"
		/>
	</div>
	<footer
		class="inline-flex p-6 w-full"
		:style="{
'background-color': darkmode ? 'rgb(25,25,25)' : 'rgb(250,250,250)',
'color': darkmode ? '#ccc' : '#444', 'box-shadow': darkmode ? '0 50vh 0 50vh rgba(75,75,75,1)' : '0 50vh 0 50vh rgba(240,240,240,1)' }"
		style="height:200px"
	>
		<div class="max-w-screen-2xl w-full mx-auto ">
			<address class="not-italic mt-6 mb-12 mx-auto text-center">
				<span class="block">
					Org. nr. 912000621
				</span><label for="">
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
		</div>
	</footer>
</template>
<script>
	import RightMenu from '@/vueplay/RightMenu.vue';
	import TopMenu from '@/vueplay/TopMenu.vue';
	export default {
		components: {
			RightMenu: RightMenu,
			TopMenu: TopMenu
		},
		data: () => ({
			darkmode: false,
			bgcolor: 'rgba(240,240,240,1)'
		}),
		watch: {
			darkmode(darkmode) {
				document.body.style.backgroundColor = darkmode ? '#4B4B4B' : '#fff';
			}
		}
	};

</script>
<style>
	@media only screen and (max-width: 640px) {
		.main-view {
			min-height: calc(100vh - 360px) !important;
		}
	}

</style>