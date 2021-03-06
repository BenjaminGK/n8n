import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';

export class EventbriteApi implements ICredentialType {
	name = 'eventbriteApi';
	displayName = 'Eventbrite API';
	properties = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
