<script lang="ts">
	import { Heading, LinkButton } from '$lib/components/elements';
</script>

<div class="py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading>ぴいてっくに相談する</Heading>
		</div>
		<div
			class="animate-fade-up flex max-w-6xl flex-col items-center justify-center gap-4 border border-gray-300 bg-gray-100 p-6"
		>
			<div class="flex flex-col gap-2 text-center">
				<p>
					<span class="md:inline-block"
						>ぴいてっくにお仕事をご依頼したい方、Webサイトに関してお困りの方、</span
					>
					<span class="md:inline-block"
						>他にもご自身がやりたいことに対してWebサイトで何かできることをお探しの方、</span
					>
					<span class="inline-block sm:inline md:inline-block"
						>Webサイトと向き合う時間をご一緒させてください。</span
					>
				</p>
				<p>
					<span class="inline-block"
						>コミュニケーションはSlack・チャットワーク・Zoom・GoogleMeetなど<span
							class="inline-block">各種ツールにてご対応可能です。</span
						></span
					>
					<span class="inline-block">まずはお問い合わせフォームよりお気軽にご相談ください。</span>
				</p>
			</div>
			<div>
				<LinkButton href="/" text="ぴいてっくに相談する" />
			</div>
		</div>
	</div>
</div>
