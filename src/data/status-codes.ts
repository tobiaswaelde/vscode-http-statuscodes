type StatusCodeGroupCode = '1xx' | '2xx' | '3xx' | '4xx' | '5xx';

export type StatusCodeGroup = {
	code: StatusCodeGroupCode;
	title: string;
	description?: string;
	min: number;
	max: number;
};

export type StatusCode = {
	code: number;
	title: string;
	description?: string;
};

export const STATUS_CODES_GROUPS: StatusCodeGroup[] = [
	{
		code: '1xx',
		title: 'Informational',
		min: 100,
		max: 199,
		description: `This class of status code indicates a provisional response, consisting only of the Status-Line and optional headers, and is terminated by an empty line. There are no required headers for this class of status code. Since HTTP/1.0 did not define any 1xx status codes, servers MUST NOT send a 1xx response to an HTTP/1.0 client except under experimental conditions.

  A client MUST be prepared to accept one or more 1xx status responses prior to a regular response, even if the client does not expect a 100 (Continue) status message. Unexpected 1xx status responses MAY be ignored by a user agent.
  
  Proxies MUST forward 1xx responses, unless the connection between the proxy and its client has been closed, or unless the proxy itself requested the generation of the 1xx response. (For example, if a proxy adds a "Expect: 100-continue" field when it forwards a request, then it need not forward the corresponding 100 (Continue) response(s).)`,
	},
	{
		code: '2xx',
		title: 'Success',
		min: 200,
		max: 299,
		description: `This class of status code indicates that the client's request was successfully received, understood, and accepted.`,
	},
	{
		code: '3xx',
		title: 'Redirection',
		min: 300,
		max: 399,
		description: `This class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request. The action required MAY be carried out by the user agent without interaction with the user if and only if the method used in the second request is GET or HEAD. A client SHOULD detect infinite redirection loops, since such loops generate network traffic for each redirection.

  > Note: previous versions of this specification recommended a maximum of five redirections. Content developers should be aware that there might be clients that implement such a fixed limitation.`,
	},
	{
		code: '4xx',
		title: 'Client Error',
		min: 400,
		max: 499,
		description: `The 4xx class of status code is intended for cases in which the client seems to have erred. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents SHOULD display any included entity to the user.

  If the client is sending data, a server implementation using TCP SHOULD be careful to ensure that the client acknowledges receipt of the packet(s) containing the response, before the server closes the input connection. If the client continues sending data to the server after the close, the server's TCP stack will send a reset packet to the client, which may erase the client's unacknowledged input buffers before they can be read and interpreted by the HTTP application.`,
	},
	{
		code: '5xx',
		title: 'Server Error',
		min: 500,
		max: 599,
		description: `Response status codes beginning with the digit "5" indicate cases in which the server is aware that it has erred or is incapable of performing the request. Except when responding to a HEAD request, the server SHOULD include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition. User agents SHOULD display any included entity to the user. These response codes are applicable to any request method.`,
	},
];

export const STATUS_CODES: StatusCode[] = [
	{ code: 100, title: 'Continue' },
	{ code: 101, title: 'Switching Protocols' },
	{ code: 102, title: 'Processing (WebDAV)' },
	{ code: 200, title: 'OK' },
	{ code: 201, title: 'Continue' },
	{ code: 202, title: 'Continue' },
	{ code: 203, title: 'Continue' },
	{ code: 204, title: 'Continue' },
	{ code: 205, title: 'Continue' },
	{ code: 206, title: 'Continue' },
	{ code: 207, title: 'Continue' },
	{ code: 208, title: 'Continue' },
	{ code: 226, title: 'Continue' },
	{ code: 300, title: 'Continue' },
	{ code: 301, title: 'Continue' },
	{ code: 302, title: 'Continue' },
	{ code: 303, title: 'Continue' },
	{ code: 304, title: 'Continue' },
	{ code: 305, title: 'Continue' },
	{ code: 306, title: 'Continue' },
	{ code: 307, title: 'Continue' },
	{ code: 308, title: 'Continue' },
	{ code: 400, title: 'Continue' },
	{ code: 401, title: 'Continue' },
	{ code: 402, title: 'Continue' },
	{ code: 403, title: 'Continue' },
	{ code: 404, title: 'Continue' },
	{ code: 405, title: 'Continue' },
	{ code: 406, title: 'Continue' },
	{ code: 407, title: 'Continue' },
	{ code: 408, title: 'Continue' },
	{ code: 409, title: 'Continue' },
	{ code: 410, title: 'Continue' },
	{ code: 411, title: 'Continue' },
	{ code: 412, title: 'Continue' },
	{ code: 413, title: 'Continue' },
	{ code: 414, title: 'Continue' },
	{ code: 415, title: 'Continue' },
	{ code: 416, title: 'Continue' },
	{ code: 417, title: 'Continue' },
	{ code: 415, title: 'Continue' },
	{ code: 418, title: 'Continue' },
	{ code: 420, title: 'Continue' },
	{ code: 422, title: 'Continue' },
	{ code: 423, title: 'Continue' },
	{ code: 424, title: 'Continue' },
	{ code: 425, title: 'Continue' },
	{ code: 426, title: 'Continue' },
	{ code: 428, title: 'Continue' },
	{ code: 429, title: 'Continue' },
	{ code: 431, title: 'Continue' },
	{ code: 444, title: 'Continue' },
	{ code: 449, title: 'Continue' },
	{ code: 450, title: 'Continue' },
	{ code: 451, title: 'Continue' },
	{ code: 499, title: 'Continue' },
	{ code: 500, title: 'Continue' },
	{ code: 501, title: 'Continue' },
	{ code: 502, title: 'Continue' },
	{ code: 503, title: 'Continue' },
	{ code: 504, title: 'Continue' },
	{ code: 505, title: 'Continue' },
	{ code: 506, title: 'Continue' },
	{ code: 507, title: 'Continue' },
	{ code: 508, title: 'Continue' },
	{ code: 509, title: 'Continue' },
	{ code: 510, title: 'Continue' },
	{ code: 511, title: 'Continue' },
	{ code: 598, title: 'Continue' },
	{ code: 599, title: 'Continue' },
];
