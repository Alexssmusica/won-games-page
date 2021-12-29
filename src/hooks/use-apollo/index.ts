import { useMemo } from 'react';
import { Session } from 'next-auth';
import { initializeApollo } from 'utils/apollo';

export function useApollo(initialState = null, session?: Session | null) {
	const store = useMemo(() => initializeApollo(initialState, session), [initialState, session]);
	return store;
}
