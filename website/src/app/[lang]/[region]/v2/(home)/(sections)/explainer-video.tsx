import { DefaultParams } from '@/app/[lang]/[region]';
import { VimeoVideo } from '@/components/vimeo-video';
import { Translator } from '@socialincome/shared/src/utils/i18n';
import { BaseContainer, Typography } from '@socialincome/ui';
import { FontColor } from '@socialincome/ui/src/interfaces/color';

export async function ExplainerVideo({ lang, region }: DefaultParams) {
	const translator = await Translator.getInstance({
		language: lang,
		namespaces: ['website-home2', 'website-videos'],
	});

	return (
		<BaseContainer className="my-24">
			<div className="align-center flex flex-col justify-center text-center">
				<div className="mb-16 w-2/5 self-center">
					{translator.t<{ text: string; color?: FontColor }[]>('section-4.title-1').map((title, index) => (
						<Typography as="span" size="xl" key={index} color={title.color}>
							{title.text}
							{index ? '' : <br />}
						</Typography>
					))}
				</div>
				<div className="aspect-video w-80 self-center overflow-hidden rounded-lg">
					<VimeoVideo videoId={Number(translator.t('id.video-02'))} />
				</div>
				<Typography color="accent" size="xs" className="mt-2">
					{translator.t('section-4.cta')}
				</Typography>
			</div>
		</BaseContainer>
	);
}
