import { DefaultPageProps } from '@/app/[lang]/[region]';
import { Faq } from '@/app/[lang]/[region]/v2/(home)/(sections)/faq';
import { Quotes } from '@/app/[lang]/[region]/v2/(home)/(sections)/quotes';
import { Translator } from '@socialincome/shared/src/utils/i18n';
import { Approach } from './(sections)/approach';
import { ExplainerVideo } from './(sections)/explainer-video';
import { Journal } from './(sections)/journal';
import { MobileIllustration } from './(sections)/mobile-illustration';
import { MonthlyIncome } from './(sections)/monthly-income';
import { Overview } from './(sections)/overview';
import { RecipientSelection } from './(sections)/recipient-selection';
import { Sdgoals } from './(sections)/sdgoals';
import { Testimonials } from './(sections)/testimonials';

export default async function Page({ params: { lang, region } }: DefaultPageProps) {
	const translator = await Translator.getInstance({
		language: lang,
		namespaces: ['website-(home)', 'website-videos'],
	});
	return (
		<>
			{/*<HeroVideo lang={lang} region={region} />*/}
			<Overview lang={lang} region={region} />
			<MonthlyIncome lang={lang} region={region} />
			<ExplainerVideo lang={lang} region={region} />
			<MobileIllustration lang={lang} region={region} />
			<Faq lang={lang} region={region} />
			<Approach lang={lang} region={region} />
			<Quotes lang={lang} region={region} />
			<RecipientSelection lang={lang} region={region} />
			<Testimonials lang={lang} region={region} />
			<Sdgoals lang={lang} region={region} />
			<Journal lang={lang} region={region} />
		</>
	);
}
