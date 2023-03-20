// Set the base URL for all API requests
const API_BASE_URL = process.env.DEV_HOST;

// Function to dashboard data
export const admin_overview = async () => {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDFiZDI0M2FkYWQ3ZTM0NGE4NjNiMWUzMzQ2N2EzMjZhMzZhNDcwYzdhODY1OTg1YWExOGI1ZGMyYTViNTlhYTE3ODY4MDk1ODlmNDFhMDUiLCJpYXQiOjE2NzkxNzU2NTUuNTk3NTYyLCJuYmYiOjE2NzkxNzU2NTUuNTk3NTY5LCJleHAiOjE3MTA3OTgwNTUuNTkxNjUyLCJzdWIiOiI5Iiwic2NvcGVzIjpbImFkbWluLWFjdGlvbnMiXX0.ROk3qHML-UctDZ7Pua0WtjzKcRNereQ9fCZwbdBUvhTE6sxPbPSt3MMQBAGHMIKQEIZ48Lw9yT0qOn80weX_6mPwHh98XMbZUfFhmyBBIah-lNL-52JYXnuAccMC_6C46wNCTe4YjSb7-R6ksSsdMAjHopk0NW9dfOHM4otT02yhNTDQJ3-0LYonZBlJMR_D70MQJauXh3R0EUkAzqkPZIdStuunl3v7xY_3zWB6IENRayYDMoo2Md75xherp49Ws8LWA283vyRg8HYIKyiu-NBjcFulggHIXcKlEXgA7gLjNAtfU9jCEsl1HLHkStsr-bFsfZRbqEgkKBxqkemlMnKlVsdFmJeywHxy08ZAFudRdWOtbJSeSJaHUmlkYv72D9hROUR4eYC-d4Re_qV86nPsKSZsvFVxn5YN_DJTD63mMwIEgEohbTs3Vd99SBF5GCtzH1BRNSenIgnpgtUz-rb325CV-NslVoCsqSPYoTOwNQgpq_NRDyQjP7xe-awP7mollGcJD8EriwlApEb5vCYzsA602Hv1eJpPBIspG7kTxsYYM2g-FitQuKuvVl_QXBSNoh1pdDDWdAg5X_BkZLE77w9mVDddLA61Kvpf-7pwrX5p33T5XRhncR3ljdDddzHvX89ktcUbt86K9I4wJJJJRFK5JHKdounMJBU4aWw'
	);
	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	try {
		const response = await fetch(
			API_BASE_URL + 'dashboards/admin/overview',
			requestOptions
		);
		const result = await response.json();
		const data = result.data;
		return { success: true, message: 'Get admin overview data', data };
	} catch (err) {
		console.log(err);
		const message =
      err.response && err.response.data.message
      	? err.response.data.message
      	: err.message;
		return { success: false, message };
	}
};
