<script lang="ts">
	import { Heading } from '$lib/components/elements';
	import { Card } from '$lib/components/elements';
	import contents from '$lib/assets/images/pages/home/contents.png';
	import requirements from '$lib/assets/images/pages/home/requirements.png';
	import support from '$lib/assets/images/pages/home/support.png';
	import website from '$lib/assets/images/pages/home/website.png';
</script>

<div class="bg-gray-100 py-10">
	<div class="container flex flex-col items-center justify-center gap-6">
		<div>
			<Heading
				><span class="inline-block">ぴいてっくが</span><span class="inline-block"
					>お手伝いできること</span
				></Heading
			>
		</div>

		<ul class="grid gap-4 md:grid-cols-2">
			<li class="grid items-stretch">
				<Card
					img={{ src: website, alt: 'Webサイト開発', width: 180, height: 137 }}
					title="Webサイト開発"
				>
					<p>
						リリース後の保守・運用までを考えた最適なWebサイトの構成を提案し制作します。<br />
						ご相談いただければデザイナーのご紹介しデザイン業務から対応することも可能です。
					</p>
				</Card>
			</li>
			<li class="grid items-stretch">
				<Card
					img={{ src: requirements, alt: '要件定義・設計', width: 180, height: 137 }}
					title="要件定義・設計"
				>
					<p>
						ビジネスの本質的な目的から、Webサイトに必要な要件を定義し最適なシステム構成の設計を行います。<br
						/>
						開発の依頼がセットでなくても承ります。
					</p>
				</Card>
			</li>
			<li class="grid items-stretch">
				<Card
					img={{ src: contents, alt: 'コンテンツ運用サポート', width: 180, height: 137 }}
					title="コンテンツ運用サポート"
				>
					<p>
						CMSを使って、専門的な知識が無くてもコンテンツを更新できるWebサイトを提供できます。<br />
						Googleアナリティクスを使ったデータ分析やSEO対策などもサポート可能です。
					</p>
				</Card>
			</li>
			<li class="grid items-stretch">
				<Card
					img={{ src: support, alt: '困ったときの相談', width: 180, height: 137 }}
					title="困ったときの相談"
				>
					<p>
						Webサイトに関して、何か困ったことの相談や考えていることの壁打ち相手としてお気軽にお声がけください。<br
						/>
						今一番必要としていることと解決手段を見つけるお手伝いをいたします。
					</p>
				</Card>
			</li>
		</ul>
	</div>
</div>
