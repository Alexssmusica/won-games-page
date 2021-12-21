import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import apolloCache from './apolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({ uri: process.env.NEXT_PUBLIC_API }),
		cache: apolloCache
	});
}

export function initializeApollo(initialState = null) {
	// serve para verificar se já existe uma instância, para não criar outra
	const apolloClientGlobal = apolloClient ?? createApolloClient();

	// se a página usar o apolloClient no lado client
	// hidratamos o estado inicial aqui
	if (initialState) {
		apolloClientGlobal.cache.restore(initialState);
	}

	// sempre inicializando no SSR com cache limpo
	if (typeof window === 'undefined') return apolloClientGlobal;
	// cria o apolloClient se estiver no client side
	apolloClient = apolloClient ?? apolloClientGlobal;

	return apolloClient;
}
