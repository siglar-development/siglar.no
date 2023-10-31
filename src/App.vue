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
		>
			<template v-slot:logo=""><img
					src="@/assets/logo.png"
					class="py-4"
					:style="{
 filter: darkmode ? 'invert(100%) hue-rotate(180deg)' : ''
}"
				/> </template>
			<li :active="$route.path === '/'">
				<router-link to="/">
					Home
				</router-link>
			</li>
			<li :active="$route.path.includes('/about')">
				<router-link to="/about">
					About
				</router-link>
			</li>
			<li :active="$route.path.includes('/more')">
				<span>
					More
				</span>
				<ul>
					<li>List item 1</li>
					<li :active="$route.path.includes('/more/secret')">
						List item 2
						<ul>
							<li :active="$route.path.includes('/more/secret')">
								<router-link to="/more/secret">
									Secret Content
								</router-link>
							</li>
							<li>
								List item 2
							</li>
							<li>List item 3</li>
						</ul>
					</li>
					<li>List item 3</li>
				</ul>
			</li>
			<li :active="$route.path.includes('/contact')">
				<router-link to="/contact">
					Contact
				</router-link>
			</li><template v-slot:end-before=""></template>
		</TopMenu>
	</div>
	<div
		class="max-w-screen-2xl mx-auto max-w-screen sm:flex-row flex-col w-full relative flex"
		style="position:relative"
	>
		<router-view
			class="overflow-auto shadow-slate-200 sm:order-2 grow order-3 main-view"
			style="min-height:calc(100vh - 377px)"
			:darkmode="darkmode"
		/>
	</div>
	<footer
		class="justify-center items-center inline-flex p-6 w-full"
		:style="{ 'background-color': darkmode ? 'rgba(25,25,25,1)' : 'rgba(170,180,190,1)', 'color': darkmode ? '#ccc' : '#444', 'box-shadow': darkmode ? '0 50vh 0 50vh rgba(75,75,75,1)' : '0 50vh 0 50vh rgba(240,240,240,1)' }"
		style="height:200px"
	>
		<h3 class="text-center">
			Footer
		</h3>
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
				document.body.style.backgroundColor = darkmode ? '#4B4B4B' : 'rgba(240,240,240,1)';
			}
		}
	};

</script>
<style>
	body {
		background-color: rgba(240, 240, 240, 1);
	}

	@media only screen and (max-width: 640px) {
		.main-view {
			min-height: calc(100vh - 360px) !important;
		}
	}

</style>