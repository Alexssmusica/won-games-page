
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
// import * as nextImage from "next/image"

// Object.defineProperty(nextImage, "default", {
//   configurable: true,
//   value: props => <img {...props} />
// })
export const parameters = {
	backgrounds: {
		default: 'won-light',
		values: [
			{
				name: 'won-light',
				value: theme.colors.white
			},
			{
				name: 'won-dark',
				value: theme.colors.mainBg
			}
		]
	}
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyles removeBg />
			<Story />
		</ThemeProvider>
	)
]
