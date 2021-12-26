import '@testing-library/jest-dom';
import '@babel/plugin-proposal-private-property-in-object';
import '@babel/plugin-proposal-class-properties';
import '@babel/plugin-proposal-private-methods';
import 'jest-styled-components';
import dotenv from 'dotenv';

dotenv.config({
	path: '.env.development',
});

