import { EntityReference } from '@camberi/firecms';
import { Timestamp } from '@google-cloud/firestore';
import { DateTime } from 'luxon';

export const RECIPIENT_FIRESTORE_PATH = 'recipients';

export enum RecipientProgramStatus {
	Active = 'active',
	Waitlisted = 'waitlisted',
	Designated = 'designated',
	Former = 'former',
}

export enum RecipientMainLanguage {
	Krio = 'kri',
	Mende = 'men',
	Temne = 'tem',
	Limba = 'lia',
	English = 'en',
	Other = 'other',
}

export type Recipient = {
	birth_date: Date;
	calling_name: string;
	communication_mobile_phone: {
		equals_mobile_money: boolean;
		phone: number;
		has_whatsapp: boolean;
	};
	email: string;
	first_name: string;
	gender: string;
	im_link: string;
	im_uid: string;
	is_suspended: boolean;
	insta_handle: string;
	last_name: string;
	main_language: RecipientMainLanguage;
	mobile_money_phone: {
		phone: number;
		has_whatsapp: boolean;
	};
	organisation: EntityReference;
	om_uid: number;
	profession: string;
	progr_status: RecipientProgramStatus;
	si_start_date: Date | Timestamp; //for NGO disabled
	speaks_english: boolean;
	test_recipient: boolean;
	twitter_handle: string;
	im_link_initial: string;
	im_link_regular: string;
};

/**
 * The start date defines the first payment. Afterwards we expect 35 more contributions
 */
export const calcLastPaymentDate = (startDate: Date) => {
	return DateTime.fromObject({
		year: startDate.getFullYear(),
		month: startDate.getMonth() + 1, // month is indexed from 0 in JS
		day: 15,
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0,
	}).plus({
		months: 35,
	});
};
/**
 * How many payments (months) are still left
 */
export const calcPaymentsLeft = (lastPayment: DateTime, now: DateTime = DateTime.now()) => {
	const diff = lastPayment.diff(now, 'months').months;
	return diff >= 0 ? Math.ceil(diff) : Math.floor(diff);
};
